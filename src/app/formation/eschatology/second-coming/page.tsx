import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EschatologyTopicPage } from "@/components/eschatology/EschatologyTopicPage";
import { EschatologyRelatedLinks } from "@/components/eschatology/EschatologyRelatedLinks";
import { eschatologyTopics } from "@/data/eschatology";

const topic = eschatologyTopics.find((item) => item.slug === "second-coming")!;

export const metadata: Metadata = createPageMetadata({
  title: "The Second Coming of Christ | Catholic Eschatology | Daily Oratory",
  description:
    "Learn Catholic teaching on the Second Coming of Christ with hope, sobriety, and freedom from sensational speculation.",
  path: "/formation/eschatology/second-coming",
});

export default function EschatologySecondComingPage() {
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
      summary="Catholic teaching on Christ's return is meant to awaken vigilance, repentance, and hope, not panic, conspiracy, or date-setting."
      ctas={[
        { label: "Watch the Prophecy Series", href: "/prophecy-series" },
        { label: "Open Advent", href: "/liturgical-living/advent", variant: "secondary" },
        { label: "Return to Eschatology", href: "/formation/eschatology", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What Catholics believe about the Second Coming</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Catholics believe that Jesus Christ will come again in glory to judge the living and the dead and to
          bring God's Kingdom to its fullness.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Christ is Lord of history</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            History is not random or outside God's providence. Christ remains Lord, and His return will reveal
            the victory of His Kingdom.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Watchfulness without panic</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Christians are called to vigilance, not panic. Watchfulness means prayer, fidelity, conversion, and
            steady discipleship.
          </p>
        </article>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">No date-setting</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            The Church rejects attempts to predict dates or force world events into speculative timelines. The
            faithful are called to trust Christ and remain ready at all times.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Public revelation, private revelation, and discernment</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Public revelation is complete in Christ. Private revelations, even when approved, never equal the
            Gospel and must be approached with humility, obedience, and discernment.
          </p>
        </article>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Living ready</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>Pray daily.</li>
          <li>Stay close to the sacraments.</li>
          <li>Practice charity and works of mercy.</li>
          <li>Repent quickly and trust Christ.</li>
        </ul>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Connection to the Prophecy Series</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Reflection on prophecy can be fruitful when it remains rooted in Scripture, the Catechism, humility,
          and trust in Christ. Eschatology gives the doctrinal foundation for thinking about the Second Coming
          with peace rather than speculation.
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
