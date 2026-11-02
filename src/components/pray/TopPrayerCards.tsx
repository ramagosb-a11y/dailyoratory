import { SectionHeader } from "@/components/section-header";
import { PrayerCard } from "@/components/pray/PrayerCard";
import type { PrayerPagePrayer } from "@/types/prayer";

export function TopPrayerCards({ prayers }: { prayers: PrayerPagePrayer[] }) {
  const dailyPrayers = prayers.filter((prayer) => prayer.sortOrder <= 9);
  const optionalPrayers = prayers.filter((prayer) => prayer.sortOrder > 9);
  return (
    <section id="prayers-for-today" className="mt-14 scroll-mt-28">
      <SectionHeader eyebrow="Prayers for today" title="A prayer for each moment" summary="Open a prayer, pause, and make it your own offering to God." />
      {dailyPrayers[0] ? <div className="mt-7 max-w-3xl"><PrayerCard prayer={dailyPrayers[0]} /></div> : <p className="mt-6">Browse the prayer library to find a prayer for today.</p>}
      <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
        {[...dailyPrayers.slice(1), ...optionalPrayers].map((prayer) => (
          <details key={prayer.id} id={`prayer-${prayer.slug}`} className="scroll-mt-28 border-b border-stone py-2">
            <summary className="focus-ring cursor-pointer py-4 text-lg font-semibold text-navy">{prayer.title}<span className="mt-1 block text-sm font-normal text-muted">{prayer.whenToPray}</span></summary>
            <PrayerCard prayer={prayer} />
          </details>
        ))}
      </div>
    </section>
  );
}
