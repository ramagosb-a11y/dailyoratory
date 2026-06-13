import Link from "next/link";
import { getDetachmentPracticeSteps } from "@/lib/indulgences";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function DetachmentPracticeSteps() {
  const steps = getDetachmentPracticeSteps();

  return (
    <IndulgenceSection
      id="grow-in-detachment"
      eyebrow="Practical help"
      title="How to grow in detachment from sin"
      summary="Detachment from sin is formed through grace and cooperation."
    >
      <div className="grid gap-4">
        {steps.map((step, index) => (
          <article key={step.id} className="card p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{index + 1}. {step.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
            {step.relatedLink ? (
              <Link href={step.relatedLink} className="text-link focus-ring mt-4 inline-flex text-sm font-semibold">
                Open related Daily Oratory tool
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </IndulgenceSection>
  );
}
