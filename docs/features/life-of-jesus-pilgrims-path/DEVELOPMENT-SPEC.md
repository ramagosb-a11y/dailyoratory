# DEVELOPMENT-SPEC — Life of Jesus: Pilgrim’s Path

This is the implementation contract.

## Identity and authorization

- Feature ID: `life-of-jesus-pilgrims-path`
- Spec revision/date: R7, 2026-09-26
- Status: **R7 implementation validated; owner confirmed publication reviews complete and authorized production release on 2026-09-26**
- Owner: repository owner
- Implementation approval: on 2026-09-23 the owner selected design concept 3, Pilgrim’s Path, and explicitly requested the team review Scripture/timeline accuracy and adjust it three times before moving forward. The three completed passes and their corrections define the final reviewed R3 plan authorized for implementation.
- Required review artifacts: `RESEARCH.md` R3, `CONTENT.md` R3, `THEOLOGY-REVIEW.md` three-pass R3 verdict, `UX-SPEC.md` R3, and `SEO-REVIEW.md` R3.
- Production authorization: **authorized by the owner on 2026-09-26 for commit to `main` and production deployment; no Preview deployment**.
- R4 owner revision: the owner requested removal of reader-facing USCCB links. Exact Scripture ranges remain visible; reviewed USCCB URLs and verification metadata remain internal for audit continuity only. The independent theological review found this conditionally acceptable with copy/provenance corrections, which are applied locally.
- R5 owner revision: on 2026-09-24 the owner requested another mobile pass focused on imagery, usability, and visual quality. This authorizes presentation and navigation refinements only; Scripture wording, chronology, citation data, and image selection remain unchanged.
- R6 owner revision: on 2026-09-24 the owner requested a further top-level UI/web-design pass to make the page more visually impactful and inviting toward Jesus. This authorizes a local presentation pass, including selecting a stronger Christ-centered hero from the existing sacred-art library, an illustrated entry to the path, and progressive disclosure of the unchanged chronology guidance. It does not authorize new theological wording, new image binaries, or production publication.
- R7 owner revision: on 2026-09-24 the owner instructed “Fix full in page text issue” and then “continue”; on 2026-09-26 the owner confirmed readiness for the page and menu link. The route and Learn-menu link already exist locally. R7 authorizes completing the built-in Douay–Rheims reading for every displayed Scripture range, preserving the exact source-model references and not publishing the page. Scripture quotation and numbering differences reopen Catholic-source and independent theological review; human publication approval remains required.
- R8 owner release: on 2026-09-26 the owner explicitly authorized committing to `main` and deploying to production (not Preview), then confirmed the outstanding publication reviews were complete. This is recorded as owner confirmation; reviewer identities or separate review artifacts were not supplied in this repository.
- Human publication gates: owner confirmed qualified Catholic/source review of the final rendered copy and image-rights/iconography review are complete on 2026-09-26. Reviewer identities or separate evidence were not supplied here. No agent review represents ecclesial approval.
- Re-review triggers: substantive scope or route change; altered theological meaning; changed source/reference; chronology classification change; new user data/analytics; new schema; new image provenance; or per-event routes.

## Goal and scope

- Goal: implement a visually distinctive, accessible, static Life of Jesus timeline at `/life-of-jesus`, matching Daily Oratory’s palette and presenting the R3 source model honestly.
- User problem/audience: readers need an inviting way to follow the Gospel story while seeing exact Scripture references and understanding where chronology is explicit, inferred, traditional, or unresolved.
- Existing evidence: no existing route; reuse Vatican page composition, `Breadcrumbs`, `SectionHeader`, shared metadata, navigation, sitemap, and design tokens. Preserve prerender/static behavior.
- Canonical route: `/life-of-jesus` only.
- Required model: 15 era records, 18 nested chapter records, and 280 stable source records. Stable IDs are independent of display order. A source record is not necessarily a separately datable event.
- Required existing contracts: `createPageMetadata`, internal link/navigation types, sitemap URL validation, shared focus/button/card/typography tokens, Next Image conventions.
- New code allowed when implementation begins: route, feature-scoped components, types/data/content, tests, navigation/search/sitemap entries, and feature-scoped styles only. No dependency is expected.
- Documentation files in this packet are already authorized. Application file names may follow current architecture after engineering inspection; do not broaden shared refactors.
- Explicit non-goals: per-record pages; database/CMS/API; account/progress state; copied USCCB passage text; interactive geographic map; exact speculative dating; analytics additions; deployment. Douay–Rheims reading is the reader-facing devotional layer; it is not presented as an exclusive or official liturgical edition.

