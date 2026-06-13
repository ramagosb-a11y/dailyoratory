# Daily Oratory Media Library Admin Guide

This guide explains how to prepare public media items for the Daily Oratory Media Library.

## Google Sheet Direction

Recommended future sheet name:

- `Daily Oratory Media Library Admin`

Suggested tabs:

1. `Media_Items`
2. `Media_Categories`
3. `Featured_Collections`
4. `Settings`
5. `Change_Log`
6. `Copyright_Review`

The current site build uses local data files first so the public experience stays stable. Those files are structured so they can later be generated from a Google Sheet export or an Apps Script JSON endpoint.

## For YouTube Videos

1. Open the video.
2. Click `Share`.
3. Copy the URL.
4. Paste it into the `YouTube URL` column.
5. If needed, store the extracted video ID in `YouTube Video ID`.

## For YouTube Playlists

1. Open the playlist.
2. Copy the playlist URL.
3. Paste it into the `YouTube URL` column.
4. If needed, store the playlist ID in `YouTube Playlist ID`.

## For Google Slides

Best option:

1. Open the Slides deck.
2. Choose `File > Share > Publish to web`.
3. Choose `Embed`.
4. Copy the published embed URL.
5. Paste it into `Google Slides Embed URL`.

Alternative:

1. Set sharing to `Anyone with the link can view`.
2. Paste the normal Slides URL into `Google Slides URL`.
3. The site will show an `Open Slides` button if an embed URL is not available yet.

## For Google Drive Images and Files

1. Upload the file to Google Drive.
2. Set sharing to `Anyone with the link can view`.
3. Copy the file link.
4. Paste it into `Google Drive File URL`.
5. Add `Alt Text`, `Source Name`, and `Copyright Status`.
6. If needed, store the extracted file ID in `Google Drive File ID`.

## Security Warning

Only add files intended to be public.

Do not add:

- private family photos
- private ministry documents
- internal planning files
- copyrighted files without permission
- anything containing personal information

## Copyright Review

Before marking an item approved:

1. confirm the file is intentionally public
2. confirm the copyright status
3. add license or permission notes when needed
4. make sure `Status` is `Approved`
5. make sure `Copyright Status` is not `needs-review` or `do-not-publish`

## Local Data Files Used Right Now

- [src/data/mediaLibrary.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\data\mediaLibrary.ts)
- [src/data/mediaCategories.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\data\mediaCategories.ts)
- [src/data/mediaCollections.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\data\mediaCollections.ts)
- [src/lib/media.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\lib\media.ts)

These files are the current source of truth until a Google Sheet export or Apps Script endpoint is connected.
