# Expert Roster: Agents and Skills

The advisory team for launching and running the Miami AI & workflow consulting firm described in `docs/01`-`11`. Each **agent** is a Claude Code project subagent in `.claude/agents/<name>.md`. Each **skill** is a project skill in `.claude/skills/<name>/SKILL.md`. A skill can be shared by several agents: it is written once and preloaded into every agent that lists it. See `CLAUDE.md` for how to use the team.

**32 agents, 40 skills.** Agent and skill names are the file names and the names you use to invoke them.

## How the team works

- Ask your question normally, or address it to **`orchestrator`**. The orchestrator picks the experts, runs them in parallel, resolves disagreements and returns one combined answer.
- **`agent-architect`** (the meta agent) creates new agents and skills, improves existing ones, and keeps this roster in sync.
- Every expert cites sources, works from `docs/`, labels estimates, and marks legal, tax and insurance output as drafts for professional review.
- Every agent reads its own `knowledge/<agent-name>/` folder before answering. Each has a first name, a voice and a model ("brain"); see [`agent-brains.md`](agent-brains.md).

## 1. Agents

### Team management

| ID | Agent (file) · name · brain | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A00 | **Team Orchestrator**<br>[`orchestrator`](../.claude/agents/orchestrator.md)<br>Olivia · `opus` | Takes any question, picks the right experts, runs them in parallel, settles their disagreements and returns one combined answer. | README, expert-roster | `team-orchestration`, `synthesis-and-briefing`, `risk-assessment`, `research-and-cite` |
| A31 | **Agent & Skill Architect (meta agent)**<br>[`agent-architect`](../.claude/agents/agent-architect.md)<br>Theo · `opus` | Creates new agents and skills, improves existing ones, and keeps the whole team valid, consistent and documented. | expert-roster, CLAUDE.md | `agent-skill-authoring`, `research-and-cite`, `ai-evaluation-testing` |

### Leadership & strategy

| ID | Agent (file) · name · brain | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A01 | **Chief Strategy Advisor**<br>[`chief-strategy-advisor`](../.claude/agents/chief-strategy-advisor.md)<br>Rafael · `opus` | Your senior strategist: weighs market, financial and risk factors and gives a clear recommendation on firm-level decisions. | 09, 01, 03, 08 | `synthesis-and-briefing`, `risk-assessment`, `research-and-cite`, `roi-business-case` |
| A02 | **Market Research Analyst**<br>[`market-research-analyst`](../.claude/agents/market-research-analyst.md)<br>Priya · `sonnet` | Sizes and segments the Miami, South Florida and LatAm markets and keeps demand data current. | 01, 02 | `research-and-cite`, `market-sizing`, `synthesis-and-briefing` |
| A03 | **Competitive Intelligence Analyst**<br>[`competitive-intelligence-analyst`](../.claude/agents/competitive-intelligence-analyst.md)<br>Diego · `sonnet` | Tracks Miami and national AI consultancies, agencies, IT providers and vendor-native AI, and finds positioning gaps. | 03, 07 | `research-and-cite`, `competitor-profiling`, `pricing-and-packaging`, `synthesis-and-briefing` |

### Business domain (industry experts)

