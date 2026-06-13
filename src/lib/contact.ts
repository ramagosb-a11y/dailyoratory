export const contactRecipient = "thegospelmovements@gmail.com";
export const contactFailureMessage = "We could not send your message just now. Please email thegospelmovements@gmail.com directly.";

export type ContactSubmission = {
  name: string;
  email: string;
  reason: string;
  message: string;
  company?: string;
};

export function normalizeContactSubmission(input: Partial<ContactSubmission>): ContactSubmission {
  return {
    name: (input.name ?? "").trim(),
    email: (input.email ?? "").trim().toLowerCase(),
    reason: (input.reason ?? "").trim(),
    message: (input.message ?? "").trim(),
    company: (input.company ?? "").trim(),
  };
}

export function validateContactSubmission(submission: ContactSubmission) {
  if (!submission.name || submission.name.length < 2) {
    return "Please enter your name.";
  }

  if (!submission.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    return "Please enter a valid email address.";
  }

  if (!submission.reason) {
    return "Please choose a reason for your message.";
  }

  if (!submission.message || submission.message.length < 10) {
    return "Please share a little more detail in your message.";
  }

  if (submission.message.length > 5000) {
    return "Please keep your message a little shorter.";
  }

  return null;
}

const contactReasonLabels: Record<string, string> = {
  prayer: "Prayer",
  events: "Events",
  "local-groups": "Local groups",
  content: "Content",
  technical: "Technical",
  general: "General",
};

function getContactReasonLabel(reason: string) {
  return contactReasonLabels[reason] ?? reason;
}

function getContactFromEmail() {
  return (
    process.env.CONTACT_FROM_EMAIL ??
    process.env.RESEND_FROM_EMAIL ??
    process.env.RESEND_FROM ??
    process.env.EMAIL_FROM ??
    process.env.DEFAULT_FROM_EMAIL ??
    "Daily Oratory <onboarding@resend.dev>"
  );
}

export async function sendContactEmail(submission: ContactSubmission) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = getContactFromEmail();
  const reasonLabel = getContactReasonLabel(submission.reason);

  if (!resendApiKey) {
    // TODO: Configure RESEND_API_KEY and optionally CONTACT_FROM_EMAIL in production so contact submissions
    // are delivered server-side to thegospelmovements@gmail.com without exposing credentials.
    throw new Error("Contact email transport is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [contactRecipient],
      reply_to: submission.email,
      subject: `Daily Oratory Contact: ${reasonLabel}`,
      text: [
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Reason: ${reasonLabel}`,
        "",
        "Message:",
        submission.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Email provider rejected the contact message: ${errorText}`);
  }
}
