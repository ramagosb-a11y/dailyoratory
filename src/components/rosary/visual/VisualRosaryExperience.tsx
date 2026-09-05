"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { RosaryMystery, RosaryMysteryGroup, RosaryMysteryGroupSlug, RosaryPrayer } from "@/types/rosary";
import type { RosaryViewpoint } from "@/data/rosaryViewpoints";
import styles from "./VisualRosaryExperience.module.css";

type Props = {
  groups: RosaryMysteryGroup[];
  mysteries: RosaryMystery[];
  prayers: RosaryPrayer[];
  viewpoints: RosaryViewpoint[];
};

type PrayerStep = {
  id: string;
  title: string;
  latinTitle?: string;
  body: string;
  note: string;
  beadLabel: string;
  section: string;
  prayerSlug?: string;
  mysteryIndex?: number;
};

const groupLatin: Record<RosaryMysteryGroupSlug, string> = {
  "joyful-mysteries": "Mysteria Gaudiosa",
  "luminous-mysteries": "Mysteria Luminosa",
  "sorrowful-mysteries": "Mysteria Dolorosa",
  "glorious-mysteries": "Mysteria Gloriosa",
};

const groupDays: Record<RosaryMysteryGroupSlug, string> = {
  "joyful-mysteries": "Mondays & Saturdays",
  "luminous-mysteries": "Thursdays",
  "sorrowful-mysteries": "Tuesdays & Fridays",
  "glorious-mysteries": "Wednesdays & Sundays",
};

const latinPrayerFallbacks: Record<string, string> = {
  "apostles-creed": "Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae; et in Iesum Christum, Filium eius unicum, Dominum nostrum; qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus; descendit ad inferos; tertia die resurrexit a mortuis; ascendit ad caelos; sedet ad dexteram Dei Patris omnipotentis; inde venturus est iudicare vivos et mortuos. Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen.",
  "fatima-prayer": "O mi Iesu, dimitte nobis debita nostra, libera nos ab igne inferni, perduc in caelum omnes animas, praesertim eas quae misericordiae tuae maxime indigent.",
  "closing-prayer": "Deus, cuius Unigenitus per vitam, mortem et resurrectionem suam nobis salutis aeternae praemia comparavit: concede, quaesumus; ut haec mysteria sacratissimo beatae Mariae Virginis Rosario recolentes, et imitemur quod continent, et quod promittunt assequamur. Per eundem Christum Dominum nostrum. Amen.",
};

const senseNames = ["Sight", "Sound", "Smell", "Taste", "Touch", "Heart", "Soul"];
const senseLatin = ["Visus", "Auditus", "Olfactus", "Gustus", "Tactus", "Cordis", "Anima & Gratia"];
const senseIcons = ["◉", "◔", "♨", "♜", "✋", "♡", "✦"];

