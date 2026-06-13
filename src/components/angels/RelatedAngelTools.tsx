import { SectionHeader } from "@/components/section-header";
import { getRelatedAngelTools } from "@/lib/angels";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function RelatedAngelTools() {
  const links = getRelatedAngelTools();

  return (
    <section>
      <SectionHeader eyebrow="Related tools" title="Continue with Related Daily Oratory Tools" />
      <div className="mt-6 flex flex-wrap gap-2">
        {links.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            className="season-pill focus-ring transition hover:border-gold hover:text-navy"
            eventName="angels_related_tool_click"
            eventParams={{ destination: link.href, page_path: "/angels" }}
          >
            {link.label}
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
