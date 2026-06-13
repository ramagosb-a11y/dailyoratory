import { SectionHeader } from "@/components/section-header";
import { getTraditionCategories } from "@/lib/tradition";

export function DoctrineDisciplineDevotionCustom() {
  const cards = getTraditionCategories().filter((item) =>
    ["doctrine", "discipline", "devotion", "custom"].includes(item.slug),
  );

  return (
    <section>
      <SectionHeader
        eyebrow="Categories"
        title="What Kind of Tradition Is This?"
        summary="A simple way to distinguish doctrine, discipline, devotion, and custom without making everything harder than it needs to be."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.id} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
            <p className="mt-4 text-sm font-semibold text-navy">Example</p>
            <p className="mt-1 text-sm leading-7 text-muted">{card.examples[0]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