function buildPrayerSequence(mysteries: RosaryMystery[], prayers: RosaryPrayer[]): PrayerStep[] {
  const prayer = (slug: string) => prayers.find((item) => item.slug === slug);
  const fromPrayer = (slug: string, id: string, title: string, beadLabel: string, section: string, note: string, mysteryIndex?: number): PrayerStep => {
    const item = prayer(slug);
    return { id, title, latinTitle: item?.latin ? undefined : slug === "apostles-creed" ? "Credo in Deum" : undefined, body: item?.body ?? "", note, beadLabel, section, prayerSlug: slug, mysteryIndex };
  };

  const steps: PrayerStep[] = [
    fromPrayer("apostles-creed", "intro-creed", "Crucifix: Apostles' Creed", "✝", "Intro Prayers", "Holding the Crucifix, make the Sign of the Cross and recite the Apostles' Creed."),
    fromPrayer("our-father", "intro-pater", "Our Father (For the Holy Father)", "P", "Intro Prayers", "First large bead for the intentions of the Holy Father."),
    ...["Faith", "Hope", "Charity"].map((virtue, index) => fromPrayer("hail-mary", `intro-ave-${index + 1}`, `Hail Mary (For the Increase of ${virtue})`, `${index + 1}`, "Intro Prayers", `Small bead, praying for the theological virtue of ${virtue}.`)),
    fromPrayer("glory-be", "intro-gloria", "Glory Be", "G", "Intro Prayers", "Offer praise to the Father, Son, and Holy Spirit."),
  ];

  mysteries.forEach((mystery, index) => {
    const section = `${index + 1}${index === 0 ? "st" : index === 1 ? "nd" : index === 2 ? "rd" : "th"} Decade`;
    steps.push({ id: `mystery-${mystery.id}`, title: mystery.title, latinTitle: mystery.mysteryLabel, body: mystery.decadePrayer, note: `Announce the ${mystery.decadeLabel}: ${mystery.title}.`, beadLabel: "•", section, mysteryIndex: index + 1 });
    steps.push(fromPrayer("our-father", `${mystery.id}-pater`, "Our Father", "P", section, `Begin the ${section.toLowerCase()} with the Our Father.`, index + 1));
    for (let hail = 1; hail <= 10; hail += 1) steps.push(fromPrayer("hail-mary", `${mystery.id}-ave-${hail}`, `Hail Mary ${hail} of 10`, `${hail}`, section, `Remain with ${mystery.title} while praying this Hail Mary.`, index + 1));
    steps.push(fromPrayer("glory-be", `${mystery.id}-gloria`, "Glory Be", "G", section, "Return praise to the Holy Trinity.", index + 1));
    steps.push(fromPrayer("fatima-prayer", `${mystery.id}-fatima`, "Fatima Prayer", "•", section, "Optional customary prayer at the close of the decade.", index + 1));
  });

  steps.push(fromPrayer("hail-holy-queen", "conclusion-salve", "Hail Holy Queen", "•", "Conclusion", "Entrust the completed Rosary to the Blessed Virgin Mary."));
  steps.push(fromPrayer("closing-prayer", "conclusion-prayer", "Closing Prayer", "•", "Conclusion", "Conclude the Rosary and make the Sign of the Cross."));
  return steps;
}

