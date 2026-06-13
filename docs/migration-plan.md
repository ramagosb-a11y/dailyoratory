# Daily Oratory Migration Plan

This plan covers the migration from the legacy Brotherhood of Ascension site to Daily Oratory at `https://DailyOratory.faith`.

The goal is to preserve valuable Catholic formation content while reorganizing it into a quieter, more searchable Daily Oratory platform for prayer, reflection, liturgical living, sacramental preparation, and community.

## 1. Content Audit Plan

Inventory every legacy page before editing or redirecting it. The audit should answer three questions: what should be preserved, what should be merged, and what should be retired.

Required audit fields:

- Legacy page title
- Legacy URL
- New Daily Oratory destination
- Current parent section
- Proposed Daily Oratory section
- Content category
- Content type
- Liturgical season, if applicable
- Primary user intent
- SEO priority
- Canonical decision
- Duplicate or near-duplicate notes
- Pastoral or theological review status
- Copyright/source review status
- Last reviewed date
- Migration owner
- Redirect status

Audit priority:

1. High-prayer and sacramental pages: Rosary, Confession Guide, Adoration, Mass, Sacraments.
2. High-seasonal pages: Lent, Advent, Easter, Pentecost, Ordinary Time, Liturgical Calendar.
3. Evergreen formation pages: Sins, Habitual Sin, Resisting Temptation, Predominant Fault, Grace, Scripture.
4. Community pages: Live Rosary, Events, Local Faith Groups, Group Discussion Topics.
5. Supporting reference pages: Religious Orders, Nine Choirs of Angels, Temperaments, Eschatology.

Review rules:

- Keep Catholic identity clear and public.
- Do not copy copyrighted readings or long copyrighted source excerpts.
- Preserve public-domain traditional prayers when verified.
- Use original Daily Oratory summaries where old pages were thin, duplicated, or archive-like.
- Route sensitive pastoral topics through editorial review before publishing.

## 2. Old URL Inventory Process

Build the old URL list from several sources so no valuable page is missed.

Inventory sources:

- Existing Google Sites navigation and nested pages.
- Any Google Sites page list export available to the site owner.
- Browser crawl of the legacy domain.
- Google Search Console indexed pages.
- Google Analytics or traffic reports, if available.
- Backlink reports from SEO tools, if available.
- Manual review of old internal links.
- Existing Daily Oratory `legacyRedirects` in `src/data/redirects.ts`.

Process:

1. Create a working sheet using `docs/redirect-map-template.csv`.
2. Add every discovered legacy URL as one row.
3. Normalize URL paths by removing protocol, host, tracking parameters, and trailing slash unless the slash is the homepage.
4. Mark query-driven URLs as `Ignore`, `Canonicalize`, or `Redirect`.
5. Assign each URL a proposed Daily Oratory destination.
6. Mark duplicates that should collapse into one canonical destination.
7. Test all proposed destinations locally.
8. Add approved redirect rules to `src/data/redirects.ts`.
9. Run `npm run build` to verify Next.js accepts the redirect map.

URL normalization rules:

- Convert full old URLs to paths, for example `https://www.brotherhoodofascension.com/holy-rosary` becomes `/holy-rosary`.
- Lowercase paths unless a platform constraint requires otherwise.
- Remove `?utm_*`, `fbclid`, and other tracking parameters.
- Decode readable slugs, then re-slug with Daily Oratory slug rules.
- Preserve meaningful content slugs when they are already clean and accurate.

## 3. Content Category Mapping

