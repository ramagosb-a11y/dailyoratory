# DEVELOPMENT-SPEC — The Armor of God

Revision 1 · 2026-10-29 · approved for local implementation, subject to source/content review. Owner authorization: the user's “PLEASE IMPLEMENT THIS PLAN” instruction and complete accepted plan in this conversation. No production authorization.

Final status: **implemented-awaiting-human-review**. Independent content/source and integrated code/privacy review completed; see REVIEWS.md. Executed acceptance evidence and command limitations are recorded in IMPLEMENTATION-REPORT.md. No production authorization was added.

Production release authorization, 2026-10-29: the owner subsequently instructed “commit deploy to production and main, not preview”. This authorizes committing the reviewed revisions 1–6 and publishing through the existing main-branch production integration, with no preview deployment. The local-only statements below describe their historical revision boundaries. See RELEASE.md for the release evidence and deployment result.

## Revision 2 — embedded Douay-Rheims Scripture

Owner authorization, 2026-10-29: “Should embed the scriptures using the Douay-Rheims Bible,”. Reuse the unchanged, independently verified Scripture archive. Embed the actual verses in armor recommendations and summary cards, including share/clipboard/print output. Consolidate existing foundation, Scripture-stage, explorer and morning quotations into a common presentation with reference, Douay-Rheims label and source link. No new quotation, devotional text, privacy input or external API is introduced. Validate exact embedded/exported text and print layout. Local implementation only; no production authorization.

## Implementation contract

### Revision 3 — Web team visual review and armor imagery

Owner authorization, 2026-10-29: “Have the Web team review the look and make it better, should be sharp and professional. I would like to add some pictures into the section like armor.” Authorizes the requested local design refinement, original armor imagery, and independent visual/UX review. Preserve the exact devotional data and verified Scripture. Add a photographic-style hero, six coordinated armor detail images, shield/Bible imagery, responsive typography, all-visible mobile navigation, a compact selection action, and concise explorer announcements. Use optimized local WebP/Next Image with explicit dimensions; retain labeled SVG/HTML controls. Independent reviews and evidence are in DESIGN-REVIEW.md and IMPLEMENTATION-REPORT.md. No production authorization.

### Revision 4 — second composition review

Owner authorization, 2026-10-29: “Review again and improve.” Restore the hero's complete 3:2 composition, move the four journey entry choices immediately after the hero, use compact photo-backed mobile choice cards, strengthen navigation/primary-action hierarchy, correctly mark My situations current during guided prayer, and provide paired landing invitations for Surrender and existing Silence. Preserve every devotional/Scripture record and the server-rendered foundation. Reuse the eight existing assets, with thumbnail-specific responsive sizes. No new dependency, source claim, storage, telemetry or release authorization. Independent final landing review is recorded in DESIGN-REVIEW.md; no new numeric score is asserted.

### Revision 5 — prayer-flow usability review

Owner authorization, 2026-10-29: repeated “Review again and improve”. Independent Web review identified four material mobile prayer-flow issues. Provide immediate limit feedback beside the sticky selection controls, a focus-managed shortcut to ordered selection review and return, and dynamic scroll clearance for the dock. Direct mobile armor choices must reveal the matching detail without changing desktop focus behavior. Lead the Armor stage with its unchanged situation-specific application and adjacent qualification, before supporting quotations; reduce diagram prominence. Present the mobile five-stage tracker in one row with a readable current-step count and accessible full stage names. Preserve exact prayer/Scripture content, private-state boundaries, existing assets, and wider-screen controls. Validate keyboard/focus, fourth-selection feedback, order/removal/review, all five stages and narrow/enlarged-text layouts, plus existing feature checks. No route, metadata, image asset, source claim, dependency or publication change; theological/source/SEO review is unchanged because the underlying text, quotations and public route remain unchanged. UX and integrated code review apply to this revision.

### Revision 6 — chosen homepage card and device-icon check

