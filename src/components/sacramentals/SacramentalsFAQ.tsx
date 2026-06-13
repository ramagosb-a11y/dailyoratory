import { SectionHeader } from "@/components/section-header";
import { getSacramentalFaqs } from "@/lib/sacramentals";

export function SacramentalsFAQ() {
  const faqs = getSacramentalFaqs();

  return (
    <section>
      <SectionHeader eyebrow="FAQ" title="Common Misunderstandings About Sacramentals" />
      <div className="mt-7 space-y-3">
        {faqs.map((faq) => (
          <details key={faq.id} className="card-parchment group p-5">
            <summary className="cursor-pointer list-none pr-8 font-display text-2xl font-semibold text-navy">
              {faq.question}
            </summary>
            <p className="daily-question-readable mt-4">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
