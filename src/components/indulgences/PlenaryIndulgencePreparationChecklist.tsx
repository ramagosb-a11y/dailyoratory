import { plenaryPreparationChecklist } from "@/data/indulgenceDetachment";
import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function PlenaryIndulgencePreparationChecklist() {
  return (
    <IndulgenceSection
      id="before-plenary-indulgence"
      eyebrow="Preparation"
      title="Before you seek a plenary indulgence"
      summary="A short spiritual checklist to steady the heart before you begin."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="dashboard-card p-6">
          <ul className="grid gap-3">
            {plenaryPreparationChecklist.map((item) => (
              <li key={item} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">• </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <NotePanel title="Remember">
          This checklist is a spiritual aid, not a guarantee. The grace of indulgences belongs to God&apos;s
          mercy and the ministry of the Church.
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
