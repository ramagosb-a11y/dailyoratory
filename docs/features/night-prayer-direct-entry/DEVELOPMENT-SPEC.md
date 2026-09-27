# DEVELOPMENT-SPEC — Night Prayer direct entry

## Identity and authorization
- Feature: `night-prayer-direct-entry`
- Revision/date: v1 / 2026-09-27
- Status: approved-for-implementation
- Owner authorization: user request dated 2026-09-27: bypass the Night Prayer intro when clicking the Night Prayer button or menu, and go directly to Prayer for Protection During Sleep.
- Review: [REVIEWS.md](REVIEWS.md); UX self-review disclosed.
- Production authorization: Owner explicitly authorized commit, push to `main`, and production deployment on 2026-09-27.

## Goal and scope
- Make `/night-prayer` begin at prayer 1, ID `protection-during-sleep`, title “Prayer for Protection During Sleep.”
- Existing callers: `src/components/home/Hero.tsx` and `src/config/navigation.ts` link to `/night-prayer` already.
- Allowed application file: `src/components/night-prayer/NightPrayerExperience.tsx`. Add this feature packet.
- Remove the standalone welcome/Begin screen from the journey. Set initial state to the first prayer and clamp backward navigation at prayer 1. Disable Previous at prayer 1.
- Preserve the completion view, prayer texts, order, route, links, and metadata.

## Acceptance criteria
| ID | Requirement | Verification |
| --- | --- | --- |
| AC-1 | Direct route opens “Prayer for Protection During Sleep,” Prayer 1 of 3. | Local browser load/reload. |
| AC-2 | Home CTA and menu both land on prayer 1. | Inspect existing hrefs and exercise browser links. |
| AC-3 | Previous is disabled on prayer 1 and cannot show the former intro. | Accessibility tree and focused diff. |
| AC-4 | Remaining prayer sequence and completion remain intact. | Code review and navigation through final step as feasible. |
| AC-5 | Type/lint/diff checks pass. | Focused ESLint, TypeScript, `git diff --check`. |

No route/metadata, theology, privacy or data-flow review is needed for this scope. No push/deploy.
