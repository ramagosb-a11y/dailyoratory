"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { useStrongholds } from "./StrongholdsProvider";
import { StrongholdsNavigation } from "./StrongholdsNavigation";
import { StrongholdsIcon } from "./StrongholdsIcon";
import { deleteStrongholds, newStrongholdsDraft, STRONGHOLDS_PRIVACY } from "@/lib/strongholdsState";
import { deleteStrongholdsHistory } from "@/lib/strongholdsHistory";
import { notifyStrongholdsStorage } from "@/lib/strongholdsStorage";
import { STRONGHOLDS_CORE_REFERENCE } from "@/data/strongholdsPractice";
import styles from "./Strongholds.module.css";

const prayerAnchors = new Set(["begin-again", "morning-prayer", "evening-reflection", "strength-prayer-heading", "scriptural-foundation"]);
function revealPrayerAnchor(id: string) {
  if (!prayerAnchors.has(id)) return;
  const target = document.getElementById(id);
  if (!target) return;
  if (target instanceof HTMLDetailsElement) target.open = true;
  target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
  target.scrollIntoView({ block: "start", behavior: "instant" });
}

export function StrongholdsShell({ children }: { children: React.ReactNode }) {
  const { appearance, setAppearance, setDraft } = useStrongholds();
  const pathname = usePathname();
  useEffect(() => {
    const reveal = () => revealPrayerAnchor(window.location.hash.slice(1));
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, [pathname]);
  function followPrayerAnchor(event: MouseEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!anchor) return;
    const destination = new URL(anchor.getAttribute("href")!, window.location.href);
    const id = destination.hash.slice(1);
    if (destination.origin !== window.location.origin || destination.pathname !== pathname || !prayerAnchors.has(id) || !document.getElementById(id)) return;
    event.preventDefault();
    revealPrayerAnchor(id);
  }
  const dialog = useRef<HTMLDialogElement>(null);
  const [message, setMessage] = useState("");
  function clear() {
    let draftDeleted = false, historyDeleted = false;
    try { draftDeleted = deleteStrongholds(window.localStorage); historyDeleted = deleteStrongholdsHistory(window.localStorage); } catch {}
    notifyStrongholdsStorage();
    setDraft(newStrongholdsDraft());
    setMessage(draftDeleted && historyDeleted ? "Strongholds reflections and saved journey deleted. Other tools are unchanged." : "The memory journey was cleared, but this browser could not delete all saved Strongholds data. Retry or use browser settings.");
  }
  return <div className={styles.featureBackdrop} onClickCapture={followPrayerAnchor} data-theme={appearance.theme} data-reading={appearance.large ? "large" : "standard"} data-reduced-motion={appearance.reduced}>
    <header className={styles.topbar}><div>
      <Link href="/strongholds" className={`${styles.wordmark} focus-ring`}><span className={`${styles.iconBox} ${styles.brandEmblem}`}><Image src="/images/strongholds/sword-shield-burgundy.webp" alt="" width={80} height={80} sizes="44px" /></span><span><strong>Strongholds</strong><small>2 Cor 10:3–6 · Captive to Christ</small></span></Link>
      <nav className={styles.exitBar} aria-label="Exit Strongholds"><Link href="/" aria-label="Home · Daily Oratory" className={`${styles.homeLink} focus-ring`}><span aria-hidden="true">←</span> Home<span className={styles.homeDestination}> · Daily Oratory</span></Link></nav>
      <Link className={`${styles.helpPill} focus-ring`} href="/strongholds/help-now"><StrongholdsIcon /><span>Help Me Right Now</span></Link>
      <button className={`${styles.iconButton} focus-ring`} aria-label="Open Settings and Sacred Integrity" onClick={() => dialog.current?.showModal()}><StrongholdsIcon name="settings" /></button>
    </div></header>
    <div className={styles.shell}><div className={styles.content}>{children}</div>
      <footer className={styles.featureFooter}><p><Link className={`${styles.linkButton} focus-ring`} href="/strongholds#scriptural-foundation">Our foundation · {STRONGHOLDS_CORE_REFERENCE}</Link></p><nav aria-label="Breadcrumb"><Link className="focus-ring" href="/">Daily Oratory · Home</Link><span aria-hidden="true"> / </span><Link href="/strongholds">Strongholds</Link></nav><p>Prayer, Scripture, and one faithful response to grace.</p></footer>
    </div><StrongholdsNavigation />
    <dialog ref={dialog} className={styles.modal} aria-labelledby="strongholds-settings-title"><div className={styles.modalHeader}><h2 id="strongholds-settings-title">Settings & Sacred Integrity</h2><button aria-label="Close Settings" className={`${styles.iconButton} focus-ring`} onClick={() => dialog.current?.close()}><StrongholdsIcon name="close" /></button></div>
      <div className={styles.modalBody}>
        <fieldset className={styles.fieldset}><legend>Appearance theme</legend><div className={styles.choices}>{([['midnight','Midnight Sacred (Dark)'],['ivory','Ivory Dawn (Light)']] as const).map(([theme,label]) => <button key={theme} className={`${styles.choice} focus-ring`} aria-pressed={appearance.theme === theme} onClick={() => setAppearance(a => ({ ...a, theme }))}>{label}</button>)}</div></fieldset>
        <fieldset className={styles.fieldset}><legend>Reading font size</legend><div className={styles.choices}>{[false,true].map(large => <button key={String(large)} className={`${styles.choice} focus-ring`} aria-pressed={appearance.large === large} onClick={() => setAppearance(a => ({ ...a, large }))}>{large ? "Large Reading Size" : "Standard Size"}</button>)}</div></fieldset>
        <label className={styles.checkLabel}><input type="checkbox" checked={appearance.reduced} onChange={e => setAppearance(a => ({ ...a, reduced: e.target.checked }))} /> Reduced motion</label><p className={styles.small}>System reduced-motion preferences are also respected. Appearance choices last while this feature is open; they are not saved.</p>
        <h3>Catholic content integrity</h3><p>All Scripture quotations use the verified public-domain Douay-Rheims American Edition of 1899. Each reading identifies its verses and source. Original devotional reflections are separate from Scripture.</p><p>This aid does not replace a priest, confessor, spiritual director, or necessary professional care. It cannot judge supernatural causes or sacramental standing.</p>
        <h3>Privacy & local data</h3><p>{STRONGHOLDS_PRIVACY}</p><p>Answers stay in memory until you explicitly save a journey or a reflection. No account, AI, database, or cloud backup is used. Delete affects Strongholds only.</p>
        <details className={styles.disclosure}><summary>Delete all Strongholds data</summary><p>Remove saved journeys and reflections from this browser, and clear the current in-memory journey. This cannot be undone here.</p><button className="btn btn-secondary focus-ring" onClick={clear}>Delete All Strongholds Data</button></details><p role="status">{message}</p>
        <button className="btn btn-primary focus-ring" onClick={() => dialog.current?.close()}>Done</button>
      </div>
    </dialog>
  </div>;
}
