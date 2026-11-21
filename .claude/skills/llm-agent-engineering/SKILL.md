---
name: llm-agent-engineering
description: "Build reliable LLM features: prompts, structured outputs, tool-using agents, guardrails and human handoff on the Anthropic and OpenAI APIs. Use when writing or debugging prompts or agents for a client deliverable or demo."
metadata:
  used_by:
    - llm-agent-engineer
    - automation-integration-engineer
    - voice-conversational-ai-specialist
---

# LLM, prompt and agent engineering

Used by: `llm-agent-engineer`, `automation-integration-engineer`, `voice-conversational-ai-specialist`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Write the task spec: inputs, the required output schema, tone and language (EN/ES), allowed actions, and when to escalate to a human.
2. Draft the system prompt: role, context, rules, output format and examples (a few realistic examples, including edge cases).
3. Use structured outputs (JSON schema or tool calls) for anything another system consumes. Validate them and retry on parse failure.
4. For agents, give each tool a narrow, clear description, limit the tool set, cap the number of steps, and log every action.
5. Add guardrails: refuse out-of-scope requests, never invent prices, policies or legal or medical facts, and cite the source when using retrieval. Escalate when unsure.
6. Use enterprise / zero-data-retention settings for client data. Never put secrets in prompts.
7. Test with ai-evaluation-testing before shipping, and keep prompts under version control.

## Output template

Prompt or agent files, plus a README: purpose, model and settings, input/output schema, guardrails, escalation rules, test results.

## Quality checklist

- [ ] The output schema is validated
- [ ] Escalation paths exist
- [ ] No secrets or client data in the repo
- [ ] Evaluated before ship

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- Use the latest Claude models for new builds where appropriate. Check current model IDs and pricing in the provider documentation, not from memory.
