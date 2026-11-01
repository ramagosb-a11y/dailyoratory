# Vatican I r1 — implementation report, 2026-10-31

Latest update, 2026-11-01: two owner-requested web-team review/refinement cycles and Learn menu link are implemented. See [VISUAL-REVIEW-R2.md](VISUAL-REVIEW-R2.md) for final review verdicts and current validation. Typecheck, focused lint, URLs/SEO and browser checks passed. A new r2 production build could not acquire the shared checkout's existing build lock; do not treat the r1 build evidence below as an r2 pass. Current preview: http://127.0.0.1:3014/vatican-i . No publication.

Status: implemented, awaiting human editorial review. Production publication not authorized. Canonical checkout: brotherhood-of-ascension.

## Delivered

New static /vatican-i learning guide, scoped navy/gold/ivory styles, reused licensed basilica image, timeline, two document sections, all four ex cathedra conditions, nearby qualifications, Vatican II continuity, source links, supplied discussion prompts and exact supplied prayer. Small client learning-check component with three questions, explanatory feedback, pressed-state semantics, live announcements and reset. No answer persistence, custom analytics or backend added. New council guide link and sitemap entry. Existing Vatican guide now contains a concurrently added VaticanICard, preserved intact.

Code changes concern route, presentation and quiz behavior. Editorial changes reorganize and summarize the supplied text; summaries labeled paraphrases, prayer labeled supplied reflection prayer. Sources and independent advisory AI review are documented in REVIEWS.md. Original attachment remains outside the repository. No added media bytes; existing 325,232-byte WebP reused, 0 bytes conversion savings.

## Verification

- npm run typecheck: passed, exit 0.
- npm run lint: failed, exit 1; 43 errors and 36 warnings in existing unrelated files, including scripts/check-companion-browser.cjs and src/components/way-of-cross/WayOfCrossQuietRoom.tsx. No broad fixes made.
- Focused eslint on new route, quiz, council section, Vatican page and sitemap: passed without diagnostics (command followed by successful citation audit).
- npm run build: passed, exit 0; /vatican-i statically prerendered, all 666 pages generated, client-store, image and rendering guards passed. After the typography correction, a sandbox rerun stalled during compilation and was stopped; the allowed outside-sandbox final rerun passed, exit 0, including TypeScript and all guards. Final log: output/vatican-i-build-final.log. Preview restarted against the final build.
- npm run validate:urls and npm run seo:preflight: passed, exit 0, all 13 priority routes found.
- npm run audit:citations: completed, exit 0; repository-wide detector reports 1,537 Bible and 227 CCC detections. This is not theological certification; actual source and independent content review completed separately.
- git diff --check: passed (line-ending warnings only for existing working-tree files).
- Browser: correct/incorrect answers, reset, native reflection disclosure, chapter navigation, keyboard focus and image loading verified; no captured console warnings/errors. 1280px/390px layouts visually inspected and no horizontal overflow found. Full screen-reader and 200% browser-zoom tests not performed.

Final preview: http://localhost:3014/vatican-i . Existing development server reused after concurrent work replaced .next output and interrupted the temporary production preview on port 3006. Temporary owned production servers stopped; existing server preserved. Final preview returned HTTP 200, loaded in the in-app browser, image loaded, corrected quiz text computed at 16px. Screenshot refreshed from final development preview. Allowed sandbox escalation was needed for loopback checks. No security settings changed. Browser preview left open for owner review. No commits, pushes, deployment, IndexNow submission or external content synchronization.

Owner validation: open preview, follow Begin the journey, read both document sections, try a wrong and correct quiz choice then reset, open reflection prompts, and follow Vatican II/source links. Human theological/editorial publication decision remains pending. Preserve all unrelated and concurrent work.
