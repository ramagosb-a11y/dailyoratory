# Reviews — Morning prayer personal lists

Feature: `morning-prayer-personal-lists`, DEVELOPMENT-SPEC v4, 2026-09-27.

## UX / Formation — v5 mobile layout follow-up

**Decision: ready after independent UX review.** Scope is limited to list layout and edit focus behavior in `src/components/morning-prayer/MorningPrayerExperience.tsx`.

- Move the complete add/edit form ahead of the saved-entry list so the primary action is immediately available.
- On narrow viewports, keep the saved name on its own wrapping row and place Edit/Remove in a distinct action row below. At the existing `sm` breakpoint and above, retain the compact inline layout.
- When Edit is selected, populate the top form, bring its field into view, and focus it. Respect reduced-motion preference for scrolling.
- Preserve native buttons, input label, focus ring, local-only storage, entry order, data format, existing touch target sizing, and both separate list variants.
- Independent reviewer confirmed the name wrapper needs `sm:w-auto` so the wider horizontal list can place actions beside the name; that correction is included. Review found no remaining issue in the requested layout/focus scope. Long names retain `min-w-0` and `overflow-wrap:anywhere`.

## UX / Formation

**Decision: ready, self-review.** Route/component inspected: `src/components/morning-prayer/MorningPrayerExperience.tsx`; screen references supplied by owner.

- Place one collapsed-by-default disclosure directly after prayer text on the Offering of Indulgences and Prayer for Special Intentions steps only.
- Disclosure button uses native button semantics and `aria-expanded`; entries render in a labeled list. Add/edit form has a visible label, native required validation, and clear Add/Save/Cancel/Remove controls.
- Keep keyboard focus in place after actions; use existing focus ring treatment. Responsive controls wrap on narrow viewports. Names wrap instead of widening the page.
- Empty, max-entry, edit, remove, and unavailable-storage states are communicated in text. No motion is required.
- No prayer or devotional wording is changed. The panel prompts are user-requested reminders, not doctrinal assertions.
- v2 visual refinement: restrained ivory card, subtle shadow and gold-accent icon, serif prompt, small uppercase kicker, brief helper, and a visually distinct expanded area with clear empty state and premium-feeling form/list rows. This keeps the panel in the morning prayer visual language without competing with the prayer text.
- Presentation was checked in the local browser at the narrow viewport and the saved-entry state; the empty and collapsed states were also reviewed. No motion or focus behavior changes.
- v3 mobile check: removed the decorative heart/sun, lock, arrow, and star pictograms from these panels. The disclosure uses a simple plus/minus mark; remaining ornament is geometric dot detail only. No device-shaped icon appears in the feature UI.
- v4 flow review: direct route entry, homepage Morning Prayer CTA, and navigation menu all use `/morning-prayer`, whose first view is Prayer 1, Sign of the Cross. Previous is unavailable on that first step, so the retired intro cannot reappear from the prayer sequence.

## Privacy / Safety

**Decision: ready with disclosed limits, self-review.** Evidence: implementation is in the existing client component; root analytics caller sends page path/query only and no new events are added. No names are placed in URLs, metadata, logs, analytics, network requests, exports, or public submission flows.

| Data | Storage | Network / telemetry | Retention and deletion |
| --- | --- | --- | --- |
| Deceased loved-one names | `daily-oratory-morning-prayer-deceased-v1` in browser localStorage | No new outbound flow or event. Existing page-view analytics remains unchanged and receives no names. | Retained until user removes an entry or clears browser site data. |
| Special prayer names/intentions | `daily-oratory-morning-prayer-intentions-v1` in browser localStorage | No new outbound flow or event. Existing page-view analytics remains unchanged and receives no names. | Retained until user removes an entry or clears browser site data. |

- Storage is on this browser/device, is not encrypted, and may be visible to other users of a shared browser or same-origin scripts. It is not account-synced.
- Read/parse failures return an empty list; writes are caught and display an in-page notice. The prayer remains usable. Lists are capped at 50 entries, each name at 120 characters.
- Remove deletes that entry from the applicable local list. Browser site-data clearing removes both keys. No global clear control is added.
- Synthetic data only for QA. Verify persistence/reload, edit/remove, malformed stored JSON, and storage denial. No user records in screenshots or fixtures.

## Site / SEO

**Decision: not applicable.** Existing `/morning-prayer` route, metadata, canonical, sitemap, links, and schema are unchanged.
