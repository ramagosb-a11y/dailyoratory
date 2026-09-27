# IDEA — Night Prayer direct entry

- Feature ID / owner / date: `night-prayer-direct-entry` / repository owner / 2026-09-27.
- Goal: skip the Night Prayer welcome screen when users choose Night Prayer and open at “Prayer for Protection During Sleep.”
- Existing route and evidence: `/night-prayer` renders `NightPrayerExperience`; navigation menu and home hero CTA both link to `/night-prayer`; first prayer ID is `protection-during-sleep`.
- Content/code: code and entry-flow change only; preserve prayer text and step order.
- In scope: route initial state at prayer 1; remove intro view; disable Previous at first step.
- Non-goals: route, links, metadata, prayer content, completion screen, or timing changes.
- Authorization: owner request dated 2026-09-27 directly authorizes this implementation.
- Production authorization: not authorized.

## Stage selection

| Stage | Decision | Evidence / reason |
| --- | --- | --- |
| Repository/context | Required | Canonical project and current route/component inspected. |
| Catholic sources / Formation / Theology | Not applicable | No prayer text or theological meaning changes. |
| UX/accessibility | Required | Entry and Previous behavior change; self-review recorded. |
| Site/SEO | Not applicable | Existing route, callers, metadata and discovery remain unchanged. |
| Privacy/safety | Not applicable | No data flow, storage, or telemetry change. |
| Engineering/verification | Required | Focused static and browser verification. |
| Code review | Required | Self-review disclosed; no independent reviewer available. |
| Human review | Required | Local handoff; no publication authorized. |
