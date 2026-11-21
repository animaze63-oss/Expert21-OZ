# Knowledge folder: Rafael, Chief Strategy Advisor

`chief-strategy-advisor` reads **every document in this folder before answering**, and treats it as your most current information, ahead of the general research in `docs/`.

## What belongs here

- Your goals and constraints (income target, time available, risk appetite)
- Board, mentor or advisor feedback
- Strategy decisions and their rationale
- Notes on new opportunities or threats you have spotted

## What does not belong here

- Passwords, API keys, tokens or any other secrets.
- Unredacted personal, health (PHI) or financial data about clients or their customers. Anonymize it first.
- Anything you would not want everyone with access to this repository to read.

## Sensitive material

Put documents that should stay on your computer in a `private/` subfolder (for example `knowledge/chief-strategy-advisor/private/`).
`private/` folders are listed in `.gitignore`, so the agent can read them locally but they are never committed or pushed.

## Tips

- Use Markdown, plain text, PDF, CSV or XLSX files.
- Name files with a date and topic, for example `2026-12-01-pricing-decision.md`, so the newest is easy to find.
- Short summaries work better than long dumps. A one-page note of what was decided and why is ideal.
- Remove or archive documents that are out of date, so the agent doesn't rely on stale facts.
