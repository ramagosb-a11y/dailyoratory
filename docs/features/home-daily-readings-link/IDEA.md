# IDEA — Home daily readings link

- Feature ID / owner / date: `home-daily-readings-link` / repository owner / 2026-09-27.
- Goal: direct the Today in the Church Daily readings button to the site's Reading and Reflections page and remove the separate reflections button.
- Evidence: `src/components/home/TodayInTheChurchClient.tsx`; existing route `src/app/reflections/reading-and-reflections/page.tsx`.
- Scope: one internal destination change and one button removal, retaining the Daily readings label and existing home card layout.
- Non-goals: edits to the destination page, other reading links, or unrelated home sections.
- Authorization: user request dated 2026-09-27 explicitly specifies destination and removal.
- Production publication: not authorized.

## Review selection

| Stage | Decision | Reason |
| --- | --- | --- |
| Repository/context | Required | Existing home buttons and destination inspected. |
| UX | Required, self-review | Consolidate duplicate CTAs while preserving the requested Daily readings label. |
| Site/SEO | Required, lightweight | Link to existing canonical route; no route/metadata change. |
| Theology / privacy | Not applicable | No content claim or personal data flow. |
| Engineering and verification | Required | Focused lint/typecheck/build/browser verification. |
| Code review | Required, self-review disclosed | Small single-component change; no independent reviewer available. |
