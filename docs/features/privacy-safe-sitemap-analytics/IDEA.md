# Privacy-safe sitemap and analytics

- Feature ID / owner / date: `privacy-safe-sitemap-analytics` / Brent Ramagost / 2026-09-28
- Goal and user problem: Keep crawler discovery limited to canonical public indexable pages and prevent sensitive or query-string data from reaching GA4.
- Audience and desired prayer/formation outcome: Visitors and people using private spiritual tools; preserve discoverability for public formation resources while respecting private use.
- Existing related routes, components, data and instructions: `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/layout.tsx`, `src/components/analytics/AnalyticsPageTracker.tsx`, `src/lib/analytics.ts`, the route modules and Search Console/GA4 dashboards described in the owner plan.
- Repository revision and existing dirty files: `main` at implementation start; working tree clean.
- Content change / code change / both: Code and operational guidance; no theological or devotional copy change.
- In scope: Sitemap eligibility, explicit sanitized GA4 page views, suppression of interaction events on private spiritual-tool routes, allowlisted campaign source/medium attribution, admin recommendations.
- Explicit non-goals: Changing GA4 or Search Console settings, Bing submissions, paid services, deployment, pushing, or changing public devotional content.
- Constraints (privacy, dependencies, visual identity, cost): Keep private/user-entered content out of analytics; no new dependency or service; preserve static/ISR patterns and sitemap validation.
- High-risk subject matter: Personal spiritual practice and intention data; telemetry policy is path-only views with no interactions on private tool surfaces.
- Open owner decisions: None for this revision.

## Stage selection by Oratory Lead

| Stage | Required / not-applicable | Evidence and reason | Assigned reviewer |
| --- | --- | --- | --- |
| Repository/context | Required | Canonical checkout verified by `SOURCE_OF_TRUTH.md`; clean tree; sitemap, analytics helpers and dashboards inspected. | Oratory Lead |
| Catholic sources | Not applicable | No Catholic claims, prayer text or doctrine changes. | — |
| Formation/content | Not applicable | No devotional content changes. | — |
| Independent theology | Not applicable | No theological content changes. | — |
| UX/accessibility | Not applicable | No visitor-facing interaction or presentation changes. | — |
| Site/SEO | Required | Sitemap eligibility, canonical URLs, indexability and duplicate Search Console submissions are in scope. | Oratory Lead (review recorded in REVIEWS.md) |
| Privacy/safety | Required | Existing page views include query strings; existing custom events run on private spiritual tools. | Oratory Lead (review recorded in REVIEWS.md) |
| Vercel efficiency | Required | Root analytics script and sitemap generation are affected; preserve existing revalidation/build behavior. | Oratory Lead (review recorded in REVIEWS.md) |
| Automation architecture | Not applicable | No scheduled or background work. | — |
| Engineering and verification | Required | Owner explicitly requested implementation of this plan on 2026-09-28. | Codex Engineering |
| Code/diff review | Required | Focused final integrated diff review. | Codex Engineering (self-review; not independent) |
| Human review | Required | Local implementation only; human review remains pending. | Owner |

## Next handoff

Approved implementation scope: this feature packet revision 1, based on the owner's explicit “PLEASE IMPLEMENT THIS PLAN” instruction dated 2026-09-28. See `DEVELOPMENT-SPEC.md` and `REVIEWS.md`. Stop at local implementation; no external dashboard mutation or release.
