import { SectionHeader } from "@/components/section-header";
import { getAdorationFaqs } from "@/lib/adoration";

export function AdorationFAQ() {
  const faqs = getAdorationFaqs();

  return (
    <section>
      <SectionHeader
        eyebrow="FAQ"
        title="Common Questions About Adoration"
        summary="Short, faithful, pastoral answers for Catholics, returning Catholics, and anyone exploring the faith."
      />
      <div className="mt-7 grid gap-4">
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
