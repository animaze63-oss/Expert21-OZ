import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import team from "./generated/team.json";
import { ApiError, callTeamApi } from "./api";
import type { AgentInfo, ChatMessage, ExpertRun, ServerEvent, TeamRun } from "./types";
import { TEAM_KEY } from "./types";

const AGENTS = (team as { agents: AgentInfo[] }).agents;
const BY_NAME: Record<string, AgentInfo> = Object.fromEntries(AGENTS.map((a) => [a.name, a]));
const ORCH = BY_NAME["orchestrator"];
const GROUPS = [...new Set(AGENTS.map((a) => a.group))];

const STORE_CONV = "e21-conversations-v1";
const STORE_PW = "e21-app-password";

const TEAM_EXAMPLES = [
  "We can only focus on one industry for the first 6 months: real estate, healthcare practices or law firms. Which one, and what are the first 30 days of actions?",
  "Design and price a bilingual \"Clinic Front Desk AI\" package for a 3-location dental group in Doral, including HIPAA and TCPA requirements.",
  "Build a 90-day go-to-market plan to sign 3 design-partner clients and 2 paid audits.",
  "It's month 6: $34K/month revenue, 3 retainers, and I'm working 60-hour weeks. Hire an AI engineer, use contractors, or wait?",
];

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
  } catch {
    /* storage unavailable: the app still works, it just won't remember */
  }
}

const uid = () => Math.random().toString(36).slice(2, 10);
const modelClass = (m: string) => (m === "opus" ? "m-opus" : m === "haiku" ? "m-haiku" : "m-sonnet");

function Avatar({ agent, size = 36 }: { agent: AgentInfo; size?: number }) {
  return (
    <span className={`avatar ${modelClass(agent.model)}`} style={{ width: size, height: size, fontSize: size * 0.42 }} aria-hidden>
      {agent.first.charAt(0)}
    </span>
  );
}

function ModelBadge({ model }: { model: string }) {
  return <span className={`badge ${modelClass(model)}`} title={`Runs on Claude ${model}`}>{model}</span>;
}

