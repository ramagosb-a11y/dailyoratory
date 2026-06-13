import { SectionHeader } from "@/components/section-header";

const items = [
  "They defend the truth about Jesus Christ",
  "They clarify the Trinity",
  "They protect the faith from error",
  "They help the Church worship faithfully",
  "They address pastoral and reform needs",
  "They shape creeds, catechesis, and doctrine",
  "They show the Church discerning through history",
  "They help us understand why Catholics believe what they believe",
];

export function WhyCouncilsMatter() {
  return (
    <section>
      <SectionHeader eyebrow="Why it matters" title="Why Councils Matter" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{item}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 rounded-md border border-stone bg-parchment p-4 text-sm leading-7 text-muted">
        Many teachings people take for granted today were clarified through councils in response to real questions and conflicts.
      </p>
    </section>
  );
}
