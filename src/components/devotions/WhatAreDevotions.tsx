import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export function WhatAreDevotions() {
  return (
    <section>
      <SectionHeader
        eyebrow="Introduction"
        title="What Are Catholic Devotions?"
        summary="Devotions are prayerful helps that support the Christian life when they remain ordered to Christ, the sacraments, Scripture, and charity."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment p-7 sm:p-8">
          <div className="daily-card-readable space-y-6">
            <p>
            Catholic devotions are prayerful practices that help people express love for God,
            meditate on the mysteries of Christ, honor Mary and the saints, seek conversion, make
            reparation, and grow in holiness. If you are exploring Catholic prayer, this is a good
            place to learn what these practices mean and how the Church understands them.
            </p>
            <p>
            Devotions are not required in the same way as Sunday Mass. They are spiritual helps,
            not substitutes for the sacraments. They may be personal, family-based, parish-based,
            or seasonal, and they often include prayers, chaplets, litanies, novenas, holy hours,
            medals, scapulars, pilgrimages, or acts of consecration.
            </p>
            <p>
            A healthy devotion bears fruit in humility, charity, repentance, faith, hope, and love.
            </p>
            <p>
            The Church also teaches about{" "}
            <Link href="/angels" className="font-semibold text-navy underline-offset-4 hover:underline">
              angels and the invisible world
            </Link>
            , which helps keep devotion rooted in worship, reverence, and trust in God rather than superstition.
            </p>
          </div>
        </article>
        <aside className="dashboard-card p-7 sm:p-8">
          <p className="text-xs font-bold uppercase text-burgundy">Keep this in view</p>
          <p className="daily-card-readable mt-4">
            Devotions should lead us toward Christ, the Eucharist, the sacraments, Scripture, and
            love of neighbor.
          </p>
          <ul className="daily-card-readable mt-5 space-y-4">
            <li>They are not magic.</li>
            <li>They do not replace the Mass or confession.</li>
            <li>They are meant to deepen conversion and daily fidelity.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
