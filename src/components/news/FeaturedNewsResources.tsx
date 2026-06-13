"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { NewsResourceCard } from "@/components/news/NewsResourceCard";
import { NewsResourceFilters } from "@/components/news/NewsResourceFilters";
import { trackEvent } from "@/lib/analytics";
import { getFeaturedNewsResources } from "@/lib/news";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "official", label: "Official" },
  { value: "vatican", label: "Vatican" },
  { value: "us-church", label: "U.S. Church" },
  { value: "world-church", label: "Global Church" },
  { value: "spiritual", label: "Spiritual" },
  { value: "reflections", label: "Reflections" },
  { value: "faith-culture", label: "Culture" },
  { value: "pro-life", label: "Pro-Life" },
  { value: "persecuted-christians", label: "Persecuted Christians" },
];

export function FeaturedNewsResources() {
  const [activeFilter, setActiveFilter] = useState("all");
  const resources = getFeaturedNewsResources();

  const filteredResources = useMemo(() => {
    if (activeFilter === "all") return resources;
    if (activeFilter === "official") return resources.filter((resource) => resource.official);
    return resources.filter((resource) => resource.category === activeFilter);
  }, [activeFilter, resources]);

  function handleFilterChange(value: string) {
    setActiveFilter(value);
    trackEvent("news_filter_apply", {
      filter_value: value,
      page_path: "/news",
      section: "featured-news-resources",
    });
  }

  return (
    <section id="featured-news-resources">
      <SectionHeader
        eyebrow="Featured resources"
        title="Featured Catholic News Resources"
        summary="A compact directory of official Church sources, Catholic news outlets, spiritual news resources, and daily reflection links."
      />
      <div className="mt-7">
        <NewsResourceFilters activeFilter={activeFilter} onChange={handleFilterChange} options={filterOptions} />
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredResources.map((resource) => (
          <NewsResourceCard key={`${activeFilter}-${resource.id}`} resource={resource} section="featured-news-resources" />
        ))}
      </div>
    </section>
  );
}
