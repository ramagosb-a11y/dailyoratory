import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

export function HomiliesAndMass() {
  const links = [
    { label: "The Holy Mass", href: "/mass" },
    { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
    { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    { label: "Eucharist", href: "/sacraments/eucharist" },
  ];

  return (
    <section>
      <SectionHeader
        eyebrow="Mass"
        title="Homilies and the Mass"
        summary="The homily is part of the Liturgy of the Word at Mass. It helps explain the Scriptures, connect the Word to Christian life, and call the faithful to deeper conversion."
      />
      <div className="mt-8 rounded-md border border-stone bg-ivory p-6 shadow-soft">
        <p className="text-sm leading-7 text-muted">
          Listening to online homilies can support prayer and formation, but it does not replace Mass for Catholics
          who are able and obligated to attend.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring season-pill transition hover:border-gold hover:text-navy">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
