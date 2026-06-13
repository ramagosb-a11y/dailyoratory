"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ruleOfLifeBuilderTemplates } from "@/data/ruleOfLife";
import {
  createSavedRuleOfLife,
  draftFromTemplate,
  getAvailableTime,
  getPracticesByIds,
  getSpiritualSeason,
  getVirtueFocus,
  saveRuleOfLife,
} from "@/lib/ruleOfLifeStorage";

export function RuleTemplatesView() {
  const router = useRouter();

  function applyTemplate(templateId: string) {
    const template = ruleOfLifeBuilderTemplates.find((item) => item.id === templateId);
    if (!template) return;
    const rule = createSavedRuleOfLife(draftFromTemplate(template), template.title);
    saveRuleOfLife(rule);
    router.push("/rule-of-life/my-rule");
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {ruleOfLifeBuilderTemplates.map((template) => {
        const daily = getPracticesByIds(template.dailyPracticeIds);
        const periodic = getPracticesByIds(template.periodicPracticeIds);
        const virtue = getVirtueFocus(template.virtueFocusId);

        return (
          <article key={template.id} className="dashboard-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-burgundy">{template.audience}</p>
                <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">{template.title}</h2>
              </div>
              <span className="season-pill bg-ivory">{getAvailableTime(template.availableTime).label}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted">{template.description}</p>
            <div className="mt-5 grid gap-3">
              <TemplateFact label="Season" value={getSpiritualSeason(template.spiritualSeason).label} />
              <TemplateFact label="Daily" value={daily.map((practice) => practice.title).join(", ")} />
              <TemplateFact label="Weekly/monthly" value={periodic.map((practice) => practice.title).join(", ")} />
              <TemplateFact label="Virtue" value={virtue.virtue} />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => applyTemplate(template.id)} className="btn btn-primary focus-ring">
                Use this template
              </button>
              <Link href="/rule-of-life/builder" className="btn btn-secondary focus-ring">
                Customize in builder
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function TemplateFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-parchment p-4">
      <p className="text-xs font-bold uppercase text-burgundy">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-navy">{value}</p>
    </div>
  );
}