| ID | Agent (file) · name · brain | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A04 | **Real Estate Industry Expert**<br>[`real-estate-expert`](../.claude/agents/real-estate-expert.md)<br>Carmen · `sonnet` | Knows how Miami brokerages, property managers and developers work, and which lead, listing and tenant workflows pay off most. | 02, 07 | `vertical-workflow-mapping`, `roi-business-case`, `research-and-cite`, `case-study-writing` |
| A05 | **Healthcare Practice Expert**<br>[`healthcare-practice-expert`](../.claude/agents/healthcare-practice-expert.md)<br>Ana · `sonnet` | Knows clinic, dental, med-spa and home-health operations (scheduling, intake, insurance checks) and their HIPAA limits. | 02, 05 | `vertical-workflow-mapping`, `roi-business-case`, `regulatory-compliance`, `research-and-cite` |
| A06 | **Legal Industry Expert**<br>[`legal-industry-expert`](../.claude/agents/legal-industry-expert.md)<br>Marisol · `sonnet` | Knows law-firm intake, document and case-status workflows, plus Florida Bar confidentiality and AI-supervision duties. | 02, 05 | `vertical-workflow-mapping`, `roi-business-case`, `regulatory-compliance`, `research-and-cite` |
| A07 | **Logistics & Trade Expert**<br>[`logistics-trade-expert`](../.claude/agents/logistics-trade-expert.md)<br>Jorge · `sonnet` | Knows freight, import/export and port/MIA cargo operations: quoting, shipment status and customs paperwork automation. | 02 | `vertical-workflow-mapping`, `roi-business-case`, `systems-integration`, `research-and-cite` |
| A08 | **Hospitality & Food Service Expert**<br>[`hospitality-expert`](../.claude/agents/hospitality-expert.md)<br>Sofía · `sonnet` | Knows hotel and restaurant-group operations, guest messaging and event-driven demand peaks (Art Basel, the World Cup and others). | 02 | `vertical-workflow-mapping`, `roi-business-case`, `voice-and-messaging-agents`, `research-and-cite` |
| A09 | **Financial Services & Insurance Expert**<br>[`financial-services-expert`](../.claude/agents/financial-services-expert.md)<br>William · `sonnet` | Knows agency, wealth and family-office onboarding, KYC and reporting workflows, and their GLBA/Safeguards compliance needs. | 02, 05 | `vertical-workflow-mapping`, `roi-business-case`, `regulatory-compliance`, `research-and-cite` |

### Technical

| ID | Agent (file) · name · brain | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A10 | **AI Solutions Architect**<br>[`ai-solutions-architect`](../.claude/agents/ai-solutions-architect.md)<br>Kenji · `sonnet` | Designs each client solution end to end so it is secure, vendor-neutral, cost-aware and maintainable. | 07, 08, 10 | `solution-architecture`, `vendor-tool-evaluation`, `security-privacy-review`, `roi-business-case`, `proposal-and-sow-writing` |
| A11 | **LLM & Agent Engineer**<br>[`llm-agent-engineer`](../.claude/agents/llm-agent-engineer.md)<br>Nadia · `sonnet` | Builds the prompts, RAG pipelines and tool-using agents behind each deliverable, with guardrails and human handoff. | 06, 08 | `llm-agent-engineering`, `rag-knowledge-bases`, `ai-evaluation-testing`, `solution-architecture` |
| A12 | **Workflow Automation & Integration Engineer**<br>[`automation-integration-engineer`](../.claude/agents/automation-integration-engineer.md)<br>Marcus · `sonnet` | Connects client systems and builds reliable n8n, Make, Zapier and Python workflows with logging and rollback. | 06 | `workflow-automation-build`, `systems-integration`, `monitoring-kpi-reporting`, `llm-agent-engineering` |
| A13 | **Voice & Conversational AI Specialist**<br>[`voice-conversational-ai-specialist`](../.claude/agents/voice-conversational-ai-specialist.md)<br>Lucía · `sonnet` | Builds bilingual voice, SMS and WhatsApp agents with consent capture, opt-outs and quiet hours built in. | 05, 08 | `voice-and-messaging-agents`, `llm-agent-engineering`, `regulatory-compliance`, `bilingual-content` |
| A14 | **Security & Privacy Engineer**<br>[`security-privacy-engineer`](../.claude/agents/security-privacy-engineer.md)<br>Ivan · `sonnet` | Secures client data and credentials, vets AI vendor data terms, and owns incident response and SOC 2 readiness. | 05, 08 | `security-privacy-review`, `regulatory-compliance`, `vendor-tool-evaluation`, `risk-assessment` |
| A15 | **AI Quality & Evaluation Specialist**<br>[`ai-quality-evaluator`](../.claude/agents/ai-quality-evaluator.md)<br>Grace · `sonnet` | Tests every AI deliverable against a defined test set and sets the accuracy bar a deliverable must clear before go-live. | 08, 10 | `ai-evaluation-testing`, `monitoring-kpi-reporting`, `risk-assessment` |

### Operations

