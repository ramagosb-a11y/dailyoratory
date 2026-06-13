import type { Metadata } from "next";
import Link from "next/link";
import { CandleIntentionsLinks } from "@/components/candle-intentions/CandleIntentionsLinks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Candle Intentions",
  description: "Find external Catholic shrines and communities where you can light a candle or submit prayer requests.",
  path: "/candle-intentions",
});

export default function CandleIntentionsPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Ask for prayer</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Candle intentions carried in prayer.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Lighting a candle is a simple sign of prayer, remembrance, and trust. These external Catholic
              communities receive candle offerings or prayer requests through their own sites.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/prayer-intentions" className="btn btn-primary focus-ring">
                Prayer intentions
              </Link>
              <Link href="/mass-intentions" className="btn btn-secondary focus-ring">
                Mass intentions
              </Link>
            </div>
          </div>
          <div className="dashboard-card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Privacy note</p>
            <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">
              Share only what you are comfortable submitting externally.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Each shrine or community manages its own forms, offerings, privacy practices, and prayer lists. Keep
              sensitive details brief unless the external site clearly explains how they will be handled.
            </p>
          </div>
        </div>

        <section className="mt-14">
          <CandleIntentionsLinks />
        </section>
      </section>
    </div>
  );
}
