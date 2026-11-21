# 10 — Master Services Agreement and Statement of Work (Template)

> **DRAFT TEMPLATE. NOT LEGAL ADVICE.** This is a starting point for the firm's standard client contract, based on the risks in `08-risks.md` and the duties in `05-permits-and-licenses.md`. **Have a Florida-licensed attorney review it before you use it.** Text in `[BRACKETS]` must be filled in. Use a separate **Data Processing Agreement** for personal data, and a **HIPAA Business Associate Agreement** for any healthcare client that handles protected health information (PHI).

---

# MASTER SERVICES AGREEMENT

This Master Services Agreement (the "**Agreement**") is entered into as of `[EFFECTIVE DATE]` (the "**Effective Date**") between:

**`[FIRM LEGAL NAME]`, LLC**, a Florida limited liability company with its principal office at `[ADDRESS]`, Miami, Florida (the "**Consultant**"), and

**`[CLIENT LEGAL NAME]`**, a `[STATE]` `[ENTITY TYPE]` with its principal office at `[ADDRESS]` (the "**Client**").

## 1. Services

1.1 **Statements of Work.** The Consultant will provide AI consulting, workflow automation, integration, training and related services (the "**Services**") described in one or more Statements of Work signed by both parties (each, a "**SOW**"). Each SOW is governed by this Agreement. If a SOW conflicts with this Agreement, this Agreement controls unless the SOW expressly says otherwise for that SOW.

1.2 **Change orders.** Either party may request changes to a SOW's scope, schedule or fees. A change is binding only when both parties sign a written change order. The Consultant has no obligation to perform out-of-scope work without one.

1.3 **Client responsibilities.** The Client will (a) provide timely access to the people, systems, accounts and data reasonably needed; (b) name a project owner with authority to make decisions; (c) review and accept deliverables as set out in Section 4; and (d) remain responsible for its own business decisions, its use of the deliverables, and its compliance with laws that apply to its business.

1.4 **Subcontractors.** The Consultant may use qualified subcontractors. The Consultant remains responsible for their work and will bind them to confidentiality and security obligations at least as protective as those in this Agreement.

## 2. Fees, invoicing and payment

2.1 **Fees.** The Client will pay the fees in each SOW. Fees may be fixed, monthly retainer, or time-and-materials.

2.2 **Deposits.** Unless a SOW says otherwise: fixed-price projects are invoiced **50% on signing** and **50% on acceptance**. Retainers are invoiced **monthly in advance**. Time-and-materials work is invoiced **monthly in arrears**.

2.3 **Payment terms.** Invoices are due within **fifteen (15) days** of the invoice date. Late amounts accrue interest at **1.5% per month** or the maximum rate allowed by law, whichever is lower. If any amount is more than 30 days overdue, the Consultant may suspend Services after giving 10 days' written notice.

2.4 **Third-party costs.** Charges for AI models and APIs, automation platforms, hosting, telephone and SMS, and software licenses used for the Client ("**Third-Party Costs**") are either paid directly by the Client under its own accounts (preferred) or passed through **at cost plus `[0–10]%`**, as stated in the SOW.

2.5 **Expenses and taxes.** Reasonable pre-approved travel and expenses are reimbursed at cost. Fees do not include taxes. The Client pays any applicable sales, use or similar taxes, except taxes on the Consultant's income.

## 3. Term and termination

3.1 **Term.** This Agreement starts on the Effective Date and continues until terminated. Each SOW runs for the term stated in it.

3.2 **Termination for convenience.** Either party may terminate a retainer SOW with **thirty (30) days'** written notice. Either party may terminate a fixed-price SOW with thirty days' written notice. In that case the Client pays for all work performed through the termination date, any non-cancellable Third-Party Costs, and any milestone fees already earned.

3.3 **Termination for cause.** Either party may terminate this Agreement or a SOW immediately by written notice if the other party materially breaches it and does not cure the breach within **fifteen (15) days** of notice, or if the other party becomes insolvent.

3.4 **Effect.** When a SOW ends, the Client pays all undisputed amounts due, and the Consultant delivers any completed and paid-for deliverables. At the Client's request, the Consultant provides reasonable transition help at its then-current rates. Sections 5 through 12 survive termination.

## 4. Acceptance

4.1 **Acceptance criteria.** Each SOW lists acceptance criteria for its deliverables. The Client has **ten (10) business days** after delivery (the "**Review Period**") to accept a deliverable or give written notice describing, in reasonable detail, how it fails the criteria.

