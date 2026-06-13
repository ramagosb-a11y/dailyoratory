# Mass Readings Google Sheet Sync

Daily Oratory now supports Mass Readings Reflections from the public Google Sheet with ID `1xKgFxs6_7R5n_M2x60CIVZsR1fzQwCEp`.

## How it works

- The site reads the `Mass_Readings_Reflections` tab directly from Google Sheets.
- If the sheet is unavailable, the app falls back gracefully to the built-in reflections already in the repository.
- A Vercel cron job hits `/api/cron/sync-mass-readings` every day at `6:10 UTC`.
- On a Vercel Hobby plan, cron jobs are limited to one run per day, so this is the best practical fit.
- That means the sync runs at:
  - `1:10 AM` in Chicago during daylight saving time
  - `12:10 AM` in Chicago during standard time
- If you want a true year-round `1:10 AM America/Chicago` refresh, you would need a scheduler that supports timezone-aware timing or more than one daily cron run.

## Required sheet access

- The whole Drive folder does not need to be public.
- The Google Sheet itself does need to be readable by link so the site can fetch it.
- The expected tab name is `Mass_Readings_Reflections`.
- Optional media can live in `Reflection_Media`.

## Environment variables

Optional overrides:

- `GOOGLE_SHEETS_MASS_READINGS_SHEET_ID`
- `MASS_READINGS_REFLECTIONS_SHEET_ID`

Optional cron protection:

- `CRON_SECRET`

If `CRON_SECRET` is set in Vercel, Vercel will send it to the cron route in the `Authorization` header.

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
