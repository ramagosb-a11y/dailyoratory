**Daily Oratory Minimal Mass Readings Sheet**

Use the template workbook:

- [Daily-Oratory-Mass-Readings-Minimal-Template.xlsx](C:/Users/brent/OneDrive/Documents/Codex/Ascension/brotherhood-of-ascension/docs/Daily-Oratory-Mass-Readings-Minimal-Template.xlsx)
- [Daily-Oratory-Mass-Readings-Minimal-Template.csv](C:/Users/brent/OneDrive/Documents/Codex/Ascension/brotherhood-of-ascension/docs/Daily-Oratory-Mass-Readings-Minimal-Template.csv)

**Do you need the folder public?**

No. Not the whole folder.

For a first simple workflow, the easiest setup is:

- keep your working Drive folder private
- import the XLSX into Google Sheets
- later, if the site needs to read the sheet automatically, we can make only the sheet readable by link or use an Apps Script endpoint

**Minimum columns to fill**

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

**Allowed values**

`Reflection Type`

- `daily-mass`
- `sunday-mass`
- `solemnity`
- `feast-day`
- `memorial`
- `optional-memorial`
- `seasonal`

`Status`

- `draft`
- `scheduled`
- `published`
- `archived`

**Formatting**

- `Reflection Date`: `YYYY-MM-DD`
- `Slug`: lowercase with hyphens
- `Featured`: `TRUE` or `FALSE`
- `Body`: plain text, multiple paragraphs in one cell is fine

**Important**

Use Scripture references only. Do not paste full modern Bible readings into the sheet.

**Fastest way to use it**

1. Upload the `.xlsx` file to Google Drive.
2. Open it with Google Sheets.
3. Duplicate the sample row for each new reflection.
4. Keep reflections as `draft` until ready.

Once you have 2 to 5 real rows filled in, I can wire the importer around your exact sheet shape.
