"use client";

import { useState } from "react";
import { strongholdsIntentionPrayers } from "@/data/strongholdsPrayers";
import { StrongholdsIcon } from "./StrongholdsIcon";
import styles from "./Strongholds.module.css";

export function StrongholdsPrayerPicker() {
  const [index, setIndex] = useState(0);
  const prayer = strongholdsIntentionPrayers[index];
  return <section className={`${styles.card} ${styles.prayerPicker}`} aria-labelledby="strength-prayer-heading"><p className={styles.eyebrow}><StrongholdsIcon name="sword" /> Strength for the next faithful choice</p><h2 id="strength-prayer-heading">Prayer for Spiritual Strength</h2><p>Pause with Christ. Choose an intention and pray at your own pace.</p><label htmlFor="strongholds-prayer" className={styles.small}>Choose a prayer intention</label><select id="strongholds-prayer" value={index} onChange={e => setIndex(Number(e.target.value))}>{strongholdsIntentionPrayers.map((item,i) => <option value={i} key={item.title}>{item.title}</option>)}</select><div className={styles.prayer} aria-live="polite" aria-atomic="true"><p>{prayer.text}</p></div><p className={styles.small}>Original devotional prayer. Remain here in prayer for as long as you need.</p></section>;
}
