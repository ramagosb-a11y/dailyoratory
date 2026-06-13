import { SectionHeader } from "@/components/section-header";
import { getSacredArtPrayerCards } from "@/lib/vatican";

export function SacredArtAsPrayer() {
  const cards = getSacredArtPrayerCards();

  return (
    <section>
      <SectionHeader
        eyebrow="Prayer and beauty"
        title="Sacred Art as Prayer"
        summary="The Vatican's beauty is not only decoration. Sacred art can teach the faith, lift the mind to God, tell the stories of Scripture and the saints, and invite contemplation."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card} className="card-parchment p-5">
            <p className="text-sm font-semibold leading-7 text-navy">{card}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
