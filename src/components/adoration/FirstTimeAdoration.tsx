import { SectionHeader } from "@/components/section-header";
import { getAdorationFirstTimeSteps } from "@/lib/adoration";

export function FirstTimeAdoration() {
  const steps = getAdorationFirstTimeSteps();

  return (
    <section id="first-time" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Beginners"
        title="First Time in Adoration"
        summary="You do not have to know exactly what to do."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Step {index + 1}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-muted">Do not worry if you are distracted. Gently return to Jesus.</p>
    </section>
  );
}
