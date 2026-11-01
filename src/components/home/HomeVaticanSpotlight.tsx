import Image from "next/image";
import Link from "next/link";
import styles from "./HomeVaticanSpotlight.module.css";

export function HomeVaticanSpotlight() {
  return (
    <section id="vatican-pilgrimage" aria-labelledby="home-vatican-title" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.art}>
          <Image src="/images/vatican/pilgrimage-dome.webp" alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1280px) 60vw, 740px" />
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>A journey of faith</p>
          <h2 id="home-vatican-title">A pilgrimage<br className={styles.desktopBreak} /> from home</h2>
          <p className={styles.description}>Step inside the Vatican through virtual tours, sacred art, and moments of prayer.</p>
          <Link href="/vatican" className={styles.button} aria-label="Begin exploring the Vatican">Begin Exploring</Link>
          <p className={styles.caption}>The Vatican · Daily Oratory</p>
        </div>
      </div>
    </section>
  );
}
