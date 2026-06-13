import type { Metadata } from "next";
import { VirtueDashboardView } from "@/components/virtue-tracker/VirtueDashboardView";
import { VirtueTrackerNav } from "@/components/virtue-tracker/VirtueTrackerNav";
import { VirtueTrackerNotice } from "@/components/virtue-tracker/VirtueTrackerNotice";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Virtue Tracker Dashboard",
  description: "Review private local virtue tracker check-ins and gentle pattern summaries.",
  path: "/virtue-tracker/dashboard",
});

export default function VirtueTrackerDashboardPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <VirtueTrackerNav />
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Private dashboard</p>
            <h1 className="font-display mt-2 text-5xl font-semibold leading-tight text-navy">Review virtues, struggles, and next steps.</h1>
          </div>
          <VirtueTrackerNotice compact />
        </div>
        <VirtueDashboardView />
      </section>
    </div>
  );
}
