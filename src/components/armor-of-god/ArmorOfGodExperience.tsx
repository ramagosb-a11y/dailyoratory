"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { armorPieces, armorJourneys, armorStruggles, armorStages, catholicSources, armorContemplationText } from "@/data/armorOfGod";
import type { ArmorCardSummary, ArmorId, ArmorStruggle } from "@/types/armorOfGod";
import { ArmorArtwork, ArmorSymbol } from "./ArmorArtwork";
import { ArmorPhoto } from "./ArmorPhoto";
import { ArmorPrayer, SurrenderPrayer, type PrayerMode } from "./ArmorPrayer";
import { ArmorSummaryCard } from "./ArmorSummaryCard";
import { ArmorScripture } from "./ArmorScripture";
import { Contemplation } from "./Contemplation";
import styles from "./ArmorOfGod.module.css";

type View = "home" | "choose" | "journey" | "explore" | PrayerMode | "surrender" | "silence";
type JourneyProgress = { ids: string[]; index: number; stage: number; card: boolean; done: boolean };
const blankJourney: JourneyProgress = { ids: [], index: 0, stage: 0, card: false, done: false };

function summaryFor(struggle: ArmorStruggle): ArmorCardSummary {
  return { struggleId: struggle.id, title: struggle.title, armorNames: struggle.armorIds.map(id => armorPieces.find(piece => piece.id === id)!.name), scriptureReference: struggle.scriptureReference, prayer: struggle.prayer, dailyAction: struggle.dailyAction };
}

