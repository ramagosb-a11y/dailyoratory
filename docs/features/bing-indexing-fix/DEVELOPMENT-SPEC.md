# Bing indexing fix

Revision 1, 2026-10-03. Owner instruction: "fix this and number 1" authorizes implementation of the Reading and Reflections indexing fix and proposal item 1. Production release is not yet authorized.

Scope: remove the explicit noindex from /reflections/reading-and-reflections; allow indexing/following for /fasting-retreat; use self-referencing canonicals for the retreat and /rosary/visual-meditation; retain Rosary preview noindex/nofollow; include the two public pages in the sitemap by removing their exclusions. Preserve all prayer text, journal storage, analytics, rendering and navigation. No IndexNow integration or external submissions in this revision.

Acceptance: built public routes allow indexing and self-canonicalize; Rosary preview remains excluded from indexing and sitemap; public routes occur in built sitemap; personal journal values are never server-rendered into metadata or sitemap.

Reviews: Site/SEO inspected metadata helper, route metadata, sitemap/navigation and proxy. Privacy inspected the on-device journal client and confirmed no data-flow change. Engineering inspected bundled Next metadata documentation and inheritance. Theology and UX stages are not applicable: no content or UI changes. Review performed by implementing Codex agent, not independent; human review remains pending.

Validation: lint, typecheck, build, URL/SEO checks, existing reading/reflections and retreat tests, built-response metadata/sitemap checks. Stop at reviewed local implementation; release requires separate owner authorization per AGENTS.md and SOURCE_OF_TRUTH.md.

Production authorization: owner explicitly instructed on 2026-10-03, 'commit deploy to production and main, not preview'. This supersedes the pending release status above.
