import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HomeBlessingBuilder } from "@/components/liturgical-living/epiphany/HomeBlessingBuilder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Epiphany House Blessing | Daily Oratory",
  description:
    "Prepare an Epiphany house blessing prayer plan with the traditional chalk inscription, family prayer, and room-by-room prompts.",
  path: "/liturgical-living/christmas/epiphany/house-blessing",
});

export default function EpiphanyHouseBlessingPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Liturgical Year", href: "/liturgical-living" },
            { label: "Christmas", href: "/liturgical-living/christmas" },
            { label: "Epiphany", href: "/liturgical-living/christmas/epiphany" },
            { label: "House Blessing" },
          ]}
        />

        <div className="mt-8 grid gap-8">
          <header className="dashboard-card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Christmas Season</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Epiphany House Blessing
            </h1>
            <p className="daily-readable mt-5 max-w-4xl text-xl leading-9 text-muted">
              Pray for Christ’s peace and light to dwell in your home during Epiphany and throughout the year.
            </p>
          </header>

          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">What Is an Epiphany House Blessing?</h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              An Epiphany house blessing is a family or household prayer asking Christ to dwell in the home, bless all
              who enter, and guide the year ahead. Families may pray for God’s blessing over the home. If a priest or
              deacon is available, they may bless the home according to the Church’s liturgical books.
            </p>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">What the Chalk Inscription Means</h2>
            <p className="font-display mt-5 text-3xl font-semibold text-navy">20 + C + M + B + 26</p>
            <p className="daily-readable mt-4 text-base leading-8 text-muted">
              The numbers mark the year. The letters can recall Caspar, Melchior, and Balthazar, and they are also
              commonly connected with the Latin phrase <em>Christus Mansionem Benedicat</em> — “May Christ bless this
              house.”
            </p>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">How to Prepare</h2>
            <ol className="daily-card-readable mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-muted">
              <li>Choose a time when the household can gather quietly.</li>
              <li>Place a crucifix, Nativity scene, or sacred image nearby.</li>
              <li>Light a candle if it can be done safely.</li>
              <li>Read Matthew 2:1–12.</li>
              <li>Have chalk ready if your family uses the doorway inscription.</li>
              <li>Decide one main intention for the home and one gift to offer Christ this year.</li>
            </ol>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">Simple Family Prayer</h2>
            <p className="daily-prayer-readable mt-5 text-lg leading-9 text-navy">
              Lord Jesus Christ, Light of the nations, bless this home. Dwell with us in peace, guide us in truth,
              protect us from harm, and make this household a place of prayer, charity, and welcome. Lead us by Your
              grace, and help us follow You by a new road each day. Amen.
            </p>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">Room-by-Room Blessing Prompts</h2>
            <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
              <li>At the doorway, pray for peace, welcome, and protection.</li>
              <li>In the main room, ask for charity, patient speech, and family unity.</li>
              <li>In the kitchen or dining area, thank God for daily bread and shared life.</li>
              <li>In bedrooms, ask for rest, healing, purity, and protection through the night.</li>
              <li>In work or study spaces, pray for wisdom, diligence, honesty, and perseverance.</li>
            </ul>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">Doorway Prayer</h2>
            <p className="daily-prayer-readable mt-5 text-lg leading-9 text-navy">
              Christ bless this home and all who enter here. May this household belong to You in faith, hope, and
              charity. Amen.
            </p>
          </section>

          <HomeBlessingBuilder />

          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">Local Parish Note</h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              If your parish offers blessed chalk or an Epiphany home blessing, follow your local parish or diocesan
              custom. Families can pray simply and reverently at home, while ordained ministers use the Church’s
              approved liturgical blessings.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
