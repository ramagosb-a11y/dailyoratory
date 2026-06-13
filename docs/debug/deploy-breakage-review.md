# Deploy Breakage Review: Confession Examination

Date: 2026-06-10

## Summary

The affected route was `/confession/examination`, reported in production as a browser-level page load failure. The most likely failure mode was a client runtime render loop in the guided examination localStorage/report state, not a build-time, route, metadata, CSS, or Vercel routing failure.

## Root Cause

`useGuidedExamenStore()` and `useGuidedExaminationReport()` used `useSyncExternalStore`, but their snapshot readers could return fresh object identities on repeated calls when localStorage had not changed. React expects `getSnapshot` to return a cached value while the external store is unchanged. Returning new objects can trigger repeated renders and a client-side crash or failed hydration experience.

The immediate fix caches guided examination snapshots by the raw localStorage value and caches the combined report snapshot across the overview and path storage keys.

## Why Git Could Not Identify A Commit

The repository currently has only one commit:

`3bfa2b6 Initial commit from Create Next App`

Most of the app is currently untracked or modified relative to that initial commit, so `git diff HEAD~1..HEAD` and `git diff --stat HEAD~5..HEAD` cannot be used to identify a responsible commit. Production deploys were made from a dirty working tree or a staging copy of that tree.

## Verification Performed

- `npm run build` passed locally.
- Vercel production build passed and generated `/confession/examination` and `/confession/examination/print` as static routes.
- `npm run validate:urls` passed.
- `npm run seo:preflight` passed.
- Targeted ESLint on the touched Confession files passed.
- Full `npm run lint` still fails on unrelated pre-existing lint backlog outside the Confession changes.
- Live HTTP smoke checks returned `200` for priority routes.
- Live `/confession/examination` HTML includes `Date of last Confession`, `Review report`, and `Open print-safe page`.

## Current Fix Status

The immediate runtime issue has been patched forward. The date card and report actions are now placed at the top of the guided examination route pages through `ExaminationTopPanel`.

## Performance Notes

- The examination route pages remain static Server Components.
- LocalStorage, report, copy, and print behavior remain in small Client Components.
- No new dependency was added.
- The report snapshot cache avoids unnecessary repeat object creation for `useSyncExternalStore`.
- The remaining risk is client bundle size from guided examination data being used by interactive report/path components; this is acceptable for the current flow but should be watched if the prompt set grows.

## Privacy And Accessibility Notes

- Confession report data remains localStorage-only.
- No report data is placed in URLs or metadata.
- Date input and textareas have visible labels.
- Save/copy/clear feedback uses `aria-live`.
- Print is user-initiated only; there is no auto-print behavior.
- The print route has a clear empty state when no local report data exists.

## Workflow Recommendation

Future changes should use feature branches, small commits, Vercel previews, and a documented smoke-test pass before production promotion. Stable production deployments should be tagged, and rollback should use Vercel rollback or `git revert` rather than destructive history rewrites.
