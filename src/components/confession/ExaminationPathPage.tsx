import { ExaminationPromptList } from "@/components/confession/ExaminationPromptList";
import { ExaminationNotices } from "@/components/confession/ExaminationNotices";
import { SectionHeader } from "@/components/section-header";
import { getExaminationSectionsByPath, getExaminationSectionsByPaths, getPathLabel } from "@/lib/examination";
import type { ExaminationPath } from "@/types/examination";

type ExaminationPathPageProps =
  | {
      path: ExaminationPath;
      paths?: never;
      title?: string;
      summary?: string;
    }
  | {
      path?: never;
      paths: ExaminationPath[];
      title: string;
      summary?: string;
    };

export function ExaminationPathPage({ path, paths, title, summary }: ExaminationPathPageProps) {
  const sections = path ? getExaminationSectionsByPath(path) : getExaminationSectionsByPaths(paths);
  const heading = title ?? (path ? getPathLabel(path) : "Examination path");

  return (
    <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
      <div className="grid gap-6">
        <SectionHeader
          eyebrow="Examination path"
          title={heading}
          summary={summary ?? "Mark only what helps you prepare for confession clearly. Notes remain on this device."}
        />
        <ExaminationNotices compact />
      </div>
      <ExaminationPromptList sections={sections} />
    </div>
  );
}
