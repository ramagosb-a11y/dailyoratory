import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="liturgical-breadcrumbs text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link prefetch={false} href="/" className="focus-ring liturgical-breadcrumb-link rounded-sm font-semibold text-navy hover:text-burgundy">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="liturgical-breadcrumb-divider">/</span>
            {item.href ? (
              <Link prefetch={false}
                href={item.href}
                className="focus-ring liturgical-breadcrumb-link rounded-sm font-semibold text-navy hover:text-burgundy"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="liturgical-breadcrumb-current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
