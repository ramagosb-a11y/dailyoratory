import Image from "next/image";
import Link from "next/link";
import styles from "./HomeArmorOfGodCta.module.css";

export function HomeArmorOfGodCta() {
  return <section className={styles.section} aria-label="The Armor of God guided prayer">
    <Link href="/armor-of-god" className={styles.card} aria-labelledby="home-armor-title" aria-describedby="home-armor-subtitle home-armor-scripture">
      <span className={styles.art}>
        <Image src="/images/armor-of-god/armor-chapel.webp" alt="" width={1536} height={1024} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 38vw, 420px" />
      </span>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Daily Oratory · Guided prayer</span>
        <h2 id="home-armor-title">The Armor of God</h2>
        <span id="home-armor-subtitle" className={styles.subtitle}>Clothed in Grace.<br />Strengthened in Faith.<br />Standing Firm in Christ.</span>
        <span id="home-armor-scripture" className={styles.reference}>Ephesians 6:10–20</span>
      </div>
      <span className={styles.action}>Enter the experience <span aria-hidden="true">→</span></span>
    </Link>
  </section>;
}
