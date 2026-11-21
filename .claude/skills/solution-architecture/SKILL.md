---
name: solution-architecture
description: "Design vendor-neutral AI and automation solutions: components, data flow, model choice, integrations, security boundaries, human-review points, cost per run and failure handling. Use when scoping or designing a client build or an industry package."
metadata:
  used_by:
    - ai-solutions-architect
    - llm-agent-engineer
---

# Solution architecture

Used by: `ai-solutions-architect`, `llm-agent-engineer`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Restate the business goal, KPIs, volumes and constraints (data types, systems, budget, latency, languages).
2. Choose the simplest architecture that works: rules before LLMs, a low-code platform before custom code, and custom code only where needed.
3. Define the components: triggers, orchestration (n8n, Make, Zapier, Python), LLM calls (provider/model, prompts, structured outputs), retrieval, integrations, storage, logging and monitoring.
4. Mark the data flow and trust boundaries: where personal data or PHI travels, which vendors see it, and the retention settings.
5. Place human-review points on high-stakes outputs. Design fallbacks for model or API failure.
6. Estimate cost per run and monthly cost at expected volume, and note pass-through costs.
7. Document how to swap models or vendors to avoid lock-in.

## Output template

**Goal and KPIs:** …

**Diagram:** a Mermaid flowchart of the components and data flow.

| Component | Choice | Why | Alternatives |
|---|---|---|---|

**Data and security:** … **Human review:** … **Failure handling:** … **Cost per run / month:** … **Build effort:** …

## Quality checklist

- [ ] Simplest workable design
- [ ] Data boundaries explicit
- [ ] Human review on high-stakes steps
- [ ] Cost estimated
- [ ] Swap path documented
