import Link from "next/link";
import { getSpiritualPracticeCards } from "@/lib/indulgences";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function SpiritualPracticeCards() {
  const cards = getSpiritualPracticeCards();

  return (
    <IndulgenceSection
      id="ways-to-live-this-spiritually"
      eyebrow="Ways to live this spiritually"
      title="Ways to live this spiritually"
      summary="Indulgences belong inside a real life of prayer, sacrament, charity, and hope."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card.id} className="card p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
            {card.relatedLink ? (
              <Link href={card.relatedLink} className="text-link focus-ring mt-4 inline-flex text-sm font-semibold">
                Open related page
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </IndulgenceSection>
  );
}