function Markdown({ text }: { text: string }) {
  return (
    <div className="md">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: (p) => <a {...p} target="_blank" rel="noreferrer" /> }}>
        {text}
      </ReactMarkdown>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState<string>(TEAM_KEY);
  const [conversations, setConversations] = useState<Record<string, ChatMessage[]>>(() => load(STORE_CONV, {}));
  const [password, setPassword] = useState<string>(() => load<string>(STORE_PW, ""));
  const [busy, setBusy] = useState<Record<string, boolean>>({});
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const aborters = useRef<Record<string, AbortController>>({});
  const bottomRef = useRef<HTMLDivElement>(null);

  // Persist finished conversations (strip in-flight flags).
  useEffect(() => {
    const clean = Object.fromEntries(
      Object.entries(conversations).map(([k, msgs]) => [k, msgs.map((m) => ({ ...m, pending: false }))]),
    );
    save(STORE_CONV, clean);
  }, [conversations]);
  useEffect(() => save(STORE_PW, password), [password]);

  const messages = conversations[selected] ?? [];
  const agent = selected === TEAM_KEY ? null : BY_NAME[selected];
  const isBusy = !!busy[selected];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, selected]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return AGENTS;
    return AGENTS.filter((a) =>
      [a.first, a.title, a.name, a.voice, a.group, a.model].some((s) => s.toLowerCase().includes(q)),
    );
  }, [query]);

  const update = useCallback((key: string, id: string, fn: (m: ChatMessage) => ChatMessage) => {
    setConversations((all) => ({ ...all, [key]: (all[key] ?? []).map((m) => (m.id === id ? fn(m) : m)) }));
  }, []);

  const updateTeam = useCallback(
    (id: string, fn: (t: TeamRun) => TeamRun) =>
      update(TEAM_KEY, id, (m) => ({ ...m, team: fn(m.team ?? { phase: "routing", reasoning: "", experts: [] }) })),
    [update],
  );

  const history = (key: string) =>
    (conversations[key] ?? [])
      .filter((m) => !m.error && !m.pending && m.content.trim())
      .map((m) => ({ role: m.role, content: m.content }));

  async function sendDirect(key: string, text: string, signal: AbortSignal) {
    const prior = history(key);
    const answerId = uid();
    setConversations((all) => ({
      ...all,
      [key]: [...(all[key] ?? []), { id: uid(), role: "user", content: text }, { id: answerId, role: "assistant", content: "", agent: key, pending: true }],
    }));
    await callTeamApi(
      { action: "chat", agent: key, messages: [...prior, { role: "user", content: text }] },
      (e) => handleEvent(key, answerId, e),
      { signal, password },
    );
  }

  function handleEvent(key: string, id: string, e: ServerEvent) {
    if (e.type === "text") update(key, id, (m) => ({ ...m, content: m.content + e.text }));
    else if (e.type === "notice") update(key, id, (m) => ({ ...m, notices: [...(m.notices ?? []), e.message] }));
    else if (e.type === "error") update(key, id, (m) => ({ ...m, error: e.message }));
    else if (e.type === "done" && e.stopReason === "refusal")
      update(key, id, (m) => ({ ...m, notices: [...(m.notices ?? []), "The model declined to answer this request."] }));
  }

  async function sendTeam(text: string, signal: AbortSignal) {
    const prior = history(TEAM_KEY);
    const answerId = uid();
    setConversations((all) => ({
      ...all,
      [TEAM_KEY]: [
        ...(all[TEAM_KEY] ?? []),
        { id: uid(), role: "user", content: text },
        { id: answerId, role: "assistant", content: "", agent: "orchestrator", pending: true, team: { phase: "routing", reasoning: "", experts: [] } },
      ],
    }));

    // 1. Olivia picks the experts.
    let chosen: { name: string; brief: string }[] = [];
    await callTeamApi({ action: "route", question: text, history: prior }, (e) => {
      if (e.type === "route") {
        chosen = e.experts;
        updateTeam(answerId, (t) => ({
          ...t,
          phase: "experts",
          reasoning: e.reasoning,
          experts: e.experts.map((x) => ({ name: x.name, brief: x.brief, text: "", status: "running" as const })),
        }));
      } else handleEvent(TEAM_KEY, answerId, e);
    }, { signal, password });
    if (!chosen.length) throw new Error("The orchestrator didn't choose any experts.");

    // 2. The experts work in parallel, each in its own function call.
    const setExpert = (name: string, fn: (x: ExpertRun) => ExpertRun) =>
      updateTeam(answerId, (t) => ({ ...t, experts: t.experts.map((x) => (x.name === name ? fn(x) : x)) }));
    const results = await Promise.allSettled(
      chosen.map(async ({ name, brief }) => {
        let out = "";
        let failed = "";
        await callTeamApi({ action: "expert", agent: name, question: text, brief, history: prior }, (e) => {
          if (e.type === "text") {
            out += e.text;
            setExpert(name, (x) => ({ ...x, text: x.text + e.text }));
          } else if (e.type === "error") failed = e.message;
        }, { signal, password });
        if (failed) throw new Error(failed);
        setExpert(name, (x) => ({ ...x, status: "done" }));
        return { agent: name, text: out };
      }),
    );
    results.forEach((r, i) => {
      if (r.status === "rejected") setExpert(chosen[i].name, (x) => ({ ...x, status: "error", error: String((r.reason as Error)?.message ?? r.reason) }));
    });
    const reports = results.flatMap((r) => (r.status === "fulfilled" && r.value.text.trim() ? [r.value] : []));
    if (signal.aborted) return;
    if (!reports.length) throw new Error("None of the experts returned an answer.");

    // 3. Olivia merges the answers into one.
    updateTeam(answerId, (t) => ({ ...t, phase: "synthesizing" }));
    await callTeamApi({ action: "synthesize", question: text, reports, history: prior }, (e) => handleEvent(TEAM_KEY, answerId, e), { signal, password });
    updateTeam(answerId, (t) => ({ ...t, phase: "done" }));
  }

  async function send(text: string) {
    const key = selected;
    const trimmed = text.trim();
    if (!trimmed || busy[key]) return;
    setDraft("");
    const ctrl = new AbortController();
    aborters.current[key] = ctrl;
    setBusy((b) => ({ ...b, [key]: true }));
    try {
      if (key === TEAM_KEY) await sendTeam(trimmed, ctrl.signal);
      else await sendDirect(key, trimmed, ctrl.signal);
    } catch (err) {
      const aborted = ctrl.signal.aborted;
      const message = aborted ? "Stopped." : err instanceof Error ? err.message : String(err);
      if (err instanceof ApiError && err.status === 401) setShowSettings(true);
      setConversations((all) => {
        const msgs = [...(all[key] ?? [])];
        const last = msgs[msgs.length - 1];
        if (last?.role === "assistant") {
          msgs[msgs.length - 1] = { ...last, error: last.error ?? message, team: last.team ? { ...last.team, phase: aborted ? last.team.phase : "error" } : undefined };
        }
        return { ...all, [key]: msgs };
      });
    } finally {
      setConversations((all) => ({ ...all, [key]: (all[key] ?? []).map((m) => (m.pending ? { ...m, pending: false } : m)) }));
      setBusy((b) => ({ ...b, [key]: false }));
      delete aborters.current[key];
    }
  }

  function select(key: string) {
    setSelected(key);
    setMenuOpen(false);
    setDraft("");
  }

  const examples = agent
    ? [`${agent.first}, introduce yourself and tell me how you can help me.`, `What should I be thinking about first in your area? (${agent.title})`]
    : TEAM_EXAMPLES;

  return (
    <div className={`app ${menuOpen ? "menu-open" : ""}`}>
      {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)} aria-hidden />}
      <aside className="sidebar" aria-label="Experts">
        <div className="brand">
          <span className="logo">E21<b>OZ</b></span>
          <div>
            <div className="brand-name">Experts21-OZ</div>
            <div className="brand-sub">{AGENTS.length} AI experts · Miami</div>
          </div>
        </div>

        <button className={`team-btn ${selected === TEAM_KEY ? "active" : ""}`} onClick={() => select(TEAM_KEY)}>
          <span className="team-icon" aria-hidden>✦</span>
          <span>
            <strong>Ask the whole team</strong>
            <small>{ORCH ? `${ORCH.first} picks the experts and merges their answers` : "Routed through the orchestrator"}</small>
          </span>
        </button>

        <input className="search" type="search" placeholder="Search by name, role or model…" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search experts" />

        <nav className="agent-list">
          {GROUPS.map((g) => {
            const list = filtered.filter((a) => a.group === g);
            if (!list.length) return null;
            return (
              <section key={g}>
                <h3>{g}</h3>
                {list.map((a) => (
                  <button key={a.name} className={`agent ${selected === a.name ? "active" : ""}`} onClick={() => select(a.name)} title={`${a.voice}\n\nWorking style: ${a.style}`}>
                    <Avatar agent={a} />
                    <span className="agent-text">
                      <span className="agent-top">
                        <strong>{a.first}</strong>
                        <ModelBadge model={a.model} />
                        {busy[a.name] && <span className="dot" aria-label="working" />}
                      </span>
                      <span className="agent-title">{a.title}</span>
                      <span className="agent-voice">{a.voice}</span>
                    </span>
                  </button>
                ))}
              </section>
            );
          })}
          {!filtered.length && <p className="empty-search">No expert matches "{query}".</p>}
        </nav>

        <div className="sidebar-foot">
          <button className="link" onClick={() => setShowSettings((s) => !s)}>⚙ Settings</button>
          {showSettings && (
            <div className="settings">
              <label htmlFor="pw">App password</label>
              <input id="pw" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Only if APP_PASSWORD is set" />
              <p>Needed only if the site owner set <code>APP_PASSWORD</code> on Netlify. Stored in this browser only.</p>
            </div>
          )}
          <p className="build-note">Team data built {new Date((team as { generatedAt: string }).generatedAt).toLocaleString()}</p>
        </div>
      </aside>

      <main className="chat">
        <header className="chat-head">
          <button className="menu-btn" onClick={() => setMenuOpen((o) => !o)} aria-label="Show experts">☰</button>
          {agent ? (
            <div className="head-info">
              <Avatar agent={agent} size={44} />
              <div>
                <h1>{agent.first} <span className="head-title">· {agent.title}</span> <ModelBadge model={agent.model} /></h1>
                <p className="head-voice"><b>Voice:</b> {agent.voice}</p>
                <p className="head-voice"><b>Working style:</b> {agent.style}</p>
                <details className="head-more">
                  <summary>{agent.skills.length} skills · {agent.knowledgeFiles.length} knowledge files</summary>
                  <p><b>Job:</b> {agent.mission}</p>
                  <p><b>Skills:</b> {agent.skills.join(", ")}</p>
                  <p><b>Knowledge folder:</b> {agent.knowledgeFiles.length ? agent.knowledgeFiles.map((k) => k.path.split("/").pop() + (k.included ? "" : " (not readable here)")).join(", ") : "empty (README only)"}</p>
                </details>
              </div>
            </div>
          ) : (
            <div className="head-info">
              <span className="team-icon big" aria-hidden>✦</span>
              <div>
                <h1>Ask the whole team</h1>
                <p className="head-voice">{ORCH?.first ?? "The orchestrator"} reads your question, picks the right experts, has them answer in parallel, then merges their work into one sourced answer.</p>
              </div>
            </div>
          )}
          {messages.length > 0 && (
            <button className="link clear" onClick={() => setConversations((all) => ({ ...all, [selected]: [] }))} disabled={isBusy}>New chat</button>
          )}
        </header>

        <div className="messages" aria-live="polite">
          {messages.length === 0 && (
            <div className="welcome">
              <p>{agent ? `Start a conversation with ${agent.first}.` : "Try one of these, or ask your own question:"}</p>
              <div className="examples">
                {examples.map((ex) => (
                  <button key={ex} onClick={() => send(ex)}>{ex}</button>
                ))}
              </div>
            </div>
          )}
          {messages.map((m) => (
            <MessageView key={m.id} message={m} />
          ))}
          <div ref={bottomRef} />
        </div>

        <form className="composer" onSubmit={(e) => { e.preventDefault(); send(draft); }}>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(draft); }
            }}
            placeholder={agent ? `Message ${agent.first}…` : "Ask the whole team…"}
            rows={2}
            aria-label="Message"
          />
          {isBusy ? (
            <button type="button" className="stop" onClick={() => aborters.current[selected]?.abort()}>Stop</button>
          ) : (
            <button type="submit" disabled={!draft.trim()}>Send</button>
          )}
        </form>
      </main>
    </div>
  );
}

