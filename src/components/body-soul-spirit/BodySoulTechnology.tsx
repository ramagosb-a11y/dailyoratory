import { bodySoulTechnologyIdeas } from "@/data/bodySoulSpiritPage";
import { BodySoulSpiritLinkPills, BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";

const technologyLinks = [
  { label: "Media Library", href: "/media" },
  { label: "The Bible", href: "/bible" },
  { label: "Prayer", href: "/pray" },
  { label: "Daily Examen", href: "/daily-examen" },
];

export function BodySoulTechnology() {
  return (
    <BodySoulSpiritSection
      eyebrow="Digital world"
      title="Guarding the Temple in a Digital World"
      summary="What enters through the eyes, ears, and imagination affects the soul. Technology can serve prayer and learning, but it can also clutter the temple."
    >
      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="card-parchment p-6">
          <p className="text-sm leading-7 text-muted">
            Digital life is part of spiritual life. What you watch, hear, repeat, save, and scroll
            through can either support recollection or scatter the heart away from God.
          </p>
          <div className="mt-6">
            <BodySoulSpiritLinkPills links={technologyLinks} />
          </div>
        </article>
        <article className="card-parchment p-6">
          <ul className="grid gap-3">
            {bodySoulTechnologyIdeas.map((idea) => (
              <li key={idea} className="rounded-2xl border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-navy">
                {idea}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </BodySoulSpiritSection>
  );
}

