import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { homePractices } from "@/data/sacramentalsPage";

export function SacramentalsInHome() {
  return (
    <section>
      <SectionHeader
        eyebrow="Home"
        title="Sacramentals in the Home"
        summary="Sacramentals help the home become a place of prayer. A crucifix, Bible, holy water, rosary, candle, and sacred image can turn ordinary spaces toward God."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {homePractices.map((practice) => (
          <article key={practice} className="card-parchment p-5 text-sm leading-7 text-muted">
            {practice}
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {[
          { label: "Family", href: "/family" },
          { label: "Pray", href: "/pray" },
          { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
