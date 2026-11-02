import { getIndulgenceFaqs } from "@/lib/indulgences";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function IndulgenceFAQ() {
  const faqs = getIndulgenceFaqs().map((faq) => {
    if (faq.id === "faq-more-than-one") return { ...faq, answer: "Ordinarily, one plenary indulgence may be gained per day. The 2025 Jubilee had a limited exception for the departed; that historical exception is not a current general rule. Consult the Church’s standing norms and any currently valid decree." };
    if (faq.id === "faq-jubilee-travel") return { ...faq, question: "What provision did the 2025 Jubilee make for those unable to travel?", answer: "The 2025 Jubilee has concluded. Its decree included a provision for those prevented for serious reasons, with specified prayers and conditions. Read the historical decree rather than applying its provisions to a current journey." };
    if (faq.id === "faq-francis-travel") return { ...faq, answer: "The decree names the elderly, the sick, their carers, and those unable to leave home for a serious reason. They may unite spiritually with the Jubilee celebrations, offering prayers, suffering, or hardships, with detachment from all sin and the intention to fulfill the three usual conditions as soon as possible. Consult the dated decree below for the full requirements." };
    return faq;
  });

  return (
    <IndulgenceSection
      id="faq"
      eyebrow="FAQ"
      title="Common misunderstandings"
      summary="Short answers, faithful to Catholic teaching, with a pastoral tone."
    >
      <div className="grid gap-3">
        {faqs.map((faq) => (
          <details key={faq.id} className="card group p-5">
            <summary className="cursor-pointer list-none text-base font-semibold leading-7 text-navy">
              {faq.question}
            </summary>
            <p className="daily-question-readable mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </IndulgenceSection>
  );
}
