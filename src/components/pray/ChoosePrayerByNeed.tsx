"use client";

import { useMemo, useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { trackEvent } from "@/lib/analytics";
import { getPrayerNeedRecommendations, getTopPrayers } from "@/lib/prayer";

const recommendations = getPrayerNeedRecommendations();
const prayers = getTopPrayers();

export function ChoosePrayerByNeed() {
  const [needSlug, setNeedSlug] = useState(recommendations[0]?.slug ?? "");

  const recommendation = useMemo(
    () => recommendations.find((item) => item.slug === needSlug) ?? recommendations[0],
    [needSlug],
  );

  const suggestedPrayers = useMemo(
    () =>
      (recommendation?.recommendedPrayerIds ?? [])
        .map((id) => prayers.find((prayer) => prayer.id === id))
        .filter((prayer): prayer is NonNullable<typeof prayer> => Boolean(prayer)),
    [recommendation],
  );

  return (
    <section id="prayer-by-need" className="scroll-mt-28">
      <p className="liturgical-section-eyebrow">Interactive tool</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        What do you need to pray about today?
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        Choose the need that best describes where you are right now. This tool uses local state
        only and does not send your selection to a server.
      </p>

      <div className="mt-7 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Choose your need</span>
            <select
              value={needSlug}
              onChange={(event) => {
                const nextValue = event.target.value;
                setNeedSlug(nextValue);
                trackEvent("prayer_need_select", { need_slug: nextValue });
              }}
              className="form-field focus-ring"
            >
              {recommendations.map((item) => (
                <option key={item.id} value={item.slug}>
                  {item.need}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-6 rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
            Privacy note: this selector uses local state only. If you want communal prayer support,
            use the Ask for Prayer page instead of entering private details here.
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Recommended next step</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{recommendation?.need}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{recommendation?.description}</p>

          <div className="mt-5 grid gap-4">
            {suggestedPrayers.map((prayer) => (
              <div key={prayer.id} className="rounded-md border border-stone bg-ivory p-4">
                <p className="text-sm font-semibold text-navy">{prayer.title}</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {prayer.whenToPray} prayer for {prayer.category.toLowerCase()}.
                </p>
                <a href="#prayers-for-today" className="mt-3 inline-flex text-sm font-semibold text-navy underline-offset-4 hover:underline">
                  Read this prayer
                </a>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3">
            {recommendation?.recommendedLinks.map((link) =>
              link.external ? (
                <TrackedLink
                  key={link.href}
                  href={link.href}
                  external
                  className="rounded-md border border-stone bg-parchment px-4 py-3 text-left"
                  eventName="external_prayer_resource_click"
                  eventParams={{
                    resource_name: link.label,
                    resource_url: link.href,
                    section: "choose-prayer-by-need",
                    page_path: "/pray",
                  }}
                >
                  <span className="block text-sm font-semibold text-navy">{link.label}</span>
                  {link.description ? <span className="mt-1 block text-sm leading-6 text-muted">{link.description}</span> : null}
                  <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.12em] text-burgundy">
                    External resource
                  </span>
                </TrackedLink>
              ) : (
                <TrackedLink
                  key={link.href}
                  href={link.href}
                  className="rounded-md border border-stone bg-parchment px-4 py-3 text-left"
                  eventName="prayer_tool_click"
                  eventParams={{
                    tool_name: link.label,
                    destination: link.href,
                    section: "choose-prayer-by-need",
                    page_path: "/pray",
                  }}
                >
                  <span className="block text-sm font-semibold text-navy">{link.label}</span>
                  {link.description ? <span className="mt-1 block text-sm leading-6 text-muted">{link.description}</span> : null}
                </TrackedLink>
              ),
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
