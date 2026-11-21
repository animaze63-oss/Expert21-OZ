# How to Talk to Your Experts

This guide shows how to put questions to the Experts21-OZ advisory team: the whole team at once through the **orchestrator**, or **one expert** directly. It also includes four example prompts that get several experts working on one combined answer. The full list of agents is in [`expert-roster.md`](expert-roster.md).

Run these from a Claude Code session opened in this project folder, so the agents in `.claude/agents/` load.

---

## 1. Ask the whole team (through the orchestrator)

The `orchestrator` reads your question, picks the experts it needs, runs them in parallel, has them check each other's work, and gives you **one answer** with sources. It also lists which experts it consulted.

**Option A: name it in plain language** (simplest)

```text
Ask the orchestrator: what are the three things I should do first to land our first five clients?
```

**Option B: @-mention it** (makes sure the orchestrator runs this task)

```text
@"orchestrator (agent)" what are the three things I should do first to land our first five clients?
```

You can also type the mention by hand as `@agent-orchestrator`.

**Option C: run the whole session as the orchestrator** (best for a long working session)

```bash
claude --agent orchestrator
```

Every message in that session then goes through the orchestrator. You don't need to name it each time.

**Option D: just ask.** `CLAUDE.md` tells Claude to hand any business question that spans more than one area to the orchestrator. Naming the orchestrator (Options A-C) is the more reliable way to make sure it runs.

---

## 2. Ask one specific expert

Use this when you know exactly whose expertise you need and want a quick, focused answer.

**Name the expert in plain language:**

```text
Have the cfo-financial-modeler run a scenario where the average retainer is $3,500 in Year 1 and tell me what happens to cash.
```

**@-mention the expert:**

```text
@"pricing-strategist (agent)" should the AI Opportunity Audit be $3,500 or $5,000 for a 20-person law firm?
```

**Run a whole session as that expert:**

```bash
claude --agent regulatory-compliance-officer
```

**Use one of the experts' skills yourself** (no agent needed). Type a slash command, for example:

```text
/roi-business-case A dental office gets 400 calls a month and spends 3 minutes on each one. An AI receptionist handles 60% of them. Is a $10K build plus a $3K/month retainer worth it?
```

A single expert answers only from its own field. If the question also involves money, law or risk, it lists the teammates who should weigh in under **Hand-offs**. When you see that, send the question to the orchestrator.

---

## 3. Example prompts that bring several experts together

Each prompt below is written for the orchestrator. The "likely experts" lists are based on the orchestrator's routing rules. It makes the final choice and may add or skip experts.

### Example 1: Choose the launch industry

```text
Ask the orchestrator: We can only focus on one industry for the first 6 months. Should it be real estate,
healthcare practices or law firms? Compare how fast each one buys, deal size, compliance burden, how hard
delivery is, and the effect on the financial model. Give me a recommendation and the first 30 days of
actions for the winner.
```

**Likely experts:** `chief-strategy-advisor`, `real-estate-expert`, `healthcare-practice-expert`, `legal-industry-expert`, `regulatory-compliance-officer`, `cfo-financial-modeler`, `sales-bd-lead`

**You get:** a comparison table, one recommended industry, what would change the decision, cash-flow effects drawn from `11-financial-model.xlsx`, and a 30-day action list with an owner for each item.

### Example 2: Design and price a new industry package

```text
Ask the orchestrator: Design a "Clinic Front Desk AI" package for a 3-location dental group in Doral:
a bilingual AI receptionist plus appointment reminders. I need the solution design, HIPAA and TCPA
requirements, a fixed price and a monthly retainer with margin math, the client's ROI, and a draft SOW
using our template in docs/10.
```

**Likely experts:** `healthcare-practice-expert`, `ai-solutions-architect`, `voice-conversational-ai-specialist`, `security-privacy-engineer`, `regulatory-compliance-officer`, `pricing-strategist`, `cfo-financial-modeler`, `business-contracts-attorney`

**You get:** an architecture diagram and parts list, a compliance checklist (BAA, consent, quiet hours), package pricing with expected margins, an ROI table with expected and conservative cases, and a draft SOW marked for attorney review.

### Example 3: Plan the first 90 days of selling

```text
Ask the orchestrator: Build my 90-day go-to-market plan to sign 3 design-partner clients and 2 paid audits.
Include the target account list criteria, a compliant 4-step email sequence in English and Spanish,
3 referral partners to approach, which Miami events to attend, website pages we need, and a weekly budget.
```

**Likely experts:** `sales-bd-lead`, `brand-content-strategist`, `seo-digital-marketer`, `partnerships-community-manager`, `regulatory-compliance-officer` (CAN-SPAM/TCPA), `cfo-financial-modeler`

**You get:** a week-by-week plan, ideal-client filters, a ready-to-send EN/ES email sequence with a compliance check, partner and event shortlists, website page briefs, and a budget that fits the model.

### Example 4: Decide whether to make the first hire

```text
Ask the orchestrator: It's month 6. We have $34K/month in revenue, 3 active retainers, and I'm working
60-hour weeks. Should I hire a full-time AI engineer now, use contractors, or wait? Show the cash impact,
the hiring trigger from the business plan, Miami salary ranges, Florida employer obligations,
and the contract and insurance changes we'd need.
```

**Likely experts:** `cfo-financial-modeler`, `talent-hr-advisor`, `delivery-lead`, `tax-accounting-advisor`, `business-contracts-attorney`, `insurance-risk-advisor`

**You get:** a hire / contract / wait recommendation tied to the revenue triggers in `09-business-plan.md`, a 12-month cash comparison of the options, a pay range, a list of Florida employer requirements (payroll tax, workers' comp threshold, E-Verify threshold), and the contract and insurance changes needed.

---

## 4. Tips for better answers

- **Give real numbers and context.** Include client size, location, systems they use, volumes and deadlines. Experts don't see your earlier conversation unless the orchestrator passes it on.
- **Say what you want back:** "a one-page recommendation", "a table", "a draft I can send", "a draft SOW".
- **Ask for a challenge:** "Have the compliance officer and the CFO challenge the recommendation before you answer."
- **Ask for the detail:** "Show me each expert's full input" if you want more than the merged summary.
- **Don't paste private client data** (names, phone numbers, health or financial details) unless you need to. The agents are told not to send it to outside services without your approval.
- **Professional review:** legal, tax and insurance answers are drafts for a licensed Florida attorney, CPA or insurance broker.
- **Improve the team:** if an answer is weak, say "Ask agent-architect to improve the `<agent-name>` agent using this example."
