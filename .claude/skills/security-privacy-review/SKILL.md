---
name: security-privacy-review
description: "Review the security and privacy of a client deployment, a vendor or the firm itself: access control, credentials, encryption, AI vendor data terms, logging, retention, backups and incident response. Use before go-live, before onboarding a vendor, and for SOC 2 readiness."
metadata:
  used_by:
    - ai-solutions-architect
    - security-privacy-engineer
---

# Security and privacy review

Used by: `ai-solutions-architect`, `security-privacy-engineer`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Inventory the data (types, sensitivity), the systems, the vendors and who has access.
2. Check access: least privilege, unique accounts, MFA, per-client credentials, offboarding.
3. Check data: encryption in transit and at rest, retention and deletion, backups, no client data in prompts used for training (zero-data-retention / enterprise terms), no secrets in code.
4. Check vendors: security docs (SOC 2 reports), DPA/BAA availability, data residency, subprocessors.
5. Check readiness: logging and monitoring, an incident response plan matching the FIPA 10/30-day and HIPAA timelines, tested contacts.
6. Report findings as Critical / High / Medium / Low, each with a fix and an owner.

## Output template

| # | Area | Finding | Severity | Fix | Owner |
|---|---|---|---|---|---|

**Go-live decision:** Go / Go with conditions / No-go.

## Quality checklist

- [ ] All data types and vendors covered
- [ ] AI vendor data terms checked
- [ ] Incident timelines mapped
- [ ] Clear go-live decision
