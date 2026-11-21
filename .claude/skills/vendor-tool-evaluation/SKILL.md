---
name: vendor-tool-evaluation
description: "Compare AI, automation and software vendors (LLM providers, n8n/Make/Zapier, voice platforms, vector databases, CRMs) on capability, price, data and privacy terms, BAA availability, reliability and lock-in. Use when choosing a tool for a client or the firm."
metadata:
  used_by:
    - ai-solutions-architect
    - security-privacy-engineer
---

# Vendor and tool evaluation

Used by: `ai-solutions-architect`, `security-privacy-engineer`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Define the requirements: must-haves, nice-to-haves, volume, budget, data sensitivity, and the client's existing stack.
2. Shortlist 2-4 vendors from current official sources. Check current pricing pages.
3. Score each one on the criteria (see the template), including data retention, training-on-data policy, BAA/DPA, SOC 2, uptime, support and export/portability.
4. Estimate the total monthly cost at the expected volume.
5. Recommend one vendor and a fallback, with the migration path.

## Output template

| Criterion | Weight | Vendor A | Vendor B | Vendor C |
|---|---|---|---|---|

**Recommendation and fallback:** … **Monthly cost at volume:** …

## Quality checklist

- [ ] Pricing and terms checked on current official pages
- [ ] Privacy and BAA terms verified
- [ ] A fallback is named