## Content contract

- Exact content: `CONTENT.md` R3 plus immutable owner source SHA-256 in `RESEARCH.md`, with every binding correction applied to the implementation data.
- Each record requires: stable ID, display group/order, era ID, chapter ID, title, concise original summary, exact Scripture range(s), internally retained reviewed source URL metadata, chronology classification, Catholic category where applicable, uncertainty note, parallel-source relationship, and optional location/image association.
- Chronology values: `explicit-sequence`, `strong-inference`, `traditional-harmony`, `uncertain-order`, `teaching-subdivision`, `doctrinal-liturgical-mystery`, `editorial-summary`.
- Catholic values: `narrated-history`, `typology`, `doctrine`, `liturgy`, `devotion`. Keep this field separate from chronology.
- Internal source policy: retain canonical reviewed USCCB chapter URLs, editions, verification status, and deep-link metadata for audit continuity; do not render those URLs as reader-facing links on this page. Never reproduce full NABRE text.
- Preserve verbatim: `COPY-H1`, `COPY-DECK`, `COPY-INTRO`, `COPY-ACCURACY`, `COPY-SOURCE`, `COPY-PASSION`, and `COPY-RESURRECTION` unless reopened for content/theology review.
- Code versus content: data/labels/summaries/references are content changes; route/components/styles/navigation/schema are code changes. Report separately.

## Behavior and visual implementation

- Render the page statically with a Server Component and local typed data. Use a client island only for optional era navigation/current-selection behavior; no runtime Bible fetch.
- Hero and page styling follow Pilgrim’s Path: parchment ground, restrained winding gold route, navy/burgundy headings, alternating cards on desktop, single-column route on mobile, and major-era image interludes.
- Legend is visible before the chronology and available through the page. Labels use text plus color/icon, never color alone.
- Unresolved source groups use a bounded nonordinal cluster. Suppress connecting-line progression, sequence animation, and “next event” semantics between panels whose relationship is unresolved. Each Gospel panel preserves its internal order; resume the route only at a shared anchor.
- Essential title/reference/classification is visible without JavaScript. Supporting notes may use accessible progressive disclosure.
- Image failure does not remove content. No production image ships without creator/source/license/license URL/attribution and iconography review. Follow the image optimization workflow and report savings.
- Mobile: single path, no horizontal pan, 44px targets, stable image dimensions, no path collision. Desktop: readable alternating path inside existing max width.
- R5 mobile presentation: the hero must show substantial unobscured artwork before its title and action; the complete introductory and provenance wording follows in a connected reading panel. Era artwork uses a stable taller crop with its caption below the image. The compact era chooser remains reachable while scrolling, closes after a selection when JavaScript is available, and retains native disclosure behavior without it. Closed Scripture summaries identify Douay–Rheims concisely.
- R6 entry presentation: the hero gives Jesus a clearly visible place in the existing devotional artwork, while the statistics move out of the hero into the journey invitation. The closed journey summary becomes an illustrated, keyboard-operable portal using existing Nativity, Passion, and Resurrection imagery; its decoration adds no new chronology claim. The full accuracy note and chronology legend move into a separate closed native disclosure at the beginning of the opened journey, before the first era. The unchanged source/provenance footer follows the timeline inside the opened journey, where its return link is useful. Preserve all wording, the per-record certainty labels, and the visible Passion safeguard at its original transition. The hero action and era shortcuts must still open the outer journey and reach their targets without JavaScript.
- Reduced motion removes reveal/path-drawing/parallax. DOM and keyboard order follow corrected display order, never decorative placement.
- Each Scripture citation shows the exact book/chapter/verse range as visible text and adds a closed native “Read … in Douay–Rheims” disclosure. Every expanded box renders local text with visible edition, source link, public-domain status, and attribution. The typed local source layer separately carries automated-verification and pending-human-review metadata; these workflow statuses are not repeated in every devotional card. No reader-facing box is link-only.
- R7 Scripture-completion contract: import the eBible.org `engDRA_vpl.zip` public-domain 1899 edition into a local static, source-hash-pinned passage artifact. Resolve all 453 unique cited ranges (462 rendered instances), including noncontiguous spans and the modern Mark 8:34–9:1 cross-chapter citation. Every range must expand to all and only its corresponding DRA text without runtime fetching, JavaScript, or a link-only fallback; a missing or malformed verse fails generation/validation. Retain each exact reviewed citation outside the disclosure. The independent source audit found 12 display labels requiring visible edition-numbering or boundary notes: Psalm 22:2; Micah 5:1–4; Mark 4:35–41, 8:34–9:1, 9:2–8, 9:14–29; Matthew 17:14–20, 17:22–23; John 6:22–59, 6:60–66, 6:67–69; and Luke 9:37–43. The latter ends with explicitly marked DRA 9:44a, stopping before the next Passion prediction. Keep the source URL, archive/file hashes, edition, rights, attribution, extraction method, and review status. This automated exact-range audit is not human Catholic approval.
- Empty/loading/error: no core loading state. Build-time validators fail on missing IDs/references/classifications/era membership; optional missing images have a text-complete fallback.

