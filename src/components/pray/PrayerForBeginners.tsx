import { beginnerTips } from "@/lib/prayer";

export function PrayerForBeginners() {
  return (
    <section>
      <p className="liturgical-section-eyebrow">If you are new to prayer</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Start simply and begin again.
      </h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {beginnerTips.map((tip) => (
          <div key={tip} className="card p-5 text-sm leading-7 text-muted">
            {tip}
          </div>
        ))}
      </div>
      <div className="card-parchment mt-7 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Starter prayer</p>
        <p className="mt-3 text-base leading-8 text-muted">
          Lord Jesus, teach me to pray.
          <br />
          Help me begin again today.
          <br />
          Amen.
        </p>
      </div>
    </section>
  );
}