| Legacy content family | New Daily Oratory destination | Notes |
| --- | --- | --- |
| Old prayer pages | `/pray` or `/library` | Use `/pray` for the prayer hub and `/library/[slug]` for specific long-form resources. |
| Prayers | `/pray` and `/library?category=Prayer` | Individual prayers can become prayer records or resource details. |
| Adoration and Benediction | `/adoration` | Live streams and Adoration prayers now live in the Adoration portal. |
| Holy Rosary | `/rosary` | Canonical Rosary hub. |
| Latin Rosary | `/rosary/latin-rosary` | Dedicated Latin Rosary guide. |
| Live Rosary Online | `/community/prayer-rooms/rosary` | Community prayer belongs in live prayer rooms. |
| Confession Guide | `/confession` | Canonical confession hub. |
| Sins | `/confession/sins` | Keep pastoral and non-alarmist. |
| Habitual Sin | `/confession/habitual-sin` | Keep gentle, practical, and sacramental. |
| Resisting Temptation | `/confession/resisting-temptation` | Keep under Confession Guide and formation. |
| Predominant Fault | `/confession/predominant-fault` | Keep self-knowledge and virtue framing. |
| Daily Mass Scripture Reflections | `/reflections/daily` | Do not copy copyrighted readings; use references and official external links. |
| Sunday Gospel Reflections | `/reflections/sunday` | Good for individual and group preparation. |
| Liturgical Calendar | `/liturgical-living/calendar` | Dashboard and calendar views handle liturgical living. |
| Advent, Lent, Easter, Pentecost, Ordinary Time | `/liturgical-living/seasons` | Add season-specific pages later if content depth warrants it. |
| Mass | `/library?q=mass` or future `/learn/mass` | Keep as formation content unless a dedicated Mass section is added. |
| Sacraments | `/sacraments` | Sacrament Preparation Companion is canonical. |
| Saints | `/saints` | Saint Companion Finder and saint profiles. |
| Devotions | `/library?q=devotions` | Keep devotional resources discoverable in Library. |
| Scripture | `/library?q=scripture` | Link reflections and prayer resources. |
| Spiritual Growth | `/pathways` | Guided Catholic formation pathways. |
| Virtue and vice content | `/virtue-tracker` or `/pathways/growing-in-virtue` | Tool pages for private reflection, pathways for teaching. |
| Religious Orders, Angels, Temperaments, Eschatology | `/library` | Treat as formation/reference resources. |
| Events | `/community/events` | Event listing and detail pages. |
| Local Faith Groups | `/community/local-faith-groups` | Directory pattern with moderation. |
| Group Discussion Topics | `/community/group-discussion-topics` | Prayerful formation conversation guides. |

## 4. Duplicate Content Cleanup Rules

Use one canonical page per user intent.

Merge when:

- Two pages answer the same question with overlapping content.
- A short archive page only links to a more complete page.
- A seasonal page repeats the same introduction as the season hub.
- Old navigation pages exist only as folders or indexes.

Keep separate when:

- The user intent is distinct.
- The page supports a specific sacramental or prayer workflow.
- The content has meaningful search demand and enough substance.
- The topic needs a unique pastoral note or disclaimer.

Retire when:

- The content is outdated, thin, duplicated, or no longer aligned with Daily Oratory.
- The page cannot be reviewed for copyright or theological accuracy.
- The page exists only because of the old Google Sites structure.

Canonical cleanup:

- Select one canonical Daily Oratory URL.
- Move the best content into that canonical page.
- Redirect all duplicate legacy URLs to the canonical URL.
- Remove public internal links to duplicate URLs.
- Keep duplicate notes in the migration sheet, not public copy.

## 5. Slug Naming Rules

Slug rules:

- Use lowercase letters, numbers, and hyphens.
- Keep slugs short, readable, and stable.
- Prefer user language over internal taxonomy.
- Avoid dates in evergreen slugs.
- Use dates in reflection slugs when needed, for example `/reflections/2026-05-08-fruit-that-remains`.
- Avoid brand names in content slugs unless the page is about Daily Oratory itself.
- Avoid vague slugs such as `/page-1`, `/resources-2`, or `/misc`.

Preferred patterns:

- Prayer hub: `/pray`
- Specific prayer resources: `/library/morning-offering`
- Rosary: `/rosary`, `/rosary/joyful-mysteries`
- Confession: `/confession/habitual-sin`
- Reflections: `/reflections/daily`, `/reflections/[date-topic]`
- Liturgical living: `/liturgical-living/calendar`
- Sacraments: `/sacraments/confirmation`
- Saints: `/saints/saint-augustine`
- Events: `/community/events/[event-slug]`

Slug conflict rules:

- If two old pages share the same desired slug, the broader or higher-value page gets the clean slug.
- The narrower page gets a clarifying slug.
- Redirect all old variants to the chosen canonical destination.

## 6. Redirect Map Schema

The working CSV template lives at `docs/redirect-map-template.csv`.

Required fields:

- `legacy_url`
- `legacy_path`
- `legacy_title`
- `legacy_section`
- `new_destination`
- `new_title`
- `new_section`
- `content_category`
- `redirect_type`
- `status`
- `seo_priority`
- `canonical_action`
- `duplicate_group`
- `notes`
- `review_owner`
- `last_checked`

Allowed `redirect_type` values:

- `301`
- `302`
- `410`
- `none`

Allowed `status` values:

- `Inventory`
- `Mapped`
- `Needs Review`
- `Implemented`
- `Verified`
- `Retired`

Allowed `canonical_action` values:

- `Keep`
- `Merge`
- `Redirect`
- `Retire`
- `Noindex`