## Privacy, SEO, analytics, and performance

- Privacy: not applicable—public static content; no user inputs, accounts, sensitive spiritual data, storage, personalization, export, or changed network data flow beyond user-initiated outbound links.
- Analytics: no new events or parameters. Existing global page analytics, if any, remain unchanged; do not add record/verse click tracking in v1.
- SEO: canonical `/life-of-jesus`; metadata and internal links per `SEO-REVIEW.md`; one sitemap URL only; `WebPage`/breadcrumb schema at most; no `Event` schema.
- Performance: static/ISR-safe page; local typed data; lazy below-fold images; responsive Next Image; no large client bundle for 280 records; avoid rendering all record bodies as hidden client state.
- Compatibility: current repository Next version and bundled docs govern implementation; no new dependency or paid service.

## Acceptance criteria and tests

| ID | Observable required behavior | Verification method / command | Expected result |
| --- | --- | --- | --- |
| AC-1 | `/life-of-jesus` renders one hero, 15 eras, 18 chapters, and 280 unique stable source records | Focused data/unit validation plus browser count | Exact counts; no duplicate/missing IDs |
| AC-2 | Every record has an exact displayed Scripture range; reviewed USCCB source metadata remains internally valid but is not rendered as a reader-facing link | Data audit plus sampled browser checks | Exact ranges are visible; zero reader-facing USCCB anchors; internal URLs retain canonical chapter shape |
| AC-3 | Chronology and Catholic labels match R3 and remain distinct | Schema/type validation and content review | Allowed values only; required labels visible |
| AC-4 | Disputed clusters do not imply inter-source order; internal Gospel order is preserved | DOM/visual/keyboard review of 22–33, 143–172, 193–206, 230–240, 251–264 | Bounded clusters, no connector/ordinal transition between unresolved panels |
| AC-5 | All named R1–R3 corrections are present | Checklist against CONTENT binding decisions and theology table | No regression in corrected wording/order |
| AC-6 | Passion section uses specific actors and visible CCC 597–598 anti-blame framing | Content/diff review | `COPY-PASSION` present; no indiscriminate blame |
| AC-7 | Core experience is keyboard and screen-reader usable | Keyboard, accessibility tree, headings/links checks | Logical order, visible focus, descriptive links, decorative path hidden |
| AC-8 | Layout works at ~390px, 768px, 1440px, 200% zoom, and reduced motion | Browser checks/screenshots | No overflow/collision; no required motion; readable content |
| AC-9 | Page remains complete with images disabled/failed | Browser request blocking or fixture | Text, references, chronology, and navigation remain usable |
| AC-10 | Every production image has rights/provenance and optimized responsive output | Asset ledger, `npm run images:check`, visual comparison, size report | No unlicensed asset; no oversized unoptimized image |
| AC-11 | Canonical, metadata, sitemap, navigation, and schema follow SEO review | `npm run validate:urls`, `npm run seo:preflight`, browser inspection | One canonical URL; no duplicate/invalid schema/URL |
| AC-12 | Static/rendering guardrails and application quality pass | `npm run lint`, `npm run typecheck`, `npm run build` | Exit 0 or truthfully documented pre-existing baseline issue; no new regression |
| AC-13 | No new persistence, forms, APIs, analytics, or private-data paths | Integrated diff/network review | None present |
| AC-14 | Scripture rows provide an accessible closed-by-default Douay–Rheims reading option while preserving exact ranges and internal source metadata | AX inspection plus data/provenance audit | Native disclosures are present for every reference; all local passages include metadata, no link-only fallback or USCCB anchor is rendered |
| AC-15 | The mobile entry invites reading before presenting dense methodology; chronology guidance stays available before the first era | 390px browser screenshot, scroll geometry, keyboard/AX review | Journey invitation appears materially earlier than the R5 baseline; all original accuracy and legend copy is reachable in a native disclosure; the hero action opens the journey and reaches era 1 |
| AC-16 | Christ-centered hero and illustrated path portal use only existing documented artwork | Asset/source inspection, responsive crop checks, `npm run images:check` | Jesus remains visible in phone and desktop hero crops; no new binaries or undocumented provenance; image-disabled content remains complete |
| AC-17 | All Scripture boxes display complete local Douay–Rheims text when opened | Pinned-source generator, exact-range validator, static HTML/browser audit | 453/453 unique ranges and 462/462 rendered instances have nonempty complete verse text; no link-only fallback, runtime fetch, or NABRE reproduction |
| AC-18 | Edition-specific numbering and verse boundaries are transparent | Independent 100-chapter / 906-endpoint source screen, pinned-source validation, and browser check | All 12 affected labels retain the modern timeline citation; expanded DRA text uses its corresponding edition reference and a visible note. Luke 9:44a is clearly an editorial first-part marker, not a separate canonical verse |

