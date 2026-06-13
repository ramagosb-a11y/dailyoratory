import Link from "next/link";
import { MassReflectionPostCard } from "@/components/reflections/MassReflectionPostCard";
import { getPublishedMassReadingsReflectionsData } from "@/lib/massReadingsReflections";

export async function DailyReflectionsSection() {
  const reflections = (await getPublishedMassReadingsReflectionsData()).slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Mass Readings Reflections</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
            Pray with the daily and Sunday Mass readings.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Catholic reflection, prayer, and practical application for the daily and Sunday liturgy.
          </p>
        </div>
        <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring w-fit">
          Read today&apos;s reflection
        </Link>
      </div>
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {reflections.map((reflection) => (
          <MassReflectionPostCard key={reflection.slug} reflection={reflection} />
        ))}
      </div>
    </section>
  );
}
