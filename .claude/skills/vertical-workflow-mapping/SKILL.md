---
name: vertical-workflow-mapping
description: "Map an industry's day-to-day processes, find the highest-value automation opportunities and define their KPIs. Use when scoping work for a specific industry (real estate, healthcare practices, law firms, logistics, hospitality, financial services) or building an industry package."
metadata:
  used_by:
    - real-estate-expert
    - healthcare-practice-expert
    - legal-industry-expert
    - logistics-trade-expert
    - hospitality-expert
    - financial-services-expert
    - business-process-analyst
---

# Industry workflow mapping

Used by: `real-estate-expert`, `healthcare-practice-expert`, `legal-industry-expert`, `logistics-trade-expert`, `hospitality-expert`, `financial-services-expert`, `business-process-analyst`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Describe the typical client: size, roles, systems used (CRM, EHR/PMS, TMS, POS and so on), and the language mix (EN/ES).
2. List the core workflows from end to end (for example, lead → showing → offer → close; appointment → visit → billing).
3. For each workflow estimate volume, manual time, error rate, delay cost and how much is repetitive.
4. Score each automation opportunity: value (High/Med/Low), effort (High/Med/Low), risk/compliance (High/Med/Low). Rank by value ÷ effort, with high-risk items flagged.
5. For the top 3, define the automated flow, the human-review points, the integrations needed and the success KPI.
6. Note any industry-specific compliance (HIPAA, Florida Bar, GLBA, TCPA) and any trade associations to target for marketing.

## Output template

**Typical client profile:** …

| Workflow | Volume / mo | Manual time | Pain | Automation idea | Value | Effort | Risk |
|---|---|---|---|---|---|---|---|

**Top 3 opportunities:** flow, human-review point, integrations, KPI.

**Compliance notes:** … **Where to find these clients:** …

## Quality checklist

- [ ] Grounded in how the industry really works
- [ ] Human review is placed on high-stakes steps
- [ ] KPIs are measurable
- [ ] Compliance flagged

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- Launch industries (docs/02): 1) real estate, 2) healthcare practices, 3) law firms. Then: logistics, hospitality, financial services/insurance, professional services.
- Industry packages (docs/07): Real Estate Lead Engine, Clinic Front Desk AI (HIPAA), Law Firm Intake Assistant, Logistics Quote Bot.
