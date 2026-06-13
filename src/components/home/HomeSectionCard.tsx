import Link from "next/link";
import type { HomepageCard } from "@/data/homepageSections";

export function HomeSectionCard({
  card,
  emphasized = false,
  compact = false,
  simpleLinks = false,
}: {
  card: HomepageCard;
  emphasized?: boolean;
  compact?: boolean;
  simpleLinks?: boolean;
}) {
  return (
    <article className={`${emphasized ? "card-parchment" : "card"} liturgical-home-card liturgical-card-accent flex h-full flex-col p-6`}>
      <div className="flex items-start justify-between gap-3">
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.18em]">{card.category}</p>
        {card.badge ? (
          <span className="liturgical-badge rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
            {card.badge}
          </span>
        ) : null}
      </div>
      <h3 className={`${compact ? "text-2xl" : "text-3xl"} font-display mt-3 font-semibold leading-tight text-navy`}>
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
      {card.meta ? <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted">{card.meta}</p> : null}
      {card.links?.length ? (
        simpleLinks ? (
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {card.links.map((link) => (
              <Link
                key={`${card.id}-${link.href}`}
                href={link.href}
                className="text-sm font-medium text-muted underline decoration-[var(--liturgical-border)] underline-offset-4 transition hover:text-[var(--liturgical-primary-dark)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-5 flex flex-wrap gap-2">
            {card.links.map((link) => (
              <Link
                key={`${card.id}-${link.href}`}
                href={link.href}
                className="liturgical-home-chip rounded-full px-3 py-2 text-sm font-semibold text-navy transition hover:border-[var(--liturgical-primary)] hover:text-[var(--liturgical-primary-dark)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )
      ) : null}
      <div className={`${simpleLinks ? "mt-5" : "mt-6"}`}>
        <Link href={card.href} className="text-link focus-ring text-sm">
          {card.cta}
        </Link>
      </div>
    </article>
  );
}