Code source:

- Full redirect metadata lives in `src/data/redirects.ts`.
- Next.js runtime redirects are generated from `legacyRedirects`.
- `next.config.ts` imports `legacyRedirects` from `src/data/redirects.ts`.

Implementation rule:

```ts
export const legacyRedirects = redirectMap
  .filter((rule) => rule.status === "implemented" && rule.source !== rule.destination)
  .map(({ source, destination, permanent }) => ({
    source,
    destination,
    permanent,
  }));
```

Only implemented, non-self redirects should be active in Next.js. Planned rows remain in `redirectMap` for migration tracking, but should not be emitted into runtime redirects until verified.

## 7. SEO Preservation Plan

Preserve search equity by making the migration predictable for users and crawlers.

Pre-launch:

- Verify the legacy domain and `DailyOratory.faith` in Google Search Console.
- Export indexed URLs and top landing pages.
- Export top queries and pages from Search Console.
- Export traffic data from analytics, if available.
- Identify backlink targets that need exact redirects.
- Create 301 redirects for every valuable old URL.
- Generate the new XML sitemap.
- Confirm canonical metadata uses `https://DailyOratory.faith`.
- Confirm page titles and descriptions use Daily Oratory.
- Confirm no public metadata uses the legacy brand except migration context.

On-page SEO:

- Preserve the core topic and user intent of each valuable page.
- Improve titles without stuffing keywords.
- Write short descriptions that match the page purpose.
- Add internal links to related resources.
- Keep breadcrumbs clear.
- Link to official daily readings externally instead of copying readings.
- Add pastoral disclaimers where appropriate.

Technical SEO:

- Use 301 redirects for permanent migrations.
- Avoid redirect chains.
- Avoid redirecting every old URL to the homepage.
- Return 410 only for retired pages with no replacement and no search value.
- Keep `/robots.txt` crawlable.
- Submit the new sitemap after launch.
- Use Search Console Change of Address if the old domain property supports it.

Post-launch:

- Crawl old URLs and confirm final status is 200 after one 301.
- Check Search Console coverage daily for the first week.
- Watch 404s and add missing redirects quickly.
- Track ranking and traffic changes for top old pages.
- Update high-value external links when possible.

## 8. Launch Migration Checklist

Before launch:

- Content audit complete for all high-priority pages.
- Redirect map reviewed.
- `src/data/redirects.ts` updated.
- `next.config.ts` builds with redirects.
- New sitemap includes migrated canonical pages.
- Internal links point to Daily Oratory URLs.
- Public copy uses Daily Oratory.
- Migration docs are the only place the old brand appears intentionally.
- `npm run lint` passes.
- `npm run build` passes.
- Local smoke test covers `/`, `/pray`, `/rosary`, `/confession`, `/reflections`, `/liturgical-living/calendar`, `/sacraments`, `/saints`, `/community/events`, and `/library`.

Launch day:

- Deploy to production.
- Confirm `https://DailyOratory.faith` resolves.
- Confirm SSL is active.
- Confirm old domain redirects are active.
- Test top 25 old URLs.
- Submit sitemap in Search Console.
- Annotate launch date in analytics.

First 72 hours:

- Monitor 404s.
- Monitor redirect errors.
- Confirm Google can fetch the homepage and sitemap.
- Fix high-value broken redirects immediately.
- Keep the old site unchanged and read-only until confidence is high.

First 30 days:

- Review Search Console weekly.
- Update redirect map with discovered old URLs.
- Merge or improve thin migrated pages.
- Request updates to important backlinks when possible.
- Keep redirects in place indefinitely for valuable URLs.

## 9. Rollback Plan

Rollback should be rare, but the path must be clear.

Rollback triggers:

- Production deploy fails.
- Major navigation or rendering failure affects core pages.
- Redirects cause widespread 404s or loops.
- DNS or SSL issue prevents access to `DailyOratory.faith`.
- Critical public content error requires immediate removal.

Rollback steps:

1. Pause new content edits.
2. Revert to the last known good Vercel deployment.
3. If domain routing is the issue, temporarily point DNS back to the last working target.
4. Restore the previous redirect config if redirect loops are found.
5. Keep a read-only copy of the legacy site available privately for reference.
6. Log the incident, affected URLs, root cause, and fix.
7. Re-run the launch checklist before redeploying.

Rollback safety rules:

- Do not delete the legacy content inventory.
- Do not remove redirect work already verified as correct.
- Do not replace specific redirects with homepage redirects.
- Preserve the redirect CSV and `src/data/redirects.ts` history so fixes can be reapplied safely.
