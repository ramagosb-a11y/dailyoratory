import type { Metadata } from "next";
import { PathwaysNav } from "@/components/pathways/PathwaysNav";
import { RecommendedPathwaysView } from "@/components/pathways/RecommendedPathwaysView";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Recommended Pathways",
  description: "Daily Oratory pathway recommendations shaped by local settings for prayer, formation, liturgical living, mercy, and mission.",
  path: "/pathways/recommended",
});

export default function RecommendedPathwaysPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PathwaysNav />
        <SectionHeader
          eyebrow="Recommended"
          title="Formation suggestions for your current season."
          summary="Recommendations use only local settings on this device. They help narrow the library without creating an account."
        />
        <div className="mt-8">
          <RecommendedPathwaysView />
        </div>
      </section>
    </div>
  );
}