Owner authorization, 2026-10-29: “make sure there are no iphone icons on the homepage and new armor of god page. Choose #3 for homepage card”. Implement the reviewed Ivory Edition as a static homepage feature card linking to `/armor-of-god`, adjacent to Strongholds. Reuse the original armor image, existing Cormorant/Geist typography, approved title/tagline/reference, ivory surface, navy action and responsive layout from concept #3. Inspect homepage/Armor source and rendered content for phone/device icons and emoji, removing any found within this scope. Preserve sacred armor symbols, page behavior, Scripture, sources and privacy boundaries. No new artwork, dependency, interaction telemetry, storage, route or production authorization. Validate accessible card link, destination, image, keyboard focus, desktop/mobile/zoom, absence of device icons, metadata/canonical, plus build/typecheck/focused lint and related regression checks. Source/theology review unchanged because this reuses exact approved wording; UX/SEO discovery and image/rendering efficiency checks apply.

- Route `/armor-of-god`, static Server Component foundation with client interaction islands. Existing Next 16/React 19/Tailwind conventions, Cormorant/Geist fonts, navy/gold/ivory. Scoped midnight/ivory appearance. No new runtime dependencies.
- Primary CTA: select one to three of 31 situations, across four groups (8/8/8/7), then pray through each in selection order: Recognize, Scripture, Armor, Prayer, Live the Word. About 3–5 minutes each, optional contemplation, summary per situation and completed-card collection. Back/restart/return/resume while mounted.
- Six-piece SVG composition, equivalent accessible buttons, highlighted selected piece, distinct explored count, meaning/reflection/prayer/action, next piece and supplied completion phrase.
- Morning: six pieces and closing prayer; midday: five supplied movements; evening: five supplied questions, closing prayer, Last Light link. Optional silence, no required audio or waiting.
- Timer: 30/60/180/300 seconds; morning presets 15/30; surrender presets 30/60; start/pause/restart, accurate elapsed time after background, quiet finish status.
- Surrender: optional private concern, separate transient component state. Clear before generic transition, on exit/restart/completion/pagehide/pageshow. Never submit, persist, log, analyze or export it.
- Card DTO is an explicit allowlist: situation ID/title, armor names, Scripture reference, prayer, action. Visible preview before native sharing, copy fallback, and print/PDF. Private text is never a card input.
- No localStorage/sessionStorage, database/API, external AI, or feature interaction telemetry. Add sensitive route prefix; existing sanitized static page-view behavior remains.
- Add Pray/Devotions navigation and prayer tools directory; sitemap derives from primaryNavigation. Existing createPageMetadata canonical/OG/title conventions; WebPage and breadcrumb schema; add prerender audit requirement. No duplicate public routes.
- Preserve the user's supplied content; exact new copy and source evidence in CONTENT/RESEARCH and source records, with independent review before integration is accepted. Original reflections distinct from quotations/official teaching. No promised spiritual outcomes, diagnosis, or sacramental substitution.
- Public interface additions are local TypeScript records: ArmorId, ArmorPiece, ArmorJourney, ArmorStruggle, ScripturePassage, CatholicSource, ArmorCardSummary. No external endpoint/schema changes.

## Verification and handoff

- Focused data/source tests: six armor pieces, four journeys, 31 distinct complete records and 8/8/8/7 counts; known armor/source IDs; exact Scripture source fixture verification; distinct reflections/prayers/actions/applications.
- Browser: 1–3 choices, fourth-choice notice, selection order, every situation/all stages, back/restart/return/resume, every armor piece, three daily prayers, all timer controls/background time, optional/no-text surrender, text erasure and history restoration; exports/cancellation/clipboard failure/print isolation.
- Accessibility: mobile/desktop/zoom, reduced motion, both themes, semantic buttons and headings, focus, accessible status, contrast, no horizontal overflow/hydration errors. Existing six related experiences remain reachable.
- Privacy: synthetic markers only; inspect requests, console, dataLayer, DOM, URL, storage, native sharing, clipboard, print. No real prayer text in test evidence.
- Commands: lint, typecheck, build (pre/post guards), analytics privacy tests, client-store/rendering audit, URL validation, SEO preflight, citations, focused tests. Report actual exit codes, baseline failures, independent reviews, limitations and exact local URL.
- Final status: implemented-awaiting-human-review only after acceptance evidence and blocker resolution. No automatic commit/push/deploy/publication.
