import type { Metadata } from "next";
import { MyPathwaysView } from "@/components/pathways/MyPathwaysView";
import { PathwaysNav } from "@/components/pathways/PathwaysNav";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "My Pathways",
  description: "View locally saved Daily Oratory spiritual growth pathways and continue your current step.",
  path: "/pathways/my-pathways",
});

export default function MyPathwaysPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PathwaysNav />
        <SectionHeader
          eyebrow="My Pathways"
          title="Continue with peace."
          summary="Saved pathway progress stays on this device. Use it as a bookmark for prayer and formation, not as a score."
        />
        <div className="mt-8">
          <MyPathwaysView />
        </div>
      </section>
    </div>
  );
}
