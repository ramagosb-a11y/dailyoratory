import Link from "next/link";
import type { ReactNode } from "react";

export function IndulgenceSection({
  id,
  eyebrow,
  title,
  summary,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  summary?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-stone/70 pt-10 first:border-t-0 first:pt-0">
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{eyebrow}</p> : null}
      <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">{title}</h2>
      {summary ? <p className="mt-3 max-w-3xl text-base leading-7 text-muted">{summary}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function BulletCardList({ items }: { items: readonly string[] | string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="card p-4 text-sm leading-7 text-muted">
          <span className="font-semibold text-navy">&middot; </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function NotePanel({
  title,
  children,
  tone = "parchment",
}: {
  title: string;
  children: ReactNode;
  tone?: "parchment" | "navy";
}) {
  const className =
    tone === "navy"
      ? "rounded-md border border-gold-soft/50 bg-navy p-5 text-ivory shadow-soft"
      : "card-parchment p-5";

  return (
    <aside className={className}>
      <p className={`text-xs font-bold uppercase tracking-[0.14em] ${tone === "navy" ? "text-gold" : "text-burgundy"}`}>{title}</p>
      <div className={`mt-3 text-sm leading-7 ${tone === "navy" ? "text-parchment" : "text-muted"}`}>{children}</div>
    </aside>
  );
}

export function ExternalSourceLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring rounded-sm font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-burgundy"
    >
      {label}
    </a>
  );
}

export function RelatedLinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="card resource-card focus-ring block p-5">
      <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
    </Link>
  );
}
