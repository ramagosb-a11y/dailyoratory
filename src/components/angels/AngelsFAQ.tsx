import { SectionHeader } from "@/components/section-header";
import { getAngelFaqs } from "@/lib/angels";

export function AngelsFAQ() {
  const faqs = getAngelFaqs();

  return (
    <section>
      <SectionHeader eyebrow="FAQ" title="Common Misunderstandings About Angels" />
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
