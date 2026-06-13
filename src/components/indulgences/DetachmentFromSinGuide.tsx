import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function DetachmentFromSinGuide() {
  return (
    <IndulgenceSection
      id="detachment-from-sin"
      eyebrow="The heart of the matter"
      title="Complete Detachment from Sin"
      summary="One of the usual conditions for receiving a plenary indulgence is interior detachment from all sin, even venial sin."
    >
      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.9fr]">
        <article className="content-card p-6 sm:p-8">
          <div className="space-y-4 text-sm leading-7 text-muted">
            <p>
              This does not mean a person will never be tempted again, nor does it mean they have
              reached spiritual perfection. It means the heart sincerely rejects sin and does not
              knowingly cling to anything contrary to God&apos;s will.
            </p>
            <p>Detachment from sin is a grace to ask for.</p>
            <p>It means sincerely choosing God above every sin.</p>
            <p>It means not making peace with sin or planning to return to it.</p>
            <p>It means rejecting affection for sin, even small compromises.</p>
            <p>It does not mean the absence of temptation.</p>
            <p>It does not mean perfect emotional peace.</p>
            <p>It does not mean never falling again.</p>
            <p>It means a real desire to belong entirely to Christ.</p>
          </div>
        </article>
        <NotePanel title="Do not be discouraged">
          <p>
            If this full detachment is lacking, the indulgence may be partial rather than plenary. The
            faithful should not become discouraged, but should continue seeking conversion, mercy, and
            deeper love for God.
          </p>
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
