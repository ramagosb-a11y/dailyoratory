# DEVELOPMENT-SPEC — Nightly Examen Prayer Journey

## Identity and authorization
- Feature ID: `nightly-examen-prayer-journey`
- Spec revision/date: 0.2 / 2026-09-27
- Status: `approved-for-implementation`; owner approved page 4 revisions on 2026-09-27. UX/SEO/privacy reviews have been completed and findings addressed in implementation.
- Owner: Brent (repository owner)
- Implementation approval: Owner requested the update and supplied this complete feature brief on 2026-09-27, including “I want the update to look like the morning prayer format with look and style.” On 2026-09-27 the owner approved the independent review's focused page 4 revisions; this authorizes local implementation of spec 0.2/content 2.0 only. It does not authorize release.
- Required review artifacts and reviewed revisions: `IDEA.md` 0.2; `CONTENT.md` 2.0; `REVIEWS.md` 0.3 (independent AI Catholic review, UX/SEO review, Privacy/Safety review); user's feature brief and page 4 approval.
- Production authorization: **not authorized**
- Re-review triggers: substantive changes to copy/meaning, route, image/data flow, session retention or telemetry.

## Goal and scope
- Goal: Present a distinct nighttime prayer journey with the Morning Prayer module's generous typography, photo-led composition, warm cards and simple navigation.
- User problem and audience: Interaction-heavy existing guide can feel like a tool rather than an invitation to read, pray and reflect.
- Existing related functionality and inspected evidence: Morning Prayer uses a responsive full-screen image panel and parchment prayer panel with bottom Previous/Continue navigation (`src/components/morning-prayer/MorningPrayerExperience.tsx`). Existing Examen has six steps but a different order and one repeated candle image (`NightlyExamenExperience.tsx`), deep prompts (`nightlyExamenContent.ts`), draft/session local storage and a seven-day Grace Map (`dailyExamenStorage.ts`), pace selection/resume/write choices, completion state, and analytics events. These are current features/data obligations, not blanket authorization to erase them.
- Route/location: Existing canonical `/daily-examen/nightly`; preserve route and site navigation.
- Required existing components and contracts: `createPageMetadata`, existing Examen storage/types unless a reviewed migration is necessary, shared focus styling, Next Image conventions, Morning Prayer responsive structure. Avoid unrelated refactor.
- New components only if necessary, with justification: A structured six-page content record is appropriate to bind title, intro, prayer, image/alt, prompts and resolution choices; a focused client journey may render that data. Six unique assets required. Preserve compatible existing resume/history/clear affordances; either retain existing Grace Map via accessible secondary action or explicitly document an owner-approved migration after existing functionality is confirmed working.
- Allowed files and dependencies: Nightly Examen route/component/CSS/data, narrowly scoped Examen types/storage if necessary, six feature image assets and attribution notes, this feature packet. No new dependency or external service.
- Explicit non-goals: production deploy/push/merge; modifying other prayer modules, global analytics architecture, sitemap membership or navigation without identified need; replacing session history with remote storage; implying site-generated forgiveness or sacramental effect.

## Content contract
- Exact approved content IDs/files/revisions: `CONTENT.md` revision 2.0, implemented as `src/data/nightlyExamenJourney.ts` with stable IDs `presence`, `gratitude`, `review`, `mercy`, `resolution`, `surrender`.
- Source requirements and verified RESEARCH references: `REVIEWS.md` initial source ledger. Vatican CCC paragraphs 1451–1454 and 1457–1458 are relevant primary sources. They do not themselves support every pastoral sentence or prove site copy reviewed. No Scripture quotation requested in proposed copy.
- Theology/rights review and human approval evidence: Independent AI reviewer reviewed all six pages. The page 4 revisions were approved by the owner on 2026-09-27 and are recorded in `CONTENT.md`; this does not imply human ecclesial review. Generated asset provenance is documented in `public/images/daily-examen/IMAGE-CREDITS.md`.
- Copy to preserve verbatim: Approved content revision 2.0 in `src/data/nightlyExamenJourney.ts`; retain the reviewed page 4 note and action-based emotion prompt.
- Code changes versus content changes: UI architecture and session behavior are code changes; supplied prayers/prompts are editorial content and must be versioned/reviewed separately.

