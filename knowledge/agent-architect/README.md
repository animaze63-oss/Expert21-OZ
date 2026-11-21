# Knowledge folder: Theo, Agent & Skill Architect (meta agent)

`agent-architect` reads **every document in this folder before answering**, and treats it as your most current information, ahead of the general research in `docs/`.

## What belongs here

- Examples of weak or wrong agent answers you want fixed (the prompt plus what was wrong)
- Requests for new agents or skills, and your naming or structure preferences
- Notes on Claude Code features or format changes you want the team to adopt

## What does not belong here

- Passwords, API keys, tokens or any other secrets.
- Unredacted personal, health (PHI) or financial data about clients or their customers. Anonymize it first.
- Anything you would not want everyone with access to this repository to read.

## Sensitive material

Put documents that should stay on your computer in a `private/` subfolder (for example `knowledge/agent-architect/private/`).
`private/` folders are listed in `.gitignore`, so the agent can read them locally but they are never committed or pushed.

## Tips

- Use Markdown, plain text, PDF, CSV or XLSX files.
- Name files with a date and topic, for example `2026-12-01-pricing-decision.md`, so the newest is easy to find.
- Short summaries work better than long dumps. A one-page note of what was decided and why is ideal.
- Remove or archive documents that are out of date, so the agent doesn't rely on stale facts.
