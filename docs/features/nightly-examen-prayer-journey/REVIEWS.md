# REVIEWS — Nightly Examen Prayer Journey

- Feature/spec revision: `nightly-examen-prayer-journey` 0.4; content revision 2.0
- Review date: 2026-09-27
- Overall decision: Owner approved focused page 4 copy edits on 2026-09-27. UX/SEO and privacy reviews returned ready/conditional-pass findings and the independent implementation review identified two P2 issues, both addressed below. Reverification is recorded in `IMPLEMENTATION-REPORT.md`. This file is not human ecclesial approval.

## Repository, UX and route evidence (Oratory Lead, 2026-09-27)

Inspected canonical repository `brotherhood-of-ascension` on `main`, remote `origin` at `https://github.com/ramagosb-a11y/dailyoratory.git`. The exact route exists at `src/app/daily-examen/nightly/page.tsx`, calls `createPageMetadata` and renders a standalone experience. Sitemap already includes `/daily-examen/nightly`. No alternate route needs creation.

The current standalone Examen is a single, centered dark card with a decorative candle and one repeated image, interactions for pace, journaling, gratitude categories, emotional movement, prayer, completion, resume and a Grace Map. The Morning Prayer experience in `src/components/morning-prayer/MorningPrayerExperience.tsx` uses a mobile-first, photo-led split composition: large art panel; parchment/ivory reading panel; distinct step/progress text and segmented indicator; spacious serif prayer; sticky bottom Previous/Continue controls. This maps directly to the requested visual direction. Nighttime colors and the content voice should remain distinct. The Nightly route currently overrides normal header/footer in CSS; retain existing navigation/exit patterns deliberately during redesign rather than accidentally removing site access.

Current Examen data model and `src/lib/dailyExamenStorage.ts` store one draft and up to 90 completed sessions in a single versioned localStorage key. Draft/session include spiritual reflection strings. UI emits start, mode, step, complete, resume and clear event names and categorical step/pace data. Root analytics page tracker is another potential path/query boundary; inspect before changing telemetry. Existing browser storage is not encrypted. Code changes must not add journal content to analytics/network/URL or erase existing sessions. Existing worktree has staged and unstaged/untracked edits in other feature areas plus modifications to Morning Prayer/Night Prayer components; do not overwrite or stage them.

No implementation or independent UX/SEO/privacy review was performed. UX review is required for the new responsive/keyboard/focus/reduced-motion flow. SEO review must verify existing helper/canonical/open graph and route after metadata change. Privacy review must map optional new journal/resolution fields through draft/session serialization, clear/restart, analytics, storage denial and refresh. No route/sitemap/nav change appears necessary.

## Catholic Sources — preliminary primary-source ledger (Oratory Lead search, 2026-09-27)

| Claim/content scope | Primary source and exact location | Preliminary support/limit | Status |
| --- | --- | --- | --- |
| Proposed page 4 Confession note: sacramental Reconciliation is distinct from personal examen | Vatican, [Catechism of the Catholic Church, Sacrament of Penance and Reconciliation](https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_two/article_4/vii_the_acts_of_the_penitent.html), §§1454–1457; accessed 2026-09-27 | §1454 says examination of conscience prepares for the sacrament; §§1455–1457 describe confession to a priest and obligation regarding serious sins. This supports a distinction; exact “not a substitute” wording is a prudential summary, not a quotation. | Preliminary; source reviewer needed |
| Act of contrition and purpose of amendment | Same Vatican Catechism, §§1451–1453 | §1451 defines contrition including resolution not to sin again. §1452 describes perfect contrition and its firm resolution to seek sacramental confession as soon as possible. Do not imply that reciting a site prayer itself grants sacramental absolution or that all acts of contrition have identical effect. | Preliminary; exact prayer/caveat review needed |
| Examination of conscience | Same Vatican Catechism, §1454 | Examination is to be made in light of the Word of God as preparation for the Sacrament; it does not validate every prompt or mandate exhaustive repeated review. | Preliminary |
| Serious sin / confession timing | Same Vatican Catechism, §1457 | Speaks of confession of serious sins at least annually and states rules about Communion for a person aware of mortal sin. The supplied note's “as soon as reasonably possible” should be checked precisely against applicable text/canon and phrased without making a website diagnose mortal sin. | Preliminary; high-risk reviewer needed |
| Avoiding anxious repetition / advise priest when troubled | No primary source yet checked for the specific pastoral wording in the supplied note | Treat as pastoral safeguard and exhortation, not doctrine. Independent reviewer should assess scrupulosity risk and whether “avoid repeatedly examining the same matter” needs a gentle qualifier. | Unresolved |

