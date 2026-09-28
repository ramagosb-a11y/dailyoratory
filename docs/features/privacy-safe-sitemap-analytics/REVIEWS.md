# Reviews — privacy-safe sitemap and analytics

- Feature ID: `privacy-safe-sitemap-analytics`
- Scope revision: 1
- Review date: 2026-09-28
- Reviewer: Codex acting as Oratory Lead; these are coordinator reviews, not independent external reviews.

## Site / SEO review

- Evidence: `src/app/sitemap.ts` includes known noindex paths `/fasting-retreat`, `/rosary/visual-meditation`, `/prayers/litany-of-saint-darby`, and `/confession/examination/print`, plus local/personal routes such as `/rule-of-life/my-rule`, `/pathways/my-pathways`, and `/sacraments/my-preparation`. `brand.canonicalUrl` is `https://dailyoratory.faith`. Search Console lists both canonical and `www` sitemap URLs as successful, with 426 and 449 discovered pages respectively.
- Decision: Ready with implementation. Exclude noindex pages and interactive personal workspaces from the sitemap; preserve public content and currently approved dynamic records. Keep canonical generation on the non-`www` host. The supplied GSC property-side duplicate removal remains owner-admin guidance only.
- Checks: Sitemap URL validator, SEO preflight, build sitemap output and metadata/canonical review.
- Blockers: None.

## Privacy / safety review

- Evidence: `AnalyticsPageTracker` sends `pathname` plus all search parameters; root gtag config sends its default page view. `trackEvent` has no route-level suppression. Existing private flows emit interaction events, including examen step views, confession examination starts and intention form submission. Journal/examination state is local, but telemetry is a separate network destination.
- Decision: Ready with implementation. Disable the default tag page view; explicitly send an origin + pathname-only location and sanitized referrer; omit page title for personal routes. Redact intention detail slugs to a stable route template. Suppress all custom interaction events on private-tool paths. Allow only safe bounded `utm_source` and `utm_medium` values as campaign attribution; drop all other URL parameters from analytics.
- Checks: Unit coverage for route classification, URL redaction and campaign allowlisting; production bundle/build inspection and synthetic event payload verification.
- Limit: GA4 Enhanced Measurement page-history tracking and interaction collection are controlled in GA4 and must be disabled/configured by the owner using `ADMIN-GUIDANCE.md` before the complete policy can be verified in production.

## Vercel efficiency review

- Evidence: Sitemap route currently revalidates every 86,400 seconds. Analytics is a Google gtag script in the shared root layout. No Vercel dashboard usage data was available in the supplied surfaces.
- Decision: Ready. Keep current sitemap ISR/revalidation, root script, and dependency set. No new function, middleware, storage, or paid service is introduced.
- Checks: Build/rendering guards and sitemap output verification.
- Blockers: None; usage figures remain unavailable and no Vercel plan change is proposed.
