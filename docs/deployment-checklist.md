# Daily Oratory Deployment Checklist

Use this checklist before promoting any Daily Oratory change to production.

## Git Hygiene

- Work on a feature branch instead of deploying directly from a dirty working tree.
- Keep commits small and descriptive.
- Run `git status` before every deploy and confirm only intended files are changed.
- Tag stable production releases with `prod-YYYY-MM-DD` after a verified deploy.
- Prefer `git revert` or Vercel rollback for recovery; do not rewrite shared history.

## Required Local Checks

- `npm run lint`
- `npm run build`
- `npm run validate:urls`
- `npm run seo:preflight`

If a required check fails because of known unrelated backlog, document the failing files and run a targeted check for the changed files before preview deploy.

## Vercel Preview

- Deploy or use the Vercel preview URL for the branch.
- Verify the preview before production promotion.
- Prefer promoting a verified preview over rebuilding directly to production.

## Priority Smoke Routes

- `/`
- `/confession`
- `/confession/examination`
- `/confession/examination#report`
- `/confession/examination/print`
- `/prayers`
- `/adoration`
- `/library`
- `/sacramental-emergency`
- `/sitemap.xml`
- `/robots.txt`

## Confession Privacy Checks

- No confession report data appears in URLs, metadata, logs, or analytics payloads.
- LocalStorage, clipboard, and print actions stay inside small Client Components.
- No print dialog opens automatically.
- Empty report states are clear and pastoral.
- Print styles are scoped to print/report surfaces.

## Browser Checks

- Check mobile at about `390px`.
- Check tablet and desktop widths.
- Confirm no console errors or hydration warnings on touched routes.
- Confirm keyboard focus reaches date, report, print, copy, and clear actions in visual order.

## Rollback Plan

- Identify the last known good Vercel deployment before production promotion.
- If production is broken, use Vercel rollback first when speed matters.
- Follow with a documented patch or `git revert` once the root cause is understood.
