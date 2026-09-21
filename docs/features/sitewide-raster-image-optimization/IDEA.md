# IDEA — Sitewide raster image optimization

- Feature ID / owner / date: `sitewide-raster-image-optimization` / repository owner / 2026-09-20.
- Goal and user problem: Reduce the production deployment's oversized raster assets while retaining the site’s visual presentation, intrinsic dimensions, and accessible image descriptions.
- Audience and desired prayer/formation outcome: All site visitors; this is a delivery-performance change with no devotional or formation-copy change.
- Existing related routes, components, data and instructions: Root `AGENTS.md`, `.codex/workflows/image-optimization.md`, `next.config.ts`, `src/app`, `src/components`, `src/data`, `public/images`, and the existing `scripts/optimize-fasting-retreat-images.mjs` check.
- Repository revision and existing dirty files: Canonical `brotherhood-of-ascension` checkout confirmed by `SOURCE_OF_TRUTH.md`; unrelated untracked browser evidence under `output/playwright/` is preserved.
- Content change / code change / both: Code and static-asset reference changes only; no public devotional, theological, metadata-copy, or accessibility-copy change.
- In scope: Repository-wide raster inventory; eligible oversized public PNG/JPEG conversion to high-quality WebP; reference updates; a repeatable audit/conversion/check script; local validation.
- Explicit non-goals: SVG/GIF conversion, image resizing, visual redesign, alt-text changes, route/SEO semantic changes, deployment, push, or deletion of external Vercel deployments.
- Constraints (privacy, dependencies, visual identity, cost): Use installed `sharp`; preserve dimensions, alpha channels, orientation and meaningful alt text; keep Next Image sizing/loading behavior; no added dependency or external service.
- High-risk subject matter: None. No theology, personal data, analytics, routes, canonical data, or structured data semantics are changed.
- Open owner decisions: None required for the authorized scope.

## Stage selection by Oratory Lead

| Stage | Required / not-applicable | Evidence and reason | Assigned reviewer |
| --- | --- | --- | --- |
| Repository/context | Required | Canonical repository, dirty state, image workflow, callers, and Next Image behavior inspected. | Oratory Lead |
| Catholic sources | Not applicable | No devotional or theological text changes. | — |
| Formation/content | Not applicable | No content, order, or prayer-flow changes. | — |
| Independent theology | Not applicable | No Catholic claims or quotations change. | — |
| UX/accessibility | Required | Intrinsic dimensions, `next/image` behavior, existing `alt`, loading, and responsive sizing must remain unchanged. | Engineering review |
| Site/SEO | Not applicable | No new routes, metadata values, canonical URLs, sitemaps, or schema semantics; asset path updates are verified by repository search. | — |
| Privacy/safety | Not applicable | No user data, telemetry, storage, API, or network-data-flow change. | — |
| Engineering and verification | Required | Asset conversion, reference update, decoding, source checks, and build are required. | Codex Engineering |
| Code/diff review | Required | Final integrated asset/reference/script diff needs review. | Independent review pending local diff |
| Human review | Required | Owner should inspect the concrete local result before any release. | Repository owner |

## Next handoff

Feature ID `sitewide-raster-image-optimization`; the user's 2026-09-20 instruction authorizes this scoped local implementation. The implementation contract is `DEVELOPMENT-SPEC.md` revision 1. No deployment, push, or production action is authorized.
