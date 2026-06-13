import { detachmentReflectionQuestions } from "@/data/detachmentFromSin";
import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function DetachmentReflectionQuestions() {
  return (
    <IndulgenceSection
      id="reflection-questions"
      eyebrow="Prayerful self-knowledge"
      title="Reflection Questions for Detachment"
      summary="These questions are meant for prayer, not anxious self-measurement."
    >
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="card-parchment p-6 sm:p-8">
          <ul className="daily-card-readable list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            {detachmentReflectionQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
        <NotePanel title="Use these gently">
          <p>These questions are for prayerful reflection, not anxious self-accusation.</p>
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
