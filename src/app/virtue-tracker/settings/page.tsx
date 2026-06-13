import type { Metadata } from "next";
import { VirtueTrackerNav } from "@/components/virtue-tracker/VirtueTrackerNav";
import { VirtueTrackerNotice } from "@/components/virtue-tracker/VirtueTrackerNotice";
import { VirtueTrackerSettingsView } from "@/components/virtue-tracker/VirtueTrackerSettingsView";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Virtue Tracker Settings",
  description: "Configure private local virtue tracker settings, export check-ins, or delete local data.",
  path: "/virtue-tracker/settings",
});

export default function VirtueTrackerSettingsPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <VirtueTrackerNav />
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Settings</p>
            <h1 className="font-display mt-2 text-5xl font-semibold leading-tight text-navy">Manage local tracker data.</h1>
          </div>
          <VirtueTrackerNotice compact />
        </div>
        <VirtueTrackerSettingsView />
      </section>
    </div>
  );
}
