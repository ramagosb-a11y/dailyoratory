import type { Metadata } from "next";
import { ConfessionNav } from "@/components/confession/ConfessionNav";
import { ExaminationTopPanel } from "@/components/confession/guided-examination/ExaminationTopPanel";
import { GuidedExaminationPathClient } from "@/components/confession/guided-examination/GuidedExaminationClient";
import { getGuidedExaminationPath } from "@/data/guidedExamination";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Beatitudes Examination",
  description: "Review confession preparation prompts organized around the Beatitudes. Notes stay local only.",
  path: "/confession/examination/beatitudes",
});

export default function BeatitudesExaminationPage() {
  const path = getGuidedExaminationPath("beatitudes");
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
