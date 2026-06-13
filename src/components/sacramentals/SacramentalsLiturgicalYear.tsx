import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { liturgicalYearCards } from "@/data/sacramentalsPage";

export function SacramentalsLiturgicalYear() {
  return (
    <section>
      <SectionHeader eyebrow="Church year" title="Sacramentals Through the Church Year" />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {liturgicalYearCards.map((item) => (
          <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
            {item}
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {[
          { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
          { label: "Family", href: "/family" },
          { label: "Devotions", href: "/devotions" },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
