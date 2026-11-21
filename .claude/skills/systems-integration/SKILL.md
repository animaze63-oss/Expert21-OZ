---
name: systems-integration
description: "Connect business systems such as CRMs (HubSpot, Salesforce, Follow Up Boss), EHR/practice management, ERP/TMS, email, calendar, accounting, SMS and e-signature through APIs, webhooks and connectors. Use when a workflow must read from or write to client systems."
metadata:
  used_by:
    - logistics-trade-expert
    - automation-integration-engineer
---

# Systems integration

Used by: `logistics-trade-expert`, `automation-integration-engineer`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. List each system, the API it offers (REST, GraphQL, webhooks, native connector), the auth method, rate limits, and whether the client's plan includes API access.
2. Map fields between systems: source → target, transformations, required fields, deduplication keys.
3. Choose the integration method: native connector, iPaaS, or custom code. Prefer the most maintainable option.
4. Handle edge cases: pagination, rate limits, partial failures, duplicates, time zones, EN/ES character encoding.
5. Use least-privilege API scopes and a service account per client.
6. Test end to end with sandbox accounts and document the mapping.

## Output template

| System | API / method | Auth | Limits | Fields used |
|---|---|---|---|---|

**Field mapping table**, **edge cases handled**, **test results**.

## Quality checklist

- [ ] API access confirmed on the client's plan
- [ ] Least-privilege scopes
- [ ] Deduplication and rate limits handled
- [ ] Mapping documented
