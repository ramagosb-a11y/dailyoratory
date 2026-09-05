import Link from "next/link";
import Image from "next/image";

export function FooterCta() {
  return (
    <section className="bg-[#071526] px-0 py-8 sm:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <Link
          href="/adoration/companion"
          className="group focus-ring block overflow-hidden rounded-none sm:rounded-[1.5rem]"
        >
          <Image
            src="/images/adoration/eucharistic-adoration-guide-transparent-v2.png"
            alt="Eucharistic Adoration Guide"
            width={1615}
            height={540}
            sizes="100vw"
            className="h-auto w-full transition-transform duration-200 group-hover:scale-[1.01]"
          />
        </Link>
      </div>
    </section>
  );
}
