import Link from "next/link";
import type { ConfessionGuideLink } from "@/types/confession";

export function ConfessionGuideCardGrid({ links }: { links: ConfessionGuideLink[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="card resource-card focus-ring p-5">
          {link.label ? <p className="text-xs font-bold uppercase text-burgundy">{link.label}</p> : null}
          <h3 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{link.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{link.description}</p>
        </Link>
      ))}
    </div>
  );
}
