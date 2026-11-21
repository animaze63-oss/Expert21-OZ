---
name: tax-and-payroll
description: "Apply federal and Florida tax and payroll rules to the firm: pass-through vs S-corp election, Florida's 5.5% corporate income tax, sales tax on services, reemployment tax, FICA/FUTA and contractor classification. Use for any tax, payroll or entity question. Output is for CPA review."
metadata:
  used_by:
    - talent-hr-advisor
    - tax-accounting-advisor
---

# Tax and payroll rules

Used by: `talent-hr-advisor`, `tax-accounting-advisor`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Identify the entity and tax status (single- or multi-member LLC; default or S-corp/C-corp election) and the profit level.
2. Apply the rules (see reference) and quantify where possible, for example the self-employment tax saved by an S-corp election at a reasonable salary.
3. Flag classification risk for contractors (control, exclusivity, tools) and recommend W-2 or 1099 status.
4. Mark the output 'For CPA review' and list the questions to ask the CPA.

## Output template

**Situation:** … **Rule(s):** … **Estimate:** … **Recommendation:** … **Questions for the CPA:** … *For CPA review; not tax advice.*

## Quality checklist

- [ ] Florida vs federal kept distinct
- [ ] Numbers labeled as estimates
- [ ] CPA review flagged

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- Florida has no personal income tax. A pass-through LLC pays federal tax only.
- Florida corporate income tax is 5.5% for C-corps, or for LLCs that elect C-corp taxation.
- Professional consulting services are generally not subject to Florida sales tax. Reselling hardware or some software can be. Have a CPA review SaaS or 'information services' resale.
- Payroll: FICA 7.65% employer share; FUTA; Florida reemployment tax on the first $7,000 of each employee's wages, with new employers usually starting at 2.7%.
- Consider an S-corp election once profit exceeds about $80K-$100K (docs/04).
