# Three-Day Fasting Retreat — local preview

Open http://localhost:3000/fasting-retreat after running the local server.

## Design and behavior

Combines the daily overview from mockup 2 with the mobile prayer companion from mockup 5. Navy, warm gold, ivory serif headings, and the selected cinematic artwork carry through the overview, prayer reader, section drawer, and companion links.

Six chapters contain 56 sections: Welcome, Preparation, Day 1 with Jesus, Day 2 with Mary, Day 3 with St. Joseph and the Holy Family, and Closing. Each day follows Morning / Throughout the Day / Evening. Day endings stop at the next chapter overview.

The section drawer allows free navigation. Browser Back and deep links work. A versioned local bookmark saves the last section, reading position, and text size. The retreat does not store personal intentions, journal entries, or examination answers. The optional silence timer supports 1, 3, and 5 minutes with pause and reset.

Rosary, Adoration, Examination, four litanies, Angelus, and Divine Mercy open the existing application routes. A contextual return banner leads back to the retreat. Visiting a prayer is not treated as proof of completion.

## Content and attribution

Primary source: the opening edition of the user's [retreat document](https://docs.google.com/document/d/1LErqoZoh6CqF2OGTMtruZZvy2jy1n7bOLFc065VM5Lg/edit), with its day-specific Adoration guides. The simpler revised edition informed navigation and daily rhythm. Long prayers remain accessible in separate reading sections.

Scripture quotations use the public-domain [Douay–Rheims 1899 American Edition](https://ebible.org/engDRA/copyright.htm). Full chapter links accompany readings; the John 15 selection is explicitly identified as an excerpt. Psalm references follow Douay–Rheims numbering.

The fasting page includes a modest optional Lenten-style pattern and a non-food alternative, with health cautions. The optional indulgence section links to Vatican guidance and distinguishes sacramental Communion from spiritual Communion. No claim is made that opening an app fulfills an indulgence.

All 25 artworks are original generated compositions from the chosen image style. Editable PNG masters and the document capture are outside this repository's deployment path in ../output/fasting-retreat/.

## Image workflow

- npm run images:retreat — generates WebP assets with the installed sharp package at quality 88, preserving dimensions and alpha.
- npm run images:check — verifies all retreat image references resolve to WebP, rejects redundant PNG/JPEG originals in the feature's public folder, and searches source for stale references.
- The image check is part of prebuild.
- Next Image serves responsive sizes at quality 85. Existing applications retain their prior quality-75 default.
- Detailed conversion savings: [image-optimization.md](image-optimization.md).
- Existing public/src raster inventory: [existing-image-inventory.json](existing-image-inventory.json).
- Future feature workflow: [image-optimization.md](../../.codex/workflows/image-optimization.md), referenced by AGENTS.md.

## Local commands

1. npm run images:check
2. npm run typecheck
3. npm run test:retreat
4. npm run lint
5. npm run build
6. npm run start -- --hostname 0.0.0.0 --port 3000

No deployment, commit, push, or production changes were made. The new route is marked noindex while it is a local review preview. The existing /three-day-catholic-fasting-retreat page remains available.

The full-repository lint command currently reports 72 errors and 33 warnings in existing files outside the feature. New and modified feature files pass targeted ESLint. Deployment remains blocked until the repository-wide validation gate passes.

