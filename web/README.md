# Experts21-OZ Web App

A web app for talking to your Experts21-OZ advisory team from any browser:

- **Sidebar:** all 32 agents with their first name, title, personality (voice and working style) and model (`opus`, `sonnet` or `haiku`).
- **Chat window:** talk to any single expert. Conversations are remembered in your browser.
- **Ask the whole team:** Olivia (the orchestrator) picks the right experts, they answer in parallel, and she merges their work into one answer. You can open each expert's brief and answer.

Your Claude API key stays on the server. The browser only talks to a **Netlify Function** (`/api/chat`), and only that function calls the Claude API, using the `ANTHROPIC_API_KEY` environment variable you set in Netlify.

## How it works

```
Browser (React)  ──POST /api/chat──▶  Netlify Function  ──▶  Claude API
   sidebar, chat                       (holds ANTHROPIC_API_KEY,
                                        agent prompts, skills, knowledge)
```

**At build time,** `scripts/build-team-data.mjs` reads this repository:

| Source | Used for |
|---|---|
| `.claude/agents/*.md` | Each agent's instructions, persona and model |
| `.claude/skills/*/SKILL.md` | The skills each agent preloads |
| `knowledge/<agent>/` | Each agent's knowledge folder (text files: `.md`, `.txt`, `.csv`, `.json`, `.svg`, `.yml`). **`private/` folders are never read.** |
| `docs/*.md` | The reference docs each agent's instructions point to |

The script writes two files:
- `src/generated/team.json`: the public roster the browser shows (names, personas, models, knowledge file names).
- `netlify/data/agents.json`: the full prompts, bundled into the function only. The browser never receives them.

**At run time,** each request is one streamed function call:

| Action | What happens | Model |
|---|---|---|
| `chat` | Talk to one expert directly | The agent's model |
| `route` | Olivia chooses up to 5 experts and writes each a brief | opus |
| `expert` | One expert answers its brief (all run in parallel) | The expert's model |
| `synthesize` | Olivia merges the answers into one | opus |

Model aliases map to `claude-opus-5-5`, `claude-sonnet-5-5` and `claude-haiku-5-5`. Opus and sonnet requests enable Claude's server-side refusal fallback (`fallbacks: "default"`), so another model can finish an answer the first model declines. Each agent's prompt is sent with prompt caching, which makes repeat questions to the same agent much cheaper.

> **Time limit.** A Netlify streaming function can run for at most 60 seconds. That's why the team mode is split into separate calls (route, experts, merge), each with its own 60 seconds. If a single answer runs too long, it's cut off at about 55 seconds with a clear message. Ask a narrower question when that happens.

## Deploy to Netlify (step by step)

You need a free Netlify account, access to this GitHub repository, and a Claude API key from the [Claude Console](https://platform.claude.com/).

1. **Import the repository.**
   1. Sign in at [app.netlify.com](https://app.netlify.com).
   2. On your team's **Projects** page, open **Add new project** and choose **Import an existing project**.
   3. Choose **GitHub**, authorize Netlify if asked, and select the `Expert21-OZ` repository.
   4. Netlify reads `netlify.toml` from the repository root, so the build settings fill in automatically: base `web`, command `npm run build`, publish `dist`, functions `netlify/functions`. Leave them as they are.

2. **Add your API key** before or right after the first deploy.
   1. Open the new project, then go to **Project configuration → Environment variables → Add a variable**.
   2. **Key:** `ANTHROPIC_API_KEY`. **Value:** your Claude API key.
   3. Make sure the variable is available to **Functions** (the default "all scopes" works), and mark it as a **secret** if Netlify offers the option.
   4. Save.

3. **Recommended: protect the app with a password.** The site is public, so anyone with the link could use your API credits. Add a second variable:
   - **Key:** `APP_PASSWORD`. **Value:** a password of your choice.

   Visitors then open **⚙ Settings** in the sidebar and type the password once. It's stored in their browser.

4. **Deploy.**
   - Click **Deploy** for the first deploy.
   - If you added variables afterwards, go to **Deploys → Trigger deploy → Deploy project** so the function picks them up.

5. **Open the site** at the URL Netlify shows (something like `https://your-project.netlify.app`).
   1. Pick an expert in the sidebar, or use **Ask the whole team**.
   2. If you see "ANTHROPIC_API_KEY is not set", repeat step 2 and redeploy.

**After that, every push to `main` redeploys automatically,** including pushes that only change an agent, a skill or a knowledge file. `netlify.toml` tells Netlify to always rebuild, because those files live outside `web/`.

### Optional environment variables

| Variable | Default | Purpose |
|---|---|---|
| `APP_PASSWORD` | (none) | Require a password for every request (recommended) |
| `MODEL_OPUS` | `claude-opus-5-5` | Model used for agents marked `opus` |
| `MODEL_SONNET` | `claude-sonnet-5-5` | Model used for agents marked `sonnet` |
| `MODEL_HAIKU` | `claude-haiku-5-5` | Model used for agents marked `haiku` |
| `STREAM_DEADLINE_MS` | `55000` | When to stop a long answer, so it ends before Netlify's 60 s limit |

## Run it on your computer

You need Node.js 20 or newer and the Netlify CLI, which runs the function locally:

```bash
cd web
```

```bash
npm install
```

```bash
echo "ANTHROPIC_API_KEY=your-key-here" > .env
```

```bash
npx netlify-cli dev
```

Then open the URL it prints (usually `http://localhost:8888`). The `.env` file is gitignored, so your key is never committed. `npm run dev:ui` starts only the interface, without the function, so chat requests fail in that mode.

To check a production build without deploying:

```bash
npm run build
```

## What it costs and what to know

- **You pay for Claude API usage** on your key. Opus agents (Olivia, Theo, Rafael, Victor, Beatriz, Alejandra, Samuel) cost the most per answer, sonnet agents less, haiku agents least. A team question makes 2 + (number of experts) calls. See [Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing).
- **Your documents go to Claude.** Agent prompts, skills, knowledge files and referenced docs are sent to the Claude API with each request. Files in `knowledge/*/private/` are never included.
- **No web browsing or file editing in the web app.** In Claude Code the agents can search the web and edit files. Here they answer from the bundled docs and knowledge, and mark time-sensitive facts with "(verify)".
- **Conversations stay in your browser** (local storage). Use **New chat** to clear one.
- **Not supported here:** agent memory, and the agent-architect actually editing files. Theo can still advise you on changes.

## Files

| Path | What it is |
|---|---|
| `../netlify.toml` | Netlify build settings (repository root) |
| `scripts/build-team-data.mjs` | Reads agents, skills, knowledge and docs; writes the generated data |
| `netlify/functions/chat.mts` | The Netlify Function: validation, password check, Claude API calls, streaming |
| `src/App.tsx` | The React interface (sidebar, chat, team mode) |
| `src/api.ts` | Browser client for `/api/chat` (reads the streamed events) |
| `src/styles.css` | Styles, with light/dark mode and a phone layout |
