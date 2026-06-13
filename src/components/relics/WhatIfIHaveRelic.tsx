import { SectionHeader } from "@/components/section-header";

const cards = [
  {
    title: "If you have a relic",
    items: [
      "Keep it safe and reverent.",
      "Do not sell it.",
      "Look for documentation if it exists.",
      "Do not make claims you cannot support.",
      "Ask a priest, parish, or diocese for guidance.",
    ],
  },
  {
    title: "If you find a relic",
    items: [
      "Do not throw it away.",
      "Do not sell it.",
      "Protect it from damage.",
      "Contact a parish or diocese.",
    ],
  },
  {
    title: "If you see a relic for sale",
    items: [
      "Avoid buying first-class or second-class relics.",
      "Report concerns to the platform or seller if appropriate.",
      "Ask a Catholic authority if unsure.",
    ],
  },
] as const;

export function WhatIfIHaveRelic() {
  return (
    <section>
      <SectionHeader eyebrow="Practical Help" title="What If I Have or Find a Relic?" />
      <div className="mt-7 grid gap-5 lg:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="card-parchment p-6">
            <h3 className="font-display text-3xl font-semibold text-navy">{card.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {card.items.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
