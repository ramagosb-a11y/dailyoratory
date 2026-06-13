import type { Metadata } from "next";
import Link from "next/link";
import { MassReadingsReflectionHero } from "@/components/reflections/MassReadingsReflectionHero";
import { MassReadingsGoogleCalendarEmbed } from "@/components/reflections/MassReadingsGoogleCalendarEmbed";
import { TodayMassReflectionCard } from "@/components/reflections/TodayMassReflectionCard";
import { TodayMassReflectionFull } from "@/components/reflections/TodayMassReflectionFull";
import { MassReflectionFilters } from "@/components/reflections/MassReflectionFilters";
import { UpcomingMassReflections } from "@/components/reflections/UpcomingMassReflections";
import { SundayMassReflectionsSection } from "@/components/reflections/SundayMassReflectionsSection";
import { DailyMassReflectionsSection } from "@/components/reflections/DailyMassReflectionsSection";
import { MassReflectionPostCard } from "@/components/reflections/MassReflectionPostCard";
import { ExternalReflectionResources } from "@/components/reflections/ExternalReflectionResources";
import { DailyReturnPrompt } from "@/components/retention/DailyReturnPrompt";
import { SectionHeader } from "@/components/section-header";
import {
  filterMassReadingsReflectionsData,
  getDailyMassReflectionsData,
  getMassReadingsFacetOptionsData,
  getPublishedMassReadingsReflectionsData,
  getScheduledMassReadingsReflectionsData,
  getSundayMassReflectionsData,
  getTodayMassReadingsReflectionData,
  parseMassReadingsSearchParams,
} from "@/lib/massReadingsReflections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Mass Readings Reflections",
  description:
    "Reflect on the daily and Sunday Mass readings with Catholic insights, prayer, Scripture themes, and practical application.",
  path: "/reflections/mass-readings",
});

export default async function MassReadingsReflectionsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const state = parseMassReadingsSearchParams(params);
  const today = await getTodayMassReadingsReflectionData();
  const [published, scheduled, sunday, daily, facets, filtered] = await Promise.all([
    getPublishedMassReadingsReflectionsData(),
    getScheduledMassReadingsReflectionsData(),
    getSundayMassReflectionsData(),
    getDailyMassReflectionsData(),
    getMassReadingsFacetOptionsData(),
    filterMassReadingsReflectionsData(state, { includeScheduled: true }),
  ]);
  const hasFilters = Boolean(
    state.q ||
      state.type ||
      state.season ||
      state.cycleYear ||
      state.weekdayCycle ||
      state.lectionaryNumber ||
      state.scriptureReference,
  );

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        {today ? (
          <section>
            <TodayMassReflectionCard reflection={today} mode="today" />
            <TodayMassReflectionFull reflection={today} />
          </section>
        ) : null}

        <div className="mt-10">
          <DailyReturnPrompt
            eyebrow="Reading habit"
            title="Come back with tomorrow's readings."
            summary="Let the daily Mass readings become a steady rhythm: read, pray, carry one word into the day, and return for the next reflection."
            primaryHref="/today"
            primaryLabel="Open Today's Guide"
            secondaryHref="/reflections/mass-readings/calendar"
            secondaryLabel="View Calendar"
          />
        </div>

        <MassReadingsGoogleCalendarEmbed />

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

        <div className="mt-14">
          <MassReadingsReflectionHero
            primaryHref={today ? `/reflections/mass-readings/${today.slug}` : "/reflections/mass-readings/calendar"}
          />
        </div>

        <SundayMassReflectionsSection reflections={sunday} />
        <DailyMassReflectionsSection reflections={daily} />

        <section className="mt-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Archive"
              title="Past Mass reading reflections"
              summary="A calm archive of published reflections for daily Mass, Sundays, solemnities, and feast days."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/reflections/mass-readings/archive" className="btn btn-secondary focus-ring">
                Archive view
              </Link>
              <Link href="/reflections/mass-readings/calendar" className="btn btn-secondary focus-ring">
                Calendar view
              </Link>
            </div>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {published.slice(0, 6).map((reflection) => (
              <MassReflectionPostCard key={reflection.id} reflection={reflection} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeader
            eyebrow="Read with the Church"
            title="Open the Bible alongside the readings"
            summary="If you want a wider Catholic guide to Scripture, translations, prayer, and how Catholics read the Bible with the Church, continue to the Bible page."
          />
          <div className="card-parchment mt-7 p-6">
            <Link href="/bible" className="btn btn-secondary focus-ring justify-center">
              Visit The Bible
            </Link>
          </div>
        </section>

        <ExternalReflectionResources />

        <section className="mt-14">
          <SectionHeader
            eyebrow="Search and filter"
            title="Find a Mass reading reflection"
            summary="Browse by daily Mass, Sunday Mass, solemnity, feast day, liturgical season, year cycle, lectionary number, or reading reference."
          />
          <div className="mt-7">
            <MassReflectionFilters state={state} facets={facets} action="/reflections/mass-readings" />
          </div>
          {hasFilters ? (
            <div className="mt-8">
              <SectionHeader
                eyebrow="Filtered results"
                title={`${filtered.length} reflection${filtered.length === 1 ? "" : "s"} found`}
              />
              {filtered.length > 0 ? (
                <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((reflection) => (
                    <MassReflectionPostCard key={reflection.id} reflection={reflection} />
                  ))}
                </div>
              ) : (
                <div className="card-parchment mt-7 p-6">
                  <h2 className="font-display text-3xl font-semibold text-navy">No reflections found</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Try another combination of type, season, cycle, or reading reference.
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}
