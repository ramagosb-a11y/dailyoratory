import { latestJournalSection } from "@/data/homepageSections";
import { HomeSectionCard } from "@/components/home/HomeSectionCard";
import { HomeSectionHeader } from "@/components/home/HomeSectionHeader";

export function LatestJournalSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <HomeSectionHeader
        title={latestJournalSection.title}
        subtitle={latestJournalSection.subtitle}
        ctaLabel={latestJournalSection.ctaLabel}
        ctaHref={latestJournalSection.ctaHref}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {latestJournalSection.cards.map((card) => (
          <HomeSectionCard key={card.id} card={card} compact />
        ))}
      </div>
    </section>
  );
}
