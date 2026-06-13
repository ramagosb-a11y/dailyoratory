import { MassReflectionPostCard } from "@/components/reflections/MassReflectionPostCard";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";

export function SundayMassReflectionsSection({
  reflections,
}: {
  reflections: MassReadingsReflection[];
}) {
  if (reflections.length === 0) return null;

  return (
    <section className="mt-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Sunday Mass reflections</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
            Prepare for Sunday with the Church.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Pray ahead with Sunday Mass, solemnity, and principal feast reflections when they are available.
          </p>
        </div>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reflections.slice(0, 3).map((reflection, index) => (
          <MassReflectionPostCard
            key={reflection.id}
            reflection={reflection}
            emphasis={index === 0}
            highlightLabel={index === 0 ? "Featured Sunday reflection" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
