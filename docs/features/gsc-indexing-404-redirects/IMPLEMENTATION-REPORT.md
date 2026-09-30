# Implementation report — Search Console 404 redirect cleanup

- Feature ID: `gsc-indexing-404-redirects`
- Spec revision: 1
- Date: 2026-09-30
- Status: Implemented locally; awaiting human review.

## Changes

- Added 16 exact permanent redirect rules in `src/data/redirects.ts` for legacy prayer-intention, prayer-room, Library, prayer-directory and saint-profile paths that have verified current equivalents.
- Next.js resolves `permanent: true` redirects as HTTP 308; built route manifest confirms every added source and destination.
- Added the Search Console evidence, review decisions, privacy boundary, and implementation contract in this feature packet.
- Did not change Search Console settings, sitemap submissions, page copy, or release state.

## Verification

- `npm run validate:urls` — passed.
- `npm run seo:preflight` — passed, including priority route checks.
- `npm run typecheck` — passed.
- `npm run build` — passed. Deployment-source, client-store, image, static build, and rendering-strategy safeguards passed.
- `.next/routes-manifest.json` — verified all 16 sources, matching destinations, and 308 status codes.

## Limits and owner follow-up

- Search Console's last-indexed report is historical. URLs such as `/library/morning-offering` now exist, and therefore were not changed.
- Individual old prayer-intention URLs and dated reflection URLs remain unresolved without a verified equivalent; no broad redirect was added for those.
- Search Console validation has not been started because it would update external Search Console state and was outside the implementation request.
- Production deployment is not authorized by this feature instruction; the redirects are local only.
- The coordinator reviews are not independent specialist approvals. Human review of this local diff remains pending.
