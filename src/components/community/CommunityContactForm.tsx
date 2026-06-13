"use client";

import { useState } from "react";
import Link from "next/link";
import type { CommunityContactOption } from "@/types/community";

export function CommunityContactForm({ options }: { options: CommunityContactOption[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <section className="form-shell p-6 sm:p-8" aria-live="polite">
        <p className="text-xs font-bold uppercase text-burgundy">Message sent</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Thank you for reaching out.</h2>
        <p className="mt-3 text-base leading-8 text-muted sm:text-lg">
          Thank you. Your message has been sent to Daily Oratory.
        </p>
        <button type="button" className="btn btn-secondary focus-ring mt-5 w-full sm:w-auto" onClick={() => setSubmitted(false)}>
          Send another note
        </button>
      </section>
    );
  }

  return (
    <form
      className="form-shell p-6 sm:p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        setError(null);
        setSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const payload = {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          reason: String(formData.get("reason") ?? ""),
          message: String(formData.get("message") ?? ""),
          company: String(formData.get("company") ?? ""),
        };

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          let data: { ok?: boolean; error?: string } | null = null;
          try {
            data = (await response.json()) as { ok?: boolean; error?: string };
          } catch {
            data = null;
          }

          if (!response.ok) {
            setError(data?.error ?? "We could not send your message just now. Please email thegospelmovements@gmail.com directly.");
            return;
          }

          if (data && data.ok === false) {
            setError(data.error ?? "We could not send your message just now. Please email thegospelmovements@gmail.com directly.");
            return;
          }

          event.currentTarget.reset();
          setSubmitted(true);
        } catch {
          setError("We could not send your message just now. Please email thegospelmovements@gmail.com directly.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Contact</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Send a note to Daily Oratory</h2>
        <p className="mt-3 text-base leading-8 text-muted sm:text-lg">
          Please do not submit urgent emergencies or confidential confession details here. For immediate danger,
          contact local emergency services. For sacramental or pastoral counsel, speak with a priest or parish
          minister.
        </p>
      </div>

      <div className="mt-7 grid gap-5">
        <label className="hidden" aria-hidden="true">
          <span>Company</span>
          <input tabIndex={-1} autoComplete="off" name="company" />
        </label>
        <label className="grid gap-2">
          <span className="form-label">Name</span>
          <input className="form-field focus-ring" name="name" autoComplete="name" placeholder="Your name" required minLength={2} />
        </label>
        <label className="grid gap-2">
          <span className="form-label">Email</span>
          <input
            className="form-field focus-ring"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
        <label className="grid gap-2">
          <span className="form-label">Reason</span>
          <select className="form-field focus-ring" name="reason" required defaultValue="">
            <option value="" disabled>
              Choose a reason
            </option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="form-label">Message</span>
          <textarea
            className="form-field textarea-field focus-ring"
            name="message"
            placeholder="How can we help?"
            required
            minLength={10}
            maxLength={5000}
          />
        </label>
        {error ? (
          <div
            className="rounded-md border border-burgundy/20 bg-burgundy/5 px-4 py-3 text-base leading-7 text-burgundy"
            aria-live="polite"
          >
            <p>{error}</p>
            <p className="mt-2">
              <Link href="mailto:thegospelmovements@gmail.com" className="text-link focus-ring">
                Email thegospelmovements@gmail.com directly
              </Link>
            </p>
          </div>
        ) : null}
        <button type="submit" className="btn btn-primary focus-ring w-full sm:w-auto" disabled={submitting}>
          {submitting ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
