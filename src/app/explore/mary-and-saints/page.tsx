import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

const cards = [
  {
    title: "Mary",
    body: "Catholics honor Mary because she is the Mother of Jesus and the model disciple. Catholics do not worship Mary.",
  },
  {
    title: "Saints",
    body: "Catholics ask the saints to pray for us because the Church is one in Christ across heaven and earth.",
  },
  {
    title: "Intercession",
    body: "Asking saints for prayer is like asking fellow Christians to pray, but with the confidence that the saints are alive in Christ.",
  },
  {
    title: "Christ at the center",
    body: "Healthy Catholic devotion always leads back to Jesus Christ, not away from Him.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Mary and the Saints",
  description: "A beginner-friendly guide to how Catholics honor Mary and the saints without worshiping them.",
  path: "/explore/mary-and-saints",
});

export default function MaryAndSaintsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Explore the Catholic Faith", href: "/explore" },
            { label: "Mary and the Saints" },
          ]}
        />
        <section className="mt-8">
          <SectionHeader
            eyebrow="Mary and the saints"
            title="Mary and the Saints"
            summary="A gentle guide to how Catholics honor Mary and the saints while worshiping God alone."
          />
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {cards.map((card) => (
              <article key={card.title} className="card-parchment p-5">
                <h2 className="font-display text-2xl font-semibold text-navy">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/saints" className="btn liturgical-button focus-ring justify-center">Saints</a>
            <a href="/rosary" className="btn btn-secondary focus-ring justify-center">Rosary</a>
            <a href="/catechism" className="btn btn-secondary focus-ring justify-center">Catechism</a>
          </div>
        </section>
      </main>
    </div>
  );
}
