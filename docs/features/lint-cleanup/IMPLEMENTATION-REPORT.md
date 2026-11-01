# Lint cleanup — implementation report

Implemented 2026-11-01 under owner-approved revision 1. Separate local commit authorized; no push/deployment authorized. The eight-page redesign is untouched. Existing generated logs/screenshots preserved.

## Changes

Fresh baseline: 43 errors, 36 warnings. CommonJS require is permitted only in scripts/**/*.cjs; TypeScript/application module and React rules remain active. Removed redundant per-script require suppressions. Renamed the check script's local module binding, removed unused imports, inert copy state/helpers, unused parameters and unused data constants. DevotionsLibraryGrid no longer accepts a list it never read; its existing approved-data filtering remains unchanged. No Catholic text, sources, routes, metadata, analytics payloads or dependencies changed.

Way of the Cross: cached useSyncExternalStore progress reader, deterministic server default, existing form/station keys retained, validated station bounds, no storage writes during restore, cross-tab change/clear notifications, in-memory navigation when storage is unavailable. Missing/blank/corrupt station now opens the introduction instead of coercing missing data to station I. No personal text or new network data. All prayer text/navigation preserved.

Prayer copying: shared PrayerCard continues to own success feedback. Adoration's redundant catch/state removed so clipboard denial reaches the shared error handler rather than incorrectly reporting success; event still fires only after successful copy. The Bible helper removed dead duplicate state/function; its component currently has no mounted route caller.

Images: dimensioned Next Image for provider thumbnails with direct/unoptimized delivery retained; local litany art uses responsive optimized Image, preserving onLoad/onError fallbacks and referrer policy. MediaEmbed keeps its native image for externally supplied originals of unknown dimensions, with one documented element-level lint exception to preserve natural aspect ratio/direct delivery. No global image-rule disable. No new raster assets, conversions or source storage growth; savings 0 bytes. Read existing image workflow and bundled Next image guidance. Provider thumbnails use synthetic responses during automated layout tests; no claims about third-party uptime or remote optimization.

## Verification

- Full npm run lint -- --max-warnings 0: PASS, zero errors/warnings. New regression scripts also linted.
- npm run typecheck: PASS; source diff whitespace check: PASS.
- npm run build: PASS, including source/image/client-store guards, TypeScript, static generation and rendering audit. Log output/lint-cleanup-build.log.
- node --test scripts/way-of-cross-storage.test.cjs: 6/6 PASS. Missing/saved/corrupt/range/denial cases, stable snapshots, deterministic server state, legacy writes/remount, listener cleanup, bounds, storage changes/clear.
- Existing node scripts/check-mass-reflection-content.cjs: PASS; renamed loader still exercises renderer/date/publication cases.
- npm run validate:urls: PASS.
- Production-mode browser on 3016: progress reload/form switch/cross-tab changes/clear, corrupt/out-of-range and blocked storage; desktop/mobile screenshots; nine routes for content/images; media fallback; litany intro/first movement artwork; Adoration copy success/denial. Final result recorded in turn. Earlier browser-script failures were corrected test targeting, absolute fallback URL normalization and about:blank fixture seeding; application behavior was inspected before changing assertions.
- Implementer reviewed integrated code, source/import diffs, React best practices and rendered desktop/mobile/first-litany-movement screenshots. No independent review claimed.

## Separate existing test limitation

npm run test:analytics-privacy fails before assertions because Node cannot resolve the extensionless ../data/redirects import in sitemapEligibility.ts. With a temporary ignored QA resolver, four analytics tests pass and the sitemap test fails its expectation that /fasting-retreat is excluded (current eligibility includes it). Neither these files nor sitemap behavior changed in this cleanup. No guard weakened or test expectation changed to conceal that result. Resolve this as a separate test/SEO issue; this report does not claim every repository test passes.

## Handoff

Local production-build preview: http://127.0.0.1:3016/way-of-cross . Human review pending. Generated QA artifacts remain uncommitted. No production push, external message, configuration/service change, or deployment.
