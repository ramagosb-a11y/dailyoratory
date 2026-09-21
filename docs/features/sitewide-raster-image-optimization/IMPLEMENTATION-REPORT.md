# IMPLEMENTATION-REPORT — Sitewide raster image optimization

Feature ID / spec revision / implementer / date / git revision: `sitewide-raster-image-optimization` / 1 / Codex Engineering / 2026-09-20 / local working tree

Status: implemented-awaiting-human-review

Owner implementation authorization evidence: The owner’s 2026-09-20 instruction explicitly authorized repository-wide raster optimization, reference updates, local validation, and reporting; it prohibited production deployment and Vercel-deployment deletion.

## Changes

- Files created: 133 same-dimension WebP assets under `public/images/`; `scripts/inventory-raster-images.mjs`; `scripts/optimize-raster-images.mjs`; this feature packet and pre/post inventories.
- Files modified: Application/data/CSS/metadata callers of the 133 assets, plus documentary source-path references and `package.json` image-check scripts.
- Files removed: The 133 verified oversized public PNG/JPEG source assets, only after their smaller WebP replacement was decoded and all text references were rewritten.
- Code changes: `images:check` now runs both the existing retreat guard and a general public PNG/JPEG size guard. `images:inventory` and `images:optimize` provide repeatable discovery and conversion commands using the installed `sharp` runtime.
- Content changes and source/approval preservation: None. Image dimensions, alpha state, existing `alt` text, layout, loading behavior, priority/preload, and responsive sizing were preserved.
- Dependencies/data flows/routes changed: None. No deployment, push, external request, metadata meaning, user-data flow, or analytics change.
- Existing unrelated work preserved: Existing untracked `output/playwright/` evidence was left untouched.

## Results

| Measure | Result |
| --- | ---: |
| Converted files / selected format | 133 / WebP quality 85 |
| Converted source bytes | 322,819,094 |
| WebP replacement bytes | 30,389,612 |
| Saved | 292,429,482 bytes (90.59%) |
| Total public raster bytes before | 372,370,106 |
| Total public raster bytes after | 79,940,624 |
| Production static-asset reduction | 292,429,482 bytes (78.53%) |

The complete pre-conversion inventory is `IMAGE-INVENTORY.json`; it records each raster asset’s path, type, dimensions, bytes, alpha/animation status, checksum, and textual references. `FINAL-IMAGE-INVENTORY.json` is the decoded post-conversion inventory. Browser/QA output, temporary browser profiles, dependencies, build output, and Git data are excluded from these inventories because they are not site source or deployable assets.

## Acceptance and validation

| Criterion/check | Command or procedure | Result / exit code | Evidence / limitation |
| --- | --- | --- | --- |
| AC-1 inventory | `node scripts/inventory-raster-images.mjs --output .../IMAGE-INVENTORY.json` | Passed (before conversion) | 671 rasters found in the initial broad scan; 288 public assets totaling 372,370,106 bytes. |
| AC-2 conversion and decoding | `sharp` metadata verification for each output; final inventory decode | Passed | Every replacement had the original width/height; the two alpha-bearing PNG replacements retained alpha; every final raster decoded. |
| AC-3 missing references | Compared every one of the 133 deleted public paths against application/config/content/docs text roots | Passed | `brokenReferences: []`; original historical-inventory snapshot is intentionally retained as evidence. |
| AC-3 image guard | `npm run images:check` | Passed / 0 | Existing retreat guard passed; general guard found no oversized public PNG/JPEG. |
| AC-4 type check | `npm run typecheck` | Passed / 0 | No TypeScript errors. |
| AC-4 lint | `npm run lint` | Baseline failed | 43 errors and 36 warnings in existing scripts/components; none introduced by the two new `.mjs` utilities or converted callers. |
| AC-4 production build | `npm run build` | Blocked by environment | Prebuild, client-store audit, and both image guards passed. Next then failed only because this sandbox could not fetch the configured Google Fonts (Cormorant Garamond, Geist, Geist Mono). |
| AC-5 local route/image smoke test | Local Next dev server at port 3010; fetched rendered image sources | Passed / 0 image failures | `/`, `/media`, `/prayers/angelus`, `/bible`, `/saints`, `/way-of-cross`, `/morning-prayer`, `/night-prayer`, and `/divine-mercy` all returned 200; every 18–36 rendered image source per route returned 200. |
| Duplicate check | SHA-256 groups over final public raster assets | Reviewed | Three pre-existing duplicate WebP pairs remain: adoration transparent guide, Rosary desktop, and Rosary mobile. They retain distinct existing paths and callers; deduplication was not needed for oversized-raster conversion. |

## Remaining assets and intentional non-changes

- No public raster remains at or above 1 MiB after conversion.
- Existing WebP/AVIF files were not reconverted; SVGs were unchanged; animated GIFs were unchanged; PNG/JPEG below 1 MiB were intentionally retained because conversion could increase size or is not justified by the project’s oversized-asset threshold.
- Non-production source masters under `assets/source-images/` and review artifacts under `review-images/` were inventoried but not modified: they are not deployed static assets and serve source/review purposes.
- AVIF was not selected because the current `next.config.ts` does not configure AVIF output negotiation. WebP is broadly supported and aligns with the project’s existing image system and configured quality 85.

## Review

- Code reviewer, independence and reviewed revision: Coordinator self-review of integrated local diff; an independent final review remains pending.
- Findings and resolutions: The first conversion runner encountered a Windows file-lock on a temporary rename. The repeatable script was corrected to verify buffers before writing. No partial production output remained. A zero-entry interrupted-run report was removed rather than retained as misleading evidence.
- Accessibility/privacy/content regression review: No text, `alt`, image dimensions, routes, metadata semantics, storage, analytics, or data flow changed. Existing Next Image/CSS behavior remains in place.
- Remaining owner judgments: Perform a final human visual-quality inspection before release; choose separately whether the three already-WebP duplicate pairs should be deduplicated. The Playwright CLI could not initialize within this sandbox's command window, so browser-console and screenshot inspection remain pending despite the local response smoke test.
- Git diff summary and reversal approach: Restore the deleted originals and prior paths from Git history; the format-only reference changes are one-to-one and no deployment state was changed.
- Human review of completed change: pending
- Production authorization: not authorized
- Push/deploy actions: none
