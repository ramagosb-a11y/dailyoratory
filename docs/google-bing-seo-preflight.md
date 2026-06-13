# Google and Bing SEO Preflight Checklist

## 1. Before submitting sitemap

Before submitting `https://dailyoratory.faith/sitemap.xml` to Google Search Console or Bing Webmaster Tools:

- Fix malformed URLs.
- Confirm `https://dailyoratory.faith/sitemap.xml` opens.
- Confirm `https://dailyoratory.faith/robots.txt` opens.
- Confirm the homepage loads.
- Confirm priority pages load.
- Confirm HTTPS works.
- Confirm no bad sitemap URLs like `/https://` or `%20https://`.
- Run `npm run seo:preflight`.
- Run `npm run build`.

## 2. URL rules

- Store internal routes as relative paths such as `/confession`.
- Generate absolute Daily Oratory URLs only at final output time.
- Use `absoluteUrl()` for sitemap URLs, canonical URLs, Open Graph URLs, and structured data URLs.
- Never concatenate multiple URLs into one string.
- Never allow `https://dailyoratory.faith/https://dailyoratory.faith/...`.

## 3. Internal href rules

- Internal `href` values in app code and data should stay relative.
- External links may remain absolute.
- Do not store Daily Oratory internal `href` values as absolute URLs inside data objects.
- Do not paste two URLs into one `href`.

## 4. Sitemap rules

- Sitemap should list canonical, indexable URLs only.
- Sitemap URLs must be absolute `https://dailyoratory.faith/...` URLs.
- Sitemap must not contain spaces, `%20https://`, `/https://`, duplicate domains, or joined URLs.
- Remove duplicates before final sitemap output.

## 5. robots.txt rules

- `robots.txt` should allow public crawling.
- `robots.txt` should reference `https://dailyoratory.faith/sitemap.xml`.
- Do not block major public pages.

## 6. Priority pages

Daily Oratory priority pages for SEO verification:

- `/`
- `/what-should-i-do`
- `/catholic-life`
- `/catholic-answers`
- `/prayers`
- `/confession`
- `/devotions/holy-rosary`
- `/sin-and-temptation`
- `/formation/grace`
- `/formation/eschatology`
- `/liturgical-living/lent`
- `/sacramental-emergency`
- `/prophecy-series`

## 7. How to run validation

Run:

```bash
npm run validate:urls
npm run check:priority-pages
npm run seo:preflight
npm run build
```

## 8. What to check in Google Search Console

- Sitemap submission succeeds.
- URL Inspection shows the canonical URL you expect.
- Priority pages are not reported as malformed or duplicate.
- Google sees the page as indexable after deployment.

## 9. What to check in Bing Webmaster Tools

- Sitemap submission succeeds.
- URL Inspection does not show duplicated domains or joined URLs.
- Priority pages load cleanly over HTTPS.
- IndexNow should be used only after malformed URLs are fixed.

## 10. When to request indexing

Request indexing only after:

- malformed URLs are fixed
- sitemap and robots are live
- canonicals are correct
- priority pages are live and load correctly
- `npm run seo:preflight` passes
- `npm run build` passes
