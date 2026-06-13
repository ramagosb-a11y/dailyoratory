# Liturgical Theme System

## Purpose

Daily Oratory uses the current liturgical color of the day as a subtle accent across interior pages.

The homepage at `/` is intentionally excluded.

## Source of truth

- Reuse the existing liturgical day and theme logic.
- Do not create a second calendar or color engine when the current theme provider already knows the day and season.
- The active theme is exposed through the existing liturgical theme provider and CSS variables.

## Homepage rule

- The homepage is intentionally unchanged.
- Do not apply the interior liturgical page wrapper to `/`.
- Do not redesign the homepage hero, homepage cards, or homepage discovery sections unless there is a separate homepage task.

## Interior page behavior

Interior pages use the current liturgical color as an accent for:

- the slim interior liturgical day banner
- hero accent borders
- soft hero gradients
- eyebrow labels
- breadcrumbs
- section dividers
- card top borders
- selected chips and tabs
- callout side borders
- secondary CTA states

Shared discovery surfaces should also pick up the active theme where appropriate:

- section jump navigation
- filter chips
- library and search result cards
- detail-page badges
- small metadata labels and devotional markers

## What not to do

- Do not use liturgical color for body text.
- Do not replace the navy text system.
- Do not use full-page saturated backgrounds.
- Do not create loud or distracting color blocks.
- Do not make mobile text harder to read.

## White days

- White liturgical days should use gold or amber accents for visibility.
- Do not rely on pure white accents against ivory or parchment surfaces.

## Accessibility

- Preserve readable contrast at all times.
- Liturgical color should never be the only way information is communicated.
- Keep focus states visible.
- Use the accent to support structure, not to carry meaning by itself.

## Implementation notes

- Use the existing liturgical CSS variables such as:
  - `--liturgical-primary`
  - `--liturgical-primary-dark`
  - `--liturgical-primary-soft`
  - `--liturgical-border`
  - `--liturgical-glow`
- Prefer shared interior-page classes and wrappers over one-off per-page color hacks.
- Reuse shared hero, card, section heading, and callout patterns when possible.
- Highlight the liturgical day most strongly through subtle structure:
  - small banners
  - chips
  - borders
  - labels
  - hover states
  - not through saturated page fills

## Release checklist

Before deploying liturgical theme changes:

- confirm `/` is visually unchanged
- confirm interior pages show only subtle accents
- run `npm run validate:urls`
- run `npm run lint`
- run `npm run build`
