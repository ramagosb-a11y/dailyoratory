import type { Metadata } from "next";
import Link from "next/link";
import { ConfessionNav } from "@/components/confession/ConfessionNav";
import { ExaminationTopPanel } from "@/components/confession/guided-examination/ExaminationTopPanel";
import { ExaminationOverview } from "@/components/confession/guided-examination/GuidedExaminationClient";
import { DailyReturnPrompt } from "@/components/retention/DailyReturnPrompt";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Guided Examination of Conscience",
  description: "A private local-only guided examination of conscience for confession preparation with pastoral disclaimers and no sin-gravity determinations.",
  path: "/confession/examination",
});

export default function GuidedExaminationPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <ExaminationTopPanel />
        <div className="mt-10">
          <ExaminationOverview />
        </div>
        <div className="mt-10">
          <DailyReturnPrompt
            eyebrow="Confession preparation"
            title="Prepare steadily, without turning inward alone."
            summary="Use the guided examination when you need clarity, then return to daily prayer so repentance stays joined to trust in mercy."
            primaryHref="/confession/examination/start"
            primaryLabel="Begin Guided Examination"
            secondaryHref="/daily-examen"
            secondaryLabel="Pray the Daily Examen"
          />
        </div>
        <section className="card-parchment mt-10 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Detachment from sin</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Prepare the Heart, Not Only the Memory</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            An examination of conscience can help you name sin honestly, but grace also invites the heart to
            reject sin more deeply. If you want help reflecting on detachment from sin without anxious
            self-measurement, use the guide below.
          </p>
          <div className="mt-6">
            <Link href="/indulgences/detachment-from-sin" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Open the Detachment Guide
            </Link>
          </div>
        </section>
        <section className="card-parchment mt-10 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Penitential prayer</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Pray Psalm 51 or Begin the Seven Psalms</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Before or after your examination, pray Psalm 51 or begin the Seven Penitential Psalms to ask for
            contrition, mercy, and a clean heart.
          </p>
          <div className="mt-6">
            <Link href="/prayers/seven-penitential-psalms" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Pray the Penitential Psalms
            </Link>
          </div>
        </section>
        <div className="mt-10">
          <ConfessionNav />
        </div>
      </section>
    </div>
  );
}
