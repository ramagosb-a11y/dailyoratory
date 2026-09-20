# DEVELOPMENT-SPEC — Welcoming Scripture Guide

## Identity and authorization
- Feature ID: `bible-welcoming-scripture-guide`.
- Spec revision/date: `SPEC-R6` / 2026-09-19.
- Status: approved-for-implementation.
- Owner: Brent.
- Implementation approval: The owner approved the proposed expanded pre-reading guide on 2026-09-19. This authorizes the exact `SPEC-R6` local addition of book-specific big questions, story placement, key figures/places, book shape, what-to-notice guidance, gentle first visits, and carefully scoped reading notes inside the existing native disclosures.
- Required review artifacts and reviewed revisions: `IDEA.md`; `REVIEWS.md` for `BIBLE-REFRAME-CONTENT-R1`, `BIBLE-BOOK-INVITATIONS-R2`, `BIBLE-BOOK-CONTEXT-R1`, `BIBLE-BOOK-ORIENTATION-R1`, UX review `BIBLE-REFRAME-UX-R1`, independent theology, SEO/privacy decisions, and the `BIBLE-THEME-R1` visual review.
- Production authorization: **not authorized**.
- Re-review triggers: substantive scope, public content meaning, route or data-flow changes.

## Goal and scope
- Goal: Make `/bible` a short, invitational starting point for any reader, with a non-imposing Catholic Mass-reflections path.
- User problem and audience: The existing long, Catholic-only guide overwhelms people who simply want help beginning Scripture. The audience includes readers from any or no Christian background, as well as Catholics.
- Existing related functionality and inspected evidence: `src/app/bible/page.tsx` currently renders 25 Bible-specific modules; `BibleHero`, `HowToReadBibleCatholic`, `LectioDivinaSection`, and `BooksOfBibleOverview` are reusable. `MassHero` provides the requested visual precedent. `/reflections/mass-readings` is the existing destination.
- Route/location: existing canonical public route `/bible`; no aliases or redirects change.
- Required existing components and contracts: `Breadcrumbs`, `StructuredDataScript`, `BibleSection`, `BibleCard`, `BibleCardGrid`, `TrackedLink`, `createPageMetadata`, structured-data helpers, existing style tokens.
- New components only if necessary, with justification: `BibleBookInvitations` is a static server component added in `SPEC-R2` for the owner-requested starter set and expanded in `SPEC-R4` to render the independently source-reviewed all-73-book set (`BIBLE-BOOK-INVITATIONS-R2`). The existing `LectioDivinaSection` is the requested heavenly theme module: it is a static, semantic panel using a restrained Mass-like navy/gold/parchment surface without adding another section or theological claim.
- Allowed files and dependencies: `src/app/bible/page.tsx`; retained/new `src/components/bible/*`; `src/data/biblePage.ts`; `src/data/searchIndex.ts`; feature packet. No dependencies.
- `SPEC-R3` visual scope: Replace the generic parchment hero with a dark navy, gold, and ivory reading-room surface; add in-page wayfinding; distinguish reading suggestions, Bible map, and the already-approved `BIBLE-BOOK-INVITATIONS-R1` cards with responsive surface, density, and elevation changes.
- `SPEC-R4` content scope: Expand the existing book-doorway data from the reviewed starter ten to all 73 books of the Catholic canon. Each card retains the same original-paraphrase format—book name, a concise encounter summary, an editorial “Begin here if” prompt, and a specific first-passage link to the USCCB NABRE. No Bible text, quotation, new user state, or new external provider is added.
- `SPEC-R5` information scope: Add nine canonical collection records with original descriptions, literary-form guidance, carefully qualified time/setting context, and book membership. Make the overview’s collection and book names clickable anchors. Add a native collapsed “Before you begin” disclosure on every card with literary form, time/setting context, up to three related in-page books, and a fixed official USCCB introduction link. No disclosure state is stored or sent.
- `SPEC-R6` information scope: Enrich each existing disclosure with original, source-reviewed book-level orientation: a guiding question; a concise place in the larger biblical story; key figures and places; a high-level book-shape map; reader-notice prompts; a first-visit reading path; and a “read with care” note only where literary form, length, or difficult subject matter makes it useful. These are reading aids, not doctrinal conclusions, promises, or a substitute for a study Bible.
- Explicit non-goals: Do not change other routes, introduce images, reproduce Scripture, retain local-input/copy/print tools, or replace the dedicated Mass reflections route.

## Content contract
- Exact approved content IDs/files/revisions: `BIBLE-REFRAME-CONTENT-R1`, `BIBLE-BOOK-INVITATIONS-R2`, `BIBLE-BOOK-CONTEXT-R1`, and `BIBLE-BOOK-ORIENTATION-R1`, recorded in `REVIEWS.md`; exact component strings and `biblePage` data are the immutable implementation source.
- Source requirements and verified RESEARCH references: No direct quotations. The definition and movements of Lectio Divina must stay aligned with the source/review ledger. Original descriptive copy must not claim universal doctrine or salvation effects.
- Theology/rights review and human approval evidence: Independent review recorded in `REVIEWS.md`; no copyrighted excerpt, Bible text, prayer text, or attribution is added. The owner authorized implementation, not production publication.
- Copy to preserve verbatim: CTA label **Mass Readings Reflections**; destination `/reflections/mass-readings`.
- Code changes versus content changes: Code composes/removes modules and adds static components/surfaces; editorial changes are restricted to inclusive hero, reading suggestion, Lectio Divina, books overview, the source-reviewed all-73-book doorway data, R5 collection descriptions, literary-form/time-and-setting guidance, related-book relationships, official introduction links, and the R6 book-level guiding questions, key figures/places, reading-shape, what-to-notice, first-visit, and careful-reading guidance, plus metadata/structured data and search text.

