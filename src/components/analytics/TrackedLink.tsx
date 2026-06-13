"use client";

import Link from "next/link";
import { trackEvent, type AnalyticsEventName, type AnalyticsParams } from "@/lib/analytics";

type SharedProps = {
  children: React.ReactNode;
  className?: string;
  eventName?: AnalyticsEventName;
  eventParams?: AnalyticsParams;
};

type InternalTrackedLinkProps = SharedProps & {
  href: string;
  external?: false;
};

type ExternalTrackedLinkProps = SharedProps & {
  href: string;
  external: true;
  target?: string;
  rel?: string;
};

export function TrackedLink(props: InternalTrackedLinkProps | ExternalTrackedLinkProps) {
  const { children, className, eventName, eventParams } = props;

  function handleClick() {
    if (eventName) trackEvent(eventName, eventParams);
  }

  if (props.external) {
    return (
      <a
        href={props.href}
        target={props.target ?? "_blank"}
        rel={props.rel ?? "noopener noreferrer"}
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={props.href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
