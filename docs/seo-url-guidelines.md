# SEO URL Guidelines

- Store internal links as relative paths such as `/bible`, `/daily-examen`, and `/devotions/holy-rosary`.
- Generate absolute URLs only at the final output stage for sitemap entries, canonical metadata, Open Graph URLs, Twitter images, and structured data.
- Never paste multiple URLs into one `href` or `url` field.
- Never store internal Daily Oratory links as `https://dailyoratory.faith/...` inside data files when a relative path will do.
- Use the shared `absoluteUrl()` helper in [src/lib/url.ts](/C:/Users/brent/OneDrive/Documents/Codex/Ascension/brotherhood-of-ascension/src/lib/url.ts) for public SEO output.
- Use `normalizeInternalHref()` before indexing or rendering internal route data from shared arrays.
- Filter malformed URLs out of the sitemap and internal search index instead of publishing them.
- Run `npm run validate:urls` before deployment.
- Run `npm run build` after URL or SEO changes and inspect `/sitemap.xml` for malformed patterns such as `/https://`, `%20https://`, duplicated hosts, or spaces.
