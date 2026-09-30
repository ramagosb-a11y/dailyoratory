# Reviews — Search Console 404 redirect cleanup

- Feature ID: `gsc-indexing-404-redirects`
- Spec revision: 1
- Review date: 2026-09-30
- Reviewer: Codex acting as Oratory Lead; coordinator reviews, not independent specialist review.

## Site / SEO

- Evidence: GSC Pages report identifies 25 404 URLs. Examples include `/ask-for-prayer/submit`, `/ask-for-prayer/guidelines`, `/library/the-eucharist`, `/library/latin-rosary`, `/library/eschatology`, `/library/events`, `/library/ordinary-time`, `/prayers/novenas`, and four former saint slugs. Current destinations were verified from App Router routes, published saint slugs, navigation data, and existing content organization. GSC currently lists only the canonical sitemap; its last read was 2026-09-29 with 427 discovered URLs.
- Decision: Ready. Add exact permanent redirects only where the replacement route is clear. Do not change sitemap rules, canonical metadata, or the 291 discovered/not-indexed state based on counts alone.
- Validation: URL validation, SEO preflight, and production build / redirect inspection.

## Privacy / Safety

- Evidence: GSC examples include former prayer-request admin/team and individual request paths. Individual request slugs can reflect submitted spiritual needs. Current public alternatives are `/prayer-intentions` and `/prayer-intentions/wall`; the previous individual records are not verifiably available.
- Decision: Ready with a narrow boundary. Redirect retired listing/admin/team/guideline routes to public current landing pages. Do not redirect individual request URLs, and do not send their old slugs or content to analytics.
- Checks: Review exact redirect paths and ensure they target only public route listings, not individual requests or personal tool state.

## Vercel Efficiency

- Evidence: Current redirects are Next.js `redirects()` sourced from `src/data/redirects.ts`. Changes add static redirect rules only; no middleware, function, dependency, image, or external service is introduced. Vercel usage dashboard data was not available in this review.
- Decision: Ready. Existing redirect mechanism remains the lower-usage option.
- Risk: Old links will permanently resolve to replacement pages after release (Next.js emits HTTP 308); exact routes and no loops must pass URL/SEO checks.

## Performance and other Search Console surfaces

- Performance: the three-month report shows 14 clicks, 1.73K impressions, 0.8% CTR, average position 58.8. Top visible pages and queries are recorded in IDEA. Given the low average rank and small counts, no speculative public copy/title rewrites are included.
- HTTPS: no non-HTTPS pages or critical issues.
- Breadcrumbs: 0 invalid, 4 valid.
- Core Web Vitals: no mobile or desktop field report due to insufficient usage data; no code change can be grounded in this report.
- Manual Actions and Security Issues: no issues detected.

## Limits

- Search Console last-indexed examples are historical snapshots. Some reported URLs, such as `/library/morning-offering`, now resolve from current published content; they are not changed.
- Dated Mass Reading Reflection 404 examples and deleted individual prayer-request URLs have no verified, content-equivalent replacement. They remain unchanged pending current URL inspection or owner content decision.
- Coordinator review is not independent specialist review.
