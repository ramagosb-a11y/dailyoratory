import type { Metadata } from "next";
import { SaintCompanionNotice } from "@/components/saints/SaintCompanionNotice";
import { SaintSettingsView } from "@/components/saints/SaintSettingsView";
import { SaintsNav } from "@/components/saints/SaintsNav";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Saint Companion Settings",
  description: "Export or delete locally saved saint companions and review the Google Sheets admin schema for saint content.",
  path: "/saints/settings",
});

export default function SaintSettingsPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <SaintsNav />
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Settings</p>
            <h1 className="font-display mt-2 text-5xl font-semibold leading-tight text-navy">
              Manage saint companion data and content fields.
            </h1>
          </div>
          <SaintCompanionNotice compact />
        </div>
        <SaintSettingsView />
      </section>
    </div>
  );
}
