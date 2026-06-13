import { getPrayerLevels } from "@/lib/prayer";

export function PrayerLevels() {
  const levels = getPrayerLevels();

  return (
    <section>
      <p className="liturgical-section-eyebrow">The journey of prayer</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Growth in prayer is a work of grace.
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        Prayer often deepens from words to recollection, reflection, loving response, and quiet
        resting in God's presence.
      </p>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {levels.map((level) => (
          <article key={level.id} className="dashboard-card liturgical-card-accent p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{level.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{level.description}</p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-navy">Best for</p>
              <ul className="mt-2 grid gap-2 text-sm leading-7 text-muted">
                {level.bestFor.map((item) => (
                  <li key={item} className="border-l-2 border-[var(--liturgical-primary)] pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {level.relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
        These levels are not strict boxes or achievements. Many Catholics move among them daily.
        Growth in prayer is a work of grace.
      </p>
    </section>
  );
}
