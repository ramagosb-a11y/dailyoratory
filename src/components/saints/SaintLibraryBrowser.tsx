"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { getApprovedSaints, getPatronages, getSaintCategories, getSaintVirtues } from "@/lib/saints";
import { SaintCard } from "@/components/saints/SaintCard";

const feastMonths = [
  { label: "All months", value: "all" },
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

export function SaintLibraryBrowser() {
  const saints = getApprovedSaints();
  const categories = getSaintCategories();
  const virtues = getSaintVirtues();
  const patronages = getPatronages();

  const [query, setQuery] = useState("");
  const [month, setMonth] = useState("all");
  const [category, setCategory] = useState("all");
  const [virtue, setVirtue] = useState("all");
  const [patronage, setPatronage] = useState("all");
  const [stateOfLife, setStateOfLife] = useState("all");
  const [modernOnly, setModernOnly] = useState(false);
  const [doctorsOnly, setDoctorsOnly] = useState(false);
  const [martyrsOnly, setMartyrsOnly] = useState(false);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return saints.filter((saint) => {
      const monthMatch = month === "all" || saint.feastDay.startsWith(`${month}-`);
      const categoryMatch = category === "all" || saint.categories.includes(category);
      const virtueMatch =
        virtue === "all" ||
        saint.keyVirtues.some((item) => item.toLowerCase() === virtue.toLowerCase());
      const patronageMatch = patronage === "all" || saint.patronages.includes(patronage);
      const stateMatch = stateOfLife === "all" || saint.stateOfLife === stateOfLife;
      const modernMatch = !modernOnly || saint.modernSaint;
      const doctorMatch = !doctorsOnly || saint.doctorOfChurch;
      const martyrMatch = !martyrsOnly || saint.martyr;
      const queryMatch =
        !normalized ||
        [saint.name, saint.shortDescription, saint.century, saint.region, saint.country, ...saint.keyVirtues, ...saint.patronages, ...saint.categories]
          .join(" ")
          .toLowerCase()
          .includes(normalized);

      return monthMatch && categoryMatch && virtueMatch && patronageMatch && stateMatch && modernMatch && doctorMatch && martyrMatch && queryMatch;
    });
  }, [saints, query, month, category, virtue, patronage, stateOfLife, modernOnly, doctorsOnly, martyrsOnly]);

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Library browser</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Search and Filter the Saints Library</h2>
      <div className="dashboard-card mt-6 p-6 sm:p-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-navy">Search by name or need</span>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                trackEvent("saint_search", { query_length: event.target.value.length, page_path: "/saints" });
              }}
              className="form-field focus-ring"
              placeholder="Augustine, courage, Eucharist..."
            />
          </label>
          <FilterSelect label="Feast month" value={month} onChange={(value) => setMonth(value)} options={feastMonths} />
          <FilterSelect label="Category" value={category} onChange={(value) => setCategory(value)} options={[{ label: "All categories", value: "all" }, ...categories.map((item) => ({ label: item.title, value: item.slug }))]} />
          <FilterSelect label="Virtue" value={virtue} onChange={(value) => setVirtue(value)} options={[{ label: "All virtues", value: "all" }, ...virtues.map((item) => ({ label: item.title, value: item.title }))]} />
          <FilterSelect label="Patronage" value={patronage} onChange={(value) => setPatronage(value)} options={[{ label: "All patronages", value: "all" }, ...patronages.map((item) => ({ label: item.title, value: item.slug }))]} />
          <FilterSelect label="State of life" value={stateOfLife} onChange={(value) => setStateOfLife(value)} options={[
            { label: "All states of life", value: "all" },
            { label: "Married", value: "married" },
            { label: "Parent", value: "parent" },
            { label: "Priest", value: "priest" },
            { label: "Religious", value: "religious" },
            { label: "Youth", value: "youth" },
            { label: "Worker", value: "worker" },
            { label: "Scholar", value: "scholar" },
            { label: "Missionary", value: "missionary" },
          ]} />
          <ToggleCard label="Modern saints only" checked={modernOnly} onChange={setModernOnly} />
          <ToggleCard label="Doctors only" checked={doctorsOnly} onChange={setDoctorsOnly} />
          <ToggleCard label="Martyrs only" checked={martyrsOnly} onChange={setMartyrsOnly} />
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">
        Showing {filtered.length} saint{filtered.length === 1 ? "" : "s"}.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((saint) => (
          <SaintCard key={saint.id} saint={saint} />
        ))}
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-navy">{label}</span>
      <select
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
          trackEvent("saint_filter_apply", { filter_name: label, filter_value: event.target.value, page_path: "/saints" });
        }}
        className="form-field focus-ring"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ToggleCard({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        onChange(!checked);
        trackEvent("saint_filter_apply", { filter_name: label, filter_value: !checked, page_path: "/saints" });
      }}
      className={`focus-ring rounded-2xl border p-4 text-left transition ${checked ? "border-gold bg-gold-soft text-navy" : "border-stone bg-ivory text-muted"}`}
    >
      <span className="block text-sm font-semibold text-navy">{label}</span>
      <span className="mt-2 block text-xs leading-6">{checked ? "On" : "Off"}</span>
    </button>
  );
}
