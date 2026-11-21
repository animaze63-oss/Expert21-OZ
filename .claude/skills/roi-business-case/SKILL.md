---
name: roi-business-case
description: "Estimate hours saved, revenue gained, cost and payback for an automation, a hire, a marketing spend or any investment, using conservative assumptions. Use whenever a recommendation needs a value or ROI justification."
metadata:
  used_by:
    - chief-strategy-advisor
    - real-estate-expert
    - healthcare-practice-expert
    - legal-industry-expert
    - logistics-trade-expert
    - hospitality-expert
    - financial-services-expert
    - ai-solutions-architect
    - business-process-analyst
    - cfo-financial-modeler
    - sales-bd-lead
---

# ROI and business-case modeling

Used by: `chief-strategy-advisor`, `real-estate-expert`, `healthcare-practice-expert`, `legal-industry-expert`, `logistics-trade-expert`, `hospitality-expert`, `financial-services-expert`, `ai-solutions-architect`, `business-process-analyst`, `cfo-financial-modeler`, `sales-bd-lead`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Define the baseline: volume (tasks per month), time per task, people involved, error rate, and fully loaded hourly cost (ask for it or assume $35-$60/hr for SMB staff and label the assumption).
2. Define the change: the share of volume automated, the time saved per task, the error reduction, and any revenue effect (for example, faster lead response leading to more conversions).
3. Cost it out: one-time build fee, monthly retainer, tool and usage costs, and internal staff time.
4. Compute monthly value, payback in months, and first-year ROI = (Year-1 value − Year-1 cost) ÷ Year-1 cost.
5. Run a conservative case (half the expected benefit) and show it next to the expected case.
6. State the KPI that will prove the result after go-live.

## Output template

| Item | Expected | Conservative |
|---|---|---|
| Hours saved / month | | |
| Value / month ($) | | |
| One-time cost ($) | | |
| Monthly cost ($) | | |
| Payback (months) | | |
| Year-1 ROI (%) | | |

**Assumptions:** list. **KPI to track:** metric, baseline, target.

## Quality checklist

- [ ] Assumptions are shown and labeled
- [ ] A conservative case is included
- [ ] Costs include tools and the client's own time
- [ ] The KPI is measurable

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- Price benchmarks (docs/04, docs/07): audit $2.5K-$7.5K; workflow build $7.5K-$25K; retainer $2.5K-$8K/mo; bootcamp $1.5K-$5K.
- Example from the pricing research: 40 hrs/mo saved × $40/hr = $19.2K/yr against a $12K build gives 60% Year-1 ROI.
