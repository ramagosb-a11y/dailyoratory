import Link from "next/link";
import { RosaryCardGrid, RosarySection } from "@/components/rosary/RosaryUi";
import { getRosaryRelatedLinks } from "@/lib/rosary";
import type { RosaryLink } from "@/types/rosary";

type RosaryRelatedCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

function normalizeLinks(links?: RosaryLink[]): RosaryRelatedCard[] {
  if (!links) {
    return getRosaryRelatedLinks();
  }

  return links.map((link) => ({
    title: link.label,
    description: `Keep this Rosary meditation connected to ${link.label.toLowerCase()} within Daily Oratory.`,
    href: link.href,
    cta: `Open ${link.label}`,
  }));
}

export function RosaryRelatedLinks({ links }: { links?: RosaryLink[] }) {
  const relatedLinks = normalizeLinks(links);

  return (
    <RosarySection
      eyebrow="Related tools"
      title="Related Daily Oratory Tools"
      summary="Keep the mysteries close by returning to prayer, Scripture, family life, and related Catholic devotion."
    >
      <RosaryCardGrid columns="md:grid-cols-2 xl:grid-cols-3">
        {relatedLinks.map((link) => (
          <article key={link.href} className="card-parchment flex h-full flex-col p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{link.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">{link.description}</p>
            <Link href={link.href} className="btn btn-secondary focus-ring mt-5 justify-center">
              {link.cta}
            </Link>
          </article>
        ))}
      </RosaryCardGrid>
    </RosarySection>
  );
}
