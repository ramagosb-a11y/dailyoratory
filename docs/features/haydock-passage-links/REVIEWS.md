# Reviews — Daily Haydock Passage Links

- Feature ID: `haydock-passage-links`
- Revision reviewed: 1
- Review date: 2026-09-27

## Source and live behavior evidence

- The live page's September 27, 2026 Responsorial Psalm is `Psalm 25:4-5, 6-7, 8-9`, matching the official [USCCB reading page](https://bible.usccb.org/bible/readings/092726.cfm).
- A read-only request to the live Daily Oratory route confirmed its Haydock link is `https://johnblood.gitlab.io/haydock/id330.html` and labels the action “Open book index.”
- In `src/lib/scriptureSourceLinks.ts`, `haydockDirectPages` contains only a limited manually curated set of book/chapter pairs. Unmatched Old Testament references fall back to `id330.html`; unmatched New Testament references fall back to `index.html`.
- The Haydock [Old Testament index](https://johnblood.gitlab.io/haydock/id330.html) explicitly labels Psalms with Douay-Rheims numbering and modern numbers in brackets. Its `24 [25]` link resolves to [Haydock Psalm 24](https://johnblood.gitlab.io/haydock/id749.html); a direct read-only check returned HTTP 200 and title `Psalm 24`.

## UX / Formation review — independent

**Decision: ready with recommendations.** The existing fallback label is technically accurate but takes the reader to a broad menu and requires searching the book and chapter. For mapped chapters, use a direct destination and label it as chapter notes. For a real fallback, say that the user must choose a chapter. For Psalms, make Haydock's Douay-Rheims number apparent when it differs from the modern number.

Acceptance checks: Psalm 25 opens Psalm 24 in Haydock; unmatched references do not imply a direct commentary landing; index fallback remains discoverable and understandable.

Reviewer: `/root/ux_review`, read-only review requested by Oratory Lead.

## Codex Engineering review — independent

**Decision: changes required before implementation claims completeness.** A small hand-maintained direct-link list will continue to miss most daily readings. Build a checked-in static mapping from Haydock's own OT and NT chapter navigation; do not derive opaque `idN.html` paths by arithmetic and do not fetch an external mapping at runtime. Keep a clear index fallback for unsupported inputs.

The current Psalm conversion uses one destination chapter for split modern Psalms 116 and 147. For 116, verses 1–9 correspond to Haydock/Douay Psalm 114 and verses 10–19 to 115. For 147, verses 1–11 correspond to 146 and verses 12–20 to 147. The same conversion feeds Haydock, Douay-Rheims, and New Advent destinations. Also preserve the correct common N−1 conversion for modern Psalms 117–146 and inspect boundary/merged cases.

Acceptance checks: every static map target resolves to an expected source page heading; canonical-to-Haydock book aliases include Kings/Samuel and Chronicles/Paralipomenon naming; Psalm 9/10 and 114/115 merges resolve to shared Haydock/Douay numbering; Psalm 116/147 verse ranges include both relevant chapters when needed; unsupported syntax uses a truthful fallback.

Reviewer: `/root/journal_history_ux`, read-only review requested by Oratory Lead.

## Site / SEO review — Oratory Lead

**Decision: ready.** Existing route, canonical metadata, indexing, sitemap, redirects, and navigation do not change. Only external anchor destinations/labels change. Preserve `target="_blank"` with `rel="noopener noreferrer"`; use source-site navigation as the authority for chapter hrefs. No SEO route checks are needed beyond existing link/build checks.

## Privacy / safety

**Not applicable.** The resolver consumes public reading references only. It does not read the on-device journal and introduces no new analytics, logs, APIs, or data flow.

## Date freshness follow-up — independent engineering review

**Decision: acceptable with bounded-staleness caveat.** Setting the route ISR and USCCB feed Data Cache intervals to one hour preserves static/ISR rendering and avoids a request-time USCCB fetch for every visitor. A time-based ISR route can serve stale HTML to the first request after expiration while regeneration occurs in the background, so this does not promise a fresh reading list on that exact request. The client-side date refresh cannot compensate if the cached feed lacks the current date.

Verification recommended after release: confirm the route remains static/ISR, observe cache hit/stale/regenerated responses, and compare the displayed date and readings with the public feed. If same-request freshness at the date boundary becomes a strict requirement, use controlled on-demand revalidation rather than making the entire page uncached.

Reviewer: `/root/journal_history_ux`, read-only review on 2026-09-28.