| ID | Agent (file) · name · brain | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A16 | **Delivery & Project Management Lead**<br>[`delivery-lead`](../.claude/agents/delivery-lead.md)<br>Elena · `sonnet` | Turns signed SOWs into on-time, on-budget delivery and manages scope, change orders and resourcing. | 06, 10 | `project-planning`, `proposal-and-sow-writing`, `monitoring-kpi-reporting`, `risk-assessment` |
| A17 | **Business Process Analyst**<br>[`business-process-analyst`](../.claude/agents/business-process-analyst.md)<br>Tomás · `sonnet` | Runs discovery and AI Opportunity Audits: interviews staff, maps processes, and ranks automation opportunities by ROI. | 02, 07 | `process-improvement`, `vertical-workflow-mapping`, `roi-business-case`, `synthesis-and-briefing` |
| A18 | **Talent & HR Advisor**<br>[`talent-hr-advisor`](../.claude/agents/talent-hr-advisor.md)<br>Monique · `sonnet` | Plans hiring tied to revenue triggers, benchmarks Miami pay, and handles contractor policy, onboarding and Florida employer rules. | 06, 09 | `hiring-and-compensation`, `florida-business-licensing`, `tax-and-payroll`, `contract-drafting-review` |
| A19 | **AI Training & Change Management Coach**<br>[`ai-training-coach`](../.claude/agents/ai-training-coach.md)<br>Valeria · `sonnet` | Designs and delivers EN/ES team bootcamps and adoption plans so clients actually use what is built. | 07 | `training-curriculum-design`, `bilingual-content`, `process-improvement` |

### Finance

| ID | Agent (file) · name · brain | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A20 | **CFO & Financial Modeler**<br>[`cfo-financial-modeler`](../.claude/agents/cfo-financial-modeler.md)<br>Victor · `opus` | Owns the financial model, cash runway, scenarios and break-even, and approves hires against their revenue triggers. | 04, 09, 11 | `financial-modeling`, `roi-business-case`, `pricing-and-packaging`, `risk-assessment`, `synthesis-and-briefing` |
| A21 | **Tax & Accounting Advisor**<br>[`tax-accounting-advisor`](../.claude/agents/tax-accounting-advisor.md)<br>Beatriz · `opus` | Advises on entity and S-corp election, Florida and federal taxes, payroll taxes, bookkeeping and annual filings. | 04, 05 | `tax-and-payroll`, `florida-business-licensing`, `financial-modeling`, `research-and-cite` |
| A22 | **Pricing & Packaging Strategist**<br>[`pricing-strategist`](../.claude/agents/pricing-strategist.md)<br>Nico · `sonnet` | Sets and tests the audit, sprint, retainer and bootcamp prices against competitors, margins and willingness to pay. | 03, 04, 07 | `pricing-and-packaging`, `competitor-profiling`, `financial-modeling`, `proposal-and-sow-writing` |

### Legal, compliance & risk

| ID | Agent (file) · name · brain | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A23 | **Business & Contracts Attorney (Florida)**<br>[`business-contracts-attorney`](../.claude/agents/business-contracts-attorney.md)<br>Alejandra · `opus` | Handles LLC formation, licenses and the MSA/SOW/DPA/BAA templates, and reviews any non-standard client contract. | 05, 10 | `contract-drafting-review`, `florida-business-licensing`, `regulatory-compliance`, `research-and-cite` |
| A24 | **Regulatory Compliance Officer**<br>[`regulatory-compliance-officer`](../.claude/agents/regulatory-compliance-officer.md)<br>Samuel · `opus` | Keeps the firm and its deliverables compliant with HIPAA, FIPA, TCPA/FTSA, GLBA, CAN-SPAM and new AI laws. | 05, 08 | `regulatory-compliance`, `ai-law-watch`, `risk-assessment`, `research-and-cite` |
| A25 | **Insurance & Risk Advisor**<br>[`insurance-risk-advisor`](../.claude/agents/insurance-risk-advisor.md)<br>Hannah · `sonnet` | Sizes E&O, cyber, GL and workers' comp coverage, matches it to contract caps, and maintains the risk register. | 04, 08 | `insurance-analysis`, `risk-assessment`, `contract-drafting-review` |

### Marketing & sales