function MessageView({ message: m }: { message: ChatMessage }) {
  if (m.role === "user") return <div className="msg user"><div className="bubble">{m.content}</div></div>;
  const who = m.agent ? BY_NAME[m.agent] : undefined;
  return (
    <div className="msg assistant">
      <div className="who">
        {who && <Avatar agent={who} size={26} />}
        <span>{m.team ? `${who?.first ?? "Orchestrator"} · team answer` : who ? `${who.first} · ${who.title}` : "Assistant"}</span>
      </div>
      {m.team && <TeamPanel run={m.team} />}
      {m.content ? <Markdown text={m.content} /> : m.pending && !m.team ? <p className="thinking">Thinking…</p> : null}
      {m.team?.phase === "synthesizing" && !m.content && <p className="thinking">{ORCH?.first ?? "The orchestrator"} is merging the experts' answers…</p>}
      {m.notices?.map((n, i) => <p key={i} className="notice">{n}</p>)}
      {m.error && <p className="error">{m.error}</p>}
    </div>
  );
}

function TeamPanel({ run }: { run: TeamRun }) {
  const label =
    run.phase === "routing" ? `${ORCH?.first ?? "The orchestrator"} is choosing the experts…`
    : run.phase === "experts" ? `${run.experts.filter((x) => x.status === "done").length} of ${run.experts.length} experts have answered`
    : run.phase === "synthesizing" ? "Merging the answers"
    : run.phase === "error" ? "The team run stopped"
    : `${run.experts.length} experts consulted`;
  return (
    <div className="team-run">
      <div className="team-run-head">
        <span className={`phase ${run.phase}`}>{label}</span>
        {run.reasoning && <span className="reasoning">{run.reasoning}</span>}
      </div>
      {run.experts.map((x) => {
        const a = BY_NAME[x.name];
        return (
          <details key={x.name} className={`expert ${x.status}`}>
            <summary>
              {a && <Avatar agent={a} size={22} />}
              <strong>{a?.first ?? x.name}</strong>
              <span className="expert-title">{a?.title}</span>
              <span className={`status ${x.status}`}>{x.status === "running" ? "working…" : x.status === "done" ? "done" : x.status === "error" ? "failed" : "waiting"}</span>
            </summary>
            <p className="brief"><b>Brief:</b> {x.brief}</p>
            {x.text && <Markdown text={x.text} />}
            {x.error && <p className="error">{x.error}</p>}
          </details>
        );
      })}
    </div>
  );
}
