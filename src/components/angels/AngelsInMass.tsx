import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const points = [
  "Angels worship God continually.",
  "Isaiah's vision shows heavenly worship.",
  "Revelation shows heavenly liturgy.",
  "The Sanctus joins the Church to angelic praise.",
  "The Mass unites heaven and earth in Christ.",
  "Angels remind us to worship with reverence.",
];

export function AngelsInMass() {
  return (
    <section id="angels-in-the-mass" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Worship"
        title="Angels in Worship and the Mass"
        summary="The Mass is not only earthly worship. Catholics believe the liturgy joins the worship of heaven. When the Church sings “Holy, Holy, Holy,” she joins the song of the angels and saints before God."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-parchment p-6 sm:p-8">
          <ul className="grid gap-3 text-sm leading-7 text-muted">
            {points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
          <div className="mt-6 rounded-md border border-gold/50 bg-gold-soft/35 px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Sanctus</p>
            <p className="mt-2 font-display text-2xl font-semibold text-navy">Holy, Holy, Holy Lord God of hosts.</p>
          </div>
        </div>
        <div className="card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Related prayer and worship</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { label: "Mass", href: "/mass" },
              { label: "Eucharist", href: "/sacraments/eucharist" },
              { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
              { label: "Adoration", href: "/adoration" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="season-pill focus-ring hover:border-gold hover:text-navy">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
