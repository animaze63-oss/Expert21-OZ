---
name: regulatory-compliance
description: "Check a plan, workflow, AI deployment, message or contract against the rules that apply to this firm and its clients: HIPAA, Florida FIPA (F.S. 501.171), TCPA and the Florida Telephone Solicitation Act, the GLBA Safeguards Rule, CAN-SPAM and Florida Bar AI guidance. Use before any client deployment or outbound campaign."
metadata:
  used_by:
    - healthcare-practice-expert
    - legal-industry-expert
    - financial-services-expert
    - voice-conversational-ai-specialist
    - security-privacy-engineer
    - business-contracts-attorney
    - regulatory-compliance-officer
---

# Regulatory compliance check

Used by: `healthcare-practice-expert`, `legal-industry-expert`, `financial-services-expert`, `voice-conversational-ai-specialist`, `security-privacy-engineer`, `business-contracts-attorney`, `regulatory-compliance-officer`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Identify the data involved (none, business data, personal information, PHI, financial data, privileged legal data) and the channels (email, SMS, voice, web chat).
2. Map which rules apply (see the reference below) and what each one requires for this case.
3. Check the design against each requirement: consent, notices, BAA/DPA, security safeguards, retention, human review, breach-notice readiness.
4. List the required changes as must-fix (blocking) or should-fix.
5. Mark the output as a compliance review, not legal advice, and escalate anything unclear to `business-contracts-attorney`.

## Output template

**Data and channels:** …

| Rule | Applies? | Requirement | Status (OK / Gap) | Fix |
|---|---|---|---|---|

**Must-fix before launch:** bullets. **Should-fix:** bullets.

*Compliance review, not legal advice. Confirm with a Florida-licensed attorney.*

## Quality checklist

- [ ] Every channel and data type was considered
- [ ] Gaps carry concrete fixes
- [ ] Consent is covered for any outbound SMS or voice
- [ ] Labeled as not legal advice

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- HIPAA: handling PHI makes the firm a business associate. Sign a BAA, follow Security Rule safeguards, and use only AI vendors that sign BAAs.
- F.S. 501.171 (FIPA): reasonable security is required. Notify affected individuals within 30 days of a breach, and the Florida Attorney General if 500 or more Floridians are affected. A third-party agent must notify the client within 10 days. Penalties run up to $500K.
- TCPA: the FCC treats AI-generated voices as 'artificial', so prior express written consent is needed for marketing calls and texts. The Florida Telephone Solicitation Act (F.S. 501.059) allows private lawsuits. Honor opt-outs and quiet hours.
- GLBA / FTC Safeguards Rule: applies to financial institutions, insurance agencies, tax preparers and auto dealers.
- CAN-SPAM: honest headers and subject lines, a physical address, and a working opt-out honored within 10 business days.
- Florida Bar Ethics Opinion 24-1: lawyers using generative AI must protect confidentiality, supervise outputs and bill ethically.
- Florida Digital Bill of Rights: applies mainly to companies with more than $1B in revenue, but its terms can be passed down through client contracts.
- Florida AI bills in 2026: SB 482 (AI Bill of Rights) passed the Senate 35-2 and died in the House on 3/13/2026. HB 1395 and HB 659 also died. SB 484 (ch. 2026-65), which covers data centers, became law.
