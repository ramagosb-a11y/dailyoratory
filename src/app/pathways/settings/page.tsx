import type { Metadata } from "next";
import { PathwaySettingsView } from "@/components/pathways/PathwaySettingsView";
import { PathwaysNav } from "@/components/pathways/PathwaysNav";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Pathway Settings",
  description: "Set local Daily Oratory pathway preferences for spiritual season, pace, household, and formation focus.",
  path: "/pathways/settings",
});

export default function PathwaySettingsPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PathwaysNav />
        <SectionHeader
          eyebrow="Settings"
          title="Shape recommendations gently."
          summary="These settings stay in localStorage on this device and help Daily Oratory suggest formation tracks."
        />
        <div className="mt-8">
          <PathwaySettingsView />
        </div>
      </section>
    </div>
  );
}
