# Repository audit

Inspected 2026-09-18 at commit `553ee5bc1a7c78206c0a56b69b9dbc0180bd9e99`, branch `main`.
This is a source inspection, not a production, security, accessibility, or theological certification.

## Scope and source of truth

The enclosing Ascension workspace contains several historical copies. [SOURCE_OF_TRUTH.md](../../SOURCE_OF_TRUTH.md) and `scripts/assert-deploy-source.ts` identify `brotherhood-of-ascension` as canonical. Its origin is `https://github.com/ramagosb-a11y/dailyoratory.git`. The similarly named `daily-oratory-cloudflare` is not the selected repository.

At discovery, tracked files were clean. Existing untracked artwork and browser/inspection scripts were present under `public/images/` and `scripts/`; they are outside this change. No source files, approved devotional text, dependencies, remote content, or deployments were changed for this workflow.

## Architecture findings

| Area | Observed implementation and evidence | Consequence for future work |
| --- | --- | --- |
| Framework | `package.json`: Next.js 16.2.4, React/React DOM 19.2.4, TypeScript ^5; npm lockfile; package version 1.0.2 | Read bundled Next docs before code; do not substitute older routing conventions |
| Routing | App Router under `src/app`; nested feature routes and dynamic segments, e.g. `library/[slug]`, `devotions/holy-rosary/[group]/[mystery]`, `reflections/mass-readings/[slug]` | Inspect the actual route and generated params before proposing new pages |
| Directory architecture | `src/app` route composition, `src/components` feature UI, `src/data` records, `src/content` legacy and specialized content, `src/types` models, `src/lib` readers/storage/helpers, `src/config` brand/navigation/calendar, `public` assets, `scripts` guards, `google-workspace` admin integrations | Extend the related module; no new CMS or parallel content layer |
| Components | Shared `ui/PrayerCard.tsx`, `ui/Typography.tsx`, `section-header.tsx`, `content/SourceNote.tsx`; `layout/SiteChrome.tsx`, Header/Footer and feature-specific components | Reuse selectively; similar prayer components have different contracts |
| Content/data | `lib/content.ts` aggregates typed records and adapts legacy `content/resources.ts`; `types/content.ts` has status, visibility, copyright and review fields; feature readers coexist | A published flag is not proof that a theological source was independently verified |
| Remote content | `lib/massReadingsGoogleSheets.ts`, `saintOfTheDay.ts`, `googleLiturgicalCalendar.ts` fetch remote data; `google-workspace/content-admin` exports content, with a separate Mass readings deployment workflow | README's static-only/no-environment description is incomplete; inspect reader, cache and approval filtering |
| Styling | Tailwind v4 via PostCSS, CSS custom properties in `app/globals.css`, `tailwind.config.ts`, feature CSS modules; liturgical theme context | Preserve parchment/ivory, navy/gold, typography, prayer spacing and existing theme behavior |
| Typography | Root layout loads Cormorant Garamond, Geist Sans and Geist Mono through `next/font/google` | Build may require font access; reuse existing typography components/tokens |
| State | React local state, liturgical React context, feature stores using `useSyncExternalStore`; no Redux/Zustand dependency | Keep interactive islands small and external-store snapshots stable |
| Storage | Many per-feature localStorage stores plus component-local persistence; examples below | Local storage is not encrypted or isolated from other same-origin scripts; inspect clear, migration and failure behavior |
| Server/API | Three route handlers: contact email, IndexNow submission, cron cache/calendar sync; `src/proxy.ts` handles canonical redirects and preview indexing | The application is not wholly static; API and network changes need privacy/security review |
| Analytics | Root layout installs GA4; `components/analytics/AnalyticsPageTracker.tsx` sends path plus query on navigation; `lib/analytics.ts` allows arbitrary scalar parameters | Never pass private text or spiritual answers; existing helper does not enforce a sensitive-data allowlist |
| Analytics dependency | `@vercel/analytics` is declared, but no import was found in `src` | Do not infer live Vercel Analytics from dependency presence |
| SEO | `app/sitemap.ts`, `app/robots.ts`, `lib/structuredData.ts`, navigation and legacy redirects; sitemap revalidation 86400 seconds | Review route duplication, approved records, internal links and schema together |
| Metadata/canonical | `lib/metadata.ts` createPageMetadata, `lib/url.ts`, `config/brand.ts`, root metadata and proxy; next config redirects /reflections to Mass readings | Use helper and explicit route path; root canonical is not sufficient for every page |
| Testing | Node test runner in `scripts/fasting-retreat.test.mjs`; data/assert validation in `validate-adoration-companion.mjs`; browser script `check-homepage-menu.cjs`; no general Jest/Vitest/Playwright test config found | Match existing tests; do not claim comprehensive coverage |
| Build/lint | npm build includes prebuild source guard, client-store audit, image check, Next build, then rendering audit; npm lint uses ESLint 9; strict TypeScript | Rendering audit protects high-traffic prerendered/ISR routes and cache lifetimes |
| Deployment | `vercel.json` cron at 06:10 UTC; source runbook describes GitHub main triggering Vercel production; no .github CI workflow found | A push can publish; stop locally/PR-ready until explicit release authorization |
| Existing instructions | Root AGENTS.md has generated Next rules and image workflow link; no nested AGENTS found during discovery; `.codex/workflows/image-optimization.md` | Preserve both rules; root cross-cutting safeguards cover dispersed sensitive features |
| Existing docs | Product/information architecture, design, accessibility/performance/SEO, source runbook, copyright/publishing, Sheets admin, citation linking, feature reviews and Custom GPT prompt builder | Link existing guidance; reconcile older examples with executable code and the new human gate |

