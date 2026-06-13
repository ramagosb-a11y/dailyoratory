import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EschatologyTopicPage } from "@/components/eschatology/EschatologyTopicPage";
import { EschatologyRelatedLinks } from "@/components/eschatology/EschatologyRelatedLinks";
import { eschatologyTopics } from "@/data/eschatology";

const topic = eschatologyTopics.find((item) => item.slug === "hell")!;

export const metadata: Metadata = createPageMetadata({
  title: "Hell and the Seriousness of Freedom | Catholic Eschatology | Daily Oratory",
  description:
    "A sober, pastoral Catholic explanation of Hell, freedom, repentance, and the mercy of Jesus Christ.",
  path: "/formation/eschatology/hell",
});

export default function EschatologyHellPage() {
  return (
    <EschatologyTopicPage
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Formation", href: "/formation" },
        { label: "Catholic Eschatology", href: "/formation/eschatology" },
        { label: topic.title },
      ]}
      title={topic.title}
      subtitle={topic.subtitle}
      summary="The Church speaks about Hell soberly, not to produce panic or fascination, but to call souls to repentance, prayer, and trust in Christ's mercy."
      ctas={[
        { label: "Go to Confession", href: "/confession" },
        { label: "Resist Temptation", href: "/sin-and-temptation/resisting-temptation", variant: "secondary" },
        { label: "Return to Eschatology", href: "/formation/eschatology", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What the Church teaches about Hell</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          The Church teaches the reality of Hell and speaks of it with gravity. This teaching is not meant to
          sensationalize fear, but to take human freedom and eternal destiny seriously.
        </p>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Hell as definitive self-exclusion from communion with God</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Hell is the tragic result of definitive rejection of God. The Church emphasizes that it is separation
          from the One for whom the human heart was made.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">God desires all to be saved</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            God does not delight in condemnation. He calls sinners constantly to repentance, sends grace, and
            offers mercy through Christ and His Church.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Mortal sin, repentance, and mercy</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Mortal sin is serious because it turns the soul away from God. Yet Christ's mercy is greater than
            sin, and Confession remains the ordinary way back to grace.
          </p>
        </article>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Why this teaching matters</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          This teaching matters because our choices matter. It calls us to humility, honesty, and urgency in
          turning back to God now.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Avoiding despair and presumption</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Catholics should avoid both despair and presumption. Trust in mercy does not excuse sin, and fear
            should not eclipse hope in Jesus.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">What to do now</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            <li>Go to Confession.</li>
            <li>Repent sincerely.</li>
            <li>Pray daily.</li>
            <li>Practice charity and works of mercy.</li>
          </ul>
        </article>
      </section>
      <section className="rounded-3xl border border-gold/40 bg-ivory/70 p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Pastoral note</p>
        <p className="daily-readable-muted mt-4 text-base leading-8 text-muted">
          If this topic causes intense anxiety, scrupulosity, or despair, speak with a trusted priest or
          confessor and remain close to the sacraments.
        </p>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Reflection Questions</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          {topic.reflectionQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </section>
      <EschatologyRelatedLinks />
    </EschatologyTopicPage>
  );
}
