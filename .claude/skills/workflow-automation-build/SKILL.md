---
name: workflow-automation-build
description: "Build and document production workflows in n8n, Make, Zapier or Python: triggers, steps, error handling, retries, logging and rollback. Use when implementing an automation for a client or the firm."
metadata:
  used_by:
    - automation-integration-engineer
---

# Workflow automation build

Used by: `automation-integration-engineer`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Confirm the spec from the solution design: trigger, steps, systems, data mapping, volumes and the SLA.
2. Build in a test workspace with test data first. Never develop against live client data.
3. Make each step idempotent (safe to retry). Add retries with backoff, timeouts, and a dead-letter path for failures.
4. Log every run (input ID, outcome, duration, cost) and alert on failures or unusual volume.
5. Store credentials in the platform's credential vault, scoped per client. Never hardcode them.
6. Write a runbook: what it does, how to pause it, how to replay failures, how to roll back, and who to call.
7. Hand over with the client's sign-off against the acceptance criteria.

## Output template

The built workflow (export or code), a runbook, a test log, and a monitoring/alert configuration.

## Quality checklist

- [ ] Idempotent and retry-safe
- [ ] Failures are visible and alerting
- [ ] Credentials are vaulted
- [ ] Runbook complete
