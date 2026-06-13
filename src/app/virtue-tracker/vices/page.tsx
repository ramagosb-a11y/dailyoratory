import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { ViceLibraryView } from "@/components/virtue-tracker/ViceLibraryView";
import { VirtueTrackerNav } from "@/components/virtue-tracker/VirtueTrackerNav";
import { VirtueTrackerNotice } from "@/components/virtue-tracker/VirtueTrackerNotice";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Vice Library",
  description: "Capital vices and contrary virtues for prayerful, non-shaming Catholic reflection.",
  path: "/virtue-tracker/vices",
});

export default function ViceLibraryPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <VirtueTrackerNav />
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <SectionHeader
            eyebrow="Vice library"
            title="Name struggles without shame"
            summary="The capital vices are presented with contrary virtues, warning signs, and grace-filled next steps."
          />
          <VirtueTrackerNotice compact />
        </div>
        <ViceLibraryView />
      </section>
    </div>
  );
}
