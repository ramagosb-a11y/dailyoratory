# IDEA — Reading and Reflections review page

- Feature ID / owner / date: `reading-and-reflections-review` / repository owner / 2026-09-26.
- Goal and user problem: Provide a calm, guided way to pray with the day's Mass readings, save a private word and reflection, and continue to Catholic study sources without changing the current Mass Readings page during review.
- Audience and desired prayer/formation outcome: Visitors praying with Scripture who want help noticing a phrase, recording a brief response, and revisiting it later.
- Existing related routes, components, data and instructions: `src/app/reflections/mass-readings/page.tsx`, `CurrentMassReflectionSection`, `TodayMassReflectionFull`, `MassReadingsReflectionHero`, mass-reading reflection records, `createPageMetadata`, root analytics and storage guidance in `AGENTS.md`.
- Repository revision and existing dirty files: Canonical `brotherhood-of-ascension`, branch `main`, clean at discovery; source-of-truth confirmed by `SOURCE_OF_TRUTH.md`.
- Content change / code change / both: Both. Use devotional copy and prayer supplied by the owner; add the approved open-ended reading questions; build a local-only Scripture journal and study links.
- In scope: Unindexed review route `/reflections/reading-and-reflections`; Step 1 above the existing Read · Reflect · Pray hero marked Step 2; same daily reflection content; journal below the reflection; copy-all and copy-entry controls; date-matched external Douay-Rheims/Haydock resources, New Advent Genesis 1, HeavenBound; local accessibility/privacy/SEO checks.
- Explicit non-goals: Change `/reflections/mass-readings`; deploy, push, merge, add navigation/sitemap entry, introduce accounts/server storage/analytics, embed copyrighted Bible text, auto-send user notes to any external service.
- Constraints: Next.js 16 App Router; server-render page with small client islands; use current parchment/manuscript identity; no new dependencies; preserve private text in localStorage only.
- High-risk subject matter: Personal spiritual reflections and Scripture-resource attribution; no new doctrinal claim or Scripture quotation is authored.
- Open owner decisions: None. Owner approved the review-page contract in the conversation and directed implementation on 2026-09-26.

## Stage selection by Oratory Lead

| Stage | Required / not-applicable | Evidence and reason | Assigned reviewer |
| --- | --- | --- | --- |
| Repository/context | Required / completed | Canonical source and current App Router implementation inspected; working tree clean. | Codex, Oratory Lead |
| Catholic sources | Not applicable to new claims | Use public source-site links and reference labels only; do not reproduce lectionary or commentary text. | — |
| Formation/content | Preservation review | Prayer and introduction are owner-supplied; prompts are open questions and make no doctrinal assertion. | Codex, sequential review |
| Independent theology | Not applicable to scoped copy | No claim, quotation, or interpretation is added; stop and reopen if such content is introduced. | — |
| UX/accessibility | Required | New journal form, disclosure, copy controls, and reading order need keyboard/mobile/status review. | Codex, sequential review |
| Site/SEO | Required | New route is a temporary duplicate; explicit noindex, self-canonical, no sitemap/navigation entry. | Codex, sequential review |
| Privacy/safety | Required | Journal data, browser storage, clipboard, analytics, and external-link boundaries reviewed. | Codex, sequential review |
| Engineering and verification | Required | Implementation and local checks in canonical repo. | Codex Engineering |
| Code/diff review | Required | Sequential review by implementer; no independent agent review available in this task. | Codex Engineering; limitation reported |
| Human review | Required | Owner review of the concrete local page remains pending. | Repository owner |

## Next handoff

Implement DEVELOPMENT-SPEC v1 in the canonical repo, then complete the local report and hand off the review route for human approval. No production publication is authorized.
