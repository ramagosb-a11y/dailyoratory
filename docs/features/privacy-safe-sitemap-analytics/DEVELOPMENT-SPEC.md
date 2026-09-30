# DEVELOPMENT-SPEC — privacy-safe sitemap and analytics

## Identity and authorization

- Feature ID: `privacy-safe-sitemap-analytics`
- Spec revision/date: 2 / 2026-09-30 (owner-approved follow-up)
- Status: release-authorized
- Owner: Brent Ramagost
- Implementation approval: Owner instruction “PLEASE IMPLEMENT THIS PLAN” dated 2026-09-28, approving the complete plan in this conversation.
- Required review artifacts and reviewed revisions: `REVIEWS.md` revision 1 (coordinator reviews; not independent).
- Production authorization: Owner instruction on 2026-09-28 authorizes committing the reviewed feature to `main` and using the Git-integrated Vercel Production deployment; explicitly excludes Preview. It does not authorize GA4 or Search Console dashboard changes.
- Re-review triggers: Sitemap eligibility policy or analytics data-flow changes.

## Owner-approved follow-up — revision 2

- Approval evidence: Owner replied “approved” on 2026-09-30 to the focused follow-up covering `/fasting-retreat` privacy classification and removal of current generic, private-tool, and non-goal GA4 key-event flags. This authorizes the listed code and GA4 event-configuration changes only; no deploy, push, or other GA4 settings changes.
- Code addition: Treat `/fasting-retreat` and nested paths as sensitive analytics paths so its personal retreat tool retains path-only page views and suppresses custom interaction events.
- GA4 cleanup: Unmark the existing key-event flags `bible_resource_click`, `click`, `first_visit`, `form_start`, `media_card_click`, `media_embed_open`, `reflection_open`, `rosary_mystery_group_click`, `saint_of_day_learn_more_click`, and `saint_profile_open`. Leave event collection intact and do not add key events until the owner defines a measurable business goal. Confession/examen events were already not marked as key events at the time of this change.
- New-page measurement: Newly created public pages remain measured by ordinary sanitized page views; page views, opens, and navigation clicks are not key events solely because a page is new.
- Verification: Focused route privacy test; verify the GA4 event list shows those flags disabled. No release authorization is included.

## Goal and scope

- Goal: Publish a sitemap containing canonical, public, indexable content and prevent sensitive or query-string data from entering GA4 page or interaction events.
- Existing functionality and evidence: Next.js metadata sitemap in `src/app/sitemap.ts`; root Google tag in `src/app/layout.tsx`; client route view tracker in `src/components/analytics/AnalyticsPageTracker.tsx`; generic event helper in `src/lib/analytics.ts`.
- Allowed files: These three runtime files, a focused analytics test file/script if appropriate, and this feature packet. No dependencies.
- Explicit non-goals: Modifying connected GA4/Search Console/Bing settings, submitting URLs, or changing devotional content. The owner separately authorized committing this feature to `main` and its Git-integrated Production deployment, with no Preview deployment.
- Code/content distinction: Code and admin guidance only; no public copy or theological content changes.

## Behavior

- Sitemap: Exclude routes with `robots.index === false` and local/personal utility routes that exist to create, print, save, track or configure an individual's spiritual practice. Retain public informational routes and published approved dynamic entries. Preserve URL validation, deduplication, canonical host, cache revalidation and existing sitemap metadata.
- Page views: Set `send_page_view: false`; send an explicit initial and client-navigation `page_view` with full canonical origin plus pathname only. Never send search parameters or fragments. Sanitize referrers to origin plus pathname. On sensitive paths, omit page title and redact intention-detail slugs to a stable route pattern.
- Sensitive routes: Keep sanitized page views for confession examinations, daily examen, prayer/formation builders and checkups, OCIA readiness reflection, relic visit reflection, intention submission/details, private journals and personal rule/pathway/sacrament/virtue/saint workspaces. Suppress all custom interaction events on those routes.
- Public events and campaigns: Continue existing typed public informational events only after review of their parameter source. Strip unknown or known free-text/sensitive parameters centrally. Preserve only generic `utm_source` and `utm_medium` values from a fixed allowlist; do not send other query parameters.
- External configuration: Document that GA4 Enhanced Measurement browser-history page views and auto interaction events need owner-side settings changes; no dashboard mutation is in scope.

## Acceptance criteria and tests

| ID | Observable required behavior | Verification method / command | Expected result |
| --- | --- | --- | --- |
| AC-1 | Sitemap excludes noindex routes and personal utility workspaces while retaining approved public and dynamic content. | URL validation, SEO preflight, production build sitemap inspection. | Canonical, deduplicated sitemap; excluded utilities absent; public entries remain. |
| AC-2 | First-load and client-route page views contain origin + pathname only. | Unit tests and synthetic browser/network inspection. | No query, fragment or raw intention slug in `page_location`, `page_path` or referrer. |
| AC-3 | Personal spiritual-tool routes emit page views but no custom interaction events. | Route-policy unit tests and synthetic browser checks on representative routes. | Sanitized path view only; no title or interaction payload. |
| AC-4 | Campaign attribution retains only safe bounded source and medium. | URL allowlist unit tests. | Valid source/medium retained; term/content/other keys and unsafe values discarded. |
| AC-5 | Existing public event parameters do not include entered text or sensitive data. | Call-site audit and synthetic event payload tests. | Only reviewed static/bounded aggregate fields reach gtag. |

- Commands: `npm run lint`, `npm run typecheck`, `npm run validate:urls`, `npm run seo:preflight`, and `npm run build`.
- Manual: Inspect built sitemap and synthetic browser event payloads. Owner checks GA4/GSC admin steps in `ADMIN-GUIDANCE.md`.
- Rollback: Revert the focused sitemap/tracker/helper changes together; retain the feature packet as decision history.

## Definition of Done

- [x] Required review triage completed; owner implementation authorization recorded.
- [x] Acceptance criteria implemented and checks recorded.
- [x] Final diff reviewed; limitations documented; independent specialist review was not available and is disclosed in `REVIEWS.md`.
- [x] Owner's `main` and Production release authorization recorded; external dashboard changes remain out of scope.
