---
name: project-planning
description: "Plan and run client projects: milestones, work breakdown, effort estimates, staffing, risks, status reporting and change orders. Use when turning a SOW into a plan, estimating effort, or when a project is off track."
metadata:
  used_by:
    - delivery-lead
---

# Project planning and scoping

Used by: `delivery-lead`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Break the SOW into deliverables and tasks, with an estimate for each in hours (best, likely, worst).
2. Sequence the tasks with dependencies (access → design approval → build → test → go-live → stabilization) and add 15-20% buffer on fixed-price work.
3. Assign owners and check capacity (engineer utilization target 65-75%).
4. Set checkpoints: kickoff, design sign-off, a midpoint budget check, acceptance.
5. Track actuals against the plan weekly. When scope changes, write a change order before doing the work.
6. Report status as green/amber/red with the reasons and the decisions needed.

## Output template

| Milestone | Owner | Target date | Estimate (h) | Status |
|---|---|---|---|---|

**Status:** G/A/R. **Decisions needed:** … **Change orders:** …

## Quality checklist

- [ ] Estimates include buffer
- [ ] Dependencies on client access called out
- [ ] Change orders written before extra work
