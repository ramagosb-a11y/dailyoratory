# Daily Oratory SEO QA Checklist

Use this checklist for every public page and every migration batch.

## Metadata

- Page has a descriptive title.
- Page has a descriptive meta description.
- Metadata uses `createPageMetadata` unless the route needs custom dynamic metadata.
- Canonical URL points to the preferred Daily Oratory URL.
- Open Graph title, description, URL, and image are present.
- Twitter summary card metadata is present.
- Public metadata uses Daily Oratory branding.

## Indexing

- Canonical public pages are indexable.
- Private, admin, duplicate, print, and utility pages are noindexed when appropriate.
- Redirect-only legacy routes are not listed in the sitemap.
- Query/filter URLs are not promoted for indexing.
- Retired pages use a specific redirect or intentional removal plan.

## Sitemap And Robots

- `/sitemap.xml` includes canonical public pages.
- Dynamic content pages are included where they are intended for search.
- Sitemap entries are deduped.
- Sitemap entries have reasonable `lastModified`, `changeFrequency`, and `priority`.
- `/robots.txt` links to the sitemap.
- Robots discourages duplicate query crawls and private/admin surfaces.

## Slugs And URLs

- Slugs are lowercase, readable, and hyphenated.
- Evergreen URLs do not include unnecessary dates.
- Reflection URLs may include dates when helpful.
- Old URLs map to the closest user intent, not automatically to the homepage.
- Redirect chains are avoided.

## Content

- Every page has one clear user intent.
- The first screen makes the topic obvious.
- Headings are descriptive.
- Internal links point to related prayer, reflection, formation, sacrament, saint, community, or library resources.
- Related resources appear on long-form content where helpful.
- Scripture readings are referenced and linked externally rather than copied.
- Sensitive pastoral topics include appropriate disclaimers.

## Migration QA

- Old URL inventory is complete for the migration batch.
- Redirect map rows include source, destination, status, SEO priority, and canonical action.
- `src/data/redirects.ts` includes approved implemented redirects.
- Planned redirects stay out of runtime redirects until verified.
- Top legacy URLs are tested manually after deployment.
- Search Console is monitored for 404s and indexing changes.

## Final Checks

- Run `npm run lint`.
- Run `npm run build`.
- Open `/sitemap.xml`.
- Open `/robots.txt`.
- Inspect metadata for `/`, `/rosary`, `/confession`, `/reflections`, `/library`, and one dynamic detail page.
- Confirm no public-facing legacy brand references remain.
