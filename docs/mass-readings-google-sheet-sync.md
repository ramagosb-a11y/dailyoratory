# Mass Readings Google Sheet Sync

Daily Oratory supports Mass Readings Reflections from the public Google Sheet. The current default sheet ID used by the site is `17sMLuAMjUYyEo0ZqSJBrLF3p-j-9e6Dbzn7UEfoMmr0`.

## How it works

- The site reads the `Mass_Readings_Reflections` tab directly from Google Sheets.
- If the sheet is unavailable, the app falls back gracefully to the built-in reflections already in the repository.
- The Cloudflare fallback branch uses GitHub Actions instead of Vercel cron.
- The action runs `npm run sync:mass-readings-calendar` to update the Google Calendar from the sheet.
- After the calendar sync succeeds, the action calls a Cloudflare Pages Deploy Hook so Cloudflare rebuilds the static export from `cloudflare-static`.
- The scheduled workflow is set for `7:20 UTC`, which is usually overnight in Chicago. GitHub scheduled workflows can drift by a few minutes.

## Automation flow

1. Update the `Mass_Readings_Reflections` Google Sheet.
2. GitHub Actions runs `Daily Cloudflare content sync` on schedule, or manually from the Actions tab.
3. The action syncs published and scheduled sheet rows into the Mass Readings Google Calendar.
4. The action triggers the Cloudflare Pages Deploy Hook.
5. Cloudflare rebuilds `out/`, so the static site receives the latest reflection pages and daily content.

## Required sheet access

- The whole Drive folder does not need to be public.
- The Google Sheet itself does need to be readable by link so the site can fetch it.
- The expected tab name is `Mass_Readings_Reflections`.
- Optional media can live in `Reflection_Media`.

## Environment variables

Required GitHub repository secrets for the automation:

- `GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
- `CLOUDFLARE_PAGES_DEPLOY_HOOK`

Optional GitHub repository secrets:

- `GOOGLE_SHEETS_MASS_READINGS_SHEET_ID`
- `MASS_READINGS_REFLECTIONS_SHEET_ID`
- `MASS_READINGS_GOOGLE_CALENDAR_ID`

If the sheet ID is changed from the default, set the same `GOOGLE_SHEETS_MASS_READINGS_SHEET_ID` value in Cloudflare Pages build environment variables so the deployed static build reads the same sheet.

## Google Calendar setup

- Create or reuse the Mass Readings Google Calendar.
- Share the calendar with the Google service account email.
- Grant the service account permission to make changes to events.
- Keep the calendar public only if the embedded public calendar should be visible to site visitors.

The sync manages only events marked by Daily Oratory metadata or the `[Managed by Daily Oratory sync]` description marker. It will not intentionally delete unrelated calendar events.

## Cloudflare Pages Deploy Hook

Create the deploy hook in Cloudflare Pages:

1. Open the `dailyoratory` Pages project.
2. Go to `Settings` then `Builds and deployments`.
3. Create a Deploy Hook for the `cloudflare-static` branch.
4. Add the generated URL as the GitHub repository secret `CLOUDFLARE_PAGES_DEPLOY_HOOK`.

## Minimum reflection columns

- `Reflection ID`
- `Title`
- `Slug`
- `Reflection Date`
- `Reflection Type`
- `Liturgical Day`
- `Liturgical Season`
- `First Reading Reference`
- `Psalm Reference`
- `Second Reading Reference`
- `Gospel Reference`
- `Theme`
- `Short Description`
- `Body`
- `Spiritual Invitation`
- `Prayer`
- `Featured`
- `Status`

## Status behavior

- `published`: visible now when `Reflection Date` is today or earlier
- `scheduled`: visible in upcoming when the date is in the future
- `draft`: not shown publicly
- `archived`: not shown publicly

## Notes

- Daily Oratory stores Scripture references only, not full modern lectionary texts.
- This sync is designed to be practical and forgiving: when the sheet is incomplete or temporarily unavailable, the public site should continue to work.
- Static hosting has no request-time regeneration. New sheet content appears publicly after the next Cloudflare rebuild.
