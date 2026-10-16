"use client";

import Link from "next/link";
import { useState } from "react";
import { strongholdsFormationDays } from "@/data/strongholdsFormation";
import { StrongholdsScripture } from "./StrongholdsScripture";
import styles from "./Strongholds.module.css";
import formation from "./Formation.module.css";

export function StrongholdsFormation() {
  const [selectedDay, setSelectedDay] = useState(0);
  const day = strongholdsFormationDays[selectedDay];
  return <div className={formation.root}>
    <header><p className={styles.eyebrow}>Build a faithful rhythm</p><h1>Daily Defenses</h1><p className={formation.intro}>Seven invitations to prayer and practical care. Choose any day; there is no schedule to complete or progress to earn.</p></header>
    <div className={formation.dayChoices} role="group" aria-label="Choose a day of reflection">{strongholdsFormationDays.map((item, index) => <button className="focus-ring" type="button" key={item.day} aria-pressed={selectedDay === index} aria-label={`${item.day}: ${item.theme}`} aria-controls="daily-defense" onClick={() => setSelectedDay(index)}><span>{item.day.slice(0, 3)}</span><small>{index + 1}</small></button>)}</div>
    <article id="daily-defense" className={formation.dayPanel} aria-labelledby="defense-theme" aria-live="polite" aria-atomic="true">
      <p className={styles.eyebrow}>{day.day} · A daily defense</p><h2 id="defense-theme">{day.theme}</h2><span className={formation.virtue}>Practice: {day.virtue}</span>
      <h3>Watch for</h3><p>{day.watchFor}</p><h3>A thought for today</h3><p>{day.reflection}</p>
      <h3>A morning prayer</h3><p className={formation.prayer}>{day.morningPrayer}</p><h3>One practical response</h3><p>{day.action}</p>
      <p className={styles.small}>Scripture reference: {day.scripture}<br />Church reference: {day.church}</p>
      <StrongholdsScripture reference={day.scripture} />
    </article>
    <section className={styles.panel} aria-labelledby="daily-prayer-heading"><p className={styles.eyebrow}>Begin and close with Christ</p><h2 id="daily-prayer-heading">Keep a rhythm of prayer</h2><p>Continue with Daily Oratory’s existing guided prayers. Your Strongholds reflection remains in memory while you stay within this feature; leaving may lose unsaved answers.</p><div className={formation.links}><Link className="btn btn-primary focus-ring" href="/strongholds/journey">Return to the six-step prayer <span aria-hidden="true">→</span></Link><Link className="btn btn-secondary focus-ring" href="/morning-prayer">Guided Morning Prayer <span aria-hidden="true">→</span></Link><Link className="btn btn-secondary focus-ring" href="/daily-examen/nightly">The Last Light · Nightly Examen <span aria-hidden="true">→</span></Link></div></section>
    <p className={`${formation.warning} ${styles.small}`}>Scripture quotations use the verified public-domain Douay-Rheims American Edition of 1899. Reflections and prayers are original devotional applications, not approved liturgical texts. Day selection stays in memory and is not saved or tracked.</p>
  </div>;
}
