# Implementation report — privacy-safe sitemap and analytics

- Feature ID: `privacy-safe-sitemap-analytics`
- Spec revision: 1
- Date: 2026-09-28
- Status: release-authorized
- Code/content: Runtime code and operational guidance only; no devotional or theological content changed.

## Changes

- Sitemap generation now filters known noindex routes and personal utility/form pages while retaining canonical public pages and published approved dynamic records. Current exclusions are centralized in `src/lib/sitemapEligibility.ts`.
- GA4's automatic tag page view is disabled in the site config. Default page location/referrer are sanitized, and the route tracker sends an explicit initial and navigation page view using pathname-only values; it omits page titles on sensitive surfaces and redacts approved intention-detail slugs.
- Custom GA events are suppressed on confession/examen, intention, journaling, personal planning/tracker, family prayer, and related companion routes. Event parameters are allowlisted and values that contain private intention/contact/selections are discarded. URL-valued event parameters lose query strings/fragments.
- The final event-caller audit also classified `/pray`, `/formation`, `/ocia`, `/body-soul-spirit`, and `/relics` as personal-tool surfaces so their interaction events are suppressed.
- Campaign attribution is restricted to generic allowlisted `utm_source` and `utm_medium` values. Other query parameters are omitted.
- Added `ADMIN-GUIDANCE.md` for the manual Search Console duplicate cleanup and GA4 Enhanced Measurement/key-event settings. No external dashboards were changed.

## Verification

- `npm run test:analytics-privacy` — passed (5 tests).
- `npm run typecheck` — passed.
- Focused ESLint on changed runtime/test files — passed.
- `npm run validate:urls` — passed.
- `npm run seo:preflight` — passed; 13/13 priority routes found.
- `npm run audit:client-stores` — passed.
- `npm run build` — passed; client-store and rendering-strategy audits passed; static pages generated.
- Built sitemap inspection — 427 URLs, all unique and on `https://dailyoratory.faith`; no tested noindex/personal utility routes present.
- Full `npm run lint` — failed on 43 errors and 36 warnings in unrelated existing files, including CommonJS `require()` rules and an existing synchronous state update in `src/components/way-of-cross/WayOfCrossQuietRoom.tsx`. Focused lint for this feature's files passed.

## Review and limits

- Site/SEO, Privacy/Safety and Vercel-efficiency triage are recorded in `REVIEWS.md`; reviews were coordinator reviews, not independent specialist reviews.
- Google states Enhanced Measurement can send history-based page views independently of `send_page_view: false`. The owner must apply the GA4 settings in `ADMIN-GUIDANCE.md` before relying on the privacy policy in production.
- GA4/Search Console changes and Bing authenticated property review remain unperformed by scope. No local browser network capture or production dashboard verification was performed.
- Owner authorized commit to `main` and a Git-integrated Production deployment on 2026-09-28, explicitly excluding Preview. Dashboard changes remain out of scope. Deployment verification is reported in the release task.
