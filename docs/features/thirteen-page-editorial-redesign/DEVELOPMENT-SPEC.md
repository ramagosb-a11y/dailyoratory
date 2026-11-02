# Thirteen-page editorial redesign — approved contract

Revision r1, with source-review corrections r2, 2026-11-02. Owner authorized implementation with “Implement the proposed plan.” This refers to the full thirteen-page plan presented in this conversation. Status: implemented-awaiting-human-review. Production release is not authorized.

## Confirmed decisions

Use the newer editorial palette, serif hierarchy and real photography. Curate and source-review: remove repetition and author-facing scaffolding while preserving complete prayer texts and meaningful qualifications. Promote the homepage companion URLs /adoration/companion and /adoration/companion?mode=holy-hour on Adoration pages. The companion itself remains unchanged.

## Page contract

| Route | Required composition |
|---|---|
| /indulgences/detachment-from-sin | Foundation, conversion, planner near top, seven-day practice, complete prayers, questions/sources; preserve usual conditions and anti-scrupulosity safeguards. |
| /adoration/meditation-before-the-blessed-sacrament | Compact photo opening, full ten-movement reading, original imagined-dialogue disclaimer, opening/closing prayer and all chapter IDs. Correct communion label without changing body. |
| /adoration/holy-hour | Companion-first actions, expanded written HolyHourGuide relocated from hub, short-visit/distraction help, copy/print and sources. |
| /community/group-discussion-topics | Photo introduction, compact topic index, expandable full published sessions, facilitator notes, private-Confession boundary, existing slug anchors. |
| /adoration | Homepage guide actions, existing stream room, focused prayer paths, beginner help, Scripture/prayers, local guidance and sources; remove duplicated full guide and Melbourne promotions. |
| /homilies | Photo hero, one featured selection, complete filtered approved library, collections, reflection guidance and rights/resources. |
| /adoration/live | Photo H1, immediate search/results, optional compact advanced filters, unchanged directory functions and honest recorded-status qualifications. |
| /adoration/melbourne | Source identity, stream access, dated review provenance, prayer help and local guidance; contextual photos clearly identified. |
| /pray/today | Compact photographic introduction, generated liturgical prayer, copy/print, concise continuation; retain ISR/model and original authorship. |
| /sacramentals | Foundation/distinctions, photo catalog, prominent finder, blessing/use/care, prayers, sources/purchasing with disclosures. |
| /relics | Foundation, visit preparation, classes/reliquary, history/prayer, authenticity/commerce/care/healing qualifications and sources. |
| /prayers/litanies | All seven available registry entries in responsive illustrated catalog; no shelf/carousel dependency; preserve individual prayer experiences. |
| /councils | Complete single council explorer, topic finder, authority distinctions, featured council links, living faith and sources; preserve 21 councils and full detailed data. |

## Engineering and data boundaries

Reuse Editorial components; add opt-in compact hero and longform wrapper styling/anchor reveal. Existing callers keep defaults. Compact Adoration navigation is opt-in on requested five routes. Preserve canonical URLs, metadata/schema, useful anchors, approved/published filters, static/ISR safeguards, existing media pipelines and no-autoplay behavior. No API, database, paid dependency, scheduled job or new feed.

Detachment receives an opt-in safe-storage path in the existing shell. Keep its key, known string schema and manual save/load. Catch denial/corruption; ignore invalid fields without overwriting saved data; Clear removes saved key and resets memory, accurately announcing failures. Default callers unchanged. Remove choice/recommendation-derived telemetry from the five retained selectors. Add accessible copy/print failure feedback where affected.

Photos need creator/source/license/modification records, local optimized WebP, reserved dimensions, one preloaded hero and lazy secondary loading. Retain substantive Catholic wording unless exact changes are documented and independently source-reviewed. Necessary qualifications stay beside their actions.

## Acceptance

Capture before/after at 1440 and 390; check all routes at 320 and 200% zoom. Verify one H1, no page overflow, readable crops/overlays, keyboard/focus/disclosures, anchors, complete prayers, tools and catalog coverage. Exercise storage save/load/clear/reload/denied/corrupt state and clipboard/print using synthetic data. Inspect outbound analytics for private markers. Check media fallback/no-autoplay, daily prayer date/context and unaffected shared callers/companion.

Run lint, typecheck, build and rendering guards, images, URL validation, SEO, analytics privacy tests and client-store audit. Resolve independent source/code findings. Deliver local URLs, screenshot comparisons, disposition/source ledgers, image savings and limitations; do not commit or deploy.
