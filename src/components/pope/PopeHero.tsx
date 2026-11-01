import Image from "next/image";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import styles from "./PopePage.module.css";

export function PopeHero() {
  return <>
    <section className={styles.hero} aria-labelledby="pope-title">
      <div className={styles.heroImage}>
        <Image src="/images/vatican/st-peters.webp" alt="The dome and façade of Saint Peter’s Basilica overlooking Saint Peter’s Square" fill sizes="(max-width: 640px) 100vw, 780px" preload />
      </div>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Catholic formation</p>
        <h1 id="pope-title">The Pope</h1>
        <p className={styles.subtitle}>Understanding the Bishop of Rome and his service to the Church.</p>
        <p className={styles.intro}>
          Catholics understand the Pope as the Bishop of Rome, successor of Saint Peter, and visible sign of unity for the Church.
          His mission is not to replace Christ, but to serve Christ by strengthening the faithful, teaching the apostolic faith,
          and helping the Church remain united in truth and charity.
        </p>
        <div className={styles.heroActions}>
          <a href="#understand-the-papacy" className={styles.primary}>Understand the Papacy <span aria-hidden="true">↗</span></a>
          <TrackedLink href="https://www.vatican.va/content/leo-xiv/en/apost_exhortations.html" external className={styles.secondary}
            eventName="pope_resource_click" eventParams={{ resource_name: "Pope Leo XIV Documents", page_path: "/pope", section: "pope-hero" }}>
            Read Papal Documents
          </TrackedLink>
        </div>
        <a href="#pray-for-the-holy-father" className={styles.prayerLink}>Pray for the Holy Father <span aria-hidden="true">→</span></a>
      </div>
      <a className={styles.imageCaption} href="#pope-photo-credit">Saint Peter’s Basilica · Vatican City<br />Photography credits ↗</a>
    </section>
    <aside className={styles.note}><strong>Official sources</strong><p>Daily Oratory provides beginner-friendly summaries and links to official Vatican sources. For formal teaching and official texts, read the Vatican sources directly.</p></aside>
  </>;
}
