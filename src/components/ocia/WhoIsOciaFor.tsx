import { SectionHeader } from "@/components/section-header";
import { getOciaAudienceCards } from "@/lib/ocia";

export function WhoIsOciaFor() {
  const cards = getOciaAudienceCards();

  return (
    <section>
      <SectionHeader
        eyebrow="Who it is for"
        title="Who Is OCIA For?"
        summary="People come to OCIA from many different starting points, and not every path looks the same."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
