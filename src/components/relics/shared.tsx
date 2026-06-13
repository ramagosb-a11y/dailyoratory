import type { ReactNode } from "react";
import Link from "next/link";

export function RelicBulletGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
          {item}
        </article>
      ))}
    </div>
  );
}

export function RelicLinkRow({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function ExternalAnchor({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
