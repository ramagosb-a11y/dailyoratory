import { SectionHeader } from "@/components/section-header";

const colorGuide = [
  { name: "Violet / Purple", meaning: "Preparation, penance, repentance, waiting", swatch: "bg-[#8b6aa0]" },
  { name: "White / Gold", meaning: "Joy, glory, Christmas, Easter, solemnities, saints who were not martyrs", swatch: "bg-[#d4b06a]" },
  { name: "Green", meaning: "Growth, discipleship, Ordinary Time", swatch: "bg-[#6e8a58]" },
  { name: "Red", meaning: "Holy Spirit, martyrs, Passion, Palm Sunday, Good Friday, Pentecost", swatch: "bg-[#a94040]" },
  { name: "Rose", meaning: "Joyful anticipation on Gaudete Sunday and Laetare Sunday", swatch: "bg-[#d89cab]" },
];

export function LiturgicalColorGuide() {
  return (
    <section id="liturgical-colors" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <SectionHeader
        eyebrow="Liturgical colors"
        title="A visual guide to the Church's colors"
        summary="Color helps teach the spiritual tone of the season and the mystery being celebrated."
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {colorGuide.map((color) => (
          <article key={color.name} className="dashboard-card p-5">
            <div className={`h-16 rounded-md border border-stone/60 ${color.swatch}`} aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-navy">{color.name}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{color.meaning}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">
        Exact vestment colors and options may vary according to liturgical norms and local practice.
      </p>
    </section>
  );
}
