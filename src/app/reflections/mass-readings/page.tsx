import type { Metadata } from "next";
import Link from "next/link";
import styles from "./reflection.module.css";
import { MassReadingsGoogleCalendarEmbed } from "@/components/reflections/MassReadingsGoogleCalendarEmbed";
import { CurrentMassReflectionSection } from "@/components/reflections/CurrentMassReflectionSection";
import { UpcomingMassReflections } from "@/components/reflections/UpcomingMassReflections";
import { ExternalReflectionResources } from "@/components/reflections/ExternalReflectionResources";
import { SectionHeader } from "@/components/section-header";
import {
  getMassReadingsReflectionsData,
  getScheduledMassReadingsReflectionsData,
} from "@/lib/massReadingsReflections";
import { createPageMetadata } from "@/lib/metadata";
import { getCurrentSiteIsoDate } from "@/lib/staticDailyContent";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Mass Readings Reflections",
  description:
    "Reflect on the daily and Sunday Mass readings with Catholic insights, prayer, Scripture themes, and practical application.",
  path: "/reflections/mass-readings",
});

export default async function MassReadingsReflectionsPage() {
  const [scheduled, allReflections] = await Promise.all([
    getScheduledMassReadingsReflectionsData(),
    getMassReadingsReflectionsData(),
  ]);
  const initialReferenceDate = getCurrentSiteIsoDate();

  return (
    <div className={styles.page}>
      <div className={styles.main} data-reflection-page-content>
        <header className={styles.introduction}>
          <p className={styles.eyebrow}>Read · Reflect · Pray</p>
          <h1 id="page-navigation" tabIndex={-1}>Mass Readings Reflections</h1>
          <p>Listen to the Word, make room for prayer, and carry the Gospel into your day.</p>
        </header>
        <div id="current-reflection" data-jump-marker />
        <CurrentMassReflectionSection
          reflections={allReflections}
          initialReferenceDate={initialReferenceDate}
        />
        <ExternalReflectionResources />
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
