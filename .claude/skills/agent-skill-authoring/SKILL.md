---
name: agent-skill-authoring
description: "Rules and procedure for creating or improving Claude Code project subagents (.claude/agents/*.md) and skills (.claude/skills/<name>/SKILL.md) for this team. Use when adding, editing, auditing or fixing agents or skills."
metadata:
  used_by:
    - agent-architect
---

# Agent and skill authoring

Used by: `agent-architect`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Read CLAUDE.md, docs/expert-roster.md and the closest existing agent or skill to copy its structure.
2. Check for overlap. Prefer improving an existing agent or skill over adding a new one. Keep the team between 10 and 50 agents.
3. Agent file `.claude/agents/<name>.md`: YAML frontmatter (`name` kebab-case with no `:`, a `description` that says when to delegate, `skills:` list of up to 32 skills, and `disallowedTools`). Then the body: role, focus, deliverables, how you work, output format, hand-offs, guardrails.
4. Skill file `.claude/skills/<name>/SKILL.md`: frontmatter `name` (same as the directory), `description` (key use case first, under about 1,000 characters), `metadata.used_by` (the agents that preload it). Then the body: when to use, procedure, output template, quality checklist, reference.
5. Wire it up both ways: add the skill to each agent's `skills:` list and list those agents in the skill's `metadata.used_by`. Never preload a skill that sets `disable-model-invocation: true`.
6. Add the new agent to the orchestrator's routing table and to docs/expert-roster.md (agent table, skill table, matrix).
7. Run `python3 scripts/validate_team.py` and fix every error before finishing.
8. To improve a weak agent: collect the failing example, find the cause (unclear description, missing skill, missing facts, wrong tools), make the smallest fix, and re-test with the same example.

## Output template

**Change summary:** files created or edited.

**Why:** the gap or failure this addresses.

**Wiring:** agent → skills table.

**Validation:** output of `scripts/validate_team.py`.

**Test:** the prompt used and the before/after result.

## Quality checklist

- [ ] Frontmatter starts on line 1 and parses as YAML
- [ ] Names are kebab-case and unique
- [ ] Descriptions say *when* to use, not just what
- [ ] Skill wiring matches in both directions
- [ ] The orchestrator routing table and the roster doc are updated
- [ ] The validator passes

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- Docs: https://code.claude.com/docs/en/sub-agents and https://code.claude.com/docs/en/skills
- Agent frontmatter fields: name, description, tools, disallowedTools, model, skills, memory, effort, maxTurns, color, and others. Unknown fields are silently ignored, so spell field names exactly (camelCase).
- Skill frontmatter fields: name, description, when_to_use, metadata, allowed-tools, disable-model-invocation, user-invocable, context, agent, and others (hyphenated).
- Subagents start with a fresh context: their system prompt, the task brief, CLAUDE.md, and their preloaded skills. They do not see the parent conversation.
- Subagents can nest up to 3 levels below the main conversation by default. Experts on this team block `Agent` so that only the orchestrator and agent-architect delegate.
- Keep combined agent descriptions well under about 15,000 tokens.
