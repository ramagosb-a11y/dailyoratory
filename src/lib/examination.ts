import {
  examinationPathOptions,
  guidedExaminationSections,
} from "@/data/examination";
import type { ExaminationMode, ExaminationPath, ExaminationPrompt, ExaminationStateOfLife } from "@/types/examination";

export const examinationBasePages = [
  { label: "Overview", href: "/confession/examination" },
  { label: "Start", href: "/confession/examination/start" },
  { label: "Review", href: "/confession/examination/review" },
  { label: "How to Go", href: "/confession/how-to-go" },
  { label: "Prayers", href: "/confession/prayers" },
] as const;

export function getExaminationSectionsByPath(path: ExaminationPath) {
  return guidedExaminationSections.filter((section) => section.path === path);
}

export function getExaminationSectionsByPaths(paths: ExaminationPath[]) {
  const selectedPaths = new Set(paths);
  return guidedExaminationSections.filter((section) => selectedPaths.has(section.path));
}

export function getExaminationPrompts({
  mode,
  stateOfLife,
  paths,
}: {
  mode: ExaminationMode;
  stateOfLife: ExaminationStateOfLife;
  paths: ExaminationPath[];
}) {
  const selectedPaths = new Set(paths);

  return guidedExaminationSections
    .filter((section) => selectedPaths.has(section.path))
    .map((section) => ({
      ...section,
      prompts: section.prompts.filter((prompt) => promptApplies(prompt, mode, stateOfLife)),
    }))
    .filter((section) => section.prompts.length > 0);
}

export function getPathLabel(path: ExaminationPath) {
  return examinationPathOptions.find((option) => option.value === path)?.label ?? path;
}

export function getAllExaminationPrompts() {
  return guidedExaminationSections.flatMap((section) => section.prompts);
}

function promptApplies(prompt: ExaminationPrompt, mode: ExaminationMode, stateOfLife: ExaminationStateOfLife) {
  const modeMatch = prompt.mode.includes(mode);
  const stateMatch = prompt.stateOfLife === "all" || prompt.stateOfLife.includes(stateOfLife);
  return modeMatch && stateMatch;
}
