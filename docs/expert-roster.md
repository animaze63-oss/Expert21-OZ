# Expert Roster: Agents and Skills

The advisory team for launching and running the Miami AI & workflow consulting firm described in `docs/01`–`11`. Each **agent** is one expert role you will turn into an agent. Each **skill** is a reusable capability, and many skills are shared by several agents. Build each skill once and attach it to every agent that uses it.

**30 agents, 38 skills.** Agent IDs (A01…) and skill IDs (`kebab-case`) are stable and meant to be used as file and folder names.

## How the team works

- **You** (the consultant) bring a question or task to **A01 Chief Strategy Advisor**.
- A01 sends it to the relevant specialists, collects their input, settles disagreements, and returns one recommendation with sources.
- Every agent cites sources (`research-and-cite`) and works from the research docs, especially the ones listed in its **Primary docs** column.
- Four guardrails apply to every agent: (1) legal, tax and insurance outputs are drafts for a licensed professional to review; (2) no client data in prompts to outside services without approval; (3) mark estimates as estimates; (4) flag anything that changes the numbers in `11-financial-model.xlsx` to A20.

## 1. Agents

### Leadership & strategy

| ID | Agent | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A01 | **Chief Strategy Advisor (Orchestrator)** | Your lead advisor: frames each question, sends it to the right experts, settles disagreements, and gives you one recommendation. | README, 09 | `synthesis-and-briefing`, `risk-assessment`, `research-and-cite`, `roi-business-case` |
| A02 | **Market Research Analyst** | Sizes and segments the Miami, South Florida and LatAm markets and keeps demand data current. | 01, 02 | `research-and-cite`, `market-sizing`, `synthesis-and-briefing` |
| A03 | **Competitive Intelligence Analyst** | Tracks Miami and national AI consultancies, agencies, IT providers and vendor-native AI, and finds positioning gaps. | 03 | `research-and-cite`, `competitor-profiling`, `pricing-and-packaging`, `synthesis-and-briefing` |

### Business domain (industry experts)

| ID | Agent | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A04 | **Real Estate Industry Expert** | Knows how Miami brokerages, property managers and developers work, and which lead, listing and tenant workflows pay off most. | 02, 07 | `vertical-workflow-mapping`, `roi-business-case`, `research-and-cite`, `case-study-writing` |
| A05 | **Healthcare Practice Expert** | Knows clinic, dental, med-spa and home-health operations (scheduling, intake, insurance checks) and their HIPAA limits. | 02, 05 | `vertical-workflow-mapping`, `roi-business-case`, `regulatory-compliance`, `research-and-cite` |
| A06 | **Legal Industry Expert** | Knows law-firm intake, document and case-status workflows, plus Florida Bar confidentiality and AI-supervision duties. | 02, 05 | `vertical-workflow-mapping`, `roi-business-case`, `regulatory-compliance`, `research-and-cite` |
| A07 | **Logistics & Trade Expert** | Knows freight, import/export and port/MIA cargo operations: quoting, shipment status and customs paperwork automation. | 02 | `vertical-workflow-mapping`, `roi-business-case`, `systems-integration`, `research-and-cite` |
| A08 | **Hospitality & Food Service Expert** | Knows hotel and restaurant-group operations, guest messaging and event-driven demand peaks (Art Basel, the World Cup and others). | 02 | `vertical-workflow-mapping`, `roi-business-case`, `voice-and-messaging-agents`, `research-and-cite` |
| A09 | **Financial Services & Insurance Expert** | Knows agency, wealth and family-office onboarding, KYC and reporting workflows, and their GLBA/Safeguards compliance needs. | 02, 05 | `vertical-workflow-mapping`, `roi-business-case`, `regulatory-compliance`, `research-and-cite` |

### Technical

