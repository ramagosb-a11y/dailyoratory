import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import type { BibleLink } from "@/types/bible";

export function BibleSection({
  id,
  eyebrow,
  title,
  summary,
  children,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  summary?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 ${className}`}>
      <SectionHeader eyebrow={eyebrow} title={title} summary={summary} />
      <div className="mt-7">{children}</div>
    </section>
  );
}

export function BibleCardGrid({
  children,
  columns = "md:grid-cols-2 xl:grid-cols-3",
}: {
  children: React.ReactNode;
  columns?: string;
}) {
  return <div className={`grid gap-4 ${columns}`}>{children}</div>;
}

export function BibleCard({
  title,
  description,
  note,
  meta,
  children,
  className = "",
}: {
  title: string;
  description?: string;
  note?: string;
  meta?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <article className={`card-parchment h-full p-5 ${className}`}>
      <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
      {description ? <p className="mt-3 text-sm leading-7 text-muted">{description}</p> : null}
      {note ? <p className="mt-3 text-sm leading-7 text-navy">{note}</p> : null}
      {meta ? <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">{meta}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}

export function BibleLinkPills({ links }: { links: BibleLink[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={`${link.href}-${link.label}`}
          href={link.href}
          className="rounded-full border border-stone bg-ivory px-3 py-2 text-sm font-semibold text-navy transition hover:border-gold hover:text-navy"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
