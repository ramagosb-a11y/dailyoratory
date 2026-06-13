import { SectionHeader } from "@/components/section-header";
import { getTraditionFaqs } from "@/lib/tradition";

export function TraditionFAQ() {
  const faqs = getTraditionFaqs();

  return (
    <section>
      <SectionHeader
        eyebrow="FAQ"
        title="Common Misunderstandings About Tradition"
        summary="Short, faithful, beginner-friendly answers for Catholics, returning Catholics, and anyone exploring the faith."
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
