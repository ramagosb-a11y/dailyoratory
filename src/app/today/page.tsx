import type { Metadata } from "next";
import { LiturgicalDashboard } from "@/components/liturgical-living/LiturgicalDashboard";
import { DailyReturnPrompt } from "@/components/retention/DailyReturnPrompt";
import { getLiturgicalDashboardModelWithGoogleCalendar } from "@/lib/liturgicalLiving";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createPageMetadata({
  title: "Today in the Church",
  description: "Today's liturgical day, season, color, readings link, prayer, devotion, family idea, works of mercy, and holy days.",
  path: "/today",
});

export default async function TodayPage() {
  return (
    <>
      <LiturgicalDashboard model={await getLiturgicalDashboardModelWithGoogleCalendar()} />
      <div className="paper-texture">
        <section className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
          <DailyReturnPrompt
            title="Make this your daily doorway."
            summary="Return tomorrow for the next liturgical day, a fresh prayer, the readings link, and one simple way to live the season."
            primaryHref="/reflections/mass-readings"
            primaryLabel="Read Mass Reflections"
            secondaryHref="/pray/today"
            secondaryLabel="Pray Today"
          />
        </section>
      </div>
    </>
  );
}
