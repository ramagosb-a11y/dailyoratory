import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MassReflectionCalendar } from "@/components/reflections/MassReflectionCalendar";
import { MassReadingsGoogleCalendarEmbed } from "@/components/reflections/MassReadingsGoogleCalendarEmbed";
import { SectionHeader } from "@/components/section-header";
import {
  getMassReadingsReflectionsData,
} from "@/lib/massReadingsReflections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Mass Readings Reflection Calendar",
  description: "Browse Mass readings reflections in calendar order for daily Mass, Sunday Mass, and solemnities.",
  path: "/reflections/mass-readings/calendar",
});

export default async function MassReadingsCalendarPage() {
  const reflections = (await getMassReadingsReflectionsData()).filter(
    (reflection) => reflection.status === "published" || reflection.status === "scheduled",
  );

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Reflect", href: "/reflect" },
            { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
            { label: "Calendar" },
          ]}
        />
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Calendar"
            title="Mass Readings Reflection Calendar"
            summary="See published and scheduled Mass reading reflections in calendar order."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring">
              Main view
            </Link>
            <Link href="/reflections/mass-readings/archive" className="btn btn-secondary focus-ring">
              Archive view
            </Link>
          </div>
        </div>
        <MassReadingsGoogleCalendarEmbed />
        <div className="mt-8">
          <MassReflectionCalendar reflections={reflections} />
        </div>
      </main>
    </div>
  );
}
