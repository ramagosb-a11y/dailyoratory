import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { beginnerPath } from "@/data/sacramentalsPage";

export function SacramentalsForExplorers() {
  return (
    <section>
      <SectionHeader
        eyebrow="Explore"
        title="If You Are Exploring the Catholic Faith"
        summary="Sacramentals can seem unfamiliar at first. Catholics use holy objects and blessings not because objects are magical, but because God works through visible signs and the Church blesses daily life."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment liturgical-card-accent p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Beginner path</h3>
          <ol className="mt-4 space-y-2 text-sm leading-7 text-muted">
            {beginnerPath.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}
          </ol>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Keep it simple</h3>
          <p className="mt-4 text-sm leading-7 text-muted">
            Start with Christ, the Sign of the Cross, a crucifix, and a simple prayer card. Then let the Rosary, holy water, and blessings unfold within the wider life of the Church.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {[
              { label: "Explore", href: "/explore" },
              { label: "OCIA", href: "/ocia" },
              { label: "Sacraments", href: "/sacraments" },
              { label: "Pray", href: "/pray" },
              { label: "Rosary", href: "/rosary" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
