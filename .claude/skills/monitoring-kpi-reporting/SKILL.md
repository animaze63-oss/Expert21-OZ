---
name: monitoring-kpi-reporting
description: "Track live automations and business KPIs (errors, throughput, cost per run, hours saved, response time, conversion) and produce the monthly client report or internal dashboards. Use for retainer reporting, health checks and marketing or funnel metrics."
metadata:
  used_by:
    - automation-integration-engineer
    - ai-quality-evaluator
    - delivery-lead
    - seo-digital-marketer
    - client-success-manager
---

# Monitoring and KPI reporting

Used by: `automation-integration-engineer`, `ai-quality-evaluator`, `delivery-lead`, `seo-digital-marketer`, `client-success-manager`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Pull this period's data: run logs, error logs, usage and cost, and business metrics from the CRM or other systems.
2. Compute KPIs against the baseline and target from the SOW (hours saved, response time, error rate, cost per run, conversions).
3. Highlight what changed, why, and what was done about it (fixes, improvements, API changes).
4. Recommend next steps: tuning, new workflows (upsell), or risks.
5. Keep it to one page for clients, with a link to details.

## Output template

**Period:** … **Headline:** one sentence of value delivered.

| KPI | Baseline | Target | This period | Trend |
|---|---|---|---|---|

**Incidents and fixes:** … **Improvements shipped:** … **Recommendations:** …

## Quality checklist

- [ ] Compared to the baseline
- [ ] Value stated in the client's terms
- [ ] Incidents disclosed honestly
- [ ] Recommendations are actionable
