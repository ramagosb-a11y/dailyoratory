import Link from "next/link";
import { LiturgicalColorPill } from "@/components/liturgical-living/LiturgicalLivingCards";
import { SectionHeader } from "@/components/section-header";
import { seasonQuickCards } from "@/data/liturgicalSeasonsGuide";

export function SeasonQuickCards() {
  return (
    <section id="season-quick-cards" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <SectionHeader
        eyebrow="Season quick guide"
        title="A first look at the Church year"
        summary="Each season has its own color, prayerful mood, and practical invitation."
      />
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {seasonQuickCards.map((card) => (
          <article key={card.id} className="dashboard-card flex h-full flex-col p-5">
            <div className="flex flex-wrap gap-2">
              {card.liturgicalColor.map((color) => (
                <LiturgicalColorPill key={`${card.id}-${color}`} color={color} />
              ))}
            </div>
            <h3 className="font-display mt-4 text-2xl font-semibold text-navy sm:text-3xl">{card.seasonName}</h3>
            <p className="mt-2 text-sm font-semibold text-burgundy">{card.spiritualTheme}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{card.mindset}</p>
            <div className="mt-4 space-y-3">
              <QuickList title="Key practices" items={card.keyPractices} />
              <QuickList title="Major days" items={card.majorDays} />
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={`#${card.anchorId}`} className="btn btn-secondary focus-ring justify-center">
                Learn more
              </Link>
              <Link href={card.dailyOratoryLink.href} className="text-link focus-ring inline-flex text-sm">
                {card.dailyOratoryLink.label}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function QuickList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{title}</p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted marker:text-burgundy">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
