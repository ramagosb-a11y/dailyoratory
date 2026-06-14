# Sacred Heart Meditation Update Notes

## 2026-06-13 19:00:13 -05:00

### Goal

Add the Sacred Heart of Jesus Seven Senses Deep Meditation Journey as a dedicated 20-minute meditation page, then surface it prominently from `/devotions/sacred-heart-of-jesus`.

### Current Git Status Summary

- Working tree contains only the Sacred Heart meditation content update.
- No unrelated user changes were observed before staging this update.
- New assets copied from the supplied local images into `public/images/sacred-heart/`.

### Files Expected To Change

- `src/app/devotions/sacred-heart-of-jesus/seven-senses-meditation/page.tsx`
- `src/components/devotions/SacredHeartMeditationFeature.tsx`
- `src/app/devotions/[slug]/page.tsx`
- `src/data/devotions.ts`
- `src/data/searchIndex.ts`
- `src/app/sitemap.ts`
- `public/images/sacred-heart/sacred-heart-jesus.png`
- `public/images/sacred-heart/sacred-heart-symbols.png`
- `docs/debug/sacred-heart-meditation-update-notes.md`

### Checks Completed Before Deploy

- `npx eslint src/app/devotions/[slug]/page.tsx src/app/devotions/sacred-heart-of-jesus/seven-senses-meditation/page.tsx src/components/devotions/SacredHeartMeditationFeature.tsx src/app/sitemap.ts src/data/devotions.ts src/data/searchIndex.ts` - passed.
- `npm run build` - passed; new route prerendered as `/devotions/sacred-heart-of-jesus/seven-senses-meditation`.
- `npm run validate:urls` - passed.
- `npm run seo:preflight` - passed.
- Local smoke on `http://localhost:3002`:
  - `/devotions/sacred-heart-of-jesus` - 200.
  - `/devotions/sacred-heart-of-jesus/seven-senses-meditation` - 200.
  - Feature link to the new meditation page present.
  - New page title, closing prayer, and hero image marker present.
  - Both image assets returned 200.

### Deployment Plan

- Commit the content update so the repo remains clean - completed as `d48637d Add Sacred Heart meditation page`.
- Deploy a Vercel preview and inspect the preview URL - completed.
- Preview deployment:
  - URL: `https://daily-oratory-cbfh74h90-ramagosb-6300s-projects.vercel.app`
  - Inspect URL: `https://vercel.com/ramagosb-6300s-projects/daily-oratory/4zsst6d1Yrx6s5vtxDRZpqRF1baF`
  - Deployment ID: `dpl_4zsst6d1Yrx6s5vtxDRZpqRF1baF`
  - Status: Ready.
  - Direct route smoke returned 401 because preview deployment protection is enabled. Vercel connector bypass could not be generated because the connector token is expired.
- Production deployment URL: `https://dailyoratory.faith`
- Deploy production only after preview creation succeeds.

### Rollback Recommendation

- If production has a content or routing issue, roll back to the prior known-good production deployment from the 2026-06-13 baseline: `dpl_6rqJSNTNuNP93CvABNasx9E7pBiu`.

## 2026-06-13 19:15:09 -05:00

### Goal

Re-run the requested deploy checklist for the Sacred Heart meditation update, document the deploy candidate, and deploy production from a clean repository state.

### Current Git Status Summary

- `git status --short` returned clean before verification.
- Current branch/latest commits:
  - `312ce57 (HEAD -> master) Document Sacred Heart meditation preview`
  - `d48637d Add Sacred Heart meditation page`
  - `2d53fed (tag: production-2026-06-13) Baseline live Daily Oratory site`
  - `3bfa2b6 Initial commit from Create Next App`

### Files Expected To Change

- `docs/debug/sacred-heart-meditation-update-notes.md`

### Checks Completed Before Production Deploy

- `npm run build` - passed; `/devotions/sacred-heart-of-jesus/seven-senses-meditation` prerendered as a static route.
- `npm run validate:urls` - passed.
- `npm run seo:preflight` - passed.
- Relevant local smoke routes on `http://localhost:3002`:
  - `/devotions/sacred-heart-of-jesus` - 200.
  - `/devotions/sacred-heart-of-jesus/seven-senses-meditation` - 200.
  - `/images/sacred-heart/sacred-heart-jesus.png` - 200.
  - `/images/sacred-heart/sacred-heart-symbols.png` - 200.
  - Sacred Heart overview contains the meditation link.
  - Meditation page contains the title, closing prayer, and hero image marker.

### Vercel Preview Before Production

- Preview URL: `https://daily-oratory-8ul0upwtq-ramagosb-6300s-projects.vercel.app`
- Inspect URL: `https://vercel.com/ramagosb-6300s-projects/daily-oratory/7utX1mHJF6qEhBXjXm6vqaXirPVa`
- Deployment ID: `dpl_7utX1mHJF6qEhBXjXm6vqaXirPVa`
- Status: Ready.
- Direct preview route smoke:
  - `/devotions/sacred-heart-of-jesus` - 401 due Vercel preview deployment protection.
  - `/devotions/sacred-heart-of-jesus/seven-senses-meditation` - 401 due Vercel preview deployment protection.

### Production Deployment Candidate

- Production target URL: `https://dailyoratory.faith`
- Current production deployment before this pass: `dpl_5yLJ79D5sRUWBqiht7ZrpXSbLTRG`
- Rollback recommendation: if the new production deployment has routing, image, or content issues, roll back to `dpl_5yLJ79D5sRUWBqiht7ZrpXSbLTRG`.
