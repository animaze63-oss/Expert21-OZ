#!/usr/bin/env python3
"""Validate the Experts21-OZ agent team.

Checks .claude/agents/*.md and .claude/skills/*/SKILL.md against the Claude Code
file format and this team's conventions, and checks that agent <-> skill wiring,
the orchestrator routing table and docs/expert-roster.md are all in sync.

Usage:  python3 scripts/validate_team.py        (exit code 1 if any error)
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AGENTS_DIR = os.path.join(ROOT, ".claude", "agents")
SKILLS_DIR = os.path.join(ROOT, ".claude", "skills")
ROSTER = os.path.join(ROOT, "docs", "expert-roster.md")
ORCH = "orchestrator"
DELEGATORS = {"orchestrator", "agent-architect"}

AGENT_FIELDS = {"name", "description", "tools", "disallowedTools", "model", "permissionMode", "maxTurns",
                "autoCompactWindow", "skills", "mcpServers", "hooks", "memory", "background", "omitClaudeMd",
                "effort", "isolation", "color", "initialPrompt", "experimental"}
SKILL_FIELDS = {"name", "description", "when_to_use", "argument-hint", "arguments", "disable-model-invocation",
                "user-invocable", "allowed-tools", "disallowed-tools", "model", "effort", "context", "agent",
                "background", "hooks", "paths", "shell", "metadata", "license", "compatibility"}
NAME_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")

errors, warnings = [], []


def err(msg):
    errors.append(msg)


def warn(msg):
    warnings.append(msg)


def split_frontmatter(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    if not text.startswith("---\n"):
        return None, text
    end = text.find("\n---", 4)
    if end == -1:
        return None, text
    return text[4:end], text[end + 4:]


def parse_yaml(src, path):
    try:
        import yaml  # PyYAML, if installed
        data = yaml.safe_load(src)
        return data if isinstance(data, dict) else {}
    except ImportError:
        pass
    except Exception as e:  # noqa: BLE001
        err(f"{path}: frontmatter is not valid YAML ({e})")
        return {}
    # Minimal fallback parser for the simple shapes this team uses.
    import json
    data, key, sub = {}, None, None
    for line in src.splitlines():
        if not line.strip():
            continue
        m = re.match(r"^([A-Za-z_][\w-]*):\s*(.*)$", line)
        if m:
            key, val = m.group(1), m.group(2).strip()
            sub = None
            if val == "":
                data[key] = None
            elif val.startswith('"'):
                data[key] = json.loads(val)
            else:
                data[key] = val
            continue
        m = re.match(r"^  ([A-Za-z_][\w-]*):\s*$", line)
        if m and key:
            sub = m.group(1)
            if not isinstance(data.get(key), dict):
                data[key] = {}
            data[key][sub] = []
            continue
        m = re.match(r"^\s+-\s+(.+)$", line)
        if m and key:
            if sub:
                data[key][sub].append(m.group(1).strip())
            else:
                if not isinstance(data.get(key), list):
                    data[key] = []
                data[key].append(m.group(1).strip())
    return data


def as_list(v):
    if v is None:
        return []
    if isinstance(v, list):
        return [str(x).strip() for x in v]
    return [x.strip() for x in re.split(r"[,\s]+", str(v)) if x.strip()]


# ---------------- skills ----------------
skills = {}
if not os.path.isdir(SKILLS_DIR):
    err(".claude/skills/ is missing")
else:
    for d in sorted(os.listdir(SKILLS_DIR)):
        p = os.path.join(SKILLS_DIR, d, "SKILL.md")
        rel = os.path.relpath(p, ROOT)
        if not os.path.isfile(p):
            err(f"{os.path.relpath(os.path.join(SKILLS_DIR, d), ROOT)}: missing SKILL.md")
            continue
        fm, body = split_frontmatter(p)
        if fm is None:
            err(f"{rel}: frontmatter must start on line 1 with ---")
            continue
        data = parse_yaml(fm, rel)
        for k in data:
            if k not in SKILL_FIELDS:
                warn(f"{rel}: unknown frontmatter field '{k}' (Claude Code ignores it)")
        name = data.get("name") or d
        if name != d:
            err(f"{rel}: name '{name}' must equal its directory name '{d}'")
        if not NAME_RE.match(d):
            err(f"{rel}: skill name '{d}' must be kebab-case")
        desc = data.get("description") or ""
        if not desc:
            err(f"{rel}: missing description")
        elif len(desc) + len(data.get("when_to_use") or "") > 1536:
            err(f"{rel}: description + when_to_use exceed 1,536 characters")
        meta = data.get("metadata") or {}
        used_by = as_list(meta.get("used_by")) if isinstance(meta, dict) else []
        dmi = str(data.get("disable-model-invocation", "false")).lower() in {"true", "yes", "on", "1"}
        if len(body.strip()) < 200:
            warn(f"{rel}: body is very short")
        skills[d] = {"used_by": used_by, "dmi": dmi}

# ---------------- agents ----------------
agents = {}
total_desc = 0
if not os.path.isdir(AGENTS_DIR):
    err(".claude/agents/ is missing")
else:
    for fn in sorted(os.listdir(AGENTS_DIR)):
        if not fn.endswith(".md"):
            continue
        p = os.path.join(AGENTS_DIR, fn)
        rel = os.path.relpath(p, ROOT)
        fm, body = split_frontmatter(p)
        if fm is None:
            err(f"{rel}: frontmatter must start on line 1 with --- (otherwise Claude Code treats the file as documentation)")
            continue
        data = parse_yaml(fm, rel)
        for k in data:
            if k not in AGENT_FIELDS:
                warn(f"{rel}: unknown frontmatter field '{k}' (Claude Code ignores it)")
        name = data.get("name")
        if not name:
            err(f"{rel}: missing name")
            continue
        if not NAME_RE.match(name) or ":" in name or len(name) > 256:
            err(f"{rel}: invalid name '{name}' (kebab-case, no ':', at most 256 chars)")
        if name in agents:
            err(f"{rel}: duplicate agent name '{name}'")
        if fn[:-3] != name:
            warn(f"{rel}: file name differs from name '{name}' (team convention: <name>.md)")
        desc = data.get("description") or ""
        if not desc:
            err(f"{rel}: missing description (Claude Code skips the file)")
        total_desc += len(desc)
        sk = as_list(data.get("skills"))
        if len(sk) > 32:
            err(f"{rel}: preloads {len(sk)} skills; only the first 32 load")
        for s in sk:
            if s not in skills:
                err(f"{rel}: preloads unknown skill '{s}'")
            elif skills[s]["dmi"]:
                err(f"{rel}: cannot preload '{s}' because it sets disable-model-invocation: true")
        disallowed = as_list(data.get("disallowedTools"))
        tools = as_list(data.get("tools"))
        if name not in DELEGATORS and "Agent" not in disallowed:
            warn(f"{rel}: expert agents should list Agent in disallowedTools (only {', '.join(sorted(DELEGATORS))} delegate)")
        if name in DELEGATORS and ("Agent" in disallowed or (tools and "Agent" not in tools)):
            err(f"{rel}: '{name}' must be able to use the Agent tool")
        if "Guardrails" not in body and name not in DELEGATORS:
            warn(f"{rel}: body has no Guardrails section")
        agents[name] = {"skills": sk, "body": body}

# ---------------- cross checks ----------------
n = len(agents)
if not 10 <= n <= 50:
    err(f"team has {n} agents; target is 10-50")
if total_desc / 4 > 15000:
    err(f"combined agent descriptions are about {total_desc // 4} tokens (limit about 15,000)")

for s, info in skills.items():
    actual = sorted(a for a, v in agents.items() if s in v["skills"])
    declared = sorted(info["used_by"])
    if actual != declared:
        err(f".claude/skills/{s}/SKILL.md: metadata.used_by {declared} does not match the agents that preload it {actual}")
    if not actual:
        warn(f".claude/skills/{s}: no agent preloads this skill")

if ORCH in agents:
    body = agents[ORCH]["body"]
    for a in agents:
        if a != ORCH and f"`{a}`" not in body:
            err(f".claude/agents/{ORCH}.md: routing table is missing `{a}`")
else:
    err("orchestrator agent is missing")
if "agent-architect" not in agents:
    err("agent-architect (meta agent) is missing")

if os.path.isfile(ROSTER):
    roster = open(ROSTER, encoding="utf-8").read()
    for a in agents:
        if f"`{a}`" not in roster:
            err(f"docs/expert-roster.md does not mention agent `{a}`")
    for s in skills:
        if f"`{s}`" not in roster:
            err(f"docs/expert-roster.md does not mention skill `{s}`")
else:
    err("docs/expert-roster.md is missing")

# ---------------- report ----------------
print(f"Agents: {n}   Skills: {len(skills)}   Agent descriptions: ~{total_desc // 4} tokens")
for w in warnings:
    print(f"WARNING: {w}")
for e in errors:
    print(f"ERROR:   {e}")
print("OK: team is valid." if not errors else f"FAILED: {len(errors)} error(s).")
sys.exit(1 if errors else 0)
