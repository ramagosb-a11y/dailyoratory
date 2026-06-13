import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import type { MediaLink } from "@/types/media";

export function RelatedDailyOratoryLinks({ links }: { links: MediaLink[] }) {
  return (
    <section>
      <SectionHeader
        eyebrow="Related Daily Oratory links"
        title="Keep going in prayer and formation"
        summary="Use these related Daily Oratory pages to deepen the theme of this media resource."
      />
      <div className="mt-6 flex flex-wrap gap-3">
        {links.map((link) => (
          <Link
            key={`${link.href}-${link.label}`}
            href={link.href}
            className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold hover:text-burgundy"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
