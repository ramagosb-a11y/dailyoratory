"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { strongholdsResources, type StrongholdsResource } from "@/data/strongholds";
import { StrongholdsIcon, type StrongholdsIconName } from "./StrongholdsIcon";
import { StrongholdsScripture } from "./StrongholdsScripture";
import styles from "./Weapons.module.css";
import shared from "./Strongholds.module.css";

const resourceIcons: readonly StrongholdsIconName[] = ["prayer", "book", "faith", "humility", "path", "heart", "flame", "mercy", "eucharist", "rosary"];

export function StrongholdsWeapons() {
  const [selected, setSelected] = useState<StrongholdsResource | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (selected && dialog.current && !dialog.current.open) {
      dialog.current.showModal();
      closeButton.current?.focus();
    }
  }, [selected]);

  function showResource(resource: StrongholdsResource, event: MouseEvent<HTMLButtonElement>) {
    opener.current = event.currentTarget;
    setSelected(resource);
  }

  function returnToLibrary() {
    setSelected(null);
    opener.current?.focus();
  }

  function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      event.currentTarget.close();
    }
  }

  return <section className={styles.library} aria-labelledby="weapons-heading">
    <header className={styles.heading}>
      <p className={`${styles.eyebrow} ${shared.eyebrow}`}>The spiritual armory</p>
      <h1 id="weapons-heading">Spiritual Weapons</h1>
      <p>Draw from the life of the Church. Open a resource for a short prayer and one practical response.</p>
    </header>
    <p className={`${styles.sourceNote} ${shared.small}`}>Scripture quotations use the verified public-domain Douay-Rheims American Edition of 1899. Original devotional applications and Church references still await source and human editorial review.</p>
    <ul className={styles.list}>
      {strongholdsResources.map((resource, index) => <li key={resource.title}>
        <button type="button" className={styles.resourceButton} aria-haspopup="dialog" onClick={event => showResource(resource, event)}>
          <span className={styles.icon}><StrongholdsIcon name={resourceIcons[index]} /></span>
          <span className={styles.resourceCopy}><strong>{resource.title}</strong><span>{resource.explanation}</span></span>
          <span className={styles.chevron} aria-hidden="true">›</span>
        </button>
      </li>)}
    </ul>
    <dialog ref={dialog} className={styles.dialog} aria-labelledby={titleId} aria-describedby={descriptionId} onClose={returnToLibrary} onClick={closeOnBackdrop}>
      <div className={styles.dialogContent}>
        <div className={styles.dialogHeader}>
          <p className={`${styles.eyebrow} ${shared.eyebrow}`}>A resource for prayer</p>
          <button ref={closeButton} type="button" className={styles.closeButton} onClick={() => dialog.current?.close()} aria-label="Close resource">×</button>
        </div>
        <h2 id={titleId}>{selected?.title}</h2>
        <p id={descriptionId} className={styles.description}>{selected?.explanation}</p>
        {selected && <>
          <div className={styles.references}>
            <p><strong>Scripture reference</strong><span>{selected.scripture}</span></p>
            <p><strong>Church reference for verification</strong><span>{selected.church}</span></p>
          </div>
          <StrongholdsScripture reference={selected.scripture} />
          <section className={styles.prayer} aria-labelledby={`${titleId}-prayer`}><h3 id={`${titleId}-prayer`}>A short prayer</h3><p>{selected.prayer}</p></section>
          <section className={styles.practice} aria-labelledby={`${titleId}-practice`}><h3 id={`${titleId}-practice`}>Put it into practice</h3><p>{selected.action}</p></section>
          <Link className={`btn btn-primary focus-ring ${styles.continueLink}`} href={selected.href}>{selected.link}<StrongholdsIcon name="arrow" /></Link>
          <p className={`${styles.dialogNote} ${shared.small}`}>The explanation, prayer, and practice are original devotional applications, separate from the Scripture quotation. Church-reference verification and human editorial review remain pending.</p>
          <button type="button" className={`btn btn-secondary focus-ring ${styles.returnButton}`} onClick={() => dialog.current?.close()}>Return to the armory</button>
        </>}
      </div>
    </dialog>
  </section>;
}
