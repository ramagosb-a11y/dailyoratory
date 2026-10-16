import { getStrongholdsScriptureExcerpt, strongholdsScriptureSource } from "@/lib/strongholdsScripture";
import styles from "./Strongholds.module.css";

export function StrongholdsScripture({ reference, verseNumbers, expandable = true }: { reference: string; verseNumbers?: readonly number[]; expandable?: boolean }) {
  const excerpt = getStrongholdsScriptureExcerpt(reference,verseNumbers);
  if (!excerpt) return <p className={styles.small}>Scripture reference: {reference}. Text unavailable; no unverified quotation is displayed.</p>;
  const { passage,verses } = excerpt;
  return <figure className={styles.scripture}>
    <figcaption className={styles.scriptureCaption}>{excerpt.reference} · Douay-Rheims, American Edition of 1899</figcaption>
    <blockquote>{verses.map(verse => <p key={verse.number}><sup aria-label={`Verse ${verse.number}`}>{verse.number}</sup> {verse.text}</p>)}</blockquote>
    {expandable && passage.verses.length > verses.length && <details className={styles.scriptureDetails}><summary className="focus-ring">Read the full passage · {passage.reference}</summary><blockquote>{passage.verses.map(verse => <p key={verse.number}><sup aria-label={`Verse ${verse.number}`}>{verse.number}</sup> {verse.text}</p>)}</blockquote></details>}
    {passage.numberingNote && <p className={styles.small}>{passage.numberingNote}</p>}
    <p className={styles.scriptureCredit}>Public-domain Bible text · <a className="focus-ring" href={passage.sourceUrl} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">Source: eBible.org (opens a new tab)</a> · <a className="focus-ring" href={strongholdsScriptureSource.rightsUrl} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">Rights statement</a></p>
  </figure>;
}
