"use client";

import Link from "next/link";
import { catholicBurialRelatedLinks } from "@/data/catholicBurial";
import { trackEvent } from "@/lib/analytics";

export function CatholicBurialRelatedLinks() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">Related Daily Oratory Links</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {catholicBurialRelatedLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            onClick={() => trackEvent("eschatology_related_link_click", { href: link.href, section: "catholic-burial" })}
            className="card-parchment p-6 sm:p-8 transition hover:border-gold"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{link.category}</p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{link.title}</h3>
            <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
