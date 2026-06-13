import type { MassFAQ as Faq } from "@/types/mass";

export function MassFAQ({ faqs }: { faqs: Faq[] }) {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Common questions about Mass</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        A gentle FAQ for beginners and returning Catholics
      </h2>
      <div className="mt-7 space-y-3">
        {faqs.map((faq) => (
          <details key={faq.id} className="card p-5">
            <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-navy marker:hidden">
              {faq.question}
            </summary>
            <p className="daily-question-readable mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
