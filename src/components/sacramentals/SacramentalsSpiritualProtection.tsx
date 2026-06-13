import { SectionHeader } from "@/components/section-header";
import { spiritualProtectionCards } from "@/data/sacramentalsPage";

export function SacramentalsSpiritualProtection() {
  return (
    <section>
      <SectionHeader
        eyebrow="Protection"
        title="Sacramentals and Spiritual Protection"
        summary="Sacramentals can help the faithful seek God's protection, but protection comes from God. Keep Christ at the center. Do not become obsessed with evil. Stay close to prayer, the sacraments, Scripture, and the Church."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {spiritualProtectionCards.map((card) => (
          <article key={card.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
