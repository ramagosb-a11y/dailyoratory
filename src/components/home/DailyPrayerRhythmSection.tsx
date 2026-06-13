import { dailyPrayerRhythmSection } from "@/data/homepageSections";
import { HomeSectionCard } from "@/components/home/HomeSectionCard";
import { HomeSectionHeader } from "@/components/home/HomeSectionHeader";

export function DailyPrayerRhythmSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <HomeSectionHeader
        title={dailyPrayerRhythmSection.title}
        subtitle={dailyPrayerRhythmSection.subtitle}
        ctaLabel={dailyPrayerRhythmSection.ctaLabel}
        ctaHref={dailyPrayerRhythmSection.ctaHref}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {dailyPrayerRhythmSection.cards.map((card) => (
          <HomeSectionCard key={card.id} card={card} compact />
        ))}
      </div>
    </section>
  );
}
