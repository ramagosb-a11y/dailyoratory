"use client";

import { useRef, useState, type Ref } from "react";
import { useRouter } from "next/navigation";
import { deleteStrongholds, newStrongholdsDraft } from "@/lib/strongholdsState";
import { notifyStrongholdsStorage, useSavedStrongholds } from "@/lib/strongholdsStorage";
import { useStrongholds } from "./StrongholdsProvider";
import { StrongholdsIcon } from "./StrongholdsIcon";
import styles from "./Strongholds.module.css";

export function BeginStrongholdsButton({ inline = false, buttonRef }: { inline?: boolean; buttonRef?: Ref<HTMLButtonElement> }) {
  const { setDraft } = useStrongholds();
  const router = useRouter();
  return <button ref={buttonRef} aria-label={inline ? "Begin the six-step prayer" : "Begin Guided Prayer"} type="button" className={`focus-ring ${inline ? styles.beginInline : `${styles.actionPanel} ${styles.primaryPanel}`}`} onClick={() => { setDraft(newStrongholdsDraft()); router.push("/strongholds/journey"); }}>{inline ? "Begin the six-step prayer" : <><span className={styles.iconBox}><StrongholdsIcon name="sword" /></span><span><span className={styles.eyebrow}>Immediate guided help</span><strong>I Am Facing Temptation</strong><small>Begin Guided Prayer · Six steps to examine a thought and choose grace.</small></span></>} <StrongholdsIcon name="arrow" /></button>;
}

export function SavedJourneyControls() {
  const saved = useSavedStrongholds();
  const { setDraft } = useStrongholds();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const beginButton = useRef<HTMLButtonElement>(null);
  function removeSaved() {
    let removed = false;
    try { removed = deleteStrongholds(window.localStorage); } catch {}
    notifyStrongholdsStorage();
    setMessage(removed ? "Saved Strongholds journey deleted. Saved My Journey reflections and other prayer tools are unchanged." : "This browser could not delete saved data. Try again or use browser settings to remove this site's stored data.");
    if (removed) beginButton.current?.focus();
  }
  return <div className={styles.landingActions}>
    <div className={styles.buttons}>
      <BeginStrongholdsButton buttonRef={beginButton} />
      {saved.saved && <button type="button" className={`btn btn-secondary focus-ring ${styles.heroHelp}`} onClick={() => { setDraft(saved.saved!.draft); router.push("/strongholds/journey"); }}>Resume Saved Journey</button>}
    </div>
    {saved.status !== "empty" && <div className={styles.storageNote}>
      {saved.status === "invalid" && <p>The saved record is unreadable or from an unsupported version. It has not been loaded. You can delete it and begin again.</p>}
      {saved.status === "unavailable" && <p>Browser storage is unavailable. You can still pray without saving.</p>}
      {saved.status === "saved" && <p>A saved snapshot is available. Resuming does not enable automatic saving.</p>}
      <button type="button" className="btn btn-secondary focus-ring" onClick={removeSaved}>Delete Saved Journey</button>
    </div>}
    <p role="status">{message}</p>
  </div>;
}
