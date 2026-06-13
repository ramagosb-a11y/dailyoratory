import { HolyDayList, LiturgicalSubnav, VerificationNote } from "@/components/liturgical-living/LiturgicalLivingCards";
import { SectionHeader } from "@/components/section-header";
import { diocesanVerificationNote, liturgicalHolyDays } from "@/data/liturgicalLiving";

export function LiturgicalHolyDaysView() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <LiturgicalSubnav />
        <SectionHeader
          eyebrow="Liturgical Living"
          title="Holy days and solemnities"
          summary="A maintainable list of major days for prayer, Mass planning, family observance, and seasonal preparation."
        />
        <div className="mt-6">
          <VerificationNote note={diocesanVerificationNote} />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase text-burgundy">Admin posture</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Verify obligation status locally</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Holy day obligations, transferred celebrations, patronal feasts, and parish schedules can vary by country and diocese.
            </p>
          </aside>
          <HolyDayList holyDays={liturgicalHolyDays} />
        </div>
      </section>
    </div>
  );
}
