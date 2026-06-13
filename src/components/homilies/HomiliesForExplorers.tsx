import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const links = [
  { label: "Explore", href: "/explore" },
  { label: "OCIA", href: "/ocia" },
  { label: "Mass", href: "/mass" },
  { label: "Catechism", href: "/catechism" },
  { label: "Scripture Prayer", href: "/library/scripture-prayer" },
];

export function HomiliesForExplorers() {
  return (
    <section>
      <SectionHeader
        eyebrow="Exploring Catholicism"
        title="If You Are Exploring the Catholic Faith"
        summary="Homilies can be a gentle way to hear how Catholics pray with Scripture and connect the Gospel to daily life."
      />
      <div className="mt-8 rounded-md border border-stone bg-ivory p-6 shadow-soft">
        <ol className="grid gap-3 text-sm leading-7 text-muted">
          <li>1. Listen to a short Gospel homily.</li>
          <li>2. Read the Mass readings.</li>
          <li>3. Learn what happens at Mass.</li>
          <li>4. Explore OCIA if you feel drawn.</li>
          <li>5. Ask questions at a local parish.</li>
        </ol>
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
