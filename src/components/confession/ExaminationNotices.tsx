import { examinationPastoralDisclaimer, examinationPrivacyNote } from "@/data/examination";

export function ExaminationNotices({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`card-parchment ${compact ? "p-4" : "p-5"}`}>
      <p className="text-xs font-bold uppercase text-burgundy">Private preparation</p>
      <p className="mt-2 text-sm font-semibold leading-7 text-navy">{examinationPrivacyNote}</p>
      <p className="mt-3 text-sm leading-7 text-muted">{examinationPastoralDisclaimer}</p>
    </aside>
  );
}
