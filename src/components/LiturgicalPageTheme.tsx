"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LiturgicalThemeBadge } from "@/components/theme/LiturgicalThemeBadge";
import { useLiturgicalTheme } from "@/components/theme/LiturgicalThemeProvider";

function mergeClassNames(...values: Array<string | undefined | false | null>) {
  return values.filter(Boolean).join(" ");
}

export function LiturgicalPageTheme({
  children,
  className,
  applyToHomepage = false,
}: {
  children: ReactNode;
  className?: string;
  applyToHomepage?: boolean;
}) {
  const pathname = usePathname();
  const { theme, day, seasonLabel } = useLiturgicalTheme();
  const shouldApplyTheme = applyToHomepage || pathname !== "/";

  if (!shouldApplyTheme) {
    return <>{children}</>;
  }

  return (
    <div className={mergeClassNames("liturgical-interior-shell", className)}>
      <div className="section-shell pt-4 sm:pt-5">
        <div className="liturgical-day-banner">
          <div className="min-w-0">
            <p className="liturgical-day-banner-label">Daily Oratory follows today&apos;s liturgical color</p>
            <p className="liturgical-day-banner-copy">
              Interior pages use today&apos;s Church color as a subtle devotional accent.
            </p>
          </div>
          <LiturgicalThemeBadge theme={theme} day={day} seasonLabel={seasonLabel} className="shrink-0 shadow-sm" />
        </div>
      </div>
      {children}
    </div>
  );
}

export function ThemedPageHero({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={mergeClassNames("liturgical-page-hero card-parchment p-6 sm:p-8 lg:p-10", className)}>
      {eyebrow ? <p className="liturgical-page-eyebrow">{eyebrow}</p> : null}
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">{title}</h1>
      {subtitle ? <p className="daily-readable-muted mt-4 max-w-4xl">{subtitle}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}

export function ThemedSectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? <p className="liturgical-section-eyebrow text-sm font-semibold">{eyebrow}</p> : null}
      <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.12] text-navy sm:text-4xl lg:text-[2.8rem]">{title}</h2>
      {description ? <p className="daily-readable-muted mt-4 max-w-3xl">{description}</p> : null}
    </div>
  );
}

export function ThemedCard({
  children,
  className,
  accent = true,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return <div className={mergeClassNames(accent ? "liturgical-themed-card card-parchment" : "card-parchment", "p-6", className)}>{children}</div>;
}

export function ThemedCallout({
  title,
  children,
  tone = "default",
  className,
}: {
  title: ReactNode;
  children: ReactNode;
  tone?: "default" | "pastoral" | "warning" | "prayer";
  className?: string;
}) {
  return (
    <aside className={mergeClassNames("liturgical-callout", tone !== "default" && `liturgical-callout-${tone}`, className)}>
      <h2 className="font-display text-2xl font-semibold text-navy">{title}</h2>
      <div className="daily-card-readable mt-3 text-muted">{children}</div>
    </aside>
  );
}
