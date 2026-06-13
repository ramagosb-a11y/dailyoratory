import type { ReactNode } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { CardBody, CardTitle } from "@/components/ui/Typography";
import type { RosaryColorAccent, RosaryLink } from "@/types/rosary";

export function RosarySection({
  id,
  eyebrow,
  title,
  summary,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  summary?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <SectionHeader eyebrow={eyebrow} title={title} summary={summary} />
      <div className="mt-7">{children}</div>
    </section>
  );
}

export function RosaryCardGrid({
  children,
  columns = "md:grid-cols-2 xl:grid-cols-4",
}: {
  children: ReactNode;
  columns?: string;
}) {
  return <div className={`grid gap-6 sm:gap-6 ${columns}`}>{children}</div>;
}

export function RosaryCard({
  title,
  description,
  meta,
  accent = "joyful",
  children,
  className = "",
}: {
  title: string;
  description?: string;
  meta?: string;
  accent?: RosaryColorAccent;
  children?: ReactNode;
  className?: string;
}) {
  const accentClasses = getRosaryAccentClasses(accent);

  return (
    <article className={`rounded-md border p-7 shadow-soft sm:p-7 ${accentClasses} ${className}`}>
      {meta ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{meta}</p> : null}
      <CardTitle className="mt-2">{title}</CardTitle>
      {description ? (
        <CardBody className="mt-3">
          <p>{description}</p>
        </CardBody>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}

export function RosaryLinkPills({ links }: { links: RosaryLink[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={`${link.href}-${link.label}`}
          href={link.href}
          className="rounded-full border border-stone bg-ivory px-4 py-3 text-base font-semibold text-navy transition hover:border-gold hover:text-navy md:px-3 md:py-2 md:text-sm"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function getRosaryAccentClasses(accent: RosaryColorAccent) {
  switch (accent) {
    case "joyful":
      return "border-gold/45 bg-[linear-gradient(145deg,#f9f3e4_0%,#f7f0df_55%,#fbf7eb_100%)]";
    case "luminous":
      return "border-[#c9d5e6] bg-[linear-gradient(145deg,#faf4e7_0%,#f6f7f3_52%,#edf3fb_100%)]";
    case "sorrowful":
      return "border-burgundy/35 bg-[linear-gradient(145deg,#f8efe5_0%,#f5ede4_52%,#f3e7e8_100%)]";
    case "glorious":
      return "border-[#dcc58e] bg-[linear-gradient(145deg,#fbf6ea_0%,#fffdf7_50%,#f8f0d7_100%)]";
    default:
      return "border-stone bg-parchment";
  }
}