| ID | Agent | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A10 | **AI Solutions Architect** | Designs each client solution end to end so it is secure, vendor-neutral, cost-aware and maintainable. | 07, 08, 10 | `solution-architecture`, `vendor-tool-evaluation`, `security-privacy-review`, `roi-business-case`, `proposal-and-sow-writing` |
| A11 | **LLM & Agent Engineer** | Builds the prompts, RAG pipelines and tool-using agents behind each deliverable, with guardrails and human handoff. | 06, 08 | `llm-agent-engineering`, `rag-knowledge-bases`, `ai-evaluation-testing`, `solution-architecture` |
| A12 | **Workflow Automation & Integration Engineer** | Connects client systems and builds reliable n8n, Make, Zapier and Python workflows with logging and rollback. | 06 | `workflow-automation-build`, `systems-integration`, `monitoring-kpi-reporting`, `llm-agent-engineering` |
| A13 | **Voice & Conversational AI Specialist** | Builds bilingual voice, SMS and WhatsApp agents with consent capture, opt-outs and quiet hours built in. | 05, 08 | `voice-and-messaging-agents`, `llm-agent-engineering`, `regulatory-compliance`, `bilingual-content` |
| A14 | **Security & Privacy Engineer** | Secures client data and credentials, vets AI vendor data terms, and owns incident response and SOC 2 readiness. | 05, 08 | `security-privacy-review`, `regulatory-compliance`, `vendor-tool-evaluation`, `risk-assessment` |
| A15 | **AI Quality & Evaluation Specialist** | Tests every AI deliverable against a defined test set and sets the accuracy bar a deliverable must clear before go-live. | 08, 10 | `ai-evaluation-testing`, `monitoring-kpi-reporting`, `risk-assessment` |

### Operations

| ID | Agent | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A16 | **Delivery & Project Management Lead** | Turns signed SOWs into on-time, on-budget delivery and manages scope, change orders and resourcing. | 06, 10 | `project-planning`, `proposal-and-sow-writing`, `monitoring-kpi-reporting`, `risk-assessment` |
| A17 | **Business Process Analyst** | Runs discovery and AI Opportunity Audits: interviews staff, maps processes, and ranks automation opportunities by ROI. | 02, 07 | `process-improvement`, `vertical-workflow-mapping`, `roi-business-case`, `synthesis-and-briefing` |
| A18 | **Talent & HR Advisor** | Plans hiring tied to revenue triggers, benchmarks Miami pay, and handles contractor policy, onboarding and Florida employer rules. | 06, 09 | `hiring-and-compensation`, `florida-business-licensing`, `tax-and-payroll`, `contract-drafting-review` |
| A19 | **AI Training & Change Management Coach** | Designs and delivers EN/ES team bootcamps and adoption plans so clients actually use what is built. | 07 | `training-curriculum-design`, `bilingual-content`, `process-improvement` |

### Finance

| ID | Agent | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A20 | **CFO & Financial Modeler** | Owns the financial model, cash runway, scenarios and break-even, and approves hires against their revenue triggers. | 04, 09, 11 | `financial-modeling`, `roi-business-case`, `pricing-and-packaging`, `risk-assessment`, `synthesis-and-briefing` |
| A21 | **Tax & Accounting Advisor** | Advises on entity and S-corp election, Florida and federal taxes, payroll taxes, bookkeeping and annual filings. | 04, 05 | `tax-and-payroll`, `florida-business-licensing`, `financial-modeling`, `research-and-cite` |
| A22 | **Pricing & Packaging Strategist** | Sets and tests the audit, sprint, retainer and bootcamp prices against competitors, margins and willingness to pay. | 03, 04, 07 | `pricing-and-packaging`, `competitor-profiling`, `financial-modeling`, `proposal-and-sow-writing` |

### Legal, compliance & risk

| ID | Agent | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A23 | **Business & Contracts Attorney (Florida)** | Handles LLC formation, licenses and the MSA/SOW/DPA/BAA templates, and reviews any non-standard client contract. | 05, 10 | `contract-drafting-review`, `florida-business-licensing`, `regulatory-compliance`, `research-and-cite` |
| A24 | **Regulatory Compliance Officer** | Keeps the firm and its deliverables compliant with HIPAA, FIPA, TCPA/FTSA, GLBA, CAN-SPAM and new AI laws. | 05, 08 | `regulatory-compliance`, `ai-law-watch`, `risk-assessment`, `research-and-cite` |
| A25 | **Insurance & Risk Advisor** | Sizes E&O, cyber, GL and workers' comp coverage, matches it to contract caps, and maintains the risk register. | 04, 08 | `insurance-analysis`, `risk-assessment`, `contract-drafting-review` |

