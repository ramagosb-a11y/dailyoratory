import type { Metadata } from "next";
import { PatronageGroupsView } from "@/components/saints/PatronageGroupsView";
import { SaintCompanionNotice } from "@/components/saints/SaintCompanionNotice";
import { SaintsNav } from "@/components/saints/SaintsNav";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Saint Patronage",
  description: "Browse saint companions by patronage groups and ask their intercession.",
  path: "/saints/patronage",
});

export default function SaintPatronagePage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <SaintsNav />
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <SectionHeader
            eyebrow="Patronage"
            title="Ask the saints' intercession"
            summary="Browse patronage groups for work, family, study, suffering, service, and ordinary life."
          />
          <SaintCompanionNotice compact />
        </div>
        <PatronageGroupsView />
      </section>
    </div>
  );
}
