"use client";

import Link from "next/link";
import { useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function ConfirmationSaintHelper() {
  const trackedRef = useRef(false);

  function trackStart() {
    if (trackedRef.current) return;
    trackedRef.current = true;
    trackEvent("confirmation_saint_helper_start", { page_path: "/saints/confirmation" });
  }

  return (
    <section className="mt-16" onMouseEnter={trackStart}>
      <p className="liturgical-section-eyebrow">Confirmation</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
        Choosing a Confirmation Saint
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Choosing a confirmation saint is not about picking a favorite name only. It is about asking
        for a heavenly companion whose life, virtue, and mission can inspire your discipleship.
      </p>
      <div className="mt-7 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <article className="card-parchment liturgical-card-accent p-5">
          <h3 className="font-display text-2xl font-semibold text-navy">Questions to ask</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            <li>What virtue do I need most right now?</li>
            <li>What saint’s story moves me or challenges me?</li>
            <li>What struggles did this saint overcome?</li>
            <li>How did this saint love Christ and the Church?</li>
            <li>How can I imitate this saint after Confirmation?</li>
          </ul>
        </article>
        <article className="card-parchment p-5">
          <h3 className="font-display text-2xl font-semibold text-navy">A simple process</h3>
          <ol className="mt-4 space-y-2 text-sm leading-7 text-muted">
            <li>1. Pray for the Holy Spirit’s guidance.</li>
            <li>2. Read two or three short saint profiles slowly.</li>
            <li>3. Talk with your sponsor, catechist, or parent.</li>
            <li>4. Choose a saint whose life can shape your discipleship.</li>
            <li>5. Ask that saint’s intercession before Confirmation and after it.</li>
          </ol>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/saints/finder" className="btn liturgical-button focus-ring justify-center">
              Use Saint Companion Finder
            </Link>
            <Link href="/sacraments/confirmation" className="btn btn-secondary focus-ring justify-center">
              Confirmation Guide
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

