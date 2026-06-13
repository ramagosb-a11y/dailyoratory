import { SectionHeader } from "@/components/section-header";
import { getPopeFaqs } from "@/lib/pope";

export function PopeFAQ() {
  const faqs = getPopeFaqs();

  return (
    <section>
      <SectionHeader eyebrow="FAQ" title="Common Misunderstandings About the Pope" summary="Short, faithful answers for beginners, OCIA inquirers, and returning Catholics." />
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
