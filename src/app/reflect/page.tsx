import type { Metadata } from "next";
import { DailyReflectionsSection } from "@/components/home/DailyReflectionsSection";
import { SectionPage } from "@/components/section-page";
import { sectionPages } from "@/content/sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Reflect",
  description: "Mass Readings Reflections, guided examination of conscience, and Scripture prayer.",
  path: "/reflect",
});

export default function ReflectPage() {
  return (
    <>
      <SectionPage section={sectionPages.find((section) => section.slug === "reflect")!} />
      <div id="mass-readings-reflections" className="bg-background">
        <DailyReflectionsSection />
      </div>
    </>
  );
}
