"use client";

import { useMemo, useState } from "react";
import { SelectedPathPanel } from "@/components/heavenbound/SelectedPathPanel";
import { SpiritualPathCard } from "@/components/heavenbound/SpiritualPathCard";
import type { HeavenboundPath } from "@/types/heavenbound";

export function SpiritualPathGrid({ paths }: { paths: HeavenboundPath[] }) {
  const [selectedPath, setSelectedPath] = useState<HeavenboundPath>(paths[0]);
  const sortedPaths = useMemo(() => [...paths].sort((a, b) => a.number - b.number), [paths]);

  return (
    <section id="choose-path" className="mt-12 scroll-mt-24">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
        <div>
          <div className="border-b border-stone/70 pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Spiritual menu</p>
            <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">
              Welcome, pilgrim of Christ.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Choose a spiritual path for today. Select one of the following areas of formation, then open
              Heavenbound to continue your Catholic journey.
            </p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {sortedPaths.map((path) => (
              <SpiritualPathCard
                key={path.id}
                path={path}
                selected={selectedPath.id === path.id}
                onSelect={setSelectedPath}
              />
            ))}
          </div>
        </div>
        <SelectedPathPanel path={selectedPath} />
      </div>
    </section>
  );
}