4.2 **Remedy.** The Consultant will correct any failures and redeliver, and a new Review Period begins. A deliverable is **deemed accepted** if (a) the Review Period ends without a written rejection, or (b) the Client uses it in production.

## 5. AI-specific terms

5.1 **Nature of AI outputs.** The Client understands that deliverables may include artificial-intelligence and machine-learning components (including large language models) that produce probabilistic outputs. Those outputs may be inaccurate, incomplete, or inappropriate in some cases. The Consultant will design deliverables using reasonable industry practices, including testing, guardrails and, where the SOW specifies, human-review steps.

5.2 **Human oversight.** The Client is responsible for (a) keeping the human review steps described in the SOW in place for **high-stakes outputs**, meaning anything legal, medical, financial, employment-related, pricing or quoting, or sent to customers in a regulated context; and (b) not using a deliverable for a purpose that the SOW or documentation identifies as out of scope.

5.3 **Third-party AI providers.** Deliverables may rely on third-party AI and automation services (for example, OpenAI, Anthropic, Google, Microsoft, n8n, Make, Zapier, Twilio). Those services are governed by their providers' terms. The Consultant does not control their availability, pricing, model changes or retirements. The Consultant will configure those services using enterprise or no-data-retention settings where available and where the SOW requires it. **The Consultant will not knowingly let Client Data be used to train third-party models.**

5.4 **Communications compliance.** If a deliverable sends calls, texts or messages (including AI-generated or artificial voices) to consumers, **the Client is responsible for obtaining and keeping all required consents**, including under the Telephone Consumer Protection Act, the Florida Telephone Solicitation Act (F.S. 501.059), and CAN-SPAM, and for honoring opt-outs. The Consultant will build in consent capture, opt-out handling and quiet-hours features as specified in the SOW.

5.5 **Professional judgment.** The Services are not legal, medical, accounting or tax advice. Deliverables built for regulated professions (for example, law firms subject to Florida Bar rules, or healthcare providers) support, but do not replace, the professional judgment of the Client's licensed staff.

## 6. Confidentiality

6.1 "**Confidential Information**" means non-public information that one party discloses to the other that is marked confidential or that a reasonable person would understand to be confidential. It includes Client Data, business processes, pricing, prompts and source code.

6.2 The receiving party will (a) use Confidential Information only to perform or receive the Services; (b) protect it with at least reasonable care; and (c) share it only with personnel and subcontractors who need to know it and are bound by obligations at least as protective as these.

6.3 These obligations do not apply to information that is or becomes public through no fault of the receiving party, was already known to it, was independently developed, or was rightfully received from a third party. A party may disclose Confidential Information when required by law, after giving prompt notice where the law allows.

6.4 These obligations last for **three (3) years** after the Agreement ends, and indefinitely for trade secrets and Client Data.

## 7. Data protection and security

7.1 "**Client Data**" means all data the Client or its customers provide or make available to the Consultant, or that is processed through the deliverables.

7.2 **Security.** The Consultant will keep reasonable administrative, technical and physical safeguards for Client Data, consistent with F.S. 501.171. These include least-privilege access, unique credentials, multi-factor authentication, encryption in transit and at rest where supported, and access logs.

7.3 **Breach notice.** The Consultant will notify the Client **without unreasonable delay, and within ten (10) days**, after it determines that a breach of security affecting Client Data has occurred. It will cooperate so the Client can meet its own notice obligations, including the 30-day individual and Attorney General notices under F.S. 501.171.

7.4 **Personal data and PHI.** If the Services involve personal information, the parties will sign a **Data Processing Agreement**. If the Services involve PHI, the parties will sign a **HIPAA Business Associate Agreement before any PHI is shared**, and that BAA controls for PHI.

7.5 **Return and deletion.** Within thirty (30) days after a SOW ends, the Consultant will return or delete Client Data at the Client's choice, except for copies the law requires it to keep or that sit in routine backups, which remain protected under this Agreement.

## 8. Intellectual property

8.1 **Client Materials.** The Client keeps all rights in its Client Data, trademarks and pre-existing materials.

8.2 **Deliverables.** Once the Client has paid in full, the Consultant assigns to the Client all rights in the deliverables created specifically for the Client under a SOW, except for Consultant Materials.

8.3 **Consultant Materials.** The Consultant keeps all rights in its pre-existing and generally applicable tools, templates, workflow components, prompt libraries, code libraries, methods and know-how, including improvements made to them during the Services ("**Consultant Materials**"). To the extent Consultant Materials are built into a deliverable, the Consultant grants the Client a **non-exclusive, perpetual, royalty-free license** to use them internally as part of that deliverable.

8.4 **Third-party and open-source components** are licensed under their own terms, which the Consultant will identify in the documentation.

