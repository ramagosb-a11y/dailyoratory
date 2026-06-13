# Site Typography Readability Audit

## 1. Typography Scale Used

- Page eyebrow: `text-sm`, uppercase, wide tracking, burgundy.
- Page title: `text-[2rem]` on mobile, scales to `text-5xl` and `text-6xl`.
- Section title: `text-3xl` on mobile, scales to `text-4xl` and larger on desktop.
- Section subtitle: `text-base` on mobile, `text-lg` on larger screens, `leading-8`.
- Body text: minimum `17px` mobile with `leading-8`.
- Small supporting text: `text-sm` minimum with `leading-7`.
- Prayer text: `text-lg` mobile, `text-xl` desktop, serif, `leading-9` to `leading-10`.
- Card title: `text-xl` mobile, `text-2xl` desktop.

## 2. Mobile Body Text Minimums

- Global body default raised to `17px`.
- Long-form paragraph targets are `17px` to `18px`.
- Prayer and meditation blocks are `18px+`.
- Form input text is `16px+` to avoid mobile zoom and improve readability.

## 3. Heading Hierarchy

- `h1`: one per page, large serif title.
- `h2`: major section title, serif, `text-3xl` mobile minimum.
- `h3`: card and subsection title, `text-xl` mobile minimum.
- Eyebrows remain smaller, but no long-form body copy should use `text-xs`.

## 4. Prayer Card Style

- Shared `PrayerCard` component created in `src/components/ui/PrayerCard.tsx`.
- Prayer copy uses serif styling with `whitespace-pre-line`.
- Prayer body is large, spacious, and centered on calm reading rhythm.
- Copy buttons remain available, with optional print support.

## 5. Button Style

- Shared `.btn` baseline now uses at least `48px` tap height.
- Mobile button text increased to `0.95rem`.
- Primary and secondary buttons share consistent padding and font weight.
- Important action buttons on mobile are allowed to go full width where needed.

## 6. Card Spacing Rules

- Standard content and prayer cards use `p-6` mobile, `p-8` desktop when appropriate.
- Shared Rosary card grids now use larger gaps.
- Section rhythm favors `mt-6` to `mt-8` internal spacing and `py-10` to `py-12` mobile sections.

## 7. Pages Reviewed

- Homepage
- Rosary mystery group pages
- Rosary mystery detail pages
- Daily Examen prayer section
- Bible “Gather a Word” prayer section
- Indulgence prayer cards
- Contact form
- Body, Soul, and Spirit prayer cards

## 8. Known Follow-up Items

- Several long-form components across `indulgences`, `body-soul-spirit`, `way-of-cross`, and older content modules still use `text-sm` for descriptive copy and should be normalized in a second pass.
- Some hero and dashboard-style pages still use very small eyebrow text that is acceptable but may benefit from a shared migration to the typography helpers.
- Shared FAQ answer styles should be audited next for consistency with the new body-text minimums.

## 9. Before/After Notes for Rosary Mystery Pages

### Before

- Scripture summaries often rendered as `text-sm`.
- Prayer blocks used mixed formatting and tighter line heights.
- Opening Prayer and conclusion sections had inconsistent spacing and type rhythm.
- Mobile buttons sometimes felt oversized relative to nearby text while body copy remained too small.

### After

- Scripture summary text raised to body-reading size.
- Opening Prayer and Optional Closing Prayer now use the shared `PrayerCard`.
- Meditation conclusion prompt, reflection questions, and practice text use larger mobile type.
- Decade guide instructions, intention text, and action buttons use a more consistent mobile-first layout.
- Joyful mystery pages now share a more stable spacing rhythm and heading hierarchy.

## 10. Third Pass Mobile Upgrade

- Mobile detail text increased to `21px` through shared `daily-readable` and `daily-readable-muted` classes.
- Card body text increased to `20px` through `daily-card-readable`.
- Prayer and meditation text increased to `21px` on mobile and `22px` from tablet upward through `daily-prayer-readable`.
- Muted text was darkened for readability so long-form copy no longer falls into pale gray on phone screens.
- Shared buttons now use a larger mobile reading size and a stronger tap target.
- Shared form labels and fields were enlarged for contact, journal, builder, and reflection tools.
- Components updated in this pass include `Typography`, `PrayerCard`, `WhatAreDevotions`, core Rosary mystery detail sections, and relic prayer cards.
