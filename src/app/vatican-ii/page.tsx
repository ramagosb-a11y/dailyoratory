import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import {
  vaticanIIArticle as article,
  vaticanIIComparison,
  vaticanIIDiscussionQuestions,
  vaticanIIPhotos,
  vaticanIISources,
  vaticanIITimeline,
  type VaticanIISourceId,
} from "@/data/vaticanII";
import styles from "@/components/vatican/VaticanIIArticle.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Vatican II and the Mass | Scripture, Liturgy and Participation",
  description: "Explore Vatican II and the Mass: the Council’s pastoral purpose, the expanded Scripture readings, Latin and vernacular, and deeper participation in the Church’s prayer.",
  path: "/vatican-ii",
  keywords: ["Vatican II", "Second Vatican Council", "Sacrosanctum Concilium", "Mass", "lectionary", "Latin and vernacular"],
});

function Citation({ source, children }: { source: VaticanIISourceId; children: ReactNode }) {
  return <a href={vaticanIISources[source].url} className={styles.citation}>{children}</a>;
}

function Chapter({ number, label }: { number: string; label: string }) {
  return <p className={styles.chapter}><span aria-hidden="true">{number}</span>{label}</p>;
}

function PhotoCredit({ photo }: { photo: keyof typeof vaticanIIPhotos }) {
  return <span>Lothar Wolleh · <a href={vaticanIIPhotos[photo].source}>Photograph {photo === "council" ? "005" : "006"}</a> · <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a></span>;
}

