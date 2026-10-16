"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { strongholdCounsel } from "@/data/strongholds";
import { STRONGHOLDS_PRIVACY } from "@/lib/strongholdsState";
import { deleteStrongholdsEntry, deleteStrongholdsHistory } from "@/lib/strongholdsHistory";
import { notifyStrongholdsStorage, useStrongholdsHistory } from "@/lib/strongholdsStorage";
import { SavedJourneyControls } from "./SavedJourneyControls";
import { StrongholdsScripture } from "./StrongholdsScripture";
import { useStrongholds } from "./StrongholdsProvider";
import styles from "./Strongholds.module.css";

export function StrongholdsMyJourney() {
  const history = useStrongholdsHistory();
  const { setDraft } = useStrongholds();
  const router = useRouter();
  const [message,setMessage] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  function remove(id?: string) {
    let ok = false;
    try { ok = id ? deleteStrongholdsEntry(window.localStorage,id) : deleteStrongholdsHistory(window.localStorage); } catch {}
    notifyStrongholdsStorage();
    if (ok) heading.current?.focus();
    setMessage(ok ? "Saved reflection data deleted from this browser. Other tools are unchanged." : "This browser could not delete the saved data. Try again or use browser settings. Prayer remains available.");
  }
  return <section><p className={styles.eyebrow}>Private sanctuary</p><h1 ref={heading} tabIndex={-1}>My Journey</h1><p className={styles.small}>Return to a thought you examined, a truth to remember, or a resolution offered to Christ.</p><aside className={styles.card}><h2>Private to this browser</h2><p>{STRONGHOLDS_PRIVACY}</p><p className={styles.small}>Only your explicit saves appear here. This journal is not a measure of holiness, and it does not count victories or failures.</p></aside>
    <details className={styles.disclosure}><summary>Begin or resume a saved draft</summary><SavedJourneyControls /></details>
    {history.status === "unavailable" && <p role="status">Browser storage is unavailable. You can still pray without saving.</p>}
    {history.status === "invalid" && <div className={styles.card}><p>The reflection history is unreadable or from an unsupported version. It has not been loaded or overwritten.</p><button className="btn btn-secondary focus-ring" onClick={() => remove()}>Delete Unreadable History</button></div>}
    {(history.status === "empty") && <div className={styles.card}><h2>No Saved Reflections Yet</h2><p>At the end of a guided prayer, choose Save Reflection to My Journey to keep a copy here. Saving is always optional.</p><Link className="btn btn-primary focus-ring" href="/strongholds/journey">Begin Guided Prayer</Link></div>}
    {history.entries.map(entry => { const counsel = strongholdCounsel[entry.draft.category]; return <article className={styles.card} key={entry.id}><div className={styles.entryHeader}><h2>{counsel.label}</h2><time dateTime={entry.savedAt}>{new Date(entry.savedAt).toLocaleDateString()}</time></div><details className={styles.disclosure}><summary>Read saved reflection</summary><p><strong>Thought examined:</strong> {entry.draft.thought || "Held silently / not yet named"}</p><p><strong>Scripture reference:</strong> {counsel.reference}</p><StrongholdsScripture reference={counsel.reference} /><p><strong>Truth to remember:</strong> {counsel.truth}</p><p><strong>Practical action:</strong> {entry.draft.action || "Carry a quiet intention to respond in love."}</p>{entry.draft.response && <p>{entry.draft.response}</p>}<p className={styles.prayer}>{counsel.prayer}</p><div className={styles.buttons}><button className="btn btn-secondary focus-ring" onClick={() => { setDraft(entry.draft); router.push('/strongholds/journey'); }}>Reopen Reflection</button><button className="btn btn-secondary focus-ring" onClick={() => remove(entry.id)}>Delete This Reflection</button></div></details></article>; })}
    <p role="status" className={styles.notice}>{message}</p><p className={styles.small}>Keep up to 20 reflections. Remove an older entry to make room; nothing is discarded automatically. Printed copies and browser backups are outside this tool’s deletion controls.</p><nav className={styles.actions} aria-label="Continue from My Journey"><Link className="btn btn-secondary focus-ring" href="/strongholds/weapons">Explore Spiritual Weapons <span aria-hidden="true">→</span></Link><Link className="btn btn-secondary focus-ring" href="/strongholds">Return to Sanctuary</Link></nav>
  </section>;
}
