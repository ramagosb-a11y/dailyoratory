import { prayerObstacles } from "@/lib/prayer";

export function PrayerObstacles() {
  return (
    <section>
      <p className="liturgical-section-eyebrow">When prayer feels difficult</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Stay gentle, faithful, and honest.
      </h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {prayerObstacles.map((item) => (
          <article key={item.id} className="card-parchment p-5">
            <h3 className="text-lg font-semibold text-navy">{item.obstacle}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Next step:</span> {item.nextStep}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
