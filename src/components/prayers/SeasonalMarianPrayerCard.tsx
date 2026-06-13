import Link from "next/link";
import { getSeasonalMarianPrayer } from "@/lib/seasonalPrayer";

export function SeasonalMarianPrayerCard() {
  const prayer = getSeasonalMarianPrayer();

  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Marian Prayer for This Season</p>
      <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{prayer.seasonLabel}</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-navy sm:text-4xl">{prayer.title}</h2>
          <p className="daily-readable-muted mt-4 text-base leading-8 text-muted">{prayer.description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={prayer.href} className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
            Open {prayer.title}
          </Link>
          <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Prayer Library
          </Link>
        </div>
      </div>
    </section>
  );
}
