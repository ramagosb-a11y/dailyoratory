import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { VaticanILearningCheck } from "@/components/vatican/VaticanILearningCheck";
import { vaticanPhotos } from "@/components/vatican/VaticanPhotos";
import { createPageMetadata } from "@/lib/metadata";
import styles from "@/components/vatican/VaticanI.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Vatican I | Faith, Reason, and the Ministry of the Pope",
  description: "Explore the First Vatican Council through a visual timeline, Dei Filius, Pastor Aeternus, papal infallibility, and short learning checks.",
  path: "/vatican-i",
});

const sources = {
  faith: "https://adfonteslibrary.org/work-council-vatican-i-dei-filius",
  pope: "https://adfonteslibrary.org/work-council-vatican-i-pastor-aeternus",
  archive: "https://www.vatican.va/archive/hist_councils/i-vatican-council/index.htm",
  history: "https://www.vaticannews.va/en/pope/news/2020-07/primacy-and-infallibility-150-years-after-vatican-i.html",
  communion: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html",
};

const moments = [
  ["1869", "The council gathers", "Pope Pius IX convenes the First Vatican Council amid challenges to Christian belief and debates about the Church’s authority."],
  ["24 April 1870", "Faith seeks understanding", "Dei Filius addresses God, revelation, faith, and reason."],
  ["18 July 1870", "The ministry of Peter", "Pastor Aeternus addresses papal primacy and infallibility."],
  ["1870", "A council interrupted", "War and the capture of Rome interrupt the council before its broader work can be completed."],
];

