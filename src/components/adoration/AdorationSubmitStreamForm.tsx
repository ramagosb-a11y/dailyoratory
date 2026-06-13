"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { adorationLanguageOptions } from "@/data/adoration";
import { sanitizeAdorationEmbedUrl } from "@/lib/adoration";
import { saveAdorationSubmission, useAdorationStore } from "@/lib/adorationStorage";
import type { AdorationStreamLanguage } from "@/types/adoration";

export function AdorationSubmitStreamForm() {
  const store = useAdorationStore();
  const [chapelName, setChapelName] = useState("");
  const [parishOrCommunityName, setParishOrCommunityName] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState<AdorationStreamLanguage>("English");
  const [streamUrl, setStreamUrl] = useState("");
  const [submitterNote, setSubmitterNote] = useState("");
  const [message, setMessage] = useState("");

  const safeEmbed = sanitizeAdorationEmbedUrl(streamUrl);

  function submitStream(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!safeEmbed) {
      setMessage("Please use a supported YouTube or Vimeo URL.");
      return;
    }

    saveAdorationSubmission({
      chapelName,
      parishOrCommunityName,
      location,
      country,
      language,
      streamUrl,
      submitterNote,
    });
    setMessage("Stream saved locally for review. A real backend would route this to editors.");
    setChapelName("");
    setParishOrCommunityName("");
    setLocation("");
    setCountry("");
    setStreamUrl("");
    setSubmitterNote("");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
      <form onSubmit={submitStream} className="form-shell p-5 sm:p-7">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Submit stream</p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-navy">Send an Adoration stream for review.</h1>
          <p className="mt-3 text-sm leading-7 text-muted">
            Submitted streams are not published automatically. Editors should verify the parish or chapel source,
            stream safety, language, and schedule before publication.
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="form-label">Chapel name</span>
            <input value={chapelName} onChange={(event) => setChapelName(event.target.value)} className="form-field focus-ring" required />
          </label>
          <label className="grid gap-2">
            <span className="form-label">Parish or community</span>
            <input
              value={parishOrCommunityName}
              onChange={(event) => setParishOrCommunityName(event.target.value)}
              className="form-field focus-ring"
              required
            />
          </label>
          <label className="grid gap-2">
            <span className="form-label">City or location</span>
            <input value={location} onChange={(event) => setLocation(event.target.value)} className="form-field focus-ring" required />
          </label>
          <label className="grid gap-2">
            <span className="form-label">Country</span>
            <input value={country} onChange={(event) => setCountry(event.target.value)} className="form-field focus-ring" required />
          </label>
          <label className="grid gap-2">
            <span className="form-label">Language</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as AdorationStreamLanguage)}
              className="form-field focus-ring"
            >
              {adorationLanguageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="form-label">YouTube or Vimeo URL</span>
            <input
              value={streamUrl}
              onChange={(event) => setStreamUrl(event.target.value)}
              className="form-field focus-ring"
              placeholder="https://www.youtube.com/watch?v=..."
              required
            />
          </label>
          <label className="grid gap-2 sm:col-span-2">
            <span className="form-label">Reviewer notes</span>
            <textarea
              value={submitterNote}
              onChange={(event) => setSubmitterNote(event.target.value)}
              className="form-field textarea-field focus-ring"
              maxLength={500}
              placeholder="Mention schedule, parish source page, verification notes, or language details."
            />
          </label>
        </div>

        <div className="mt-5 rounded-md border border-stone bg-parchment p-4 text-sm leading-7 text-muted">
          {streamUrl ? (
            safeEmbed ? (
              <span>
                Supported {safeEmbed.provider} URL detected. Embed will use a sanitized no-autoplay URL after review.
              </span>
            ) : (
              <span className="font-semibold text-burgundy">Unsupported URL. Use YouTube or Vimeo over HTTPS.</span>
            )
          ) : (
            <span>Embed safety check appears here after a URL is entered.</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary focus-ring mt-6">
          Submit for review
        </button>
        {message ? <p className="mt-4 text-sm font-semibold text-success" aria-live="polite">{message}</p> : null}
      </form>

      <aside className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Local review queue</p>
        <p className="font-display mt-2 text-3xl font-semibold text-navy">{store.submissions.length}</p>
        <p className="mt-2 text-sm leading-7 text-muted">Submissions stay in this browser in version 1.</p>
        <div className="mt-5 grid gap-3">
          {store.submissions.slice(0, 5).map((submission) => (
            <div key={submission.id} className="rounded-md border border-stone bg-parchment p-3">
              <p className="text-sm font-bold text-navy">{submission.chapelName}</p>
              <p className="mt-1 text-xs text-muted">{submission.country}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
