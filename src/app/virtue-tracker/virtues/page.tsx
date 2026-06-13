import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { VirtueLibraryView } from "@/components/virtue-tracker/VirtueLibraryView";
import { VirtueTrackerNav } from "@/components/virtue-tracker/VirtueTrackerNav";
import { VirtueTrackerNotice } from "@/components/virtue-tracker/VirtueTrackerNotice";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Virtue Library",
  description: "Theological virtues, cardinal virtues, and contrary virtues for private Catholic reflection.",
  path: "/virtue-tracker/virtues",
});

export default function VirtueLibraryPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <VirtueTrackerNav />
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <SectionHeader
            eyebrow="Virtue library"
            title="The virtues that shape a Catholic life"
            summary="Pray with the theological virtues, cardinal virtues, and concrete contrary virtues."
          />
          <VirtueTrackerNotice compact />
        </div>
        <VirtueLibraryView />
      </section>
    </div>
  );
}
