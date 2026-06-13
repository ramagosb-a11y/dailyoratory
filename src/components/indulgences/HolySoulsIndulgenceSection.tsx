import Link from "next/link";
import { IndulgenceSection } from "@/components/indulgences/helpers";

const relatedLinks = [
  { label: "Rosary", href: "/rosary" },
  { label: "Eucharistic Adoration", href: "/adoration" },
  { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
  { label: "Prayer Library", href: "/library" },
];

export function HolySoulsIndulgenceSection() {
  return (
    <IndulgenceSection
      id="holy-souls"
      eyebrow="Charity for the dead"
      title="Indulgences for the Holy Souls"
      summary="One of the most beautiful acts of charity is to offer indulgences for the souls in purgatory."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="content-card p-6 sm:p-8">
          <p className="text-sm leading-7 text-muted">
            These souls can no longer merit for themselves, but the Church encourages the faithful to
            pray for the dead and assist them through Christ&apos;s mercy.
          </p>
          <Link href="#indulgence-builder" className="btn btn-primary focus-ring mt-6 justify-center">
            Offer Today for a Soul in Purgatory
          </Link>
        </article>
        <div className="grid gap-3">
          {relatedLinks.map((link) => (
            <Link key={link.href} href={link.href} className="card resource-card focus-ring p-4">
              <span className="font-semibold text-navy">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </IndulgenceSection>
  );
}
