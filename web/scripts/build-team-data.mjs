#!/usr/bin/env node
// Build-time step: read the agent team from this repository and write two files:
//   src/generated/team.json      - browser-safe roster (names, personas, models, knowledge file names)
//   netlify/data/agents.json     - server-only system prompts (agent prompt + preloaded skills +
//                                  knowledge folder + referenced docs), bundled into the Netlify Function
// Files under any knowledge/*/private/ folder are never read, so they can't leak into a deploy.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const WEB = path.resolve(here, "..");
const REPO = path.resolve(WEB, "..");
const AGENTS_DIR = path.join(REPO, ".claude", "agents");
const SKILLS_DIR = path.join(REPO, ".claude", "skills");
const KNOWLEDGE_DIR = path.join(REPO, "knowledge");
const TEXT_EXT = new Set([".md", ".txt", ".csv", ".json", ".svg", ".yml", ".yaml", ".tsv"]);
const MAX_FILE_BYTES = 200_000;

function splitFrontmatter(text) {
  if (!text.startsWith("---\n")) return [null, text];
  const end = text.indexOf("\n---", 4);
  if (end === -1) return [null, text];
  return [text.slice(4, end), text.slice(end + 4).replace(/^\s*\n/, "")];
}

// Minimal parser for the simple frontmatter shapes this team uses (scalars, JSON-quoted strings, lists).
function parseFrontmatter(src) {
  const data = {};
  let key = null;
  for (const line of src.split("\n")) {
    if (!line.trim()) continue;
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (kv) {
      key = kv[1];
      const val = kv[2].trim();
      data[key] = val === "" ? [] : val.startsWith('"') ? JSON.parse(val) : val;
      continue;
    }
    const item = line.match(/^\s+-\s+(.+)$/);
    if (item && key && Array.isArray(data[key])) data[key].push(item[1].trim());
  }
  return data;
}

function readSkill(name) {
  const p = path.join(SKILLS_DIR, name, "SKILL.md");
  if (!fs.existsSync(p)) throw new Error(`Agent preloads missing skill: ${name}`);
  return splitFrontmatter(fs.readFileSync(p, "utf8"))[1].trim();
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "private") continue; // never bundle private knowledge
      out.push(...walk(full));
    } else {
      out.push(full);
    }
  }
  return out;
}

function readKnowledge(agentName) {
  const files = [];
  for (const full of walk(path.join(KNOWLEDGE_DIR, agentName))) {
    const rel = path.relative(REPO, full).split(path.sep).join("/");
    if (path.basename(full) === "README.md") continue;
    const ext = path.extname(full).toLowerCase();
    const size = fs.statSync(full).size;
    if (!TEXT_EXT.has(ext)) {
      files.push({ path: rel, included: false, note: "binary or unsupported format, not included in the web app" });
      continue;
    }
    if (size > MAX_FILE_BYTES) {
      files.push({ path: rel, included: false, note: `larger than ${MAX_FILE_BYTES / 1000} KB, not included in the web app` });
      continue;
    }
    files.push({ path: rel, included: true, text: fs.readFileSync(full, "utf8") });
  }
  return files;
}

function referencedDocs(body) {
  const refs = new Set(["docs/README.md"]);
  for (const m of body.matchAll(/`(docs\/[\w.-]+\.md)`/g)) refs.add(m[1]);
  return [...refs].filter((p) => fs.existsSync(path.join(REPO, p)));
}

const WEB_PREAMBLE = `# Running in the Experts21-OZ web app

You are answering through the Experts21-OZ web app, not inside Claude Code. That changes a few things:

- You have **no tools**: you can't open files, search the web, run scripts, edit files or delegate to other agents.
- Your **knowledge folder** and the **docs you rely on** are included in full below, inside <knowledge_folder> and <reference_docs>. Treat them as already read. When your instructions say "read your knowledge folder first", that step is done.
- You can't browse the web. Rely on the included documents. Mark any fact that may have changed since they were written (fees, laws, prices, salaries) with "(verify)".
- You can't edit files. Put drafts, tables and plans directly in your reply.
- Ignore instructions about the Agent tool, agent memory, or running scripts; they don't apply here.
- Write in Markdown. Use your persona's first name when you introduce yourself or sign off.

---

`;

