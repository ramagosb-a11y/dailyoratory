import { explorerSteps } from "@/data/bodySoulSpiritPage";
import { BodySoulSpiritLinkPills, BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";

const links = [
  { label: "Explore the Catholic Faith", href: "/explore" },
  { label: "OCIA", href: "/ocia" },
  { label: "Baptism", href: "/sacraments/baptism" },
  { label: "Confession", href: "/confession" },
  { label: "The Holy Mass", href: "/mass" },
];

export function BodySoulForExplorers() {
  return (
    <BodySoulSpiritSection
      eyebrow="For explorers"
      title="If You Are Exploring the Catholic Faith"
      summary="Catholicism does not see the body as worthless or the soul as isolated from daily life. God created the whole person. Christ entered the world in a real body. The sacraments use visible signs. Grace heals the whole person and calls every part of life toward holiness."
    >
      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment p-6">
          <ol className="grid gap-4">
            {explorerSteps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl border border-stone bg-ivory px-4 py-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-soft text-sm font-bold text-navy">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-navy">{step}</span>
              </li>
            ))}
          </ol>
        </article>
        <article className="card-parchment p-6">
          <p className="text-sm leading-7 text-muted">
            Body and soul worship together in Catholic life: kneeling, standing, listening,
            receiving, fasting, confessing, serving, and praying. The Church teaches that grace
            is not an escape from ordinary life, but God's life within the person for the healing
            of the whole human heart.
          </p>
          <div className="mt-6">
            <BodySoulSpiritLinkPills links={links} />
          </div>
        </article>
      </div>
    </BodySoulSpiritSection>
  );
}

