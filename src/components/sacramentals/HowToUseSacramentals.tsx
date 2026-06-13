import { SectionHeader } from "@/components/section-header";
import { sacramentalsUseSteps } from "@/data/sacramentalsPage";

export function HowToUseSacramentals() {
  return (
    <section>
      <SectionHeader eyebrow="Practice" title="How to Use Sacramentals Prayerfully" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {sacramentalsUseSteps.map((step, index) => (
          <article key={step} className="card-parchment p-5 text-sm leading-7 text-muted">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Step {index + 1}</p>
            <p className="mt-3">{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
