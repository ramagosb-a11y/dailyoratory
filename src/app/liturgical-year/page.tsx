import type { Metadata } from "next";
import { SectionPage } from "@/components/section-page";
import { sectionPages } from "@/content/sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Liturgical Year",
  description: "Easter, Lent, Advent, Pentecost, Ordinary Time, feasts, and seasonal practices.",
  path: "/liturgical-year",
});

export default function LiturgicalYearPage() {
  return <SectionPage section={sectionPages.find((section) => section.slug === "liturgical-year")!} />;
}
