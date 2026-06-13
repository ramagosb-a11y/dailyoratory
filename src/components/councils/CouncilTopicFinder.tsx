"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { getCouncilTopicRecommendation, getCouncilTopics, getChurchCouncils } from "@/lib/councils";
import { trackEvent } from "@/lib/analytics";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function CouncilTopicFinder() {
  const topics = getCouncilTopics();
  const councils = getChurchCouncils();
  const [selectedTopic, setSelectedTopic] = useState(topics[0]?.slug ?? "");

  const recommendation = useMemo(() => getCouncilTopicRecommendation(selectedTopic), [selectedTopic]);
  const recommendedCouncils = useMemo(
    () => councils.filter((council) => recommendation?.relatedCouncilIds.includes(council.id)),
    [councils, recommendation],
  );

  return (
    <section>
      <SectionHeader
        eyebrow="Interactive tool"
        title="Which Council Should I Learn About?"
        summary="Choose a question and get a gentle starting point."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Choose a question</span>
            <select
              value={selectedTopic}
              onChange={(event) => {
                const next = event.target.value;
                setSelectedTopic(next);
                trackEvent("council_topic_finder_use", { page_path: "/councils", topic_slug: next });
              }}
              className="form-field focus-ring"
            >
              {topics.map((topic) => (
                <option key={topic.id} value={topic.slug}>
                  {topic.title}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy note: this tool uses local state only. It does not store or send your selection anywhere.
          </div>
        </form>
        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Recommended starting point</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{recommendation?.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{recommendation?.description}</p>
          <div className="mt-5 grid gap-3">
            {recommendedCouncils.map((council) => (
              <div key={council.id} className="rounded-md border border-stone bg-parchment p-4">
                <p className="text-sm font-semibold text-navy">{council.name}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{council.simpleTakeaway}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {recommendation?.relatedDailyOratoryLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy">
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {recommendedCouncils[0]?.officialResourceLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                external
                className="btn btn-secondary focus-ring justify-center"
                eventName="council_resource_click"
                eventParams={{ resource_name: recommendation?.title, resource_url: link.href, page_path: "/councils", section: "topic-finder" }}
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
