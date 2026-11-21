---
name: team-orchestration
description: "Protocol for routing a question to the right expert agents, running them in parallel, resolving disagreements and merging their work into one answer. Use when coordinating two or more experts from the Experts21-OZ team."
metadata:
  used_by:
    - orchestrator
---

# Team orchestration

Used by: `orchestrator`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Classify the request: decision, analysis, deliverable (document, model, contract, content), or quick fact.
2. Pick the smallest set of experts that covers it (usually 2-5; 1 for a quick fact). Use the routing table in your agent file. Always add `regulatory-compliance-officer` when client data, outbound messaging, healthcare, legal or finance clients are involved, and `cfo-financial-modeler` when money or hiring is involved.
3. Write each expert a self-contained brief: the question, why it matters, the relevant docs, what you need back, and the length limit. Experts do not see this conversation, so include every fact they need.
4. Launch independent experts in parallel in a single message. Run dependent work in sequence (for example, an architect's design before the security review).
5. Compare the answers. Where experts disagree or a number conflicts with docs/, send a targeted follow-up to the expert who owns that topic, or ask a second expert to challenge the claim. Do at most two rounds.
6. Merge everything into one answer using the output template. Credit each finding to the expert it came from, and keep their sources.

## Output template

**Answer:** 2-4 sentences with the recommendation.

**Why:** the key reasons, each tagged with the expert it came from (for example *(CFO)*, *(Compliance)*).

**Details:** sections or a table as needed.

**Where the experts disagreed and how it was resolved:** only if this happened.

**Assumptions and estimates:** what is assumed, labeled as such.

**Risks and open questions:** with an owner for each.

**Next steps:** numbered, each with an owner agent.

**Sources:** de-duplicated list of URLs and docs.

**Experts consulted:** names.

## Quality checklist

- [ ] No more experts than the question needs
- [ ] Every brief was self-contained
- [ ] Conflicts were resolved or shown openly
- [ ] Numbers match docs/ and the financial model, or the change is flagged
- [ ] Legal, tax and insurance output is labeled as a draft for professional review
