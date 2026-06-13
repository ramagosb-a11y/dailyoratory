import type { ScripturePrayerFAQ as Faq } from "@/types/scripturePrayer";

export function ScripturePrayerFAQ({ faqs }: { faqs: Faq[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">FAQ</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Scripture prayer FAQ
        </h2>
      </div>
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
