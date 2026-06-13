import { detachmentPlainLanguagePoints } from "@/data/detachmentFromSin";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function WhatIsDetachment() {
  return (
    <IndulgenceSection
      id="what-is-complete-detachment"
      eyebrow="Interior conversion"
      title="What Does Complete Detachment from Sin Mean?"
      summary="Detachment from sin is an interior disposition of the heart, not a performance of spiritual certainty."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-parchment p-6 sm:p-8">
          <p className="daily-readable text-base leading-8 text-muted">
            Complete detachment from sin is an interior disposition of the heart. It means sincerely rejecting
            sin and every disordered attachment that draws the soul away from God. It is not merely avoiding
            outward wrongdoing; it is a deeper conversion of desire, will, and love.
          </p>
          <p className="daily-readable-muted mt-5 text-base leading-8 text-muted">
            This does not mean the absence of temptation, weakness, emotion, or struggle. Temptation is not
            the same as consent. Detachment is a grace to ask for and cooperate with.
          </p>
        </div>
        <div className="card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Plain-language signs</p>
          <ul className="daily-card-readable mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            {detachmentPlainLanguagePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </IndulgenceSection>
  );
}
