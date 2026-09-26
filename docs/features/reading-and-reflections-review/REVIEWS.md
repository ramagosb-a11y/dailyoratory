# Review packet — Reading and Reflections review page

Feature: `reading-and-reflections-review`; DEVELOPMENT-SPEC v1; 2026-09-26.
Reviewer: Codex, sequential role review. Advisory only; not independent human, theological, or publication approval.

## Content and sources — preservation review

Use the introduction, emphases, and prayer exactly as supplied in the attached feature request. Add the three approved reflection questions exactly as written in the owner's approved plan. Do not reproduce the attached lectionary screenshots or commentary. The Word file is an example routine for Ecclesiastes 3:1–11 and identifies these study helps: Douay-Rheims, Haydock, and HeavenBound's biblical connections, linguistic study, and traditional commentary. New Advent's Genesis 1 link is an additional fixed resource. No theological assertions or attributed quotations are added by this implementation.

## UX / accessibility — ready for implementation

Put Step 1 before the existing Read · Reflect · Pray section, which becomes Step 2 on the review page only. Keep fields compact and stacked on mobile; the prayer disclosure starts collapsed and uses a native button with `aria-expanded`, `aria-controls`, visible focus, and no animation requirement. Label inputs explicitly and keep validation/status text perceivable. Journal entries are readable cards, not a table; show seven newest first and an accessible toggle for older entries. Copy-all and per-entry controls report success/failure without moving focus. The edit-today action scrolls and focuses the Step 1 word field.

## Site / SEO — ready for implementation

Create only `/reflections/reading-and-reflections`. Use the existing metadata helper with `noIndex: true`, a page-specific canonical, and accurate title/description. Do not add this review route to navigation or sitemap. Preserve current route behavior and canonical metadata. Keep the review route prerenderable and avoid private content in metadata, query strings, or structured data.

## Privacy / safety — ready for implementation

Fields are the user's word/phrase and short reflection. Persist only in a versioned localStorage object with visitor-local `YYYY-MM-DD` keys, creation/update timestamps, strict field-length validation, and graceful parse/storage failure states. Use no new analytics and do not add journal text to any event, URL, log, API, metadata, or external URL. Clipboard actions are explicitly user initiated; show users exactly when copy succeeds or fails. External study links are built only from public Mass Reading reference labels, never from saved user text. Do not promise encryption or server-side privacy.

## Theology screen — not applicable to scoped implementation

No new doctrinal statement, Bible quotation, commentary quotation, or interpretation is authored. Content preservation is a release acceptance requirement. Any substantive rewrite or added theological claim requires source research and independent review before publication.

## Remaining review

After implementation, complete automated/local browser checks with synthetic journal strings and inspect the diff. The code review will be sequential self-review because no independent reviewer is available in this task. Human review of the local route is still required; production authorization remains absent.


## Visual refinement v2 — UX / Formation review — ready with fixes applied

Feature: `reading-and-reflections-review`; DEVELOPMENT-SPEC v2; 2026-09-26.
Reviewer: independent UX review agent, read-only. Advisory; not a human approval.

The reviewer found the previous cream Step 1 and parchment follow-on sections visually disconnected from the Step 2 navy hero. Recommended a unified navy/gold surface, warm paper writing panels, a bound notebook treatment, and clear “Today’s readings” and “Further study” pathways. Keep external passage actions tied to their references; retain discernible Haydock book/chapter fallback wording. Preserve field, prayer, and reading order.

Re-review noted dark title/summary contrast on the journal’s navy cover, duplicate parchment utility class on Step 1, and a duplicate spine width. Fixes applied: journal heading now sits on the ruled-paper inset; removed the parchment utility and duplicate width; prevented the page’s shared generic section rule from overriding the three designed navy panels. Reviewer confirmed the grouped resources and responsive stacking are coherent in code. Narrow viewport/200% zoom rendering still needs local visual confirmation.

Decision: ready for implementation; visual refinements authorized by the owner in v2.
Scope limit: no copy, prayer, journal data flow, analytics, or route/SEO behavior changed.


## Daily editor and history layout v5 — UX / Formation review — ready

Feature: `reading-and-reflections-review`; DEVELOPMENT-SPEC v5; 2026-09-26.
Reviewer: independent UX review agent, read-only. Advisory only.

Confirmed current storage uses `entries[YYYY-MM-DD]`: one entry per visitor-local date, same-day saves update, and entries from other dates remain in history. Recommended keeping Step 1 focused on reading guidance/prayer/USCCB, moving the single daily editor directly below the reflection, and putting journal history after all Scripture resources and archives. Use a native history anchor to a focusable target; keep entries newest-first with copy controls. The edit-today action should return focus to the word field and honor reduced-motion. No storage or privacy model change required.

Implementation follows that structure. One editor remains; history is the final section, “View Journal History” links to it, and all entries appear newest-first there. Exact one-entry-per-local-day behavior is stated beside the editor. Owner authorized this layout on 2026-09-26.
Final browser QA of anchor navigation and mobile layout remains part of acceptance.


## History placement v7 — owner-directed update

Owner requested Journal History directly above the month calendar on 2026-09-26. The page now orders Scripture study and supplemental resources, Journal History, then the month calendar. The history button below today’s reflection still points to the history anchor.
