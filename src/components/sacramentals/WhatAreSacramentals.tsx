import { SectionHeader } from "@/components/section-header";
import { sacramentalsBasics } from "@/data/sacramentalsPage";

export function WhatAreSacramentals() {
  return (
    <section id="what-are-sacramentals">
      <SectionHeader
        eyebrow="Foundations"
        title="What Are Sacramentals?"
        summary="Sacramentals are sacred signs instituted by the Church. They prepare us to receive grace, sanctify different circumstances of life, and help us live with greater faith."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sacramentalsBasics.map((point) => (
          <article key={point} className="card-parchment p-5 text-sm leading-7 text-muted">
            {point}
          </article>
        ))}
      </div>
      <p className="mt-6 rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
        <span className="font-semibold text-navy">A helpful distinction:</span> Sacramentals are powerful because they are connected
        to the prayer of the Church and the faith of the person using them, not because objects have magical power.
      </p>
    </section>
  );
}
