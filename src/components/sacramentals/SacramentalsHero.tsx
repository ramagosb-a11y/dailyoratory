import Link from "next/link";
import { sacramentalsHeroLinks } from "@/data/sacramentalsPage";

export function SacramentalsHero() {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Sacramentals</p>
      <h1 className="font-display mt-3 max-w-4xl text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        Catholic Sacramentals
      </h1>
      <p className="mt-4 max-w-3xl text-xl text-navy">
        Sacred signs that help daily life become prayer.
      </p>
      <p className="mt-5 max-w-4xl text-sm leading-8 text-muted">
        Sacramentals are holy signs and blessed objects that help Catholics turn ordinary moments toward God. Holy water,
        crucifixes, rosaries, medals, scapulars, candles, blessings, and sacred images are not magic. They are invitations
        to faith, prayer, repentance, protection, and deeper union with Christ.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {sacramentalsHeroLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={index === 0 ? "btn liturgical-button focus-ring justify-center" : "btn btn-secondary focus-ring justify-center"}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="mt-5 rounded-md border border-gold/50 bg-parchment px-4 py-3 text-sm leading-7 text-muted">
        <span className="font-semibold text-navy">Keep the order clear:</span> Sacramentals point to Christ. They do not replace
        the Mass, the sacraments, confession, prayer, or a life of charity.
      </p>
    </section>
  );
}
