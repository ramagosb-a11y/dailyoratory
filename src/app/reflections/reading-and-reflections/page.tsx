import type { Metadata } from "next";
import Link from "next/link";
import { CurrentMassReflectionSection } from "@/components/reflections/CurrentMassReflectionSection";
import { ExternalReflectionResources } from "@/components/reflections/ExternalReflectionResources";
import { MassReadingsGoogleCalendarEmbed } from "@/components/reflections/MassReadingsGoogleCalendarEmbed";
import { DailyReadingsJournalStep, DailyScriptureJournalEditor, MyScriptureJournal } from "@/components/reflections/ScriptureJournalClient";
import { ScriptureStudyResources } from "@/components/reflections/ScriptureStudyResources";
import { UpcomingMassReflections } from "@/components/reflections/UpcomingMassReflections";
import { SectionHeader } from "@/components/section-header";
import styles from "../mass-readings/reflection.module.css";
import { getMassReadingsReflectionsData, getScheduledMassReadingsReflectionsData } from "@/lib/massReadingsReflections";
import { createPageMetadata } from "@/lib/metadata";
import { getCurrentSiteIsoDate } from "@/lib/staticDailyContent";
import { getUsccbDailyReadings } from "@/lib/usccbDailyReadings";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Reading and Reflections",
  description: "Pray with the daily Mass readings, keep a private Scripture journal on your device, and explore trusted Catholic Bible resources.",
  path: "/reflections/reading-and-reflections",
  noIndex: true,
});

export default async function ReadingAndReflectionsReviewPage() {
  const [scheduled, allReflections, usccbDailyReadings] = await Promise.all([
    getScheduledMassReadingsReflectionsData(),
    getMassReadingsReflectionsData(),
    getUsccbDailyReadings(),
  ]);
  const initialReferenceDate = getCurrentSiteIsoDate();

  return (
    <div className={styles.page}>
      <div className={styles.main} data-reflection-page-content>
        <DailyReadingsJournalStep />
        <DailyScriptureJournalEditor />

        <header className={styles.introduction}>
          <p className={styles.eyebrow}>Step 3 · Read · Reflect · Pray</p>
          <h2 id="page-navigation" tabIndex={-1}>Mass Readings Reflections</h2>
          <p>Listen to the Word, make room for prayer, and carry the Gospel into your day.</p>
        </header>

        <div id="current-reflection" data-jump-marker />
        <CurrentMassReflectionSection
          reflections={allReflections}
          initialReferenceDate={initialReferenceDate}
          showReadingsPanel={false}
        />
        <ScriptureStudyResources
          reflections={allReflections}
          initialReferenceDate={initialReferenceDate}
          usccbDailyReadings={usccbDailyReadings}
        />
        <ExternalReflectionResources excludeResourceIds={["usccb-daily-readings"]} />
        <MyScriptureJournal />

        <div id="reflection-calendar" data-jump-marker />
        <MassReadingsGoogleCalendarEmbed />
        <div id="upcoming-reflections" data-jump-marker />

        <section className="mt-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Upcoming"
              title="Future scheduled reflections"
              summary="See what is prepared next for daily Mass, Sundays, solemnities, and feast days."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/reflections/mass-readings/upcoming" className="btn btn-secondary focus-ring">
                Upcoming archive
              </Link>
              <Link href="/reflections/mass-readings/archive" className="btn btn-secondary focus-ring">
                Past archive
              </Link>
            </div>
          </div>
          <div className="mt-7">
            <UpcomingMassReflections reflections={scheduled.slice(0, 6)} />
          </div>
        </section>
      </div>
    </div>
  );
}
