import type { Metadata } from "next";
import { GracePrayerCard } from "@/components/grace/GracePrayerCard";
import { GraceRelatedLinks } from "@/components/grace/GraceRelatedLinks";
import { GraceTopicPage } from "@/components/grace/GraceTopicPage";
import { createPageMetadata } from "@/lib/metadata";

const prayer = "Lord Jesus, preserve and increase sanctifying grace in my soul. Keep me close to You, cleanse me from sin, and help me live as a child of the Father. Amen.";

export const metadata: Metadata = createPageMetadata({
  title: "Sanctifying Grace | Catholic Formation | Daily Oratory",
  description:
    "Learn what sanctifying grace is, how it begins in Baptism, grows through the Eucharist, is lost by mortal sin, and is restored in Confession.",
  path: "/formation/grace/sanctifying-grace",
});

export default function SanctifyingGracePage() {
  return (
    <GraceTopicPage
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Formation", href: "/formation" },
        { label: "Grace", href: "/formation/grace" },
        { label: "Sanctifying Grace" },
      ]}
      title="Sanctifying Grace"
      subtitle="The stable gift of divine life in the soul."
      summary="Sanctifying grace is not merely a passing help. It is the abiding gift of God’s own life in the soul, making us holy, pleasing to Him, and capable of living in communion with Him."
      ctas={[
        { label: "Return to Grace Overview", href: "/formation/grace" },
        { label: "Go to Confession Guide", href: "/confession", variant: "secondary" },
        { label: "Open Eucharist", href: "/sacraments/eucharist", variant: "secondary" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is sanctifying grace?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Sanctifying grace is the stable gift of divine life in the soul. It makes us children of God, friends of
          God, and able to live supernaturally in faith, hope, and charity.
        </p>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">How sanctifying grace makes the soul holy</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Sanctifying grace does not simply excuse sin from a distance. It heals and elevates the soul, giving real
          participation in God’s life. Through it, the Christian is not only forgiven but also made inwardly holy.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Baptism and the beginning of the life of grace</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Baptism begins the life of sanctifying grace. It cleanses from sin, gives new birth, and incorporates the
            person into Christ and His Church.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Eucharist and growth in sanctifying grace</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            The Eucharist nourishes charity, deepens communion with Christ, and strengthens the life of grace already
            present in the soul.
          </p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Mortal sin and loss of sanctifying grace</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Mortal sin destroys charity in the soul and separates the person from sanctifying grace. This is why the
            Church speaks with seriousness and mercy about Confession.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Confession and restoration of grace</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            In the Sacrament of Reconciliation, Christ forgives sins and restores the soul to grace. The goal is not
            fear, but return, healing, and peace.
          </p>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Living in sanctifying grace</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>Stay close to the sacraments.</li>
          <li>Pray each day, even simply.</li>
          <li>Turn away from serious sin quickly.</li>
          <li>Receive Holy Communion with reverence and faith.</li>
          <li>Let charity toward others become real and concrete.</li>
        </ul>
      </section>

      <GracePrayerCard title="Prayer for Sanctifying Grace" prayer={prayer} />

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Reflection Questions</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>Do I see the life of grace as something living and precious in my soul?</li>
          <li>How can I prepare more reverently for the Eucharist?</li>
          <li>Where is Christ inviting me back to mercy and restoration?</li>
        </ul>
      </section>

      <GraceRelatedLinks
        title="Related Links"
        links={[
          { title: "Grace", description: "Return to the main guide on grace and holiness.", href: "/formation/grace" },
          { title: "Confession Guide", description: "Prepare for the sacrament that restores grace after mortal sin.", href: "/confession" },
          { title: "Eucharist", description: "Learn how Holy Communion nourishes the life of grace.", href: "/sacraments/eucharist" },
          { title: "Mass", description: "See how worship and sacramental life deepen grace.", href: "/mass" },
        ]}
      />
    </GraceTopicPage>
  );
}
