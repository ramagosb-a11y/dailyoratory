import type { ReactNode } from "react";

function withClassName(baseClassName: string, className?: string) {
  return className ? `${baseClassName} ${className}` : baseClassName;
}

export function PageEyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={withClassName("liturgical-page-eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-burgundy", className)}>
      {children}
    </p>
  );
}

export function PageTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={withClassName(
        "font-display mt-3 text-[2rem] font-semibold leading-[1.08] text-navy sm:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function PageSubtitle({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={withClassName("daily-readable-muted mt-5 max-w-4xl", className)}>{children}</p>;
}

export function SectionEyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={withClassName("liturgical-section-eyebrow text-sm font-semibold uppercase tracking-[0.16em] text-burgundy", className)}>
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  as: Tag = "h2",
  className,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={withClassName(
        "font-display mt-3 text-3xl font-semibold leading-[1.12] text-navy sm:text-4xl lg:text-[2.8rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function SectionSubtitle({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={withClassName("daily-readable-muted mt-4 max-w-3xl", className)}>{children}</p>;
}

export function BodyText({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={withClassName("daily-readable", className)}>{children}</p>;
}

export function SmallText({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={withClassName("text-base leading-8 text-[#4b443a] md:text-[17px]", className)}>{children}</p>;
}

export function PrayerText({
  children,
  preserveLines = false,
  className,
}: {
  children: ReactNode;
  preserveLines?: boolean;
  className?: string;
}) {
  return (
    <div
      className={withClassName(
        `${preserveLines ? "daily-prayer-readable" : "font-prayer daily-prayer-readable"} font-prayer`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  as: Tag = "h3",
  className,
}: {
  children: ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
}) {
  return <Tag className={withClassName("font-display text-xl font-semibold leading-[1.18] text-navy sm:text-2xl", className)}>{children}</Tag>;
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={withClassName("daily-card-readable", className)}>{children}</div>;
}
