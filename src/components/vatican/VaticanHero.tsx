import { TrackedLink } from "@/components/analytics/TrackedLink";
import Image from "next/image";
import { vaticanPhotos } from "./VaticanPhotos";
import styles from "./VaticanPage.module.css";

export function VaticanHero() {
  return (
    <>
    <section className={styles.hero} aria-labelledby="vatican-title">
      <div className={styles.heroArt}><Image src={vaticanPhotos.basilica.src} alt={vaticanPhotos.basilica.alt} fill preload quality={85} sizes="(max-width: 767px) 100vw, 55vw" /></div>
      <div className={styles.heroCopy}>
        <p className={styles.heroEyebrow}>Catholic formation</p>
        <h1 id="vatican-title">The Vatican</h1>
        <p className={styles.heroSummary}>
          Explore the spiritual, historical, and artistic heart of the Catholic Church.
        </p>
        <div className={styles.heroActions}>
          <a href="#virtual-tours" className={styles.goldButton}>
            Tour Saint Peter&apos;s Basilica
          </a>
          <a href="#watch-vatican-live" className={styles.outlineButton}>Watch Vatican Live</a>
          <a href="#vatican-history" className={styles.outlineButton}>
            Explore Vatican History
          </a>
        </div>
        <p className={styles.heroFoot}>Prayer · Pilgrimage · Sacred art</p>
      </div>
    </section>
    <div className={styles.intro}>
      <p>The Vatican is a place of prayer, pilgrimage, history, sacred art, and service to the universal Church. From Saint Peter&apos;s Basilica to the Sistine Chapel, from papal documents to live broadcasts, the Vatican invites visitors to encounter the beauty of faith and the mission of the Church.</p>
        <div className={styles.sourceNote}>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Note</p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Daily Oratory links to official Vatican resources, broadcasts, and virtual tours. External videos and tours remain
            the property of their respective sources.
          </p>
          <TrackedLink
            href="https://www.vatican.va/"
            external
            className="mt-4 inline-flex text-sm font-semibold text-navy underline decoration-gold/70 underline-offset-4"
            eventName="vatican_resource_click"
            eventParams={{ resource_name: "Vatican official site", page_path: "/vatican", section: "vatican-hero" }}
          >
            Open the official Vatican site
          </TrackedLink>
        </div>
    </div>
    </>
  );
}
