import type { Metadata } from "next";
import { VirtueCheckInForm } from "@/components/virtue-tracker/VirtueCheckInForm";
import { VirtueTrackerNav } from "@/components/virtue-tracker/VirtueTrackerNav";
import { VirtueTrackerNotice } from "@/components/virtue-tracker/VirtueTrackerNotice";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Virtue Tracker Check-In",
  description: "Save a private local check-in for virtues, struggles, grace, and one next step.",
  path: "/virtue-tracker/check-in",
});

export default function VirtueTrackerCheckInPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <VirtueTrackerNav />
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Check-in</p>
            <h1 className="font-display mt-2 text-5xl font-semibold leading-tight text-navy">Begin with grace, then name what needs healing.</h1>
          </div>
          <VirtueTrackerNotice compact />
        </div>
        <VirtueCheckInForm />
      </section>
    </div>
  );
}
