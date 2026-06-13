# Daily Oratory Accessibility Checklist

Use this checklist before publishing new Daily Oratory pages, tools, forms, and content sections.

## Navigation

- Skip-to-content link is visible on keyboard focus.
- Header links, mega menu links, and mobile menu links are keyboard reachable.
- Mobile menu button has `aria-expanded`, `aria-controls`, and an accurate open or close label.
- Active navigation links use `aria-current="page"` when appropriate.
- Escape closes temporary navigation or dialog surfaces.
- Footer navigation has a clear `aria-label`.

## Semantic HTML

- Each public page has one clear `<h1>`.
- Page sections use semantic `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, and `<nav>` where appropriate.
- Breadcrumbs use `nav aria-label="Breadcrumb"` and mark the current page with `aria-current="page"`.
- Cards that navigate use real links, not clickable divs.
- Buttons are used only for actions; links are used for navigation.

## Forms

- Every input, select, checkbox, and textarea has a visible label.
- Helper text is written plainly and does not replace labels.
- Required fields are visible before submission.
- Error and confirmation messages are announced with `aria-live` when state changes.
- Privacy warnings appear before users enter sensitive prayer, pastoral, or contact details.

## Focus And Keyboard

- Focus states are visible against ivory, parchment, navy, and burgundy backgrounds.
- Focus order follows visual order.
- No keyboard trap exists in mobile navigation, drawers, forms, or tool flows.
- Interactive controls have at least a 44px touch target on mobile.
- Hover-only content is also available on focus.

## Color And Motion

- Text contrast meets WCAG AA for body text and interface labels.
- Gold accents are not used as the only cue for meaning.
- Liturgical colors are paired with text labels.
- `prefers-reduced-motion` is respected.
- No essential content depends on animation.

## Content

- Link text describes the destination.
- Page titles and headings are specific, not generic.
- Pastoral disclaimers are readable and not hidden behind interactions.
- Traditional prayers and long-form content use comfortable line height and readable widths.
- Images, when used, include meaningful `alt` text or empty `alt=""` when decorative.

## QA Pass

- Tab through the page from the browser address bar.
- Open and close the mobile menu by keyboard.
- Submit each form with missing fields and confirm the experience is understandable.
- Test at 390px, 768px, and desktop widths.
- Run `npm run lint` and `npm run build`.
