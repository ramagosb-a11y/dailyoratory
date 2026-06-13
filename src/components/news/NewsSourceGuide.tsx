import { SectionHeader } from "@/components/section-header";

const sourceGuide = [
  {
    title: "Official Church Source",
    description:
      "Vatican, bishops' conference, diocese, or parish. Use these for official statements, teaching, appointments, and local guidance.",
  },
  {
    title: "Catholic News Reporting",
    description:
      "News agencies and Catholic media outlets. Useful for reporting and analysis, but important claims should still be checked carefully.",
  },
  {
    title: "Commentary and Opinion",
    description:
      "Helpful for perspective, but not the same as official teaching or straightforward reporting.",
  },
  {
    title: "Spiritual Aggregation",
    description:
      "Collects links, reflections, and spiritual headlines. Read with discernment and verify major claims.",
  },
  {
    title: "Secular News",
    description:
      "Can help with wider context, but may misunderstand Catholic teaching, Church governance, or sacramental life.",
  },
];

export function NewsSourceGuide() {
  return (
    <section>
      <SectionHeader
        eyebrow="Source guide"
        title="How to understand different source types."
        summary="Not every source answers the same question. Knowing what kind of source you are reading makes discernment gentler and clearer."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {sourceGuide.map((item) => (
          <article key={item.title} className="card-parchment liturgical-card-accent p-5">
            <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
