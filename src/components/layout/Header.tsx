"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { brand } from "@/config/brand";
import {
  desktopMegaMenu,
  mobileDrawerNavigation,
  type NavigationItem,
  type NavigationSection,
} from "@/config/navigation";

function isActive(pathname: string, currentSearch: string, href: string) {
  if (href.startsWith("http")) return false;

  const [hrefPath, hrefSearch = ""] = href.split("?");
  const pathMatches = hrefPath === "/"
    ? pathname === hrefPath
    : pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);

  if (!pathMatches) return false;

  const requiredSearch = new URLSearchParams(hrefSearch);
  const activeSearch = new URLSearchParams(currentSearch);
  if (hrefSearch) {
    return Array.from(requiredSearch.entries()).every(
      ([key, value]) => activeSearch.get(key) === value,
    );
  }

  if (hrefPath === "/adoration/companion" && activeSearch.get("mode") === "holy-hour") {
    return false;
  }

  return true;
}

function sectionContainsActiveLink(
  section: NavigationSection,
  pathname: string,
  currentSearch: string,
) {
  return section.groups.some((group) =>
    group.children.some((item) => isActive(pathname, currentSearch, item.href)),
  );
}

function ExternalIndicator() {
  return (
    <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-burgundy">
      External site
      <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3 fill-none stroke-current stroke-[1.6]">
        <path d="M6 3H3.75A1.75 1.75 0 0 0 2 4.75v7.5C2 13.22 2.78 14 3.75 14h7.5A1.75 1.75 0 0 0 13 12.25V10M9 2h5v5M14 2 7.5 8.5" />
      </svg>
    </span>
  );
}

function NavigationDestination({
  item,
  pathname,
  currentSearch,
  onNavigate,
  className,
}: {
  item: NavigationItem;
  pathname: string;
  currentSearch: string;
  onNavigate: () => void;
  className: string;
}) {
  const active = !item.external && isActive(pathname, currentSearch, item.href);
  const content = (
    <span className="flex min-w-0 items-center justify-between gap-2">
      <span>{item.label}</span>
      {item.external ? <ExternalIndicator /> : null}
    </span>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={`${className} ${active ? "bg-parchment liturgical-accent-text" : ""}`}
    >
      {content}
    </Link>
  );
}

