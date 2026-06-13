"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { prayerIntentionTypeOptions, prayerIntentionVisibilityOptions } from "@/data/prayerIntentions";
import {
  clearPrayerIntentionLocalData,
  submitLocalPrayerIntention,
  usePrayerIntentionStore,
} from "@/lib/prayerIntentionStorage";
import type { PrayerIntentionType, PrayerIntentionVisibility } from "@/types/prayerIntentions";
import { PrayerIntentionEmergencyNotice, PrayerIntentionPrivacyNotice } from "./PrayerIntentionNotices";

export function PrayerIntentionSubmitForm() {
  const store = usePrayerIntentionStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [intentionType, setIntentionType] = useState<PrayerIntentionType>("healing");
  const [intentionVisibility, setIntentionVisibility] = useState<PrayerIntentionVisibility>("anonymous-public");
  const [requesterDisplayName, setRequesterDisplayName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [consentToModeration, setConsentToModeration] = useState(false);
  const [message, setMessage] = useState("");

  const canSubmit = title.trim().length >= 4 && description.trim().length >= 20 && consentToModeration;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) {
      setMessage("Please add a short title, a prayerful summary, and confirm moderation consent.");
      return;
    }

    submitLocalPrayerIntention({
      title,
      description,
      intentionType,
      intentionVisibility,
      requesterDisplayName: requesterDisplayName || "Anonymous",
      contactEmail,
      consentToModeration,
    });
    setTitle("");
    setDescription("");
    setIntentionType("healing");
    setIntentionVisibility("anonymous-public");
    setRequesterDisplayName("");
    setContactEmail("");
    setConsentToModeration(false);
    trackEvent("prayer_request_submit", {
      intention_type: intentionType,
      visibility: intentionVisibility,
      has_contact_email: Boolean(contactEmail),
    });
    setMessage("Your intention is saved locally as pending review. It is not published to the wall in this mock version.");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_21rem] lg:items-start">
      <form onSubmit={handleSubmit} className="form-shell p-5 sm:p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Ask for prayer</p>
        <h1 className="font-display mt-2 text-4xl font-semibold text-navy">Submit an intention for review.</h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          Use gentle, public-safe language. A real launch should send this to a moderation queue before any public
          display.
        </p>

        <div className="mt-6 grid gap-5">
          <label className="grid gap-2">
            <span className="form-label">Intention title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="form-field focus-ring"
              maxLength={90}
              placeholder="For healing in a family"
              required
            />
          </label>

          <label className="grid gap-2">
            <span className="form-label">Prayerful summary</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="form-field textarea-field focus-ring"
              maxLength={1200}
              placeholder="Share only what is needed for prayer. Avoid names, locations, contact details, or private medical information."
              required
            />
            <span className="form-helper">{description.length}/1200 characters</span>
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="form-label">Intention type</span>
              <select value={intentionType} onChange={(event) => setIntentionType(event.target.value as PrayerIntentionType)} className="form-field focus-ring">
                {prayerIntentionTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="form-label">Visibility request</span>
              <select
                value={intentionVisibility}
                onChange={(event) => setIntentionVisibility(event.target.value as PrayerIntentionVisibility)}
                className="form-field focus-ring"
              >
                {prayerIntentionVisibilityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="rounded-md border border-stone bg-parchment p-4">
            <p className="text-sm font-bold text-navy">Visibility guidance</p>
            <ul className="mt-2 grid gap-1 text-xs leading-5 text-muted">
              {prayerIntentionVisibilityOptions.map((option) => (
                <li key={option.value}>
                  <span className="font-bold text-navy">{option.label}:</span> {option.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="form-label">Display name</span>
              <input
                value={requesterDisplayName}
                onChange={(event) => setRequesterDisplayName(event.target.value)}
                className="form-field focus-ring"
                maxLength={60}
                placeholder="Anonymous"
              />
            </label>
            <label className="grid gap-2">
              <span className="form-label">Contact email for moderators</span>
              <input
                value={contactEmail}
                onChange={(event) => setContactEmail(event.target.value)}
                className="form-field focus-ring"
                maxLength={160}
                type="email"
                placeholder="Optional, not public"
              />
            </label>
          </div>

          <label className="flex gap-3 rounded-md border border-stone bg-ivory p-4">
            <input
              type="checkbox"
              checked={consentToModeration}
              onChange={(event) => setConsentToModeration(event.target.checked)}
              className="mt-1 h-4 w-4 accent-gold"
              required
            />
            <span className="text-sm leading-6 text-muted">
              I understand this intention should be reviewed before publication and may be edited or hidden to protect
              privacy, reverence, and safety.
            </span>
          </label>

          {message ? <p className="rounded-md border border-gold bg-gold-soft/40 p-3 text-sm font-semibold text-navy">{message}</p> : null}

          <button type="submit" className="btn btn-primary focus-ring" disabled={!canSubmit}>
            Save as pending review
          </button>
        </div>
      </form>

      <aside className="grid gap-5 lg:sticky lg:top-24">
        <PrayerIntentionPrivacyNotice />
        <PrayerIntentionEmergencyNotice />
        <div className="dashboard-card p-5">
          <p className="text-xs font-bold uppercase text-burgundy">Local mock submissions</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            {store.submissions.length} pending local submission{store.submissions.length === 1 ? "" : "s"} saved in this browser.
          </p>
          {store.submissions.length ? (
            <div className="mt-4 grid gap-3">
              {store.submissions.slice(0, 3).map((submission) => (
                <div key={submission.id} className="rounded-md border border-stone bg-ivory p-3">
                  <p className="text-sm font-bold text-navy">{submission.title}</p>
                  <p className="mt-1 text-xs font-semibold uppercase text-burgundy">Pending review</p>
                </div>
              ))}
              <button type="button" onClick={clearPrayerIntentionLocalData} className="btn btn-secondary focus-ring">
                Clear local mock data
              </button>
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
