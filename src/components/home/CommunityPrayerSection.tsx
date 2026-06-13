import { communityPrayerSection } from "@/data/homepageSections";
import { HomeSectionCard } from "@/components/home/HomeSectionCard";
import { HomeSectionHeader } from "@/components/home/HomeSectionHeader";

export function CommunityPrayerSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <HomeSectionHeader
        title={communityPrayerSection.title}
        subtitle={communityPrayerSection.subtitle}
        ctaLabel={communityPrayerSection.ctaLabel}
        ctaHref={communityPrayerSection.ctaHref}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {communityPrayerSection.cards.map((card) => (
          <HomeSectionCard key={card.id} card={card} compact />
        ))}
      </div>
    </section>
  );
}
