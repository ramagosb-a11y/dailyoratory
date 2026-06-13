import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { prophecySeriesRelatedLinks } from "@/data/prophecySeries";

export function ProphecyRelatedLinks() {
  return (
    <section className="mt-14">
      <SectionHeader
        eyebrow="Continue"
        title="Continue Learning and Praying"
        summary="Stay close to Christ through Scripture, formation, prayer, sacramental life, and the steady life of the Church."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {prophecySeriesRelatedLinks.map((link) => (
          <Link key={link.id} href={link.href} className="card-parchment block h-full p-5 transition hover:border-gold">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Daily Oratory</p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{link.title}</h3>
            <p className="daily-card-readable mt-4 text-[#4b443a]">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
