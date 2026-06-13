import { SectionHeader } from "@/components/section-header";

const points = [
  "Jesus taught the apostles.",
  "The apostles preached, worshiped, baptized, celebrated the Eucharist, appointed leaders, and handed on the faith.",
  "Some of this apostolic teaching was written in Scripture.",
  "The same apostolic faith was also handed on in the Church's worship, teaching, sacraments, and life.",
  "Sacred Tradition preserves and transmits the faith once handed on to the apostles.",
  "Tradition is living because the Holy Spirit guides the Church.",
];

export function WhatIsSacredTradition() {
  return (
    <section id="understand-tradition" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Foundations"
        title="What Is Sacred Tradition?"
        summary="Sacred Tradition is the living transmission of the Gospel entrusted by Christ to the apostles and handed on in the Church through the Holy Spirit."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment p-6">
          <ul className="space-y-3 text-sm leading-7 text-muted">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
        <aside className="card-parchment p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Beginner note</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            When Catholics say &quot;Tradition,&quot; they do not mean every custom or cultural habit. They mean the apostolic
            faith handed on through the Church.
          </p>
        </aside>
      </div>
    </section>
  );
}
