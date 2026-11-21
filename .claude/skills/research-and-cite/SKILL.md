---
name: research-and-cite
description: "Find, check and cite facts from the web, government sources, industry data and docs/. Use whenever an answer depends on facts, numbers, prices, laws or competitors, or when docs/ may be out of date."
metadata:
  used_by:
    - orchestrator
    - agent-architect
    - chief-strategy-advisor
    - market-research-analyst
    - competitive-intelligence-analyst
    - real-estate-expert
    - healthcare-practice-expert
    - legal-industry-expert
    - logistics-trade-expert
    - hospitality-expert
    - financial-services-expert
    - tax-accounting-advisor
    - business-contracts-attorney
    - regulatory-compliance-officer
    - seo-digital-marketer
---

# Research and cite

Used by: `orchestrator`, `agent-architect`, `chief-strategy-advisor`, `market-research-analyst`, `competitive-intelligence-analyst`, `real-estate-expert`, `healthcare-practice-expert`, `legal-industry-expert`, `logistics-trade-expert`, `hospitality-expert`, `financial-services-expert`, `tax-accounting-advisor`, `business-contracts-attorney`, `regulatory-compliance-officer`, `seo-digital-marketer`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Check docs/ first (start at docs/README.md). Reuse its facts and sources where they are still current.
2. For anything missing or likely changed (prices, laws, salaries, competitors), search authoritative sources first: official government sites (sunbiz.org, miamidade.gov, miami.gov, flsenate.gov, census.gov, bls.gov), then primary company pages, then reputable press, then everything else.
3. Confirm important numbers with a second source when you can. When sources conflict, report the range and which source you trust more and why.
4. Record each fact with its source URL and the date you accessed it. Mark estimates and your own calculations as such.
5. Never send client names, personal data or other private details to search engines or outside services.

## Output template

**Findings:** bullet facts, each followed by [source](URL) (accessed YYYY-MM-DD).

**Estimates:** calculations, with their inputs shown.

**Conflicts or gaps:** what could not be confirmed.

**Sources:** full list.

## Quality checklist

- [ ] Every number has a source or is labeled an estimate
- [ ] Government fees and laws come from official sources
- [ ] Dates are included for anything time-sensitive
- [ ] No private data was sent to outside services
