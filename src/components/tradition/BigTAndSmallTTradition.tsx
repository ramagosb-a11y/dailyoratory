import { SectionHeader } from "@/components/section-header";
import { getTraditionCategories } from "@/lib/tradition";

export function BigTAndSmallTTradition() {
  const [sacred, small] = getTraditionCategories().filter((item) =>
    item.id === "tradition-category-sacred" || item.id === "tradition-category-small",
  );

  return (
    <section>
      <SectionHeader
        eyebrow="Traditions"
        title='Sacred Tradition and Catholic traditions'
        summary='Catholics often use the word tradition in more than one way. This is one of the biggest places where confusion starts.'
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {[sacred, small].map((card) => (
          <article key={card.id} className="card-parchment p-6">
            <h3 className="font-display text-3xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
              {card.examples.map((example) => (
                <li key={example} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
            {card.cautionNote ? <p className="mt-4 text-sm leading-7 text-muted">{card.cautionNote}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