- Automated scope: focused data validator/tests; `npm run audit:citations`; `npm run images:check`; `npm run validate:urls`; `npm run seo:preflight`; lint, typecheck, build.
- Manual/browser scope: route load, all eras/jump links, representative explicit/traditional/uncertain/doctrinal records, every corrected cluster, external links, responsive views, keyboard, zoom, reduced motion, images disabled, console/hydration.
- Citation audit is a detector, not theological/source approval.
- Code review: independent code/UX reviewer inspects final integrated diff. Qualified human Catholic/source reviewer separately decides publication suitability.
- Implementation sequence: typed model/validator → corrected content data → server route/components → minimal navigation island → images only after rights → metadata/navigation/sitemap → tests/browser review → independent review → implementation report.
- Reversal: remove only feature route/components/data and focused navigation/sitemap/search additions; preserve this audit packet and unrelated work.

## Definition of Done

- [x] Required planning reviews apply to R3; local implementation authorization recorded.
- [ ] AC-1 through AC-13 implemented and evidenced.
- [ ] Content/source/image rights and qualified human Catholic publication gates resolved.
- [ ] Tests, lint, typecheck, build, manual checks, and independent code review recorded truthfully.
- [ ] `IMPLEMENTATION-REPORT.md` updated from initial to completed state.
- [ ] Human review requested for concrete implementation.
- [ ] No automatic commit, push, merge, IndexNow submission, or deployment.

Engineering handoff: implement this exact R3 contract in the canonical checkout, preserve existing work, report code/content separately, and stop at a reviewed local diff. Production authorization is absent.
