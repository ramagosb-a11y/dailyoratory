import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CommunityContactForm } from "@/components/community/CommunityContactForm";
import { getCommunityContactOptions } from "@/lib/community";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Daily Oratory about prayer support, events, local groups, content, or technical questions.",
  path: "/community/contact",
});

export default function CommunityContactPage() {
  const options = getCommunityContactOptions();

  return (
    <main className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Community", href: "/community" }, { label: "Contact" }]} />
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Contact</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Reach the Daily Oratory team.
            </h1>
            <p className="mt-5 text-base leading-8 text-muted">
              Use this form for community questions, listing updates, event reviews, content notes, and general
              messages to the Daily Oratory team.
            </p>
            <div className="card-parchment mt-7 p-5">
              <p className="text-xs font-bold uppercase text-burgundy">Privacy note</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Your message is sent through server-side contact handling. Please do not include sensitive sacramental,
                medical, legal, or emergency details here.
              </p>
            </div>
          </div>
          <CommunityContactForm options={options} />
        </div>
      </section>
    </main>
  );
}
