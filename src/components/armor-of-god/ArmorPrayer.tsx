"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { armorClosingPrayers, armorPieces, eveningQuestions, middaySteps, armorSurrenderPrayer } from "@/data/armorOfGod";
import { ArmorPhoto } from "./ArmorPhoto";
import { ArmorScripture } from "./ArmorScripture";
import { Contemplation } from "./Contemplation";
import styles from "./ArmorOfGod.module.css";

export type PrayerMode = "morning" | "midday" | "evening";
const pauses = [15, 30];
const surrenderPauses = [30, 60];
const prayerTitles = { morning: "Put On the Armor", midday: "Stand Firm", evening: "Examine the Battle" };

export function ArmorPrayer({ mode }: { mode: PrayerMode }) {
  const [step, setStep] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const total = mode === "morning" ? armorPieces.length : mode === "evening" ? eveningQuestions.length : middaySteps.length;
  const complete = step === total;
  const piece = mode === "morning" ? armorPieces[step] : undefined;
  const title = complete ? "Place this day in His hands" : piece?.name ?? (mode === "evening" ? eveningQuestions[step] : middaySteps[step].title);

  useEffect(() => { heading.current?.focus({ preventScroll: true }); }, [step]);

  return <section className={styles.prayerExperience} aria-label={prayerTitles[mode]}>
    <p className={styles.eyebrow}>{mode} prayer · {mode === "morning" ? "About 5 minutes" : mode === "midday" ? "About 60–90 seconds" : "About 3–5 minutes"}</p>
    <h2>{prayerTitles[mode]}</h2>
    <p className={styles.small}>{complete ? "Closing prayer" : `Step ${step + 1} of ${total}`} · Move at your own pace</p>
    <progress max={total} value={step} aria-label="Prayer progress" />
    <div key={step} className={styles.prayerStep}>
      {piece && <div className={styles.prayerPhoto}><ArmorPhoto subject={piece.id} decorative /></div>}
      <h3 ref={heading} tabIndex={-1}>{title}</h3>
      {complete ? <p className={styles.prayer}>{armorClosingPrayers[mode]}</p> : piece ? <><ArmorScripture reference={piece.scriptureReference} /><p>{piece.explanation}</p><p className={styles.prayer}>{piece.prayer}</p></> : mode === "midday" ? <p className={styles.prayer}>{middaySteps[step].text}</p> : <p className={styles.prayer}>Bring this moment before the Lord in the quiet of your heart. There is no need to write an answer.</p>}
      {!complete && <Contemplation durations={mode === "morning" ? pauses : surrenderPauses} />}
      {mode === "evening" && <p><Link href="/daily-examen/nightly">Continue with The Last Light nightly Examen →</Link></p>}
    </div>
    <div className={styles.actions}>
      <button type="button" disabled={step === 0} onClick={() => setStep(value => value - 1)}>Back</button>
      {complete ? <button type="button" onClick={() => setStep(0)}>Pray Again</button> : <button type="button" className={styles.primary} onClick={() => setStep(value => value + 1)}>{step === total - 1 ? "Closing prayer" : "Continue"}</button>}
      {!complete && step > 0 && <button type="button" onClick={() => setStep(0)}>Restart prayer</button>}
    </div>
    {complete && <p className={styles.small}>I cannot control every battle I face, but I can stand firm in Christ.</p>}
  </section>;
}

export function SurrenderPrayer() {
  const [concern, setConcern] = useState("");
  const [placed, setPlaced] = useState(false);
  const input = useRef<HTMLTextAreaElement>(null);
  const result = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const clear = () => { if (input.current) input.current.value = ""; setConcern(""); };
    window.addEventListener("pagehide", clear);
    window.addEventListener("pageshow", clear);
    return () => { window.removeEventListener("pagehide", clear); window.removeEventListener("pageshow", clear); };
  }, []);
  useEffect(() => { if (placed) result.current?.focus({ preventScroll: true }); }, [placed]);

  return <section className={styles.surrender} aria-label="Surrender to Christ">
    <div className={`${styles.surrenderPhoto} ${placed ? styles.surrenderGlow : ""}`}><ArmorPhoto subject="shield-scripture" decorative /></div>
    <p className={styles.eyebrow}>The shield of faith</p>
    <h2 tabIndex={-1}>Surrender to Christ</h2>
    {!placed ? <form onSubmit={event => { event.preventDefault(); setConcern(""); if (input.current) input.current.value = ""; setPlaced(true); }}>
      <label className={styles.concernLabel} htmlFor="armor-concern">What concern are you carrying today?</label>
      <p id="armor-concern-privacy" className={styles.small}>Writing is optional. Your words stay in temporary browser memory, are cleared when you leave this exercise, and are never saved, sent, or included in a card. You can also hold your concern silently.</p>
      <textarea ref={input} id="armor-concern" aria-describedby="armor-concern-privacy" value={concern} onChange={event => setConcern(event.target.value)} maxLength={2000} rows={4} autoComplete="off" spellCheck={false} placeholder="You may simply remain silent…" />
      <button type="submit" className={styles.primary}>Place It in God&apos;s Hands</button>
    </form> : <div className={styles.surrenderResult}>
      <h3 ref={result} tabIndex={-1}>Remain with the Lord.</h3>
      <p className={styles.prayer}>{armorSurrenderPrayer}</p>
      <Contemplation durations={surrenderPauses} />
      <p>Entrust the outcome to Christ. Take the next loving, responsible step that is yours to take.</p>
      <p className={styles.small}>This gesture expresses trust; it does not make the concern disappear or promise a particular outcome.</p>
      <button type="button" onClick={() => { setConcern(""); setPlaced(false); }}>Begin again</button>
    </div>}
  </section>;
}