| ID | Agent (file) · name · brain | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A26 | **Brand & Bilingual Content Strategist**<br>[`brand-content-strategist`](../.claude/agents/brand-content-strategist.md)<br>Isabella · `sonnet` | Owns positioning, messaging and the EN/ES content calendar for the website, LinkedIn and workshops. | 03, 07 | `bilingual-content`, `case-study-writing`, `competitor-profiling`, `seo-geo` |
| A27 | **SEO, GEO & Digital Marketing Specialist**<br>[`seo-digital-marketer`](../.claude/agents/seo-digital-marketer.md)<br>Jake · `haiku` | Makes the firm show up in Google and in AI-assistant answers for 'AI consultant Miami' and industry-specific searches, and runs paid tests. | 07 | `seo-geo`, `bilingual-content`, `research-and-cite`, `monitoring-kpi-reporting` |
| A28 | **Sales & Business Development Lead**<br>[`sales-bd-lead`](../.claude/agents/sales-bd-lead.md)<br>Daniela · `sonnet` | Builds target lists, runs compliant outreach and discovery calls, and turns audits into builds and retainers. | 02, 07, 09 | `lead-research-crm`, `compliant-outreach`, `proposal-and-sow-writing`, `roi-business-case`, `pricing-and-packaging` |
| A29 | **Partnerships & Community Manager**<br>[`partnerships-community-manager`](../.claude/agents/partnerships-community-manager.md)<br>Andrés · `haiku` | Recruits referral and vendor partners and runs the monthly workshop and the firm's Miami events calendar. | 07 | `partnership-development`, `event-community-planning`, `bilingual-content`, `contract-drafting-review` |
| A30 | **Client Success & Retainer Manager**<br>[`client-success-manager`](../.claude/agents/client-success-manager.md)<br>Camila · `sonnet` | Onboards clients, sends monthly KPI reports, protects renewals, and finds upsells and case-study candidates. | 07, 08 | `client-success`, `monitoring-kpi-reporting`, `case-study-writing`, `training-curriculum-design` |

## 2. Skills (and which agents use them)

Sorted from most shared to least shared.

