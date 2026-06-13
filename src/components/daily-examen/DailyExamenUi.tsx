import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import type { DailyExamenLink } from "@/types/dailyExamen";

export function ExamenSection({
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

export function ExamenCardGrid({
  children,
  columns = "md:grid-cols-2 xl:grid-cols-3",
}: {
  children: React.ReactNode;
  columns?: string;
}) {
  return <div className={`grid gap-4 ${columns}`}>{children}</div>;
}

export function ExamenLinkPills({ links }: { links: DailyExamenLink[] }) {
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

