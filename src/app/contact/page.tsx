import type { Metadata } from "next";
import { CommunityContactForm } from "@/components/community/CommunityContactForm";
import { SectionHeader } from "@/components/section-header";
import { getCommunityContactOptions } from "@/lib/community";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Daily Oratory about resources, groups, events, and editorial updates.",
  path: "/contact",
});

export default function ContactPage() {
  const options = getCommunityContactOptions();

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Contact"
          title="Invite, correct, contribute"
          summary="Use this form for corrections, content suggestions, group notes, technical questions, or general messages to the Daily Oratory team."
        />
        <div className="mt-8">
          <CommunityContactForm options={options} />
        </div>
      </section>
    </div>
  );
}
