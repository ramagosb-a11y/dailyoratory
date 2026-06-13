import { SectionHeader } from "@/components/section-header";
import { getAngelChoirs } from "@/lib/angels";

export function ChoirsOfAngels() {
  const items = getAngelChoirs();
  const triads = ["Highest Triad", "Middle Triad", "Lowest Triad"] as const;

  return (
    <section id="choirs-of-angels" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Tradition"
        title="The Choirs of Angels"
        summary="Christian tradition speaks of nine choirs of angels. This language helps express the order, beauty, and mystery of heavenly worship and service."
      />
      <div className="mt-7 grid gap-6">
        {triads.map((triad) => (
          <div key={triad}>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{triad}</h3>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              {items.filter((item) => item.triad === triad).map((item) => (
                <article key={item.id} className="card-parchment p-5">
                  <h4 className="font-display text-3xl font-semibold text-navy">{item.name}</h4>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                  <p className="mt-4 text-sm font-semibold leading-7 text-burgundy">{item.spiritualReflection}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="card-parchment mt-6 p-5">
        <p className="text-sm leading-7 text-muted">
          The Church does not require curiosity about every angelic hierarchy detail. The main point
          is that all angels exist for God's glory and His plan.
        </p>
      </div>
    </section>
  );
}