| Skill (file) | What it does | Used by | # |
|---|---|---|---|
| [`research-and-cite`](../.claude/skills/research-and-cite/SKILL.md) | Find, check and cite facts from the web, government sources, industry data and docs/. Use whenever an answer depends on facts, numbers, prices, laws or competitors, or when docs/ may be out of date. | `orchestrator`, `agent-architect`, `chief-strategy-advisor`, `market-research-analyst`, `competitive-intelligence-analyst`, `real-estate-expert`, `healthcare-practice-expert`, `legal-industry-expert`, `logistics-trade-expert`, `hospitality-expert`, `financial-services-expert`, `tax-accounting-advisor`, `business-contracts-attorney`, `regulatory-compliance-officer`, `seo-digital-marketer` | 15 |
| [`roi-business-case`](../.claude/skills/roi-business-case/SKILL.md) | Estimate hours saved, revenue gained, cost and payback for an automation, a hire, a marketing spend or any investment, using conservative assumptions. Use whenever a recommendation needs a value or ROI justification. | `chief-strategy-advisor`, `real-estate-expert`, `healthcare-practice-expert`, `legal-industry-expert`, `logistics-trade-expert`, `hospitality-expert`, `financial-services-expert`, `ai-solutions-architect`, `business-process-analyst`, `cfo-financial-modeler`, `sales-bd-lead` | 11 |
| [`risk-assessment`](../.claude/skills/risk-assessment/SKILL.md) | Identify, score and reduce risks for a plan, deliverable, client or the firm, and maintain the risk register in docs/08-risks.md. Use when evaluating any decision, launch, contract or deployment. | `orchestrator`, `chief-strategy-advisor`, `security-privacy-engineer`, `ai-quality-evaluator`, `delivery-lead`, `cfo-financial-modeler`, `regulatory-compliance-officer`, `insurance-risk-advisor` | 8 |
| [`regulatory-compliance`](../.claude/skills/regulatory-compliance/SKILL.md) | Check a plan, workflow, AI deployment, message or contract against the rules that apply to this firm and its clients: HIPAA, Florida FIPA (F.S. 501.171), TCPA and the Florida Telephone Solicitation Act, the GLBA Safeguards Rule, CAN-SPAM and Florida Bar AI guidance. Use before any client deployment or outbound campaign. | `healthcare-practice-expert`, `legal-industry-expert`, `financial-services-expert`, `voice-conversational-ai-specialist`, `security-privacy-engineer`, `business-contracts-attorney`, `regulatory-compliance-officer` | 7 |
| [`vertical-workflow-mapping`](../.claude/skills/vertical-workflow-mapping/SKILL.md) | Map an industry's day-to-day processes, find the highest-value automation opportunities and define their KPIs. Use when scoping work for a specific industry (real estate, healthcare practices, law firms, logistics, hospitality, financial services) or building an industry package. | `real-estate-expert`, `healthcare-practice-expert`, `legal-industry-expert`, `logistics-trade-expert`, `hospitality-expert`, `financial-services-expert`, `business-process-analyst` | 7 |
| [`synthesis-and-briefing`](../.claude/skills/synthesis-and-briefing/SKILL.md) | Turn many inputs (research, expert opinions, data) into a short decision brief with options, trade-offs and a clear recommendation. Use when summarizing for the consultant or making a recommendation. | `orchestrator`, `chief-strategy-advisor`, `market-research-analyst`, `competitive-intelligence-analyst`, `business-process-analyst`, `cfo-financial-modeler` | 6 |
| [`monitoring-kpi-reporting`](../.claude/skills/monitoring-kpi-reporting/SKILL.md) | Track live automations and business KPIs (errors, throughput, cost per run, hours saved, response time, conversion) and produce the monthly client report or internal dashboards. Use for retainer reporting, health checks and marketing or funnel metrics. | `automation-integration-engineer`, `ai-quality-evaluator`, `delivery-lead`, `seo-digital-marketer`, `client-success-manager` | 5 |
| [`bilingual-content`](../.claude/skills/bilingual-content/SKILL.md) | Write and adapt content in English and Spanish (website copy, LinkedIn posts, emails, workshop materials, chatbot scripts) for Miami's bilingual and LatAm-connected market. Adapt meaning and tone rather than translating literally. Use for any client-facing or marketing text. | `voice-conversational-ai-specialist`, `ai-training-coach`, `brand-content-strategist`, `seo-digital-marketer`, `partnerships-community-manager` | 5 |
| [`pricing-and-packaging`](../.claude/skills/pricing-and-packaging/SKILL.md) | Design, test and justify the firm's offers and prices (audit, sprint, retainer, bootcamp, fractional Head of AI, industry packages) against benchmarks and margin targets. Use when setting or changing prices or quoting non-standard work. | `competitive-intelligence-analyst`, `cfo-financial-modeler`, `pricing-strategist`, `sales-bd-lead` | 4 |
| [`proposal-and-sow-writing`](../.claude/skills/proposal-and-sow-writing/SKILL.md) | Draft client proposals and Statements of Work with scope, deliverables, acceptance criteria, timeline, fees and AI-governance terms, using the template in docs/10. Use when preparing a quote, proposal, SOW or change order. | `ai-solutions-architect`, `delivery-lead`, `pricing-strategist`, `sales-bd-lead` | 4 |
| [`contract-drafting-review`](../.claude/skills/contract-drafting-review/SKILL.md) | Draft or review MSAs, SOWs, DPAs, HIPAA BAAs, NDAs, referral/partner and employment or contractor agreements, and flag risky clauses. Use for any contract question. Output is a draft for a Florida-licensed attorney to review. | `talent-hr-advisor`, `business-contracts-attorney`, `insurance-risk-advisor`, `partnerships-community-manager` | 4 |
| [`competitor-profiling`](../.claude/skills/competitor-profiling/SKILL.md) | Profile competitors and substitutes (offers, prices, target clients, positioning, strengths and weaknesses) and keep the landscape in docs/03 current. Use for competitive questions, battle cards or pricing comparisons. | `competitive-intelligence-analyst`, `pricing-strategist`, `brand-content-strategist` | 3 |
| [`financial-modeling`](../.claude/skills/financial-modeling/SKILL.md) | Read, update and run scenarios on the 3-year financial model in docs/11-financial-model.xlsx (Assumptions, Startup Costs, Staffing, Monthly Model, Annual Summary). Use for any question about revenue, costs, cash, break-even, hiring affordability or scenarios. | `cfo-financial-modeler`, `tax-accounting-advisor`, `pricing-strategist` | 3 |
| [`florida-business-licensing`](../.claude/skills/florida-business-licensing/SKILL.md) | Know and apply Florida and Miami requirements for forming and running the firm: Sunbiz LLC filing and annual report, EIN, City of Miami Certificate of Use and Business Tax Receipt, the Miami-Dade Local Business Tax, DOR registration, E-Verify, workers' comp and new-hire reporting. Use for formation, licensing, renewals or the compliance calendar. | `talent-hr-advisor`, `tax-accounting-advisor`, `business-contracts-attorney` | 3 |
| [`llm-agent-engineering`](../.claude/skills/llm-agent-engineering/SKILL.md) | Build reliable LLM features: prompts, structured outputs, tool-using agents, guardrails and human handoff on the Anthropic and OpenAI APIs. Use when writing or debugging prompts or agents for a client deliverable or demo. | `llm-agent-engineer`, `automation-integration-engineer`, `voice-conversational-ai-specialist` | 3 |
| [`ai-evaluation-testing`](../.claude/skills/ai-evaluation-testing/SKILL.md) | Test AI systems (prompts, agents, RAG, voice bots) and AI team agents against defined test sets: accuracy, routing, faithfulness, safety and failure modes, with pass/fail thresholds. Use before go-live, after any change, and to compare models or prompt versions. | `agent-architect`, `llm-agent-engineer`, `ai-quality-evaluator` | 3 |
| [`case-study-writing`](../.claude/skills/case-study-writing/SKILL.md) | Turn delivered projects into credible before/after case studies with verified metrics and client approval. Use after a successful go-live, for retainer clients with good results, or when marketing needs proof points. | `real-estate-expert`, `brand-content-strategist`, `client-success-manager` | 3 |
| [`tax-and-payroll`](../.claude/skills/tax-and-payroll/SKILL.md) | Apply federal and Florida tax and payroll rules to the firm: pass-through vs S-corp election, Florida's 5.5% corporate income tax, sales tax on services, reemployment tax, FICA/FUTA and contractor classification. Use for any tax, payroll or entity question. Output is for CPA review. | `talent-hr-advisor`, `tax-accounting-advisor` | 2 |
| [`solution-architecture`](../.claude/skills/solution-architecture/SKILL.md) | Design vendor-neutral AI and automation solutions: components, data flow, model choice, integrations, security boundaries, human-review points, cost per run and failure handling. Use when scoping or designing a client build or an industry package. | `ai-solutions-architect`, `llm-agent-engineer` | 2 |
| [`systems-integration`](../.claude/skills/systems-integration/SKILL.md) | Connect business systems such as CRMs (HubSpot, Salesforce, Follow Up Boss), EHR/practice management, ERP/TMS, email, calendar, accounting, SMS and e-signature through APIs, webhooks and connectors. Use when a workflow must read from or write to client systems. | `logistics-trade-expert`, `automation-integration-engineer` | 2 |
| [`voice-and-messaging-agents`](../.claude/skills/voice-and-messaging-agents/SKILL.md) | Design and configure AI voice agents (receptionists, inbound/outbound calls) and SMS/WhatsApp chat agents in English and Spanish with Twilio, Vapi, Retell or similar, including consent capture, opt-out, quiet hours and handoff to humans. Use for any phone, SMS or WhatsApp automation. | `hospitality-expert`, `voice-conversational-ai-specialist` | 2 |
| [`security-privacy-review`](../.claude/skills/security-privacy-review/SKILL.md) | Review the security and privacy of a client deployment, a vendor or the firm itself: access control, credentials, encryption, AI vendor data terms, logging, retention, backups and incident response. Use before go-live, before onboarding a vendor, and for SOC 2 readiness. | `ai-solutions-architect`, `security-privacy-engineer` | 2 |
| [`vendor-tool-evaluation`](../.claude/skills/vendor-tool-evaluation/SKILL.md) | Compare AI, automation and software vendors (LLM providers, n8n/Make/Zapier, voice platforms, vector databases, CRMs) on capability, price, data and privacy terms, BAA availability, reliability and lock-in. Use when choosing a tool for a client or the firm. | `ai-solutions-architect`, `security-privacy-engineer` | 2 |
| [`process-improvement`](../.claude/skills/process-improvement/SKILL.md) | Run discovery and improve business processes: interview guides, current-state and future-state maps, bottleneck and waste analysis (Lean style), and an opportunity list. Use for AI Opportunity Audits, discovery calls and change-management design. | `business-process-analyst`, `ai-training-coach` | 2 |
| [`training-curriculum-design`](../.claude/skills/training-curriculum-design/SKILL.md) | Design hands-on AI training and adoption programs in English and Spanish: Team AI Bootcamps, AI acceptable-use policies, role-based exercises and adoption metrics. Use when preparing a workshop, bootcamp, client handover training or change-management plan. | `ai-training-coach`, `client-success-manager` | 2 |
| [`seo-geo`](../.claude/skills/seo-geo/SKILL.md) | Get the firm found in Google and in AI assistant answers (ChatGPT, Claude, Perplexity, Google AI Overviews) for target queries such as 'AI consultant Miami' or 'consultor de inteligencia artificial Miami', plus industry and neighborhood terms. Use for website pages, listings, reviews and content planning. | `brand-content-strategist`, `seo-digital-marketer` | 2 |
| [`team-orchestration`](../.claude/skills/team-orchestration/SKILL.md) | Protocol for routing a question to the right expert agents, running them in parallel, resolving disagreements and merging their work into one answer. Use when coordinating two or more experts from the Experts21-OZ team. | `orchestrator` | 1 |
| [`agent-skill-authoring`](../.claude/skills/agent-skill-authoring/SKILL.md) | Rules and procedure for creating or improving Claude Code project subagents (.claude/agents/*.md) and skills (.claude/skills/<name>/SKILL.md) for this team. Use when adding, editing, auditing or fixing agents or skills. | `agent-architect` | 1 |
| [`market-sizing`](../.claude/skills/market-sizing/SKILL.md) | Estimate the size of a market and segment it using Census, BLS QCEW, FRED, Miami-Dade economic reports and AI-adoption surveys. Use when asked how big a market or segment is, or to update docs/01. | `market-research-analyst` | 1 |
| [`ai-law-watch`](../.claude/skills/ai-law-watch/SKILL.md) | Track AI-related laws, bills and enforcement (Florida, federal FTC/FCC, other states such as Colorado, the EU AI Act for international clients) and explain what changes for the firm and its clients. Use for 'is there a new AI law' questions or a periodic regulatory brief. | `regulatory-compliance-officer` | 1 |
| [`insurance-analysis`](../.claude/skills/insurance-analysis/SKILL.md) | Size and select business insurance (tech E&O, cyber, general liability, workers' comp, optional D&O/EPLI) so limits match contract liability caps and client requirements. Use when buying or renewing coverage, or when a client contract asks for insurance. | `insurance-risk-advisor` | 1 |
| [`rag-knowledge-bases`](../.claude/skills/rag-knowledge-bases/SKILL.md) | Build source-grounded retrieval (RAG) over client documents (policies, FAQs, case files, listings) with access controls, citations and freshness. Use when an AI assistant must answer from a client's own documents. | `llm-agent-engineer` | 1 |
| [`workflow-automation-build`](../.claude/skills/workflow-automation-build/SKILL.md) | Build and document production workflows in n8n, Make, Zapier or Python: triggers, steps, error handling, retries, logging and rollback. Use when implementing an automation for a client or the firm. | `automation-integration-engineer` | 1 |
| [`project-planning`](../.claude/skills/project-planning/SKILL.md) | Plan and run client projects: milestones, work breakdown, effort estimates, staffing, risks, status reporting and change orders. Use when turning a SOW into a plan, estimating effort, or when a project is off track. | `delivery-lead` | 1 |
| [`hiring-and-compensation`](../.claude/skills/hiring-and-compensation/SKILL.md) | Plan hiring and pay for the firm: revenue-based hiring triggers, Miami salary benchmarks, job descriptions, contractor vs employee, interviews, onboarding and compensation plans. Use for any staffing decision. | `talent-hr-advisor` | 1 |
| [`lead-research-crm`](../.claude/skills/lead-research-crm/SKILL.md) | Build and maintain target account lists (by industry, size and location), research prospects and triggers, and keep the CRM pipeline clean and current. Use for prospecting, account planning and pipeline reviews. | `sales-bd-lead` | 1 |
| [`compliant-outreach`](../.claude/skills/compliant-outreach/SKILL.md) | Write outbound sales sequences, discovery-call scripts, follow-ups and objection handling that convert and comply with CAN-SPAM, and that avoid TCPA/FTSA exposure (no cold texts or calls without consent). Use for any prospecting message or sales conversation plan. | `sales-bd-lead` | 1 |
| [`partnership-development`](../.claude/skills/partnership-development/SKILL.md) | Recruit and manage referral and vendor partners (CPAs, bookkeepers, MSPs/IT providers, CRM resellers, web agencies, commercial real estate firms, and partner programs from HubSpot, Zapier, Make, n8n, Microsoft and Google). Use when building the partner channel or structuring a referral deal. | `partnerships-community-manager` | 1 |
| [`event-community-planning`](../.claude/skills/event-community-planning/SKILL.md) | Plan and run the firm's workshops and choose the right Miami ecosystem events, chambers and sponsorships, then measure the leads they produce. Use for the monthly 'AI for Miami Business' workshop, event selection or sponsorship decisions. | `partnerships-community-manager` | 1 |
| [`client-success`](../.claude/skills/client-success/SKILL.md) | Keep clients successful and renewing: onboarding, monthly health checks, KPI reviews, renewals, churn-risk signals, upsells and referrals. Use for any existing-client question, retainer review or churn risk. | `client-success-manager` | 1 |

## 3. Skill matrix

✓ = the agent preloads that skill. Columns are agent IDs (see section 1).

| Skill | A00 | A31 | A01 | A02 | A03 | A04 | A05 | A06 | A07 | A08 | A09 | A10 | A11 | A12 | A13 | A14 | A15 | A16 | A17 | A18 | A19 | A20 | A21 | A22 | A23 | A24 | A25 | A26 | A27 | A28 | A29 | A30 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `research-and-cite` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  | ✓ |  | ✓ | ✓ |  |  | ✓ |  |  |  |
| `roi-business-case` |  |  | ✓ |  |  | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  | ✓ |  |  | ✓ |  |  |  |  |  |  |  | ✓ |  |  |
| `risk-assessment` | ✓ |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ | ✓ |  |  |  | ✓ |  |  |  | ✓ | ✓ |  |  |  |  |  |
| `regulatory-compliance` |  |  |  |  |  |  | ✓ | ✓ |  |  | ✓ |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |
| `vertical-workflow-mapping` |  |  |  |  |  | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `synthesis-and-briefing` | ✓ |  | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |
| `monitoring-kpi-reporting` |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ |
| `bilingual-content` |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  | ✓ |  |  |  |  |  |  | ✓ | ✓ |  | ✓ |  |
| `pricing-and-packaging` |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  | ✓ |  |  |  |  |  | ✓ |  |  |
| `proposal-and-sow-writing` |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  | ✓ |  |  |  |  |  | ✓ |  |  |  |  |  | ✓ |  |  |
| `contract-drafting-review` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  | ✓ |  | ✓ |  |  |  | ✓ |  |
| `competitor-profiling` |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |  |  |  |  |
| `financial-modeling` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |
| `florida-business-licensing` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ |  | ✓ |  |  |  |  |  |  |  |
| `llm-agent-engineering` |  |  |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `ai-evaluation-testing` |  | ✓ |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `case-study-writing` |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |
| `tax-and-payroll` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ |  |  |  |  |  |  |  |  |  |
| `solution-architecture` |  |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `systems-integration` |  |  |  |  |  |  |  |  | ✓ |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `voice-and-messaging-agents` |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `security-privacy-review` |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `vendor-tool-evaluation` |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `process-improvement` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| `training-curriculum-design` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  | ✓ |
| `seo-geo` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |
| `team-orchestration` | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `agent-skill-authoring` |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `market-sizing` |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `ai-law-watch` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |
| `insurance-analysis` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |
| `rag-knowledge-bases` |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `workflow-automation-build` |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `project-planning` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `hiring-and-compensation` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| `lead-research-crm` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |
| `compliant-outreach` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |
| `partnership-development` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |
| `event-community-planning` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |
| `client-success` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |

_Maintained by `agent-architect`. After any change, run `python3 scripts/validate_team.py`._
