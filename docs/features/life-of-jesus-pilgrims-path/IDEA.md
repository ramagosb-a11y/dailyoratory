# IDEA — Life of Jesus: Pilgrim’s Path

- Feature ID / owner / date: `life-of-jesus-pilgrims-path`; repository owner; 2026-09-23.
- Baseline inspected: `b4e0fb2c5ba413850e13ac77725060646a972b97` on `main`; working tree was clean when this packet was prepared.
- Status: **approved-for-implementation** for the reviewed local feature; human publication review and production authorization remain pending.
- Goal and user problem: create a distinctive, beautiful, vertically scrolling Life of Jesus timeline that makes the Gospel journey approachable, keeps each exact Scripture reference visible, offers full in-page Douay–Rheims reading, and honestly communicates chronological uncertainty. The original USCCB-link concept was superseded by the owner's R4 presentation decision; source URLs remain internal for audit continuity.
- Audience and desired formation outcome: Catholics and other visitors seeking Scripture-centered formation; help the reader follow Christ from the prologue and Incarnation through the Ascension without presenting a reconstructed Gospel harmony as if every placement were certain.
- Selected visual direction: owner selected concept 3, **The Pilgrim’s Path**—a winding route through major places and eras, with photographic chapter transitions and the existing navy, burgundy, gold, parchment, ivory, stone, and muted-text visual language.
- Existing related routes, components, data and instructions: no existing `/life-of-jesus` route. Reuse the composition patterns of `src/app/vatican/page.tsx`, `VaticanHero`, `VaticanHistoryTimeline`, `Breadcrumbs`, `SectionHeader`, `createPageMetadata`, site navigation, sitemap helpers, and established liturgical/card tokens. Follow `AGENTS.md`, `SOURCE_OF_TRUTH.md`, the content publishing checklist, and the image optimization workflow.
- Content change / code change / both: both. This packet defines the reviewed content model and implementation contract; application code is not yet implemented.
- In scope: one public static/ISR formation page; 15 primary pilgrimage eras; 18 nested chapters; 280 stable source records; exact Scripture references and locally bundled Douay–Rheims text; internally retained USCCB source metadata; visible chronology and Catholic-category labels; responsive winding path; major-era images; navigation, metadata, sitemap, accessibility, and verification.
- Explicit non-goals: event-detail routes in v1; user accounts, completion tracking, forms, saved progress, journals, maps requiring a third-party service, copied USCCB Scripture text, speculative exact dates/routes, production deployment, IndexNow submission, or claims of ecclesial approval.
- Constraints: no paid services or new dependency by default; preserve static/ISR rendering; use references and links instead of reproducing modern Bible text; all production images require documented rights and optimization; unresolved Gospel order must remain visible; no production publication before human Catholic/source and image-rights gates.
- High-risk subject matter: Scripture accuracy; Gospel harmonization; Eucharist and Passion chronology; anti-Judaism in Passion narration; doctrine versus liturgy/devotion/typology; modern Bible rights.
- Open owner decisions: final licensed/public-domain/generated production images and their crops/attributions; final human Catholic publication approval. These do not block local structural implementation with placeholders.

## Authorization record

The owner selected Pilgrim’s Path and instructed the team on 2026-09-23 to review the project, especially Scripture and timeline accuracy, and to review and adjust it three times. That instruction authorizes implementation of the **final three-pass-reviewed plan** represented by `DEVELOPMENT-SPEC.md` revision R3. It does not authorize production publication. Any material content, route, data-flow, or chronology change reopens affected review.

## Stage selection by Oratory Lead

| Stage | Required / not-applicable | Evidence and reason | Assigned reviewer |
| --- | --- | --- | --- |
| Repository/context | Required, completed for spec | Canonical checkout confirmed; related route, components, metadata, navigation, sitemap, workflow, and clean baseline inspected | Oratory Lead |
| Catholic sources | Required, implementation-ready with publication gate | 280 records cite Scripture/CCC/devotional connections; exact references retained, but every outbound USCCB target must be verified before publication | Catholic Sources |
| Formation/content | Required, completed for R3 model | Stable source revision classified into 15 eras, 18 chapters, and 280 source records | Formation/content author |
| Independent theology | Required, three passes completed | Three chronology/theology audits produced corrections and an implementation-planning-ready R3 model; no ecclesial approval claimed | Independent Catholic reviewer agent |
| UX/accessibility | Required, specified | New long-form scrolling experience, controls, winding path, images, mobile and reduced-motion behavior | UX / Formation |
| Site/SEO | Required, specified | New canonical route, metadata, navigation, sitemap, links, and possible schema | Site / SEO |
| Privacy/safety | Not applicable | Public static content only; no inputs, storage, accounts, personalized data, analytics changes, or exports | Oratory Lead screen |
| Engineering and verification | Required, pending | Implement only approved R3 contract and report actual results | Codex Engineering |
| Code/diff review | Required, pending | Independent integrated review after implementation | Code/UX reviewer |
| Human review | Required, pending | Owner UI review plus human Catholic/source/rights publication gate | Repository owner / qualified human reviewer |

## Next handoff

Implement `DEVELOPMENT-SPEC.md` R3 locally from this packet. Use placeholder-safe imagery until rights are documented, preserve all uncertainty labels, run the specified checks, complete `IMPLEMENTATION-REPORT.md`, and stop before commit/push/deployment or publication.

## R6 follow-up triage — 2026-09-24

The owner requested a further design pass focused on making the existing module more impactful and inviting toward Jesus. The R6 contract permits only presentation, existing-asset selection, and native-disclosure placement. UX/accessibility and image-crop reviews are required. New Catholic source research, theological wording review, Site/SEO review, and privacy review are not triggered because the source records, public theological wording, route/metadata, and data flows remain unchanged; preserve-and-compare checks still apply. Existing image-rights/iconography and qualified human Catholic publication gates remain open. This owner instruction authorizes local implementation of R6, not commit, push, or deployment.

## R7 follow-up triage — 2026-09-26

The owner requested complete in-page Douay–Rheims verses and confirmed readiness for the page with a menu link. The page and Learn-menu link already exist locally. R7 is an exact-source Scripture import, not a new route or navigation change. Catholic Sources, Formation/content, independent theological/source review, UX/accessibility, engineering, and integrated code review are required because full quotations replace link-only fallbacks; Site/SEO and privacy are not reopened because canonical routing, metadata, inputs, storage, analytics, and APIs do not change. The completed versification screen found 12 labels requiring visible edition-numbering or boundary notes, including a documented Luke 9:44a editorial split. Local implementation is authorized; production remains unauthorized until the owner separately approves release after qualified human Catholic and image-rights review.
