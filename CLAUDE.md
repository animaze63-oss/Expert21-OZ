# Experts21-OZ: Agents of Automation

This project is an **AI advisory team for a consultant launching and running a bilingual (EN/ES) AI & workflow-automation consulting firm in Miami, Florida**. The firm serves businesses with 10-250 employees and launches with real estate, healthcare practices and law firms. The team is made of 32 Claude Code project subagents and 40 shared project skills, all working from the research in `docs/`.

## Layout

| Path | What it is |
|---|---|
| `docs/` | Research base and working documents: market, customers, competitors, costs, permits, staffing, marketing and risks (`01`-`08`), the business plan (`09`), the MSA/SOW template (`10`) and the financial model (`11-financial-model.xlsx`). Start at `docs/README.md`. |
| `docs/expert-roster.md` | Every agent, its one-line job, its skills, and a skill matrix. |
| `.claude/agents/<name>.md` | One subagent per expert (frontmatter + system prompt). |
| `.claude/skills/<name>/SKILL.md` | One skill per capability. Skills are preloaded into each agent that lists them (`metadata.used_by` mirrors this). |
| `scripts/validate_team.py` | Checks the agent and skill files, their wiring, the orchestrator routing table and the roster. |

## The team

- **`orchestrator`**: the entry point. It takes any question, picks the right experts, runs them in parallel, cross-checks their work and returns one combined, sourced answer.
- **`agent-architect`**: the meta agent. It creates new agents and skills, improves existing ones, and keeps the team valid.
- **30 experts** in 7 groups:
  - Strategy: `chief-strategy-advisor`, `market-research-analyst`, `competitive-intelligence-analyst`
  - Industry experts: `real-estate-expert`, `healthcare-practice-expert`, `legal-industry-expert`, `logistics-trade-expert`, `hospitality-expert`, `financial-services-expert`
  - Technical: `ai-solutions-architect`, `llm-agent-engineer`, `automation-integration-engineer`, `voice-conversational-ai-specialist`, `security-privacy-engineer`, `ai-quality-evaluator`
  - Operations: `delivery-lead`, `business-process-analyst`, `talent-hr-advisor`, `ai-training-coach`
  - Finance: `cfo-financial-modeler`, `tax-accounting-advisor`, `pricing-strategist`
  - Legal & risk: `business-contracts-attorney`, `regulatory-compliance-officer`, `insurance-risk-advisor`
  - Marketing & sales: `brand-content-strategist`, `seo-digital-marketer`, `sales-bd-lead`, `partnerships-community-manager`, `client-success-manager`

## How to use it

- **Ask the whole team:** "Ask the orchestrator: should we launch with healthcare or law firms first?" or `@"orchestrator (agent)" …`.
- **Run a whole session as the orchestrator:**
  ```bash
  claude --agent orchestrator
  ```
- **Ask one expert directly:** name it, for example "Have the cfo-financial-modeler run a scenario with retainers at $3,500", or `@"pricing-strategist (agent)" …`.
- **Use a skill yourself:** type `/<skill-name>`, for example `/roi-business-case` or `/regulatory-compliance`.
- **Change the team:** "Ask agent-architect to add a construction-industry expert" or "…to improve the sales-bd-lead's outreach skill".

Main Claude: when the user asks a business question about this firm and it needs more than one area of expertise, delegate to `orchestrator` rather than answering alone. Send requests to change agents or skills to `agent-architect`.

## Rules for every agent and every change

- Cite sources (URL + date, or a `docs/` file) and label estimates. Re-verify fees, laws and prices that may have changed.
- Legal, tax and insurance output is a **draft for a licensed Florida professional to review**.
- Never send client names or personal data to outside services without the user's approval.
- Keep the numbers consistent: changes to `docs/11-financial-model.xlsx` must be reflected in `docs/09-business-plan.md`. Edit only blue input cells and recalculate before reading results.
- Only `orchestrator` and `agent-architect` delegate. Expert agents block the `Agent` tool, and advisor-type experts also cannot edit files.
- After adding or editing anything in `.claude/agents` or `.claude/skills`, run `python3 scripts/validate_team.py` and keep it passing. Keep the team between 10 and 50 agents.
- Agent memory for `orchestrator` and `agent-architect` lives in `.claude/agent-memory/` (project scope, committed).
