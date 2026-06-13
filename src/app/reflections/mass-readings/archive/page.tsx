import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MassReflectionArchiveList } from "@/components/reflections/MassReflectionArchiveList";
import { SectionHeader } from "@/components/section-header";
import { getPublishedMassReadingsReflectionsData } from "@/lib/massReadingsReflections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Mass Readings Reflection Archive",
  description: "Browse past Daily Oratory Mass readings reflections by month and liturgical day.",
  path: "/reflections/mass-readings/archive",
});

export default async function MassReadingsArchivePage() {
  const reflections = await getPublishedMassReadingsReflectionsData();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Reflect", href: "/reflect" },
            { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
            { label: "Archive" },
          ]}
        />
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Archive"
            title="Mass Readings Reflection Archive"
            summary="Browse past reflections by month, liturgical season, and date."
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
          <MassReflectionArchiveList reflections={reflections} />
        </div>
      </main>
    </div>
  );
}
