import { getPrayerFaqs } from "@/lib/prayer";

export function PrayerFAQ() {
  const faqs = getPrayerFaqs();

  return (
    <section>
      <p className="liturgical-section-eyebrow">FAQ</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Common questions about prayer
      </h2>
      <div className="mt-7 space-y-3">
        {faqs.map((faq) => (
          <details key={faq.id} className="card-parchment p-5">
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
