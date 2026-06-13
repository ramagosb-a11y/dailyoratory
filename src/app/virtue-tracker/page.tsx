import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { VicePairingGrid } from "@/components/virtue-tracker/VicePairingGrid";
import { VirtueDashboardView } from "@/components/virtue-tracker/VirtueDashboardView";
import { VirtueTrackerNav } from "@/components/virtue-tracker/VirtueTrackerNav";
import { VirtueTrackerNotice } from "@/components/virtue-tracker/VirtueTrackerNotice";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Virtue and Vice Tracker",
  description: "A private local-only Catholic reflection tool for noticing virtues, struggles, patterns, and grace-filled next steps.",
  path: "/virtue-tracker",
});

export default function VirtueTrackerPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <VirtueTrackerNav />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Virtue and Vice Tracker</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Notice grace, name patterns, and choose one faithful next step.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Reflect privately on theological virtues, cardinal virtues, capital vices, and the contrary virtues that help the heart return to Christ.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/virtue-tracker/check-in" className="btn btn-primary focus-ring">
                Start check-in
              </Link>
              <Link href="/virtue-tracker/virtues" className="btn btn-secondary focus-ring">
                View virtues
              </Link>
              <Link href="/body-soul-spirit" className="btn btn-secondary focus-ring">
                Interior temple
              </Link>
              <Link href="/daily-examen" className="btn btn-secondary focus-ring">
                Daily Examen
              </Link>
            </div>
          </div>
          <VirtueTrackerNotice />
        </div>

        <section className="mt-14">
          <SectionHeader
            eyebrow="Private dashboard"
            title="A quiet review of what you have noticed"
            summary="No account, no public sharing, no streaks, and no holiness scores."
          />
          <div className="mt-8">
            <VirtueDashboardView />
          </div>
        </section>

        <section className="mt-14">
          <SectionHeader
            eyebrow="Contrary virtues"
            title="Capital vices and grace-filled responses"
            summary="Use these pairings as a gentle way to name temptation and ask for a concrete virtue."
          />
          <div className="mt-8">
            <VicePairingGrid />
          </div>
        </section>
      </section>
    </div>
  );
}
