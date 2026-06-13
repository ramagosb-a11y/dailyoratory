import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { familyIdeas } from "@/data/sacramentalsPage";

export function SacramentalsForFamilies() {
  return (
    <section>
      <SectionHeader
        eyebrow="Families"
        title="Sacramentals for Families"
        summary="Teach children that sacramentals are reminders of God's love, not toys or magic objects."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {familyIdeas.map((idea) => (
          <article key={idea} className="card-parchment p-5 text-sm leading-7 text-muted">
            {idea}
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {[
          { label: "Family", href: "/family" },
          { label: "Angels", href: "/angels" },
          { label: "Saints", href: "/saints" },
          { label: "Rosary", href: "/rosary" },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
