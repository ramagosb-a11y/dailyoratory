# Saint of the Day Improvement Plan

The homepage card should stay compact. Deeper saint details should live on the dedicated saint page.

## Option 1: Internal Saint of the Day data

- Store saint-of-the-day data in `C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\data\saintOfTheDay.ts` or continue expanding the existing saints data.
- Match saints by feast date.
- Keep the homepage card compact.
- Place full details on `/saints/saint-of-the-day`.
- Best long-term option because it keeps users inside Daily Oratory.

## Option 2: Saint profile pages

- If today's saint has a full profile, link directly to `/saints/[slug]`.
- If not, fall back to `/saints/saint-of-the-day` or `/saints`.
- Add more saint profiles over time so the fallback is needed less often.

## Option 3: External Saint of the Day resources

Add external resources on the full Saint of the Day page, not on the homepage card.

- Vatican News Saint of the Day: [https://www.vaticannews.va/en/saints.html](https://www.vaticannews.va/en/saints.html)
- Franciscan Media Saint of the Day: [https://www.franciscanmedia.org/saint-of-the-day/](https://www.franciscanmedia.org/saint-of-the-day/)
- CatholicSaints.Info: [https://catholicsaints.info/](https://catholicsaints.info/)
- My Catholic Life Saints: [https://mycatholic.life/saints/](https://mycatholic.life/saints/)

External links should open in a new tab, use `rel="noopener noreferrer"`, and be clearly labeled as external resources. Do not copy long biographies from these sites.

## Recommended future full page

Route:

- `/saints/saint-of-the-day`

Suggested sections:

- Today's saint name
- Feast day
- Short original biography
- Virtue to imitate
- One practical action
- Short original prayer
- Related Daily Oratory links
- External trusted saint resources
- Source and copyright note
