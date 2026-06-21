# Deploy Drift Prevention Review

Date: 2026-06-20

## What Happened

The production site was deployed from `brotherhood-of-ascension-deploy`, while the Git repo source of truth is `brotherhood-of-ascension`.

Those folders drifted. A React 19 `useSyncExternalStore` fix existed in the Git repo copy of `guidedExaminationStorage.ts`, but the deploy folder did not have the full stable snapshot behavior. Deploying the drifted copy caused `/confession/examination` to hit the Next error boundary.

This was the same failure class as before: a client store returned fresh object identities for snapshots that React expected to stay stable while storage had not changed.

## Immediate Fixes Added

- `scripts/assert-deploy-source.ts` blocks builds from folders marked with `.do-not-deploy-from-this-folder`.
- `brotherhood-of-ascension-deploy/.do-not-deploy-from-this-folder` marks the legacy folder as non-deployable.
- `scripts/audit-client-stores.ts` fails if `useSyncExternalStore` storage files do not use snapshot caching or if snapshot functions return fresh object literals.
- `scripts/audit-rendering-strategy.ts` fails post-build if high-traffic public routes are not prerendered or ISR.
- `package.json` now runs deploy-source and client-store checks before `next build`, and rendering checks after `next build`.

## Resolution Status

Resolved on 2026-06-21.

The production-only static/ISR fixes from the legacy deploy folder were merged back into the Git repo source of truth. The Git repo now passes:

- `npm run build`
- `npm run validate:urls`
- `npm run seo:preflight`

The build also runs and passes:

- `scripts/assert-deploy-source.ts`
- `scripts/audit-client-stores.ts`
- `scripts/audit-rendering-strategy.ts`

The previously failing high-traffic routes are now prerendered or ISR in the Git repo build output, including:

- `/`
- `/dashboard`
- `/homilies`
- `/indulgences`
- `/library`
- `/liturgical-living`
- `/liturgical-living/calendar`
- `/liturgical-living/family`
- `/media`
- `/pray`
- `/pray/today`
- `/reflections/mass-readings`
- `/saints/saint-of-the-day`
- `/search`
- `/sitemap.xml`
- `/today`

## Ongoing Rule

Deploy only from:

```powershell
C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension
```

The legacy `brotherhood-of-ascension-deploy` folder remains blocked and must not be used for future production deploys.
