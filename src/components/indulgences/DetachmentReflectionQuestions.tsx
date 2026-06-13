import { detachmentReflectionQuestions } from "@/data/indulgenceDetachment";
import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function DetachmentReflectionQuestions() {
  return (
    <IndulgenceSection
      id="detachment-reflection-questions"
      eyebrow="Prayerful examen"
      title="Reflection questions for detachment"
      summary="Use these to pray honestly before God, without turning the spiritual life into anxious self-accusation."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-3">
          {detachmentReflectionQuestions.map((question) => (
            <details key={question} className="card group p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold leading-7 text-navy">
                {question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-muted">
                Sit with this before Christ, ask for light, and answer simply and truthfully.
              </p>
            </details>
          ))}
        </div>
        <NotePanel title="Use them gently">
          These questions are for prayerful reflection, not anxious self-accusation.
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
