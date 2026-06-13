import { SectionHeader } from "@/components/section-header";
import { reliquaryTypes } from "@/data/relicsPage";

export function WhatIsReliquary() {
  return (
    <section>
      <SectionHeader
        eyebrow="Reliquary"
        title="What Is a Reliquary?"
        summary="A reliquary is a container that holds and protects a relic. Its beauty should point beyond itself to God and the saint's witness."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reliquaryTypes.map((item) => (
          <article key={item.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
