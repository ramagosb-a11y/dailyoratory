import { SectionHeader } from "@/components/section-header";
import { exploreBasicsCards } from "@/data/explorePage";

export function StartWithBasics() {
  return (
    <section id="start-with-the-basics" className="scroll-mt-28">
      <SectionHeader eyebrow="Begin" title="Start with the Basics" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {exploreBasicsCards.map((card) => (
          <article key={card.id} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.links.map((link) => (
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
