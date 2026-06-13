# Bing SEO and IndexNow

## Bing Webmaster Tools verification

1. Open Bing Webmaster Tools and add the `dailyoratory.faith` property.
2. Set `NEXT_PUBLIC_BING_VERIFICATION` in your environment.
3. Redeploy the site.
4. Confirm the rendered page source includes:

```html
<meta name="msvalidate.01" content="YOUR_VALUE" />
```

The value is environment-driven and is never hard-coded in the app.

## Sitemap submission

Submit this sitemap in Bing Webmaster Tools:

- `https://dailyoratory.faith/sitemap.xml`

The sitemap includes the homepage, navigation hubs, devotions, Rosary group pages, Rosary mystery pages, Bible, Daily Examen, sacraments, formation, media, saints, and other major learning pages.

## robots.txt

Daily Oratory exposes:

- `https://dailyoratory.faith/robots.txt`

It allows public crawling and points Bing to the sitemap.

## IndexNow setup

### Required environment variables

- `INDEXNOW_KEY`
- `INDEXNOW_SECRET`

### Public key file

If `INDEXNOW_KEY=abc123`, this URL must return plain text `abc123`:

- `https://dailyoratory.faith/abc123.txt`

This is handled automatically by the dynamic key-file route.

## How IndexNow works here

Daily Oratory includes:

- a public key file route
- a shared IndexNow utility in `src/lib/indexnow.ts`
- a protected manual API route at `src/app/api/indexnow/route.ts`
- a CLI submission script

The IndexNow payload uses:

- host: `dailyoratory.faith`
- key location: `https://dailyoratory.faith/{INDEXNOW_KEY}.txt`

## Manual API submission

Endpoint:

- `POST /api/indexnow`

Required header:

- `x-indexnow-secret: {INDEXNOW_SECRET}`

Example body:

```json
{
  "urls": [
    "https://dailyoratory.faith/bible",
    "https://dailyoratory.faith/devotions/holy-rosary"
  ]
}
```

Rules:

- maximum 100 URLs per request
- only `https://dailyoratory.faith/...` URLs
- private or admin paths are rejected
- external URLs are rejected
- malformed URLs are rejected

## CLI submission

Run:

```bash
npm run indexnow -- https://dailyoratory.faith/bible https://dailyoratory.faith/devotions/holy-rosary
```

This uses the shared IndexNow utility and the current environment variables.

## URLs that should not be submitted

Do not submit:

- external URLs
- Google Docs or source-document links
- private, admin, dashboard, or settings pages
- API routes
- malformed or non-canonical URLs

## Testing checklist

1. Confirm `https://dailyoratory.faith/robots.txt` loads.
2. Confirm `https://dailyoratory.faith/sitemap.xml` loads.
3. Confirm the Bing verification meta tag appears only when `NEXT_PUBLIC_BING_VERIFICATION` is set.
4. Confirm `https://dailyoratory.faith/{INDEXNOW_KEY}.txt` returns the key as plain text.
5. Confirm the IndexNow utility does not crash when `INDEXNOW_KEY` is missing.
6. Confirm `POST /api/indexnow` rejects requests without the correct `x-indexnow-secret`.
7. Confirm `POST /api/indexnow` rejects external or private URLs.
8. Confirm `npm run build` passes.
