---
name: lead-research-crm
description: "Build and maintain target account lists (by industry, size and location), research prospects and triggers, and keep the CRM pipeline clean and current. Use for prospecting, account planning and pipeline reviews."
metadata:
  used_by:
    - sales-bd-lead
---

# Lead research and CRM hygiene

Used by: `sales-bd-lead`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Define the ideal-client filter: industry, 10-250 employees, Miami-Dade/Broward/Palm Beach, systems in use, signs of the target pain (for example, slow lead response).
2. Build the list from public sources (company websites, Google Maps, association directories, Sunbiz, LinkedIn) and B2B data tools if available. Respect site terms and privacy.
3. Enrich each account with the decision maker, systems, a trigger (hiring, expansion, a bad-review pattern), and a personalization hook.
4. Score and tier the accounts (A/B/C).
5. Keep the CRM clean: deal stages, next steps with dates, no stale deals (older than 30 days with no activity get closed or re-engaged).

## Output template

| Account | Industry | Size | Decision maker | Systems | Trigger / hook | Tier |
|---|---|---|---|---|---|---|

## Quality checklist

- [ ] Fits the ideal-client profile
- [ ] Each A-tier account has a real hook
- [ ] No scraping that breaks a site's terms
- [ ] Pipeline has next steps
