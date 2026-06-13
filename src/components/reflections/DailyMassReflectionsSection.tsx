import { MassReflectionPostCard } from "@/components/reflections/MassReflectionPostCard";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";

export function DailyMassReflectionsSection({
  reflections,
}: {
  reflections: MassReadingsReflection[];
}) {
  if (reflections.length === 0) return null;

  return (
    <section className="mt-14">
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Daily Mass reflections</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
          Daily prayer with the Church&apos;s readings.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          Keep close to the Word through daily Mass reflections, weekday cycles, and the quiet formation of ordinary days.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reflections.slice(0, 3).map((reflection, index) => (
          <MassReflectionPostCard
            key={reflection.id}
            reflection={reflection}
            emphasis={index === 0}
            highlightLabel={index === 0 ? "Today's daily reflection" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
