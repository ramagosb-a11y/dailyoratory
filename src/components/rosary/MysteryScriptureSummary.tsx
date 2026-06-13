import { RosarySection } from "@/components/rosary/RosaryUi";
import type { RosaryMystery } from "@/types/rosary";

export function MysteryScriptureSummary({ mystery }: { mystery: RosaryMystery }) {
  return (
    <RosarySection
      eyebrow="Scripture scene"
      title="A Gospel Scene to Hold in Prayer"
      summary="Daily Oratory gives a short original summary here rather than reproducing long Scripture texts."
    >
      <div className="card-parchment p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Reference</p>
        <p className="mt-2 text-lg font-semibold text-navy">{mystery.scriptureReference}</p>
        <p className="mt-5 text-sm leading-8 text-muted">{mystery.scriptureSummary}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="https://bible.usccb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary focus-ring justify-center"
          >
            Open USCCB Bible
          </a>
          <a href="/bible" className="btn btn-secondary focus-ring justify-center">
            Read with the Church
          </a>
        </div>
      </div>
    </RosarySection>
  );
}
