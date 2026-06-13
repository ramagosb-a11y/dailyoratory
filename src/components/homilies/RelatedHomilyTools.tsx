import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const links = [
  { label: "The Bible", href: "/bible" },
  { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
  { label: "The Holy Mass", href: "/mass" },
  { label: "Scripture Prayer", href: "/library/scripture-prayer" },
  { label: "Formation", href: "/formation" },
  { label: "Media Library", href: "/media" },
  { label: "OCIA", href: "/ocia" },
  { label: "Explore the Catholic Faith", href: "/explore" },
  { label: "Catechism", href: "/catechism" },
  { label: "Prayer", href: "/pray" },
  { label: "Adoration", href: "/adoration" },
];

export function RelatedHomilyTools() {
  return (
    <section>
      <SectionHeader eyebrow="Related Tools" title="Continue with Related Daily Oratory Tools" />
      <div className="mt-6 flex flex-wrap gap-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="focus-ring season-pill transition hover:border-gold hover:text-navy">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
