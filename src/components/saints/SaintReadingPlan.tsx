import Link from "next/link";
import { getSaintById, getSaintReadingPlan } from "@/lib/saints";

export function SaintReadingPlanSection() {
  const items = getSaintReadingPlan();
  const grouped = [1, 2, 3, 4].map((week) => ({
    week,
    items: items.filter((item) => item.week === week),
  }));

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Reading plan</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
        Start Here: A Saint Reading Path
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Read slowly. The goal is imitation, not information overload.
      </p>
      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        {grouped.map((group) => (
          <article key={group.week} className="card-parchment liturgical-card-accent p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">Week {group.week}</h3>
            <div className="mt-4 space-y-4">
              {group.items.map((item) => {
                const saint = getSaintById(item.saintId);
                return (
                  <div key={item.id} className="rounded-2xl border border-stone bg-ivory p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{item.theme}</p>
                    <h4 className="mt-2 text-lg font-semibold text-navy">
                      {item.day}. {saint?.name ?? item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.prompt}</p>
                    {saint ? (
                      <Link href={`/saints/${saint.slug}`} className="mt-3 inline-flex text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
                        Learn more
                      </Link>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export { SaintReadingPlanSection as SaintReadingPlan };