The original user-supplied prayers are proposed original devotional compositions, not established liturgical formulas or attributed quotations. Page 6 short invocation “Jesus, I trust in You” is included without attribution in the brief; preserve that presentation unless content review requests context. No image has been selected; generated image assets can satisfy the requested rights path if provenance is documented.

## Independent Catholic Review — separate AI reviewer, 2026-09-27

**Verdict: changes required before release for the page 4 note and a few page 4 prompts.** The reviewer independently examined the supplied six-page copy against primary sources. Pages 1–3, 5–6 were broadly sound as devotional invitations; none claims that the website grants sacramental absolution. This is an AI review, not human ecclesial/theologian approval.

The supplied page 4 note is directionally good but its wording could imply that any sincere act of contrition substitutes for sacramental Confession. CCC §1452 ties forgiveness through perfect contrition to sorrow rooted in love of God and a firm resolution to seek sacramental Confession as soon as possible; §1453 distinguishes imperfect contrition. The reviewer recommends framing the note around a calm examination and speaking with a priest, and explaining mortal sin's grave matter, full knowledge, and deliberate consent without encouraging self-diagnosis. It suggested this paraphrase for owner consideration (not a quotation):

> This nightly examen is prayerful reflection; it does not replace sacramental Reconciliation. If, after a calm examination, you believe you may have committed mortal sin, speak with a priest and seek Confession. Perfect contrition includes sorrow rooted in love of God and a firm intention to confess as soon as possible. Mortal sin involves grave matter, full knowledge, and deliberate consent; do not try to settle a troubled conscience by repeatedly examining the same matter. Trust in God's mercy and ask a priest for guidance.

The reviewer says the proposed instruction to avoid repeated examination from fear/anxiety is pastorally and doctrinally apt; it cited John Paul II, *Reconciliatio et Paenitentia* §31, which describes examination as calm rather than anxious introspection. It recommends retaining that safeguard. For page 4 prompts, it recommends action-based wording where lists could make feelings themselves sound sinful (e.g. ask whether the person acted from anger, rather than implying anger itself is sin; ask how they responded to discouragement). Page 5's request for help changing is sound; reviewer suggests adding a direct purpose of amendment if owner wants alignment with CCC §1451.

Primary sources identified by the reviewer:

