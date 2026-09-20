<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Required image workflow

When a feature adds or changes images, follow [`.codex/workflows/image-optimization.md`](.codex/workflows/image-optimization.md) before deployment. Convert eligible oversized PNG/JPEG assets to high-quality WebP or AVIF, update every reference, validate locally, and report storage savings before deploying.

## Daily Oratory development and editorial workflow

Use [docs/agents/README.md](docs/agents/README.md) for role responsibilities and [docs/features/README.md](docs/features/README.md) for stage selection and templates. The feature's approved DEVELOPMENT-SPEC is the implementation contract. Record actual owner authorization and the approved revision; do not invent approvals or ask again when the current instruction already explicitly approves that scope.

### Repository and implementation

- Confirm the canonical repository using SOURCE_OF_TRUTH.md; inspect git status and preserve existing user work. Do not implement in a historical deployment copy.
- Inspect related routes, components, data, types and helpers before adding anything. Reuse the existing architecture, visual language and content models; avoid broad refactors and unnecessary dependencies or paid services.
- Prefer existing Server Component/static/ISR patterns and small client islands. Preserve stable client-store snapshots and the build's rendering/cache safeguards.
- Keep experiences calm, mobile-first and accessible: semantic controls, clear keyboard focus, readable prayer text, appropriate accessible names/status and restrained motion.
- Report code changes separately from editorial changes. Never silently change theological meaning while restructuring UI.

### Catholic content

- Preserve Catholic theological accuracy. Never fabricate Scripture, Catechism citations, Church documents, saint quotations, indulgence conditions or historical claims.
- Do not materially rewrite approved theological/devotional text unless requested. Record exact content revisions and sources; distinguish quotations, paraphrases and original reflections.
- Require source research and independent theological review for new or materially changed Catholic claims. Give particular attention to Confession, mortal/venial sin, Eucharist, indulgences, sacramental requirements, liturgical rules, Scripture/CCC/saint quotations and private revelation.
- Distinguish doctrine, discipline, devotion and private revelation. Do not infer culpability, holiness or sacramental standing from app answers. Unverified material remains unresolved, not publication-ready.
- Follow docs/content-publishing-checklist.md. Source presence, existing publication and automated citation checks are not proof of authenticity, permission or theological approval.

### Privacy and safety

- Review examinations, journals, prayer intentions, personal reflections and saved spiritual progress for privacy. Keep sensitive information on-device whenever practical; accurately describe local storage and deletion limits.
- Never put private examination/journal/reflection/intention text in analytics, logs, URLs, metadata, external AI prompts, screenshots or committed fixtures. Use synthetic QA data.
- Inspect existing analytics callers and page-query capture when changing data flows. Specify allowed event parameters explicitly; local storage alone does not establish privacy.
- Make print, clipboard, export and public submission intentional; preserve moderation requirements and verify clearing, storage denial and corrupt-state behavior when affected.

### Verification and human gate

- Run appropriate tests, lint, typecheck and build before completing application changes; select additional checks from docs/features/README.md. For documentation-only changes, validate links, paths and diff and explain omitted runtime checks.
- Report failed/skipped checks honestly; do not weaken guards or claim source/citation tests prove theology. Independently review substantive implementation when possible and disclose when review is not independent.
- Stop at implementation or PR-ready for human review. Never automatically publish theological/devotional changes to production.
- Production pushes, merges or deployments require explicit owner authorization for the reviewed change. Pushing main can deploy; release examples in SOURCE_OF_TRUTH.md are not standing authorization. No paid service may be introduced without explicit approval.
