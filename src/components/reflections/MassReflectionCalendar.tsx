import Link from "next/link";
import { formatDate } from "@/lib/format";
import { groupReflectionsByMonth } from "@/lib/massReadingsReflections";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";

export function MassReflectionCalendar({
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
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {group.reflections.map((reflection) => (
              <Link
                key={reflection.id}
                href={`/reflections/mass-readings/${reflection.slug}`}
                className="focus-ring rounded-md border border-stone bg-ivory p-4 hover:border-gold"
              >
                <p className="text-xs font-bold uppercase text-burgundy">{formatDate(reflection.reflectionDate)}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{reflection.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{reflection.liturgicalDay}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
