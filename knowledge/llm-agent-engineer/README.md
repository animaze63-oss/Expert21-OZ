# Knowledge folder: Nadia, LLM & Agent Engineer

`llm-agent-engineer` reads **every document in this folder before answering**, and treats it as your most current information, ahead of the general research in `docs/`.

## What belongs here

- Prompt libraries and versions that worked
- Evaluation results from past builds
- Model and provider notes (limits, pricing, quirks)
- Client sample documents for RAG (sanitized)

## What does not belong here

- Passwords, API keys, tokens or any other secrets.
- Unredacted personal, health (PHI) or financial data about clients or their customers. Anonymize it first.
- Anything you would not want everyone with access to this repository to read.

## Sensitive material

Put documents that should stay on your computer in a `private/` subfolder (for example `knowledge/llm-agent-engineer/private/`).
`private/` folders are listed in `.gitignore`, so the agent can read them locally but they are never committed or pushed.

## Tips

- Use Markdown, plain text, PDF, CSV or XLSX files.
- Name files with a date and topic, for example `2026-12-01-pricing-decision.md`, so the newest is easy to find.
- Short summaries work better than long dumps. A one-page note of what was decided and why is ideal.
- Remove or archive documents that are out of date, so the agent doesn't rely on stale facts.
