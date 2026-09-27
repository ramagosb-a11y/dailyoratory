# DEVELOPMENT-SPEC — Morning prayer personal lists

## Identity and authorization
- Feature: `morning-prayer-personal-lists`
- Revision/date: v4 / 2026-09-27
- Status: approved-for-implementation (owner instruction authorizes this described implementation)
- Owner: repository owner
- Implementation approval: user request on 2026-09-27: add collapsible browser-stored lists to the two specified morning prayers, with add/edit/remove. Visual revision v2 authorized by user request: “Have the team act as a top tier web designer with focus on improving the new new boxes look. Make this very beautiful that will resinate with users”. Mobile icon simplification v3 authorized by user request: “make sure there are no iphone looking icons on the mobile after you finish”. Direct-to-first-prayer flow v4 authorized by user request: “when clicking on morning prayer button or menu, can you bypass this page and go directly to prayer 1 sign of the cross?”
- Reviews: [REVIEWS.md](REVIEWS.md), UX and privacy self-reviews disclosed; v2/v3 refine presentation, v4 changes the entry flow only.
- Production authorization: Owner explicitly authorized commit, push to `main`, and production deployment on 2026-09-27.
- Re-review triggers: change in wording/meaning, storage destination, data sharing, routes, or material interaction scope.

## Goal and scope
- Let users include recurring loved-one names or prayer intentions in the existing prayer flow.
- Existing route and contract: `src/app/morning-prayer/page.tsx` renders `MorningPrayerExperience`; `src/data/morningPrayer.ts` IDs are `offering-of-indulgences` and `special-intentions`.
- Route/location: panels follow prayer text on those two steps only.
- New dependency/route: none.
- Allowed files: `src/components/morning-prayer/MorningPrayerExperience.tsx` and this feature packet.
- Non-goals: cloud/account sync, public posting, analytics events, route/SEO changes, prayer copy changes.

## Content contract
- Preserve all prayer titles, images, optional notes, text, and step order verbatim.
- User-facing prompts requested by owner: “Remember loved ones who have passed away” and “Add someone who is in need of prayer.” Supplemental UI microcopy supports the same existing user goal; no prayer or doctrinal copy changes.
- No new Catholic claim or quotation; theology/source review not applicable.
- Code/UI only.

## Behavior
- Each relevant panel is collapsed on initial render and opens via a labeled native disclosure button.
- Separate localStorage lists for deceased loved ones and special intentions. Display saved entries, add a name/text, edit, and remove.
- Limit each list to 50 entries and each value to 120 characters. Show empty and limit states.
- On malformed/unavailable storage, retain usable UI and show a clear warning when storage is unavailable. Do not log personal values.
- Mobile controls wrap; entries wrap safely. Native labels, required validation, focus ring, semantic list and button names.
- Names remain browser-local, are not encrypted, and can be visible to shared-device users or same-origin scripts. Deletion: remove entries individually or clear browser site data.
- No analytics additions or private text in URLs/logs/network payloads. Existing page analytics unchanged.
- Preserve route metadata, client boundary and responsive existing layout.
- Visual design: present each panel as a refined ivory card with warm gold details, subtle depth, serif title hierarchy, concise helper text, quiet empty state, and well-spaced pill actions consistent with the existing prayer surface.
- Mobile icon treatment: avoid pictographic/device-style icons in the personal list; use simple decorative circles and typographic disclosure indicators.
- Entry flow: opening `/morning-prayer` from any existing link starts at Prayer 1, Sign of the Cross. Previous is disabled on Prayer 1 and must not return to the former intro screen.

## Acceptance criteria and checks
| ID | Observable required behavior | Verification | Expected result |
| --- | --- | --- | --- |
| AC-1 | Only the two specified prayer steps show a list, collapsed initially. | Component review and local browser flow. | Both prompts appear only on correct steps, collapsed. |
| AC-2 | Add, edit, and remove operate on the matching separate list. | Synthetic local browser data. | Changes reflected immediately and after reload. |
| AC-3 | Storage denial/corrupt JSON does not block prayer. | Synthetic browser storage setup. | Empty/ephemeral usable panel with a notice for denied writes; no crash. |
| AC-4 | Input and list are accessible and mobile-friendly. | Keyboard, labels, focus, narrow and desktop viewport review. | Native controls, visible focus, wrapping layout. |
| AC-5 | No prayer text, metadata, analytics or routes change. | Diff review. | UI/code only; no new tracking or data egress. |
| AC-6 | Quality checks pass. | `npm run lint`, `npm run typecheck`, `npm run audit:client-stores`, `npm run build`. | Exit code 0, or report actual failures. |
| AC-7 | Direct route, home CTA, and mobile menu open at Prayer 1; Previous cannot return to intro. | Local browser checks. | Each opens Prayer 1 of 14; Previous disabled at first prayer. |

- No durable test suite exists for this component; use local browser acceptance checks with synthetic names.
- Code/diff reviewer: self-review disclosed; no independent reviewer available in this task.
- Reversal: remove the new panel component and its two call sites; localStorage keys can be cleared by users in browser site-data settings.

## Definition of Done
- [x] Scope-specific reviews recorded; owner authorization recorded.
- [x] Acceptance criteria implemented; existing content preserved.
- [x] Appropriate checks and manual verification reported truthfully.
- [x] Focused diff reviewed; unrelated work preserved.
- [x] Implementation report complete; human production release authorized.
- [x] Publication only after explicit owner authorization.
