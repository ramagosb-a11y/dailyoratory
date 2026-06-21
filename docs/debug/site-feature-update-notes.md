# Site Feature Update Notes

## 2026-06-16 15:51:48 -05:00

### Goal of This Update

Document the current repository state before starting any new site feature work, so implementation begins from a recorded clean baseline.

### Current Git Status Summary

- `git status --short` returned clean.
- Repository root:
  - `C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension`
- Current branch and recent commit history from `git log --oneline --decorate -n 5`:
  - `ff83044 (HEAD -> master) Document Sacred Heart production checklist`
  - `312ce57 Document Sacred Heart meditation preview`
  - `d48637d Add Sacred Heart meditation page`
  - `2d53fed (tag: production-2026-06-13) Baseline live Daily Oratory site`
  - `3bfa2b6 Initial commit from Create Next App`
- No unrelated user changes were present at the start of this update.

### Files Expected To Change

- Documentation checkpoint only for this step:
  - `docs/debug/site-feature-update-notes.md`
- Production feature files are intentionally not selected yet because the feature scope has not been chosen.
- After feature selection, expected edits will likely be limited to the relevant route, supporting components, and any associated data/config files.

## 2026-06-16 16:00:00 -05:00

### Goal of This Update

Add approved St. Jude external links only where they naturally fit the current site structure, avoiding duplicate or awkward placement.

### Current Git Status Summary

- Baseline repo state before this implementation remained limited to the documentation note for this update.
- New production changes are scoped to data-driven external-link directories and saint resources only.
- No unrelated user changes are being modified or reverted.

### Files Expected To Change

- `docs/debug/site-feature-update-notes.md`
- `src/data/candleIntentions.ts`
- `src/data/massIntentions.ts`
- `src/data/saintResources.ts`

### Checks Planned Before Deploy

- Re-run `git status --short` to confirm only the intended note and St. Jude link files changed.
- Verify the new links are added in the correct content hubs:
  - `/candle-intentions`
  - `/mass-intentions`
  - `/saints/saint-jude`
- Run project validation if this proceeds toward deploy:
  - `npm run build`
  - `npm run lint`
  - `npm run validate:urls`

### Deploy Candidate Verification

- `git status --short` before deploy candidate review:
  - `M src/data/candleIntentions.ts`
  - `M src/data/massIntentions.ts`
  - `M src/data/saintResources.ts`
  - `?? docs/debug/site-feature-update-notes.md`
- `npm run build` passed on 2026-06-16.
  - Static route output included `/candle-intentions`, `/mass-intentions`, and `/saints/[slug]`.
- `npm run validate:urls` passed on 2026-06-16.
- `npm run seo:preflight` passed on 2026-06-16.

### Relevant Route Verification

- Intended route placements were confirmed in the built output after `next build`:
  - `/candle-intentions` contains `https://stjudeshrine.org/light_a_vigil_candle/`
  - `/mass-intentions` contains `https://stjudeshrine.org/mass-intentions-at-st-jude-shrine/`
  - `/saints/saint-jude` resource output contains `https://stjudeshrine.org/league-of-st-jude/`
- Preview browser smoke attempt targeted:
  - `/candle-intentions`
  - `/mass-intentions`
  - `/saints/saint-jude`
- Preview browser smoke result:
  - Each preview route redirected to `https://vercel.com/login?...` because Vercel preview deployment protection is enabled.
  - That blocked direct route-level confirmation of the rendered St. Jude links on the preview deployment.
- Local browser smoke was attempted, but a persistent local server could not be kept alive from this shell session for route verification.

### Vercel Preview Before Production

- Preview URL: `https://daily-oratory-asyx6xfaf-ramagosb-6300s-projects.vercel.app`
- Inspect URL: `https://vercel.com/ramagosb-6300s-projects/daily-oratory/7L5UVM6WxAva4bVKqYRj3EtRt58M`
- Deployment ID: `dpl_7L5UVM6WxAva4bVKqYRj3EtRt58M`
- Status: `READY`
- Target: `preview`
- Preview access caveat:
  - Browser navigation to the preview routes redirected to Vercel login due deployment protection, so the preview URL is ready but not anonymously smoke-testable from this session.

### Production Deployment Result

- Deployed at: `2026-06-16 16:20:57 -05:00`
- Production deployment URL: `https://daily-oratory-o5ib5zagn-ramagosb-6300s-projects.vercel.app`
- Production domain alias: `https://dailyoratory.faith`
- Inspect URL: `https://vercel.com/ramagosb-6300s-projects/daily-oratory/2UyvS8B4q7ELNaMXtvh3eLfur5Ri`
- Deployment ID: `dpl_2UyvS8B4q7ELNaMXtvh3eLfur5Ri`
- Status: `READY`
- Target: `production`

### Post-Deploy Route Checks

- `https://dailyoratory.faith/candle-intentions`
  - Status `200`
  - Confirmed `https://stjudeshrine.org/light_a_vigil_candle/`
- `https://dailyoratory.faith/mass-intentions`
  - Status `200`
  - Confirmed `https://stjudeshrine.org/mass-intentions-at-st-jude-shrine/`
- `https://dailyoratory.faith/saints/saint-jude`
  - Status `200`
  - Confirmed `https://stjudeshrine.org/league-of-st-jude/`

### Checks Planned Before Deploy

- Re-run `git status --short` before staging any feature work.
- Preserve unrelated user changes and do not revert or overwrite existing work outside the chosen feature scope.
- Run validation for any production changes:
  - `npm run build`
  - `npm run lint`
  - `npm run validate:urls`
  - `npm run seo:preflight`
- Smoke-test the affected route or routes locally before any deploy decision.
- Review deploy readiness from a clean, intentional diff before pushing to production.
