# IDEA — Search Console 404 redirect cleanup

- Feature ID: `gsc-indexing-404-redirects`
- Revision/date: 1 / 2026-09-30
- Owner: Brent Ramagost
- Status: approved-for-implementation

## Goal

Use the live Google Search Console indexing report to restore useful destinations for obsolete URLs when a clear current equivalent exists.

## Evidence and scope

- GSC property `sc-domain:dailyoratory.faith`, Pages report last updated 2026-09-20: 422 not indexed, 77 indexed. Reasons included 25 Not found (404), 14 Page with redirect, 4 Blocked by robots.txt, 2 Alternate page with proper canonical, 86 Crawled—currently not indexed, and 291 Discovered—currently not indexed.
- GSC showed the canonical sitemap as successful, last read 2026-09-29, with 427 discovered pages. The sitemap report showed only `https://dailyoratory.faith/sitemap.xml`.
- GSC's 404 examples included former prayer-request, community prayer-room, Library, prayer-directory and saint-profile paths. Some have clear current route equivalents; several reflect withdrawn user-submitted records or dated reflection content whose replacement is not established.
- Performance report (last update 15.5 hours before review; 3-month window): 14 clicks, 1.73K impressions, 0.8% average CTR and average position 58.8. Top pages included `/adoration` (240 impressions, 2 clicks), `/reflections/mass-readings` (219, 1), `/homilies` (190, 2), and `/relics` (173, 0). These totals are low and average position is low; they do not justify rewriting theological page content or assuming titles caused the CTR.
- HTTPS report: 0 non-HTTPS URLs, no critical issues. Breadcrumb report: 0 invalid, 4 valid. Core Web Vitals: not enough field usage data for mobile or desktop. Manual Actions and Security Issues: no issues detected.
- Local `npm run validate:urls` and `npm run seo:preflight` both passed before implementation.

## Reviews required

- Site / SEO: required; map only GSC 404 URLs to verified existing canonical routes and keep current sitemap/robots rules.
- Privacy / Safety: required for retired prayer-intention endpoints; never redirect individual deleted prayer requests to another record or expose private content.
- Vercel Efficiency: required because redirects run through existing Next.js routing; preserve the current static route setup and add no service.
- Catholic sources, formation, UX: not applicable; no public devotional text or user interface changes.

## Owner authorization

The owner's instruction on 2026-09-30, “Review the google search console for improvements and implement,” authorizes review-backed, scoped implementation in the canonical repository. It does not authorize deployment, commit, push, GSC mutation, or URL submission.
