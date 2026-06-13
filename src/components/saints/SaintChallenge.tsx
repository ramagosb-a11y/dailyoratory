"use client";

import { useState } from "react";
import Link from "next/link";

const challengeText = [
  "7-Day Saint Challenge",
  "",
  "Day 1: Choose a saint",
  "Day 2: Read their story",
  "Day 3: Pray for their intercession",
  "Day 4: Practice one virtue",
  "Day 5: Do one work of mercy",
  "Day 6: Share their story with someone",
  "Day 7: Thank God and choose a next step",
].join("\n");

export function SaintChallenge() {
  const [copied, setCopied] = useState(false);

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
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Challenge</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">7-Day Saint Challenge</h2>
      <div className="card-parchment liturgical-card-accent mt-6 p-6">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Day 1: Choose a saint",
            "Day 2: Read their story",
            "Day 3: Pray for their intercession",
            "Day 4: Practice one virtue",
            "Day 5: Do one work of mercy",
            "Day 6: Share their story with someone",
            "Day 7: Thank God and choose a next step",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-stone bg-ivory p-4 text-sm leading-7 text-muted">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" onClick={copyChallenge} className="btn liturgical-button focus-ring justify-center">
            {copied ? "Challenge copied" : "Copy Challenge"}
          </button>
          <button type="button" onClick={() => window.print()} className="btn btn-secondary focus-ring justify-center">
            Print Challenge
          </button>
          <Link href="/saints/finder" className="btn btn-secondary focus-ring justify-center">
            Start with Saint Companion Finder
          </Link>
        </div>
      </div>
    </section>
  );
}

