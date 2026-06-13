import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { getExploreFaqs } from "@/lib/explore";

export const metadata: Metadata = createPageMetadata({
  title: "Common Questions About Catholicism",
  description:
    "A welcoming guide to common Catholic questions about the Mass, Eucharist, Mary, saints, Confession, the Bible, the Pope, prayer, and becoming Catholic.",
  path: "/explore/questions",
});

export default function ExploreQuestionsPage() {
  const faqs = getExploreFaqs();
  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Explore the Catholic Faith", href: "/explore" },
            { label: "Common Questions" },
          ]}
        />
        <section className="mt-8">
          <SectionHeader
            eyebrow="Questions"
            title="Common Questions About Catholicism"
            summary="Browse by topic and move at your own pace. Honest questions are welcome."
          />
        </section>
        <div className="mt-10 space-y-10">
          {categories.map((category) => (
            <section key={category}>
              <h2 className="font-display text-3xl font-semibold text-navy">{category}</h2>
              <div className="mt-5 grid gap-4">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <details key={faq.id} className="card-parchment group p-5">
                      <summary className="cursor-pointer list-none text-lg font-semibold text-navy">{faq.question}</summary>
                      <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
                    </details>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
