import { SectionHeader } from "@/components/section-header";
import { getCatechismHowToUseSteps } from "@/lib/catechism";

export function HowToUseCatechism() {
  const steps = getCatechismHowToUseSteps();

  return (
    <section>
      <SectionHeader
        eyebrow="Practical help"
        title="How to Use the Catechism Without Feeling Overwhelmed"
        summary="The Catechism is not usually read like a novel from beginning to end. It can be used as a reference, a study guide, and a prayerful formation tool."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
              Step {index + 1}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
