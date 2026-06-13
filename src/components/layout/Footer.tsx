import Link from "next/link";
import { brand } from "@/config/brand";
import { footerNavigationGroups } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="liturgical-footer-accent border-t border-stone bg-ivory">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:px-10">
        <div>
          <p className="font-display text-3xl font-semibold text-navy">{brand.platformName}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted">{brand.tagline}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">{brand.description}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">
            Daily Oratory is a Catholic prayer and formation resource inspired by the Holy Spirit,
            welcoming anyone who wants to pray, learn, and grow in the Fruits of the Spirit.
          </p>
          <p className="liturgical-section-eyebrow mt-4 text-xs font-bold uppercase">{brand.domain}</p>
        </div>
        <nav aria-label="Footer navigation" className="grid gap-7 sm:grid-cols-3">
          {footerNavigationGroups.map((group) => (
            <div key={group.title}>
              <p className="liturgical-section-eyebrow mb-3 text-xs font-bold uppercase">{group.title}</p>
              <ul className="grid gap-2">
                {group.links.map((item) => (
                  <li key={`${group.title}-${item.href}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="focus-ring rounded-md py-1 text-sm font-semibold text-navy transition hover:text-[var(--liturgical-primary-dark)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t border-stone px-5 py-4 text-center text-xs leading-6 text-muted">
        Daily Oratory is a Catholic formation and prayer resource. It does not replace the Mass,
        sacraments, parish life, priestly counsel, spiritual direction, or official Church teaching.
        For personal sacramental or pastoral questions, contact a Catholic parish or priest.
      </div>
    </footer>
  );
}
