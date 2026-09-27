# IDEA — Homepage Life of Jesus card

- Feature ID / owner / date: `home-life-of-jesus-card` / repository owner / 2026-09-27.
- Goal: replace the homepage Featured Content Eucharistic Miracles card with the existing Life of Jesus Christ timeline.
- Evidence: `src/app/page.tsx` defines the fourth featured card; `/life-of-jesus` is the existing timeline route, canonical metadata page, and sitemap entry. Its established title/copy/image are in `src/app/life-of-jesus/page.tsx` and `src/data/lifeOfJesusVisuals.ts`.
- Scope: card image, alt text, title, concise description, and link only.
- Non-goals: remove the Eucharistic Miracles route, alter its external destination elsewhere, change timeline content, create routes, or change SEO metadata.
- Authorization: owner request dated 2026-09-27 authorizes this local implementation.
- Production publication: not authorized.

## Stage selection

| Stage | Decision | Evidence / reason |
| --- | --- | --- |
| Repository/context | Required | Homepage card, timeline route/assets, current repository status inspected. |
| Catholic Sources / Formation / Theology | Not applicable | Reuse existing page copy; no new claim or devotional text. |
| UX/accessibility | Required | Card presentation, image alt text, and destination change; reviewed in implementation. |
| Site/SEO | Required, lightweight | Existing canonical route and sitemap entry verified; no route/metadata change. |
| Privacy/safety | Not applicable | No personal data flow. |
| Engineering/verification | Required | Focused lint/typecheck/build and local browser review. |
| Code review | Required | Focused diff self-review disclosed. |
| Human review | Required | Local handoff; no deployment authorization. |