8.5 **Feedback and aggregate learnings.** The Consultant may use general know-how and de-identified, aggregated performance metrics that do not identify the Client or include Client Data.

## 9. Warranties

9.1 The Consultant warrants that the Services will be performed in a professional and workmanlike manner consistent with generally accepted industry standards. For **thirty (30) days** after acceptance, the Consultant will fix, at no charge, any defect that causes a deliverable to materially fail its acceptance criteria. This is the Client's sole remedy for breach of this warranty.

9.2 **Disclaimer.** EXCEPT AS EXPRESSLY STATED IN THIS AGREEMENT, THE SERVICES AND DELIVERABLES ARE PROVIDED "AS IS." THE CONSULTANT DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. THE CONSULTANT DOES NOT WARRANT THAT AI OUTPUTS WILL BE ACCURATE OR ERROR-FREE, THAT THIRD-PARTY SERVICES WILL BE AVAILABLE WITHOUT INTERRUPTION, OR THAT ANY PARTICULAR BUSINESS RESULT WILL BE ACHIEVED.

## 10. Indemnification

10.1 **By the Consultant.** The Consultant will defend the Client against third-party claims that a deliverable (excluding Client Materials and third-party components) infringes a U.S. intellectual-property right, and will pay resulting damages awarded or settlements it approves.

10.2 **By the Client.** The Client will defend the Consultant against third-party claims arising from (a) Client Data or Client Materials; (b) the Client's use of deliverables in violation of this Agreement or the law, including consent obligations under Section 5.4; or (c) the Client's business decisions or its removal of human-review steps.

10.3 **Procedure.** The indemnified party must give prompt notice, reasonable cooperation, and control of the defense to the indemnifying party.

## 11. Limitation of liability

11.1 **EXCLUSION.** NEITHER PARTY IS LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE OR DATA, EVEN IF ADVISED OF THEIR POSSIBILITY.

11.2 **CAP.** EACH PARTY'S TOTAL LIABILITY UNDER THIS AGREEMENT IS LIMITED TO THE **FEES PAID OR PAYABLE UNDER THE APPLICABLE SOW IN THE TWELVE (12) MONTHS** BEFORE THE EVENT GIVING RISE TO THE CLAIM.

