import Image from "next/image";
import { strongholdsPassageContext } from "@/data/strongholdsTeaching";
import { STRONGHOLDS_CORE_REFERENCE, STRONGHOLDS_CORE_VERSES } from "@/data/strongholdsPractice";
import { StrongholdsScripture } from "./StrongholdsScripture";
import styles from "./Strongholds.module.css";

export function StrongholdsCoreScripture({ compact = false }: { compact?: boolean }) {
  const reading = <StrongholdsScripture reference={STRONGHOLDS_CORE_REFERENCE} verseNumbers={STRONGHOLDS_CORE_VERSES} expandable={false} />;
  if (compact) return <details className={styles.coreDisclosure}><summary className="focus-ring">Our foundation · {STRONGHOLDS_CORE_REFERENCE}</summary>{reading}<p className={styles.small}>{strongholdsPassageContext}</p><p className={styles.small}>Bring your thoughts before Christ in prayer, and choose a practical response to His grace. Original devotional application.</p></details>;
  return <section id="scriptural-foundation" className={styles.coreScripture} aria-labelledby="strongholds-core-heading"><p className={styles.eyebrow}>The core message of Strongholds</p><figure className={styles.teachingArtwork}><Image className={styles.teachingImage} src="/images/strongholds/foundation.webp" alt="A devotional illustration of Saint Paul writing beside Scripture, a cross, and an open stone doorway" width={1536} height={1024} sizes="(max-width: 640px) 100vw, 640px" preload /><figcaption>Paul’s letter calls us to spiritual weapons and obedience to Christ. Original devotional illustration; not a reconstruction of a recorded event.</figcaption></figure><h2 id="strongholds-core-heading">{STRONGHOLDS_CORE_REFERENCE}</h2>{reading}<p className={styles.small}>{strongholdsPassageContext}</p><p className={styles.small}>Bring your thoughts before Christ in prayer, and choose a practical response to His grace. Original devotional application.</p></section>;
}