## Behavior
- User flow: The dedicated route opens at step 1 of 6. Each step presents one unique image, page count plus text progress, title, brief guide, prayer, collapsed Go Deeper prompts, optional journal field and Previous/Continue. Steps follow the supplied order exactly. Page 6 presents the closing prayer, Sign of the Cross and unmistakable completion state; restart is available. Users may silently reflect and advance with empty fields.
- Mobile behavior: Stack image above prayer content, preserve aspect ratio, avoid text-on-image overlays; readable controls with safe-area spacing and no horizontal scroll. At narrow widths, buttons stack if needed.
- Desktop behavior: Morning Prayer-inspired large image area with a readable, generous prayer card/pane. Preserve the dark, peaceful nighttime atmosphere and Daily Oratory brand.
- Empty/loading/error/complete/return states: Direct route renders first step. Missing/slow image has calm fallback and no blocked navigation. Draft restores current session after refresh if storage works; storage denial falls back to in-memory state with honest status. Page 6 completion and reset are explicit. Existing resume/Grace Map/history/data-clear behaviors are retained where compatible pending explicit contract clarification.
- Accessibility: Semantic main/section/headings/nav; photo alt text states subject and prayer purpose; keyboard-operable buttons/details/textarea; visible focus; progress expressed as text, not color only; focus or heading updates predictably when navigating; reduced motion disables nonessential transition; labels/instructions make journal optional; adequate contrast; review at mobile/tablet/desktop and keyboard/screen-reader labels.
- Privacy: Prayer silently; optional fields; no account/server. Preserve notes during the session and refresh where current storage contract applies; no notes in event payloads, URLs, metadata, logs, screenshots or fixtures. Inspect current allowlisted step/pace analytics and page tracker query capture. Local storage is same-origin browser storage, not encrypted; provide accurate storage-clearing behavior and a way to clear applicable Examen data. Test blocked/corrupt storage with synthetic input.
- SEO: Retain `/daily-examen/nightly`, existing canonical helper and sitemap entry. Update title to “The Last Light: A Catholic Nightly Examen” and description to “A guided Catholic examination of conscience and evening prayer”; verify canonical, OpenGraph image and direct load. No private content in metadata.
- Analytics: No new events required. Existing generic start/step/complete events may remain only with categorical stage identifiers; never send copy, textarea content or resolution note. Review tracker paths/query behavior on route.
- Performance/rendering: Keep route's existing rendering strategy unless necessary; responsive `next/image` widths, appropriate priority for first viewport image, lazy-load subsequent step imagery, all six unique distinct files. Respect reduced motion.

## Acceptance criteria and tests
| ID | Observable required behavior | Verification method / command | Expected result |
| --- | --- | --- | --- |
| AC-1 | Existing route opens directly and metadata/canonical stay on route | `npm run validate:urls`, `npm run seo:preflight`, local browser | Correct page at `/daily-examen/nightly`; expected metadata, no duplicate route or redirect loop |
| AC-2 | Six exact ordered pages navigate Back/Continue | Browser interaction | Correct title/content and 1-of-6 through 6-of-6 progress; no user text lost |
| AC-3 | Go Deeper is collapsed initially and toggles by keyboard/pointer | Browser + keyboard | All page-specific questions readable and control reports expanded state |
| AC-4 | Journal is always optional and retains current session text through route state/refresh where storage is available | Synthetic entry + refresh | Can continue empty; own session note restored, never transmitted |
| AC-5 | Final state displays closing prayer and Sign of Cross and supports restart | Browser interaction | Clear completion and return to first page with defined handling of current draft |
| AC-6 | Six different prayer-appropriate images each have meaningful alt, permitted provenance and no awkward aspect/crop | Asset/source inventory and browser at mobile/tablet/desktop | Six distinct images; all valid local assets; responsive framing; first/late images load appropriately |
| AC-7 | Keyboard, focus, reduced motion, headings, text area names and progress work | Keyboard/browser; screen-reader label inspection; prefers-reduced-motion | No keyboard trap; visible focus; meaningful sequence/status; transition respects preference |
| AC-8 | Sensitive text stays local and existing compatible Examen behavior is preserved | Inspect analytics/network/URLs and existing storage before/after; synthetic markers | No reflection text leaves page; existing saved records not silently removed; clear behavior accurate |
| AC-9 | App and guards pass without weakening existing protections | `npm run lint`, `npm run typecheck`, `npm run build`, route/image checks | Checks pass; baseline failures separately documented |

- Automated test scope and commands: Use existing scripts where applicable; do not add a testing framework. Run lint/typecheck/build and route/SEO/image guards; navigation browser check if supported on this host.
- Manual/browser checks and synthetic fixtures: Direct route; all steps both directions; questions open/closed; blank and long notes; refresh; restart; missing/slow asset fallback; widths around 390px, tablet and desktop; keyboard-only; reduced motion; screen-reader labels; dark/light support if app theme applies. Analytics/network checks use synthetic markers only.
- Known baseline failures/limitations: Worktree already contains unrelated changes, preserved. Full `npm run lint` reports existing violations outside the feature; targeted ESLint for the changed implementation files passes. The in-app browser loaded the route and rendered the desktop/tablet/mobile layouts, but the start control did not advance the isolated local preview beyond the welcome screen. The regular local origin showed existing saved history, which was left untouched. Human theological/editorial publication review remains a separate owner decision.
- Code-review assignment: Independent implementation reviewer completed the integrated scoped review; two P2 findings were resolved and recorded in `REVIEWS.md`.
- Implementation sequence and dependencies: Required AI source/content, UX/SEO, privacy and code reviews were completed; findings were reconciled. Local implementation, asset notes, checks and implementation report are complete. Browser interaction coverage is partial as documented; human editorial/publication review remains before any release.
- Reversal approach: Revert only feature-scoped changes/files and restore prior route/component/data references after confirming no user-session data migration is necessary; retain preexisting working-tree edits untouched.

## Definition of Done
- [x] All required AI reviews apply to this revision; implementation authorization recorded. Human theological/editorial publication review remains outstanding.
- [x] Acceptance criteria implemented; approved content preserved.
- [x] Relevant checks and manual checks recorded truthfully in `IMPLEMENTATION-REPORT.md`.
- [x] Code/content diff review findings resolved and documented; unrelated work preserved.
- [x] Implementation report complete; human review requested for the concrete change.
- [x] No automatic production publication, push or deployment.

Engineering handoff: `docs/features/nightly-examen-prayer-journey/DEVELOPMENT-SPEC.md`, revision 0.1. The owner authorized local implementation on 2026-09-27 after approving the focused page 4 revisions. Implementation and AI review gates are complete; human editorial/publication review remains a separate release gate. No production release was authorized.
