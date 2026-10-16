# Strongholds production release — 2026-10-16

Owner instruction: “Commit deploy to production and main.” Release authorized for the reviewed implementation. This is publication of an editorial preview; no human theological approval is invented. Existing source/editorial notices and noindex/sitemap exclusion remain. The existing publication flag is enabled so the module and homepage banner can appear on Vercel.

Canonical branch main was fetched and matched origin/main at 6088b0148086adfa9063249f64c7072e51dab939 before staging. Existing production/rollback reference: dpl_9xcAeBZtAg8qR4kxM7t1Y3gcFgB2, daily-oratory-gwe0emlva-ramagosb-6300s-projects.vercel.app, READY on production aliases including dailyoratory.faith and www.dailyoratory.faith, from that same commit.

Pre-release validation: production-environment build (VERCEL=1) passes647staticpages and client-store/image/rendering guards.18focusedtests,scopedlint,URLvalidation,SEOpreflight,citationdetector pass. Full-site lint established43errors/36warnings in unrelated existing code; scoped reviewedfeaturefiles have no lint findings. Local CUA checks documented in IMPLEMENTATION-REPORT. No framework/dependency/version changes.

Stage only Strongholds source/integration, tests, feature documentation, eight optimized WebP assets and provenance prompt records. Leave unrelated public/images/adoration/Mounjaro2.5.jpg, build logs, screenshots, original PNGs and unselected concepts uncommitted. Optimized assets total2,396,968bytes; seven teaching images save87.9% against their sourcePNGs; emblem saves82.9%.

Release sequence: reviewed commit to main, git push origin main, observe the matching Git-created Vercel production deployment, verify READY and production alias assignment, then read-only priority and Strongholds smoke checks. No manual vercel deploy, preview promotion, external sync or automatic rollback. Final deployment ID/commit and smoke results are reported in the release handoff.
