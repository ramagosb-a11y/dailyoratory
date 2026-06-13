import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const prayerPaths = [
  {
    title: "Rosary",
    description: "Pray the mysteries with Mary and carry the Gospel into the day.",
    href: "/rosary",
  },
  {
    title: "Divine Mercy Chaplet",
    description: "Pray with trust in the mercy of Christ.",
    href: "/library?q=divine%20mercy",
  },
  {
    title: "Live Adoration",
    description: "Enter Adoration with silence, reverence, and love.",
    href: "/adoration",
  },
  {
    title: "Confession Guide",
    description: "Prepare for the sacrament of mercy with peace.",
    href: "/library/confession-guide",
  },
  {
    title: "Rule of Life Builder",
    description: "Build a daily rule of life that can actually be lived.",
    href: "/rule-of-life",
  },
];

export function BeginInPrayer() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionHeader
          eyebrow="Begin in Prayer"
          title="Start with a simple Catholic rhythm."
          summary="Daily Oratory gathers the practices Catholics reach for first: prayer, Rosary, mercy, Adoration, confession, and a rule of life."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {prayerPaths.map((item) => (
            <Link key={item.href} href={item.href} className="card resource-card focus-ring p-5">
              <h3 className="font-display text-3xl font-semibold leading-tight text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              <span className="mt-5 block text-sm font-bold text-burgundy">Open</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
