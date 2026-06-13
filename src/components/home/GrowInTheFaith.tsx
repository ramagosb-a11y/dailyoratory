import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const formationPaths = [
  {
    title: "Spiritual Growth Pathways",
    description: "Move from desire to steady practice with guided formation paths.",
    href: "/pathways",
  },
  {
    title: "Sacraments",
    description: "Prepare for grace through Mass, confession, Eucharist, and sacramental life.",
    href: "/sacraments",
  },
  {
    title: "Saints",
    description: "Find a saint companion for virtue, vocation, and intercession.",
    href: "/saints",
  },
  {
    title: "Virtue and Vice Tracker",
    description: "Notice patterns and grow in virtue with prayerful honesty.",
    href: "/virtue-tracker",
  },
  {
    title: "Guided Examination",
    description: "Review the day before God and prepare for confession.",
    href: "/confession/examination",
  },
];

export function GrowInTheFaith() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Grow in the Faith"
          title="Formation for conversion, devotion, and steady Catholic life."
          summary="Choose the next faithful step: learn the sacraments, walk with the saints, examine conscience, and grow in virtue."
        />
        <Link href="/learn" className="btn btn-primary focus-ring md:mb-1">
          Explore Learn
        </Link>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {formationPaths.map((item) => (
          <Link key={item.href} href={item.href} className="card resource-card focus-ring p-5">
            <h3 className="font-display text-2xl font-semibold leading-tight text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
