import type { Metadata } from "next";
import { SaintCalendarView } from "@/components/saints/SaintCalendarView";
import { SaintsLiturgicalYear } from "@/components/saints/SaintsLiturgicalYear";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Saint Feast Calendar",
  description: "Browse the Daily Oratory saint calendar by feast month, with original summaries and Franciscan Media-aligned reference dates.",
  path: "/saints/calendar",
});

export default async function SaintCalendarPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <h1 className="font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Saint Feast Calendar</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          This Daily Oratory calendar now follows a dedicated saint-of-the-day editorial sheet that is designed
          to stay aligned with the Franciscan Media Saint of the Day calendar while using original Daily Oratory
          summaries. Feast days and liturgical ranks can still vary by country, diocese, parish, and religious
          calendar, so confirm local observances through your parish or bishops&apos; conference when needed.
        </p>
        <div className="mt-10">
          <SaintCalendarView />
        </div>
        <SaintsLiturgicalYear />
      </section>
    </div>
  );
}
