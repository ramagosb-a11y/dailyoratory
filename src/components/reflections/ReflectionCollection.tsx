import Link from "next/link";
import { ReflectionCard } from "@/components/reflections/ReflectionCard";
import type { DailyReflectionRecord } from "@/types/reflections";

export function ReflectionCollection({
  reflections,
  emptyTitle = "No reflections found",
  emptyText = "Try another date, season, topic, or search term.",
  highlightedReflectionId,
  highlightedLabel = "Upcoming reflection",
}: {
  reflections: DailyReflectionRecord[];
  emptyTitle?: string;
  emptyText?: string;
  highlightedReflectionId?: string;
  highlightedLabel?: string;
}) {
  if (reflections.length === 0) {
    return (
      <div className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">{emptyTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-muted">{emptyText}</p>
        <Link href="/reflections" className="btn btn-secondary focus-ring mt-5">
          Return to reflections
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reflections.map((reflection) => (
        <ReflectionCard
          key={reflection.id}
          reflection={reflection}
          emphasis={reflection.id === highlightedReflectionId}
          highlightLabel={reflection.id === highlightedReflectionId ? highlightedLabel : undefined}
        />
      ))}
    </div>
  );
}
