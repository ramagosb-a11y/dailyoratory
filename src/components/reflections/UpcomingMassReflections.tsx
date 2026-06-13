import { MassReflectionPostCard } from "@/components/reflections/MassReflectionPostCard";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";

export function UpcomingMassReflections({
  reflections,
}: {
  reflections: MassReadingsReflection[];
}) {
  if (reflections.length === 0) {
    return (
      <div className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">No scheduled reflections yet</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Published reflections remain available in the archive while future entries are prepared.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {reflections.map((reflection) => (
        <MassReflectionPostCard key={reflection.id} reflection={reflection} />
      ))}
    </div>
  );
}
