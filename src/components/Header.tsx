"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/releases", label: "Releases" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[rgba(255,250,240,0.92)] backdrop-blur-xl">
      <div className="container-shell flex min-h-24 items-center justify-between gap-6 py-5">
        <BrandLogo />
        <div className="hidden items-center gap-12 lg:flex">
          <nav aria-label="Primary navigation" className="flex items-center gap-10">
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring relative py-2 text-sm font-semibold transition hover:text-[var(--burgundy)] ${
                    active ? "text-[var(--burgundy)]" : "text-[var(--charcoal)]"
                  }`}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute inset-x-1 -bottom-1 h-px bg-[var(--gold)]" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
          <SocialLinks />
        </div>
        <button
          type="button"
          className="focus-ring flex size-11 flex-col items-center justify-center gap-1.5 border border-[var(--line)] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-px w-5 bg-[var(--burgundy)]" />
          <span className="h-px w-5 bg-[var(--burgundy)]" />
          <span className="h-px w-5 bg-[var(--burgundy)]" />
        </button>
      </div>
      {open ? (
        <div className="border-t hairline bg-[var(--ivory)] lg:hidden">
          <nav className="container-shell grid gap-1 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring border-b border-[rgba(185,133,52,0.2)] py-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--burgundy)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <SocialLinks filled />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
