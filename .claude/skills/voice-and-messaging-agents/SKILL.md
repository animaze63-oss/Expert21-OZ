---
name: voice-and-messaging-agents
description: "Design and configure AI voice agents (receptionists, inbound/outbound calls) and SMS/WhatsApp chat agents in English and Spanish with Twilio, Vapi, Retell or similar, including consent capture, opt-out, quiet hours and handoff to humans. Use for any phone, SMS or WhatsApp automation."
metadata:
  used_by:
    - hospitality-expert
    - voice-conversational-ai-specialist
---

# Voice and messaging agents

Used by: `hospitality-expert`, `voice-conversational-ai-specialist`. Part of the Experts21-OZ team (see `CLAUDE.md` and `docs/expert-roster.md`).

## Procedure

1. Define the use case: inbound or outbound, channels, hours, languages, intents, and when to transfer to a human.
2. Check compliance first (regulatory-compliance): consent records for outbound marketing, opt-out keywords (STOP/ALTO), quiet hours (for example 8am-9pm local), call-recording disclosure, AI disclosure where appropriate.
3. Design the conversation: greeting, language detection or choice, intents, data capture, confirmations and fallback. Write natural Spanish, not literal translation.
4. Configure the platform: phone numbers, A2P 10DLC registration for SMS, voice and latency settings, transfer numbers, and CRM write-back.
5. Test with real accents, background noise, interruptions and edge cases. Measure containment, transfer rate and errors.
6. Monitor transcripts weekly in the first month and tune.

## Output template

Conversation design (EN/ES), platform configuration notes, a compliance checklist, a test report and a monitoring plan.

## Quality checklist

- [ ] Consent and opt-out verified
- [ ] Quiet hours enforced
- [ ] Human transfer works
- [ ] Spanish reviewed by a fluent speaker
