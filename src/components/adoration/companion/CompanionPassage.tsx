import { getCompanionPassage, companionScriptureEdition } from '@/data/companionReadings';
import styles from './AdorationCompanion.module.css';

export function CompanionPassage({ passageId }: { passageId: string }) {
  const passage = getCompanionPassage(passageId);
  return <section className={styles.completePassage} data-passage-id={passage.id} aria-label={passage.reference}>
    <p className={styles.eyebrow}>Sacred Scripture</p>
    <p className={styles.editionLabel}>{companionScriptureEdition}</p>
    <h4>{passage.reference}</h4>
    {passage.verses.map(verse => <p className={styles.numberedVerse} data-verse={verse.number} key={verse.number}><sup aria-label={`Verse ${verse.number}`}>{verse.number}</sup><span>{verse.text}</span></p>)}
    <a href={passage.sourceUrl} target="_blank" rel="noreferrer">Source: eBible.org ↗<span className="sr-only"> (opens in a new tab)</span></a>
  </section>;
}