11.3 **EXCEPTIONS.** Sections 11.1 and 11.2 do not apply to a party's indemnity obligations, a breach of Section 6 (Confidentiality) or Section 7 (Data Protection), gross negligence or willful misconduct, or the Client's payment obligations. For breaches of Sections 6 and 7, the cap is **`[2x]` the fees under the applicable SOW in the prior twelve months, or `[$X]`, whichever is greater**. *(Attorney note: match this to the firm's E&O and cyber insurance limits.)*

## 12. General

12.1 **Insurance.** While this Agreement is in effect, the Consultant will carry technology errors and omissions and cyber liability insurance of at least `[$1,000,000]` per claim, plus commercial general liability insurance and workers' compensation as required by Florida law.

12.2 **Independent contractor.** The parties are independent contractors.

12.3 **Non-solicitation.** During the term and for twelve (12) months afterward, neither party will solicit for employment the other party's personnel who worked on the Services, except through general job postings. If a party breaches this, it will pay a placement fee equal to **25% of the hired person's first-year base salary**.

12.4 **Publicity.** The Consultant may name the Client as a client and describe the Services in general terms **only with the Client's prior written approval**. Case studies using metrics require separate approval.

12.5 **Governing law and venue.** This Agreement is governed by the laws of the State of Florida. Exclusive venue lies in the state and federal courts located in **Miami-Dade County, Florida**. The prevailing party in any dispute may recover reasonable attorneys' fees. *(Optional: add mediation before litigation.)*

12.6 **Force majeure.** Neither party is liable for delays caused by events beyond its reasonable control, including hurricanes and other severe weather, power or internet outages, and third-party platform outages. Payment obligations are not excused.

12.7 **Notices.** Notices must be in writing and sent to the addresses above, or by email to `[EMAIL]` with confirmation of receipt.

12.8 **Entire agreement and order of precedence.** This Agreement, its SOWs, and any DPA or BAA make up the entire agreement and replace all earlier discussions. If they conflict, the order of precedence is: (1) BAA, for PHI; (2) DPA, for personal data; (3) this Agreement; (4) the SOW. Amendments must be in writing and signed by both parties. If any provision is unenforceable, the rest remains in effect. Neither party may assign this Agreement without the other's consent, except to a successor in a merger or sale of substantially all of its assets.

12.9 **Counterparts and e-signature.** This Agreement may be signed in counterparts and electronically.

| **`[FIRM LEGAL NAME]`, LLC** | **`[CLIENT LEGAL NAME]`** |
|---|---|
| By: ______________________ | By: ______________________ |
| Name: `[NAME]` | Name: `[NAME]` |
| Title: `[TITLE]` | Title: `[TITLE]` |
| Date: `[DATE]` | Date: `[DATE]` |

---

# STATEMENT OF WORK No. `[##]`

This SOW is issued under the Master Services Agreement dated `[MSA DATE]` between `[FIRM LEGAL NAME]`, LLC ("**Consultant**") and `[CLIENT LEGAL NAME]` ("**Client**").

## A. Engagement type
☐ AI Opportunity Audit ☐ 30-Day Workflow Sprint ☐ Managed Automation retainer ☐ Team AI Bootcamp ☐ Fractional Head of AI ☐ Other: `[ ]`

## B. Background and goals
`[One paragraph on the business problem. Example: "Client's 35-agent brokerage receives ~600 web, Zillow and WhatsApp leads a month. Median first response is 4 hours, and 30% of leads never receive a follow-up."]`

**Success metrics (baseline → target):**
| Metric | Baseline | Target | How it is measured |
|---|---|---|---|
| `[Median lead response time]` | `[4 hrs]` | `[< 5 min]` | `[CRM timestamps]` |
| `[Staff hours per week on task]` | `[ ]` | `[ ]` | `[Time study]` |

## C. Scope
**In scope:**
1. `[Discovery workshop and process map]`
2. `[Build: bilingual EN/ES AI lead responder connected to CRM X and SMS provider Y]`
3. `[Human handoff rules and an escalation inbox]`
4. `[Logging, monitoring dashboard, runbook]`
5. `[Staff training: 1 x 2-hour session]`

**Out of scope:** `[e.g., CRM migration, website changes, paid ads, legal review of message content]`

## D. Deliverables and acceptance criteria
| # | Deliverable | Acceptance criteria |
|---|---|---|
| 1 | `[Process map and solution design]` | `[Approved in writing by the Client project owner]` |
| 2 | `[Working workflow in production]` | `[Passes the agreed test set of 50 sample cases with ≥ 95% correct routing; no unhandled errors over 5 business days]` |
| 3 | `[Documentation and runbook]` | `[Covers setup, credentials, monitoring, rollback]` |
| 4 | `[Training session]` | `[Delivered; recording supplied]` |

## E. AI governance for this SOW
- **Data involved:** ☐ None ☐ Business data only ☐ Personal information (DPA required) ☐ PHI (BAA required) ☐ Privileged legal data
- **AI providers and settings:** `[e.g., Anthropic API, zero-data-retention; Twilio]`
- **Human-review steps:** `[e.g., any message mentioning price, contract terms or legal status goes to a human before sending]`
- **Prohibited uses:** `[e.g., no automated decisions on tenancy, credit or employment]`
- **Consent and outbound messaging:** `[Client provides written-consent records; quiet hours 9pm–8am; STOP opt-out handling]`

## F. Timeline
| Milestone | Target date |
|---|---|
| Kickoff and system access granted | `[ ]` |
| Design approved | `[ ]` |
| Build complete / test | `[ ]` |
| Go-live | `[ ]` |
| Stabilization ends (30-day warranty begins at acceptance) | `[ ]` |

The timeline depends on the Client providing access and decisions within **3 business days** of a request.

## G. Fees
| Item | Amount | Invoice timing |
|---|---|---|
| `[Fixed project fee]` | `[$12,000]` | 50% on signing / 50% on acceptance |
| `[Audit credit applied]` | `[($4,000)]` | — |
| `[Monthly retainer, starts at acceptance]` | `[$3,000 / month, includes 15 hours]` | Monthly in advance |
| Extra hours beyond the retainer bank | `[$175 / hour]` | Monthly in arrears |
| Third-Party Costs | `[Billed to Client's own accounts]` | — |

## H. Assumptions
`[e.g., The Client's CRM has an available API on its current plan; content templates are approved by the Client; up to 2 rounds of revisions on message copy.]`

## I. Project contacts
| Role | Consultant | Client |
|---|---|---|
| Project owner | `[ ]` | `[ ]` |
| Technical contact | `[ ]` | `[ ]` |

| **`[FIRM LEGAL NAME]`, LLC** | **`[CLIENT LEGAL NAME]`** |
|---|---|
| By: ______________________ | By: ______________________ |
| Name / Title / Date: `[ ]` | Name / Title / Date: `[ ]` |
