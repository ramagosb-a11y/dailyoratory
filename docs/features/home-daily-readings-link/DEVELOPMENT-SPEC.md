# DEVELOPMENT-SPEC — Home daily readings link

## Identity and authorization
- Feature: `home-daily-readings-link`
- Revision/date: v1 / 2026-09-27
- Status: approved-for-implementation
- Owner authorization: user request dated 2026-09-27 to point Daily Readings to `https://dailyoratory.faith/reflections/reading-and-reflections` and remove the Daily Scripture reflections button.
- Reviews: [IDEA.md](IDEA.md); focused UX and route checks recorded here.
- Production authorization: owner explicitly authorized commit and production release to `main` on 2026-09-27; no preview deployment.

## Contract
- In `TodayInTheChurchClient`, change the existing Daily readings CTA destination to `/reflections/reading-and-reflections` (same canonical same-origin page as the provided URL).
- Remove the separate Daily Scripture reflections CTA.
- Use the button label “Daily Readings and Reflections” and keep its existing styles.
- Record a `reflection_open` event with `reflection_slug: reading-and-reflections-index` and `source_section: today-in-the-church`; do not emit the previous external-resource event for this internal destination.
- No other routes, content, metadata, or page sections change.

## Acceptance criteria
| ID | Requirement | Verification |
| --- | --- | --- |
| AC-1 | One Daily readings CTA remains and points to the specified route. | Local browser and diff. |
| AC-2 | Daily Scripture reflections CTA is removed. | Local browser. |
| AC-3 | CTA opens the existing Reading and Reflections page. | Browser interaction. |
| AC-4 | Targeted lint, typecheck, build, and diff checks pass. | Commands and outcomes. |
