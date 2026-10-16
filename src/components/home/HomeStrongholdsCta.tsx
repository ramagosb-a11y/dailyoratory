import Image from "next/image";
import Link from "next/link";
import { strongholdsPublished } from "@/data/strongholds";
import { STRONGHOLDS_CORE_REFERENCE } from "@/data/strongholdsPractice";
import styles from "./HomeStrongholdsCta.module.css";

export function HomeStrongholdsCta() {
  // Match the feature's editorial hold: visible in local previews, not Vercel discovery.
  if (!strongholdsPublished && process.env.VERCEL === "1") return null;
  return <section id="strongholds-home" className={styles.section} aria-label="Strongholds guided prayer">
    <Link href="/strongholds" className={styles.banner} aria-labelledby="home-strongholds-title" aria-describedby="home-strongholds-subtitle home-strongholds-scripture">
      <span className={styles.art}><Image src="/images/strongholds/sword-shield-burgundy.webp" alt="" width={1254} height={1254} sizes="(max-width: 639px) 112px, (max-width: 1023px) 180px, 240px" /></span>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Prayer for the interior battle</span>
        <h2 id="home-strongholds-title">Strongholds</h2>
        <span className={styles.rule} aria-hidden="true" />
        <span id="home-strongholds-subtitle" className={styles.subtitle}>Taking Every Thought Captive to Christ</span>
        <span id="home-strongholds-scripture" className={styles.scripture}>Rooted in {STRONGHOLDS_CORE_REFERENCE}</span>
      </div>
      <span className={styles.action}>Enter Strongholds <span aria-hidden="true">→</span></span>
    </Link>
  </section>;
}
