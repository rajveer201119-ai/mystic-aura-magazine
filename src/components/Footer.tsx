import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Releases", href: "/releases" },
      { label: "Team", href: "/team" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "About Us", href: "/team" },
      { label: "Privacy Policy", href: "/" },
      { label: "Terms & Conditions", href: "/" },
    ],
  },
  {
    title: "Magazine",
    links: [
      { label: "Advertise", href: "/contact" },
      { label: "Contribute", href: "/contact" },
      { label: "Subscribe", href: "#newsletter" },
      { label: "Media Kit", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t hairline bg-[rgba(255,250,240,0.96)]">
      <div className="container-shell grid gap-10 py-10 md:grid-cols-[1.4fr_2fr]">
        <div>
          <BrandLogo />
          <div className="mt-7">
            <SocialLinks filled />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
                {column.title}
              </h2>
              <ul className="space-y-2 text-sm text-[var(--charcoal)]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link className="focus-ring hover:text-[var(--burgundy)]" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container-shell border-t hairline py-5 text-center text-sm text-[var(--muted)]">
        © 2024 Mystic Aura Magazine. All Rights Reserved.
      </div>
    </footer>
  );
}
