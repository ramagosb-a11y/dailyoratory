"use client";

import { useEffect, useState } from "react";

export type EraOutlineItem = {
  id: string;
  label: string;
};

export function ActiveEraOutline({ eras }: { eras: readonly EraOutlineItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const sections = eras
      .map((era) => document.getElementById(era.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length || !("IntersectionObserver" in window)) return;

    const chooseActiveSection = () => {
      const readingLine = Math.min(180, window.innerHeight * 0.28);
      const containingLine = sections.filter((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= readingLine && rect.bottom > readingLine;
      });
      const next = containingLine.at(-1) ?? sections.find((section) => section.getBoundingClientRect().top > readingLine);
      setActiveId(next?.id ?? sections.at(-1)?.id ?? null);
    };

    const observer = new IntersectionObserver(chooseActiveSection, {
      rootMargin: "-15% 0px -70% 0px",
      threshold: [0, 0.01],
    });
    sections.forEach((section) => observer.observe(section));
    chooseActiveSection();

    return () => observer.disconnect();
  }, [eras]);

  const renderLinks = (closeMobileOutline = false) =>
    eras.map((era, index) => (
      <a
        key={era.id}
        href={`#${era.id}`}
        aria-current={activeId === era.id ? "location" : undefined}
        className="life-jesus-outline-link focus-ring"
        onClick={closeMobileOutline ? () => {
          const outline = document.getElementById("life-of-jesus-mobile-eras") as HTMLDetailsElement | null;
          if (outline) outline.open = false;
        } : undefined}
      >
        <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        {era.label}
      </a>
    ));

  return (
    <>
      <details id="life-of-jesus-mobile-eras" className="life-jesus-mobile-outline">
        <summary className="focus-ring">
          <span>Journey outline</span>
          <strong>Jump to an era</strong>
        </summary>
        <nav aria-label="Life of Jesus eras">{renderLinks(true)}</nav>
      </details>

      <aside className={`life-jesus-desktop-outline${isCollapsed ? " is-collapsed" : ""}`} aria-label="Life of Jesus eras">
        <div className="life-jesus-outline-toolbar">
          {!isCollapsed ? <p>Along the way</p> : <span className="life-jesus-outline-collapsed-label">Eras</span>}
          <button
            type="button"
            className="life-jesus-outline-toggle focus-ring"
            aria-expanded={!isCollapsed}
            aria-controls="life-jesus-desktop-era-links"
            aria-label={isCollapsed ? "Show the era outline" : "Hide the era outline"}
            onClick={() => setIsCollapsed((value) => !value)}
          >
            <span aria-hidden="true">{isCollapsed ? "›" : "‹"}</span>
          </button>
        </div>
        <nav id="life-jesus-desktop-era-links" aria-label="Life of Jesus eras">{renderLinks()}</nav>
      </aside>
    </>
  );
}
