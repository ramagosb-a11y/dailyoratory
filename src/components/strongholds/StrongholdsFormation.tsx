"use client";

import Link from "next/link";
import { useState } from "react";
import { strongholdsFormationDays } from "@/data/strongholdsFormation";
import { StrongholdsScripture } from "./StrongholdsScripture";
import { strongholdsSupport } from "@/data/strongholdsSupport";
import { StrongholdsReturnPlan } from "./StrongholdsSupport";
import styles from "./Strongholds.module.css";
import formation from "./Formation.module.css";

export function StrongholdsFormation() {
  const [selectedDay, setSelectedDay] = useState(0);
  const day = strongholdsFormationDays[selectedDay];
  function openPrayer(id: "morning-prayer" | "evening-reflection") {
    const target = document.getElementById(id);
    if (target instanceof HTMLDetailsElement) target.open = true;
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ block: "start", behavior: "instant" });
  }
  return <div className={formation.root}>
    <header className={styles.pageHeader}><p className={styles.eyebrow}>Build a faithful rhythm</p><h1>Daily Defenses</h1><p className={formation.intro}>Seven invitations to prayer and practical care. Choose any day; there is no schedule to complete or progress to earn.</p></header>
    <div className={formation.dayChoices} role="group" aria-label="Choose a day of reflection">{strongholdsFormationDays.map((item, index) => <button className="focus-ring" type="button" key={item.day} aria-pressed={selectedDay === index} aria-label={`${item.day}: ${item.theme}`} aria-controls="daily-defense" onClick={() => setSelectedDay(index)}><span>{item.day.slice(0, 3)}</span><small>{index + 1}</small></button>)}</div>
    <article id="daily-defense" className={formation.dayPanel} aria-labelledby="defense-theme" aria-live="polite" aria-atomic="true">
      <p className={styles.eyebrow}>{day.day} · A daily defense</p><h2 id="defense-theme">{day.theme}</h2><span className={formation.virtue}>Practice: {day.virtue}</span>
      <h3>Watch for</h3><p>{day.watchFor}</p><h3>A thought for today</h3><p>{day.reflection}</p>
      <h3 id="morning-prayer" tabIndex={-1}>A morning prayer</h3><p className={formation.prayer}>{day.morningPrayer}</p><h3>One practical response</h3><p>{day.action}</p>
      <p className={styles.small}>Scripture reference: {day.scripture}<br />Church reference: {day.church}</p>
      <StrongholdsScripture reference={day.scripture} />
      <details className={styles.disclosure}><summary className="focus-ring">Prepare for a difficult moment</summary><StrongholdsReturnPlan circumstances={[]} action="" fallback={day.action} /><StrongholdsScripture reference="Matthew 26:41" expandable={false} /></details>
    </article>
    <section className={styles.panel} aria-labelledby="daily-prayer-heading"><p className={styles.eyebrow}>Begin and close with Christ</p><h2 id="daily-prayer-heading">Keep a rhythm of prayer</h2><p>Pray here with the morning reflection or a quiet review of the day. Your Strongholds reflection remains in memory while you stay within this feature; only an explicit save keeps a copy.</p><div className={formation.links}><Link className="btn btn-primary focus-ring" href="/strongholds/journey">Return to the six-step prayer <span aria-hidden="true">→</span></Link><button type="button" className="btn btn-secondary focus-ring" onClick={() => openPrayer("morning-prayer")}>Pray this morning reflection <span aria-hidden="true">→</span></button><button type="button" className="btn btn-secondary focus-ring" onClick={() => openPrayer("evening-reflection")}>Reflect on the day here <span aria-hidden="true">→</span></button></div></section>
    <details id="evening-reflection" tabIndex={-1} className={styles.disclosure}><summary className="focus-ring">An evening reflection with Christ</summary><ul className={styles.questions}><li>Where did I receive help today?</li><li>Where could I have chosen greater love?</li><li>What one faithful response can I choose next?</li></ul><p>Remain with these questions briefly and gently. You do not need to reconstruct every thought or settle every doubt.</p><p className={styles.prayer}>{strongholdsSupport.mercyPrayer}</p><p className={styles.small}>Original devotional reflection and prayer</p></details>
    <p className={`${formation.warning} ${styles.small}`}>Scripture quotations use the verified public-domain Douay-Rheims American Edition of 1899. Reflections and prayers are original devotional applications, not approved liturgical texts. Day selection stays in memory and is not saved or tracked.</p>
  </div>;
}
