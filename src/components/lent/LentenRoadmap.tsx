import { lentenRoadmap } from "@/data/lent";

export function LentenRoadmap() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">The Journey of Lent</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {lentenRoadmap.map((item, index) => (
          <article key={item.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Step {index + 1}</p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{item.title}</h3>
            <p className="daily-card-readable mt-3 text-base leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

