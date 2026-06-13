import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { liturgicalCustoms } from "@/data/liturgicalCustoms";
import { specialMassAndBlessingCards } from "@/data/liturgicalSeasonPractices";
import { LiturgicalLocalVariationNotice } from "@/components/liturgical-living/LiturgicalLocalVariationNotice";

export function SpecialMassesAndCustoms() {
  return (
    <section id="special-masses-customs" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <SectionHeader
        eyebrow="Special Masses and customs"
        title="Special Masses, Blessings, and Parish Customs"
        summary="These liturgies, sacramentals, and devotional customs help families and parishes move through the year with the Church."
      />
      <div className="mt-6">
        <LiturgicalLocalVariationNotice note="Schedules, obligation status, actual rites, and devotional customs vary by country, diocese, parish, and community. Use this section as a guide, then confirm local practice with your parish bulletin or diocesan calendar." />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {specialMassAndBlessingCards.map((card) => (
          <article key={card.id} className="dashboard-card p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{card.timing}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">What to expect:</span> {card.whatToExpect}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">How to participate:</span> {card.howToParticipate}
            </p>
            <Link href={card.relatedLink.href} className="text-link focus-ring mt-4 inline-flex text-sm">
              {card.relatedLink.label}
            </Link>
          </article>
        ))}
      </div>

      <details className="dashboard-card mt-6 p-6">
        <summary className="cursor-pointer list-none text-lg font-semibold text-navy">
          More local and devotional customs
        </summary>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {liturgicalCustoms.map((custom) => (
            <article key={custom.id} className="card-parchment p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{custom.associatedDate}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy">{custom.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{custom.description}</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">What to expect:</span> {custom.whatToExpect}
              </p>
              <p className="mt-2 text-sm leading-7 text-muted">
                <span className="font-semibold text-navy">How to participate:</span> {custom.howToParticipate}
              </p>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
