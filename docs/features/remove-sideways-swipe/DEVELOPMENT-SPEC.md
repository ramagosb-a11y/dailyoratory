# DEVELOPMENT-SPEC — Remove sideways swipe
Revision v1, 2026-09-19. Status: approved-for-implementation.
Authorization: user's explicit request to remove all sideways swipe options; local work only. Production: not authorized.

## Scope and existing components
Remove touch-start/end navigation handlers, gesture-only types/state and swipe invitation text from:
- src/components/morning-prayer/MorningPrayerExperience.tsx
- src/components/night-prayer/NightPrayerExperience.tsx
- src/components/contemplative-litanies/PrayerExperience.tsx

Remove sideways touch navigation from horizontal option rails/carousels in:
- src/components/contemplative-litanies/LitanyPrayerShelf.tsx
- src/components/home/HomeFeaturedMediaSection.tsx
- src/components/adoration/companion/AdorationCompanion.module.css
- src/components/rosary/visual/VisualRosaryExperience.module.css and its TSX if wrapping requires adjusting auto-scroll
- src/components/three-day-retreat/ThreeDayCatholicFastingRetreat.tsx
- src/app/fasting-retreat/retreat.module.css
- src/app/globals.css (Sacred Hours journey selector only)

Existing button-controlled carousels retain controls and programmatic scrolling but no sideways touch scrolling. Option rows without paging controls wrap/stack within the viewport. Preserve vertical scrolling, pinch zoom, keyboard access, prayer text/order, focus handling and storage schemas. Add no new components, services or dependencies.

Data-table horizontal scrolling and browser/OS navigation gestures are not app-owned swipe options and remain outside this change. Do not globally prevent touch events or disable zoom. No redesign or analytics remediation.

## Acceptance
AC1: Left, right and diagonal touch drags never change current Morning/Night/Litany prayer, including while reading partway down.
AC2: Previous/Continue/Begin/exit and existing keyboard controls still work; prayer sequence and silence/end states remain intact.
AC3: No "swipe sideways" invitations or app swipe-navigation handlers remain.
AC4: Option rails no longer require sideways touch scrolling; carousel items remain reachable by explicit controls and other selectors fit by wrapping/stacking.
AC5: Vertical touch scrolling and pinch zoom remain available; mobile 390px and desktop controls accessible, no newly clipped options.
AC6: No prayer/source/data/telemetry changes; prior PrayerCard and workflow changes preserved.

Validation: source inventory; TypeScript, targeted/full lint (separate known failures), production build/guards; actual mobile touch gestures and button navigation in local browser; narrow/desktop layout checks on affected rails; independent diff review. QA intercepts third-party analytics. Produce IMPLEMENTATION-REPORT with evidence, local URLs and owner steps. No push/deploy.
