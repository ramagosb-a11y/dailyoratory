"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AdorationPortal } from "@/components/adoration/AdorationPortal";
import { getAdorationAnchorLinks, getAdorationLocationLabel, getAdorationStreamHref, getFeaturedAdorationStream } from "@/lib/adoration";
import { trackEvent } from "@/lib/analytics";

const featuredStream = getFeaturedAdorationStream();

export function AdorationStreamRoom() {
  const links = getAdorationAnchorLinks();

  useEffect(() => {
    trackEvent("adoration_stream_open", { page_path: "/adoration", section: "stream-room" });
  }, []);

  return (
    <section>
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Adoration Stream Room</p>
        <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Pause, pray, and place yourself before Jesus.</h2>
      </div>
      {featuredStream ? (
        <div className="card-parchment mb-6 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Featured perpetual adoration</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{featuredStream.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Looking for perpetual Adoration in Melbourne or a live chapel available now? This verified stream is a strong starting point,
            and the live directory can help you find more 24/7 chapels.
          </p>
          <p className="mt-2 text-sm font-semibold text-navy">{getAdorationLocationLabel(featuredStream)}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={getAdorationStreamHref(featuredStream)} className="btn liturgical-button focus-ring justify-center">
              Open Featured Stream
            </Link>
            <Link href="/adoration/live" className="btn btn-secondary focus-ring justify-center">
              Browse Live Adoration
            </Link>
          </div>
        </div>
      ) : null}
      <AdorationPortal />
      <div className="card-parchment mt-6 p-5">
        <p className="text-sm leading-7 text-muted">
          This stream is offered as a prayer aid, especially for those who cannot visit a chapel. Catholics who are able
          should still seek the Eucharist through the Mass, parish Adoration, and the sacramental life of the Church.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="btn liturgical-button focus-ring justify-center">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
