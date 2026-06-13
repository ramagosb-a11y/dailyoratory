import Link from "next/link";
import { getSeasonalPrayerRecommendations } from "@/lib/seasonalPrayerLibrary";

export function SeasonalPrayerRecommendations() {
  const { season, items } = getSeasonalPrayerRecommendations();

  if (!items.length) return null;

  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer for this season</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">{season} prayer recommendations</h2>
      <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
        Let the Church's season shape your prayer gently. These are simple starting points for this time of year.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-3xl border border-stone bg-ivory/80 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{item.category}</p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{item.title}</h3>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{item.summary}</p>
            {item.href ? (
              <div className="mt-5">
                <Link href={item.href} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                  Open guide
                </Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
