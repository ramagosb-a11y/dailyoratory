# Daily Oratory Performance Checklist

Daily Oratory should feel calm and fast, especially on mobile. Use this checklist before shipping new routes.

## Rendering

- Prefer Server Components by default.
- Use Client Components only for local interactivity, localStorage, forms, and live UI state.
- Use `generateStaticParams` for static content detail routes.
- Keep mock/static data in local TypeScript files until a backend is required.
- Avoid per-request server work for evergreen resources.

## JavaScript

- Do not add animation libraries for simple transitions.
- Keep client components small and close to the interactive control.
- Avoid shipping search/filter logic to unrelated pages.
- Avoid broad barrel files for large component trees.
- Use stable keys from content IDs or slugs.

## Images And Media

- Use existing optimized public assets or `next/image` for new image-heavy sections.
- Give image containers stable dimensions to avoid layout shift.
- Mark only true first-viewport hero images as priority.
- Lazy-load below-the-fold media.
- Avoid autoplay audio or heavy embeds by default.

## CSS And Layout

- Use design tokens from `globals.css`.
- Keep layouts responsive with grid, flex, min/max widths, and stable aspect ratios.
- Avoid decorative animation and visual noise.
- Confirm text does not overflow on mobile.
- Respect `prefers-reduced-motion`.

## Data And Search

- Keep resource search local and lightweight for static v1 data.
- Do not duplicate large data arrays into multiple client bundles.
- Use server-side filtering for route-level content pages where possible.
- Keep Google Sheets export as a build/admin workflow, not a runtime dependency.

## Build Checks

- Run `npm run lint`.
- Run `npm run build`.
- Review the build output for unexpected dynamic routes.
- Confirm important routes are static or SSG where possible.
- Smoke test `/`, `/library`, `/rosary`, `/confession`, `/reflections`, `/liturgical-living`, `/community`, and one dynamic detail page.

## Browser Checks

- Test first load on `localhost:3000`.
- Check mobile navigation.
- Confirm no console errors on core routes.
- Confirm forms do not block rendering with unnecessary client-side work.
- Confirm public pages remain usable with JavaScript disabled where practical.
