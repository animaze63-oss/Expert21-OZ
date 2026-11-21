---
name: financial-modeling
description: "Read, update and run scenarios on the 3-year financial model in docs/11-financial-model.xlsx (Assumptions, Startup Costs, Staffing, Monthly Model, Annual Summary). Use for any question about revenue, costs, cash, break-even, hiring affordability or scenarios."
metadata:
  used_by:
    - cfo-financial-modeler
    - tax-accounting-advisor
    - pricing-strategist
---

# Financial modeling (xlsx)

Used by: `cfo-financial-modeler`, `tax-accounting-advisor`, `pricing-strategist`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Read the model with openpyxl twice: once for formulas and once with `data_only=True` for values. Never save a workbook that was opened with `data_only=True`, because that replaces every formula with a static value.
2. Change only blue input cells on Assumptions, Startup Costs or Staffing. Never hardcode values into formula cells.
3. For a what-if, save a copy (for example in a scratch folder), change the inputs, and recalculate. If LibreOffice is available: `soffice --headless --convert-to xlsx`, or use a recalc script.
4. Report the Annual Summary rows: revenue, recurring share, net operating income, year-end cash, lowest cash balance and the month it occurs, and headcount.
5. Only overwrite docs/11-financial-model.xlsx when asked to update the base case. Then update the figures quoted in docs/09-business-plan.md to match.
6. Always compare the result with the base case and explain what drove the change.

## Output template

| Metric | Base case | Scenario | Change |
|---|---|---|---|
| Revenue Y1/Y2/Y3 | | | |
| Net operating income Y1/Y2/Y3 | | | |
| Year-end cash Y3 | | | |
| Lowest cash (month) | | | |

**Drivers:** … **Inputs changed:** cell, old value → new value.

## Quality checklist

- [ ] Only input cells were changed
- [ ] The model was recalculated before reading results
- [ ] docs/09 is updated if the base case changed

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- Base case (docs/09): revenue $358K / $981K / $1.93M; pre-tax operating income $34K / $163K / $487K; recurring share 26% / 43% / 52%; $75K starting cash; lowest cash about $61K in month 1.
- Downside (audits at 1/1.5/2 per month with the same hiring dates): cash bottoms out near −$244K. Hiring must follow revenue triggers.
- Key inputs: Assumptions C5:E25 (yearly drivers), C28 starting cash, C30 startup scenario (1 Lean / 2 Standard); Staffing B5:C16 (salary, start month).
