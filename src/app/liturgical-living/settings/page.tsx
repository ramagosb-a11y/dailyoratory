import type { Metadata } from "next";
import { LiturgicalSettingsView } from "@/components/liturgical-living/LiturgicalSettingsView";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Liturgical Calendar Settings",
  description: "Local calendar settings and Google Sheets schema for maintaining Daily Oratory liturgical living data.",
  path: "/liturgical-living/settings",
});

export default function SettingsPage() {
  return <LiturgicalSettingsView />;
}
