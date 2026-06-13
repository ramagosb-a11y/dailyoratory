import Link from "next/link";

type SectionJumpNavItem = {
  href: string;
  label: string;
};

type SectionJumpNavProps = {
  ariaLabel: string;
  mobileEyebrow?: string;
  mobileTitle?: string;
  desktopEyebrow?: string;
  items: readonly SectionJumpNavItem[];
};

export function SectionJumpNav({
  ariaLabel,
  mobileEyebrow = "Jump to section",
  mobileTitle = "Open this section outline",
  desktopEyebrow = "On this page",
  items,
}: SectionJumpNavProps) {
  return (
    <>
      <details className="dashboard-card mb-8 p-5 sm:hidden">
        <summary className="cursor-pointer list-none text-sm font-semibold text-navy">
          <span className="liturgical-label text-xs font-bold tracking-[0.16em]">{mobileEyebrow}</span>
          <span className="mt-2 block">{mobileTitle}</span>
        </summary>
        <div className="mt-4 grid gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring liturgical-chip rounded-2xl px-4 py-3 text-sm font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </details>

      <nav aria-label={ariaLabel} className="mb-8 hidden flex-wrap gap-2 sm:flex">
        {desktopEyebrow ? (
          <p className="liturgical-label w-full text-xs font-bold tracking-[0.16em]">{desktopEyebrow}</p>
        ) : null}
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="season-pill liturgical-chip focus-ring px-3 py-2"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
