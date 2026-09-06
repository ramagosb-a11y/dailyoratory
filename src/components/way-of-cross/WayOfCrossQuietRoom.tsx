"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { alphonsusStations, closingPrayer, openingPrayer, stations } from "@/content/way-of-cross";

type Form = "daily" | "alphonsus";
const stationKey = "daily-oratory-way-of-cross-station";
const formKey = "daily-oratory-way-of-cross-form";

export function WayOfCrossQuietRoom() {
  const [form, setForm] = useState<Form>(() => {
    if (typeof window === "undefined") return "daily";
    try { return window.localStorage.getItem(formKey) === "alphonsus" ? "alphonsus" : "daily"; } catch { return "daily"; }
  });
  const [index, setIndex] = useState(() => {
    if (typeof window === "undefined") return -1;
    try { const saved = Number(window.localStorage.getItem(stationKey)); return Number.isInteger(saved) && saved >= -1 && saved <= 14 ? saved : -1; } catch { return -1; }
  });
  const [quiet, setQuiet] = useState(true);
  const [largeText, setLargeText] = useState(false);
  const [silence, setSilence] = useState(0);
  const active = form === "daily" ? stations : alphonsusStations;
  const current = index >= 0 && index < 14 ? active[index] : null;
  const opening = index === -1;
  const closing = index === 14;
  const dark = quiet ? "bg-navy text-ivory" : "border border-stone bg-parchment text-navy";
  const muted = quiet ? "text-stone-soft" : "text-muted";

  useEffect(() => {
    try { window.localStorage.setItem(formKey, form); window.localStorage.setItem(stationKey, String(index)); } catch { /* Optional resume state. */ }
  }, [form, index]);

  function go(next: number) {
    setIndex(Math.max(-1, Math.min(14, next)));
    setSilence(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return <div className={`way-of-cross-shell overflow-hidden rounded-[1.25rem] ${dark}`}>
    <header className="way-cross-header border-b border-gold-soft/30 px-5 py-7 sm:px-10 sm:py-9">
      <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">A contemplative prayer experience</p><h1 className="font-display mt-2 text-4xl font-semibold leading-tight sm:text-6xl">The Way of the Cross</h1></div><button type="button" onClick={() => setQuiet(!quiet)} aria-pressed={quiet} className="btn btn-outline-inverse focus-ring">{quiet ? "Leave quiet mode" : "Quiet mode"}</button></div>
      <div className="mt-6 grid gap-2 sm:flex" role="tablist" aria-label="Prayer form"><button type="button" role="tab" aria-selected={form === "daily"} onClick={() => { setForm("daily"); go(-1); }} className={`focus-ring rounded-md border px-4 py-3 text-left text-sm font-bold ${form === "daily" ? "border-gold bg-burgundy text-ivory" : "border-gold-soft/40 text-gold-soft"}`}>Daily Oratory meditation</button><button type="button" role="tab" aria-selected={form === "alphonsus"} onClick={() => { setForm("alphonsus"); go(-1); }} className={`focus-ring rounded-md border px-4 py-3 text-left text-sm font-bold ${form === "alphonsus" ? "border-gold bg-burgundy text-ivory" : "border-gold-soft/40 text-gold-soft"}`}>St. Alphonsus · 1887 edition</button></div>
      <nav className="way-cross-progress mt-7 flex flex-wrap gap-2" aria-label="Stations"><button type="button" onClick={() => go(-1)} className={`focus-ring rounded-full px-3 py-2 text-xs ${opening ? "bg-gold text-navy" : "text-gold-soft"}`}>Opening</button>{active.map((item, i) => <button key={item.number} type="button" onClick={() => go(i)} aria-label={`Go to Station ${item.roman}: ${item.title}`} aria-current={i === index ? "step" : undefined} className={`focus-ring rounded-full px-3 py-2 text-xs ${i === index ? "bg-gold text-navy" : "text-gold-soft"}`}>{item.roman}</button>)}<button type="button" onClick={() => go(14)} className={`focus-ring rounded-full px-3 py-2 text-xs ${closing ? "bg-gold text-navy" : "text-gold-soft"}`}>Closing</button></nav>
    </header>
    <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]"><div className="way-cross-art relative min-h-[28rem] bg-black lg:sticky lg:top-0 lg:h-[calc(100vh-2rem)] lg:min-h-0"><Image src={opening ? "/images/way-of-cross/opening-jerusalem.png" : current?.artwork ?? "/images/way-of-cross/station-14-tomb.png"} alt={opening ? "A distant view of Jerusalem as Jesus begins the road to Calvary" : current?.imageAlt ?? "A quiet horizon after the Way of the Cross"} fill priority={opening} sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-transparent to-navy/20"/><div className="absolute bottom-0 left-0 p-7 sm:p-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">{opening ? "Begin the pilgrimage" : closing ? "Remain here" : `Station ${current?.roman}`}</p><p className="font-display mt-3 max-w-xl text-4xl leading-[0.95] text-ivory sm:text-6xl">{opening ? "Walk with Jesus to Calvary" : closing ? "The Cross Is Not the End" : current?.title}</p></div></div>
      <main className={`way-cross-content px-5 py-9 sm:px-10 sm:py-14 ${largeText ? "text-lg" : "text-base"}`} aria-live="polite">{opening ? <Opening prayer={openingPrayer} muted={muted} form={form}/> : closing ? <Closing prayer={closingPrayer} muted={muted}/> : current ? <Station station={current} form={form} muted={muted} silence={silence} setSilence={setSilence}/> : null}<div className="way-cross-actions mt-10 flex flex-wrap items-center gap-3 border-t border-gold-soft/30 pt-7">{!opening && <button type="button" onClick={() => go(index - 1)} className="btn btn-outline-inverse focus-ring">← Previous</button>}{opening ? <button type="button" onClick={() => go(0)} className="btn btn-primary focus-ring">Begin the Way →</button> : closing ? <button type="button" onClick={() => go(-1)} className="btn btn-primary focus-ring">Pray Again</button> : <button type="button" onClick={() => go(index + 1)} className="btn btn-primary focus-ring">{index === 13 ? "Finish the Way →" : "Continue →"}</button>}<label className={`way-cross-text-control ml-auto text-xs ${muted}`}>Text size <select value={largeText ? "large" : "normal"} onChange={(e) => setLargeText(e.target.value === "large")} className="ml-2 rounded border border-gold-soft/40 bg-transparent p-2"><option value="normal">Normal</option><option value="large">Large</option></select></label></div></main></div>
  </div>;
}

function Opening({ prayer, muted, form }: { prayer: string; muted: string; form: Form }) { return <section aria-labelledby="opening-title"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">Opening prayer</p><h2 id="opening-title" className="font-display mt-3 text-4xl font-semibold">{form === "daily" ? "Lord Jesus Christ, draw me into Your Passion." : "A traditional Way of the Cross with St. Alphonsus."}</h2><p className={`mt-6 leading-8 ${muted}`}>{prayer}</p><p className={`mt-6 text-sm leading-7 ${muted}`}>Move slowly. Look upon the artwork, listen to the Scripture, meditate, pray, and remain in silence.</p></section>; }
function Closing({ prayer, muted }: { prayer: string; muted: string }) { return <section aria-labelledby="closing-title"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">Remain here for a moment</p><h2 id="closing-title" className="font-display mt-3 text-5xl font-semibold">The Cross Is Not the End</h2><p className={`mt-6 leading-8 ${muted}`}>{prayer}</p></section>; }
function Station({ station, form, muted, silence, setSilence }: { station: (typeof stations)[number]; form: Form; muted: string; silence: number; setSilence: (value: number) => void }) { const [scripture, setScripture] = useState(false); return <section aria-labelledby="station-title"><div className="flex items-center justify-between gap-4"><p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-soft">Station {station.roman}</p>{station.traditionNote && <span className="rounded-full border border-gold-soft/40 px-3 py-1 text-xs text-gold-soft">Traditional station</span>}</div><h2 id="station-title" className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{station.title}</h2><p className={`mt-3 text-sm ${muted}`}>{form === "alphonsus" ? "St. Alphonsus · historical devotional text" : "Daily Oratory meditation"}</p><div className="mt-8 grid gap-7"><Block label="Behold" text="Look quietly at the artwork. Let your attention rest with Christ." muted={muted}/><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">Listen</p><p className={`mt-3 leading-8 ${muted}`}>{station.scriptureReferences.length ? station.scriptureReferences.join("; ") : "This traditional station is received through Catholic devotional tradition."}</p>{station.scriptureReferences.length > 0 && <><button type="button" onClick={() => setScripture(!scripture)} className="mt-2 text-sm text-gold underline">{scripture ? "Hide Scripture text" : "Show Scripture text"}</button>{scripture && <div className={`mt-3 rounded border border-gold-soft/30 p-4 text-sm ${muted}`}><p className="leading-7">{station.scriptureText}</p><p className="mt-3 text-xs italic text-gold-soft">{station.scriptureSource}</p></div>}</>}</div><Block label="Meditate" text={station.meditation} muted={muted}/><Block label="Pray" text={station.prayer} muted={muted}/><div className="rounded border border-gold-soft/30 p-4"><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">Remain in silence</p><select value={silence} onChange={(e) => setSilence(Number(e.target.value))} className="rounded border border-gold-soft/40 bg-transparent p-2 text-sm"><option value={0}>Off</option><option value={15}>15 seconds</option><option value={30}>30 seconds</option><option value={60}>60 seconds</option></select></div>{silence ? <p className={`mt-3 text-sm ${muted}`}>Remain here for {silence} seconds. No audio will start automatically.</p> : null}</div></div></section>; }
function Block({ label, text, muted }: { label: string; text: string; muted: string }) { return <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">{label}</p><p className={`mt-3 leading-8 ${muted}`}>{text}</p></div>; }
