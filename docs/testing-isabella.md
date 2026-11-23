# Testing Isabella's Knowledge Folder

**Isabella** (`brand-content-strategist`) reads everything in `knowledge/brand-content-strategist/` before she answers. This guide gives you sample documents to put there, test prompts to try, and what a good answer looks like, so you can see whether the knowledge folder changes her answers.

> This guide is kept in `docs/`, outside her knowledge folder, so she doesn't read the expected answers before you test her.

## 1. What's in her folder now (sample documents)

All of these are **clearly labeled SAMPLE / FICTIONAL**. They exist only for testing. Replace them with real material later.

| File | What it teaches her | What to watch for |
|---|---|---|
| `2026-11-23-brand-guidelines.md` | Positioning (EN/ES), voice, tone by channel, bilingual rules (*usted*, neutral Latin American Spanish), words to use or avoid, claim rules, calls to action, hashtags | Does she follow the voice and word rules? |
| `2026-11-23-visual-identity.md` | Logo rules, colors (Deep Bay `#0B2545`, Sunrise `#FF6B4A`, …), fonts (Fraunces, Inter), imagery rules (no robots) | Does she use the palette and fonts? |
| `2026-11-23-logo-wordmark-sample.svg` | A placeholder wordmark logo | Can she describe it? |
| `2026-11-23-case-study-sample-brickell-brokerage.md` | A fictional before/after case study (4 hours → under 1 minute response) | Does she warn that it's fictional and not approved for publication? |
| `2026-11-23-testimonials-sample.md` | 4 fictional testimonials with approval statuses (Approved, Pending, Declined) | Does she use only the approved ones? |
| `2026-11-23-past-posts-performance-sample.csv` | 12 fictional past posts with impressions, engagement, clicks and leads | Does she spot the patterns (Spanish carousels and demos win; hype and polls lose)? |

## 2. How to ask her

In a Claude Code session opened in this project, use any of these:

```text
@"brand-content-strategist (agent)" <your question>
```

```text
Ask Isabella (the brand-content-strategist): <your question>
```

```bash
claude --agent brand-content-strategist
```

## 3. Test prompts and what a good answer looks like

| # | Prompt to paste | A good answer… |
|---|---|---|
| 1 | `Isabella, introduce yourself and summarize our brand in 5 bullets. Cite which files you used.` | Introduces herself as Isabella. Gives the positioning, the five things we stand for, the voice ("trusted local advisor, never hyped") and the bilingual rules. Cites `knowledge/brand-content-strategist/2026-11-23-brand-guidelines.md`. |
| 2 | `Write a LinkedIn post in English and Spanish about how fast AI can answer real estate leads. Pick the best format based on our past posts.` | Recommends a **carousel or before/after format** (the top performers in the CSV). Uses *usted* in the Spanish. Avoids banned words ("revolutionary", "game-changer"). Uses at most 3 hashtags and the standard call to action. **Flags that the Brickell numbers are fictional sample data and can't be published as a real result.** |
| 3 | `Put the immigration law firm testimonial on our homepage.` | **Declines or pushes back:** T3 is *Pending*. Suggests an approved one (T1 or T2) or waiting for approval. |
| 4 | `Use the freight forwarder quote in a sales deck.` | **Declines:** T4 is *Declined* and must never be used. |
| 5 | `Which kinds of posts should we make more of, and which should we stop? Use the numbers.` | Reads the CSV: Spanish carousels (7.8%) and before/after posts lead; demo videos and pricing posts are strong; the newsletter is the best lead source (5 leads); hype posts (1.7%) and polls (0 leads) underperform. Recommends a content mix. |
| 6 | `Write a post saying our AI is revolutionary and 100% HIPAA compliant.` | Pushes back on both claims, citing the word list and claim rules. Offers compliant wording instead ("built with HIPAA safeguards and a BAA"). |
| 7 | `Describe the cover slide for a carousel about law-firm intake.` | Uses a Sand background, a Deep Bay headline in Fraunces, a coral highlight on the metric, and the logo on the last slide only. No robots or circuit boards. |

**Scorecard:** count how many of the 7 she gets right. A strong result is 6-7.

## 4. A before/after comparison (optional)

To see how much the knowledge folder changes her answers:

1. Ask prompt 2 and save the answer.
2. Temporarily move the sample files out of the folder. For example, move them into a new folder `knowledge-off/` at the project root.
3. Ask prompt 2 again. Without the folder she falls back on general research: no palette, no testimonial rules, and no data on past posts.
4. Move the files back.

## 5. Replacing the samples with real material

When you have real brand material:

1. Delete the `*-sample*` files and the sample brand files, or edit them into your real versions.
2. Add real, **client-approved** case studies and testimonials, each with its approval status.
3. Export real post performance from LinkedIn analytics as a CSV and add it with the date in the file name.
4. Put anything sensitive (unpublished client results, contracts) in `knowledge/brand-content-strategist/private/`. Isabella reads it locally, but it is never committed.
5. If an answer misses something, ask: `Ask agent-architect to improve Isabella using this example: <prompt + what went wrong>`.
