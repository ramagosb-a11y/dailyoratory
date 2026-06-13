import { SectionHeader } from "@/components/section-header";
import { getMisunderstandingCards } from "@/lib/explore";

export function CommonMisunderstandings() {
  const cards = getMisunderstandingCards();

  return (
    <section>
      <SectionHeader eyebrow="Misunderstandings" title="Common Misunderstandings" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card.id} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.topic}</h3>
            <p className="mt-4 text-sm leading-7 text-muted"><span className="font-semibold text-navy">Catholics believe:</span> {card.catholicsBelieve}</p>
            <p className="mt-3 text-sm leading-7 text-muted"><span className="font-semibold text-navy">Catholics do not believe:</span> {card.catholicsDoNotBelieve}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.relatedLinks.map((link) => (
                <a key={link.href} href={link.href} className="rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
