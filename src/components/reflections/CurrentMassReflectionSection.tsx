"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TodayMassReflectionFull } from "@/components/reflections/TodayMassReflectionFull";
import {
  getCurrentSiteIsoDate,
  selectMassReflectionForIsoDate,
  type MassReflectionSelection,
} from "@/lib/staticDailyContent";
import type { ISODateString } from "@/types/content";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";

type CurrentMassReflectionSectionProps = {
  reflections: MassReadingsReflection[];
  initialReferenceDate: ISODateString;
};

export function CurrentMassReflectionSection({
  reflections,
  initialReferenceDate,
}: CurrentMassReflectionSectionProps) {
  const [selection, setSelection] = useState<MassReflectionSelection | null>(() =>
    selectMassReflectionForIsoDate(reflections, initialReferenceDate),
  );

  useEffect(() => {
    function refreshReflection() {
      setSelection(selectMassReflectionForIsoDate(reflections, getCurrentSiteIsoDate()));
    }

    refreshReflection();
    const intervalId = window.setInterval(refreshReflection, 15 * 60 * 1000);
    return () => window.clearInterval(intervalId);
  }, [reflections]);

  if (!selection?.reflection) return <section data-current-reflection><h2>No current reflection is available</h2><p>Browse the archive or calendar while the next reading is prepared.</p><Link href="/reflections/mass-readings/archive">Browse the archive</Link>{" · "}<Link href="/reflections/mass-readings/calendar">Browse calendar</Link></section>;

  return (
    <section data-current-reflection>
      {selection.mode === "today" ? null : (
        <div className="mb-5 rounded-md border border-gold/50 bg-parchment px-4 py-3 text-sm leading-7 text-muted">
          {selection.mode === "fallback"
            ? "A reflection for today's exact date is not bundled in this static build yet, so Daily Oratory is showing the most recent available Mass readings reflection."
            : "The next scheduled Mass readings reflection is shown until today's reflection is available in the static build."}
        </div>
      )}

      <TodayMassReflectionFull reflection={selection.reflection} manuscript />
    </section>
  );
}
