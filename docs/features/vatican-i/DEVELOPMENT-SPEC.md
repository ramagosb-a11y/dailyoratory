# Vatican I — development specification r1, 2026-10-31

## Visual refinement r2 — owner authorized 2026-10-31

Owner instruction: “Have the web team review and improve the look so it is stunning. then do it again.” Authorizes two sequential review/implementation cycles. Read-only independent visual-director and UX-reviewer subagents review round 1 baseline, then the updated rendered page for round 2. Primary agent implements. Scope: only Vatican I page/stylesheet/quiz and its feature packet. Preserve every theological and prayer paragraph, sources, route/metadata, static rendering and existing privacy behavior. No new assets/dependencies or production publication. Improve architectural hero, chapter index, editorial typography/timeline, document rails, infallibility focus panel, quiz layout, reflection/prayer and source colophon; mobile and keyboard QA. Round 2 must be based on round 1 result, not merely repeat initial advice. Optional quiz feedback anchors/status remain browser-memory only. Correct and incorrect feedback must use explicit words as well as color. Human publication review remains pending. New theology review not required for presentation-only changes; compare preserved copy with r1 and preserve its review.

Owner scope addition 2026-11-01: “Add a menu link”, followed by “Continue”. Add Vatican I directly after The Vatican and before Vatican II in the existing Learn / Foundations of the Faith menu. Shared siteNavigation supplies desktop and mobile; add matching breadcrumb/route inventory entries in src/config/navigation.ts without changing other menu content. Verify rendered desktop/mobile links reach /vatican-i. Continue completing both authorized visual cycles and final validation.

Implementation authorization: user's explicit request to create the page, accompanied by complete source copy. This authorizes the bounded local implementation below. No production authorization. Status: approved-for-implementation within this scope, subject to independent source review before affected doctrine is implemented.

## Contract

Create /vatican-i with createPageMetadata, Breadcrumbs, existing typography and navy/gold/ivory palette. Reuse /images/vatican/st-peters-interior.webp and existing attribution record. Server-render the guide with one small client component for three multiple-choice learning checks. No runtime fetches, new dependency, paid service, storage, free-text collection, custom analytics, or external embeds. Existing site page-view tracking remains; quiz selections stay in ephemeral React state and never enter URLs or custom events.

Use the supplied attachment as content revision 1. Preserve the prayer verbatim, labeled a supplied reflection prayer, not a council quotation. Doctrinal prose is explanatory summary, not attributed quotation. Retain the four ex cathedra conditions, limits on infallibility, proper episcopal authority, and response to non-definitive teaching. Preserve faith/reason, historical setting, no general Mass reform, and Vatican II continuity. Exact implementation copy is in the new route and quiz component, reviewed together before completion. Link sources at relevant sections and provide further reading. Do not copy full Church documents.

## Experience and acceptance

1. Large photographic hero, title Vatican I, subtitle Faith, reason & the ministry of the pope, dates 1869–1870, two-document overview and clear start anchor.
2. In-page navigation, dated historical timeline, distinct Dei Filius / Pastor Aeternus learning sections, four always-visible infallibility conditions and explanatory FAQ disclosures. No qualification hidden solely behind quiz interaction.
3. Three learning questions, each with individually labeled choices, aria-pressed selection and polite feedback, explanations for incorrect choices, and a reset. No moral/spiritual scoring. Content remains readable without JS; quiz offers a noscript message.
4. Supplied discussion prompts and unedited prayer, Vatican II continuation and direct further-reading links. Return link to Vatican guide.
5. Link new guide from Vatican page and existing Vatican I council section; add sitemap entry while preserving existing edits. One canonical /vatican-i route; no redirects or private metadata.
6. Mobile single column at ~390px, desktop balanced columns, no overflow, readable 1rem+ body, 44px+ controls, visible focus, semantic headings/ordered lists/fieldset, no autoplay or decorative motion. 200% zoom and keyboard checks.
7. Run lint, typecheck, build and guardrails, URLs, SEO, source review, responsive browser QA and integrated diff review. Record baseline issues and verification limits honestly. Existing WebP remains unchanged: zero added asset bytes, no reconversion savings. Expected static generation, no new function load; Vercel dashboard usage not inspected and no free-tier guarantee.

Allowed files: src/app/vatican-i/page.tsx; src/components/vatican/VaticanI.module.css and VaticanILearningCheck.tsx; narrow link additions in src/app/vatican/page.tsx and src/components/councils/VaticanISection.tsx; one sitemap item; docs/features/vatican-i/*.md. Reversal: remove new files and only the added links/item. Preserve all other working-tree changes. Independent AI Catholic/code review is advisory; human editorial and production approval remain separate.