export default function VaticanIIPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.breadcrumbs}>
          <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Vatican II and the Mass" }]} />
        </div>
        <header className={styles.hero}>
          <figure className={styles.heroFigure}>
            <div className={styles.heroImage}>
              <Image src={vaticanIIPhotos.council.src} alt={vaticanIIPhotos.council.alt} width={1453} height={1453} preload quality={85} sizes="(max-width: 1000px) 100vw, (max-width: 1440px) 56vw, 752px" />
            </div>
            <figcaption><PhotoCredit photo="council" /></figcaption>
          </figure>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>The Second Vatican Council</p>
            <p className={styles.heroDates}>1962 <span aria-hidden="true">—</span><span className="sr-only">to</span> 1965</p>
            <h1>Vatican II<br /><span>and the Mass</span></h1>
            <p className={styles.subtitle}>{article.subtitle}</p>
            <p className={styles.heroIntroduction}>{article.introduction}</p>
            <div className={styles.heroActions}>
              <a href="#what-changed" className={styles.primaryButton}>Explore the Changes <span aria-hidden="true">↓</span></a>
              <a href="#sources" className={styles.secondaryButton}>Read the Council’s Teaching <span aria-hidden="true">↗</span></a>
            </div>
            <p className={styles.heroFoot}>History <span aria-hidden="true">/</span> Scripture <span aria-hidden="true">/</span> Worship</p>
          </div>
        </header>

        <section className={styles.purpose} aria-labelledby="purpose-title">
          <div><Chapter number="01" label="The purpose of renewal" /><h2 id="purpose-title">Entering more deeply<br />into the Church’s prayer.</h2></div>
          <div className={styles.prose}>
            {article.purpose.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <p className={styles.sourceLine}><Citation source="liturgy">Sacrosanctum Concilium §§14, 21–23</Citation><span aria-hidden="true"> · </span><Citation source="missal">Missale Romanum</Citation></p>
          </div>
        </section>

        <section className={styles.timelineSection} aria-labelledby="timeline-title">
          <div className={styles.sectionTop}><h2 id="timeline-title">A council. A constitution. A reform.</h2><p>The Council and its subsequent implementation</p></div>
          <ol className={styles.timeline}>
            {vaticanIITimeline.map(event => <li key={event.date} className={event.stage === "implementation" ? styles.implementation : undefined}>
              <p className={styles.timelineStage}>{event.stage === "council" ? "The Council" : "Implementation"}</p>
              <p className={styles.year}>{event.date}</p><h3>{event.title}</h3><p>{event.description}</p>
            </li>)}
          </ol>
          <p className={styles.sourceLine}><Citation source="history">Council dates</Citation><span aria-hidden="true"> · </span><Citation source="liturgy">Constitution on the liturgy</Citation><span aria-hidden="true"> · </span><Citation source="missal">Paul VI’s reform</Citation><span aria-hidden="true"> · </span><a className={styles.citation} href="https://www.usccb.org/resources/newsletter-2020-11-and-12.pdf">The 1970 edition (USCCB, PDF)</a></p>
        </section>

        <section id="what-changed" className={styles.section} aria-labelledby="comparison-title">
          <Chapter number="02" label="Continuity and renewal" />
          <h2 id="comparison-title">What changed in the<br />celebration of Mass?</h2>
          <p className={styles.sectionIntroduction}>{article.comparisonIntro}</p>
          <div className={styles.comparisonDesktop}>
            <table className={styles.comparison}>
              <caption className="sr-only">Selected features of the 1962 Roman Missal and the reformed Roman liturgy</caption>
              <thead><tr><th scope="col">At a glance</th><th scope="col">The 1962 Roman Missal</th><th scope="col">The reformed Roman liturgy</th></tr></thead>
              <tbody>{vaticanIIComparison.map(row => <tr key={row.area}><th scope="row">{row.area}</th><td>{row.earlier}</td><td>{row.reformed}</td></tr>)}</tbody>
            </table>
          </div>
          <div className={styles.comparisonMobile}>
            {vaticanIIComparison.map((row, index) => <article className={styles.comparisonPair} key={row.area}>
              <h3><span aria-hidden="true">0{index + 1}</span>{row.area}</h3>
              <dl><div><dt>The 1962 Roman Missal</dt><dd>{row.earlier}</dd></div><div><dt>The reformed Roman liturgy</dt><dd>{row.reformed}</dd></div></dl>
            </article>)}
          </div>
          <aside className={styles.historicalNote} aria-label="A note on the earlier readings">
            <p>{article.comparisonNote}</p><p className={styles.sourceLine}><Citation source="earlier">1962 Missal, General Rubrics nos. 298–305, 466–474, 509–510</Citation></p>
          </aside>
          <p className={styles.sourceLine}>For the reforms: <Citation source="liturgy">Sacrosanctum Concilium §§30, 50–54</Citation><span aria-hidden="true"> · </span><Citation source="missal">Missale Romanum</Citation><span aria-hidden="true"> · </span><Citation source="introduction">Lectionary Introduction §§64–69</Citation></p>
        </section>

        <section className={styles.scripture} aria-labelledby="scripture-title">
          <div className={styles.scriptureHeading}>
            <Chapter number="03" label="The table of God’s Word" /><h2 id="scripture-title">More Scripture.<br />A wider horizon.</h2><p>{article.scripture[0]}</p>
          </div>
          <figure className={styles.cycles}>
            <figcaption>The Sunday Gospel cycle</figcaption>
            <ol>{[["A", "Matthew"], ["B", "Mark"], ["C", "Luke"]].map(([year, gospel]) => <li key={year}>
              <span className={styles.cycleLetter} aria-hidden="true">{year}</span><div><p>Year {year}</p><h3>{gospel}</h3></div>
            </li>)}</ol>
            <p className={styles.johnNote}><strong>And the Gospel of John?</strong> John appears throughout the cycle, especially during Lent and Easter, and also in Mark’s year.</p>
          </figure>
          <div className={styles.scriptureDetails}>
            <div><h3>Weekdays have their own rhythm.</h3><p>{article.scripture[2]}</p></div>
            <div><h3>Hear the readings in conversation.</h3><p>{article.scripture[3]}</p></div>
          </div>
          <aside className={styles.scriptureNote}><span aria-hidden="true">✦</span><p>{article.scriptureNote}</p></aside>
          <p className={styles.sourceLine}><Citation source="liturgy">Sacrosanctum Concilium §51</Citation><span aria-hidden="true"> · </span><Citation source="lectionary">USCCB: Questions about the Lectionary</Citation><span aria-hidden="true"> · </span><Citation source="introduction">Lectionary Introduction §§64–69</Citation></p>
        </section>

        <section className={`${styles.section} ${styles.language}`} aria-labelledby="language-title">
          <div><Chapter number="04" label="Language and understanding" /><h2 id="language-title">Understanding<br />the words we pray.</h2><p className={styles.languageAside}>Latin, local languages<br />and the meaning of worship</p></div>
          <div className={styles.prose}>
            {article.language.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <p className={styles.sourceLine}><Citation source="liturgy">Sacrosanctum Concilium §§36, 54</Citation></p>
            <aside className={styles.reflection}><p className={styles.smallLabel}>Pause and consider</p><p>{article.languageQuestion}</p></aside>
          </div>
        </section>

        <section className={styles.participation} aria-labelledby="participation-title">
          <figure className={styles.participationFigure}>
            <Image src={vaticanIIPhotos.fathers.src} alt={vaticanIIPhotos.fathers.alt} width={1328} height={1328} quality={85} sizes="(max-width: 767px) 100vw, (max-width: 1376px) 45vw, 560px" />
            <figcaption>{vaticanIIPhotos.fathers.title}.<br /><PhotoCredit photo="fathers" /></figcaption>
          </figure>
          <div className={styles.participationCopy}>
            <Chapter number="05" label="Heart, voice and silence" /><h2 id="participation-title">The whole person.<br />The whole Church.</h2>
            <div className={styles.prose}>{article.participation.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
            <p className={styles.sourceLine}><Citation source="liturgy">Sacrosanctum Concilium §§14, 30, 47–48, 56</Citation><span aria-hidden="true"> · </span><Citation source="missal">Missale Romanum</Citation><span aria-hidden="true"> · </span><Citation source="participation">Mediator Dei §§105–108</Citation></p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.dailyLife}`} aria-labelledby="daily-life-title">
          <div className={styles.dailyLifeIntro}>
            <Chapter number="06" label="From worship into life" /><h2 id="daily-life-title">Carry the Word<br />into the week.</h2><p>{article.dailyLife}</p>
            <p className={styles.sourceLine}><Citation source="revelation">Dei Verbum §§21–25</Citation></p>
            <Link href="/reflections/reading-and-reflections" className={styles.textLink}>Read and reflect on the daily Scriptures <span aria-hidden="true">→</span></Link>
          </div>
          <div className={styles.discussion}>
            <h3>For reflection or conversation</h3><ol>{vaticanIIDiscussionQuestions.map((question, index) => <li key={question}><span aria-hidden="true">0{index + 1}</span><p>{question}</p></li>)}</ol>
          </div>
        </section>

        <section className={styles.prayer} aria-labelledby="prayer-title">
          <span className={styles.prayerCross} aria-hidden="true">✝</span><h2 id="prayer-title">An original prayer for reflection</h2>
          <p className={styles.prayerText}>{article.prayer}</p><p className={styles.prayerInvitation}>Rest quietly for a moment in God’s presence.</p>
        </section>

        <section id="sources" className={`${styles.section} ${styles.sources}`} aria-labelledby="sources-title">
          <Chapter number="07" label="Go to the sources" />
          <div className={styles.sourcesHeading}><h2 id="sources-title">Read the Council’s teaching.</h2><p>Begin with Sacrosanctum Concilium. These primary texts and Church resources offer a path for further study.</p></div>
          <div className={styles.sourceGrid}>{Object.entries(vaticanIISources).map(([id, source]) => <article key={id}>
            <p className={styles.smallLabel}>{source.publisher}</p><h3><a href={source.url}>{source.title}<span aria-hidden="true"> ↗</span></a></h3>
            <p>{source.subtitle}</p><p className={styles.readingGuide}>{source.reading}</p>
          </article>)}</div>
          <a className={styles.textLink} href="https://www.vatican.va/archive/hist_councils/ii_vatican_council/index.htm">Browse all Vatican II documents <span aria-hidden="true">↗</span></a>
        </section>

        <section id="photo-credits" className={styles.credits} aria-labelledby="credits-title">
          <h2 id="credits-title">Archival photography</h2>
          <p>Photographs by Lothar Wolleh, licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution–ShareAlike 3.0</a>. Converted to WebP; display crops vary by screen. These adaptations retain the same license. Original color and archival character preserved.</p>
          <ul>{Object.values(vaticanIIPhotos).map(photo => <li key={photo.src}><a href={photo.source}>{photo.title}</a> — Lothar Wolleh, Wikimedia Commons.</li>)}</ul>
        </section>
        <nav className={styles.related} aria-label="Continue learning">
          <Link href="/vatican">The Vatican <span aria-hidden="true">↗</span></Link><Link href="/councils#vatican-ii">Councils of the Church <span aria-hidden="true">↗</span></Link><Link href="/mass">Understand the Mass <span aria-hidden="true">↗</span></Link>
        </nav>
      </main>
    </div>
  );
}
