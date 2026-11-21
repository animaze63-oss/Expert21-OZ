---
name: market-sizing
description: "Estimate the size of a market and segment it using Census, BLS QCEW, FRED, Miami-Dade economic reports and AI-adoption surveys. Use when asked how big a market or segment is, or to update docs/01."
metadata:
  used_by:
    - market-research-analyst
---

# Market sizing and data analysis

Used by: `market-research-analyst`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Define the market precisely: geography, industry, company size and offer.
2. Pull base counts from official data (Census County Business Patterns and QuickFacts, BLS QCEW via FRED).
3. Apply filters step by step (size band, target industries, likelihood to buy), with a source or a labeled assumption for each.
4. Multiply by realistic first-year spend to get a serviceable market. Give a low and a high range.
5. Compare with the firm's revenue goal to show the share needed.

## Output template

| Step | Assumption | Source | Result |
|---|---|---|---|

**Serviceable market:** $low-$high. **Share needed for plan:** x%.

## Quality checklist

- [ ] Each filter step is sourced or labeled
- [ ] Ranges, not false precision
- [ ] Same method as docs/01 unless improved

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- Miami-Dade: about 98,400 employer establishments (Census 2023); about 124,000 private establishments (QCEW, late 2025); about 749,000 nonemployer businesses.
- 77% of U.S. SMBs used AI regularly in January 2026 (Intuit QuickBooks). 70% of owners want more training (Thryv 2026).
- docs/01 estimate: serviceable market of about $12M-$48M a year in Miami-Dade.
