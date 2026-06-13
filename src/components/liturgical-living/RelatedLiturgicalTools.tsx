import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { relatedLiturgicalTools } from "@/data/liturgicalSeasonPractices";

export function RelatedLiturgicalTools() {
  return (
    <section id="related-tools" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <SectionHeader
        eyebrow="Daily Oratory"
        title="Related Daily Oratory Tools"
        summary="Use the rest of the site to put the Church year into practice in prayer, confession, Eucharistic life, and family rhythms."
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {relatedLiturgicalTools.map((tool) => (
          <Link key={tool.id} href={tool.href} className="dashboard-card focus-ring block p-5">
            <h3 className="text-lg font-semibold text-navy">{tool.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
