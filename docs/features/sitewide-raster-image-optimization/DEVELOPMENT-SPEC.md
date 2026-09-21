# DEVELOPMENT-SPEC — Sitewide raster image optimization

## Identity and authorization
- Feature ID: `sitewide-raster-image-optimization`
- Spec revision/date: 1 / 2026-09-20
- Status: approved-for-implementation
- Owner: repository owner
- Implementation approval: The owner's 2026-09-20 instruction, “Optimize all oversized raster images across the full Daily Oratory site,” including conversion, reference updates, validation, and reporting; it explicitly prohibits production deployment and Vercel-deployment deletion.
- Required review artifacts and reviewed revisions: `IDEA.md` revision 1; no source, content, theology, privacy, or SEO review applies because no corresponding material changes.
- Production authorization: **not authorized**
- Re-review triggers: a change to image meaning, alt text, layout/sizing, route metadata semantics, data flow, or scope beyond local static assets.

## Goal and scope
- Goal: Replace eligible oversized public PNG/JPEG raster assets with same-dimension WebP files when that produces a verified reduction, update every application reference, and make future audits repeatable.
- User problem and audience: Visitors should receive the same visual site with a smaller production static-asset footprint.
- Existing related functionality and inspected evidence: `next.config.ts` uses Next Image defaults with configured qualities `75` and `85`; `next/image` preserves layout from its `width`/`height` or `fill` contracts. Public assets are referenced by `src/app`, `src/components`, `src/data`, CSS, and content records.
- Route/location: Any existing route that uses a converted static public asset; no route is created or removed.
- Required existing components and contracts: Preserve every existing `<Image>`, `<img>`, CSS URL, intrinsic size, `sizes`, preload/lazy behavior, object positioning, and `alt` value.
- New components only if necessary, with justification: None.
- Allowed files and dependencies: `public/images/**` converted assets, direct application/data/content callers, `scripts/**`, `package.json`, and this feature packet. Use the already-installed transitive `sharp` runtime only.
- Explicit non-goals: Conversion of SVG/GIF, resizing, image redesign, changing existing WebP/AVIF, deployment/push, or modifying unrelated review evidence/source masters outside production assets.

## Content contract
- Exact approved content IDs/files/revisions: No text content changes; existing alternatives and captions are preserved verbatim.
- Source requirements and verified RESEARCH references: Not applicable; format conversion does not change source attribution.
- Theology/rights review and human approval evidence, or justified not-applicable: Not applicable to unchanged images/text; existing provenance is retained.
- Copy to preserve verbatim: All visible copy and `alt` text.
- Code changes versus content changes: Static format and path-reference changes only; no content changes.

## Behavior
- User flow: Unchanged. Existing pages request equivalent same-dimension WebP static assets through their existing image system.
- Mobile behavior: Unchanged CSS/layout and responsive image contracts.
- Desktop behavior: Unchanged CSS/layout and responsive image contracts.
- Empty/loading/error/complete/return states: Unchanged.
- Accessibility requirements (keyboard, focus, semantics, names/status, zoom): Keep existing semantic image elements and all meaningful `alt` text untouched; no control changes.
- Privacy requirements (fields, storage, deletion, network, exports): No change.
- SEO requirements (canonical, metadata, sitemap, links, redirects, schema): Keep metadata behavior intact; update only static image URLs where conversion changes a direct asset reference.
- Analytics requirements (event/parameter allowlist, or no new tracking): No tracking change.
- Performance/rendering and compatibility constraints: Preserve pixel dimensions, orientation and alpha; use WebP quality 85 because AVIF is not configured in `next.config.ts`; never retain an optimized variant that is larger than its source.

## Acceptance criteria and tests
| ID | Observable required behavior | Verification method / command | Expected result |
| --- | --- | --- | --- |
| AC-1 | Every repository raster is inventoried with format, dimensions, bytes, alpha/animation state, and references. | `node scripts/inventory-raster-images.mjs --output docs/features/sitewide-raster-image-optimization/IMAGE-INVENTORY.json` | Machine-readable inventory is complete outside excluded dependencies/generated QA output. |
| AC-2 | Eligible oversized public PNG/JPEG files have same-dimension, quality-85 WebP replacements only when smaller. | `npm run images:check` and Sharp metadata decode | Check passes; each converted file decodes and preserves width/height/alpha. |
| AC-3 | No live application/content/config reference points to a removed PNG/JPEG. | repository path search plus `npm run images:check` | No missing removed raster path remains. |
| AC-4 | Application type, lint, and production build safeguards pass or baseline failures are recorded. | `npm run typecheck`, `npm run lint`, `npm run build` | Results accurately documented. |
| AC-5 | Representative public routes retain images and layout. | Local browser checks for home, media, prayer, Bible, saints, and artwork-heavy pages. | No image 404s, console errors, or unexpected layout/image-quality issues. |

- Automated test scope and commands: Inventory/check, typecheck, lint, build, URL/reference search, and Sharp decoding.
- Manual/browser checks and synthetic fixtures: No personal data; inspect representative public routes at desktop and mobile widths.
- Known baseline failures/limitations: Full lint has a documented pre-existing baseline; report current exact outcome.
- Code-review assignment: Independent final-diff review before handoff when available; otherwise disclose self-review limitation.
- Implementation sequence and dependencies: Inventory → determine candidates and references → create WebP and verify → update references → remove exact verified originals → run checks/build/browser smoke test → final report.
- Reversal approach: Restore the removed originals and their prior references from Git history; no deployment state is altered.

## Definition of Done
- [x] All required reviews apply to this revision; implementation authorization recorded.
- [ ] Acceptance criteria implemented; approved content preserved.
- [ ] Relevant tests/lint/typecheck/build and manual checks recorded truthfully.
- [ ] Code/content diff reviewed, blockers resolved, unrelated work preserved.
- [ ] IMPLEMENTATION-REPORT complete; human review requested for the concrete change.
- [x] No automatic production publication, push or deployment.
