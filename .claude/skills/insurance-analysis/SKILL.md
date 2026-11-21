---
name: insurance-analysis
description: "Size and select business insurance (tech E&O, cyber, general liability, workers' comp, optional D&O/EPLI) so limits match contract liability caps and client requirements. Use when buying or renewing coverage, or when a client contract asks for insurance."
metadata:
  used_by:
    - insurance-risk-advisor
---

# Insurance coverage analysis

Used by: `insurance-risk-advisor`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. List the exposures: professional errors, data breach, bodily injury/property, employees, contractual requirements.
2. Check client contract requirements (limits, additional insured, waiver of subrogation) and the firm's liability caps (docs/10).
3. Recommend coverage and limits for each policy, with premium ranges (see reference). Note that higher limits and healthcare or finance clients raise premiums.
4. Check that the E&O and cyber limits are at least the largest liability cap the firm accepts, and flag any gap.

## Output template

| Policy | Recommended limit | Est. annual premium | Why | Gaps |
|---|---|---|---|---|

## Quality checklist

- [ ] Limits ≥ contract caps
- [ ] Workers' comp threshold checked
- [ ] Premiums labeled as estimates

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- Small IT consultants average about $75/mo ($899/yr) for tech E&O and about $128/mo ($1,540/yr) for cyber (Insureon). Small-business cyber with $1M limits runs about $1,200-$2,400/yr.
- Mid-market tech E&O at $1M/$1M runs $4K-$12K/yr; $5M/$5M runs $12K-$35K/yr.
- Florida workers' comp is required at 4+ employees (non-construction).
