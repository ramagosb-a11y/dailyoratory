import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getOciaTopics } from "@/lib/ocia";

export function OciaLearningTopics() {
  const topics = getOciaTopics();

  return (
    <section>
      <SectionHeader
        eyebrow="Formation topics"
        title="What Will I Learn?"
        summary="OCIA usually includes Scripture, doctrine, sacraments, prayer, moral life, and learning how to live as a disciple in the Church."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {topics.map((topic) => (
          <article key={topic.id} className="card-parchment p-5">
            <h3 className="text-lg font-semibold text-navy">{topic.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{topic.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {topic.relatedLinks.map((link) => (
                <Link
                  key={`${topic.id}-${link.href}`}
                  href={link.href}
                  className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
