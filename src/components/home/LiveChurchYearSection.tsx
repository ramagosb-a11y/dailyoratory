import { liveChurchYearSection } from "@/data/homepageSections";
import { HomeSectionCard } from "@/components/home/HomeSectionCard";
import { HomeSectionHeader } from "@/components/home/HomeSectionHeader";
import { getCurrentSeasonsPageHref } from "@/lib/liturgicalSeasonsGuide";

export function LiveChurchYearSection() {
  const currentSeasonHref = getCurrentSeasonsPageHref();
  const cards = liveChurchYearSection.cards.map((card) =>
    card.id === "year-seasons"
      ? {
          ...card,
          href: currentSeasonHref,
        }
      : card,
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <HomeSectionHeader
        title={liveChurchYearSection.title}
        subtitle={liveChurchYearSection.subtitle}
        ctaLabel={liveChurchYearSection.ctaLabel}
        ctaHref={currentSeasonHref}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <HomeSectionCard key={card.id} card={card} compact />
        ))}
      </div>
    </section>
  );
}
