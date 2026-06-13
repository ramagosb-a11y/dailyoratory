import type { Metadata } from "next";
import { ConfessionNav } from "@/components/confession/ConfessionNav";
import { ExaminationTopPanel } from "@/components/confession/guided-examination/ExaminationTopPanel";
import { ExaminationReviewHub } from "@/components/confession/guided-examination/GuidedExaminationClient";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Review Confession Preparation",
  description: "Review marked prompts and private notes for confession preparation. All notes stay local only.",
  path: "/confession/examination/review",
});

export default function ExaminationReviewPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <ExaminationTopPanel />
        <div className="mt-10 mb-8 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <SectionHeader
            eyebrow="Private review"
            title="Review what you may bring to confession."
            summary="This page gathers only the prompts you mark and the notes you write on this device."
          />
        </div>
        <ExaminationReviewHub />
        <div className="mt-10">
          <ConfessionNav />
        </div>
      </section>
    </div>
  );
}
