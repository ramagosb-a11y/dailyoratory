import type { Metadata } from "next";
import { LiturgicalDashboard } from "@/components/liturgical-living/LiturgicalDashboard";
import { getLiturgicalDashboardModelWithGoogleCalendar } from "@/lib/liturgicalLiving";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createPageMetadata({
  title: "Liturgical Living Dashboard",
  description: "A Daily Oratory dashboard for prayer, readings references, holy days, family prayer, and works of mercy.",
  path: "/dashboard",
});

export default async function DashboardPage() {
  return <LiturgicalDashboard model={await getLiturgicalDashboardModelWithGoogleCalendar()} />;
}
