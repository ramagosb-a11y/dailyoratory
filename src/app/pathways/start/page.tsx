import type { Metadata } from "next";
import { PathwaysNav } from "@/components/pathways/PathwaysNav";
import { PathwayStartView } from "@/components/pathways/PathwayStartView";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Start a Pathway",
  description: "Choose a gentle Catholic formation starting point for prayer, confession, Mass, family prayer, healing, or service.",
  path: "/pathways/start",
});

export default function PathwayStartPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PathwaysNav />
        <SectionHeader
          eyebrow="Start"
          title="Choose the next faithful step."
          summary="Pick the sentence that sounds closest to your current desire. Daily Oratory will start the pathway and remember progress on this device."
        />
        <div className="mt-8">
          <PathwayStartView />
        </div>
      </section>
    </div>
  );
}
