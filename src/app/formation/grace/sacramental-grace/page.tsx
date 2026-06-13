import type { Metadata } from "next";
import { GraceAndSacraments } from "@/components/grace/GraceAndSacraments";
import { GracePrayerCard } from "@/components/grace/GracePrayerCard";
import { GraceRelatedLinks } from "@/components/grace/GraceRelatedLinks";
import { GraceTopicPage } from "@/components/grace/GraceTopicPage";
import { sacramentalGraceCards } from "@/data/grace";
import { createPageMetadata } from "@/lib/metadata";

const prayer =
  "Lord Jesus Christ, help me receive Your sacraments with reverence, faith, repentance, and gratitude. May every sacramental grace bear fruit in holiness and love. Amen.";

export const metadata: Metadata = createPageMetadata({
  title: "Sacramental Grace | Catholic Formation | Daily Oratory",
  description:
    "Learn what sacramental grace is, how Christ gives grace proper to each sacrament, and how to prepare more reverently for sacramental life.",
  path: "/formation/grace/sacramental-grace",
});

export default function SacramentalGracePage() {
  return (
    <GraceTopicPage
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Formation", href: "/formation" },
        { label: "Grace", href: "/formation/grace" },
        { label: "Sacramental Grace" },
      ]}
      title="Sacramental Grace"
      subtitle="The grace Christ gives through each sacrament."
      summary="Christ meets His people through visible signs that truly give grace. Sacramental grace is not vague spiritual encouragement, but grace proper to the sacrament being received."
      ctas={[
        { label: "Return to Grace Overview", href: "/formation/grace" },
        { label: "Go to the Sacraments", href: "/sacraments", variant: "secondary" },
        { label: "Open Mass", href: "/mass", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is sacramental grace?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Sacramental grace is the grace proper to each sacrament. Christ gives what the soul needs through Baptism,
          Confirmation, Eucharist, Confession, Anointing, Holy Orders, and Matrimony.
        </p>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">The seven sacraments as encounters with Christ</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          The sacraments are not mechanical rituals. They are privileged encounters with Jesus Christ, who acts in His
          Church and gives grace for real life.
        </p>
      </section>

      <GraceAndSacraments cards={sacramentalGraceCards} />

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Disposition and reverence</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            The sacraments truly give grace, but we should not approach them carelessly. Faith, repentance, humility,
            and reverence open the soul to receive more fruitfully what Christ is giving.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Eucharist as source and summit</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            The Eucharist nourishes sanctifying grace, strengthens charity, and unites the soul more deeply to Christ
            and His Church.
          </p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Confession as restoration and healing</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            In Confession, Christ restores grace after mortal sin, heals spiritual wounds, and strengthens the soul for
            the next battle.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">How to prepare better for the sacraments</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
            <li>Pray before receiving.</li>
            <li>Examine your conscience honestly.</li>
            <li>Arrive with reverence, not haste.</li>
            <li>Give thanks afterward.</li>
            <li>Ask how Christ wants that grace to bear fruit in your life.</li>
          </ul>
        </article>
      </section>

      <GracePrayerCard title="Prayer Before Receiving the Sacraments" prayer={prayer} />

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Reflection Questions</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>Which sacrament am I taking for granted?</li>
          <li>How can I prepare more prayerfully before Mass or Confession?</li>
          <li>Where is sacramental grace meant to bear more fruit in my life?</li>
        </ul>
      </section>

      <GraceRelatedLinks
        title="Related Links"
        links={[
          { title: "Sacraments", description: "Return to the full overview of the seven sacraments.", href: "/sacraments" },
          { title: "Eucharist", description: "Go deeper into Christ’s Real Presence and Eucharistic grace.", href: "/sacraments/eucharist" },
          { title: "Confession Guide", description: "Prepare for restoration, mercy, and healing.", href: "/confession" },
          { title: "Grace", description: "Return to the main Grace guide.", href: "/formation/grace" },
        ]}
      />
    </GraceTopicPage>
  );
}
