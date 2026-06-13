import Link from "next/link";
import { SectionJumpNav } from "@/components/SectionJumpNav";
import { getContentById, type DailyOratoryContentRecord } from "@/lib/content";
import { formatRank, formatShortDate } from "@/lib/liturgicalLiving";
import type { LiturgicalColor, LiturgicalHolyDayRecord, LiturgicalLivingAction } from "@/types/liturgicalLiving";

export const liturgicalLivingLinks = [
  { label: "Today", href: "/today" },
  { label: "Dashboard", href: "/liturgical-living" },
  { label: "Calendar", href: "/liturgical-living/calendar" },
  { label: "Seasons", href: "/liturgical-living/seasons" },
  { label: "Lent", href: "/liturgical-living/lent" },
  { label: "Fasting", href: "/liturgical-living/lent/fasting-and-abstinence" },
  { label: "Holy Days", href: "/liturgical-living/holy-days" },
  { label: "Family", href: "/liturgical-living/family" },
  { label: "Settings", href: "/liturgical-living/settings" },
] as const;

export function LiturgicalSubnav() {
  return (
    <SectionJumpNav
      ariaLabel="Liturgical living navigation"
      mobileTitle="Open the liturgical living outline"
      items={liturgicalLivingLinks}
    />
  );
}

export function LiturgicalColorPill({ color }: { color: LiturgicalColor }) {
  return <span className={`season-pill ${colorClassNames[color]}`}>{formatColor(color)}</span>;
}

export function VerificationNote({ note }: { note: string }) {
  return (
    <div className="dashboard-card border-l-4 border-l-gold p-4">
      <p className="text-sm font-semibold leading-7 text-navy">{note}</p>
    </div>
  );
}

export function ActionCard({ eyebrow, action }: { eyebrow: string; action?: LiturgicalLivingAction }) {
  if (!action) return null;

  const linkedResource = action.resourceId ? getContentById(action.resourceId) : undefined;
  const href = action.href ?? (linkedResource ? `/library/${linkedResource.slug}` : undefined);

  return (
    <article className="dashboard-card p-5">
      <p className="text-xs font-bold uppercase text-burgundy">{eyebrow}</p>
      <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{action.title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">{action.description}</p>
      {href ? (
        <Link href={href} className="text-link focus-ring mt-4 inline-flex text-sm">
          Open resource
        </Link>
      ) : null}
    </article>
  );
}

export function HolyDayList({ holyDays }: { holyDays: LiturgicalHolyDayRecord[] }) {
  return (
    <div className="grid gap-3">
      {holyDays.map((holyDay) => (
        <article key={holyDay.id} className="card-parchment p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase text-burgundy">{formatShortDate(holyDay.date)}</p>
              <h3 className="font-display mt-1 text-2xl font-semibold leading-tight text-navy">{holyDay.title}</h3>
            </div>
            <span className="season-pill">{formatRank(holyDay.rank)}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">{holyDay.description}</p>
          {holyDay.obligationNote ? <p className="mt-2 text-xs font-semibold text-navy">{holyDay.obligationNote}</p> : null}
          {holyDay.localObservanceNote ? <p className="mt-2 text-xs font-semibold text-muted">{holyDay.localObservanceNote}</p> : null}
          <div className="mt-3 flex flex-wrap gap-2">
            {holyDay.colors.map((color) => (
              <LiturgicalColorPill key={`${holyDay.id}-${color}`} color={color} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function DashboardResourceCard({ record }: { record: DailyOratoryContentRecord }) {
  return (
    <Link href={`/library/${record.slug}`} className="card resource-card focus-ring block p-5">
      <p className="text-xs font-bold uppercase text-burgundy">{record.category}</p>
      <h3 className="font-display mt-2 text-2xl font-semibold leading-tight text-navy">{record.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{record.description}</p>
    </Link>
  );
}

function formatColor(color: LiturgicalColor) {
  return color.charAt(0).toUpperCase() + color.slice(1);
}

const colorClassNames: Record<LiturgicalColor, string> = {
  violet: "border-[#8b6aa0] bg-[#f4eef7] text-[#5d3c6d]",
  white: "border-stone bg-ivory text-navy",
  gold: "border-gold bg-gold-soft text-navy",
  green: "border-[#7a9a6b] bg-[#edf5e8] text-[#31523b]",
  red: "border-[#c36565] bg-[#f8ece8] text-[#8b2626]",
  rose: "border-[#d8a0aa] bg-[#faedf0] text-[#8b3c4a]",
  black: "border-navy bg-navy text-ivory",
  blue: "border-[#7aa3c9] bg-[#edf5fb] text-[#2f5f8e]",
};
