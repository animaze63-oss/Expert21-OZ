---
name: risk-assessment
description: "Identify, score and reduce risks for a plan, deliverable, client or the firm, and maintain the risk register in docs/08-risks.md. Use when evaluating any decision, launch, contract or deployment."
metadata:
  used_by:
    - orchestrator
    - chief-strategy-advisor
    - security-privacy-engineer
    - ai-quality-evaluator
    - delivery-lead
    - cfo-financial-modeler
    - regulatory-compliance-officer
    - insurance-risk-advisor
---

# Risk assessment

Used by: `orchestrator`, `chief-strategy-advisor`, `security-privacy-engineer`, `ai-quality-evaluator`, `delivery-lead`, `cfo-financial-modeler`, `regulatory-compliance-officer`, `insurance-risk-advisor`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. List the risks across strategic, financial, legal/compliance, security, delivery, people and reputation.
2. Score each risk: likelihood (Low/Med/High) × impact (Low/Med/High/Very high).
3. For each Medium-or-higher risk, give a specific mitigation, an owner (agent or role), and an early-warning metric.
4. Check against the existing register in docs/08 and reuse its mitigations where they fit.
5. Flag any risk that needs insurance, contract language or a compliance review, and name the agent who should take it.

## Output template

| # | Risk | Likelihood | Impact | Mitigation | Owner | Early warning |
|---|---|---|---|---|---|---|

**Top 3 to act on now:** bullets.

## Quality checklist

- [ ] Risks are specific, not generic
- [ ] Every high risk has an owner and a metric
- [ ] Consistent with docs/08

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- Top firm risks (docs/08): commoditization, uneven cash flow, client data breach, AI errors, regulatory change (FL SB 482 likely returns in 2027), TCPA/FTSA suits, talent cost, scope creep, vendor dependency, key-person risk.
- Warning signs: pipeline below 3× next quarter's target; recurring revenue below 30% after month 9; engineer utilization above 85% or below 50%; fixed-price gross margin below 40%.
