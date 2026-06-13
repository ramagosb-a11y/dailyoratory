import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { liturgicalSeasonRecords } from "@/data/liturgicalLiving";

const livingPaths = [
  {
    title: "Seasonal practices",
    description: "Prayer, works of mercy, and simple observances for the current season.",
    href: "/liturgical-living/seasons",
  },
  {
    title: "Holy days",
    description: "Mark solemn days and feasts with prayer, Mass, and family practices.",
    href: "/liturgical-living/holy-days",
  },
  {
    title: "Family liturgical living",
    description: "Bring the Church year into the domestic Church with peace.",
    href: "/liturgical-living/family",
  },
];

export function LiturgicalYearSection() {
  const season = liturgicalSeasonRecords[0];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <div className="dashboard-card grid gap-8 p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
        <div>
          <SectionHeader
            eyebrow="Live the Liturgical Year"
            title="Let the Church teach you how to keep time."
            summary="Follow seasons, feasts, holy days, and family practices without turning Catholic life into clutter."
          />
          <div className="mt-6 rounded-md border border-stone bg-background p-4">
            <p className="text-xs font-bold uppercase text-burgundy">Seasonal focus</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{season.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{season.description}</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {livingPaths.map((item) => (
            <Link key={item.href} href={item.href} className="card-parchment resource-card focus-ring p-5">
              <h3 className="font-display text-2xl font-semibold leading-tight text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
