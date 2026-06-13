import { getSaintFaqs } from "@/lib/saints";

export function SaintsFAQ() {
  const faqs = getSaintFaqs();

  return (
    <section id="saints-faq" className="mt-16">
      <p className="liturgical-section-eyebrow">FAQ</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
        Common Questions About Saints
      </h2>
      <div className="mt-7 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.id} className="card-parchment group p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold text-navy">
              {faq.question}
            </summary>
            <p className="daily-question-readable mt-4">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
