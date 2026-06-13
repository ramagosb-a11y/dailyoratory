import { SectionJumpNav } from "@/components/SectionJumpNav";
import { adorationLinks } from "@/lib/adoration";
import Link from "next/link";

export function AdorationNav() {
  return (
    <>
      <SectionJumpNav ariaLabel="Adoration navigation" mobileTitle="Open the Adoration guide outline" items={adorationLinks} />
      <div className="mb-8 rounded-md border border-gold/30 bg-ivory px-5 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Holy Hour help</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Looking for the full step-by-step guide? Use the expanded Holy Hour guide for adoration,
              thanksgiving, mercy, Scripture, intercession, and surrender.
            </p>
          </div>
          <Link href="/adoration#holy-hour-guide" className="btn btn-secondary focus-ring shrink-0 justify-center">
            Open Holy Hour Guide
          </Link>
        </div>
      </div>
    </>
  );
}