export function ArmorOfGodExperience({ introduction }: { introduction: ReactNode }) {
  const [view, setView] = useState<View>("home");
  const [theme, setTheme] = useState<"midnight" | "ivory">("midnight");
  const [selected, setSelected] = useState<string[]>([]);
  const [group, setGroup] = useState<string>("peace");
  const [notice, setNotice] = useState("");
  const [journey, setJourney] = useState<JourneyProgress>(blankJourney);
  const [activeArmor, setActiveArmor] = useState<ArmorId>("belt");
  const [explored, setExplored] = useState<ArmorId[]>([]);
  const region = useRef<HTMLDivElement>(null);
  const selectionTools = useRef<HTMLDivElement>(null);
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) { initial.current = false; return; }
    const heading = region.current?.querySelector<HTMLElement>(view === "home" ? "h1" : "h2");
    heading?.focus({ preventScroll: true });
    if (view === "home") window.scrollTo({ top: 0, behavior: "instant" });
    else region.current?.scrollIntoView({ behavior: "instant", block: "start" });
  }, [view, journey.stage, journey.index, journey.card, journey.done]);

  useEffect(() => {
    const tools = selectionTools.current;
    const content = region.current;
    if (view !== "choose" || !tools || !content) return;
    const observer = new ResizeObserver(() => {
      content.style.setProperty("--selection-offset", `${tools.getBoundingClientRect().height + 24}px`);
    });
    observer.observe(tools);
    return () => { observer.disconnect(); content.style.removeProperty("--selection-offset"); };
  }, [view]);

  function go(next: View) { setNotice(""); setView(next); }
  function choose(journeyId = "peace") { setGroup(journeyId); go("choose"); }
  function toggle(id: string) {
    if (selected.includes(id)) { setSelected(items => items.filter(item => item !== id)); setNotice(""); }
    else if (selected.length < 3) { setSelected(items => [...items, id]); setNotice(""); }
    else setNotice("You may choose up to three situations. Remove one to choose another.");
  }
  function begin() {
    if (!selected.length) { setNotice("Choose at least one situation to begin."); return; }
    setJourney({ ...blankJourney, ids: [...selected] }); go("journey");
  }
  function removeSelection(id: string) {
    toggle(id);
    window.requestAnimationFrame(() => document.getElementById("armor-selection-heading")?.focus({ preventScroll: true }));
  }
  function explore(id: ArmorId) { setActiveArmor(id); setExplored(items => items.includes(id) ? items : [...items, id]); }
  function revealArmor(id: ArmorId, alwaysReveal = false) {
    explore(id);
    if (!alwaysReveal && !window.matchMedia("(max-width: 680px)").matches) return;
    window.requestAnimationFrame(() => {
      const heading = document.getElementById("armor-detail-heading");
      heading?.focus({ preventScroll: true });
      heading?.closest("article")?.scrollIntoView({ block: "start", behavior: "instant" });
    });
  }
  function nextArmor() {
    revealArmor(armorPieces[(armorPieces.findIndex(piece => piece.id === activeArmor) + 1) % armorPieces.length].id, true);
  }
  function focusSelection(target: "summary" | "choices") {
    const heading = document.getElementById(target === "summary" ? "armor-selection-heading" : `armor-group-heading-${group || "peace"}`);
    heading?.focus({ preventScroll: true });
    heading?.scrollIntoView({ block: "start", behavior: "instant" });
  }
  const struggle = armorStruggles.find(item => item.id === journey.ids[journey.index]);
  const armor = armorPieces.find(piece => piece.id === activeArmor)!;
  const source = struggle?.teaching ? catholicSources.find(item => item.id === struggle.teaching!.sourceId) : undefined;

  return <div className={styles.experience} data-theme={theme}>
    <header className={styles.topbar}>
      <Link href="/" className={styles.wordmark}><span className={styles.wordmarkCross} aria-hidden="true">✝</span><span>Daily Oratory<small>A quiet place to pray</small></span></Link>
      <div className={styles.topbarActions}><Link href="/">← Home</Link><button type="button" onClick={() => setTheme(value => value === "midnight" ? "ivory" : "midnight")} aria-label={theme === "midnight" ? "Use light appearance" : "Use dark appearance"}>{theme === "midnight" ? "Light" : "Dark"}</button></div>
    </header>
    <nav className={styles.featureNav} aria-label="Armor of God experiences">
      {([['home', 'Welcome'], ['choose', 'My situations'], ['explore', 'The six pieces'], ['morning', 'Daily prayers'], ['surrender', 'Surrender'], ['silence', 'Silence']] as const).map(([target, label]) => <button type="button" key={target} aria-current={view === target || (target === "choose" && view === "journey") || (target === "morning" && (view === "midday" || view === "evening")) ? "page" : undefined} onClick={() => target === "choose" ? choose() : target === "explore" ? (explore(activeArmor), go("explore")) : go(target)}>{label}</button>)}
    </nav>

    <div ref={region} className={styles.content}>
      {view !== "home" && <h1 className="sr-only">The Armor of God</h1>}
      {view !== "home" && <div className={styles.returnRow}><button type="button" onClick={() => go("home")}>← Return to The Armor of God</button>{journey.ids.length > 0 && view !== "journey" && <button type="button" onClick={() => go("journey")}>{journey.done ? "View my cards" : "Resume my prayer"}</button>}</div>}
      {view === "home" && <>
        <section className={styles.hero}>
          <div className={styles.heroCopy}><p className={styles.eyebrow}>Ephesians 6:10–20 · A Catholic prayer experience</p><h1 tabIndex={-1}>The Armor<br /><em>of God</em></h1><p className={styles.subtitle}>Clothed in Grace. Strengthened in Faith.<br />Standing Firm in Christ.</p><p className={styles.centralMessage}>Protect your peace without hardening your heart.</p><div className={styles.actions}><button type="button" className={styles.primary} onClick={() => choose()}>Put On the Armor <span aria-hidden="true">→</span></button><button type="button" className={styles.heroSecondary} onClick={() => choose("peace")}>What Is Troubling Your Heart?</button></div><p className={styles.small}>Choose up to three situations. Let Scripture lead you into prayer and one faithful action.</p>{journey.ids.length > 0 && <button type="button" className={styles.textButton} onClick={() => go("journey")}>{journey.done ? "Return to my cards →" : "Resume my prayer →"}</button>}</div>
          <figure className={styles.heroArt}><ArmorPhoto subject="armor-chapel" hero /><figcaption><span className={styles.eyebrow}>The whole armor of God</span><span>Truth · Justice · Peace · Faith · Hope · The&nbsp;Word</span></figcaption></figure>
        </section>
        <section className={styles.journeyInvitations} aria-labelledby="armor-journeys"><p className={styles.eyebrow}>Bring your day before Christ</p><h2 id="armor-journeys" tabIndex={-1}>Where do you need His strength?</h2><div className={styles.journeyGrid}>{armorJourneys.map(item => <button className={styles.journeyTile} type="button" key={item.id} onClick={() => choose(item.id)}><span className={styles.tilePhoto}><ArmorPhoto subject={item.primaryArmor[0]} decorative thumbnail /></span><span className={styles.tileBody}><strong>{item.title}</strong><span className={styles.tileDescription}>{item.description}</span><span className={styles.tileLink}>Begin here <span aria-hidden="true">↗</span></span></span></button>)}</div></section>
        {introduction}

        <section className={styles.dailyInvitation}><div className={styles.dailyVisual}><ArmorPhoto subject="shield-scripture" decorative /></div><div><p className={styles.eyebrow}>A rhythm of trust</p><h2 tabIndex={-1}>Return to Christ through the day.</h2><p>Begin with prayer, pause with faith, and entrust the evening to His mercy.</p></div><div className={styles.dailyLinks}>{([['morning', 'Put On the Armor', 'Morning · about 5 minutes'], ['midday', 'Stand Firm', 'Midday · 60–90 seconds'], ['evening', 'Examine the Battle', 'Evening · 3–5 minutes']] as const).map(([mode, title, description]) => <button type="button" key={mode} onClick={() => go(mode)}><small>{description}</small><strong>{title} <span aria-hidden="true">→</span></strong></button>)}</div></section>
        <section className={styles.utilityGrid} aria-label="A quiet moment">
          <article className={styles.utilityCard}><span className={styles.utilitySymbol}><ArmorSymbol id="shield" /></span><div><h2 tabIndex={-1}>You do not carry this alone.</h2><p>Take a quiet moment to entrust one concern to Christ.</p><button type="button" onClick={() => go("surrender")}>Surrender to Christ →</button></div></article>
          <article className={styles.utilityCard}><span className={styles.utilitySymbol} aria-hidden="true">✝</span><div><h2 tabIndex={-1}>Simply remain with the Lord.</h2><p>{armorContemplationText.text}</p><button type="button" onClick={() => go("silence")}>Enter silent prayer →</button></div></article>
        </section>
      </>}

      {view === "choose" && <section className={styles.selector}><p className={styles.eyebrow}>Begin where you are</p><h2 tabIndex={-1}>What are you carrying today?</h2><p>Choose up to three situations, in the order you would like to pray through them. You do not need to explain or write anything.</p><p className={styles.small}>About 3–5 minutes per situation. Your choices stay only while this page is open.</p>
        <div ref={selectionTools} className={styles.selectionTools}><div className={styles.selectionDock} aria-label="Prayer selection progress"><span><strong>{selected.length} of 3 selected</strong><small>{selected.length ? `${selected.length * 3}–${selected.length * 5} minutes` : "Choose a situation below"}</small>{selected.length > 0 && <button type="button" className={styles.reviewSelections} onClick={() => focusSelection("summary")}>Review choices ↓</button>}</span><button type="button" className={styles.primary} disabled={!selected.length} onClick={begin}>Begin prayer →</button></div><p className={styles.selectionNotice} role="status">{notice}</p></div><div className={styles.selectorLayout}><div className={styles.situationGroups}>{armorJourneys.map(item => <section className={styles.situationGroup} key={item.id}><h3><button id={`armor-group-heading-${item.id}`} type="button" aria-expanded={group === item.id} aria-controls={`armor-group-${item.id}`} onClick={() => setGroup(value => value === item.id ? "" : item.id)}>{item.title}<span aria-hidden="true">{group === item.id ? "−" : "+"}</span></button></h3><div id={`armor-group-${item.id}`} hidden={group !== item.id}><p>{item.question}</p><div className={styles.situationChoices}>{armorStruggles.filter(candidate => candidate.journeyId === item.id).map(candidate => <button type="button" key={candidate.id} aria-pressed={selected.includes(candidate.id)} aria-disabled={selected.length === 3 && !selected.includes(candidate.id)} onClick={() => toggle(candidate.id)}><span aria-hidden="true">{selected.includes(candidate.id) ? "✓" : "+"}</span>{candidate.title}</button>)}</div></div></section>)}</div>
        <aside className={styles.selectionSummary} aria-label="Selected situations"><p className={styles.eyebrow}>Your prayer today</p><h3 id="armor-selection-heading" tabIndex={-1}>{selected.length} of 3 situations</h3>{selected.length ? <ol>{selected.map(id => <li key={id}><span>{armorStruggles.find(item => item.id === id)!.title}</span><button type="button" aria-label={`Remove ${armorStruggles.find(item => item.id === id)!.title}`} onClick={() => removeSelection(id)}>×</button></li>)}</ol> : <p>Choose one situation to begin. You can add up to two more.</p>}<p className={styles.small}>{selected.length ? `Allow approximately ${selected.length * 3}–${selected.length * 5} minutes, with optional silence.` : "There is no need to work through everything today."}</p><button type="button" className={styles.primary} onClick={begin}>Begin My Guided Prayer →</button>{journey.ids.length > 0 && !journey.done && <p className={styles.small}>Beginning replaces your current unfinished guide. You can also <button type="button" className={styles.textButton} onClick={() => go("journey")}>resume it</button>.</p>}<button type="button" className={styles.returnToChoices} onClick={() => focusSelection("choices")}>Return to situations ↑</button></aside></div>
      </section>}

      {view === "journey" && struggle && <section className={styles.guidedJourney}>
        <p className={styles.eyebrow}>{armorJourneys.find(item => item.id === struggle.journeyId)!.title}</p>
        <p className={styles.small}>Situation {journey.index + 1} of {journey.ids.length} · {struggle.title}</p>
        {journey.done ? <><h2 tabIndex={-1}>Go forward in peace.</h2><p>I cannot control every battle I face, but I can stand firm in Christ.</p><button type="button" onClick={() => setJourney(value => ({ ...value, stage: 0, index: 0, card: false, done: false }))}>Restart my guide</button><div className={styles.completedCards}>{journey.ids.map(id => <ArmorSummaryCard key={id} card={summaryFor(armorStruggles.find(item => item.id === id)!)} />)}</div><button type="button" className={styles.primary} onClick={() => { setSelected([]); choose(); }}>Begin Another Journey</button></> : journey.card ? <><h2 tabIndex={-1}>Carry this prayer into your day.</h2><ArmorSummaryCard card={summaryFor(struggle)} /><button type="button" onClick={() => setJourney(value => ({ ...value, stage: 0, card: false }))}>Restart this situation</button><div className={styles.actions}><button type="button" onClick={() => setJourney(value => ({ ...value, card: false, stage: 4 }))}>Back to Live the Word</button><button type="button" className={styles.primary} onClick={() => setJourney(value => value.index + 1 < value.ids.length ? { ...value, index: value.index + 1, stage: 0, card: false } : { ...value, done: true })}>{journey.index + 1 < journey.ids.length ? "Pray through my next situation →" : "Finish my prayer →"}</button></div></> : <>
          <p className={styles.mobileStageStatus}>Step {journey.stage + 1} of 5 · {armorStages[journey.stage]}</p><ol className={styles.stages} aria-label="Prayer stages">{armorStages.map((stage, index) => <li key={stage} aria-label={`${index + 1}. ${stage}${index < journey.stage ? ", completed" : ""}`} data-complete={index < journey.stage || undefined} aria-current={index === journey.stage ? "step" : undefined}><span aria-hidden="true">{index < journey.stage ? "✓" : index + 1}</span><span className={styles.stageLabel} aria-hidden="true">{stage}</span></li>)}</ol>
          <progress max={5} value={journey.stage + 1} aria-label="Journey stage progress" />
          <div className={styles.stageBody} key={`${struggle.id}-${journey.stage}`}>
            <h2 tabIndex={-1}>{armorStages[journey.stage]}</h2>
            {journey.stage === 0 && <><h3>{struggle.title}</h3><p>Recognize what is before you, without judging yourself or needing to solve it all. Bring this situation honestly to Christ.</p><p className={styles.reflection}>{struggle.reflection}</p>{struggle.virtue && <p className={styles.virtue}>A virtue to practice: <strong>{struggle.virtue}</strong></p>}{struggle.consciencePrompt && <details><summary>Optional examination of conscience</summary><p>{struggle.consciencePrompt}</p><p>Temptation and unwanted thoughts are not the same as freely consenting to sin.</p><Link href="/confession/examination-companion">Prepare My Heart for Confession →</Link></details>}</>}
            {journey.stage === 1 && <><ArmorScripture reference={struggle.scriptureReference} /><p>Read slowly. Receive one phrase to carry into this situation.</p>{struggle.teaching && <aside className={styles.teaching}><h3>Catholic teaching</h3><p>{struggle.teaching.text}</p>{source && <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}{source.paragraphs ? ` · ${source.paragraphs}` : ""} ↗</a>}<p className={styles.small}>A devotional summary of the teaching, separate from the Scripture quotation.</p></aside>}</>}
            {journey.stage === 2 && <div className={styles.armorApplication}><div className={styles.armorGuideVisual}><ArmorPhoto subject={struggle.armorIds[0]} decorative /></div><div className={styles.armorGuideText}><p className={styles.reflection}>{struggle.armorApplication}</p><p className={styles.small}>All six pieces belong together. This association is an invitation to prayer, not a diagnosis or a promise of protection.</p>{struggle.armorIds.map(id => <div className={styles.recommendedArmor} key={id}><ArmorSymbol id={id} /><div><h3>{armorPieces.find(piece => piece.id === id)!.name}</h3><ArmorScripture reference={armorPieces.find(piece => piece.id === id)!.scriptureReference} compact /></div></div>)}</div><div className={styles.armorGuideDiagram}><ArmorArtwork selected={struggle.armorIds} /></div></div>}
            {journey.stage === 3 && <><p className={styles.eyebrow}>An original prayer for this situation</p><p className={styles.prayer}>{struggle.prayer}</p><p>Pray these words slowly, or speak to the Lord in your own words.</p></>}
            {journey.stage === 4 && <><p className={styles.eyebrow}>One faithful response</p><p className={styles.actionText}>{struggle.dailyAction}</p><p>Choose a loving, responsible step within your circumstances. You may return to this prayer whenever you need.</p><Contemplation prompt={struggle.contemplationPrompt} />{struggle.journeyId === "temptation" && <p><Link href="/confession/examination-companion">Prepare My Heart for Confession →</Link><br /><span className={styles.small}>This prayer does not replace sacramental Confession.</span></p>}</>}
          </div>
          <div className={styles.actions}><button type="button" disabled={journey.stage === 0} onClick={() => setJourney(value => ({ ...value, stage: value.stage - 1 }))}>Back</button><button type="button" className={styles.primary} onClick={() => setJourney(value => value.stage < 4 ? { ...value, stage: value.stage + 1 } : { ...value, card: true })}>{journey.stage === 4 ? "Receive My Daily Armor Card" : "Continue →"}</button><button type="button" onClick={() => setJourney(value => ({ ...value, stage: 0 }))}>Restart this situation</button></div>
        </>}
      </section>}

      {view === "explore" && <section className={styles.explorer}><p className={styles.eyebrow}>Ephesians 6:10–20</p><h2 tabIndex={-1}>The six pieces of God&apos;s armor</h2><p>Receive these images as an invitation to truth, virtue, peace, faith, hope, and the Word of God.</p><p className={styles.small} role="status">{explored.length} of 6 pieces explored · Now exploring {armor.name}</p><progress max={6} value={explored.length} aria-label="Armor pieces explored" /><div className={styles.explorerGrid}><div><ArmorArtwork selected={[activeArmor]} onSelect={revealArmor} /><div className={styles.armorChoices} role="group" aria-label="Choose an armor piece">{armorPieces.map(piece => <button type="button" key={piece.id} aria-pressed={activeArmor === piece.id} onClick={() => revealArmor(piece.id)}><ArmorSymbol id={piece.id} />{piece.name}{explored.includes(piece.id) && <span className={styles.small}>Explored</span>}</button>)}</div></div><article className={styles.armorDetail} aria-labelledby="armor-detail-heading"><ArmorPhoto subject={activeArmor} decorative /><span className={styles.eyebrow}>Receive His strength</span><h3 id="armor-detail-heading" tabIndex={-1}>{armor.name}</h3><ArmorScripture reference={armor.scriptureReference} /><p>{armor.explanation}</p><p className={styles.reflection}>{armor.reflection}</p><h4>A prayer</h4><p className={styles.prayer}>{armor.prayer}</p><h4>Live the Word</h4><p>{armor.dailyAction}</p><button type="button" className={styles.primary} onClick={nextArmor}>Explore the next piece →</button></article></div>{explored.length === 6 && <p className={styles.completion} role="status">Stand firm in the Lord. Go forward in peace.</p>}</section>}
      {(view === "morning" || view === "midday" || view === "evening") && <><div className={styles.prayerTabs} role="group" aria-label="Choose a daily prayer">{(["morning", "midday", "evening"] as const).map(mode => <button type="button" key={mode} aria-pressed={view === mode} onClick={() => go(mode)}>{mode[0].toUpperCase() + mode.slice(1)}</button>)}</div><ArmorPrayer key={view} mode={view} /></>}
      {view === "surrender" && <SurrenderPrayer />}
      {view === "silence" && <section className={styles.silenceRoom}><h2 tabIndex={-1}>Simply remain with the Lord.</h2><Contemplation /></section>}
    </div>
    <footer className={styles.footer}><p>Grace received. Faith lived. Christ at the center.</p><p className={styles.small}>Scripture: Douay-Rheims American Edition of 1899, courtesy of eBible.org. Reflections and prayers are original Daily Oratory devotional material. The guided sequence is a devotional application of Ephesians 6, not a method prescribed by St. Paul.</p><nav aria-label="Related prayer experiences"><Link href="/rosary/visual-meditation">Rosary</Link><Link href="/adoration/companion">Adoration Companion</Link><Link href="/morning-prayer">Morning Prayer</Link><Link href="/daily-examen/nightly">The Last Light</Link><Link href="/way-of-cross">Way of the Cross</Link><Link href="/confession">Confession</Link></nav><Link href="/">Daily Oratory · Home</Link></footer>
  </div>;
}
