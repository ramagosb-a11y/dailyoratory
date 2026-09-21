# DEVELOPMENT-SPEC — Church Fathers learning redesign

## Identity and authorization

- Feature ID: `church-fathers-learning-redesign`
- Spec revision/date: `PLAN-R1` / 2026-09-20
- Status: owner-authorized for production release
- Owner: Brent
- Implementation approval: Owner message, 2026-09-20: “approved.” This approves the `PLAN-R1` redesign direction and source/content development. The required independent review subsequently cleared `RESEARCH-R1` and `CONTENT-R1` through `CONTENT-R1.2` for the limited four-door implementation scope on 2026-09-21.
- Required review artifacts and reviewed revisions: `IDEA.md` (`PLAN-R1`), `RESEARCH.md` (`RESEARCH-R1`), `CONTENT.md` (`CONTENT-R1` through `CONTENT-R1.2`), `REVIEWS.md` (four planning reviews, independent pre-content review, and final independent content re-reviews), UX/SEO implementation review.
- Production authorization: Owner message, 2026-09-21: “Commit deploy to production and main, not preview.”
- Re-review triggers: Any new/changed public claim, quoted material, external source/work selection, route/schema/metadata change, or data-flow change.

## Goal and scope

- Goal: Make `/church-fathers` teach first and catalogue second, so people can understand what the Church Fathers are, navigate one meaningful question, and confidently open a first work.
- User problem and audience: Newcomers face an extensive directory before they have orientation or a proportional first step; returning users need a fast path to purposeful study without losing access to depth.
- Existing related functionality and inspected evidence: `src/app/church-fathers/page.tsx`; all components in `src/components/church-fathers/`; static data in `src/data/churchFathers.ts`, `churchFatherReadingPlan.ts`, and `churchFatherTopics.ts`; `/bible` and its `BibleHero`/reading-path composition.
- Route/location: Preserve `/church-fathers`; retain `Breadcrumbs` and standard site chrome.
- Required existing components and contracts: Reuse `createPageMetadata`, `Breadcrumbs`, shared button/focus/token classes, and existing structured-data helpers if schema is retained/added after SEO review. Use existing father records only after each selected fact/link is sourced.
- New components only if necessary, with justification: A small route-specific `ChurchFathersLearningPath` composition and presentation-only sections may replace the current eleven modules. Do not add client state unless an approved interaction cannot be native HTML.
- Allowed files and dependencies: Route, focused Church Fathers components/data, metadata/structured-data/search-index callers required by the review, and this packet. No dependency additions.
- Explicit non-goals: No deletion of the global navigation/footer, route change, individual father page, quizzes, profiles, persistence, inbound-link breakage, copied patristic text, new assets, tracking, deployment, or broad cleanup of unused data outside reviewed scope.

## Content contract

- Exact approved content IDs/files/revisions: Pending `CONTENT-R1`; `PLAN-R1` approves architecture only.
- Source requirements and verified RESEARCH references: Pending `RESEARCH-R1`. Each material historical/theological claim and work link needs a ledger entry with source, exact location/context where available, edition/translation, rights, and access date. Prefer primary editions, official Church sources where relevant, and consciously chosen text repositories; treat New Advent/CCEL as destinations requiring validation, not automatic authorities.
- Theology/rights review and human approval evidence, or justified not-applicable: Required and pending. No excerpts or quotations are permitted in the initial redesign without explicit source/rights approval.
- Copy to preserve verbatim: None. Existing page copy is inventory only, not pre-approved for context-shifted reuse.
- Code changes versus content changes: Code changes reorganize the route and presentation. Editorial changes require the source ledger, formation content, and independent theological review first.

## Behavior