### Marketing & sales

| ID | Agent | One-line job description | Primary docs | Skills |
|---|---|---|---|---|
| A26 | **Brand & Bilingual Content Strategist** | Owns positioning, messaging and the EN/ES content calendar for the website, LinkedIn and workshops. | 03, 07 | `bilingual-content`, `case-study-writing`, `competitor-profiling`, `seo-geo` |
| A27 | **SEO, GEO & Digital Marketing Specialist** | Makes the firm show up in Google and in AI-assistant answers for 'AI consultant Miami' and industry-specific searches, and runs paid tests. | 07 | `seo-geo`, `bilingual-content`, `research-and-cite`, `monitoring-kpi-reporting` |
| A28 | **Sales & Business Development Lead** | Builds target lists, runs compliant outreach and discovery calls, and turns audits into builds and retainers. | 02, 07, 09 | `lead-research-crm`, `compliant-outreach`, `proposal-and-sow-writing`, `roi-business-case`, `pricing-and-packaging` |
| A29 | **Partnerships & Community Manager** | Recruits referral and vendor partners and runs the monthly workshop and the firm's Miami events calendar. | 07 | `partnership-development`, `event-community-planning`, `bilingual-content`, `contract-drafting-review` |
| A30 | **Client Success & Retainer Manager** | Onboards clients, sends monthly KPI reports, protects renewals, and finds upsells and case-study candidates. | 07, 08 | `client-success`, `monitoring-kpi-reporting`, `case-study-writing`, `training-curriculum-design` |

## 2. Skills (and which agents use them)

Sorted from most shared to least shared. Skills used by many agents are the best ones to build first.

