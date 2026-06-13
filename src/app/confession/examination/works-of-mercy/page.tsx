import type { Metadata } from "next";
import { ConfessionNav } from "@/components/confession/ConfessionNav";
import { ExaminationTopPanel } from "@/components/confession/guided-examination/ExaminationTopPanel";
import { GuidedExaminationPathClient } from "@/components/confession/guided-examination/GuidedExaminationClient";
import { getGuidedExaminationPath } from "@/data/guidedExamination";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Works of Mercy Examination",
  description: "Review confession preparation prompts for mercy toward the poor, lonely, grieving, sick, and forgotten. Notes stay local only.",
  path: "/confession/examination/works-of-mercy",
});

export default function WorksOfMercyExaminationPage() {
  const path = getGuidedExaminationPath("works-of-mercy");
  if (!path) return null;

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <ExaminationTopPanel />
        <div className="mt-10">
          <GuidedExaminationPathClient path={path} />
        </div>
        <div className="mt-10">
          <ConfessionNav />
        </div>
      </section>
    </div>
  );
}
