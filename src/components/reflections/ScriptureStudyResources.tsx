"use client";

import { useEffect, useState } from "react";
import { getScriptureStudyPassages } from "@/lib/scriptureSourceLinks";
import { getCurrentSiteIsoDate, selectMassReflectionForIsoDate } from "@/lib/staticDailyContent";
import type { ISODateString } from "@/types/content";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";
import styles from "./ScriptureStudyResources.module.css";

const heavenBoundUrl = "https://chatgpt.com/g/g-68858af32c348191bd1d17ae4c8bda79-heavenbound";
const newAdventGenesisUrl = "https://www.newadvent.org/bible/gen001.htm";

export function ScriptureStudyResources({
  reflections,
  initialReferenceDate,
}: {
  reflections: MassReadingsReflection[];
  initialReferenceDate: ISODateString;
}) {
  const [reflection, setReflection] = useState(() =>
    selectMassReflectionForIsoDate(reflections, initialReferenceDate)?.reflection,
  );

  useEffect(() => {
    function refreshReflection() {
      setReflection(selectMassReflectionForIsoDate(reflections, getCurrentSiteIsoDate())?.reflection);
    }
    refreshReflection();
    const interval = window.setInterval(refreshReflection, 15 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, [reflections]);

  const passages = getScriptureStudyPassages(reflection?.readings ?? []);

  return (
    <section className={styles.studySection} aria-labelledby="scripture-study-title" data-guided-flow-card>
      <p className={styles.eyebrow}>When you want to go further</p>
      <h2 id="scripture-study-title" className={styles.title}>
        Explore Scripture Further
      </h2>
      <p className={styles.intro}>
        Continue with today’s readings through a traditional Catholic translation and commentary, then explore connections and study tools.
      </p>

      {passages.length > 0 ? (
        <div className={styles.readingsGroup}>
          <div className={styles.subheadRow}>
            <span className={styles.sectionNumber}>01</span>
            <div>
              <h3>Today’s readings</h3>
              <p>Choose a passage, then compare the text or open commentary.</p>
            </div>
          </div>
          <ul className={styles.passageList}>
            {passages.map((passage, index) => (
              <li key={`${passage.label}-${passage.reference}-${index}`} className={styles.passageCard}>
                <div className={styles.passageHeading}>
                  <span className={styles.passageIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className={styles.passageLabel}>{passage.label}</p>
                    <h4>{passage.reference}</h4>
                  </div>
                </div>
                <div className={styles.actions}>
                  <a className={`focus-ring ${styles.resourceLink}`} href={passage.douayHref} target="_blank" rel="noopener noreferrer">
                    <span>Compare translation</span><strong>Douay-Rheims <span aria-hidden="true">↗</span></strong>
                  </a>
                  <a className={`focus-ring ${styles.resourceLink}`} href={passage.haydockHref} target="_blank" rel="noopener noreferrer">
                    <span>{passage.haydockDirect ? "Read traditional notes" : "Open book and chapter index"}</span><strong>Haydock Commentary <span aria-hidden="true">↗</span></strong>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className={styles.fallback}>
          A current Mass reading reference is not available. You can still explore the Bible and commentary through these source indexes.
        </p>
      )}

      <div className={styles.furtherStudy}>
        <div className={styles.subheadRow}>
          <span className={styles.sectionNumber}>02</span>
          <div>
            <h3>Further study</h3>
            <p>Explore the wider biblical story and traditional Catholic study.</p>
          </div>
        </div>
        <div className={styles.studyCards}>
          <a className={`focus-ring ${styles.studyCard}`} href={newAdventGenesisUrl} target="_blank" rel="noopener noreferrer">
            <span className={styles.cardKicker}>Bible reference library</span>
            <strong>New Advent Catholic Bible</strong>
            <span>Open Genesis 1</span>
            <span className={styles.cardArrow} aria-hidden="true">↗</span>
          </a>
          <a className={`focus-ring ${styles.studyCard}`} href={heavenBoundUrl} target="_blank" rel="noopener noreferrer">
            <span className={styles.cardKicker}>Guided study companion</span>
            <strong>Continue with HeavenBound</strong>
            <span>Explore biblical connections, linguistic study, and traditional commentary.</span>
            <span className={styles.cardArrow} aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
