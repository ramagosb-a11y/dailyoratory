import Link from "next/link";
import { IndulgenceSection } from "@/components/indulgences/helpers";

const sacramentCards = [
  {
    title: "Confession",
    description: "Receive mercy, name sin honestly, and receive grace to begin again.",
    href: "/confession",
  },
  {
    title: "Eucharist",
    description: "Receive Christ, grow in charity, and let love purify the heart.",
    href: "/sacraments/eucharist",
  },
  {
    title: "Daily prayer",
    description: "Ask for grace before temptation comes and keep the heart turned toward God.",
    href: "/pray",
  },
  {
    title: "Examination of conscience",
    description: "Notice patterns without anxiety and bring them simply before the Lord.",
    href: "/confession/examination",
  },
  {
    title: "Priestly counsel",
    description: "Receive guidance when confused, discouraged, or unsure how to move forward.",
    href: "/confession",
  },
] as const;

export function DetachmentSacramentsSection() {
  return (
    <IndulgenceSection
      id="detachment-and-sacraments"
      eyebrow="Grace at the center"
      title="The Sacraments Help Form Detachment"
      summary="Detachment from sin grows through grace, and the sacramental life is one of Christ's chief ways of strengthening the soul."
    >
      <div className="card-parchment p-6 sm:p-8">
        <p className="daily-readable text-base leading-8 text-muted">
          Detachment from sin grows through grace. The sacraments are not side notes in this process; they are
          central helps from Christ. Confession restores and strengthens the soul. The Eucharist nourishes
          charity and draws the heart into deeper union with Jesus.
        </p>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sacramentCards.map((card) => (
          <Link key={card.title} href={card.href} className="card resource-card focus-ring block p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </Link>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {[
          { label: "Confession Guide", href: "/confession" },
          { label: "Examination of Conscience", href: "/confession/examination" },
          { label: "Eucharist", href: "/sacraments/eucharist" },
          { label: "Mass", href: "/mass" },
          { label: "Adoration", href: "/adoration" },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="season-pill bg-ivory px-3 py-2 text-navy">
            {link.label}
          </Link>
        ))}
      </div>
    </IndulgenceSection>
  );
}
