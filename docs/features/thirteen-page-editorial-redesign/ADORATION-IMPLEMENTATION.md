# Adoration implementation — thirteen-page editorial redesign

## Authorization and boundary

Parent coordinator assigned implementation of the approved thirteen-page plan's five Adoration routes on 2026-11-02. Owner steering puts guided Adoration and guided Holy Hour first: `/adoration/companion` and `/adoration/companion?mode=holy-hour`. The companion implementation is unchanged and out of scope. No deployment or release action was taken.

## Route disposition

- Adoration hub: photo-led hero and companion entry points; the existing interactive quiet room remains through `AdorationPortal`. Removed the redundant `AdorationStreamRoom` outer Melbourne promotions and navigation cards, with recorded-review/availability qualification beside the actual room. The original `/adoration#holy-hour-guide` target now offers visual entry to the full dedicated written guide. Original what-is, first-visit/etiquette, prayer selector, Scripture, prayers, local Adoration guidance, FAQ, resources, and copyright remain. Repeated instructions, saint/family/explorer promos, and related grids were consolidated into purpose-led guidance and existing destinations.
- Holy Hour: moved the complete existing `HolyHourGuide` here, preserving its `holy-hour-guide` anchor and all guided-prayer bodies/copy controls. Removed the second abbreviated five-card sequence to avoid teaching the same journey twice. Preserved distraction, short-visit, and first-visit guidance in three concise optional disclosures and retained related destinations.
- Live: one H1 and compact photographic hero; directory with all existing search/filter/result behavior remains the primary content. Removed repeated featured-stream/Melbourne promotion and search-engine-style prose. Added explicit recorded-status caveat and sacramental-life qualification.
- Melbourne: companion-first hero; retained actual stream destination, location, description, and formatted last-checked date; fallback to directory if stream data is unavailable. Kept short prayer instructions, perpetual-Adoration explanation, Mass connection, and related destinations. Generic supporting photograph is not represented as the Melbourne chapel.
- Meditation: compact photo-led entrance, companion CTAs, visible devotional/imagined-dialogue disclaimer, native mobile contents, narrow reading measure, quiet separators, full opening/closing prayer. All ten movement blocks and all thirty Citation elements are byte-equivalent to HEAD. Changed only the misleading navigation label for `#communion` to “Do not walk alone.”

## Reuse and isolation

- Reused existing Editorial components with coordinator-provided `compact` hero and `longform` page options; local meditation CSS controls its reading measure without global typography changes.
- `AdorationNav` gains opt-in compact sibling navigation, used only on these five routes. Default behavior and other routes remain unchanged.
- Existing metadata and structured-data objects remain. The old `#how-to-pray` anchor points to the first-visit guidance disclosure; `#first-time` and `#what-is-adoration` remain. No new data source, service, storage key, player logic, or dependency was introduced.
- Initial heroes use the licensed editorial Eucharist image; source/photography coordinator can map each explicit hero path to the final chosen image. Shared image component owns sizing, preload, credits, and manifest alt text.

## Validation and follow-up findings

- Read installed Next.js image guidance and the UX/Formation role before editing.
- Focused ESLint passed for all five routes and AdorationNav; final tiny anchor alias verified by source inspection.
- Automated source comparison: all ten meditation movement blocks unchanged, 30/30 citation occurrences, companion files unchanged.
- Coordinator handles complete typecheck/build and rendered mobile/desktop verification after shared interface changes.
- Existing retained `AdorationPrayerPathSelector` emits the chosen need; privacy audit should remove that selection payload. Its source file was outside this implementation assignment.
- Existing stream directory mobile filter stack remains functional but lengthy; consider compact advanced-filter disclosure in its shared component during coordinated QA.
- Existing shared HolyHourGuide clipboard denial is silent. Its source file was outside this implementation assignment; add accessible failure feedback during coordinated tool review.

## Bounded shared-tool follow-up

- Added opt-in `compactFilters` to AdorationStreamDirectory, enabled only on `/adoration/live`. Search, announced result count, and Clear filters remain visible; all advanced filters live in a native disclosure that can be opened at any viewport. Existing consumers retain the expanded filter presentation by default.
- Labeled the status filter as recorded status and the live option as “Live at last check”; added an explicit uptime qualification. Preserved every filter and added an accessible full reset / useful empty-state recovery.
- Added `HolyHourGuide.pagePath`, defaulting to `/adoration`, and supplied `/adoration/holy-hour` from the dedicated route. Copy now announces success/failure; synchronous print failure receives a readable status message. Prayer/source data and player behavior remain untouched.
- Focused ESLint passed for both components and the two prop-call routes. Diff whitespace check passed. Coordinator's current hero image mappings were preserved.
