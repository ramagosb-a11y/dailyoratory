"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand } from "@/config/brand";
import { desktopMegaMenu, mobileDrawerNavigation } from "@/config/navigation";
import { HeaderSearchButton } from "@/components/search/HeaderSearchButton";

function isActive(pathname: string, href: string) {
  const hrefPath = href.split("?")[0] || href;
  if (hrefPath === "/") return pathname === hrefPath;
  return pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);
}

function Logo() {
  return (
    <Link href="/" className="focus-ring flex shrink-0 items-center gap-3 rounded-md">
      <span
        aria-hidden="true"
        className="grid h-11 w-11 place-items-center rounded-md border border-gold/50 bg-navy text-gold shadow-sm"
      >
        <span className="font-display text-xl font-bold">O</span>
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold uppercase text-navy">Daily</span>
        <span className="block text-xs font-semibold uppercase text-muted">Oratory</span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-stone bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 lg:flex">
          {desktopMegaMenu.map((section, index) => {
            const menuPosition =
              index < 2
                ? "left-0"
                : index > desktopMegaMenu.length - 3
                  ? "right-0"
                  : "left-1/2 -translate-x-1/2";

            return (
            <div key={section.href} className="group relative">
              <Link
                href={section.href}
                aria-current={isActive(pathname, section.href) ? "page" : undefined}
                className={`focus-ring liturgical-nav-link rounded-md px-2.5 py-2 text-sm font-semibold transition xl:px-3 ${
                  isActive(pathname, section.href)
                    ? "liturgical-nav-active"
                    : "text-navy hover:bg-parchment"
                }`}
              >
                {section.label}
              </Link>
              <div
                className={`invisible absolute top-full w-[min(760px,calc(100vw-4rem))] translate-y-2 rounded-md border border-stone bg-ivory p-5 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-3 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-3 group-focus-within:opacity-100 ${menuPosition}`}
              >
                <div className="grid max-h-[calc(100vh-140px)] gap-5 overflow-y-auto md:grid-cols-[0.72fr_1.28fr]">
                  <div className="border-r border-stone pr-5">
                    <p className="font-display text-3xl font-semibold text-navy">{section.label}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{section.description}</p>
                    <Link
                      href={section.href}
                      className="btn btn-liturgical focus-ring mt-4"
                    >
                      Open section
                    </Link>
                  </div>
                  {section.groups?.length ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {section.groups.map((group) => (
                        <div key={`${section.href}-${group.title}`} className="rounded-md border border-stone/70 bg-parchment/40 p-3">
                          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-burgundy">{group.title}</p>
                          <ul className="mt-2 grid gap-1.5">
                            {group.children.map((link) => (
                              <li key={`${section.href}-${group.title}-${link.href}-${link.label}`}>
                                <Link
                                  href={link.href}
                                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                                  className="focus-ring liturgical-nav-link block rounded-md px-3 py-2 transition hover:bg-parchment"
                                >
                                  <span className="block text-sm font-bold text-navy">{link.label}</span>
                                  {link.description ? (
                                    <span className="mt-1 block text-xs leading-5 text-muted">{link.description}</span>
                                  ) : null}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {section.children.map((link) => (
                        <li key={`${section.href}-${link.href}-${link.label}`}>
                          <Link
                            href={link.href}
                            aria-current={isActive(pathname, link.href) ? "page" : undefined}
                            className="focus-ring liturgical-nav-link block rounded-md px-3 py-2.5 transition hover:bg-parchment"
                          >
                            <span className="block text-sm font-bold text-navy">{link.label}</span>
                            {link.description ? (
                              <span className="mt-1 block text-xs leading-5 text-muted">{link.description}</span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <HeaderSearchButton />
        </div>
        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? `Close ${brand.platformName} menu` : `Open ${brand.platformName} menu`}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-stone bg-ivory text-navy lg:hidden"
        >
          <span className="sr-only">{open ? "Close" : "Open"} {brand.platformName} menu</span>
          <span aria-hidden="true" className="grid gap-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${brand.platformName} mobile navigation`}
          className="fixed inset-x-0 top-20 z-50 border-t border-stone bg-navy/20 lg:hidden"
        >
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="ml-auto max-h-[calc(100vh-5rem)] w-full overflow-y-auto bg-ivory px-5 py-5 shadow-xl sm:max-w-md"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="font-display text-2xl font-semibold text-navy">{brand.platformName}</p>
              <HeaderSearchButton mobile />
            </div>
            <div className="grid gap-4">
              {mobileDrawerNavigation.map((section) => (
                <section key={section.href} className="border-t border-stone pt-4">
                  <Link
                    href={section.href}
                    aria-current={isActive(pathname, section.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`focus-ring block rounded-md text-base font-bold ${
                      isActive(pathname, section.href) ? "liturgical-accent-text" : "text-navy"
                    }`}
                  >
                    {section.label}
                  </Link>
                  <p className="mt-1 text-xs leading-5 text-muted">{section.description}</p>
                  {section.groups?.length ? (
                    <div className="mt-3 grid gap-2">
                      {section.groups.map((group) => (
                        <details key={`${section.href}-${group.title}`} className="rounded-md border border-stone/70 bg-parchment/30 p-3">
                          <summary className="cursor-pointer list-none text-sm font-bold text-navy">{group.title}</summary>
                          <div className="mt-3 grid gap-1">
                            {group.children.map((link) => (
                              <Link
                                key={`${section.href}-${group.title}-${link.href}-${link.label}`}
                                href={link.href}
                                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                                onClick={() => setOpen(false)}
                                className="focus-ring liturgical-nav-link rounded-md px-3 py-2 text-sm font-semibold text-navy hover:bg-parchment"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-3 grid gap-1">
                      {section.children.map((link) => (
                        <Link
                          key={`${section.href}-${link.href}-${link.label}`}
                          href={link.href}
                          aria-current={isActive(pathname, link.href) ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          className="focus-ring liturgical-nav-link rounded-md px-3 py-2 text-sm font-semibold text-navy hover:bg-parchment"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
