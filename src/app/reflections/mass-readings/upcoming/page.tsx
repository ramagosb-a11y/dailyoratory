import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MassReadingsGoogleCalendarEmbed } from "@/components/reflections/MassReadingsGoogleCalendarEmbed";
import { UpcomingMassReflections } from "@/components/reflections/UpcomingMassReflections";
import { SectionHeader } from "@/components/section-header";
import { getScheduledMassReadingsReflectionsData } from "@/lib/massReadingsReflections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Upcoming Mass Readings Reflections",
  description: "View scheduled Daily Oratory Mass readings reflections for upcoming daily Mass, Sunday Mass, and solemnities.",
  path: "/reflections/mass-readings/upcoming",
});

export default async function UpcomingMassReadingsPage() {
  const reflections = await getScheduledMassReadingsReflectionsData();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Reflect", href: "/reflect" },
            { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
            { label: "Upcoming" },
          ]}
        />
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Upcoming"
            title="Upcoming Mass Readings Reflections"
            summary="See what Daily Oratory has scheduled for future daily Mass, Sunday Mass, solemnity, and feast day reflections."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring">
              Main view
            </Link>
            <Link href="/reflections/mass-readings/calendar" className="btn btn-secondary focus-ring">
              Calendar view
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <UpcomingMassReflections reflections={reflections} />
        </div>

        <MassReadingsGoogleCalendarEmbed />
      </main>
    </div>
  );
}
