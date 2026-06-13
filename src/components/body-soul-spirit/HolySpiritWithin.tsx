import { fruitOfTheSpirit } from "@/data/bodySoulSpiritPage";
import { BodySoulSpiritLinkPills, BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";

const links = [
  { label: "Virtue Tracker", href: "/virtue-tracker" },
  { label: "Formation", href: "/formation" },
];

export function HolySpiritWithin() {
  return (
    <BodySoulSpiritSection
      eyebrow="The Holy Spirit"
      title="The Holy Spirit Dwells Within"
      summary="The soul in grace is not empty. The Holy Spirit dwells within, giving life, light, strength, conviction, peace, and love."
    >
      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <article className="card-parchment p-6">
          <p className="text-sm leading-7 text-muted">
            The indwelling of the Holy Spirit is not a vague spiritual feeling. It is the living
            presence of God at work in the person who remains in grace, drawing the whole heart
            toward Christ, holiness, repentance, and love.
          </p>
          <div className="mt-6">
            <BodySoulSpiritLinkPills links={links} />
          </div>
        </article>
        <article className="card-parchment p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
            The bright temple bears fruit
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {fruitOfTheSpirit.map((fruit) => (
              <div
                key={fruit}
                className="rounded-2xl border border-stone bg-ivory px-4 py-3 text-sm font-semibold capitalize text-navy"
              >
                {fruit}
              </div>
            ))}
          </div>
        </article>
      </div>
    </BodySoulSpiritSection>
  );
}

