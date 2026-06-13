import Link from "next/link";
import {
  formatAdorationDateTime,
  getAdorationLocationLabel,
  getAdorationStreamHref,
  getAdorationVerificationLabel,
} from "@/lib/adoration";
import type { LiveAdorationStreamRecord } from "@/types/adoration";
import { AdorationStatusBadge } from "./AdorationStatusBadge";

export function AdorationStreamCard({ stream, featured = false }: { stream: LiveAdorationStreamRecord; featured?: boolean }) {
  return (
    <article className={`card resource-card flex h-full min-w-0 flex-col p-5 ${featured ? "card-lift" : ""}`}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <AdorationStatusBadge status={stream.streamStatus} />
          {stream.isTwentyFourSeven ? <span className="season-pill border-gold text-gold">24/7</span> : null}
          {stream.verificationStatus === "verified" ? <span className="season-pill border-success text-success">Verified</span> : null}
        </div>
        <span className="text-xs font-semibold text-muted">{stream.language}</span>
      </div>

      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <Link href={getAdorationStreamHref(stream)} className="focus-ring rounded-sm hover:text-burgundy">
          {stream.chapelName}
        </Link>
      </h2>
      <p className="mt-1 text-sm font-semibold text-burgundy">{stream.parishOrCommunityName}</p>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{stream.description}</p>

      <dl className="mt-5 grid gap-3 rounded-md border border-stone bg-parchment p-4 text-sm">
        <div>
          <dt className="text-xs font-bold uppercase text-burgundy">Location</dt>
          <dd className="mt-1 font-semibold text-navy">{getAdorationLocationLabel(stream)}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase text-burgundy">Last checked</dt>
          <dd className="mt-1 text-muted">{formatAdorationDateTime(stream.lastCheckedAt)}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase text-burgundy">Review</dt>
          <dd className="mt-1 text-muted">{getAdorationVerificationLabel(stream)}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-col gap-4 border-t border-stone pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-navy">{stream.location.country}</p>
        <Link href={getAdorationStreamHref(stream)} className="btn btn-primary focus-ring">
          Enter Adoration
        </Link>
      </div>
    </article>
  );
}
