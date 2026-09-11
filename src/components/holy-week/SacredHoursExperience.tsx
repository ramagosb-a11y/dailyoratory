"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatCalendarDate, getHolyWeekDates } from "@/lib/holyWeekDate";
import { holyWeekMeditations, certaintyLabels } from "@/data/holyWeekMeditations";
import { resolveSacredHour } from "@/lib/holyWeekResolver";
import { readHolyWeekStore, resetHolyWeekStore, saveHolyWeekStore, type HolyWeekStore } from "@/lib/holyWeekStorage";
import type { SacredMoment } from "@/types/holyWeek";

const phases = ["Jerusalem", "Upper Room", "Gethsemane", "Trial", "Calvary", "Tomb", "Resurrection"];
const phaseFor = (moment: SacredMoment) => moment.sequence < 5 ? 0 : moment.sequence < 6 ? 1 : moment.sequence < 7 ? 2 : moment.sequence < 11 ? 3 : moment.sequence < 17 ? 4 : moment.sequence < 21 ? 5 : 6;

export function SacredHoursExperience() {
  const [now, setNow] = useState<Date | null>(null);
  const [store, setStore] = useState<HolyWeekStore>({ completedMomentIds: [], lastOpenedMoment: null, preferredMode: "full" });
  const [mode, setMode] = useState<"live" | "full">("full");
  const [selectedId, setSelectedId] = useState("palm-sunday");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [silence, setSilence] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const momentStartRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setNow(new Date());
      setStore(readHolyWeekStore());
      const requested = new URLSearchParams(window.location.search).get("moment");
      if (requested && holyWeekMeditations.some((moment) => moment.id === requested)) setSelectedId(requested);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => { if (!now) return; const timer = window.setInterval(() => setNow(new Date()), 60_000); return () => window.clearInterval(timer); }, [now]);

  const live = useMemo(() => now ? resolveSacredHour(now) : null, [now]);
  const selected = holyWeekMeditations.find((moment) => moment.id === selectedId) ?? holyWeekMeditations[0];
  const dates = getHolyWeekDates(now?.getFullYear() ?? new Date().getFullYear());
  const mood = selected.sequence >= 21 ? "sacred-hours" : `sacred-hours sacred-hours-${selected.visualMood}`;

  function openMoment(moment: SacredMoment, nextMode = mode) {
    setSelectedId(moment.id); setMode(nextMode); setPickerOpen(false);
    const next = { ...store, lastOpenedMoment: moment.id, preferredMode: nextMode };
    setStore(next); saveHolyWeekStore(next);
    window.history.replaceState(null, "", `/holy-week?moment=${moment.id}`);
    window.setTimeout(() => momentStartRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }
  function complete() {
    const next = { ...store, completedMomentIds: [...new Set([...store.completedMomentIds, selected.id])] };
    setStore(next); saveHolyWeekStore(next);
    const following = holyWeekMeditations[selected.sequence];
    if (following) openMoment(following);
    else window.location.assign('/');
  }
  async function toggleFullscreen() {
    if (!artworkRef.current) return;
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (artworkRef.current.requestFullscreen) await artworkRef.current.requestFullscreen();
  }
  useEffect(() => { const onFullscreen = () => setIsFullscreen(document.fullscreenElement === artworkRef.current); document.addEventListener('fullscreenchange', onFullscreen); return () => document.removeEventListener('fullscreenchange', onFullscreen); }, []);
  function reset() { if (document.fullscreenElement) void document.exitFullscreen(); resetHolyWeekStore(); setStore({ completedMomentIds: [], lastOpenedMoment: null, preferredMode: "full" }); setSelectedId("palm-sunday"); window.history.replaceState(null, "", "/holy-week?moment=palm-sunday"); }
  const previous = holyWeekMeditations[selected.sequence - 2];
  const next = holyWeekMeditations[selected.sequence];

  return <div className={mood}>
    <section className="sacred-hours-hero">
      <div className="sacred-hours-hero-inner">
        <p className="eyebrow sacred-hours-eyebrow">Holy Week · The Paschal Mystery</p>
        <h1 className="font-display sacred-hours-title">The Sacred Hours</h1>
        <p className="sacred-hours-lede">Walk with Christ from Jerusalem to the Empty Tomb.</p>
        <p className="sacred-hours-intro">Enter the final days of Jesus’ earthly life through Scripture, meditation, silence, prayer, and hope.</p>
        <div className="sacred-hours-actions"><button className="btn btn-primary focus-ring" onClick={() => live?.current && openMoment(live.current, "live")}>Walk With Jesus Now</button><button className="btn btn-secondary focus-ring" onClick={() => openMoment(store.lastOpenedMoment ? holyWeekMeditations.find((m) => m.id === store.lastOpenedMoment) ?? holyWeekMeditations[0] : holyWeekMeditations[0], "full")}>Pray the Full Journey</button></div>
        <div className="sacred-hours-journey" aria-label="Sacred journey phases">{phases.map((phase, index) => <span key={phase} className={index === phaseFor(selected) ? "active" : ""}>{phase}{index < phases.length - 1 ? " →" : ""}</span>)}</div>
      </div>
    </section>

    <main className="sacred-hours-main">
      {live?.season === "before" ? <div className="sacred-hours-notice">The Sacred Hours begins on Palm Sunday. <strong>{formatCalendarDate(dates.palmSunday)}</strong> · <button onClick={() => openMoment(holyWeekMeditations[0])}>Pray the Full Journey</button></div> : null}
      {live?.season === "after" ? <div className="sacred-hours-notice">The Easter journey has reached the Resurrection. <button onClick={() => openMoment(holyWeekMeditations[0])}>Pray the Full Journey</button> · <a href="/divine-mercy">Continue with Divine Mercy</a></div> : null}
      {mode === "live" && live?.current ? <LiveNav current={live.current} earlier={live.earlier[0]} next={live.next} onOpen={(moment) => openMoment(moment, "live")} /> : null}
      <div ref={momentStartRef} className="sacred-hours-toolbar"><div><p>{mode === "live" ? "Walk With Jesus Now" : `Sacred Moment ${selected.sequence} of 24`}</p><div className="sacred-progress" aria-label={`${selected.sequence} of 24 moments`}><span style={{ width: `${(selected.sequence / holyWeekMeditations.length) * 100}%` }} /></div></div><div className="sacred-hours-toolbar-actions"><button className="btn btn-primary btn-small focus-ring" onClick={complete}>Complete</button><button disabled={!next} onClick={() => next && openMoment(next)} className="btn btn-outline btn-small focus-ring">Next →</button><button className="btn btn-outline btn-small focus-ring" onClick={() => setPickerOpen(true)}>Choose a Sacred Moment</button><Link className="btn btn-outline btn-small focus-ring" href="/">Home</Link><button className="btn btn-outline btn-small focus-ring" onClick={reset}>Reset Journey</button></div></div>
      <article className="sacred-moment-grid">
        <div ref={artworkRef} className={`sacred-artwork${isFullscreen ? " sacred-artwork-fullscreen" : ""}`}>{selected.imageSrc ? <Image src={selected.imageSrc} alt={selected.imageAlt} fill sizes="(max-width: 1023px) 100vw, 35vw" quality={100} unoptimized priority={selected.sequence <= 2} style={{ objectFit: "cover", objectPosition: selected.imageFocalPoint ?? "center" }} /> : null}<div className="sacred-artwork-overlay" /><p>{selected.imageDescription}</p><button type="button" className="sacred-artwork-fullscreen-button btn btn-secondary" onClick={() => void toggleFullscreen()}>{isFullscreen ? "Exit fullscreen" : "View image fullscreen"}</button></div>
          <div className="sacred-content"><div className="sacred-moment-meta"><span className="sacred-moment-day">{selected.liturgicalDay}</span>{selected.displayTime ? <span className="sacred-moment-time">{selected.displayTime}</span> : null}{selected.timeRange ? <span className="sacred-moment-range">{selected.timeRange}</span> : null}{selected.location ? <span className="sacred-moment-detail"><strong>Location:</strong> {selected.location}</span> : null}{selected.event ? <span className="sacred-moment-detail"><strong>Event:</strong> {selected.event}</span> : null}{selected.timelineLabel ? <span className="sacred-moment-detail sacred-moment-timeline">{selected.timelineLabel}</span> : null}</div><h2 className="font-display">{selected.title}</h2><p className="sacred-theme">{selected.subtitle}</p>
          <div className="scripture-card"><p className="eyebrow">Sacred Scripture · Douay-Rheims</p><p className="scripture-edition">Challoner revision · 1899 American Edition</p>{selected.scripturePassages.map((passage) => <section className="scripture-passage" key={passage.reference} aria-label={passage.reference}><h3>{passage.reference}</h3>{passage.verses.map((verse) => <p className="scripture-verse" key={verse.number}><sup aria-label={`Verse ${verse.number}`}>{verse.number}</sup>{" "}{verse.text}</p>)}<a href={passage.sourceUrl} target="_blank" rel="noreferrer">Source: eBible.org ↗</a></section>)}{selected.timeCertainty !== "untimed" ? <small>{certaintyLabels[selected.timeCertainty]} ⓘ</small> : null}</div>
          {selected.openingPrayer ? <section className="devotional-section opening-prayer"><h3>Opening Prayer</h3><p>{selected.openingPrayer}</p></section> : null}
          <section className="meditation-copy devotional-section"><p className="eyebrow">Be still · Enter the moment</p><h3>Meditation</h3>{selected.meditation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          {selected.optionalFeature ? <div className="timer-card"><strong>{selected.optionalFeature === "watch" ? "Watch One Hour" : selected.optionalFeature === "silence" ? "Sit in Silence" : selected.optionalFeature === "death" ? "Remain here in silence" : "Remain With Him"}</strong><div className="timer-buttons">{[1, 3, 5].map((minutes) => <button key={minutes} className="btn btn-outline focus-ring" onClick={() => setSilence(minutes * 60)}>{minutes} min</button>)}</div>{silence > 0 ? <Timer seconds={silence} onDone={() => setSilence(0)} /> : null}</div> : null}
          <section className="reflection"><h3>Reflection Questions</h3>{selected.reflectionQuestions.map((question) => <p key={question}>{question}</p>)}</section>
          <div className="prayer-card"><p className="eyebrow">Response prayer</p><p>{selected.responsePrayer}</p></div><section className="virtue-section"><p className="virtue"><strong>Virtue to Practice: {selected.virtue}</strong>{selected.virtueDescription ?? ""}</p>{selected.virtuePrayer ? <div className="virtue-prayer"><p className="eyebrow">Prayer for the Virtue of {selected.virtue}</p><p>{selected.virtuePrayer}</p></div> : null}</section>
          <div className="sacred-nav"><button onClick={complete} className="btn btn-primary focus-ring">Complete &amp; Continue</button><button disabled={!next} onClick={() => next && openMoment(next)} className="btn btn-outline focus-ring">Next — Skip Completion</button><button disabled={!previous} onClick={() => previous && openMoment(previous)} className="btn btn-outline focus-ring">← Previous</button><Link href="/" className="btn btn-outline focus-ring">Home</Link><button onClick={reset} className="btn btn-outline focus-ring">Reset Journey</button></div>
        </div>
      </article>
      <section className="about-sacred-hours"><h2 className="font-display">About The Sacred Hours</h2><p>The Sacred Hours follows the Gospel accounts of the Passion and Resurrection as a guided devotional journey. Some Gospel events include explicit time references; other displayed hours are approximate devotional markers.</p><p>Sacred Scripture: Douay-Rheims. Meditations and prayers: original Daily Oratory devotional material. Daily Oratory is an independent Catholic resource and is not an official publication of the Holy See, USCCB, a diocese, or parish.</p><p><Link href="/way-of-cross">Way of the Cross</Link> · <Link href="/adoration">Eucharist / Adoration</Link> · <Link href="/confession">Confession</Link> · <Link href="/divine-mercy">Divine Mercy</Link> · <Link href="/library/scripture-prayer">Scripture Prayer</Link></p></section>
    </main>
    {pickerOpen ? <div className="sacred-picker-backdrop" role="presentation" onClick={() => setPickerOpen(false)}><section className="sacred-picker" role="dialog" aria-modal="true" aria-labelledby="picker-title" onClick={(event) => event.stopPropagation()}><div className="sacred-picker-header"><h2 id="picker-title" className="font-display">Choose a Sacred Moment</h2><button aria-label="Close chooser" onClick={() => setPickerOpen(false)}>×</button></div>{holyWeekMeditations.map((moment) => <button className="sacred-picker-item" key={moment.id} onClick={() => openMoment(moment)}><span>{store.completedMomentIds.includes(moment.id) ? "✓ " : ""}{moment.sequence}. {moment.title}</span><small>{moment.liturgicalDay}{moment.displayTime ? ` · ${moment.displayTime}` : ""}</small></button>)}</section></div> : null}
  </div>;
}


function LiveNav({ current, earlier, next, onOpen }: { current: SacredMoment; earlier?: SacredMoment; next?: SacredMoment | null; onOpen: (moment: SacredMoment) => void }) { return <div className="live-nav"><div><small>Earlier Today</small><button onClick={() => earlier && onOpen(earlier)} disabled={!earlier}>{earlier?.title ?? "—"}</button></div><div className="now"><small>Now</small><strong>{current.title}</strong></div><div><small>Coming Next</small><button onClick={() => next && onOpen(next)} disabled={!next}>{next?.title ?? "—"}</button></div></div>; }
function Timer({ seconds, onDone }: { seconds: number; onDone: () => void }) { const [remaining, setRemaining] = useState(seconds); const doneRef = useRef(onDone); useEffect(() => { doneRef.current = onDone; }, [onDone]); useEffect(() => { const timer = window.setInterval(() => setRemaining((value) => { if (value <= 1) { window.clearInterval(timer); doneRef.current(); return 0; } return value - 1; }), 1000); return () => window.clearInterval(timer); }, [seconds]); return <p role="status" aria-live="polite" className="timer-display">{Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")} · <button onClick={onDone}>Continue now</button></p>; }
