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

## Single Working Release Workflow

Use this one sequence for normal Daily Oratory work:

```powershell
cd "C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension"
git status --short --branch
git pull origin main

# make the change

npm run build
npm run validate:urls

git add .
git commit -m "Describe the completed change"
git push origin main

vercel ls daily-oratory
```

That is the full working path.

## What Each Step Means

1. Go to the canonical source folder.
2. Check that you are on the right branch and pull the latest `main`.
3. Make the requested code or content change.
4. Run `npm run build`.
5. Run `npm run validate:urls`.
6. Commit the completed change.
7. Push to GitHub `main`.
8. Check `vercel ls daily-oratory` and wait for the newest Production deployment to show `Ready`.

## Important Release Rule

- `Building` means the new production deploy is not live yet.
- `Ready` means the production deploy has finished.
- A `200` from `https://dailyoratory.faith` only proves the site is up. It does not prove the newest change is live.

## Manual Production Deploy

Do not use `vercel deploy --prod` for normal releases.

Use it only for emergency recovery, and only from:

```text
C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension
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
