---
name: contract-drafting-review
description: "Draft or review MSAs, SOWs, DPAs, HIPAA BAAs, NDAs, referral/partner and employment or contractor agreements, and flag risky clauses. Use for any contract question. Output is a draft for a Florida-licensed attorney to review."
metadata:
  used_by:
    - talent-hr-advisor
    - business-contracts-attorney
    - insurance-risk-advisor
    - partnerships-community-manager
---

# Contract drafting and review

Used by: `talent-hr-advisor`, `business-contracts-attorney`, `insurance-risk-advisor`, `partnerships-community-manager`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Identify the contract type, the parties, the purpose and which side we are on.
2. Compare against the firm's positions (see reference), clause by clause: scope, fees and payment, term and termination, acceptance, AI terms, confidentiality, data protection, IP, warranties, indemnities, limitation of liability, insurance, non-solicitation, governing law.
3. For each deviation, rate it (Acceptable / Negotiate / Reject) and propose replacement language.
4. Check consistency with insurance limits (insurance-analysis) and compliance needs (regulatory-compliance).
5. Always end with: Draft for review by a Florida-licensed attorney; not legal advice.

## Output template

| Clause | Their language (summary) | Our position | Rating | Proposed language |
|---|---|---|---|---|

**Top issues:** … *Draft for attorney review; not legal advice.*

## Quality checklist

- [ ] Every material clause reviewed
- [ ] Liability cap ≤ insurance limits
- [ ] IP split protects reusable components
- [ ] Labeled not legal advice

## Reference (from the research in docs/, November 2026; re-verify time-sensitive facts)

- Firm positions (docs/10): liability cap = 12 months of fees under the SOW; a higher cap (2x or a fixed amount) for confidentiality and data breaches; no consequential damages; client owns paid deliverables; firm keeps reusable components and licenses them to the client; client is responsible for TCPA/FTSA consent; 10-day breach notice to the client; Florida law with Miami-Dade venue; 30-day termination for convenience; net-15 payment.
