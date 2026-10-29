import { scripturePassages } from "@/data/armorOfGod";
import styles from "./ArmorOfGod.module.css";

/** Only quotations from the independently verified public-domain Scripture archive. */
export function ArmorScripture({ reference, compact = false }: { reference: string; compact?: boolean }) {
  const passage = scripturePassages[reference];
  return <figure className={compact ? styles.compactScripture : styles.scriptureFigure} aria-label={`Scripture: ${reference}`}>
    <figcaption className={styles.reference}>{reference} <span>· Douay-Rheims</span></figcaption>
    {passage && <>
      <blockquote className={styles.scripture}>{passage.text}</blockquote>
      <a className={styles.scriptureSource} href={passage.sourceUrl} target="_blank" rel="noopener noreferrer">Douay-Rheims American Edition of 1899 · Source ↗</a>
    </>}
  </figure>;
}
