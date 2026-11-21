---
name: ai-evaluation-testing
description: "Test AI systems (prompts, agents, RAG, voice bots) and AI team agents against defined test sets: accuracy, routing, faithfulness, safety and failure modes, with pass/fail thresholds. Use before go-live, after any change, and to compare models or prompt versions."
metadata:
  used_by:
    - agent-architect
    - llm-agent-engineer
    - ai-quality-evaluator
---

# AI evaluation and testing

Used by: `agent-architect`, `llm-agent-engineer`, `ai-quality-evaluator`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Define what 'good' means for this deliverable, with the SOW acceptance criteria (for example, ≥95% correct routing on 50 cases).
2. Build a test set from real or realistic cases: common cases, edge cases, adversarial and red-team cases (prompt injection, off-topic, abusive), and both languages if bilingual.
3. Define a scoring method for each case: exact match, rubric scored by a person or an LLM judge, or a check for the expected action.
4. Run the tests, record results per case, and compute metrics (accuracy, error types, escalation rate, hallucination rate, latency, cost).
5. Compare against the threshold and the previous version. Find the root causes of failures.
6. Save the test set as a regression suite to rerun after every change.

## Output template

| Metric | Threshold | Result | Pass? |
|---|---|---|---|

**Failures by type:** … **Root causes and fixes:** … **Decision:** ship / fix first.

## Quality checklist

- [ ] Test set includes edge and adversarial cases
- [ ] Thresholds set before running
- [ ] Results reproducible
- [ ] Regression suite saved
