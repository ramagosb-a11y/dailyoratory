import type { SinFAQ } from "@/types/sinAndTemptation";

export function GentleSinFAQ({ faqs }: { faqs: SinFAQ[] }) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Gentle FAQ</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Questions many people carry</h2>
      <div className="mt-6 space-y-4">
        {faqs
          .slice()
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((faq) => (
            <details key={faq.id} className="rounded-2xl border border-stone bg-ivory/75 p-5">
              <summary className="cursor-pointer list-none pr-6 font-display text-2xl font-semibold text-navy">
                {faq.question}
              </summary>
              <p className="daily-card-readable mt-4 text-base leading-8 text-muted">{faq.answer}</p>
            </details>
          ))}
      </div>
    </section>
  );
}
