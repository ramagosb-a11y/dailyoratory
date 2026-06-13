import Image from "next/image";
import {
  interiorTempleMetaphorNote,
  interiorTempleMetaphors,
} from "@/data/bodySoulSpiritPage";
import {
  BodySoulSpiritCard,
  BodySoulSpiritSection,
} from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function SoulInteriorTemple() {
  return (
    <BodySoulSpiritSection
      id="interior-temple"
      eyebrow="Interior temple"
      title="The Soul as an Interior Temple"
      summary="The soul can be imagined as an interior temple where God desires to dwell. In grace, the temple is bright, ordered, and open to God. In sin, the temple becomes dim, cluttered, and wounded. Christ does not come to destroy the soul but to cleanse, heal, and restore it."
    >
      <div className="grid gap-5">
        <article className="card-parchment p-6 sm:p-7">
          <div className="max-w-4xl">
            <p className="text-base leading-8 text-muted sm:text-lg">
              These images can help the heart understand the page&apos;s central metaphor: the soul is
              like an inner sanctuary, and the heart is like the tabernacle where God desires to dwell
              in grace. When we live in friendship with God, the interior temple is bright with His
              life. Venial sin wounds love and clouds the windows. Mortal sin extinguishes charity in
              the heart until Christ restores the soul through repentance and sacramental Confession.
            </p>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-2">
            <figure className="overflow-hidden rounded-[1.4rem] border border-gold/30 bg-ivory shadow-oratory">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/body-soul-spirit/interior-temple-bright.png"
                  alt="A bright interior sanctuary with a glowing tabernacle, symbolizing the heart alive with grace and open to God."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1279px) 100vw, 50vw"
                />
              </div>
              <figcaption className="space-y-3 p-5 sm:p-6">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-burgundy">In the state of grace</p>
                <h3 className="font-display text-2xl font-semibold text-navy sm:text-[2rem]">The heart like a living tabernacle</h3>
                <p className="text-base leading-8 text-muted sm:text-lg">
                  Grace fills the soul with God&apos;s own life. The lamp burns, the sanctuary is bright,
                  and the inner temple is open to prayer, charity, peace, and communion with Christ.
                </p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-[1.4rem] border border-burgundy/25 bg-[#221911] shadow-oratory">
              <div className="relative aspect-square sm:aspect-[4/5]">
                <Image
                  src="/images/body-soul-spirit/interior-temple-dim.png"
                  alt="A darkened interior sanctuary with an empty tabernacle space, symbolizing the soul dimmed by sin and in need of mercy."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1279px) 100vw, 50vw"
                />
              </div>
              <figcaption className="space-y-3 p-5 text-parchment sm:p-6">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold-soft">When sin darkens the temple</p>
                <h3 className="font-display text-2xl font-semibold text-ivory sm:text-[2rem]">The light dims when love is wounded</h3>
                <p className="text-base leading-8 text-stone-soft sm:text-lg">
                  Sin disorders the interior temple. Venial sin dims spiritual clarity and weakens
                  love. Mortal sin extinguishes charity in the heart, not because God stops calling
                  us, but because the soul must be restored through His mercy in Confession.
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="mt-6 rounded-[1.2rem] border border-gold/30 bg-ivory px-5 py-4 text-base leading-8 text-navy sm:px-6 sm:py-5 sm:text-lg">
            <p>
              Keep the image simple: Christ wants to dwell within you. Prayer opens the doors.
              Virtue strengthens the temple. The Eucharist nourishes the heart. Confession cleanses
              what sin has wounded and lets the lamp burn brightly again.
            </p>
          </div>
        </article>

        <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="card-parchment p-6">
          <ul className="grid gap-3">
            {interiorTempleMetaphors.map((item) => (
              <li key={item} className="rounded-2xl border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-navy">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <BodySoulSpiritCard
          title="How to use this image"
          description={interiorTempleMetaphorNote}
          note="Christ is the true Temple and the source of cleansing, healing, and light. This image is meant to help prayer and conversion, not to encourage fear or scrupulous self-measurement."
          meta="Important"
        />
        </div>
      </div>
    </BodySoulSpiritSection>
  );
}
