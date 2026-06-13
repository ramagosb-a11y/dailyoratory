"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import { getFamilyVirtueOfWeek, getFamilyVirtues } from "@/lib/family";

export function FamilyVirtueOfWeek() {
  const virtues = useMemo(() => getFamilyVirtues(), []);
  const defaultVirtue = useMemo(() => getFamilyVirtueOfWeek(new Date()), []);
  const [slug, setSlug] = useState(defaultVirtue.slug);

  const virtue = virtues.find((item) => item.slug === slug) ?? defaultVirtue;

  return (
    <section>
      <SectionHeader
        eyebrow="Virtue of the week"
        title="Family Virtue of the Week"
        summary="Choose one simple virtue and let it shape prayer, conversation, and daily habits."
      />
      <div className="mt-7 grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <div className="card-parchment p-6">
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Choose a virtue
            <select
              value={slug}
              onChange={(event) => {
                setSlug(event.target.value);
                trackEvent("family_virtue_select", { page_path: "/family", virtue_slug: event.target.value });
              }}
              className="rounded-md border border-stone bg-ivory px-3 py-3 text-sm font-normal text-navy"
            >
              {virtues.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
        </div>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">{virtue.title}</h3>
          <p className="mt-3 text-sm leading-8 text-muted">{virtue.description}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-md border border-stone bg-ivory px-4 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Family practice</p>
              <p className="mt-2 text-sm leading-7 text-muted">{virtue.practice}</p>
            </div>
            <div className="rounded-md border border-stone bg-ivory px-4 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Conversation question</p>
              <p className="mt-2 text-sm leading-7 text-muted">{virtue.conversationQuestion}</p>
            </div>
          </div>
          <div className="mt-4 rounded-md border border-gold/30 bg-ivory px-4 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Short prayer</p>
            <p className="mt-2 text-sm leading-7 text-muted">{virtue.prayer}</p>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">Related saint: {virtue.relatedSaint}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            {virtue.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn btn-secondary focus-ring justify-center">
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
