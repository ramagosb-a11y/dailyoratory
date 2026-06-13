import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LocalFaithGroupCard } from "@/components/community/LocalFaithGroupCard";
import { getPublishedLocalFaithGroups } from "@/lib/community";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Local Faith Groups",
  description: "A Daily Oratory directory pattern for local Catholic prayer groups and formation circles.",
  path: "/community/local-faith-groups",
});

export default function LocalFaithGroupsPage() {
  const groups = getPublishedLocalFaithGroups();

  return (
    <main className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Community", href: "/community" }, { label: "Local Faith Groups" }]} />
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Local faith groups</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Gather close to home.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Use this directory for parish prayer groups, family circles, Scripture groups, and hybrid formation teams.
            </p>
          </div>
          <aside className="card-parchment p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Directory note</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Group listings should be reviewed before publication and should follow parish, diocesan, and safeguarding
              requirements.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {groups.map((group) => (
            <LocalFaithGroupCard key={group.id} group={group} />
          ))}
        </div>
        <div className="dashboard-card mt-8 grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-sm leading-7 text-muted">
            Need to add or update a group? Send a note so the listing can be reviewed before appearing publicly.
          </p>
          <Link href="/community/contact" className="btn btn-primary focus-ring">
            Contact Daily Oratory
          </Link>
        </div>
      </section>
    </main>
  );
}
