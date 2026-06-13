import { catholicLifeRoadmapStages } from "@/data/catholicLifeRoadmap";

export function CatholicLifeRoadmapTimeline() {
  return (
    <section id="roadmap">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">The Catholic life at a glance</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">The Catholic Life at a Glance</h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-7">
        {catholicLifeRoadmapStages.map((stage, index) => (
          <article key={stage.id} className="card-parchment relative p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-ivory text-sm font-bold text-navy">
                {index + 1}
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Stage {index + 1}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-navy">{stage.title}</h3>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{stage.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
