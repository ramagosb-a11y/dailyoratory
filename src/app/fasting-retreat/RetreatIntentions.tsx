"use client";
import { useEffect, useRef, useState } from "react";
import s from "./retreat.module.css";

export const INTENTIONS_KEY = "daily-oratory-retreat-intentions-v1";
export const intentionLabels = ["Family", "Friends", "Priests and religious", "The sick", "The dying", "Souls in Purgatory", "Those away from God", "Those who hurt me", "Those I have hurt", "Personal intentions"];
type Intentions = { version: 1; group: string; grace: string; days: Record<string, Record<string, string>> };
const blank = (): Intentions => ({ version: 1, group: "", grace: "", days: {} });
export function useRetreatIntentions() {
  const [value, setValue] = useState<Intentions>(blank);
  const current = useRef(value);
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(true);
  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      try {
        const raw = localStorage.getItem(INTENTIONS_KEY);
        const parsed = raw ? JSON.parse(raw) : blank();
        if (parsed?.version !== 1) throw new Error("Unsupported intentions");
        const next = blank();
        next.group = typeof parsed.group === "string" ? parsed.group : "";
        next.grace = typeof parsed.grace === "string" ? parsed.grace : "";
        for (const day of ["day-1", "day-2", "day-3"]) {
          next.days[day] = {};
          for (const label of intentionLabels) {
            const text = parsed.days?.[day]?.[label];
            next.days[day][label] = typeof text === "string" ? text : "";
          }
        }
        current.current = next;
        setValue(next);
      } catch { setSaved(false); }
      setReady(true);
    });
    return () => { cancelled = true; };
  }, []);
  function change(update: (previous: Intentions) => Intentions) {
    const next = update(current.current);
    current.current = next;
    setValue(next);
    try { localStorage.setItem(INTENTIONS_KEY, JSON.stringify(next)); setSaved(true); }
    catch { setSaved(false); }
  }
  return { value, ready, saved, change };
}

export function RetreatIntentions({ day, state }: { day: string; state: ReturnType<typeof useRetreatIntentions> }) {
  const { value, ready, saved, change } = state;
  const preparation = day === "preparation";
  return <section className={s.intentions} aria-label={preparation ? "Group intention" : "Daily intentions"}>
    <p className={s.privacy}>Saved only in this browser, not synchronized or sent to a server. Other people using this browser can read these names. Use your own journal if this is a shared device.</p>
    <p role="status">{!ready ? "Loading intentions…" : saved ? "Intentions are saved on this device." : "Saving is unavailable. Your current entries remain on this page but may be lost when you leave. Copy them to your own journal."}</p>
    {preparation ? <>
      <h2>Offer the retreat together</h2>
      <p>If you are making this retreat with a group, agree on a shared intention before beginning. Unite your prayers, freely chosen sacrifices, and unavoidable sufferings with Christ for that intention, according to God’s will. Choose practices appropriate to your health and responsibilities; do not seek harm or neglect necessary care.</p>
      <label>Shared group intention (optional)<textarea aria-label="Shared group intention (optional)" disabled={!ready} value={value.group} onChange={e => change(p => ({ ...p, group: e.target.value }))} rows={3} autoComplete="off" /></label>
      <label>Desired grace (optional)<textarea aria-label="Desired grace (optional)" disabled={!ready} value={value.grace} onChange={e => change(p => ({ ...p, grace: e.target.value }))} rows={3} autoComplete="off" /></label>
    </> : <>
      {(value.group || value.grace) && <aside className={s.groupIntention}><h2>Our shared group intention</h2><p>{value.group}</p>{value.grace && <p><strong>Desired grace: </strong>{value.grace}</p>}</aside>}
      <div className={s.intentionFields}>{intentionLabels.map(label => <label key={label}>{label}<textarea aria-label={label} disabled={!ready} rows={2} value={value.days[day]?.[label] ?? ""} onChange={e => change(p => ({ ...p, days: { ...p.days, [day]: { ...p.days[day], [label]: e.target.value } } }))} autoComplete="off" /></label>)}</div>
      <h2>Short Offering After Writing the Names</h2>
      <p>Jesus, I place every person and intention written here into Your Sacred Heart. May every prayer and sacrifice today become an act of love for them. Amen.</p>
    </>}
    <div className={s.intentionActions}>
      {!preparation && <button disabled={!ready} onClick={() => { if (window.confirm("Clear this day’s intentions? Your other days and shared intention will remain.")) change(p => ({ ...p, days: { ...p.days, [day]: {} } })); }}>Clear this day’s intentions</button>}
      <button disabled={!ready} onClick={() => { if (window.confirm("Clear all retreat intentions, including the shared group intention? Your reading bookmark will remain.")) change(blank); }}>Clear all retreat intentions</button>
    </div>
  </section>;
}
