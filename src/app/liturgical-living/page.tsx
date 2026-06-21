import type { Metadata } from "next";
import { LiturgicalDashboard } from "@/components/liturgical-living/LiturgicalDashboard";
import { getLiturgicalDashboardModelWithGoogleCalendar } from "@/lib/liturgicalLiving";
import { createPageMetadata } from "@/lib/metadata";

export const revalidate = 900;

export const metadata: Metadata = createPageMetadata({
  title: "Liturgical Living",
  description: "Pray with the Church through today's liturgical day, season, readings references, devotions, and family practices.",
  path: "/liturgical-living",
});

export default async function LiturgicalLivingPage() {
  return <LiturgicalDashboard model={await getLiturgicalDashboardModelWithGoogleCalendar()} />;
}
