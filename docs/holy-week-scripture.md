# Sacred Hours Scripture

All 24 moments embed full readings from the public-domain Douay-Rheims, Challoner revision, 1899 American Edition, supplied by eBible.org (engDRA).

Edition and rights: https://ebible.org/engDRA/copyright.htm

The authoritative data is `src/data/holyWeekScripture.json`. Each passage includes its reference, source URL anchored to its first verse, and numbered verse text. HTML markup is removed and whitespace normalized; wording is preserved. The app does not fetch Scripture at runtime.

Original seed reference ranges are preserved. Additional approved readings include Mark 14:60–61 and 14:72, Isaiah 53:7 and 53:8–10, Matthew 27:50, the broader John 19:38–42, and Luke 24:13–35 for the combined Upper Room reflection. Approved excerpts contained within an existing full range are covered by that full range without a redundant block.

Verification: `node scripts/holy-week-scripture.mjs --verify` fetches the source chapters, checks every required verse, compares the JSON against the source text, and checks the final assembled moments. Verified totals: 24 moments, 41 passage blocks, 336 displayed verses (including verses repeated in different moments).

Browser verification covers Holy Monday, Last Supper, Annas and Caiaphas, and the Upper Room at 390px and 1440px widths. It compares all displayed verses to the authoritative data and checks for clipping and runtime errors. Type checking and production build passed.
