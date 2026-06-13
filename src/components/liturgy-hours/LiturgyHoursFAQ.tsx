import type { LiturgyHoursFAQ as Faq } from "@/types/liturgyOfTheHours";

export function LiturgyHoursFAQ({ faqs }: { faqs: Faq[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Common questions</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Questions beginners often ask
        </h2>
      </div>
      <div className="mt-7 space-y-3">
        {faqs.map((faq) => (
          <details key={faq.id} className="card group p-5">
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
