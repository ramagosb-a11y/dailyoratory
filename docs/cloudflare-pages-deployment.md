# Cloudflare Pages Static Deployment

Daily Oratory is prepared for static hosting with Next.js static export. The GitHub repository remains the source of truth: Codex edits locally, changes are committed and pushed to GitHub, and Cloudflare Pages deploys from the GitHub repo.

## Cloudflare Pages Settings

- Framework preset: `Next.js (Static HTML Export)` or `None` with the settings below.
- Build command: `npm run build`
- Output directory: `out`
- Node.js version: use the same major version as local development, currently Node 20+.
- Environment variables: only public/build-time values are supported. Do not rely on server-only route secrets for public pages.
- Compatibility flags: no special Workers compatibility flag is required for the static export.

## Custom Domain

- Add `dailyoratory.faith` as the production custom domain in Cloudflare Pages.
- Add `www.dailyoratory.faith` only as an alias/redirect to the apex domain.
- Keep canonical URLs in metadata pointed at `https://dailyoratory.faith`.
- The generated `public/_redirects` file includes a `www` to apex redirect and legacy path redirects.

## What Works On Static Hosting

- Public pages render as static HTML, CSS, and JavaScript.
- Dynamic detail pages are generated at build time with `generateStaticParams()`.
- Client-only tools such as search filters, confession examination state, local trackers, and localStorage-backed flows continue to work in the browser.
- `/sitemap.xml` and `/robots.txt` are generated during the static build.

## Deferred Backend Features

These features require a server, Worker, or third-party form/backend service if they need to return later:

- Contact form server delivery through Resend. The static version opens the visitor's email app instead.
- Vercel cron revalidation and Google Calendar mass-readings sync.
- Protected `POST /api/indexnow` submission endpoint. Sitemap discovery remains available for crawlers.
- Vercel proxy behavior for deployment-host noindex headers. Cloudflare domain redirects should be configured in Pages/DNS instead.

## Codex And GitHub Workflow

1. Work locally in `brotherhood-of-ascension`.
2. Run `git status` before edits and avoid reverting unrelated user changes.
3. Run `npm run lint`, `npm run build`, `npm run validate:urls`, and `npm run seo:preflight`.
4. Commit all intended changes to `main`.
5. Push to GitHub.
6. Cloudflare Pages deploys from GitHub using `npm run build` and publishes `out`.

## Rollback Plan

- Cloudflare Pages keeps previous deployments available in the dashboard.
- If a static deployment fails, restore the prior successful Cloudflare deployment while fixing the repo.
- If Vercel remains connected during transition, do not rely on ISR, API routes, proxy, or cron behavior for public-site correctness.
