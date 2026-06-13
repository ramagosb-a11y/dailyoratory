import type { Metadata } from "next";
import Link from "next/link";
import { MassIntentionsLinks } from "@/components/mass-intentions/MassIntentionsLinks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Mass Intentions",
  description:
    "Learn why Catholics request Mass intentions for the living and the departed, especially the dead, and find external Catholic communities where you can submit requests.",
  path: "/mass-intentions",
});

export default function MassIntentionsPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Pray with the Church</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Mass intentions for the living and the departed.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              The Holy Mass is the Church&apos;s highest prayer. Catholics often request Mass intentions for deceased
              loved ones because no prayer on earth is greater than the Eucharistic offering of Christ made present
              in the Church.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/formation/catholic-burial/prayers-for-the-dead" className="btn btn-primary focus-ring">
                Pray for the dead
              </Link>
              <Link href="/formation/catholic-burial/planning-a-catholic-funeral" className="btn btn-secondary focus-ring">
                Plan a Catholic funeral
              </Link>
            </div>
          </div>
          <div className="dashboard-card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Pastoral note</p>
            <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">
              Submit requests only through the external organization.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Daily Oratory offers these links as a helpful directory. For Mass availability, stipends, tax receipts,
              special dates, or memorial enrollments, follow the instructions on the external site or contact that
              parish, abbey, mission, or community.
            </p>
          </div>
        </div>

        <section className="mt-14 grid gap-5 lg:grid-cols-2">
          <article className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">Why Catholics request Masses for the dead</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Catholics pray for the dead because love does not end at death. Requesting a Mass for someone who has
              died is a concrete way of entrusting that person to the mercy of Jesus Christ and uniting that prayer
              to the sacrifice of the altar.
            </p>
          </article>
          <article className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">What a Mass intention means</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              A Mass intention is a request that a priest offer the Mass for a particular person or intention. It
              does not buy grace. It is a devotional and ecclesial way of asking that the fruits of the Mass be
              applied in a special way for the one being remembered.
            </p>
          </article>
        </section>

        <section className="mt-14 card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">When to request Masses for the departed</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Soon after a death",
              "On the anniversary of death",
              "Near the funeral or burial",
              "During November or other times of remembrance",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-stone bg-ivory/80 px-4 py-4 text-base leading-7 text-muted">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">How to begin</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-8 text-muted">
            <li>Start with your parish if possible.</li>
            <li>Ask how Mass intentions are scheduled and what dates are available.</li>
            <li>Request Masses for deceased loved ones by name when appropriate.</li>
            <li>Continue praying for the person even after the funeral and burial.</li>
            <li>If your parish is full, use another trusted Catholic parish, abbey, or community.</li>
          </ul>
          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-sm leading-7 text-muted">
            Daily Oratory does not schedule Masses or receive stipends. Contact the parish or Catholic community directly for their current policy.
          </div>
        </section>

        <section className="mt-14">
          <MassIntentionsLinks />
        </section>

        <section className="mt-14 grid gap-5 lg:grid-cols-3">
          <Link href="/formation/catholic-burial/prayers-for-the-dead" className="card-parchment p-6 sm:p-8 transition hover:border-gold">
            <p className="text-xs font-bold uppercase text-burgundy">Prayer</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy">Prayers for the Dead</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Continue praying for deceased loved ones, souls in Purgatory, and anniversaries of death.
            </p>
          </Link>
          <Link href="/formation/catholic-burial" className="card-parchment p-6 sm:p-8 transition hover:border-gold">
            <p className="text-xs font-bold uppercase text-burgundy">Formation</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy">Catholic Burial and Funeral Rites</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Learn how burial, cremation, funeral rites, and prayer for the dead fit together in Catholic hope.
            </p>
          </Link>
          <Link href="/indulgences" className="card-parchment p-6 sm:p-8 transition hover:border-gold">
            <p className="text-xs font-bold uppercase text-burgundy">Mercy</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-navy">Indulgences and the Faithful Departed</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Explore how the Church encourages prayer, charity, and indulgenced works for the dead.
            </p>
          </Link>
        </section>
      </section>
    </div>
  );
}
