import { getReflectionTypeLabel } from "@/lib/massReadingsReflections";
import type { ReflectionType } from "@/types/massReadingsReflections";

export function MassReflectionTypeBadge({ type }: { type: ReflectionType }) {
  return (
    <span className="rounded-sm bg-burgundy px-3 py-1 text-xs font-bold uppercase text-ivory">
      {getReflectionTypeLabel(type)}
    </span>
  );
}
