import { SectionHeader } from "@/components/section-header";
import { getVaticanFaqs } from "@/lib/vatican";

export function VaticanFAQ() {
  const faqs = getVaticanFaqs();

  return (
    <section>
      <SectionHeader
        eyebrow="FAQ"
        title="Common Questions About the Vatican"
        summary="Short, clear answers for Catholics, families, students, pilgrims, and anyone exploring the Catholic faith."
      />
      <div className="mt-7 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.id} className="card-parchment group p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold text-navy">{faq.question}</summary>
            <p className="daily-question-readable mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
