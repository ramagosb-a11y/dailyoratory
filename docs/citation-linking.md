# Citation Linking

## Bible references

- Bible references should link to the USCCB Bible book pages.
- Example: `John 3:16` links to `https://bible.usccb.org/bible/john/0`.
- Example: `1 Cor 13:4-8` links to `https://bible.usccb.org/bible/1corinthians/0`.

## Catechism references

- CCC references should link to the Vatican Catechism index.
- Use `https://www.vatican.va/archive/ENG0015/_INDEX.HTM`.
- Keep source text plain, such as `CCC 1996` or `Catechism of the Catholic Church 1996`.

## Content rules

- Keep internal content written as plain references like `John 3:16` or `CCC 1996`.
- Do not rewrite devotional or doctrinal content just to insert references.
- Do not copy long copyrighted Scripture passages from web sources.
- Do not run citation linking in metadata, canonical URLs, Open Graph metadata, or JSON-LD.

## Component usage

- Use `LinkedCitationText` for data-driven paragraphs, notes, and descriptions.
- Avoid using automatic citation linking inside navigation labels, button labels, or existing anchor tags.

## Release workflow

Run before major releases:

```bash
npm run audit:citations
npm run validate:urls
npm run build
```