| Skill ID | Skill | What it does | Used by | # |
|---|---|---|---|---|
| `research-and-cite` | Research and cite | Search the web, government and industry sources, pull the facts, and cite every claim with a URL and date. | A01 Chief Strategy Advisor, A02 Market Research Analyst, A03 Competitive Intelligence Analyst, A04 Real Estate Industry Expert, A05 Healthcare Practice Expert, A06 Legal Industry Expert, A07 Logistics & Trade Expert, A08 Hospitality & Food Service Expert, A09 Financial Services & Insurance Expert, A21 Tax & Accounting Advisor, A23 Business & Contracts Attorney, A24 Regulatory Compliance Officer, A27 SEO, GEO & Digital Marketing Specialist | 13 |
| `roi-business-case` | ROI and business-case modeling | Estimate hours saved, revenue gained and payback period for a proposed automation, using conservative assumptions. | A01 Chief Strategy Advisor, A04 Real Estate Industry Expert, A05 Healthcare Practice Expert, A06 Legal Industry Expert, A07 Logistics & Trade Expert, A08 Hospitality & Food Service Expert, A09 Financial Services & Insurance Expert, A10 AI Solutions Architect, A17 Business Process Analyst, A20 CFO & Financial Modeler, A28 Sales & Business Development Lead | 11 |
| `vertical-workflow-mapping` | Industry workflow mapping | Map an industry's day-to-day processes and identify the highest-value automation opportunities and their KPIs. | A04 Real Estate Industry Expert, A05 Healthcare Practice Expert, A06 Legal Industry Expert, A07 Logistics & Trade Expert, A08 Hospitality & Food Service Expert, A09 Financial Services & Insurance Expert, A17 Business Process Analyst | 7 |
| `regulatory-compliance` | Regulatory compliance check | Check work against HIPAA, F.S. 501.171 (FIPA), TCPA/FTSA, the GLBA Safeguards Rule, CAN-SPAM and Florida Bar AI guidance. | A05 Healthcare Practice Expert, A06 Legal Industry Expert, A09 Financial Services & Insurance Expert, A13 Voice & Conversational AI Specialist, A14 Security & Privacy Engineer, A23 Business & Contracts Attorney, A24 Regulatory Compliance Officer | 7 |
| `risk-assessment` | Risk assessment | Score risks by likelihood and impact, propose mitigations and early-warning metrics, and maintain `08`. | A01 Chief Strategy Advisor, A14 Security & Privacy Engineer, A15 AI Quality & Evaluation Specialist, A16 Delivery & Project Management Lead, A20 CFO & Financial Modeler, A24 Regulatory Compliance Officer, A25 Insurance & Risk Advisor | 7 |
| `synthesis-and-briefing` | Synthesis and briefing | Turn many inputs into a short recommendation with options, trade-offs and a clear next step. | A01 Chief Strategy Advisor, A02 Market Research Analyst, A03 Competitive Intelligence Analyst, A17 Business Process Analyst, A20 CFO & Financial Modeler | 5 |
| `monitoring-kpi-reporting` | Monitoring and KPI reporting | Track live workflows (errors, throughput, cost per run, hours saved) and write the monthly client report. | A12 Workflow Automation & Integration Engineer, A15 AI Quality & Evaluation Specialist, A16 Delivery & Project Management Lead, A27 SEO, GEO & Digital Marketing Specialist, A30 Client Success & Retainer Manager | 5 |
| `bilingual-content` | Bilingual content creation | Write and adapt marketing, training and client communications in English and Spanish (not literal translation). | A13 Voice & Conversational AI Specialist, A19 AI Training & Change Management Coach, A26 Brand & Bilingual Content Strategist, A27 SEO, GEO & Digital Marketing Specialist, A29 Partnerships & Community Manager | 5 |
| `pricing-and-packaging` | Pricing and packaging | Design and test offer tiers (audit, sprint, retainer, bootcamp) against market benchmarks and margin targets. | A03 Competitive Intelligence Analyst, A20 CFO & Financial Modeler, A22 Pricing & Packaging Strategist, A28 Sales & Business Development Lead | 4 |
| `proposal-and-sow-writing` | Proposal and SOW writing | Draft proposals and Statements of Work with scope, acceptance criteria, timeline and fees, using the `10` template. | A10 AI Solutions Architect, A16 Delivery & Project Management Lead, A22 Pricing & Packaging Strategist, A28 Sales & Business Development Lead | 4 |
| `contract-drafting-review` | Contract drafting and review | Draft or review MSAs, DPAs, BAAs, NDAs, partner and employment agreements, and flag risky clauses for an attorney. | A18 Talent & HR Advisor, A23 Business & Contracts Attorney, A25 Insurance & Risk Advisor, A29 Partnerships & Community Manager | 4 |
| `competitor-profiling` | Competitor profiling | Profile competitors (offers, prices, positioning, strengths and weaknesses) and keep the landscape table in `03` current. | A03 Competitive Intelligence Analyst, A22 Pricing & Packaging Strategist, A26 Brand & Bilingual Content Strategist | 3 |
| `financial-modeling` | Financial modeling (xlsx) | Read and update `11-financial-model.xlsx`, run scenarios, and report the results without breaking any formulas. | A20 CFO & Financial Modeler, A21 Tax & Accounting Advisor, A22 Pricing & Packaging Strategist | 3 |
| `florida-business-licensing` | Florida business licensing | Know the Sunbiz, EIN, Miami-Dade and City business tax, Certificate of Use, DOR, E-Verify and workers' comp requirements, fees and deadlines. | A18 Talent & HR Advisor, A21 Tax & Accounting Advisor, A23 Business & Contracts Attorney | 3 |
| `llm-agent-engineering` | LLM, prompt and agent engineering | Build prompts, tool-using agents and guardrails on the OpenAI and Anthropic APIs with structured outputs and human handoff. | A11 LLM & Agent Engineer, A12 Workflow Automation & Integration Engineer, A13 Voice & Conversational AI Specialist | 3 |
| `case-study-writing` | Case-study writing | Turn delivered projects into before/after case studies with verified metrics and client approval. | A04 Real Estate Industry Expert, A26 Brand & Bilingual Content Strategist, A30 Client Success & Retainer Manager | 3 |
| `tax-and-payroll` | Tax and payroll rules | Apply federal and Florida tax rules: pass-through vs S-corp, Florida's 5.5% corporate tax, sales tax on services, reemployment tax, FICA/FUTA. | A18 Talent & HR Advisor, A21 Tax & Accounting Advisor | 2 |
| `solution-architecture` | Solution architecture | Design vendor-neutral AI and automation systems: components, data flow, swappable models, cost per run, security boundaries. | A10 AI Solutions Architect, A11 LLM & Agent Engineer | 2 |
| `systems-integration` | Systems integration | Connect CRM, EHR/practice-management, ERP, email and calendar, and accounting systems through APIs and webhooks. | A07 Logistics & Trade Expert, A12 Workflow Automation & Integration Engineer | 2 |
| `voice-and-messaging-agents` | Voice and messaging agents | Configure AI voice agents and bilingual SMS/WhatsApp agents (Twilio, Vapi, Retell) with consent capture and quiet hours. | A08 Hospitality & Food Service Expert, A13 Voice & Conversational AI Specialist | 2 |
| `security-privacy-review` | Security and privacy review | Review access, credentials, encryption, data retention, AI vendor terms and incident-response readiness. | A10 AI Solutions Architect, A14 Security & Privacy Engineer | 2 |
| `ai-evaluation-testing` | AI evaluation and testing | Build test sets, measure accuracy and failure rates, red-team prompts, and set acceptance thresholds. | A11 LLM & Agent Engineer, A15 AI Quality & Evaluation Specialist | 2 |
| `process-improvement` | Process improvement | Run discovery interviews, map current and future processes, and find bottlenecks (Lean / Six Sigma style). | A17 Business Process Analyst, A19 AI Training & Change Management Coach | 2 |
| `vendor-tool-evaluation` | Vendor and tool evaluation | Compare AI and automation vendors on capability, price, data terms, BAA availability and lock-in risk. | A10 AI Solutions Architect, A14 Security & Privacy Engineer | 2 |
| `training-curriculum-design` | Training curriculum design | Design hands-on EN/ES AI bootcamps, AI use policies, and adoption and change-management plans. | A19 AI Training & Change Management Coach, A30 Client Success & Retainer Manager | 2 |
| `seo-geo` | SEO and AI-answer visibility (GEO) | Optimize pages, listings and FAQs so the firm shows up in Google and in AI assistant answers for target queries. | A26 Brand & Bilingual Content Strategist, A27 SEO, GEO & Digital Marketing Specialist | 2 |
| `market-sizing` | Market sizing and data analysis | Estimate market size from Census/BLS/FRED and survey data, and segment it by industry and company size. | A02 Market Research Analyst | 1 |
| `ai-law-watch` | AI law and policy watch | Track Florida (SB 482's likely return in 2027), federal, Colorado and EU AI rules, and summarize what changes for clients. | A24 Regulatory Compliance Officer | 1 |
| `insurance-analysis` | Insurance coverage analysis | Size tech E&O, cyber, GL and workers' comp coverage and limits to match contract caps and client requirements. | A25 Insurance & Risk Advisor | 1 |
| `rag-knowledge-bases` | RAG and knowledge bases | Build source-grounded retrieval over client documents, with access controls and citations. | A11 LLM & Agent Engineer | 1 |
| `workflow-automation-build` | Workflow automation build | Build and document workflows in n8n, Make, Zapier or Python, with retries, logging and rollback. | A12 Workflow Automation & Integration Engineer | 1 |
| `project-planning` | Project planning and scoping | Break work into milestones, estimate effort, track progress, and manage change orders and resourcing. | A16 Delivery & Project Management Lead | 1 |
| `hiring-and-compensation` | Hiring and compensation | Benchmark Miami salaries, write job descriptions, design hiring triggers, comp plans and onboarding. | A18 Talent & HR Advisor | 1 |
| `lead-research-crm` | Lead research and CRM hygiene | Build target account lists by industry and size, enrich contacts, and keep the sales pipeline clean. | A28 Sales & Business Development Lead | 1 |
| `compliant-outreach` | Compliant outreach and sales messaging | Write outbound sequences and call scripts that follow CAN-SPAM and avoid TCPA/FTSA exposure. | A28 Sales & Business Development Lead | 1 |
| `partnership-development` | Partnership development | Recruit and manage referral and vendor partners (CPAs, IT providers, CRM resellers, platform partner programs). | A29 Partnerships & Community Manager | 1 |
| `event-community-planning` | Event and community planning | Plan workshops and choose the right Miami ecosystem events, sponsorships and chambers to attend, then measure the leads they bring in. | A29 Partnerships & Community Manager | 1 |
| `client-success` | Client success and retention | Run onboarding, health checks, renewals and upsells, and track retention metrics. | A30 Client Success & Retainer Manager | 1 |

## 3. Skill matrix

✓ = the agent uses that skill. Rows are skills; columns are agent IDs (see section 1 for names).

| Skill | A01 | A02 | A03 | A04 | A05 | A06 | A07 | A08 | A09 | A10 | A11 | A12 | A13 | A14 | A15 | A16 | A17 | A18 | A19 | A20 | A21 | A22 | A23 | A24 | A25 | A26 | A27 | A28 | A29 | A30 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `research-and-cite` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  | ✓ |  | ✓ | ✓ |  |  | ✓ |  |  |  |
| `roi-business-case` | ✓ |  |  | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  | ✓ |  |  | ✓ |  |  |  |  |  |  |  | ✓ |  |  |
| `vertical-workflow-mapping` |  |  |  | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `regulatory-compliance` |  |  |  |  | ✓ | ✓ |  |  | ✓ |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |
| `risk-assessment` | ✓ |  |  |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ | ✓ |  |  |  | ✓ |  |  |  | ✓ | ✓ |  |  |  |  |  |
| `synthesis-and-briefing` | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |
| `monitoring-kpi-reporting` |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ |
| `bilingual-content` |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  | ✓ |  |  |  |  |  |  | ✓ | ✓ |  | ✓ |  |
| `pricing-and-packaging` |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  | ✓ |  |  |  |  |  | ✓ |  |  |
| `proposal-and-sow-writing` |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  | ✓ |  |  |  |  |  | ✓ |  |  |  |  |  | ✓ |  |  |
| `contract-drafting-review` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  | ✓ |  | ✓ |  |  |  | ✓ |  |
| `competitor-profiling` |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |  |  |  |  |
| `financial-modeling` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |
| `florida-business-licensing` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ |  | ✓ |  |  |  |  |  |  |  |
| `llm-agent-engineering` |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `case-study-writing` |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |
| `tax-and-payroll` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ |  |  |  |  |  |  |  |  |  |
| `solution-architecture` |  |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `systems-integration` |  |  |  |  |  |  | ✓ |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `voice-and-messaging-agents` |  |  |  |  |  |  |  | ✓ |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `security-privacy-review` |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `ai-evaluation-testing` |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `process-improvement` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| `vendor-tool-evaluation` |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `training-curriculum-design` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  | ✓ |
| `seo-geo` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |
| `market-sizing` |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `ai-law-watch` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |
| `insurance-analysis` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |
| `rag-knowledge-bases` |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `workflow-automation-build` |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `project-planning` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| `hiring-and-compensation` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| `lead-research-crm` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |
| `compliant-outreach` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |
| `partnership-development` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |
| `event-community-planning` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |
| `client-success` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |

## 4. Suggested build order

1. **Shared foundation skills** used by the most agents: `research-and-cite`, `roi-business-case`, `risk-assessment`, `regulatory-compliance`, `synthesis-and-briefing`, `vertical-workflow-mapping`.
2. **Core agents to launch the firm:** A01 Chief Strategy Advisor, A20 CFO & Financial Modeler, A23 Business & Contracts Attorney, A24 Regulatory Compliance Officer, A28 Sales & Business Development Lead, A10 AI Solutions Architect.
3. **First-industry experts** (matching the launch verticals in `02`): A04 Real Estate, A05 Healthcare Practice, A06 Legal.
4. **Delivery team** once client work begins: A11, A12, A13, A14, A15, A16, A17.
5. **Growth team:** A19, A22, A26, A27, A29, A30, and the remaining industry experts (A07, A08, A09), A18, A21, A25.

_Generated from the research in this folder (November 2026). Update this file when agents or skills change._
