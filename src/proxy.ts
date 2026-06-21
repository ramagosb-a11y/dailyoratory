import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { brand } from "@/config/brand";

const canonicalHost = new URL(brand.canonicalUrl).hostname.toLowerCase();
const wwwCanonicalHost = `www.${canonicalHost}`;

function normalizeHost(hostHeader: string | null) {
  return (hostHeader ?? "").split(":")[0].trim().toLowerCase();
}

function isLocalHost(host: string) {
  return host === "localhost" || host === "127.0.0.1";
}

function isVercelDeploymentHost(host: string) {
  return host.endsWith(".vercel.app");
}

export function proxy(request: NextRequest) {
  const host = normalizeHost(request.headers.get("host"));

  if (!host || isLocalHost(host)) {
    return NextResponse.next();
  }

  if (host === wwwCanonicalHost || (process.env.VERCEL_ENV === "production" && isVercelDeploymentHost(host))) {
    const redirectUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, brand.canonicalUrl);
    return NextResponse.redirect(redirectUrl, 308);
  }

  const response = NextResponse.next();

  if (isVercelDeploymentHost(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}
