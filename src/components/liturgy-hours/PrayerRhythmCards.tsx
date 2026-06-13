import { getLiturgyHourBySlug } from "@/lib/liturgyOfTheHours";
import type { PrayerRhythm } from "@/types/liturgyOfTheHours";

export function PrayerRhythmCards({ rhythms }: { rhythms: PrayerRhythm[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Suggested daily rhythms</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Choose a prayer rhythm
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rhythms.map((rhythm) => (
          <article key={rhythm.id} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{rhythm.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{rhythm.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {rhythm.hourIds.map((hourId) => {
                const hour = getLiturgyHourBySlug(hourId);
                return (
                  <span key={hourId} className="season-pill">
                    {hour?.title ?? hourId}
                  </span>
                );
              })}
            </div>
            <p className="mt-4 text-sm font-semibold text-burgundy">Best for: {rhythm.bestFor}</p>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        Choose a rhythm that helps you pray faithfully, not anxiously.
      </p>
    </section>
  );
}