- Vatican, [Catechism of the Catholic Church §§1451–1454, 1456–1458](https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_two/article_4/vii_the_acts_of_the_penitent.html), accessed 2026-09-27.
- Vatican, [Catechism in Brief §§1495–1497](https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_two/article_4/in_brief.html), accessed 2026-09-27.
- John Paul II, [*Veritatis Splendor* §70](https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_06081993_veritatis-splendor.html), conscience and mortal sin conditions, accessed 2026-09-27.
- John Paul II, [*Reconciliatio et Paenitentia* §31](https://www.vatican.va/content/john-paul-ii/en/apost_exhortations/documents/hf_jp-ii_exh_02121984_reconciliatio-et-paenitentia.html), calm examination of conscience, accessed 2026-09-27.

**Owner decision:** On 2026-09-27 the owner explicitly approved “your recommendation.” The approved copy replaces the original page 4 note with the reviewer paraphrase above and reframes the emotion prompt as “How did I respond to anger, envy, resentment, or discouragement?” See `CONTENT.md` 2.0 and `src/data/nightlyExamenJourney.ts`. No other supplied prayers/prompts were changed. This copy still requires the owner’s separate human editorial/publication review.

## Formation/content review

Owner supplied the six-page copy. It is mapped to stable IDs in `CONTENT.md` 2.0 and the data module. Focused page 4 revisions correspond to the independent reviewer’s exact recommendation and owner approval; the UI preserves all other supplied text. Status: approved for local implementation.

## Independent Catholic review

Completed by a separate AI reviewer on 2026-09-27 for all six supplied pages. High-risk items: serious sin/mortal sin distinction; Confession direction and timing; act of contrition and sacramental effects; healing/mercy language; instruction against anxious repetition; conscience prompts. Original verdict was changes-required for the page 4 note and several prompts; the recommended revision was approved by the owner. Reviewer identity is independent from author, but this AI review does not replace human theological/editorial review. Status: review recommendation approved for implementation; human review remains before release.

## UX / Formation review

Independent read-only review completed 2026-09-27. Morning Prayer (`src/components/morning-prayer/MorningPrayerExperience.tsx`) provides photo/content split, safe-area-aware sticky navigation, readable prayer text, and step-heading focus with reduced-motion-aware scrolling. Reviewer approved a responsive split for the existing route and required retaining the local draft/resume, Grace Map/history and clear-data actions. It also recommended text-based page count, focusing the new heading on each step (rather than announcing the full prayer), meaningful image alt, visible focus, optional prompts/notes and reduced-motion support. Implemented as scoped: current draft and history stay on-device; hidden legacy categories/pace are offered as secondary choices; history and full clear remain; h1 focus and text progress added. Independent UX/browser verification remains part of implementation QA. Verdict: ready with these acceptance checks.

## Site / SEO review

Independent read-only review completed 2026-09-27. Existing canonical route, internal navigation, sitemap entry and `createPageMetadata` are already correct; no routing/nav/sitemap changes needed. Reviewer approved route retention and recommended updating title, description, OG image/alt then checking canonical/metadata, direct loading and sitemap. Metadata was updated with the requested title/description and new generated presence image; route and sitemap remain unchanged. Verdict: ready; build/local route and metadata checks remain.

## Privacy / Safety review

Independent read-only review completed 2026-09-27. Existing `daily-oratory-nightly-examen-v1` localStorage holds a draft and up to 90 completed sessions indefinitely until explicit clear; same-day resume; starting a fresh examen replaces the current draft. Notes are unencrypted and visible to anyone with access to the browser profile. Reads/writes already catch corrupt or unavailable storage; failed clear previously still claimed success. The added six notes and resolution are length-sanitized (5,000 chars per note; 500 for resolution), included in the same local draft/session store, and excluded from analytics/network/URL. “Pray without journaling” suppresses notes and optional private tags; allowed analytics event data is limited to fixed step IDs for view/step completion and no writing-choice, text, selected value, duration or session data. Full-clear now confirms and reports whether removal succeeded; privacy copy explains local storage, lack of encryption, and up-to-90 retention. Restart creates a fresh draft and preserves completed history. Storage denial warning remains. Verdict: conditional pass, subject to synthetic event/storage QA below.

Privacy / QA acceptance: Source inspection confirms no note/resolution strings are passed in analytics parameters or rendered into URLs/metadata. Browser interaction and storage failure scenarios were not manually exercised because the isolated local preview did not advance from the welcome screen, while the regular local origin showed existing saved history. The regular origin was left untouched to protect potentially personal prayer notes. See `IMPLEMENTATION-REPORT.md` for the exact limit.

## Codex Engineering and code review

Route, data store, asset set and approved copy revision mapped. UX/SEO, privacy and independent code-review findings have been reflected in the implementation. Typecheck, targeted lint, build, image, route and SEO checks pass; full repository lint baseline failures and partial browser coverage are reported. Desktop/tablet/mobile layouts were visually inspected. Human editorial/publication review remains before a production release. Status: implementation complete; release review outstanding.

**Independent implementation review (2026-09-27):** Review found that the “brief” pace did not suppress journaling and that legacy v1 draft fields (`gratitude`, `significantMoment`, `mercy`) were not populated into the new six-page notes array. Both findings were fixed: the quiet pace now starts and renders without writing; pace descriptions now match the fixed six-page journey; old draft fields are mapped to their corresponding page note on sanitization when no new notes array exists. Targeted ESLint, typecheck, and production build were rerun successfully after these fixes. The reviewer found no other scoped actionable issues.

## Consecutive completion amendment — focused independent reviews (2026-09-27)

Owner approved a completion-page encouragement showing the user's consecutive Examen nights and the clear-data fix, with commit to `main` and Production explicitly authorized. No prayer text, theology, route, or metadata changes are part of this amendment.

**Privacy / Safety reviewer verdict: ready with conditions met.** The existing local store already retains up to 90 completed sessions with `localDate`; existing completion replaces a session on the same local date. Derive the current sequence from unique local dates ending on this completion. Do not add a separate progress store, event parameters, or network flow. Suppress a saved-streak claim when storage fails. Clearing the single Examen key must remove the draft and history used by the calculation. Avoid broken-streak/guilt language. Reviewer identified missing focus containment/restoration in the recently added custom clear alert dialog; implemented Escape dismissal, Tab containment, focus on dialog entry, and focus restoration/heading handoff.

**UX / Formation reviewer verdict: ready.** Use brief, ordinary readable text on the completion view, without badge/flame/score treatment or an additional live-region announcement because the completion heading receives focus. Count unique local dates, deduplicate same-night completion, use the 90-session history cap, and suppress streak copy if saving failed. Welcome the user without drawing attention to a gap. No additional control, tracking, or animation is needed.

**Resolution:** Implemented a local-only count over saved completion dates. At 90 consecutive saved dates, copy says “at least 90” to reflect the history cap. The confirmation remains in-page and keyboard accessible, does not require the browser's native confirm prompt, and clear action removes the same history key. No journal text, completion dates, or counts are sent to analytics/network. Targeted lint, typecheck, build, and browser interaction verification remain recorded in `IMPLEMENTATION-REPORT.md`.
