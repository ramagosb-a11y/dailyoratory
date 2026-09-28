# Owner admin guidance — privacy-safe sitemap and analytics

This feature changes the site code only. Apply these dashboard settings manually after reviewing the local implementation.

## Google Search Console

- Keep `https://dailyoratory.faith/sitemap.xml`, which matches the site's canonical host.
- Remove the duplicate submitted sitemap `https://www.dailyoratory.faith/sitemap.xml` after confirming the canonical entry remains submitted. The observed submissions both showed Success; counts and last-read dates differed.
- Review excluded URLs by reason and inspect representative examples before requesting indexing. The observed 422 not-indexed URLs included 25 not found, 14 redirects, 4 blocked by robots, 2 alternate canonicals, 86 crawled/not indexed, and 291 discovered/not indexed. These categories have different causes and do not all call for a code change.

## GA4

- In the web data stream's Enhanced Measurement settings, disable **Page changes based on browser history events**. Google documents that this can send history-based `page_view` events even when the Google tag has `send_page_view: false`; leaving it on can duplicate the site's explicit views and bypass its sanitized route tracking.
- Turn off automatically collected interaction types that conflict with the site's path-only policy on private spiritual tools, including site search, form interactions, outbound clicks, scrolls, file downloads, and video engagement. The site can emit its own reviewed public-page events; property-level automatic collection cannot be selectively suppressed by the local event helper on only selected routes.
- Review Key events. The observed traffic-acquisition report showed 1,061 key events across 13,086 events (52.24% of sessions with a key event); mark only outcomes that represent a deliberate site goal. Do not mark all informational or private spiritual-tool interactions as key events.
- Use session source/medium and sanitized page path reports for routine acquisition review. Query strings, fragments, page titles on personal surfaces, user-entered values and intention slugs are not sent by the updated code.
- Site-provided UTM attribution is intentionally limited to allowlisted generic source and medium values (for example, `parish` / `email`); custom campaign values outside that list are omitted.
- Verify changes in DebugView/Realtime with synthetic URLs and values only. Do not enter real prayer intentions, journal text or examination notes during validation.

Google references:

- [Manually measure page views and disable browser-history page views](https://developers.google.com/analytics/devguides/collection/ga4/views)
- [GA4 data redaction](https://support.google.com/analytics/answer/13544947?hl=en)