## Catholic modules and reuse

Existing modules include Confession and several examination flows; Rosary; Adoration and its companion; Mass journeys and reflections; Scripture prayer; saints; sacraments; indulgences; daily/nightly Examen; virtue tracking; rule of life; formation; liturgical living; Holy Week and fasting retreat.

Start with the matching route, component directory, data, types and lib files. Useful concrete examples:
- `components/ui/PrayerCard.tsx`: prayer text, copy callback and optional print action.
- `components/content/SourceNote.tsx`: source name, URL and notes; it displays evidence but cannot authenticate it.
- `components/mass/MassScripture.tsx` and `data/massScripture.json`: edition, reference, verses and source URL, with original commentary separately labeled.
- `components/rosary/RosaryScriptureForMeditation.tsx` and `MysteryReflectionQuestions.tsx`: feature-specific Scripture/reflection presentation.
- `components/reflections/ReflectionArticle.tsx`, `MassReflectionRichBody.tsx`, `MassReflectionPostLayout.tsx`: distinct reflection rendering paths.
- `lib/citationLinks.ts` and `scripts/audit-citations.ts`: linking/detection, not doctrinal verification.

## Sensitive information map

| Surface | Evidence | Required review |
| --- | --- | --- |
| Confession/examination | `lib/guidedExaminationStorage.ts`, `examinationSessionStorage.ts`, `examinationCompanionStorage.ts`: marked prompts, notes, sin details, last confession date/history | All answer/notes/report flows; clear across associated keys; print/clipboard exposure; no gravity or culpability scoring |
| Nightly Examen | `lib/dailyExamenStorage.ts`: draft and up to 90 saved sessions | Retention, consent, clear function, storage denial, no journal text in telemetry |
| Prayer intentions/chain/rooms | `prayerIntentionStorage.ts`, `prayerChainStorage.ts`, `prayerRoomPresence.ts` and local/mock UI | Identify local versus public behavior honestly; no automatic publication; future service requires moderation/data-flow review |
| Spiritual progress | `virtueTrackerStorage.ts`, `ruleOfLifeStorage.ts`, `sacramentPreparationStorage.ts`, `pathwayProgressStorage.ts`, `saintCompanionStorage.ts`, `holyWeekStorage.ts` | Minimize stored detail; do not infer holiness or spiritual standing; keep on-device where practical |
| Adoration | `adorationStorage.ts` local reports/submissions; external video embeds | Check intentional sharing and third-party requests, not just local storage |
| Contact | `app/api/contact/route.ts`, `lib/contact.ts`: sends submissions via Resend; request protection includes origin/user-agent checks, honeypot and in-memory rate limit | This form sends data off-device; inspect provider errors/logging and use synthetic QA data |
| Global telemetry | GA4 initialization and page tracker; cleanParams only removes null/undefined | Query strings and free-form event parameters are exposure paths; verify with network inspection before approving affected features |

## Known gaps and decisions, not changes made

1. Analytics path/query handling and unconstrained event params merit a separate privacy task. No claim is made that private text is currently transmitted; the exposure paths are visible in code.
2. The cron handler accepts a secret when configured, but falls back to request headers when absent in production. Review authentication separately; deployed configuration was not inspected.
3. The current README and architecture docs retain earlier static/mock descriptions. This audit records concrete differences without rewriting unrelated docs.
4. `SOURCE_OF_TRUTH.md` includes broad staging and push-to-main examples; the new workflow makes production authorization explicit before that sequence.
5. Local-only does not mean encrypted, private from shared-device users, or safe to include in logs/screenshots.
6. `test:navigation` depends on a localhost server, Edge and a machine-specific Playwright path outside package dependencies. Existing untracked browser scripts are not a portable CI suite.
7. Existing theological text and quotations were not re-certified. Source review must identify exact material and edition, not rubber-stamp everything already present.
8. No nested AGENTS added: content and sensitive logic span app/components/data/content/lib. Duplicated folder rules would create gaps; use root requirements plus feature reviews.

## Verification scope

This delivery changes instructions and Markdown only. See [IMPLEMENTATION-REPORT.md](IMPLEMENTATION-REPORT.md) for actual command results and limitations. No live-site inspection, external source research, deployment, IndexNow submission or calendar synchronization is needed for this documentation pilot.
