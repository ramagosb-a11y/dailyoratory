# Vatican II and the Mass — implementation report, revision 2

Date: 2026-10-31. Owner authorization and acceptance contract: [REVISION-2.md](REVISION-2.md). Local implementation; awaiting owner review. No commit, push, deployment, IndexNow or external synchronization performed.

## Engineering changes

Expanded existing /vatican-ii starter guide into a static Server Component article with its own VaticanIIArticle.module.css. Existing VaticanIICard and VaticanII.module.css preserved. Reused site fonts, Breadcrumbs and createPageMetadata. Added archival photographic hero, differentiated council/implementation timeline, semantic desktop comparison and mobile definition-list pairs, static A/B/C diagram, substantial editorial sections, five discussion questions, original prayer, eight source records and photography credits. Added Learn navigation, breadcrumb/URL registry and search entry, plus contextual links in Councils/Vatican Mass sections. Existing sitemap already included /vatican-ii; browser inclusion verified. Preserved concurrent Vatican I, Vatican redesign, home/music and other pending work.

No feature client component, state, storage, form, API, database, runtime fetch, embeds, dependency, analytics event or paid service added. Public interface is /vatican-ii; no existing shared type/API contract changed. Search status is the existing search visibility flag, not ecclesial approval.

## Editorial changes

Owner's article used as baseline. Approved qualifications applied to principal readings/Last Gospel, special lessons/weekday propers, solemnities, Ordinary Time cycles and Eucharistic Prayer I. Distinguish Council principles from implementation; preserve Latin/vernacular balance, sacrificial worship and inward/outward participation including silence. Pastoral benefits are intentions, not automatic guarantees. Added direct earlier-participation support from Mediator Dei and 1970 edition support from USCCB. Closing prayer and all five discussion questions preserved verbatim. Sources and exact asset provenance: [RESEARCH-2.md](RESEARCH-2.md). Content source: src/data/vaticanII.ts.

## Verification

- Focused ESLint on route, content, contextual-link components, navigation and search: passed.
- TypeScript (`npm run typecheck`): passed.
- Full lint: failed on unrelated existing backlog, 43 errors and 36 warnings. No diagnostics for feature files. Full log: ignored qa/vatican-ii/lint.log.
- SEO preflight including URL validation: passed; all 13 priority routes found.
- Image checks: passed; 25 retreat assets validated, no oversized public PNG/JPEG remains. Two new WebP assets save 766,071 bytes (45.9%).
- Citation audit: completed exit 0; 1,537 Bible and 237 CCC detections at that run. Detector misclassifies section signs in council documents as CCC; source verification above is separate, not inferred from this audit.
- Production build: passed, exit 0. Compiled successfully in 15.0s; all 666 pages generated. /vatican-ii is marked static and is present in prerender-manifest with initialRevalidateSeconds=false. Generated HTML contains the article, closing prayer and both photos. Client-store, image and rendering-strategy guards passed. Initial attempt encountered another active build and left it undisturbed; sandboxed follow-up stalled at compilation and was stopped. Approved unsandboxed final build succeeded. Log: qa/vatican-ii/build-verified.log.
- Browser checks: passed using bundled Playwright/Edge against http://127.0.0.1:3014. All external browser requests blocked during QA.
- Widths 320/390/768/1440: document scroll width equals viewport; no horizontal overflow. Mobile pairs/desktop table, five rows/questions, one H1, exact prayer, one hero preload, loaded local images verified.
- 200% text enlargement and 720 CSS-pixel viewport equivalent to 200% zoom on a 1440px display: passed. This is a reflow simulation, not a native browser zoom UI test.
- Keyboard Tab from primary to secondary hero action preserves visible solid outline. Both section actions reach correct anchors; comparison top approximately 128px below viewport top. Source/credit links visibly underlined.
- Canonical https://dailyoratory.faith/vatican-ii, sitemap, contextual links, search submission/results verified. No captured page/hydration errors. No personal-input controls/iframes in article.
- Final Learn menu check passed on desktop and mobile; mobile link reaches the article, and Open Graph URL equals the canonical.
- Screenshots output/playwright/vatican-ii/page-{320,390,768,1440}.png, hero variants, keyboard-focus.png and zoom-200-equivalent.png. Desktop hero/mobile hero and full-page crops visually inspected. Existing site chrome and archival photo character retained. Final captures explicitly wait for supporting-image decode/paint; additional supporting-photo-{320,390,768,1440}.png files show the loaded image and credits. All naturalWidth values are positive. Development indicator hidden only in screenshot session for clean evidence.
- Final postbuild typecheck and SEO preflight passed. Diff whitespace checks passed with existing LF/CRLF notices only.

## Preview and review

Local preview: http://127.0.0.1:3014/vatican-ii . Preview tab requested in Codex; app returned queued. Local server required allowed sandbox escalation so loopback was reachable. Browser launch also required allowed escalation; no security settings changed.

Final independent AI source/editorial/code review: ready for local owner review, no blockers; reviewer findings and resolutions in REVIEWS.md. No AI review constitutes ecclesial approval. Human theological/editorial publication decision remains pending. Owner validation: read the comparison at desktop/mobile widths, follow both hero links, inspect sources/credits, and find the article through Learn or search.