export default function VaticanIPage() {
  const photo = vaticanPhotos.basilicaInterior;
  return <div className={styles.page}>
    <div className={styles.breadcrumb}><Breadcrumbs items={[{ label: "The Vatican", href: "/vatican" }, { label: "Vatican I" }]} /></div>
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>The First Vatican Council <span>·</span> <span className={styles.heroDate}>1869–1870</span></p>
        <h1>Vatican <span>I</span></h1>
        <p className={styles.heroSubtitle}>Faith, reason &amp; the<br />ministry of the pope.</p>
        <div className={styles.heroArt}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 272px, 50vw" preload /><span className={styles.imageInscription} aria-hidden="true">Saint Peter’s Basilica · Rome</span></div>
        <div className={styles.heroArch} aria-hidden="true" />
        <p className={styles.heroDescription}>Can faith and reason work together? How does Christ preserve His Church in truth and unity? Explore a council shaped by these enduring questions.</p>
        <a className={styles.primaryButton} href="#the-story">Begin the journey <span aria-hidden="true">↓</span></a>
        <div className={styles.heroFacts}><span><strong>2</strong> principal documents</span><span><strong>1</strong> invitation to seek truth</span></div>
      </div>
      <p className={styles.photoCaption}>Saint Peter’s Basilica today · the setting of Vatican I · <a href="#photography">Photo credit</a></p>
    </header>

    <nav className={styles.chapterNav} aria-label="Explore this guide">
      <a href="#the-story"><span>01</span> The setting</a><a href="#faith-reason"><span>02</span> Faith &amp; reason</a><a href="#papal-ministry"><span>03</span> The pope</a><a href="#learning-check"><span>04</span> Test your understanding</a><a href="#reflect"><span>05</span> Reflect &amp; pray</a>
    </nav>

    <div className={styles.content}>
      <section id="the-story" className={styles.section} aria-labelledby="story-title">
        <div className={styles.sectionHeading}><p className={styles.kicker}>01 / A world in transition</p><h2 id="story-title">An old faith.<br />New questions.</h2></div>
        <div className={styles.introGrid}><p className={styles.lead}>The nineteenth century brought challenges to Christian belief and disagreements about the Church’s authority.</p><div><p>Rationalism, which treated human reason as the ultimate measure of religious truth, was an important concern. Vatican I addressed how Catholics could remain faithful while responding thoughtfully to a changing world.</p><a className={styles.textLink} href={sources.history}>Read the historical background <span aria-hidden="true">↗</span></a></div></div>
        <ol className={styles.timeline}>{moments.map(([date, title, description]) => <li key={title}><p className={styles.timelineDate}>{date}</p><h3>{title}</h3><p>{description}</p></li>)}</ol>
        <aside className={styles.note}><strong>A helpful distinction</strong><p>Vatican I’s two promulgated constitutions addressed doctrine rather than a general reform of the liturgy. The expanded readings and wider use of local languages associated with Vatican II belong to that later council and its implementation.</p></aside>
      </section>

      <div className={styles.documentsIntro}><p className={styles.kicker}>Two documents. Two enduring questions.</p><p>The summaries below explain the teachings in everyday language. They are paraphrases, not quotations from the council.</p></div>

      <section id="faith-reason" className={`${styles.section} ${styles.teaching}`} aria-labelledby="faith-title">
        <div className={styles.documentRail}><span className={styles.documentNumber} aria-hidden="true">I</span><p className={styles.kicker}>24 April 1870</p><h2 id="faith-title">Dei Filius</h2><p className={styles.documentSubtitle}>On the Catholic faith</p><a className={styles.textLink} href={sources.faith}>Read the English translation <span aria-hidden="true">↗</span></a><p className={styles.sourceNote}>Chapters 2–4 · Ad Fontes Library</p></div>
        <div className={styles.teachingBody}><h3>Can I believe<br />and still ask questions?</h3><p className={styles.lead}>Faith and reason can work together in the search for truth.</p><p><em>Dei Filius</em> affirmed that human reason can know God through creation. Revelation also communicates truths beyond reason’s unaided reach, including the mysteries God makes known about Himself.</p>
          <div className={styles.pairedCards}><article><span aria-hidden="true">✧</span><h4>Faith receives</h4><p>Faith involves freely trusting God who reveals, with the assistance of grace.</p></article><article><span aria-hidden="true">◎</span><h4>Reason explores</h4><p>Reason helps us examine the credibility of belief and deepen our understanding.</p></article></div>
          <p>Because God is the source of both revelation and human reason, genuine truth cannot contradict genuine truth.</p><div className={styles.takeaway}><span>Carry this with you</span><p>You can study, ask sincere questions, and seek understanding while growing in trust.</p></div>
        </div>
      </section>

      <section id="papal-ministry" className={`${styles.section} ${styles.teaching}`} aria-labelledby="pope-title">
        <div className={styles.documentRail}><span className={styles.documentNumber} aria-hidden="true">II</span><p className={styles.kicker}>18 July 1870</p><h2 id="pope-title">Pastor Aeternus</h2><p className={styles.documentSubtitle}>On the Church of Christ</p><a className={styles.textLink} href={sources.pope}>Read the English translation <span aria-hidden="true">↗</span></a><p className={styles.sourceNote}>Chapters 3–4 · Ad Fontes Library</p></div>
        <div className={styles.teachingBody}><h3>A ministry of<br />truth and unity.</h3><p><em>Pastor Aeternus</em> affirmed that the pope, as successor of Peter, possesses real authority to teach and govern the universal Church. Its stated purpose includes preserving unity and faithfully safeguarding the apostolic faith. The document also recognizes the proper authority of bishops in their own churches.</p>
          <div className={styles.infallibility}><p className={styles.kicker}>Understanding infallibility</p><h4>What does <em>ex cathedra</em> mean?</h4><p>Vatican I defined that the pope is protected from error when all of these conditions are met:</p><ol className={styles.conditions}>
            <li><span>01</span><p>He acts as shepherd and teacher <strong>of all Christians.</strong></p></li>
            <li><span>02</span><p>He exercises his <strong>supreme apostolic teaching authority.</strong></p></li>
            <li><span>03</span><p>He definitively teaches a doctrine concerning <strong>faith or morals.</strong></p></li>
            <li><span>04</span><p>He intends that doctrine to be held by <strong>the whole Church.</strong></p></li>
          </ol><p className={styles.limit}>This does not mean that the pope is sinless or that every interview, personal opinion, or administrative decision is infallible. The protection concerns a particular exercise of his teaching office.</p></div>
          <p>Other authentic Church teaching also deserves a faithful response, even when it is not expressed as an infallible definition. Vatican II explains this distinction in <a href={sources.communion}><em>Lumen Gentium</em>, 25</a>.</p>
        </div>
      </section>

      <section className={styles.bridge} aria-labelledby="bridge-title"><div><p className={styles.eyebrow}>Read the councils together</p><h2 id="bridge-title">The story continues<br />with Vatican II.</h2></div><div><p>Vatican II explicitly reaffirmed Vatican I’s teaching on the pope and developed a fuller account of bishops, their shared responsibility, and the whole People of God. Reading the councils together helps us understand papal leadership within the Church’s broader life of communion and mission.</p><a href={sources.communion} className={styles.bridgeSource}>Explore <em>Lumen Gentium</em>, 18–25 ↗</a><Link href="/vatican-ii" className={styles.primaryButton}>Discover Vatican II <span aria-hidden="true">→</span></Link></div></section>

      <section id="learning-check" className={styles.section} aria-labelledby="check-title"><p className={styles.kicker}>04 / Pause &amp; remember</p><h2 id="check-title">Make the ideas your own.</h2><p className={styles.sectionDescription}>Three short questions to revisit the essentials. Choose an answer to see an explanation.</p><VaticanILearningCheck /></section>

      <section id="reflect" className={`${styles.section} ${styles.reflection}`} aria-labelledby="reflect-title"><div><p className={styles.kicker}>05 / From learning to living</p><h2 id="reflect-title">A little space<br />for reflection.</h2><p>Consider these questions quietly, or bring them to a group discussion.</p><details className={styles.disclosure}><summary>Faith &amp; understanding</summary><ul><li>Have I ever treated questions as a threat to faith?</li><li>Where has learning helped me appreciate God more deeply?</li><li>How do I respond when understanding takes time?</li></ul></details><details className={styles.disclosure}><summary>Authority &amp; responsibility</summary><ul><li>How can Church authority help us grow in faith?</li><li>What responsibilities accompany the exercise of authority?</li><li>How can we discuss difficult teachings with honesty, humility, and charity?</li><li>What helps us distinguish Church teaching from commentary about it?</li></ul></details></div><aside className={styles.prayer} aria-labelledby="prayer-title"><span aria-hidden="true" className={styles.prayerCross}>✝</span><p className={styles.kicker}>Rest in prayer</p><h3 id="prayer-title">Lord Jesus,<br />deepen my trust.</h3><p>Lord Jesus, deepen my trust in You. Help me seek truth with an open mind, receive Your teaching with humility, and pray faithfully for those entrusted with guiding Your Church.</p><span className={styles.sourceNote}>A reflection prayer supplied for this guide</span></aside></section>

      <footer className={styles.resources}><p className={styles.kicker}>Continue your study</p><h2>Go to the sources.</h2><p>Explore the complete documents alongside these introductory summaries.</p><div className={styles.resourceLinks}><a href={sources.archive}>Vatican I official archive <span>Italian &amp; Latin texts ↗</span></a><a href={sources.faith}>Dei Filius <span>English translation ↗</span></a><a href={sources.pope}>Pastor Aeternus <span>English translation ↗</span></a><a href={sources.communion}>Lumen Gentium <span>Vatican II · English text ↗</span></a></div><p id="photography" className={styles.credit}>Photography: <a href={photo.source}>{photo.title}</a> by {photo.author} · <a href={photo.licenseUrl}>{photo.license}</a>. Existing photograph resized and converted to WebP; display crop varies. This contemporary photograph depicts the council’s setting, not a historical council session.</p><Link href="/vatican" className={styles.textLink}>← Return to the Vatican guide</Link></footer>
    </div>
  </div>;
}
