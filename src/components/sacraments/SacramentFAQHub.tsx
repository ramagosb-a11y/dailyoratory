import { getGeneralSacramentFaqs } from "@/lib/sacraments";

export function SacramentFAQHub() {
  const faqs = getGeneralSacramentFaqs();

  return (
    <section className="grid gap-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">FAQ Hub</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Common questions about sacramental life</h2>
      </div>
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.id} className="card-parchment p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold text-navy">{faq.question}</summary>
            <p className="daily-question-readable mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
