# IDEA — Morning prayer personal lists

- Feature ID / owner / date: `morning-prayer-personal-lists` / repository owner / 2026-09-27.
- Goal and user problem: let users bring recurring names into the morning prayer for deceased loved ones and people in need of prayer.
- Audience and desired prayer/formation outcome: users praying through the existing guided morning prayer; make it easy to remember names without changing the prayer text.
- Existing related routes, components, data and instructions: canonical repository; `/morning-prayer`; `src/components/morning-prayer/MorningPrayerExperience.tsx`; stable IDs in `src/data/morningPrayer.ts`.
- Repository revision and existing dirty files: inspected current canonical working tree; no pre-existing changes observed at start.
- Content change / code change / both: code/UI only; keep existing prayer wording verbatim.
- In scope: two default-collapsed panels, browser-local list storage, add/edit/remove, storage failure notice.
- Explicit non-goals: sync/account storage, public submissions, prayer text revisions, analytics, route or metadata changes.
- Constraints: existing parchment/navy/gold/burgundy styling; no dependency; names stay on device; responsive and accessible controls.
- High-risk subject matter: privacy review required because names and intentions are sensitive spiritual information; no new theological claim or indulgence teaching.
- Open owner decisions: none for implementation; current request authorizes this scoped local implementation. Production publication remains unauthorized.

## Stage selection by Oratory Lead

| Stage | Required / not-applicable | Evidence and reason | Assigned reviewer |
| --- | --- | --- | --- |
| Repository/context | Required | Canonical source confirmed by `SOURCE_OF_TRUTH.md`; route and component inspected. | Oratory Lead |
| Catholic sources | Not applicable | No claim, quotation, or source text added. | — |
| Formation/content | Not applicable | Existing prayer copy and order remain unchanged. | — |
| Independent theology | Not applicable | No theological content change. | — |
| UX/accessibility | Required | Collapsible input and list controls add a user journey; see REVIEWS.md. | Oratory Lead; self-review disclosed |
| Site/SEO | Not applicable | Existing route, navigation, metadata, and discovery unchanged. | — |
| Privacy/safety | Required | Names and intentions are sensitive; browser-local persistence. See REVIEWS.md. | Oratory Lead; self-review disclosed |
| Engineering and verification | Required | Client-side implementation, focused checks, local browser review. | Oratory Lead |
| Code/diff review | Required | Final focused diff review; independent reviewer unavailable. | Oratory Lead; self-review disclosed |
| Human review | Required | Local implementation handoff. | Repository owner |

## Next handoff

Feature `morning-prayer-personal-lists`, spec v1. UX and privacy findings and implementation contract are in `REVIEWS.md` and `DEVELOPMENT-SPEC.md`. Owner instruction on 2026-09-27 authorizes implementing the described feature locally. Stop at local implementation awaiting human review; no production authorization.
