import Link from "next/link";

export function HomeSectionHeader({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.18em]">{title}</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{subtitle}</p> : null}
        <div className="liturgical-home-rule mt-4 max-w-40" aria-hidden="true" />
      </div>
      {ctaLabel && ctaHref ? (
        <Link href={ctaHref} className="btn btn-liturgical focus-ring md:mb-1">
          {ctaLabel}
        </Link>
      ) : null}
    </div>
  );
}
