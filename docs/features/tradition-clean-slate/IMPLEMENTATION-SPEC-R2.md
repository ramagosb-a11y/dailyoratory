# Implementation contract — Tradition learning guide

Revision 2, 2026-09-20. Owner approved PROPOSAL.md revision 4 with “approved”, then instructed “continue”. This authorizes full local implementation of the focused lessons and design, including sourced editorial drafting and review. It does not authorize publication. Prior cleanup/button changes remain part of this task and must be preserved.

## Approved scope

Replace the clean-slate hero/resources-only state with the approved three-chapter, five-lesson guide. Full original lesson text lives in src/data/traditionGuide.ts; exact source review in CONTENT-REVIEW.md. Hero uses the approved R4-HERO wording and two on-page CTAs. Preserve /tradition canonical, existing site layout, fonts and static rendering. Update metadata to the actual final content.

Reuse Breadcrumbs, existing button/focus classes, site typography and Bible visual language. Add a small server-rendered TraditionGuide component for chapters, lessons, source references and a diagram. No new client state, dependencies, tracking, personal inputs, images or API calls. Use native details/summary for four optional readings, independent open states, visible lesson introductions. First lesson is fully visible. No nested disclosures. Add a compact reference disclosure after the teaching and two verified existing links: /church-fathers and /councils.

Files: src/data/traditionGuide.ts; src/components/tradition/TraditionGuide.tsx; src/components/tradition/TraditionHero.tsx; src/app/tradition/page.tsx; this feature packet. The old standalone source-grid component remains unused; do not delete historical/shared content files. Preserve homepage changes from spec r1. Content approval is established by owner approval of the editorial direction plus required independent exact-content review; no additional approval is needed for routine drafting within scope.

## Behavior and checks

Desktop: readable lesson column with a compact sticky chapter index; mobile: wrapping chapter navigation above reading. Meaning, Transmission and Continuity visible headings. Hero example target is the always-visible case-study heading, with its native detail toggle directly below. All content available in HTML and usable with JavaScript disabled. Links to references should use explicit source names; no new analytics. Illustrated relationships must be represented by semantic text and caption, not color alone. Respect reduced motion; no introduced animation.

Acceptance: five complete lessons; 1,800–2,400 body words; source links mapped to each lesson; distinct 325/381 accounts; no devotional detours; all chapter/hero fragments resolve; focus visible; native toggles keyboard-operable and independent; no overflow at 390px/1440px and 200% equivalent width; no-JS reading works; source canonical correct; page statically generated. Tests: build with guardrails, typecheck, lint (whole repo plus scoped result where baseline fails), URLs, SEO, citation detector interpreted as detector only, focused browser acceptance checks and screenshots. Independent code/UX review after integration. No push/deploy/IndexNow.

Review status: source research and independent exact-content review completed; required corrections applied and rechecked READY before route integration. Independent component source review found no blocker. See CONTENT-REVIEW.md. UX/site/privacy decisions above apply to r2. No new storage, form, query parameters or events. Source pages have been opened by coordinator/reviewer; modern source text is paraphrased, not reproduced. Historical/OCA details are attributed to their actual sources.

Reversal: revert this revision's specific guide/hero/route changes while retaining the owner's prior cleanup and buttons. Handoff: working local page, report with actual validation and limitations. No production authorization.
