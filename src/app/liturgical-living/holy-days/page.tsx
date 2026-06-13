import type { Metadata } from "next";
import { LiturgicalHolyDaysView } from "@/components/liturgical-living/LiturgicalHolyDaysView";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Holy Days",
  description: "Upcoming holy days, solemnities, liturgical colors, local observance notes, and Catholic preparation.",
  path: "/liturgical-living/holy-days",
});

export default function HolyDaysPage() {
  return <LiturgicalHolyDaysView />;
}