function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="focus-ring flex shrink-0 items-center gap-3 rounded-md"
    >
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
  const searchParams = useSearchParams();
  const currentSearch = searchParams.toString();
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const desktopButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeSectionId = useMemo(
    () => desktopMegaMenu.find(
      (section) => sectionContainsActiveLink(section, pathname, currentSearch),
    )?.id ?? null,
    [pathname, currentSearch],
  );

  function closeMenu({ returnFocus = false }: { returnFocus?: boolean } = {}) {
    setOpen(false);
    if (returnFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }

  function closeDesktopMenu({ returnFocus = false }: { returnFocus?: boolean } = {}) {
    const sectionId = desktopOpen;
    setDesktopOpen(null);
    if (returnFocus && sectionId) {
      window.requestAnimationFrame(() => desktopButtonRefs.current[sectionId]?.focus());
    }
  }

  useEffect(() => {
    if (!desktopOpen) return;
    const openSectionId = desktopOpen;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setDesktopOpen(null);
        window.requestAnimationFrame(() => desktopButtonRefs.current[openSectionId]?.focus());
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setDesktopOpen(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [desktopOpen]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    function handlePopState() {
      setOpen(false);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [open]);

  if (pathname === "/morning-prayer" || pathname === "/night-prayer") return null;

  return (
    <>
      <header className="site-header sticky top-0 z-40 border-b border-stone bg-ivory/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Logo onNavigate={() => closeMenu()} />
          <nav
            ref={desktopNavRef}
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {desktopMegaMenu.map((section, index) => {
              const isOpen = desktopOpen === section.id;
              const isCurrent = section.id === activeSectionId;
              const menuPosition = index < 2 ? "left-0" : "right-0";
              const groupColumns = section.groups.length === 1
                ? "md:grid-cols-1"
                : section.groups.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-3";

              return (
                <div key={section.id} className="relative">
                  <button
                    ref={(element) => { desktopButtonRefs.current[section.id] = element; }}
                    id={`desktop-menu-button-${section.id}`}
                    type="button"
                    aria-controls={`desktop-menu-${section.id}`}
                    aria-expanded={isOpen}
                    onClick={() => setDesktopOpen(isOpen ? null : section.id)}
                    className={`focus-ring liturgical-nav-link inline-flex min-h-11 items-center gap-1 rounded-md px-2.5 py-2 text-sm font-semibold transition xl:px-3 ${
                      isCurrent || isOpen
                        ? "liturgical-nav-active"
                        : "text-navy hover:bg-parchment"
                    }`}
                  >
                    {section.label}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 12"
                      className={`h-3 w-3 fill-none stroke-current stroke-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="m2.5 4.5 3.5 3 3.5-3" />
                    </svg>
                  </button>
                  {isOpen ? (
                    <div
                      id={`desktop-menu-${section.id}`}
                      aria-labelledby={`desktop-menu-button-${section.id}`}
                      className={`absolute top-full mt-2 w-[min(820px,calc(100vw-4rem))] rounded-lg border border-stone bg-ivory p-5 shadow-xl ${menuPosition}`}
                    >
                      <p className="mb-4 max-w-2xl text-sm leading-6 text-muted">{section.description}</p>
                      <div className={`grid gap-4 ${groupColumns}`}>
                        {section.groups.map((group) => (
                          <section
                            key={`${section.id}-${group.title}`}
                            className="rounded-md border border-stone/70 bg-parchment/35 p-3"
                          >
                            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-burgundy">
                              {group.title}
                            </h2>
                            <ul className="mt-2 grid gap-1">
                              {group.children.map((item) => (
                                <li key={`${section.id}-${group.title}-${item.href}`}>
                                  <NavigationDestination
                                    item={item}
                                    pathname={pathname}
                                    currentSearch={currentSearch}
                                    onNavigate={() => closeDesktopMenu()}
                                    className="focus-ring liturgical-nav-link block min-h-11 rounded-md px-3 py-3 text-sm font-bold text-navy transition hover:bg-ivory"
                                  />
                                </li>
                              ))}
                            </ul>
                          </section>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <button
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? `Close ${brand.platformName} menu` : `Open ${brand.platformName} menu`}
            onClick={() => {
              setOpen((value) => {
                if (!value) setMobileSectionOpen(activeSectionId);
                return !value;
              });
            }}
            className="focus-ring ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-stone bg-ivory text-navy lg:hidden"
          >
            <span className="sr-only">{open ? "Close" : "Open"} {brand.platformName} menu</span>
            {open ? (
              <span aria-hidden="true" className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 block h-0.5 w-5 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 block h-0.5 w-5 -rotate-45 bg-current" />
              </span>
            ) : (
              <span aria-hidden="true" className="grid gap-1">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            )}
          </button>
        </div>
      </header>
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <button
            type="button"
            aria-label={`Close ${brand.platformName} menu`}
            onClick={() => closeMenu({ returnFocus: true })}
            className="absolute inset-0 bg-navy/45"
          />
          <nav
            ref={menuRef}
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="relative ml-auto h-full w-full overflow-y-auto bg-ivory px-5 py-5 shadow-xl sm:max-w-md"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <p id="mobile-menu-title" className="font-display text-2xl font-semibold text-navy">
                {brand.platformName}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => closeMenu({ returnFocus: true })}
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-stone bg-ivory text-navy"
                aria-label={`Close ${brand.platformName} menu`}
              >
                <span aria-hidden="true" className="relative block h-5 w-5">
                  <span className="absolute left-0 top-1/2 block h-0.5 w-5 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 block h-0.5 w-5 -rotate-45 bg-current" />
                </span>
              </button>
            </div>
            <div className="grid gap-3">
              {mobileDrawerNavigation.map((section) => {
                const isSectionOpen = mobileSectionOpen === section.id;
                const isCurrent = activeSectionId === section.id;

                return (
                  <section key={section.id} className="rounded-md border border-stone bg-parchment/20">
                    <button
                      type="button"
                      aria-controls={`mobile-section-${section.id}`}
                      aria-expanded={isSectionOpen}
                      onClick={() => setMobileSectionOpen(isSectionOpen ? null : section.id)}
                      className={`focus-ring flex min-h-12 w-full items-center justify-between gap-3 rounded-md px-4 py-3 text-left text-base font-bold ${
                        isCurrent ? "liturgical-accent-text" : "text-navy"
                      }`}
                    >
                      {section.label}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 12 12"
                        className={`h-4 w-4 shrink-0 fill-none stroke-current stroke-2 transition-transform ${isSectionOpen ? "rotate-180" : ""}`}
                      >
                        <path d="m2.5 4.5 3.5 3 3.5-3" />
                      </svg>
                    </button>
                    {isSectionOpen ? (
                      <div id={`mobile-section-${section.id}`} className="border-t border-stone px-3 pb-3">
                        <p className="px-1 py-3 text-xs leading-5 text-muted">{section.description}</p>
                        <div className="grid gap-3">
                          {section.groups.map((group) => (
                            <div key={`${section.id}-${group.title}`}>
                              <h2 className="px-1 text-[11px] font-bold uppercase tracking-[0.14em] text-burgundy">
                                {group.title}
                              </h2>
                              <ul className="mt-1 grid gap-1">
                                {group.children.map((item) => (
                                  <li key={`${section.id}-${group.title}-${item.href}`}>
                                    <NavigationDestination
                                      item={item}
                                      pathname={pathname}
                                      currentSearch={currentSearch}
                                      onNavigate={() => closeMenu()}
                                      className="focus-ring liturgical-nav-link block min-h-11 rounded-md px-3 py-3 text-sm font-semibold text-navy hover:bg-parchment"
                                    />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </section>
                );
              })}
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
