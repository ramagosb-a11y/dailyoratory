import { detachmentChecklist } from "@/data/detachmentFromSin";
import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function PlenaryIndulgenceChecklist() {
  return (
    <IndulgenceSection
      id="before-seeking-an-indulgence"
      eyebrow="Before you begin"
      title="Before You Seek a Plenary Indulgence"
      summary="Use this as a spiritual aid, not as a guarantee or a source of fear."
    >
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="card-parchment p-6 sm:p-8">
          <ul className="daily-card-readable list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            {detachmentChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <NotePanel title="Keep this in peace">
          <p>
            This checklist is a spiritual aid, not a guarantee. The grace of indulgences belongs to God&apos;s
            mercy and the ministry of the Church.
          </p>
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
