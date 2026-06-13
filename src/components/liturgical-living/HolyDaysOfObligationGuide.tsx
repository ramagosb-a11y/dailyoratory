import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { liturgicalSpecialDays } from "@/data/liturgicalSpecialDays";
import { LiturgicalLocalVariationNotice } from "@/components/liturgical-living/LiturgicalLocalVariationNotice";

export function HolyDaysOfObligationGuide() {
  return (
    <section id="holy-days" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <SectionHeader
        eyebrow="Holy days"
        title="Holy Days of Obligation"
        summary="Holy days of obligation are solemnities when Catholics are obliged to participate in Mass, unless excused for a serious reason."
      />
      <div className="mt-6">
        <LiturgicalLocalVariationNotice note="The list and transfers can vary by country and sometimes by ecclesiastical province or diocese. In the United States, obligation rules can also change when certain holy days fall on Saturday or Monday, and the Ascension is transferred to Sunday in many dioceses." />
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        For the United States, common holy days include Mary, Mother of God; Ascension of the
        Lord; Assumption; All Saints; Immaculate Conception; and Christmas. Always check your
        local diocesan calendar.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {liturgicalSpecialDays.map((day) => (
          <article key={day.id} className="dashboard-card p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{day.dateRule}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{day.title}</h3>
            <p className="mt-2 text-sm font-semibold text-burgundy">{day.obligationStatus}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{day.description}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">What to expect:</span> {day.whatToExpect}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">How to prepare:</span> {day.howToPrepare}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="#official-sources" className="btn btn-secondary focus-ring justify-center">
          Check Your Diocese
        </Link>
        <Link href="/today" className="text-link focus-ring inline-flex text-sm">
          Open Today in the Church
        </Link>
      </div>
    </section>
  );
}
