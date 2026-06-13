import type { Metadata } from "next";
import { LiturgicalCalendarView } from "@/components/liturgical-living/LiturgicalCalendarView";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createPageMetadata({
  title: "Liturgical Calendar",
  description: "Daily Oratory's embedded liturgical Google Calendar, with PDF-derived liturgical days, colors, feasts, and official readings links.",
  path: "/liturgical-living/calendar",
});

export default function LiturgicalCalendarPage() {
  return <LiturgicalCalendarView />;
}
