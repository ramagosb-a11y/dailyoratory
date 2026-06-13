import Link from "next/link";
import { detachmentPracticeSteps } from "@/data/detachmentFromSin";
import { IndulgenceSection } from "@/components/indulgences/helpers";

const relatedLinks = {
  "Make a sincere confession": "/confession",
  "Avoid near occasions of sin": "/sin-and-temptation/near-occasions-of-sin",
  "Choose the opposite virtue": "/sin-and-temptation/virtue-and-healing",
  "Receive Holy Communion reverently": "/mass",
  "Pray for the Pope's intentions": "/pray",
} as const;

export function DetachmentPracticeSteps() {
  return (
    <IndulgenceSection
      id="grow-in-detachment"
      eyebrow="Practical path"
      title="How to Grow in Detachment from Sin"
      summary="Detachment from sin is formed through grace and cooperation. These practices help dispose the soul to receive God's mercy and reject sin more completely."
    >
      <div className="grid gap-4">
        {detachmentPracticeSteps.map((step, index) => {
          const href = relatedLinks[step.title as keyof typeof relatedLinks];
          return (
            <article key={step.id} className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
                {index + 1}. {step.title}
              </p>
              <p className="daily-readable mt-4 text-base leading-8 text-muted">{step.description}</p>
              {href ? (
                <div className="mt-5">
                  <Link href={href} className="text-link focus-ring inline-flex text-sm font-semibold">
                    Open related Daily Oratory help
                  </Link>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </IndulgenceSection>
  );
}
