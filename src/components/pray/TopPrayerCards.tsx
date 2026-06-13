import { SectionHeader } from "@/components/section-header";
import { PrayerCard } from "@/components/pray/PrayerCard";
import type { PrayerPagePrayer } from "@/types/prayer";

export function TopPrayerCards({ prayers }: { prayers: PrayerPagePrayer[] }) {
  const dailyPrayers = prayers.filter((prayer) => prayer.sortOrder <= 9);
  const optionalPrayers = prayers.filter((prayer) => prayer.sortOrder > 9);

  return (
    <section id="prayers-for-today" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Prayers for today"
        title="Begin here with simple prayers you can pray now."
        summary="The current Daily Oratory prayers remain right at the top so you can begin praying immediately."
      />

      <div className="mt-7 grid gap-6">
        {dailyPrayers.map((prayer) => (
          <PrayerCard key={prayer.id} prayer={prayer} />
        ))}
      </div>

      <div className="mt-12">
        <SectionHeader
          eyebrow="Additional prayers"
          title="Keep a few trusted prayers close at hand."
          summary="Family prayer, mercy, protection, spiritual Communion, and fasting all have a place in an ordinary Catholic life."
        />
        <div className="mt-7 grid gap-6 lg:grid-cols-2">
          {optionalPrayers.map((prayer) => (
            <PrayerCard key={prayer.id} prayer={prayer} />
          ))}
        </div>
      </div>
    </section>
  );
}
