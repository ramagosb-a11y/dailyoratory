import type { Metadata } from "next";
import { ConfessionNav } from "@/components/confession/ConfessionNav";
import { ExaminationTopPanel } from "@/components/confession/guided-examination/ExaminationTopPanel";
import { ExaminationOverview } from "@/components/confession/guided-examination/GuidedExaminationClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Start Examination of Conscience",
  description: "Choose a private local-only examination mode, state of life, and paths for confession preparation.",
  path: "/confession/examination/start",
});

export default function ExaminationStartPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <ExaminationTopPanel />
        <div className="mt-10">
          <ExaminationOverview />
        </div>
        <div className="mt-10">
          <ConfessionNav />
        </div>
      </section>
    </div>
  );
}
