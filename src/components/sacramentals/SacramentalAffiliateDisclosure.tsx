import { getApprovedPurchaseLinks } from "@/lib/sacramentals";

export function SacramentalAffiliateDisclosure() {
  const affiliateLinks = getApprovedPurchaseLinks().filter((item) => item.affiliate);

  if (!affiliateLinks.length) return null;

  return (
    <p className="mt-5 rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
      Some links may be affiliate links. Daily Oratory may receive a small commission at no extra cost to you.
    </p>
  );
}
