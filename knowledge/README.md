# Knowledge folders

Each agent has its own folder here, `knowledge/<agent-name>/`. The agent **reads everything in its folder before every answer**. Drop in documents that make that expert smarter about *your* firm: decisions, notes, client results, price quotes, contracts, reports. Each folder's README says what belongs there.

- The newest information wins: where a knowledge document conflicts with `docs/`, the agent follows the knowledge document and says so.
- **Never add secrets.** Anonymize client data.
- Put sensitive files in a `private/` subfolder. Those folders are gitignored, so they stay on your machine and are never pushed.

| Folder | Agent | Persona |
|---|---|---|
| [`orchestrator/`](orchestrator/README.md) | Team Orchestrator | Olivia |
| [`agent-architect/`](agent-architect/README.md) | Agent & Skill Architect (meta agent) | Theo |
| [`chief-strategy-advisor/`](chief-strategy-advisor/README.md) | Chief Strategy Advisor | Rafael |
| [`market-research-analyst/`](market-research-analyst/README.md) | Market Research Analyst | Priya |
| [`competitive-intelligence-analyst/`](competitive-intelligence-analyst/README.md) | Competitive Intelligence Analyst | Diego |
| [`real-estate-expert/`](real-estate-expert/README.md) | Real Estate Industry Expert | Carmen |
| [`healthcare-practice-expert/`](healthcare-practice-expert/README.md) | Healthcare Practice Expert | Ana |
| [`legal-industry-expert/`](legal-industry-expert/README.md) | Legal Industry Expert | Marisol |
| [`logistics-trade-expert/`](logistics-trade-expert/README.md) | Logistics & Trade Expert | Jorge |
| [`hospitality-expert/`](hospitality-expert/README.md) | Hospitality & Food Service Expert | Sofía |
| [`financial-services-expert/`](financial-services-expert/README.md) | Financial Services & Insurance Expert | William |
| [`ai-solutions-architect/`](ai-solutions-architect/README.md) | AI Solutions Architect | Kenji |
| [`llm-agent-engineer/`](llm-agent-engineer/README.md) | LLM & Agent Engineer | Nadia |
| [`automation-integration-engineer/`](automation-integration-engineer/README.md) | Workflow Automation & Integration Engineer | Marcus |
| [`voice-conversational-ai-specialist/`](voice-conversational-ai-specialist/README.md) | Voice & Conversational AI Specialist | Lucía |
| [`security-privacy-engineer/`](security-privacy-engineer/README.md) | Security & Privacy Engineer | Ivan |
| [`ai-quality-evaluator/`](ai-quality-evaluator/README.md) | AI Quality & Evaluation Specialist | Grace |
| [`delivery-lead/`](delivery-lead/README.md) | Delivery & Project Management Lead | Elena |
| [`business-process-analyst/`](business-process-analyst/README.md) | Business Process Analyst | Tomás |
| [`talent-hr-advisor/`](talent-hr-advisor/README.md) | Talent & HR Advisor | Monique |
| [`ai-training-coach/`](ai-training-coach/README.md) | AI Training & Change Management Coach | Valeria |
| [`cfo-financial-modeler/`](cfo-financial-modeler/README.md) | CFO & Financial Modeler | Victor |
| [`tax-accounting-advisor/`](tax-accounting-advisor/README.md) | Tax & Accounting Advisor | Beatriz |
| [`pricing-strategist/`](pricing-strategist/README.md) | Pricing & Packaging Strategist | Nico |
| [`business-contracts-attorney/`](business-contracts-attorney/README.md) | Business & Contracts Attorney (Florida) | Alejandra |
| [`regulatory-compliance-officer/`](regulatory-compliance-officer/README.md) | Regulatory Compliance Officer | Samuel |
| [`insurance-risk-advisor/`](insurance-risk-advisor/README.md) | Insurance & Risk Advisor | Hannah |
| [`brand-content-strategist/`](brand-content-strategist/README.md) | Brand & Bilingual Content Strategist | Isabella |
| [`seo-digital-marketer/`](seo-digital-marketer/README.md) | SEO, GEO & Digital Marketing Specialist | Jake |
| [`sales-bd-lead/`](sales-bd-lead/README.md) | Sales & Business Development Lead | Daniela |
| [`partnerships-community-manager/`](partnerships-community-manager/README.md) | Partnerships & Community Manager | Andrés |
| [`client-success-manager/`](client-success-manager/README.md) | Client Success & Retainer Manager | Camila |
