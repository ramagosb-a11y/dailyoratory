# Daily Oratory Design System

Daily Oratory should feel like a quiet Catholic digital oratory: prayerful, reverent, calm, trustworthy, mobile-first, and easy to read.

## Tokens

Core implementation files:

- `tailwind.config.ts`
- `src/app/globals.css`

Color roles:

- Ivory: primary page and quiet surface color
- Parchment: devotional panels, cards, and journal-like sections
- Deep navy: primary text, headers, and strong actions
- Warm gold: sacred accents, focus states, and primary devotional calls
- Muted burgundy: emphasis, category labels, and sacred contrast
- Soft stone: borders, dividers, and low-noise structure
- Liturgical colors: Advent, Christmas, Lent, Easter, Pentecost, Ordinary Time, Marian, and All Year

Typography roles:

- `font-display`: elegant serif headings and prayer titles
- `font-body`: readable sans-serif interface and body copy
- `font-prayer`: large devotional text and prayer passages

## Component Classes

- `card`: default editorial card
- `card-parchment`: warmer devotional card
- `dashboard-card`: stronger dashboard or search/filter surface
- `prayer-card`: prayer and devotion reading panel
- `content-card`: long-form content container
- `resource-card`: hoverable resource tile behavior
- `btn`, `btn-primary`, `btn-gold`, `btn-secondary`, `btn-outline-inverse`: button system
- `form-shell`, `form-label`, `form-field`, `textarea-field`, `form-helper`: form system
- `text-link`: quiet editorial link
- `content-prose`, `resource-markdown`: long-form content styling
- `prayer-page`, `prayer-text`, `prayer-response`: devotional reading patterns
- `season-pill`, `season-advent`, `season-christmas`, `season-lent`, `season-easter`, `season-pentecost`, `season-ordinary`, `season-marian`: liturgical season styling

## Print

Print styles hide navigation, forms, and footer chrome, remove shadows/backgrounds, preserve readable content flow, and avoid breaking headings or quotes awkwardly across pages.
