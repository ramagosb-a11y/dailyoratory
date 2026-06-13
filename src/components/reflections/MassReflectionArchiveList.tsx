import Link from "next/link";
import { formatDate } from "@/lib/format";
import { groupReflectionsByMonth, getReflectionTypeLabel } from "@/lib/massReadingsReflections";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";

export function MassReflectionArchiveList({
  reflections,
}: {
  reflections: MassReadingsReflection[];
}) {
  const groups = groupReflectionsByMonth(reflections);

  return (
    <div className="grid gap-6">
      {groups.map((group) => (
        <section key={group.month} className="dashboard-card p-5 sm:p-6">
          <h2 className="font-display text-3xl font-semibold text-navy">{group.month}</h2>
          <ul className="mt-5 space-y-3">
            {group.reflections.map((reflection) => (
              <li key={reflection.id} className="rounded-md border border-stone bg-ivory p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase text-burgundy">
                      {formatDate(reflection.reflectionDate)} • {getReflectionTypeLabel(reflection.reflectionType)}
                    </p>
                    <Link href={`/reflections/mass-readings/${reflection.slug}`} className="focus-ring mt-2 inline-flex rounded-sm font-display text-2xl font-semibold text-navy hover:text-burgundy">
                      {reflection.title}
                    </Link>
                    <p className="mt-2 text-sm leading-7 text-muted">{reflection.shortDescription}</p>
                  </div>
                  <span className="season-pill">{reflection.liturgicalSeason}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
