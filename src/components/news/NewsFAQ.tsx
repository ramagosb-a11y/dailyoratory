import { SectionHeader } from "@/components/section-header";
import { getNewsFaqs } from "@/lib/news";

export function NewsFAQ() {
  const faqs = getNewsFaqs();

  return (
    <section>
      <SectionHeader
        eyebrow="Common questions"
        title="Common Questions About Catholic News"
        summary="A few simple distinctions can keep Catholic news reading calmer, clearer, and more fruitful."
      />
      <div className="mt-7 space-y-3">
        {faqs.map((faq) => (
          <details key={faq.id} className="card-parchment liturgical-card-accent group p-5">
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
