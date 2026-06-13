"use client";

import { useMemo, useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { trackEvent } from "@/lib/analytics";
import {
  buildCatechismStudyPlan,
  formatCatechismStudyPlanForCopy,
  getCatechismTopicBySlug,
  getCatechismTopics,
} from "@/lib/catechism";

export function CatechismTopicFinder() {
  const topics = getCatechismTopics();
  const [topicSlug, setTopicSlug] = useState(topics[0]?.slug ?? "");
  const [copied, setCopied] = useState(false);

  const topic = useMemo(
    () => getCatechismTopicBySlug(topicSlug) ?? topics[0],
    [topicSlug, topics],
  );
  const plan = useMemo(() => buildCatechismStudyPlan(topicSlug), [topicSlug]);

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(formatCatechismStudyPlanForCopy(plan));
      setCopied(true);
      trackEvent("catechism_study_plan_copy", {
        topic_slug: topic?.slug,
        page_path: "/catechism",
      });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function clearSelection() {
    setTopicSlug(topics[0]?.slug ?? "");
  }

  return (
    <section id="catechism-topic-finder" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Interactive tool"
        title="Find a Catechism Topic"
        summary="Choose the question or situation that best describes where you want to begin. This tool uses local state only and does not send your selection to a server."
      />

      <div className="mt-7 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Choose a starting topic</span>
            <select
              value={topicSlug}
              onChange={(event) => {
                const nextValue = event.target.value;
                setTopicSlug(nextValue);
                trackEvent("catechism_topic_select", {
                  topic_slug: nextValue,
                  page_path: "/catechism",
                });
              }}
              className="form-field focus-ring"
            >
              {topics.map((item) => (
                <option key={item.id} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy note: this finder uses local state only. It does not collect private questions
            or spiritual details.
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
            Recommended starting place
          </p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{topic?.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{topic?.description}</p>

          <div className="mt-5 rounded-md border border-stone bg-ivory p-4">
            <p className="text-sm font-semibold text-navy">Recommended Catechism paragraphs</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              {topic?.paragraphRanges.map((range) => (
                <li key={range} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
                  {range}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {topic?.relatedDailyOratoryLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                className="rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy"
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>

          {topic ? (
            <TrackedLink
              href={topic.officialResourceUrl}
              external
              className="mt-5 inline-flex rounded-md border border-stone bg-parchment px-4 py-3 text-sm font-semibold text-navy"
              eventName="catechism_resource_click"
              eventParams={{
                resource_name: "Official Catechism link",
                resource_url: topic.officialResourceUrl,
                section: "catechism-topic-finder",
                topic_slug: topic.slug,
                page_path: "/catechism",
              }}
            >
              Open Official Catechism
            </TrackedLink>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyPlan} className="btn liturgical-button focus-ring justify-center">
              {copied ? "Study plan copied" : "Copy Study Plan"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Plan
            </button>
            <button type="button" onClick={clearSelection} className="btn btn-secondary focus-ring justify-center">
              Clear
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
