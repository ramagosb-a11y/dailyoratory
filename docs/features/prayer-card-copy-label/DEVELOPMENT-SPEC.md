# DEVELOPMENT-SPEC — PrayerCard copy accessible name

## Identity and authorization
- Feature: prayer-card-copy-label
- Revision: v1, 2026-09-18
- Status: implemented-awaiting-human-review
- Owner: repository owner
- Implementation approval: owner replied "Approved" on 2026-09-18 after confirming local implementation/testing of pilot v1, no push or deployment, and a subsequent analytics privacy audit with proposed fixes.
- Reviews: [REVIEWS.md](REVIEWS.md), scoped to v1
- Production authorization: **not authorized**

## Goal and user problem

Distinguish repeated Copy Prayer controls for screen-reader users without changing visible wording, prayer text, layout or clipboard behavior.

## Existing functionality and scope
- Location: shared `src/components/ui/PrayerCard.tsx`, used on existing prayer surfaces including Adoration and Angels.
- Caller evidence corrected during implementation: both AngelPrayerCards and AdorationPrayerCards supply title. Verify absent/blank-title fallback with synthetic fixtures. This scope improves titled cards only; behavior and file scope remain v1.
- Required components: existing PrayerCard and Typography.
- New components: none.
- Proposed production file allowlist: `src/components/ui/PrayerCard.tsx` only.
- Test artifacts: use existing local browser tooling with synthetic fixtures; if a durable regression script is needed, document its runtime prerequisites and path before adding it.
- No dependencies, routes, shared styles or data files to change.
- Explicit non-goals: clipboard error semantics, live announcements, custom onCopy callback refactoring, print control changes, theological/editorial changes and analytics remediation.

## Content contract
Preserve every existing prayer/title/note and caller-provided label. Source research and theological review are not applicable to this exact scope. Accessible-name formatting is UI behavior: use the current label plus ": " plus the nonblank title; fallback to the current label when no title exists. Preserve supplied label/title text; trim only to determine whether a title is blank.

## Behavior
On initial render, name the copy button using copyLabel and title. In the existing copied state, use copiedLabel and title. Defaults and callbacks continue to work. Do not change existing success/error timing. The visible label remains the current label, and keyboard focus stays on the same button.

- Mobile/desktop: preserve all classes, responsive layout and button sizing.
- Accessibility: native button, accessible name includes the full visible label; distinguish different public prayer titles; no duplicate hidden-text mechanism or focus movement.
- Privacy: compute locally; no additional storage, telemetry, logs, network or private fixtures.
- SEO: no changes.
- Analytics: no new events or params; preserve current caller behavior without certifying it.
- Rendering: keep the existing client boundary and avoid new dependencies.

## Acceptance criteria and tests
| ID | Required behavior | Verification |
| --- | --- | --- |
| AC-1 | A titled card initially has accessible name "Copy Prayer: Example title" and visible text "Copy Prayer" | Browser accessible-name assertion using synthetic title |
| AC-2 | Two cards with distinct titles have distinct copy-button accessible names | Browser role queries return one match per title |
| AC-3 | Absent or whitespace-only title falls back to the visible label | Synthetic fixtures |
| AC-4 | Custom copyLabel and copiedLabel remain intact and are included in the matching accessible name | Mock clipboard/callback resolution and inspect both states |
| AC-5 | Prayer text, note, title, classes, focus and callback behavior are unchanged | Focused diff plus keyboard/mobile/desktop review |
| AC-6 | No new telemetry, persistence or network behavior | Diff and synthetic network/event inspection |
| AC-7 | Existing callers remain type-compatible; no hydration errors on sampled routes | Typecheck, build and local browser console |

Checks: npm run lint; npm run typecheck; npm run build; targeted browser acceptance above on public-data callers plus synthetic edge fixtures. Test the final integrated revision; document pre-existing failures and manual assistive-technology availability. Do not report a passed build as proof of accessible-name behavior.

## Implementation sequence and Definition of Done

Follow [IMPLEMENTATION-PLAN.md](IMPLEMENTATION-PLAN.md). Owner approval of v1 is required before code. Complete AC-1 through AC-7, review the final code diff independently or disclose self-review, create IMPLEMENTATION-REPORT, and stop for human review. Revert only the focused component change if rejected. No push, merge, deployment or indexing submission.
