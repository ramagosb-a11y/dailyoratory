# Daily Oratory Source of Truth and Deployment Runbook

This document is the canonical operating guide for Daily Oratory source control and production deployments.

## Canonical Folder

Use this folder for all code changes, validation, commits, and deployments:

```text
C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension
```

This is the Git repo and the only approved source of truth.

## Legacy Folder

Do not deploy from this folder:

```text
C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension-deploy
```

That folder is a legacy deploy copy. It is intentionally blocked by `.do-not-deploy-from-this-folder` because folder drift previously caused production regressions.

## Why This Exists

Two production incidents came from the same operational failure mode:

- Fixes existed in one folder but production was deployed from another.
- The `/confession/examination` page regressed because a React client-store fix was missing from the deployed copy.
- Some production-only static/ISR fixes also lived outside the Git repo, creating risk that a future repo deploy could reintroduce Vercel Fluid CPU pressure.

The rule now is simple: production must be reproducible from the Git repo alone.

## Deployment Invariants

Every production deploy must satisfy these invariants:

- Deploy only from `brotherhood-of-ascension`.
- Never deploy from `brotherhood-of-ascension-deploy`.
- The Git repo must contain every production hotfix before the next deploy.
- The working tree must be reviewed before deploy.
- `npm run build` must pass from the Git repo.
- The build must pass both client-store and rendering-strategy guardrails.
- High-traffic public routes must remain prerendered or ISR to protect Vercel Hobby Fluid Active CPU.
- `/confession/examination` and its guided path must be browser-verified after any related deploy.

## Required Pre-Deploy Commands

Run these from `brotherhood-of-ascension`:

```powershell
git status --short
npm run audit:client-stores
npm run build
npm run validate:urls
npm run seo:preflight
```

`npm run build` runs:

- `prebuild`: deploy-source guard and client-store audit.
- `next build`: production build.
- `postbuild`: rendering-strategy audit.

If any command fails, do not deploy.

## Git Review Before Deploy

Before deploying, inspect changed files:

```powershell
git status --short
git diff --stat
git diff -- docs package.json scripts src
```

Do not deploy if unrelated or unclear local changes are mixed with release changes.

Preferred commit grouping:

- One commit for guardrails or deployment process changes.
- One commit for route rendering or Vercel CPU fixes.
- One commit for feature/content changes.

## Production Deploy Command

Deploy only after all required checks pass:

```powershell
vercel deploy --prod
```

Run it from:

```text
C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension
```

## Post-Deploy Verification

After deployment, verify these routes:

```text
/
/confession/examination
/confession/examination/ten-commandments
/library
/search
/today
/sitemap.xml
/robots.txt
```

Also verify:

```powershell
vercel logs --level error --since 1h --environment production --no-follow
```

## If Production Is Broken

Use this order:

1. Stabilize production with Vercel rollback if the issue is user-facing and urgent.
2. Identify the bad deployment and root cause.
3. Patch in `brotherhood-of-ascension`.
4. Run the required checks.
5. Deploy from `brotherhood-of-ascension`.
6. Document the incident in `docs/debug`.

Do not hotfix only in the legacy deploy folder.

## Retiring the Legacy Folder

Before deleting or archiving `brotherhood-of-ascension-deploy`, confirm:

```powershell
npm run build
npm run validate:urls
npm run seo:preflight
```

from `brotherhood-of-ascension`, with the rendering audit passing.

Then confirm the Git repo production deploy is live and healthy. Only after that should the legacy folder be removed or archived outside the active workspace.
