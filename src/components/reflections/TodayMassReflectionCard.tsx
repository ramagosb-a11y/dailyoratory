import { MassReflectionPostCard } from "@/components/reflections/MassReflectionPostCard";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";

export function TodayMassReflectionCard({
  reflection,
  mode = "today",
}: {
  reflection: MassReadingsReflection;
  mode?: "today" | "upcoming" | "fallback";
}) {
  const eyebrow =
    mode === "today"
      ? "Today's reflection"
      : mode === "upcoming"
        ? "Next scheduled reflection"
        : "Most recent published reflection";
  const highlightLabel =
    mode === "today" ? "Today" : mode === "upcoming" ? "Coming next" : "Most recent";
  const sourceSection =
    mode === "today" ? "today-reflection" : mode === "upcoming" ? "today-upcoming" : "today-fallback";

  return (
    <div>
      <p className="text-xs font-bold uppercase text-burgundy">{eyebrow}</p>
      <div className="mt-4">
        <MassReflectionPostCard
          reflection={reflection}
          emphasis
          highlightLabel={highlightLabel}
          sourceSection={sourceSection}
        />
      </div>
    </div>
  );
}
