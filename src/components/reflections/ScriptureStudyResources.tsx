"use client";

import { useEffect, useState } from "react";
import { getScriptureStudyPassages } from "@/lib/scriptureSourceLinks";
import { getCurrentSiteIsoDate, selectMassReflectionForIsoDate } from "@/lib/staticDailyContent";
import type { ISODateString } from "@/types/content";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";
import type { UsccbDailyReading } from "@/lib/usccbDailyReadings";
import styles from "./ScriptureStudyResources.module.css";

const heavenBoundUrl = "https://chatgpt.com/g/g-68858af32c348191bd1d17ae4c8bda79-heavenbound";
const newAdventGenesisUrl = "https://www.newadvent.org/bible/gen001.htm";
const usccbDailyReadingsUrl = "https://bible.usccb.org/daily-bible-reading";

export function ScriptureStudyResources({
  reflections,
  initialReferenceDate,
  usccbDailyReadings,
}: {
  reflections: MassReadingsReflection[];
  initialReferenceDate: ISODateString;
  usccbDailyReadings: UsccbDailyReading[];
}) {
  const [today, setToday] = useState(initialReferenceDate);

  useEffect(() => {
    function refreshDate() {
      setToday(getCurrentSiteIsoDate());
    }
    refreshDate();
    const interval = window.setInterval(refreshDate, 15 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  const usccbDay = usccbDailyReadings.find((day) => day.date === today && day.readings.length > 0);
  const reflectionSelection = selectMassReflectionForIsoDate(reflections, today);
  const sameDayReflectionReadings = reflectionSelection?.mode === "today"
    ? reflectionSelection.reflection?.readings ?? []
    : [];
  const usccbPassages = getScriptureStudyPassages(usccbDay?.readings ?? []);
  const reflectionPassages = getScriptureStudyPassages(sameDayReflectionReadings);
  const passages = usccbPassages.length > 0 ? usccbPassages : reflectionPassages;
  const usingUsccbReferences = usccbPassages.length > 0;

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
              <p>
                Choose a passage, then compare the text or open commentary. {usingUsccbReferences && usccbDay ? (
                  <>References from <a href={usccbDay.sourceUrl} target="_blank" rel="noopener noreferrer">USCCB Daily Readings</a> for {usccbDay.title}.</>
                ) : (
                  <>References from today’s Daily Oratory reflection; <a href={usccbDailyReadingsUrl} target="_blank" rel="noopener noreferrer">verify today’s readings with USCCB</a>.</>
                )}
              </p>
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
          Today’s reading references could not be loaded. <a className="focus-ring" href={usccbDailyReadingsUrl} target="_blank" rel="noopener noreferrer">Open today’s official USCCB readings</a> to choose a passage.
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
