import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t hairline bg-[rgba(255,250,244,0.98)]">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-14">
        <div>
          <BrandLogo />
          <div className="mt-7">
            <SocialLinks filled />
          </div>
        </div>
        <Link href="/contact#contact-form" className="editorial-button focus-ring w-fit">
          Contact Us <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
      <div className="container-shell border-t hairline py-5 text-center text-sm text-[var(--muted)]">
        &copy; 2026 Mystic Aura Magazine. All Rights Reserved.
      </div>
    </footer>
  );
}
