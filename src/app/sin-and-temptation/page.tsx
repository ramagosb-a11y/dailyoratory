import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { conversionRelatedLinks, officialSinResourceLinks, sinTopics } from "@/data/sinAndTemptation";
import { MercyPath } from "@/components/sin-and-temptation/MercyPath";
import { PastoralMercyNote } from "@/components/sin-and-temptation/PastoralMercyNote";
import { RelatedConversionLinks } from "@/components/sin-and-temptation/RelatedConversionLinks";
import { SinTemptationPageLayout } from "@/components/sin-and-temptation/SinTemptationPageLayout";
import { TopicCards } from "@/components/sin-and-temptation/TopicCards";

export const metadata: Metadata = createPageMetadata({
  title: "Sin, Temptation, and Conversion | Daily Oratory",
  description:
    "A Catholic guide to understanding venial and mortal sin, habitual sin, predominant fault, resisting temptation, Confession, virtue, and the mercy of Jesus Christ.",
  path: "/sin-and-temptation",
  keywords: [
    "sin",
    "temptation",
    "venial sin",
    "mortal sin",
    "habitual sin",
    "predominant fault",
    "confession",
    "conversion",
    "virtue",
    "Catholic teaching",
  ],
});

export default function SinAndTemptationPage() {
  return (
    <SinTemptationPageLayout
      breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Sin & Temptation" }]}
      title="Sin, Temptation, and Conversion"
      subtitle="A Catholic guide to understanding sin, resisting temptation, seeking mercy, and growing in holiness."
      summary="Sin wounds our relationship with God, others, and ourselves. But the Christian life is not defined by despair. Jesus Christ came to save sinners, heal hearts, forgive sins, and restore us to grace. This guide helps you understand sin in a Catholic way and take practical steps toward repentance, virtue, Confession, and freedom."
      ctas={[
        { label: "Start with Venial and Mortal Sin", href: "/sin-and-temptation/venial-and-mortal-sin", eventName: "sin_topic_open" },
        { label: "Resist Temptation", href: "/sin-and-temptation/resisting-temptation", variant: "secondary", eventName: "sin_topic_open" },
        { label: "Go to Confession Guide", href: "/confession", variant: "secondary", eventName: "confession_guide_click" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is sin?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Sin is a deliberate offense against God’s love and law. It wounds charity, harms the soul, damages
          relationships, and disorders the heart. Sin is not merely breaking a rule; it is choosing something
          contrary to God’s goodness.
        </p>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>God’s law is ordered toward love and life.</li>
          <li>Sin wounds communion with God.</li>
          <li>Sin can be mortal or venial.</li>
          <li>Temptation is not the same as sin.</li>
          <li>God’s mercy is greater than sin.</li>
          <li>Repentance opens the soul to healing and grace.</li>
        </ul>
      </section>

      <PastoralMercyNote>
        <p>
          The purpose of learning about sin is not anxiety but conversion. The Holy Spirit convicts us so we
          can return to the Father. Jesus does not reveal sin to crush the soul, but to heal it, forgive it,
          and free it.
        </p>
        <p>
          If you struggle with scrupulosity or fear, speak with a trusted priest or confessor and avoid
          repeatedly self-diagnosing your soul online.
        </p>
      </PastoralMercyNote>

      <section>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Core topics</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Where to begin</h2>
        <div className="mt-6">
          <TopicCards topics={sinTopics} />
        </div>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Temptation is not sin</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          A temptation, thought, feeling, or impulse is not automatically a sin. Sin involves some level of
          knowledge and consent. The battle is not lost because temptation appears. The faithful are called to
          reject temptation, turn to grace, and choose God.
        </p>
      </section>

      <MercyPath />

      <RelatedConversionLinks links={conversionRelatedLinks} />

      <RelatedConversionLinks
        title="Grace and Daily Help"
        links={[
          {
            title: "Actual Grace in Temptation",
            description: "See how God helps the soul in concrete moments of temptation, repentance, and obedience.",
            href: "/formation/grace/actual-grace",
          },
          {
            title: "Complete Detachment from Sin",
            description: "See how sincere rejection of sin and trust in grace relate to conversion and plenary indulgences.",
            href: "/indulgences/detachment-from-sin",
          },
          {
            title: "Seven Penitential Psalms",
            description: "Pray the ancient Psalms of repentance and mercy when you want to return to God.",
            href: "/prayers/seven-penitential-psalms",
          },
          {
            title: "The Last Things",
            description: "Learn how death, judgment, Heaven, Hell, Purgatory, resurrection, and Christ's return call the soul to hope and conversion.",
            href: "/formation/eschatology",
          },
        ]}
      />

      <section className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Trusted official sources</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Go deeper with the Church</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {officialSinResourceLinks.map((resource) => (
            <a
              key={resource.href}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-2xl border border-stone bg-ivory/80 p-4 transition hover:border-gold"
            >
              <span className="block font-display text-2xl font-semibold text-navy">{resource.title}</span>
              <span className="daily-card-readable mt-2 block text-sm leading-7 text-muted">{resource.description}</span>
            </a>
          ))}
        </div>
        <p className="daily-readable-muted mt-6 text-sm leading-7 text-muted">
          For personal doubts about guilt, communion, or Confession, the safest next step is still a
          conversation with a priest or confessor.
        </p>
      </section>
    </SinTemptationPageLayout>
  );
}
