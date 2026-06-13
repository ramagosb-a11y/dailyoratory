import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getNewsPrayerPrompts } from "@/lib/news";

export function NewsToPrayerActions() {
  const prompts = getNewsPrayerPrompts().slice(3);

  return (
    <section>
      <SectionHeader
        eyebrow="Turn headlines into prayer"
        title="Let what you read become one next act of prayer or mercy."
        summary="A single faithful response can keep news from becoming noise. Read, pause, pray, and then take one concrete step."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {prompts.map((prompt) => (
          <article key={prompt.id} className="card-parchment liturgical-card-accent p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{prompt.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{prompt.situation}</p>
            <p className="mt-4 text-sm font-semibold text-navy">{prompt.actionStep}</p>
            {prompt.relatedLinks.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {prompt.relatedLinks.map((link) => (
                  <Link
                    key={`${prompt.id}-${link.href}`}
                    href={link.href}
                    className="focus-ring rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:border-burgundy hover:text-burgundy"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
