"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { trackEvent } from "@/lib/analytics";
import { buildPrayerRhythmPlan, formatPrayerRhythmPlanForCopy } from "@/lib/prayer";

const timeOptions = ["2 minutes", "5 minutes", "10 minutes", "15 minutes", "30 minutes", "60 minutes"];
const dayOptions = ["Morning", "Midday", "Evening", "Night", "Throughout the day"];
const styleOptions = [
  "traditional prayers",
  "Scripture",
  "Rosary",
  "silence",
  "Liturgy of the Hours",
  "family prayer",
  "adoration",
  "mixed",
];

export function PrayerRhythmBuilder() {
  const [timeAvailable, setTimeAvailable] = useState("5 minutes");
  const [timeOfDay, setTimeOfDay] = useState("Morning");
  const [prayerStyle, setPrayerStyle] = useState("traditional prayers");
  const [copied, setCopied] = useState(false);
  const hasMountedRef = useRef(false);

  const plan = useMemo(
    () =>
      buildPrayerRhythmPlan({
        timeAvailable,
        timeOfDay,
        prayerStyle,
        createdAt: new Date().toISOString(),
      }),
    [prayerStyle, timeAvailable, timeOfDay],
  );

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    trackEvent("prayer_rhythm_build", {
      time_available: timeAvailable,
      time_of_day: timeOfDay,
      prayer_style: prayerStyle,
    });
  }, [prayerStyle, timeAvailable, timeOfDay]);

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(formatPrayerRhythmPlanForCopy(plan));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function clearPlan() {
    setTimeAvailable("5 minutes");
    setTimeOfDay("Morning");
    setPrayerStyle("traditional prayers");
  }

  return (
    <section id="prayer-rhythm-builder" className="scroll-mt-28">
      <p className="liturgical-section-eyebrow">Interactive tool</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Build a simple prayer rhythm
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        Create a realistic pattern for the time you actually have. This builder uses local state
        only and does not send data to a server.
      </p>

      <div className="mt-7 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-6">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Time available</span>
              <select value={timeAvailable} onChange={(event) => setTimeAvailable(event.target.value)} className="form-field focus-ring">
                {timeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Time of day</span>
              <select value={timeOfDay} onChange={(event) => setTimeOfDay(event.target.value)} className="form-field focus-ring">
                {dayOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy">Prayer style</span>
              <select value={prayerStyle} onChange={(event) => setPrayerStyle(event.target.value)} className="form-field focus-ring">
                {styleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <div className="rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
              Privacy note: this builder uses local state only. It does not save your plan unless you
              copy or print it yourself.
            </div>
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Your prayer rhythm</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">
            A simple {timeAvailable.toLowerCase()} {timeOfDay.toLowerCase()} plan
          </h3>
          <ul className="mt-5 space-y-3 rounded-md border border-stone bg-ivory p-4 text-sm leading-7 text-muted">
            {plan.generatedPlan.map((step) => (
              <li key={step} className="border-l-2 border-[var(--liturgical-primary)] pl-4">
                {step}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {plan.relatedLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                className="rounded-full border border-stone bg-parchment px-3 py-1 text-xs font-semibold text-navy"
                eventName="prayer_tool_click"
                eventParams={{
                  tool_name: link.label,
                  destination: link.href,
                  section: "prayer-rhythm-builder",
                  page_path: "/pray",
                }}
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyPlan} className="btn liturgical-button focus-ring justify-center">
              {copied ? "Prayer rhythm copied" : "Copy Prayer Rhythm"}
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
              Print Rhythm
            </button>
            <button type="button" onClick={clearPlan} className="btn btn-secondary focus-ring justify-center">
              Clear
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
