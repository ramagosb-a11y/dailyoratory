# Daily Oratory Deployment Checklist

Use this checklist before promoting any Daily Oratory change to production.

Canonical process: see `SOURCE_OF_TRUTH.md` at the repo root first.

## Source of Truth

- Deploy only from `C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension`.
- Do not deploy from `C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension-deploy`; it is a legacy copy and is intentionally blocked by `.do-not-deploy-from-this-folder`.
- If production contains a hotfix made outside the Git repo, merge that hotfix back into the Git repo before the next deploy.
- Before removing the legacy folder, confirm every production-only change has been merged or intentionally discarded.

## Git Hygiene

- Work on a feature branch instead of deploying directly from a dirty working tree.
- Keep commits small and descriptive.
- Run `git status` before every deploy and confirm only intended files are changed.
- Tag stable production releases with `prod-YYYY-MM-DD` after a verified deploy.
- Prefer `git revert` or Vercel rollback for recovery; do not rewrite shared history.

## Required Local Checks

- `npm run audit:client-stores`
- `npm run lint`
- `npm run build`
- Confirm `npm run build` also passes the postbuild rendering strategy audit.
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
