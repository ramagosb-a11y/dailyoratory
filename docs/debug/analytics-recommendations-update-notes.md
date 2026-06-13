# Analytics Recommendations Update Notes

## 2026-06-13 08:41:42 -05:00

### Goal of This Update

Document the current repository state before moving from analytics/report review into any recommendations or implementation work for Daily Oratory.

### Current Git Status Summary

- Initial command from `C:\Users\brent\OneDrive\Documents\Codex\Ascension` failed because that directory is not a git repository.
- Repository root found at `C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension`.
- Current branch and latest commit:
  - `master`
  - `3bfa2b6 (HEAD -> master) Initial commit from Create Next App`
- Latest commit history available from `git log --oneline --decorate -n 5`:
  - `3bfa2b6 (HEAD -> master) Initial commit from Create Next App`
- Working tree is already dirty before any production-code edits for this update.
- Modified tracked files currently include:
  - `.gitignore`
  - `README.md`
  - `eslint.config.mjs`
  - `next.config.ts`
  - `package-lock.json`
  - `package.json`
  - `src/app/globals.css`
  - `src/app/layout.tsx`
  - `src/app/page.tsx`
- Many untracked files and directories are present, including:
  - `.vercelignore`
  - `docs/`
  - `google-workspace/`
  - `public/calendar/`
  - `public/images/`
  - `scripts/`
  - many `src/app/` routes
  - `src/components/`
  - `src/config/`
  - `src/content/`
  - `src/data/`
  - `src/lib/`
  - `src/types/`
  - `tailwind.config.ts`
  - `vercel.json`

### Files Expected to Change

- Documentation checkpoint only at this stage:
  - `docs/debug/analytics-recommendations-update-notes.md`
- Implementation is now approved by the user.
- Expected production-code changes are scoped to:
  - `src/lib/metadata.ts`
  - `src/lib/structuredData.ts`
  - `src/data/adoration.ts`
  - `src/app/adoration/[slug]/page.tsx`
  - `src/app/media/[slug]/page.tsx`
  - `src/components/retention/DailyReturnPrompt.tsx`
  - `src/app/today/page.tsx`
  - `src/app/reflections/mass-readings/page.tsx`
  - `src/app/daily-examen/page.tsx`
  - `src/app/confession/examination/page.tsx`
- Production edits should address the analytics recommendations around cleaner snippets, adoration stream structured data, and daily-retention pathways.

### Checks Planned Before Deploy

- Review `git status --short` again before any implementation commit.
- Preserve unrelated user changes and avoid reverting existing dirty worktree content.
- Run project validation after any production-code changes:
  - `npm run build`
  - lint/type checks if available in `package.json`
  - URL validation if applicable: `npm run validate:urls`
- For frontend or metadata changes, verify important routes locally or against preview:
  - homepage
  - `/today`
  - `/reflections/mass-readings`
  - `/confession`
  - `/adoration`
  - top analytics/SEO pages identified in the reports
- For deploy-related changes, inspect the Vercel build/deployment result before production promotion.

### Implementation Verification

- `npm run build` passed on 2026-06-13.
- `npm run validate:urls` passed on 2026-06-13.
- `npm run lint` was blocked by unrelated `.tmp-edge-profile` browser-profile files already present in the working tree.
- Targeted ESLint for the edited files passed:
  - metadata helpers
  - structured data helpers
  - adoration stream data/page
  - media detail page
  - daily return prompt
  - Today, Mass readings, Daily Examen, and confession examination pages
- Temporary local smoke checks returned 200 for:
  - `/today`
  - `/reflections/mass-readings`
  - `/daily-examen`
  - `/confession/examination`
  - `/adoration/eucharistic-adoration-stream-qz8ye61boxm`
  - `/media/holy-mass-biblical-journey`
- Local HTML checks confirmed:
  - adoration stream JSON-LD includes `VideoObject` and `BroadcastEvent`
  - return prompts render on tested pages
  - sample page titles no longer duplicate `Daily Oratory`

## 2026-06-13 09:40:36 -05:00

### Deploy Candidate Verification

- Git status was reviewed with `git status --short`.
  - The worktree remains broadly dirty/untracked from the existing project state.
  - The deployment candidate intentionally includes the analytics/SEO updates and one additional metadata cleanup in `src/app/prophecy-series/page.tsx`.
  - No unrelated user changes were reverted.
- Local checks passed:
  - `npm run build`
  - `npm run validate:urls`
  - `npm run seo:preflight`
- Local Playwright browser smoke passed for:
  - `/today`
  - `/reflections/mass-readings`
  - `/daily-examen`
  - `/confession/examination`
  - `/adoration/eucharistic-adoration-stream-qz8ye61boxm`
  - `/prophecy-series`
- Preview deployment:
  - URL: `https://daily-oratory-2lg8w3e24-ramagosb-6300s-projects.vercel.app`
  - Inspect URL: `https://vercel.com/ramagosb-6300s-projects/daily-oratory/FmLdC24HZEisPoauaLVg6hxo8QqM`
  - Deployment ID: `dpl_FmLdC24HZEisPoauaLVg6hxo8QqM`
  - Status: `READY`
  - Target: `preview`
- Preview browser verification caveat:
  - Unauthenticated preview browser requests returned `401` through Vercel SSO deployment protection.
  - `vercel inspect` confirmed the preview deployment is ready.
  - No Vercel protection-bypass env var was listed by `vercel env ls`.

### Rollback Recommendation

- If production behavior regresses after deploy, use Vercel rollback to return the production alias to the prior deployment:
  - `vercel rollback`
- If a specific known-good deployment URL is preferred, rollback can target that deployment directly:
  - `vercel rollback <previous-production-deployment-url-or-id>`
- Priority post-deploy checks should confirm:
  - homepage loads
  - `/today` loads
  - `/adoration/eucharistic-adoration-stream-qz8ye61boxm` includes adoration structured data
  - `/daily-examen` and `/confession/examination` render return/preparation prompts
  - `/prophecy-series` title is `Prophecy Series | Daily Oratory`

### Production Deployment Result

- Deployed at: 2026-06-13 09:44:30 -05:00
- Production deployment URL: `https://daily-oratory-jsvzpspsy-ramagosb-6300s-projects.vercel.app`
- Production domain alias: `https://dailyoratory.faith`
- Inspect URL: `https://vercel.com/ramagosb-6300s-projects/daily-oratory/6rqJSNTNuNP93CvABNasx9E7pBiu`
- Deployment ID: `dpl_6rqJSNTNuNP93CvABNasx9E7pBiu`
- Status: `READY`
- Target: `production`
- Post-deploy browser smoke passed on `https://dailyoratory.faith` for:
  - `/today`
  - `/reflections/mass-readings`
  - `/daily-examen`
  - `/confession/examination`
  - `/adoration/eucharistic-adoration-stream-qz8ye61boxm`
  - `/prophecy-series`
- Vercel error log scan:
  - `vercel logs dpl_6rqJSNTNuNP93CvABNasx9E7pBiu --no-follow --level error --since 1h --limit 20`
  - Result: no logs found.
