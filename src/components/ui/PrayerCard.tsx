"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { CardTitle, PrayerText, SectionEyebrow, SmallText } from "@/components/ui/Typography";

export function PrayerCard({
  title,
  eyebrow,
  prayer,
  note,
  copyLabel = "Copy Prayer",
  copiedLabel = "Prayer copied",
  onCopy,
  printEnabled = false,
}: {
  title?: string;
  eyebrow?: string;
  prayer: string;
  note?: string;
  copyLabel?: string;
  copiedLabel?: string;
  onCopy?: (prayer: string) => Promise<void> | void;
  printEnabled?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (onCopy) {
        await onCopy(prayer);
      } else {
        await navigator.clipboard.writeText(prayer);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="prayer-card p-7 sm:p-8 md:p-9">
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
      {title ? <CardTitle className={eyebrow ? "mt-2" : ""}>{title}</CardTitle> : null}
      {note ? <SmallText className="mt-4 max-w-3xl">{note}</SmallText> : null}
      <PrayerText preserveLines className="mt-6">
        {prayer}
      </PrayerText>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={handleCopy} className="btn btn-secondary focus-ring w-full justify-center sm:w-auto">
          {copied ? copiedLabel : copyLabel}
        </button>
        {printEnabled ? (
          <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring w-full justify-center sm:w-auto">
            Print Prayer
          </button>
        ) : null}
      </div>
    </article>
  );
}
