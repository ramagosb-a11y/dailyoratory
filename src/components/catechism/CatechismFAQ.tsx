import { SectionHeader } from "@/components/section-header";
import { getCatechismFaqs } from "@/lib/catechism";

export function CatechismFAQ() {
  const faqs = getCatechismFaqs();

  return (
    <section>
      <SectionHeader
        eyebrow="FAQ"
        title="Common Questions About the Catechism"
        summary="Short, clear answers for beginners, returning Catholics, and anyone curious about Catholic teaching."
      />
      <div className="mt-7 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.id} className="card-parchment group p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold text-navy">
              {faq.question}
            </summary>
            <p className="daily-question-readable mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
