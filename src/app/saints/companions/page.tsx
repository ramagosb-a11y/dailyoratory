import type { Metadata } from "next";
import { SavedSaintCompanionsView } from "@/components/saints/SavedSaintCompanionsView";
import { SaintCompanionNotice } from "@/components/saints/SaintCompanionNotice";
import { SaintsNav } from "@/components/saints/SaintsNav";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Saved Saint Companions",
  description: "Review saint companions saved locally in this browser.",
  path: "/saints/companions",
});

export default function SavedCompanionsPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <SaintsNav />
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <SectionHeader
            eyebrow="Saved companions"
            title="Saints you may want to pray with"
            summary="Saved companions and notes stay in this browser only."
          />
          <SaintCompanionNotice compact />
        </div>
        <SavedSaintCompanionsView />
      </section>
    </div>
  );
}
