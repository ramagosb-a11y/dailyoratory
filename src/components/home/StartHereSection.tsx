import { startHereSection } from "@/data/homepageSections";
import { HomeSectionCard } from "@/components/home/HomeSectionCard";
import { HomeSectionHeader } from "@/components/home/HomeSectionHeader";

export function StartHereSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-12 pt-6 sm:px-8 sm:pt-8 lg:px-10">
      <HomeSectionHeader title={startHereSection.title} />
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {startHereSection.cards.map((card) => (
          <HomeSectionCard key={card.id} card={{ ...card, links: undefined }} compact emphasized />
        ))}
      </div>
    </section>
  );
}
