---
name: synthesis-and-briefing
description: "Turn many inputs (research, expert opinions, data) into a short decision brief with options, trade-offs and a clear recommendation. Use when summarizing for the consultant or making a recommendation."
metadata:
  used_by:
    - orchestrator
    - chief-strategy-advisor
    - market-research-analyst
    - competitive-intelligence-analyst
    - business-process-analyst
    - cfo-financial-modeler
---

# Synthesis and briefing

Used by: `orchestrator`, `chief-strategy-advisor`, `market-research-analyst`, `competitive-intelligence-analyst`, `business-process-analyst`, `cfo-financial-modeler`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. State the decision or question in one sentence, and who decides.
2. List 2-3 realistic options, including doing nothing when that is relevant.
3. Compare the options on what matters: impact, cost, time, risk, reversibility, and fit with the plan in docs/09.
4. Recommend one option and say what would change your mind.
5. Lead with the answer. Keep it under one page unless more was asked for.

## Output template

**Recommendation:** one or two sentences.

| Option | Pros | Cons | Cost/time | Risk |
|---|---|---|---|---|

**Why this option:** 3-5 bullets.

**What would change the call:** conditions.

**Next steps:** owner and date.

## Quality checklist

- [ ] Answer first
- [ ] Options are real alternatives, not straw men
- [ ] Trade-offs are explicit
- [ ] Plain language, no hype
