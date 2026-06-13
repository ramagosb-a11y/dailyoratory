import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EschatologyTopicPage } from "@/components/eschatology/EschatologyTopicPage";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { EschatologyRelatedLinks } from "@/components/eschatology/EschatologyRelatedLinks";
import { eschatologyTopics } from "@/data/eschatology";

const topic = eschatologyTopics.find((item) => item.slug === "heaven")!;
const prayer = "Lord, make me desire Heaven above every passing thing. Purify my heart and lead me to eternal communion with You. Amen.";

export const metadata: Metadata = createPageMetadata({
  title: "Heaven and the Beatific Vision | Catholic Eschatology | Daily Oratory",
  description:
    "Learn Catholic teaching on Heaven, the Beatific Vision, communion with God and the saints, and hope for eternal joy.",
  path: "/formation/eschatology/heaven",
});

export default function EschatologyHeavenPage() {
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
      summary="Heaven is not simply a vague afterlife. It is the fulfillment of human longing in perfect communion with God, the angels, and the saints."
      ctas={[
        { label: "Return to Eschatology", href: "/formation/eschatology" },
        { label: "Open Prayer", href: "/pray", variant: "secondary" },
        { label: "Visit the Saints", href: "/saints", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is Heaven?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Heaven is perfect communion with God. It is the blessedness for which every human person is created
          and the eternal life won for us by Christ.
        </p>
      </section>
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">The Beatific Vision</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          The Beatific Vision means seeing God face to face. In Heaven, the soul's deepest longing is fulfilled
          in direct union with the Lord.
        </p>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Communion with God, angels, and saints</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Heaven is not isolation but communion: the full joy of life with the Blessed Trinity, Mary, the
            angels, and all the saints.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">The end of sorrow, pain, and death</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            In the fulfillment of God's Kingdom, sorrow, pain, and death will be no more. Christian hope rests
            in God's promise, not mere imagination.
          </p>
        </article>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Living now for Heaven</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Hope for Heaven changes daily life. It calls the Christian to holiness, prayer, charity, and
            freedom from passing idols.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Hope without presumption</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Christian hope is not presumption. It trusts in God's mercy while taking seriously the need for
            conversion and perseverance in grace.
          </p>
        </article>
      </section>
      <PrayerCard title="Prayer for Heaven" eyebrow="Prayer" prayer={prayer} />
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
