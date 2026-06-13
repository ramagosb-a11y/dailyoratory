"use client";

import { useEffect, useMemo, useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { trackEvent } from "@/lib/analytics";
import { formatScripturePrayerPlanForCopy } from "@/lib/scripturePrayer";
import type { ScripturePrayerPlan } from "@/types/scripturePrayer";

const STORAGE_KEY = "daily-oratory-scripture-prayer-plan";

const emptyPlan: ScripturePrayerPlan = {
  scriptureFocus: "Today's Mass readings",
  prayerStyle: "Lectio Divina",
  intention: "My own soul",
  customPassage: "",
  createdAt: new Date().toISOString(),
};

const focusOptions = [
  "Today's Mass readings",
  "Gospel of the day",
  "A Psalm",
  "A Gospel chapter",
  "A Sunday reading",
  "A passage for mercy",
  "A passage for hope",
  "A passage for repentance",
  "A passage for gratitude",
  "Custom passage",
];

const styleOptions = [
  "Slow reading",
  "Lectio Divina",
  "Journaling",
  "Read and meditate",
  "Read aloud",
  "Family Scripture prayer",
];

const intentionOptions = [
  "My own soul",
  "A soul in purgatory",
  "A deceased loved one",
  "The soul most in need of mercy",
  "Growth in holiness",
  "Discernment",
  "Other",
];

const openingPrayer =
  "Come, Holy Spirit, open my heart to the Word of God and make me ready to listen with faith.";

export function ThirtyMinuteScriptureBuilder() {
  const [plan, setPlan] = useState<ScripturePrayerPlan>(emptyPlan);
  const [copied, setCopied] = useState(false);
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ScripturePrayerPlan>;
        setPlan((current) => ({ ...current, ...parsed }));
      }
      setStorageReady(true);
    } catch {
      setStorageReady(false);
    }
  }, []);

  useEffect(() => {
    if (!storageReady) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
    } catch {
      // ignore storage failures
    }
  }, [plan, storageReady]);

  const planText = useMemo(() => formatScripturePrayerPlanForCopy(plan), [plan]);

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(planText);
      trackEvent("scripture_prayer_plan_copy", {
        scripture_focus: plan.scriptureFocus,
        prayer_style: plan.prayerStyle,
        intention: plan.intention,
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function clearPlan() {
    setPlan({ ...emptyPlan, createdAt: new Date().toISOString() });
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  function trackPlanBuild(action: "print" | "external-link") {
    trackEvent("scripture_prayer_plan_build", {
      scripture_focus: plan.scriptureFocus,
      prayer_style: plan.prayerStyle,
      intention: plan.intention,
      action,
    });
  }

  return (
    <section id="scripture-builder" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Interactive tool</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Build your 30-minute Scripture prayer
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        A local-only guide to help you spend thirty minutes reverently reading and praying with Scripture.
      </p>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-6">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Choose a Scripture focus</span>
              <select
                value={plan.scriptureFocus}
                onChange={(event) => setPlan((current) => ({ ...current, scriptureFocus: event.target.value }))}
                className="form-field focus-ring"
              >
                {focusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            {plan.scriptureFocus === "Custom passage" ? (
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-navy">Custom passage</span>
                <input
                  type="text"
                  value={plan.customPassage}
                  onChange={(event) => setPlan((current) => ({ ...current, customPassage: event.target.value }))}
                  className="form-field focus-ring"
                  placeholder="Example: John 15:1-11"
                />
              </label>
            ) : null}

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Choose a prayer style</span>
              <select
                value={plan.prayerStyle}
                onChange={(event) => setPlan((current) => ({ ...current, prayerStyle: event.target.value }))}
                className="form-field focus-ring"
              >
                {styleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Intention</span>
              <select
                value={plan.intention}
                onChange={(event) => setPlan((current) => ({ ...current, intention: event.target.value }))}
                className="form-field focus-ring"
              >
                {intentionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <div className="rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
              Privacy note: stored only in this browser if saved.
            </div>
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Your plan</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">Your 30-Minute Scripture Prayer Plan</h3>
          <div className="mt-5 rounded-md border border-stone bg-ivory p-4 text-sm leading-7 text-muted">
            <p className="font-semibold text-navy">Opening prayer to the Holy Spirit</p>
            <p className="mt-2">{openingPrayer}</p>
            <div className="mt-4">
              <p>
                <span className="font-semibold text-navy">Focus:</span>{" "}
                {plan.scriptureFocus === "Custom passage" && plan.customPassage.trim() ? plan.customPassage : plan.scriptureFocus}
              </p>
              <p>
                <span className="font-semibold text-navy">Prayer style:</span> {plan.prayerStyle}
              </p>
              <p>
                <span className="font-semibold text-navy">Intention:</span> {plan.intention}
              </p>
            </div>
            <ul className="mt-4 space-y-1">
              <li>5 minutes: Prepare and ask for grace</li>
              <li>15 minutes: Read slowly</li>
              <li>5 minutes: Meditate and listen</li>
              <li>3 minutes: Respond in prayer</li>
              <li>2 minutes: Choose one action</li>
            </ul>
            <p className="mt-4 text-xs leading-6">
              Reminder: confession, Communion, prayer for the Holy Father, detachment from sin, and
              devout reading for at least thirty minutes remain the usual conditions for a plenary indulgence.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyPlan} className="btn btn-primary focus-ring justify-center">
              {copied ? "Plan copied." : "Copy Plan"}
            </button>
            <button
              type="button"
              onClick={() => {
                trackPlanBuild("print");
                window.print();
              }}
              className="btn btn-secondary focus-ring justify-center"
            >
              Print Plan
            </button>
            <button type="button" onClick={clearPlan} className="btn btn-secondary focus-ring justify-center">
              Clear Plan
            </button>
            <TrackedLink
              href="https://bible.usccb.org/bible"
              external
              className="btn btn-secondary focus-ring justify-center"
              eventName="external_resource_click"
              eventParams={{
                resource_name: "USCCB Bible",
                resource_url: "https://bible.usccb.org/bible",
                page_path: "/library/scripture-prayer",
                section: "scripture-prayer-builder",
              }}
            >
              Open USCCB Bible
            </TrackedLink>
            <TrackedLink
              href="https://bible.usccb.org/"
              external
              className="btn btn-secondary focus-ring justify-center"
              eventName="external_resource_click"
              eventParams={{
                resource_name: "USCCB Daily Readings",
                resource_url: "https://bible.usccb.org/",
                page_path: "/library/scripture-prayer",
                section: "scripture-prayer-builder",
              }}
            >
              Open Today&apos;s Readings
            </TrackedLink>
          </div>
        </aside>
      </div>
    </section>
  );
}
