---
name: rag-knowledge-bases
description: "Build source-grounded retrieval (RAG) over client documents (policies, FAQs, case files, listings) with access controls, citations and freshness. Use when an AI assistant must answer from a client's own documents."
metadata:
  used_by:
    - llm-agent-engineer
---

# RAG and knowledge bases

Used by: `llm-agent-engineer`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Inventory the sources: formats, size, update frequency, owners, sensitivity, and who may see what.
2. Ingest: clean, split into sections by heading (not fixed-size chunks only), and attach metadata (source, date, access group).
3. Index with embeddings plus keyword search (hybrid). Respect access groups when retrieving.
4. Answer only from the retrieved passages, cite them, and say 'I don't know' when nothing relevant is found.
5. Evaluate retrieval (were the right passages found?) and answers (faithful, complete) using ai-evaluation-testing.
6. Schedule re-ingestion, delete removed documents, and log the questions that found no answer.

## Output template

Ingestion pipeline, index config, answer prompt, an evaluation report, and a refresh schedule.

## Quality checklist

- [ ] Access controls enforced at retrieval
- [ ] Answers cite sources
- [ ] No-answer behavior tested
- [ ] Refresh scheduled
