"use client";

import { useState } from "react";
import { formatTempleCareChecklistForCopy, getTempleCarePractices } from "@/lib/bodySoulSpirit";
import { templeCareCategoriesBySlug } from "@/data/bodySoulSpiritPage";
import {
  BodySoulSpiritCard,
  BodySoulSpiritCardGrid,
  BodySoulSpiritLinkPills,
  BodySoulSpiritSection,
} from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function DailyTempleCare() {
  const practices = getTempleCarePractices();
  const [copied, setCopied] = useState(false);

  async function copyChecklist() {
    try {
      await navigator.clipboard.writeText(formatTempleCareChecklistForCopy());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <BodySoulSpiritSection
      eyebrow="Daily care"
      title="How to Keep the Interior Temple Clean and Bright"
      summary="Prayer, Scripture, Eucharist, Confession, virtue, mercy, and forgiveness keep the heart ordered toward God."
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={copyChecklist} className="btn btn-secondary focus-ring justify-center">
          {copied ? "Checklist copied" : "Copy Daily Temple Care Checklist"}
        </button>
      </div>
      <div className="mt-7">
        <BodySoulSpiritCardGrid>
          {practices.map((practice) => (
            <BodySoulSpiritCard
              key={practice.id}
              title={practice.title}
              description={practice.description}
              note={practice.practice}
              meta={templeCareCategoriesBySlug[practice.slug]}
            >
              <BodySoulSpiritLinkPills links={practice.relatedLinks} />
            </BodySoulSpiritCard>
          ))}
        </BodySoulSpiritCardGrid>
      </div>
    </BodySoulSpiritSection>
  );
}

