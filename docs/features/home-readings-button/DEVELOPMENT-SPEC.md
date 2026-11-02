# Daily readings homepage button — development specification

Feature home-readings-button; revision r1; date 2026-11-01. Owner explicitly requested the web team review the screenshot-identified “Daily Readings and Reflections” button, make it stand out and look stunning. This authorizes the isolated local visual enhancement. Production publication is not authorized.

Target: TodayInTheChurchClient.tsx homepage link to /reflections/reading-and-reflections. Preserve full visible/accessibility label, href, reflection_open event, event parameters, surrounding liturgical surface and saint companion. No content/doctrinal/storage/API/metadata changes.

Use dedicated CSS-module styling: deep navy gradient, ivory existing Cormorant label, small decorative gold open book, gold arrow medallion, inset border and depth. No new image/library, secondary copy, autoplay, shimmer or continuous motion. Retain native anchor semantics. Responsive wrapping at 320px and 200% text; minimum 56px target, clearly visible two-color focus ring, subtle hover/pressed response and no movement under reduced motion.

Selected roles: Lead, UX/Formation, Engineering, Site/SEO boundary preservation and lightweight performance/accessibility review. New theological research and automation not applicable. Privacy scope is unchanged existing event preservation. Reuse of existing CSS/SVG avoids new asset/service costs.

Reviewer readings_button_review delivered independent design advice and actual code review. No blockers; measured minimum label contrast 11.29:1. Final browser acceptance and report follow in IMPLEMENTATION-REPORT.md.

## Revision r2 — preserve the original footprint

Owner correction: “This makes the block uneven. Can we keep it the same size as it was and make it look more impressive”. Restore the exact original shared todayActionClassName layout, original font, padding, wrapping, minimum height and intrinsic desktop/mobile sizing. Remove inline book/arrow elements and enlarged serif typography. Keep premium navy gradient, gold edge/inset hairline, ivory label and subtle shadow. A small decorative CSS chevron sits entirely within the existing right padding and changes no dimensions. Hover changes finish only; no lift or resizing. All behavior and surrounding layout remain unchanged. This revision supersedes r1 size and typography choices.

## Publication authorization

2026-11-01 owner: “All changes approved, commit deploy to main and production, not preview”. Authorizes release of final r2 in the combined approved redesign release. This supersedes the development-stage no-production-authorization state. Current release record: ../eight-page-editorial-redesign/RELEASE.md.
