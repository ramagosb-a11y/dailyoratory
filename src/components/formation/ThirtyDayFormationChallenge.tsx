"use client";

import { useState } from "react";
import Link from "next/link";
import type { FormationChallenge } from "@/types/formation";

export function ThirtyDayFormationChallenge({ challenge }: { challenge: FormationChallenge }) {
  const [copied, setCopied] = useState(false);

  const challengeText = [
    challenge.title,
    challenge.description,
    "",
    ...challenge.weeks.flatMap((week) => [
      `${week.title}: ${week.theme}`,
      ...week.tasks.map((task) => `- ${task}`),
      "",
    ]),
  ].join("\n");

  async function copyChallenge() {
    try {
      await navigator.clipboard.writeText(challengeText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">30-day challenge</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          {challenge.title}
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">{challenge.description}</p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {challenge.weeks.map((week) => (
          <article key={week.title} className="card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">{week.title}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{week.theme}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
              {week.tasks.map((task) => (
                <li key={task}>• {task}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={copyChallenge} className="btn btn-primary focus-ring justify-center">
          {copied ? "Challenge copied" : "Copy Challenge"}
        </button>
        <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
          Print Challenge
        </button>
        <Link href="/rule-of-life" className="btn btn-secondary focus-ring justify-center">
          Start with Rule of Life
        </Link>
      </div>
    </section>
  );
}