const agents = {};
const roster = [];

for (const file of fs.readdirSync(AGENTS_DIR).filter((f) => f.endsWith(".md")).sort()) {
  const raw = fs.readFileSync(path.join(AGENTS_DIR, file), "utf8");
  const [fmSrc, body] = splitFrontmatter(raw);
  if (!fmSrc) continue;
  const fm = parseFrontmatter(fmSrc);
  if (!fm.name || !fm.description) continue;

  const pick = (re) => body.match(re)?.[1]?.trim() ?? "";
  const title = pick(/^# (.+)$/m);
  const first = pick(/^- \*\*Name:\*\* ([^.\n]+)\./m);
  const voice = pick(/^- \*\*Voice:\*\* (.+)$/m);
  const style = pick(/^- \*\*Working style:\*\* (.+)$/m);
  const group = pick(/advisory team, in the (.+?) group\./) || "Team management";
  const mission = pick(/^\*\*Your job:\*\* (.+)$/m) || fm.description;
  const skills = Array.isArray(fm.skills) ? fm.skills : [];
  const knowledge = readKnowledge(fm.name);
  const docs = referencedDocs(body);

  const parts = [WEB_PREAMBLE, body.trim()];
  if (skills.length) {
    parts.push("\n\n---\n\n# Your preloaded skills\n");
    for (const s of skills) parts.push(`\n<skill name="${s}">\n${readSkill(s)}\n</skill>\n`);
  }
  const included = knowledge.filter((k) => k.included);
  parts.push(`\n\n---\n\n<knowledge_folder path="knowledge/${fm.name}/">\n`);
  if (included.length === 0) parts.push("(The folder holds only its README. Carry on with the reference docs.)\n");
  for (const k of included) parts.push(`\n<document path="${k.path}">\n${k.text}\n</document>\n`);
  for (const k of knowledge.filter((k) => !k.included)) parts.push(`\n<document path="${k.path}" omitted="true">${k.note}</document>\n`);
  parts.push("</knowledge_folder>\n");
  parts.push("\n<reference_docs>\n");
  for (const d of docs) parts.push(`\n<document path="${d}">\n${fs.readFileSync(path.join(REPO, d), "utf8")}\n</document>\n`);
  parts.push("</reference_docs>\n");

  agents[fm.name] = { name: fm.name, model: fm.model || "sonnet", title, first, system: parts.join("") };
  roster.push({
    name: fm.name,
    title,
    first,
    voice,
    style,
    model: fm.model || "sonnet",
    group,
    description: fm.description,
    mission,
    skills,
    knowledgeFiles: knowledge.map(({ path: p, included: inc }) => ({ path: p, included: inc })),
  });
}

if (!agents.orchestrator) throw new Error("orchestrator agent not found in .claude/agents");

const GROUP_ORDER = ["Team management", "Leadership & strategy", "Business domain (industry experts)", "Technical",
  "Operations", "Finance", "Legal, compliance & risk", "Marketing & sales"];
roster.sort((a, b) => {
  const ga = GROUP_ORDER.indexOf(a.group), gb = GROUP_ORDER.indexOf(b.group);
  if (ga !== gb) return (ga === -1 ? 99 : ga) - (gb === -1 ? 99 : gb);
  if (a.name === "orchestrator") return -1;
  if (b.name === "orchestrator") return 1;
  return a.title.localeCompare(b.title);
});

const generatedAt = new Date().toISOString();
fs.mkdirSync(path.join(WEB, "src", "generated"), { recursive: true });
fs.mkdirSync(path.join(WEB, "netlify", "data"), { recursive: true });
fs.writeFileSync(path.join(WEB, "src", "generated", "team.json"), JSON.stringify({ generatedAt, agents: roster }, null, 2));
fs.writeFileSync(path.join(WEB, "netlify", "data", "agents.json"), JSON.stringify({ generatedAt, agents }));

const totalChars = Object.values(agents).reduce((n, a) => n + a.system.length, 0);
console.log(`Team data: ${roster.length} agents, ${roster.reduce((n, a) => n + a.knowledgeFiles.length, 0)} knowledge files, ` +
  `${Math.round(totalChars / 1000)}K chars of prompts (server only).`);
