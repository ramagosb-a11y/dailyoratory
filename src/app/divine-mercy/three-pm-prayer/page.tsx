import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./threePmPrayer.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "3 PM Prayer | The Hour of Great Mercy",
  description: "A quiet prayer for the Hour of Great Mercy, remembering the Passion and death of Jesus Christ at three o’clock.",
  path: "/divine-mercy/three-pm-prayer",
});

const prayerParagraphs = [
  "O Jesus, at this hour I remember Thy Passion and death upon the Cross.",
  "I adore Thee, my crucified Lord, and I thank Thee for the love with which Thou didst give Thy life for us.",
  "Through Thy sorrowful Passion, have mercy on me, on my family, on those for whom I have promised to pray, on sinners, on the dying, on the souls most in need of Thy mercy, and on the whole world.",
  "Pour forth upon us the grace that flowed from Thy pierced Heart.",
  "Forgive our sins, strengthen us in temptation, heal our wounds, and draw us ever closer to Thee.",
  "Jesus, I surrender to Thee everything that troubles me, everything I cannot control, and everything that lies ahead.",
];

export default function ThreePmPrayerPage() {
  return (
    <main className={styles.page}>
      <Image
        src="/images/divine-mercy/three-pm-hour-of-mercy-v1.0.2.png"
        alt="A crucifix in a quiet chapel at the Hour of Great Mercy"
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.backdrop} />
      <section className={styles.content}>
        <Link href="/divine-mercy/chaplet" className={styles.backLink}>Return to the Chaplet</Link>
        <div className={styles.prayerLayout}>
          <aside className={styles.imagePanel} aria-label="The Hour of Great Mercy devotional image">
            <Image
              src="/images/divine-mercy/three-pm-hour-of-mercy-v1.0.2.png"
              alt="A crucifix in a quiet chapel at the Hour of Great Mercy"
              fill
              sizes="(min-width: 860px) 42vw, 100vw"
              className={styles.panelImage}
            />
            <div className={styles.imageVeil} />
            <div className={styles.imageCaption}>
              <p>At three o’clock, pause with the Passion of Christ.</p>
              <small>The Hour of Great Mercy</small>
            </div>
          </aside>
          <article className={styles.prayerCard}>
          <header className={styles.header}>
            <div className={styles.emblem} aria-hidden="true"><span className={styles.cssCross} /><i /><b /></div>
            <p className={styles.eyebrow}>Divine Mercy devotion</p>
            <h1>3 PM <span>—</span> The Hour of Great Mercy</h1>
            <p>Pause with the Passion and death of Jesus Christ.</p>
          </header>

          <div className={styles.rule} />
          <div className={styles.prayer}>
            <p className={styles.opening}><strong>In the name of the Father, and of the Son, and of the Holy Ghost. Amen.</strong></p>
            {prayerParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className={styles.trust}><strong>Jesus, I trust in Thee.</strong><br /><strong>Jesus, I trust in Thee.</strong><br /><strong>Jesus, I trust in Thee.</strong></p>
            <p><em>For the sake of Thy sorrowful Passion,</em><br /><strong>have mercy on us and on the whole world.</strong></p>
            <p><strong>Sacred Heart of Jesus, I trust in Thee.</strong><br /><strong>Immaculate Heart of Mary, pray for us.</strong></p>
            <p className={styles.closing}><strong>In the name of the Father, and of the Son, and of the Holy Ghost. Amen.</strong></p>
          </div>
          <footer className={styles.footer}>
            <span>Pray slowly and with trust.</span>
            <Link href="/divine-mercy/chaplet">Pray the Divine Mercy Chaplet</Link>
          </footer>
          </article>
        </div>
      </section>
    </main>
  );
}
