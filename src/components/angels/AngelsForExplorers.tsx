import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const steps = [
  "Start with Jesus Christ.",
  "Learn what Catholics mean by creation visible and invisible.",
  "Read Scripture passages involving angels.",
  "Learn about guardian angels.",
  "Notice angelic worship in the Mass.",
  "Avoid superstition and stay rooted in Christ.",
];

export function AngelsForExplorers() {
  return (
    <section>
      <SectionHeader
        eyebrow="Exploring Catholicism"
        title="If You Are Exploring the Catholic Faith"
        summary="Catholic teaching about angels may sound mysterious, but it begins with a simple truth: God created more than the visible world."
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <article className="card-parchment p-6">
          <ol className="grid gap-3 text-sm leading-7 text-muted">
            {steps.map((step, index) => (
              <li key={step}>{index + 1}. {step}</li>
            ))}
          </ol>
        </article>
        <article className="card-parchment p-6">
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Explore", href: "/explore" },
              { label: "Catechism", href: "/catechism" },
              { label: "Mass", href: "/mass" },
              { label: "Prayer", href: "/pray" },
              { label: "Scripture Prayer", href: "/library/scripture-prayer" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="season-pill focus-ring hover:border-gold hover:text-navy">
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
