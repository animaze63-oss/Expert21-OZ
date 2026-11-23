// Netlify Function: the only place that talks to the Claude API. The API key is read from the
// ANTHROPIC_API_KEY environment variable on Netlify and never reaches the browser.
//
// POST /api/chat with JSON { action, ... } and get back a stream of newline-delimited JSON events:
//   {"type":"text","text":"..."}                       streamed answer text
//   {"type":"route","experts":[...],"reasoning":"..."} the orchestrator's choice of experts (action "route")
//   {"type":"notice","message":"..."}                  e.g. a fallback model took over
//   {"type":"done","stopReason":"...","model":"..."}   end of the answer
//   {"type":"error","message":"..."}                   something went wrong
//
// Actions (each is a separate call, so each gets Netlify's full streaming-function time limit):
//   chat       { agent, messages }                   talk to one agent directly
//   route      { question, history }                 orchestrator picks experts and writes their briefs
//   expert     { agent, question, brief, history }   one expert answers its brief (team mode)
//   synthesize { question, reports, history }        orchestrator merges the experts' answers
import Anthropic from "@anthropic-ai/sdk";
import type { Config, Context } from "@netlify/functions";
import { timingSafeEqual } from "node:crypto";
import teamData from "../data/agents.json";

type AgentRecord = { name: string; model: string; title: string; first: string; system: string };
type ChatTurn = { role: "user" | "assistant"; content: string };
type Report = { agent: string; text: string };

const AGENTS = (teamData as { agents: Record<string, AgentRecord> }).agents;
const EXPERT_NAMES = Object.keys(AGENTS).filter((n) => n !== "orchestrator");

// The agents' `model:` field holds an alias; map it to a current model ID. Override per tier with env vars.
const MODEL_IDS: Record<string, string> = {
  opus: process.env.MODEL_OPUS || "claude-opus-5-5",
  sonnet: process.env.MODEL_SONNET || "claude-sonnet-5-5",
  haiku: process.env.MODEL_HAIKU || "claude-haiku-5-5",
};
// Models that accept the server-side refusal fallback (`fallbacks: "default"`).
const FALLBACK_MODELS = new Set(["claude-opus-5-5", "claude-sonnet-5-5"]);

const LIMITS = { maxTurns: 40, maxChars: 20_000, maxQuestion: 8_000, maxExperts: 5, maxReport: 12_000 };
// Netlify ends a streaming function after 60 s. Stop the model a little earlier so the
// browser gets a clean "the answer was cut short" notice instead of a dropped connection.
const DEADLINE_MS = Number(process.env.STREAM_DEADLINE_MS || 55_000);

const encoder = new TextEncoder();

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
}

function passwordOk(req: Request): boolean {
  const expected = process.env.APP_PASSWORD;
  if (!expected) return true;
  const given = req.headers.get("x-app-password") ?? "";
  const a = Buffer.from(given), b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function cleanTurns(value: unknown): ChatTurn[] | null {
  if (!Array.isArray(value)) return null;
  const turns = value
    .filter((t): t is ChatTurn => !!t && (t.role === "user" || t.role === "assistant") && typeof t.content === "string")
    .slice(-LIMITS.maxTurns)
    .map((t) => ({ role: t.role, content: t.content.slice(0, LIMITS.maxChars) }))
    .filter((t) => t.content.trim().length > 0);
  // The conversation must start with a user turn and end with one.
  while (turns.length && turns[0].role !== "user") turns.shift();
  if (!turns.length || turns[turns.length - 1].role !== "user") return null;
  return turns;
}

function historyText(history: unknown): string {
  const turns = Array.isArray(history) ? cleanTurns([...history, { role: "user", content: "." }]) ?? [] : [];
  const prior = turns.slice(0, -1).slice(-6);
  if (!prior.length) return "";
  return "Earlier in this conversation:\n\n" +
    prior.map((t) => `${t.role === "user" ? "User" : "Team answer"}: ${t.content.slice(0, 3000)}`).join("\n\n") + "\n\n---\n\n";
}

function label(name: string): string {
  const a = AGENTS[name];
  return a ? `${a.first} (${a.title}, \`${name}\`)` : name;
}

type StreamParams = {
  agent: AgentRecord;
  messages: Anthropic.Beta.Messages.BetaMessageParam[];
  maxTokens: number;
  effort: "low" | "medium" | "high";
  format?: Anthropic.Beta.Messages.BetaJSONOutputFormat;
};

// Run one streamed Claude request and forward text deltas to the browser as NDJSON.
async function runModel(client: Anthropic, p: StreamParams, send: (event: object) => void, signal: AbortSignal) {
  const model = MODEL_IDS[p.agent.model] ?? MODEL_IDS.sonnet;
  const useFallback = FALLBACK_MODELS.has(model);
  const stream = client.beta.messages.stream(
    {
      model,
      max_tokens: p.maxTokens,
      // The agent's prompt is identical across requests, so cache it.
      system: [{ type: "text", text: p.agent.system, cache_control: { type: "ephemeral" } }],
      messages: p.messages,
      output_config: { effort: p.effort, ...(p.format ? { format: p.format } : {}) },
      ...(useFallback ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const } : {}),
    },
    { signal },
  );

  let text = "";
  for await (const event of stream) {
    if (event.type === "content_block_start" && event.content_block.type === "fallback") {
      send({ type: "notice", message: `${event.content_block.from.model} declined; ${event.content_block.to.model} continued the answer.` });
    } else if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      text += event.delta.text;
      if (!p.format) send({ type: "text", text: event.delta.text });
    }
  }
  const final = await stream.finalMessage();
  return { text, stopReason: final.stop_reason, model: final.model };
}

