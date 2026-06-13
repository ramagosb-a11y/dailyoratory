import { BodySoulSpiritLinkPills, BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";

const links = [
  { label: "The Holy Mass", href: "/mass" },
  { label: "Eucharist", href: "/sacraments/eucharist" },
  { label: "Adoration", href: "/adoration" },
  { label: "Confession", href: "/confession" },
];

export function EucharistAndSoul() {
  return (
    <BodySoulSpiritSection
      eyebrow="Eucharistic life"
      title="The Eucharist and the Soul"
      summary="In Holy Communion, Christ gives Himself as true food. The Eucharist nourishes the soul, strengthens charity, deepens union with Christ, and makes the person more fully a living temple of God."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Christ enters the temple</h3>
          <p className="mt-4 text-sm leading-7 text-muted">
            Holy Communion is not a symbol-only reminder. Christ gives Himself as true food and
            true drink so that the soul may live from Him, be strengthened in charity, and grow
            in communion with His Body, the Church.
          </p>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Worthy reception matters</h3>
          <p className="mt-4 text-sm leading-7 text-muted">
            Catholics conscious of mortal sin should receive sacramental Confession before
            receiving Holy Communion. This is not rejection, but reverence for Christ and love
            for the soul's healing.
          </p>
        </article>
      </div>
      <div className="mt-7">
        <BodySoulSpiritLinkPills links={links} />
      </div>
    </BodySoulSpiritSection>
  );
}