- User flow: Hero introduces the page and offers **Explore the questions** / **Start a first reading**. A three-step in-page nav moves to: (1) orientation, (2) four question-based learning doors, (3) a short reading path. A final optional archive entrance exposes historically grouped father records without returning the user to the current full-page wall.
- Mobile behavior: One column; concise hero actions; path links wrap; native disclosures remain closed initially; no content-dependent hover.
- Desktop behavior: Spacious editorial hero, clear path nav, differentiated section surfaces, and limited two-column question/reading cards where density supports reading.
- Empty/loading/error/complete/return states: Static server-rendered content. If a selected data record is absent, omit its card and keep the surrounding path valid; do not render a broken external control. There is no account/session completion state.
- Accessibility requirements (keyboard, focus, semantics, names/status, zoom): One `h1`; ordered `h2`/`h3` hierarchy; semantic nav/sections; clear external-link announcements; visible `focus-ring`; 44px targets; logical tab order; native details controls with useful labels; decorative elements hidden; support ~390px and 200% zoom; reduced motion only.
- Privacy requirements (fields, storage, deletion, network, exports): No fields, storage, exports, client tracking additions, or new network calls. Fixed outbound reading links are intentional and disclosed by accessible text.
- SEO requirements (canonical, metadata, sitemap, links, redirects, schema): Canonical stays `/church-fathers`; revise metadata/search copy to promise the final learning path, not a library/catalogue; retain sitemap/internal links; no redirect. Add/retain only schema supported by the actual reviewed page.
- Analytics requirements (event/parameter allowlist, or no new tracking): No new tracking or events.
- Performance/rendering and compatibility constraints: Preserve server/static behavior; no new image requirement or client island; use existing Tailwind tokens; preserve rendering/cache guards.

## Acceptance criteria and tests

| ID | Observable required behavior | Verification method / command | Expected result |
| --- | --- | --- |
| AC-1 | `/church-fathers` no longer renders the current eleven-module catalogue stack. | Source/render audit and local browser review. | Old hero, group grids, topic grid, reading-plan list, weekly/Mass/sources/tools/note panels are absent as separate page sections. |
| AC-2 | The replacement teaches a visible three-step path: understand, explore a question, read a first work. | Desktop and ~390px browser review. | A newcomer can identify the next action without scanning the archive. |
| AC-3 | Every public factual/theological statement and external work link used in the new path has an approved ledger entry. | `RESEARCH-R1` and independent theological review. | No unverified claim or destination ships. |
| AC-4 | The design shares the Bible page's calm navy/gold/parchment hierarchy without cloning its content or UI indiscriminately. | Visual comparison and responsive review. | Strong page entrance, differentiated sections, and no uniform wall of cards. |
| AC-5 | Keyboard, screen-reader semantics, focus, narrow width, 200% zoom, and reduced motion are usable. | Local manual browser/AX checks. | No overflow, unlabeled control, focus loss, or dependence on hover. |
| AC-6 | Canonical route, metadata, search entry, internal links, sitemap behavior, and any schema match the final page. | `npm run validate:urls`; `npm run seo:preflight`; local route/metadata inspection. | No broken link or misleading search/metadata claim. |
| AC-7 | The page creates no personal-data path or new analytics event. | Source and browser-network review using no personal data. | No inputs, localStorage, external API, or new event added. |

- Automated test scope and commands: `npm run lint`; `npm run typecheck`; `npm run build`; `npm run validate:urls`; `npm run seo:preflight`; any focused existing link/data check created without weakening guards.
- Manual/browser checks and synthetic fixtures: Local `/church-fathers` at desktop, ~390px, and 200% zoom; keyboard traversal; external-link names; collapsed/expanded archive path; console/hydration inspection; no personal data.
- Known baseline failures/limitations: Next font retrieval can be network-sensitive; report, do not mask, any resulting build limitation. Content approval is still pending.
- Code-review assignment: Independent reviewer after the integrated local diff; independent Catholic reviewer must be distinct from content author.
- Implementation sequence and dependencies: (1) Create/review source ledger; (2) author exact source-labeled content; (3) independent theology review; (4) UX/SEO finalize the approved structure; (5) implement only approved scope; (6) run checks and browser validation; (7) independent diff review; (8) request human review. Stop locally.
- Reversal approach: Revert only the feature's route/component/data/metadata files; no migration or stored data is involved.

## Definition of Done

- [ ] Source, formation, and independent-theology reviews apply to the exact final content revision.
- [ ] Owner records implementation approval for a specific reviewed spec revision.
- [ ] Acceptance criteria are implemented; original/approved content is preserved accurately.
- [ ] Relevant tests, build, SEO checks, and manual validation are recorded truthfully.
- [ ] Code/content diff is independently reviewed; unrelated work is preserved.
- [ ] `IMPLEMENTATION-REPORT.md` records the completed local result and human review request.
- [ ] No push, production deployment, or publication occurs automatically.
