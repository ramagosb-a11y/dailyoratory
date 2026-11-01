# Vatican II and the Mass — revision 2, 2026-10-31

## Authorization and contract

Status: implemented-awaiting-human-review. Verification results: IMPLEMENTATION-REPORT-2.md. Independent review: REVIEWS.md, revision 2.

Owner instruction: “PLEASE IMPLEMENT THIS PLAN: # Vatican II and the Mass — A Cinematic Visual Article”, followed by the complete plan in this chat. This authorizes local implementation and verification of revision 2. Production publication, commit and push are not authorized. Revision 1's existing Discover Vatican II card and unrelated Vatican work must be preserved. This revision replaces only the starter guide at /vatican-ii, using a separate scoped stylesheet.

Audience: Catholics, returning Catholics and parish discussion groups. Implement the owner-supplied Mass-focused article, archival navy/ivory/gold hero, council/implementation timeline, five-row responsive comparison, static A/B/C graphic, vernacular/Latin and participation explanations, five original discussion questions, exact closing prayer and linked sources/photography credits. No full council study hub, client controls, personal inputs, new analytics, runtime fetching, dependencies or paid services.

Content baseline: src/data/vaticanII.ts, content revision 2. Apply the planning review qualifications: principal readings vs Last Gospel/additional lessons; earlier weekday propers; solemnities' appointed texts; Ordinary Time first-reading alternation only; Roman Canon retained as Eucharistic Prayer I; Council directives distinguished from subsequent implementation. Original closing prayer must remain verbatim and clearly identified as original. Primary documents are linked with paragraph references; no long copied Church texts.

Implementation: static Server Component and scoped CSS; reuse Breadcrumbs/createPageMetadata/site fonts. Local licensed photographs 005/006 by Lothar Wolleh, CC BY-SA 3.0, source/license/change credits, optimized WebP without upscaling, only hero preloaded. /vatican-ii canonical, sitemap, search, Learn navigation, contextual links in existing councils/Vatican Mass sections. Preserve existing card styles and unrelated edits. No public APIs or shared type changes.

Acceptance: all approved sections and five comparisons/questions; desktop/mobile hierarchy; 320/390/768/1440 and 200% zoom without overflow; semantic accessible comparison, headings/focus/anchors; image loading/crops/credits; no hydration errors; source destinations verified; canonical/navigation/search/sitemap; prerendered route; no feature data collection. Lint, typecheck, build guards, image check, URL validation, SEO preflight and citation audit. Capture screenshots under output/playwright/vatican-ii. Report baseline failures honestly; do not weaken guards.

Required review roles: Lead/Engineering, Catholic Sources/Formation/independent Catholic Reviewer, UX, SEO, Vercel Efficiency; privacy confirms no new data flow. Automation not applicable. Exact content revision must receive independent AI source/editorial review; this is not ecclesial approval. Final local result remains awaiting owner review.

Reversal: restore prior starter route from revision 1 if requested, remove only revision-2 additions, preserve the existing card and all other user work.