export function VisualRosaryExperience({ groups, mysteries, prayers, viewpoints }: Props) {
  const [groupSlug, setGroupSlug] = useState<RosaryMysteryGroupSlug>("sorrowful-mysteries");
  const [mysteryIndex, setMysteryIndex] = useState(1);
  const [stepIndex, setStepIndex] = useState(0);
  const [largeText, setLargeText] = useState(false);
  const [language, setLanguage] = useState<"english" | "latin">("english");
  const [senseIndex, setSenseIndex] = useState(0);
  const [viewpointId, setViewpointId] = useState("");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndexOpen, setGalleryIndexOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [bookLanguage, setBookLanguage] = useState<"both" | "english" | "latin">("both");
  const [speaking, setSpeaking] = useState(false);
  const prayerPlayerRef = useRef<HTMLElement>(null);
  const activeBeadRef = useRef<HTMLButtonElement>(null);
  const senseContentRef = useRef<HTMLElement>(null);

  const orderedGroups = useMemo(() => [...groups].sort((a, b) => a.sortOrder - b.sortOrder), [groups]);
  const group = orderedGroups.find((item) => item.slug === groupSlug) ?? orderedGroups[0];
  const groupMysteries = useMemo(() => mysteries.filter((item) => item.groupSlug === groupSlug).sort((a, b) => a.sortOrder - b.sortOrder), [groupSlug, mysteries]);
  const mystery = groupMysteries[mysteryIndex - 1] ?? groupMysteries[0];
  const sequence = useMemo(() => buildPrayerSequence(groupMysteries, prayers), [groupMysteries, prayers]);
  const step = sequence[stepIndex] ?? sequence[0];
  const mysteryViewpoints = viewpoints.filter((item) => item.groupSlug === groupSlug && item.mysteryIndex === mysteryIndex);
  const currentViewpoint = mysteryViewpoints.find((item) => item.id === viewpointId) ?? mysteryViewpoints[0] ?? viewpoints[0];
  const globalViewpointIndex = Math.max(0, viewpoints.findIndex((item) => item.id === currentViewpoint?.id));
  const sensoryItems = [...(mystery?.sensoryMeditation ?? [])].sort((a, b) => a.sortOrder - b.sortOrder);
  const sense = sensoryItems[senseIndex] ?? sensoryItems[0];
  const currentPrayer = prayers.find((item) => item.slug === step?.prayerSlug);
  const latinText = currentPrayer?.latin ?? (step?.prayerSlug ? latinPrayerFallbacks[step.prayerSlug] : undefined);

  useEffect(() => {
    const bead = activeBeadRef.current;
    const beadRow = bead?.parentElement;
    if (!bead || !beadRow) return;
    const left = bead.offsetLeft - (beadRow.clientWidth - bead.offsetWidth) / 2;
    beadRow.scrollTo({ behavior: "smooth", left: Math.max(0, left) });
  }, [stepIndex]);
  useEffect(() => { if (!galleryOpen && !bookOpen) return; const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = previous; }; }, [bookOpen, galleryOpen]);

  const goToStep = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, sequence.length - 1));
    const nextMysteryIndex = sequence[nextIndex]?.mysteryIndex;
    if (nextMysteryIndex && nextMysteryIndex !== mysteryIndex) {
      setMysteryIndex(nextMysteryIndex);
      setSenseIndex(0);
      const first = viewpoints.find((item) => item.groupSlug === groupSlug && item.mysteryIndex === nextMysteryIndex);
      if (first) setViewpointId(first.id);
    }
    setStepIndex(nextIndex);
    window.requestAnimationFrame(() => {
      prayerPlayerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  const goToSense = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, sensoryItems.length - 1));
    if (nextIndex === senseIndex) return;
    setSenseIndex(nextIndex);
    window.requestAnimationFrame(() => {
      senseContentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      senseContentRef.current?.focus({ preventScroll: true });
    });
  };
  const chooseGroup = (slug: RosaryMysteryGroupSlug) => {
    setGroupSlug(slug); setMysteryIndex(1); setStepIndex(0); setSenseIndex(0);
    const first = viewpoints.find((item) => item.groupSlug === slug && item.mysteryIndex === 1); if (first) setViewpointId(first.id);
  };
  const chooseMystery = (index: number) => {
    setMysteryIndex(index); setSenseIndex(0);
    const first = viewpoints.find((item) => item.groupSlug === groupSlug && item.mysteryIndex === index); if (first) setViewpointId(first.id);
    const target = sequence.findIndex((item) => item.mysteryIndex === index); if (target >= 0) goToStep(target);
  };
  const moveGallery = (direction: number) => { const next = (globalViewpointIndex + direction + viewpoints.length) % viewpoints.length; const target = viewpoints[next]; setViewpointId(target.id); setGroupSlug(target.groupSlug); setMysteryIndex(target.mysteryIndex); setSenseIndex(0); };
  const speakSense = () => {
    if (!("speechSynthesis" in window) || !sense) return;
    window.speechSynthesis.cancel();
    if (speaking) { setSpeaking(false); return; }
    const utterance = new SpeechSynthesisUtterance(`${senseNames[senseIndex]}. ${sense.content.join(" ")}`);
    utterance.rate = 0.85;
    utterance.onend = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const sections = ["Intro Prayers", "1st Decade", "2nd Decade", "3rd Decade", "4th Decade", "5th Decade", "Conclusion"];

  return (
    <div className={styles.experience}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Daily Oratory · 7 Senses Rosary</p>
            <h1>Visual Rosary Meditation</h1>
            <p>Pray slowly. Enter the mystery. Contemplate Christ with Mary.</p>
          </div>
          <div className={styles.heroActions}>
            <button type="button" onClick={() => setBookOpen(true)}>▣ <span>Prayer Book</span></button>
            <span className={styles.version}>Preview 0.2.0</span>
          </div>
        </header>

        <section className={styles.panel} aria-labelledby="mystery-set-heading">
          <div className={styles.sectionHeading}>
            <div><p>Holy Rosary devotion</p><h2 id="mystery-set-heading">Select Mystery Set</h2></div>
            <span className={styles.today}>Today&apos;s devotion: <strong>The Sorrowful Mysteries</strong></span>
          </div>
          <div className={styles.setGrid}>
            {orderedGroups.map((item) => <button key={item.slug} type="button" className={item.slug === groupSlug ? styles.selectedCard : styles.choiceCard} onClick={() => chooseGroup(item.slug)} aria-pressed={item.slug === groupSlug}><strong>{item.title}</strong><em>{groupLatin[item.slug]}</em><span>{groupDays[item.slug]}</span>{item.slug === "sorrowful-mysteries" ? <b>Today</b> : null}</button>)}
          </div>
          <div className={styles.mysteryHeader}><h3>The 5 mysteries of the {group.shortTitle.toLowerCase()} mysteries</h3><span>Tap to contemplate</span></div>
          <div className={styles.mysteryGrid}>
            {groupMysteries.map((item, index) => <button key={item.id} type="button" onClick={() => chooseMystery(index + 1)} className={index + 1 === mysteryIndex ? styles.selectedMystery : styles.mysteryCard}><span>Decade {index + 1}</span><strong>{item.title}</strong><em>{item.mysteryLabel}</em><small>Fruit: {item.fruitOfMystery}</small></button>)}
          </div>
        </section>

        <nav className={styles.modeTabs} aria-label="Rosary experience sections">
          <a href="#prayer-player">◉ Prayer & Sacred Art</a><a href="#seven-senses">✦ 7 Senses</a><a href="#bead-strand">◈ Bead Strand</a>
        </nav>

        <section ref={prayerPlayerRef} id="prayer-player" className={`${styles.panel} ${styles.prayerPlayer}`}>
          <header className={styles.meditationHeader}>
            <div>
              <p>{group.title} · Prayer {stepIndex + 1} of {sequence.length}</p>
              <h2>{mystery.title}</h2>
              <em>{mystery.mysteryLabel}</em>
            </div>
            <div className={styles.playerSettings}>
              <button type="button" aria-pressed={largeText} className={largeText ? styles.activeSetting : ""} onClick={() => setLargeText((value) => !value)}>
                {largeText ? "Large text" : "Standard text"}
              </button>
              <button type="button" onClick={() => setLanguage((value) => value === "english" ? "latin" : "english")}>
                {language === "english" ? "English" : "Latin"}
              </button>
            </div>
          </header>

          <div className={styles.simpleProgress} role="progressbar" aria-label="Rosary prayer progress" aria-valuemin={1} aria-valuemax={sequence.length} aria-valuenow={stepIndex + 1}>
            <span style={{ width: `${((stepIndex + 1) / sequence.length) * 100}%` }} />
          </div>

          <div className={styles.playerBody}>
            <div className={styles.prayerArt}>
              <button type="button" className={styles.focalArt} onClick={() => setGalleryOpen(true)} aria-label={`Open ${currentViewpoint.title} in the full-screen gallery`}>
                <Image src={currentViewpoint.src} alt={`${mystery.title}: ${currentViewpoint.title}`} fill sizes="(max-width: 900px) 100vw, 900px" />
                <span>Currently viewing<strong>{currentViewpoint.title}</strong></span>
                <b aria-hidden="true">⛶</b>
              </button>
              <div className={styles.namedViewpoints} role="group" aria-label={`Choose a viewpoint for ${mystery.title}`}>
                {mysteryViewpoints.map((item, index) => (
                  <button key={item.id} type="button" className={item.id === currentViewpoint.id ? styles.activeNamedViewpoint : ""} aria-label={`Viewpoint ${index + 1}: ${item.title}`} aria-pressed={item.id === currentViewpoint.id} onClick={() => setViewpointId(item.id)}>
                    <span>{index + 1}</span>
                    <strong>{item.title}</strong>
                  </button>
                ))}
              </div>
            </div>

            <article className={`${styles.prayerText} ${largeText ? styles.largePrayerText : ""}`}>
              <header>
                <div>
                  <span>Prayer {stepIndex + 1} of {sequence.length}</span>
                  <strong>{step.title.replace(/^.*: /, "")}</strong>
                  {step.latinTitle ? <em>{step.latinTitle}</em> : null}
                </div>
                <span>{language.toUpperCase()}</span>
              </header>
              <blockquote>{language === "latin" && latinText ? latinText : step.body}</blockquote>
              <p>✦ {step.note}</p>
              <nav className={styles.playerControls} aria-label="Prayer navigation">
                <button type="button" className={styles.previousPrayer} onClick={() => goToStep(stepIndex - 1)} disabled={stepIndex === 0}>
                  <svg className={styles.navIcon} viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
                  Back
                </button>
                <button type="button" className={styles.continuePrayer} onClick={() => goToStep(stepIndex + 1)} disabled={stepIndex === sequence.length - 1}>
                  Continue
                  <svg className={styles.navIcon} viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </nav>
            </article>
          </div>
        </section>

        <section id="seven-senses" className={`${styles.panel} ${styles.senses}`}>
          <div className={styles.sectionHeading}><div><p>7 Senses contemplative method</p><h2>{mystery.title} <em>({mystery.mysteryLabel})</em></h2></div><button type="button" onClick={speakSense}>◖ {speaking ? "Stop Reflection" : "Listen to Sense Reflection"}</button></div>
          <blockquote className={styles.scripture}>“{mystery.scriptureSummary}”<footer>{mystery.scriptureReference}<strong>Spiritual Fruit: {mystery.fruitOfMystery}</strong></footer></blockquote>
          <div className={styles.senseTabs} role="tablist" aria-label="Seven contemplative senses">{sensoryItems.map((item, index) => <button key={item.id} role="tab" aria-selected={index === senseIndex} type="button" onClick={() => setSenseIndex(index)} className={index === senseIndex ? styles.activeSense : ""}><span>{senseIcons[index]}</span><strong>{index + 1}. {senseNames[index]}</strong><em>{senseLatin[index]}</em></button>)}</div>
          {sense ? <article ref={senseContentRef} tabIndex={-1} className={styles.senseContent}><header><h3>{senseIcons[senseIndex]} &nbsp;{senseIndex + 1}. {senseNames[senseIndex]} <em>({senseLatin[senseIndex]})</em></h3><span>Sense {senseIndex + 1} of 7</span></header><div>{sense.content.map((paragraph, index) => <p key={`${sense.id}-${index}`}>{paragraph}</p>)}</div><footer><button type="button" onClick={() => goToSense(senseIndex - 1)} disabled={senseIndex === 0}>Previous Sense</button><span>Remain here as long as grace invites you.</span><button type="button" onClick={() => goToSense(senseIndex + 1)} disabled={senseIndex === sensoryItems.length - 1}>Next Sense</button></footer>{senseIndex === sensoryItems.length - 1 ? <aside><strong>Contemplative Colloquy</strong><p>{mystery.optionalClosingPrayer}</p><b>Daily Resolution: {mystery.practiceToday}</b></aside> : null}</article> : null}
        </section>

        <section id="bead-strand" className={`${styles.panel} ${styles.strand}`}>
          <div className={styles.sectionHeading}><div><p>Interactive Rosary bead strand</p><h2>Prayer map</h2></div><span>Progress: <strong>{stepIndex + 1}</strong> / {sequence.length} prayers ({Math.round(((stepIndex + 1) / sequence.length) * 100)}%)</span></div>
          {sections.map((section) => { const indexed = sequence.map((item, index) => ({ item, index })).filter(({ item }) => item.section === section); const active = indexed.some(({ index }) => index === stepIndex); return <details key={section} open={active} className={active ? styles.activeStrand : ""}><summary>{section}<span>{active ? step.title : `${indexed.length} prayers`}</span></summary><div>{indexed.map(({ item, index }) => <button ref={index === stepIndex ? activeBeadRef : undefined} key={item.id} type="button" onClick={() => goToStep(index)} className={index === stepIndex ? styles.currentBead : index < stepIndex ? styles.completeBead : ""} aria-label={`Prayer ${index + 1}: ${item.title}`}><span className={styles.beadFace}>{item.id === "intro-creed" ? <span className={styles.beadCross} aria-hidden="true" /> : item.beadLabel}</span></button>)}</div></details>; })}
        </section>
      </div>

      {galleryOpen ? createPortal(<div className={styles.galleryModal} role="dialog" aria-modal="true" aria-label="Sacred perspective gallery"><button type="button" className={styles.modalClose} onClick={() => { setGalleryOpen(false); setGalleryIndexOpen(false); }} aria-label="Close gallery">×</button><div className={styles.galleryImage}><Image src={currentViewpoint.src} alt={`${mystery.title}: ${currentViewpoint.title}`} fill sizes="100vw" /></div><button type="button" className={styles.galleryPrev} onClick={() => moveGallery(-1)} aria-label="Previous artwork">‹</button><button type="button" className={styles.galleryNext} onClick={() => moveGallery(1)} aria-label="Next artwork">›</button><div className={styles.galleryCaption}><span>{group.title}</span><strong>{mystery.title}</strong><p>{currentViewpoint.title}</p><small>Viewpoint {mysteryViewpoints.findIndex((item) => item.id === currentViewpoint.id) + 1} of {mysteryViewpoints.length} · Artwork {globalViewpointIndex + 1} of 62</small><button type="button" className={styles.galleryBrowseButton} onClick={() => setGalleryIndexOpen((value) => !value)}><span className={styles.galleryBrowseIcon} aria-hidden="true" />Browse all 62</button></div>{galleryIndexOpen ? <aside className={styles.galleryIndex}><header><strong>All Sacred Viewpoints</strong><button type="button" onClick={() => setGalleryIndexOpen(false)}>×</button></header>{orderedGroups.map((set) => <div key={set.slug}><h3>{set.title}</h3>{mysteries.filter((item) => item.groupSlug === set.slug).sort((a, b) => a.sortOrder - b.sortOrder).map((item) => <section key={item.id}><h4>{item.title}</h4>{viewpoints.filter((view) => view.groupSlug === set.slug && view.mysteryIndex === item.decadeNumber).map((view) => <button key={view.id} type="button" onClick={() => { setViewpointId(view.id); setGroupSlug(view.groupSlug); setMysteryIndex(view.mysteryIndex); setGalleryIndexOpen(false); }}>{view.title}</button>)}</section>)}</div>)}</aside> : null}</div>, document.body) : null}

      {bookOpen ? createPortal(<div className={styles.bookBackdrop} role="dialog" aria-modal="true" aria-label="Catholic Rosary Prayer Book"><div className={styles.prayerBook}><header><div><p>▣ Catholic Rosary Manual</p><h2>Traditional Prayers of the Holy Rosary</h2></div><div><button type="button" className={bookLanguage === "both" ? styles.bookActive : ""} onClick={() => setBookLanguage("both")}>Both</button><button type="button" className={bookLanguage === "english" ? styles.bookActive : ""} onClick={() => setBookLanguage("english")}>English</button><button type="button" className={bookLanguage === "latin" ? styles.bookActive : ""} onClick={() => setBookLanguage("latin")}>Latin</button><button type="button" onClick={() => setBookOpen(false)} aria-label="Close prayer book">×</button></div></header><main>{prayers.map((item) => { const latin = item.latin ?? latinPrayerFallbacks[item.slug]; return <article key={item.id}><h3>{item.title}<em>{item.slug === "sign-of-cross" ? "Signum Crucis" : item.slug === "our-father" ? "Pater Noster" : item.slug === "hail-mary" ? "Ave Maria" : ""}</em></h3>{bookLanguage !== "latin" ? <section><strong>English</strong><p>{item.body}</p></section> : null}{bookLanguage !== "english" && latin ? <section><strong>Latin</strong><p>{latin}</p></section> : null}</article>; })}</main><footer><em>Ad Majorem Dei Gloriam (AMDG)</em><button type="button" onClick={() => setBookOpen(false)}>Close</button></footer></div></div>, document.body) : null}
    </div>
  );
}
