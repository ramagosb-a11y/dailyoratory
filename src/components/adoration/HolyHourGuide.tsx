"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { formatHolyHourGuideForCopy, getHolyHourGuide } from "@/lib/adoration";
import { trackEvent } from "@/lib/analytics";
import type { HolyHourGuideBlock } from "@/types/adoration";

export function HolyHourGuide() {
  const segments = getHolyHourGuide();
  const [copied, setCopied] = useState(false);

  async function copyGuide() {
    try {
      await navigator.clipboard.writeText(formatHolyHourGuideForCopy());
      setCopied(true);
      trackEvent("adoration_holy_hour_copy", { page_path: "/adoration" });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="holy-hour-guide" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Holy Hour"
        title="A Simple Holy Hour Guide"
        summary="A peaceful structure for spending one hour with Jesus, with guided prayers for adoration, thanksgiving, mercy, Scripture, intercession, and surrender."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {segments.map((segment) => (
          <article key={segment.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
              {segment.startMinute}-{segment.endMinute} minutes
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{segment.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{segment.description}</p>
            <p className="mt-4 rounded-md border border-gold/30 bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              Prayer: {segment.prayerPrompt}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8 space-y-4">
        {segments.map((segment, index) => (
          <details key={`${segment.id}-full-guide`} open={index === 0} className="card-parchment group overflow-hidden">
            <summary className="cursor-pointer list-none p-5 marker:hidden sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="mt-1 flex shrink-0 items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-ivory text-lg font-semibold leading-none text-burgundy transition group-open:rotate-45">
                    +
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
                    <span className="group-open:hidden">Click for details</span>
                    <span className="hidden group-open:inline">Hide details</span>
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
                    {segment.startMinute}-{segment.endMinute} minutes
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold leading-tight text-navy">{segment.title}</h3>
                  {segment.scripture ? (
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {segment.scripture.reference}: &quot;{segment.scripture.text}&quot;
                    </p>
                  ) : null}
                </div>
              </div>
            </summary>
            <div className="border-t border-gold/25 px-5 pb-6 pt-5 sm:px-6">
              {segment.sourceNote ? (
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy/80">{segment.sourceNote}</p>
              ) : null}
              <div className="mt-5 space-y-5">
                {(segment.guide ?? []).map((block, blockIndex) => (
                  <GuideBlock block={block} key={`${segment.id}-${block.kind}-${blockIndex}`} />
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={copyGuide} className="btn liturgical-button focus-ring justify-center">
          {copied ? "Holy Hour guide copied" : "Copy Holy Hour Guide"}
        </button>
        <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
          Print Holy Hour Guide
        </button>
      </div>
    </section>
  );
}

function GuideBlock({ block }: { block: HolyHourGuideBlock }) {
  switch (block.kind) {
    case "heading":
      return <h4 className="font-display text-2xl font-semibold text-navy">{block.text}</h4>;
    case "paragraph":
      return <p className="daily-card-readable text-base leading-8 text-muted">{block.text}</p>;
    case "breath":
      return (
        <div className="rounded-md border border-gold/30 bg-ivory px-4 py-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Inhale slowly</p>
              <p className="mt-2 text-base leading-7 text-navy">&quot;{block.inhale}&quot;</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Exhale slowly</p>
              <p className="mt-2 text-base leading-7 text-navy">&quot;{block.exhale}&quot;</p>
            </div>
          </div>
          {block.repeat ? <p className="mt-4 text-sm leading-7 text-muted">{block.repeat}</p> : null}
        </div>
      );
    case "prayer":
      return (
        <div className="rounded-md border border-gold/30 bg-ivory px-4 py-4">
          {block.title ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{block.title}</p> : null}
          <p className="daily-card-readable mt-2 whitespace-pre-line text-base leading-8 text-navy">&quot;{block.text}&quot;</p>
        </div>
      );
    case "scripture":
      return (
        <blockquote className="rounded-md border-l-4 border-gold bg-ivory px-4 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{block.reference}</p>
          <p className="daily-card-readable mt-2 whitespace-pre-line text-base leading-8 text-navy">&quot;{block.text}&quot;</p>
        </blockquote>
      );
    case "reflect":
      return (
        <div>
          {block.title ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{block.title}</p> : null}
          <ul className="mt-3 space-y-2 pl-5 text-base leading-8 text-muted marker:text-gold list-disc">
            {block.prompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ul>
        </div>
      );
    case "list":
      return (
        <div>
          {block.title ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{block.title}</p> : null}
          <ul className="mt-3 space-y-2 pl-5 text-base leading-8 text-muted marker:text-gold list-disc">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "invocation":
      return (
        <div className="rounded-md border border-gold/30 bg-ivory px-4 py-4">
          {block.title ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{block.title}</p> : null}
          <div className="mt-2 space-y-2">
            {block.lines.map((line) => (
              <p key={line} className="daily-card-readable text-base leading-8 text-navy">
                &quot;{line}&quot;
              </p>
            ))}
          </div>
        </div>
      );
    case "pause":
      return <p className="daily-card-readable text-base italic leading-8 text-muted">{block.text ?? "Pause in silence."}</p>;
  }
}