function streamResponse(work: (send: (event: object) => void, signal: AbortSignal) => Promise<void>): Response {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), DEADLINE_MS);
  const body = new ReadableStream({
    async start(ctrl) {
      const send = (event: object) => ctrl.enqueue(encoder.encode(JSON.stringify(event) + "\n"));
      try {
        await work(send, controller.signal);
      } catch (err) {
        if (controller.signal.aborted) {
          send({ type: "error", message: "The answer took longer than the time limit and was cut short. Try a narrower question or ask one expert directly." });
        } else if (err instanceof Anthropic.AuthenticationError) {
          send({ type: "error", message: "The Claude API rejected the API key. Check ANTHROPIC_API_KEY in your Netlify environment variables." });
        } else if (err instanceof Anthropic.RateLimitError) {
          send({ type: "error", message: "Rate limited by the Claude API. Wait a moment and try again." });
        } else if (err instanceof Anthropic.APIError) {
          send({ type: "error", message: `Claude API error ${err.status ?? ""}: ${err.message}` });
        } else {
          console.error(err);
          send({ type: "error", message: "Unexpected server error. See the Netlify function log for details." });
        }
      } finally {
        clearTimeout(timer);
        ctrl.close();
      }
    },
    cancel() {
      clearTimeout(timer);
      controller.abort();
    },
  });
  return new Response(body, {
    headers: { "content-type": "application/x-ndjson; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" },
  });
}

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") return json(405, { error: "Use POST." });
  if (!passwordOk(req)) return json(401, { error: "Wrong or missing app password." });
  if (!process.env.ANTHROPIC_API_KEY) {
    return json(500, { error: "ANTHROPIC_API_KEY is not set. Add it in Netlify: Site configuration > Environment variables, then redeploy." });
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return json(400, { error: "Request body must be JSON." });
  }

  // Use exactly the key from Netlify's ANTHROPIC_API_KEY variable (no other credential source).
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const action = body.action;
  const question = typeof body.question === "string" ? body.question.trim().slice(0, LIMITS.maxQuestion) : "";

  if (action === "chat") {
    const agent = AGENTS[String(body.agent)];
    const messages = cleanTurns(body.messages);
    if (!agent) return json(400, { error: "Unknown agent." });
    if (!messages) return json(400, { error: "messages must be a non-empty list ending with a user message." });
    return streamResponse(async (send, signal) => {
      const r = await runModel(client, { agent, messages, maxTokens: 4000, effort: "medium" }, send, signal);
      send({ type: "done", stopReason: r.stopReason, model: r.model });
    });
  }

  if (action === "route") {
    if (!question) return json(400, { error: "question is required." });
    const format: Anthropic.Beta.Messages.BetaJSONOutputFormat = {
      type: "json_schema",
      schema: {
        type: "object",
        additionalProperties: false,
        required: ["reasoning", "experts"],
        properties: {
          reasoning: { type: "string", description: "One or two sentences on why these experts." },
          experts: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              required: ["name", "brief"],
              properties: {
                name: { type: "string", enum: EXPERT_NAMES },
                brief: { type: "string", description: "A self-contained task for this expert, at most 120 words." },
              },
            },
          },
        },
      },
    };
    const prompt = `${historyText(body.history)}You are routing a question in the web app's "Ask the whole team" mode. ` +
      `Don't answer it. Choose the smallest set of experts from your routing table who should work on it ` +
      `(usually 2-${LIMITS.maxExperts}, 1 for a simple question; never more than ${LIMITS.maxExperts}) and write each one a self-contained brief. ` +
      `The experts can't see this conversation, so put every fact they need in the brief. Apply your routing rules of thumb ` +
      `(money → cfo-financial-modeler, client data/outbound messaging/regulated clients → regulatory-compliance-officer, and so on).\n\n` +
      `Question:\n${question}`;
    return streamResponse(async (send, signal) => {
      const r = await runModel(client, {
        agent: AGENTS.orchestrator, messages: [{ role: "user", content: prompt }], maxTokens: 3000, effort: "low", format,
      }, send, signal);
      let parsed: { reasoning?: string; experts?: { name: string; brief: string }[] } = {};
      try { parsed = JSON.parse(r.text); } catch { /* handled below */ }
      const seen = new Set<string>();
      const experts = (parsed.experts ?? [])
        .filter((e) => EXPERT_NAMES.includes(e.name) && !seen.has(e.name) && seen.add(e.name))
        .slice(0, LIMITS.maxExperts)
        .map((e) => ({ name: e.name, brief: String(e.brief).slice(0, 2000) }));
      if (!experts.length) {
        experts.push({ name: "chief-strategy-advisor", brief: question });
        send({ type: "notice", message: "The orchestrator didn't return a usable expert list, so the chief strategy advisor will answer." });
      }
      send({ type: "route", reasoning: parsed.reasoning ?? "", experts });
      send({ type: "done", stopReason: r.stopReason, model: r.model });
    });
  }

  if (action === "expert") {
    const agent = AGENTS[String(body.agent)];
    const brief = typeof body.brief === "string" ? body.brief.slice(0, 2000) : "";
    if (!agent || agent.name === "orchestrator") return json(400, { error: "Unknown expert." });
    if (!question) return json(400, { error: "question is required." });
    const prompt = `${historyText(body.history)}Olivia, the team orchestrator, is coordinating several experts on this question ` +
      `and will merge your answer with theirs.\n\nOriginal question:\n${question}\n\nYour brief from Olivia:\n${brief || question}\n\n` +
      `Answer your brief in your standard output format. Keep it under about 350 words: Olivia needs the substance, not a preamble.`;
    return streamResponse(async (send, signal) => {
      const r = await runModel(client, { agent, messages: [{ role: "user", content: prompt }], maxTokens: 2500, effort: "low" }, send, signal);
      send({ type: "done", stopReason: r.stopReason, model: r.model });
    });
  }

  if (action === "synthesize") {
    if (!question) return json(400, { error: "question is required." });
    const reports: Report[] = Array.isArray(body.reports)
      ? (body.reports as Report[])
          .filter((r) => r && typeof r.agent === "string" && typeof r.text === "string" && AGENTS[r.agent])
          .slice(0, LIMITS.maxExperts)
      : [];
    if (!reports.length) return json(400, { error: "reports are required." });
    const prompt = `${historyText(body.history)}The experts you chose have answered. Merge their work into one answer for the user, ` +
      `using the output template from your team-orchestration skill. Credit findings to experts by first name, keep their sources, ` +
      `and show any disagreement openly. You can't send follow-up questions in this web app, so where experts conflict, ` +
      `say which view you favor and why.\n\nQuestion:\n${question}\n\n` +
      reports.map((r) => `<expert_report from="${label(r.agent)}">\n${r.text.slice(0, LIMITS.maxReport)}\n</expert_report>`).join("\n\n");
    return streamResponse(async (send, signal) => {
      const r = await runModel(client, { agent: AGENTS.orchestrator, messages: [{ role: "user", content: prompt }], maxTokens: 4000, effort: "medium" }, send, signal);
      send({ type: "done", stopReason: r.stopReason, model: r.model });
    });
  }

  return json(400, { error: "Unknown action. Use chat, route, expert or synthesize." });
};

export const config: Config = {
  path: "/api/chat",
};
