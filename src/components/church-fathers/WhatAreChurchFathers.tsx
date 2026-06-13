import { SectionHeader } from "@/components/section-header";

export function WhatAreChurchFathers() {
  return (
    <section>
      <SectionHeader
        eyebrow="Introduction"
        title="What Are the Church Fathers?"
        summary="The Fathers are early Christian witnesses whose teaching helps Catholics see the continuity of the Church across the centuries."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment p-6">
          <p className="text-sm leading-7 text-muted">
            The Church Fathers are early Christian teachers, pastors, bishops, theologians,
            martyrs, monks, and writers whose witness helped shape the Church&apos;s understanding of
            Scripture, doctrine, worship, and Christian life.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            They lived close to the apostolic age or in the early centuries of Christianity. They
            taught and defended the faith, explained Scripture, and witnessed to the life of the
            early Church. They are not above Scripture or the Church, but they are important
            witnesses to apostolic tradition.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Reading them helps Catholics understand that the faith was not invented late. The
            Fathers show how the early Church prayed, worshiped, baptized, preached Christ, and
            remained in visible communion.
          </p>
        </article>
        <aside className="dashboard-card p-6">
          <p className="text-xs font-bold uppercase text-burgundy">In simple terms</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            <li>They lived near the apostolic age or in the early centuries.</li>
            <li>They taught and defended the Catholic faith.</li>
            <li>They helped explain Scripture and doctrine.</li>
            <li>They witness to the life of the early Church.</li>
            <li>Their writings help Catholics see continuity with apostolic tradition.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
