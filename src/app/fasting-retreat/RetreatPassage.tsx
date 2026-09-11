import { getRetreatReading, SCRIPTURE_EDITION } from "@/content/fasting-retreat-scripture";
import s from "./retreat.module.css";
export function RetreatPassage({ id }: { id: string }) {
  const reading = getRetreatReading(id);
  return <section className={s.scripture} data-passage-id={reading.id}>
    <span className={s.eyebrow}>{id === "priestly-prayer" ? "Optional Scripture reading" : "Sacred Scripture"} · Douay–Rheims</span>
    <h2>{reading.reference}</h2>
    {id === "abide-chapter" && <p className={s.readingNote}>Includes the retreat’s John 15:1–11 reading, followed by the rest of the chapter.</p>}
    {reading.book === "PSA" && <p className={s.readingNote}>Psalm {reading.chapter} in the Douay–Rheims is Psalm {reading.chapter + 1} in many modern editions.</p>}
    {reading.verses.map(v => <p key={v.number} data-verse={v.number}><sup>{v.number}</sup> <span>{v.text}</span></p>)}
    <small>{SCRIPTURE_EDITION} · Public domain</small>
    <a href={reading.sourceUrl} target="_blank" rel="noreferrer">Verified source at eBible.org ↗</a>
  </section>;
}