## Behavior
- User flow: Read a welcoming introduction; either open Mass Readings Reflections or jump to a gentle reading suggestion; continue through the expanded, heavenly-themed Lectio Divina panel, Bible overview, and all-73-book Catholic-canon doorway grid. No data entry or state is required.
- Mobile behavior: Single-column buttons/cards; no clipped background decoration; readable headings and 44px-or-greater existing button treatment.
- Desktop behavior: Hero maintains two clear actions; cards form responsive grids; heavenly module has a two-column reading/list layout.
- Empty/loading/error/complete/return states: Static server-rendered content has no custom client state or asynchronous route state.
- Accessibility requirements: One `h1`; ordered heading hierarchy; semantic `section`, `article`, and list elements; descriptive CTA labels; visible existing focus ring; no color-only meaning; decorative celestial marks excluded from the accessibility tree; usable at ~390px and 200% zoom.
- Privacy requirements: Remove rather than replace local selectors, word journal, clipboard and print controls; no inputs, storage, exports, or new network/analytics.
- SEO requirements: Keep canonical `/bible`, existing metadata and structured-data shape, and sitemap eligibility. Refresh all page/search descriptions to match actual inclusive content; no schema type or route change.
- Analytics requirements: No new tracking. Retained `TrackedLink` uses the existing non-sensitive fixed Mass-reflections destination; removed CTA/tool events are no longer reachable from `/bible`.
- Performance/rendering and compatibility constraints: Server components only; no new client island, asset, or runtime fetch; retain current static rendering safeguards.

## Acceptance criteria and tests

| ID | Observable required behavior | Verification method / command | Expected result |
| --- | --- | --- | --- |
| AC-1 | `/bible` no longer renders every owner-listed removal target, including local tools and source/copyright note. | Source import/render audit; local browser page review. | No matching section heading/control appears. |
| AC-2 | Hero links **Mass Readings Reflections** to `/reflections/mass-readings`; no Explore a Catholic Approach action remains. | Source audit; browser link inspection. | Correct internal link and label. |
| AC-3 | A calm, inclusive reading suggestion replaces Catholic-only practice, and no claim requires an input, login, or tradition choice. | Content/diff review; local browser review. | Five gentle contextual steps with optional language. |
| AC-4 | Lectio Divina and Books of the Bible are materially expanded and accessible, without copying Scripture. | Source/diff review; browser heading/list review. | Six flexible Lectio movements and a four-part Bible overview are present. |
| AC-5 | The static Lectio Divina heavenly theme module clearly reflects the Mass page's navy/gold/parchment visual family and remains readable on mobile. | Browser review at desktop and ~390px; keyboard/focus check. | No overflow; decorative elements are hidden from assistive technology. |
| AC-6 | Metadata, structured-data description, and search index no longer represent `/bible` as exclusively Catholic-only. | `npm run validate:urls`, source review, page HTML/browser inspection. | Route remains valid and descriptions match the page. |
| AC-7 | The original starter cards retain an original, source-checked encounter summary, editorial starting reason, and accessible official first-passage link. | Source ledger, route source audit, and local AX/browser inspection. | The initial ten cards remain included within the authoritative all-73-card `AC-9` set. |
| AC-8 | The page has a coherent, premium visual hierarchy rather than a uniform stack of parchment cards. | Desktop and narrow-browser visual review; changed-source inspection. | A dark reading-room hero, visible three-step wayfinding, differentiated section surfaces, and breathable two-column book invitations render with no content or link regressions. |
| AC-9 | Choose a doorway includes every book of the Catholic canon, each with original, source-reviewed guide copy and a usable official first-passage link. | Data count/order audit; source/theology review; local AX/browser inspection. | 73 distinct cards render in canonical Catholic order; all links use `bible.usccb.org`, open safely in a new tab, and contain no reproduced Scripture text. |
| AC-10 | The overview is useful navigation and every card offers optional pre-reading context without overwhelming the initial scan. | Local keyboard/AX/browser inspection at desktop and ~390px. | Nine collection cards expose book-count, purpose, book anchors, and collection anchors; every book has a closed native disclosure with literary form, qualified time/setting, related-book anchors, and USCCB-introduction link. |
| AC-11 | Every book has an expandable, source-reviewed orientation guide that helps readers begin without replacing the actual text. | Content/source review; data completeness audit; desktop and ~390px browser inspection. | All 73 disclosures contain a unique guiding question, story placement, key figures/places, book shape, what-to-notice prompts, gentle first-visit path, and an appropriate reading note where needed. |

- Automated test scope and commands: `npm run lint`; `npm run typecheck`; `npm run build`; `npm run validate:urls`; `npm run seo:preflight`.
- Manual/browser checks and synthetic fixtures: Local `/bible` on desktop and ~390px, tab through CTAs, inspect headings and focus, verify the Mass-reflections link, and use no personal data.
- Known baseline failures/limitations: Build may require network access for `next/font`; report any failure rather than treating it as passed.
- Code-review assignment: Independent reviewer agent after integrated final revision.
- Implementation sequence and dependencies: Apply approved content/data; remove route imports/renders; add module; update metadata/search; run static checks, browser review, and independent diff review; write implementation report.
- Reversal approach: Revert only the files named above; no migration or stored data exists.

## Definition of Done
- [ ] All required reviews apply to this revision; implementation authorization recorded.
- [ ] Acceptance criteria implemented; approved content preserved.
- [ ] Relevant tests/lint/typecheck/build and manual checks recorded truthfully.
- [ ] Code/content diff reviewed, blockers resolved, unrelated work preserved.
- [ ] IMPLEMENTATION-REPORT complete; human review requested for the concrete change.
- [ ] No automatic production publication, push or deployment.
