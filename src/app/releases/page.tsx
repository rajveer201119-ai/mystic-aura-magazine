import type { Metadata } from "next";
import { Suspense } from "react";
import { Newsletter } from "@/components/Newsletter";
import { ReleasesGrid } from "@/components/ReleasesGrid";

export const metadata: Metadata = {
  title: "Previous Editions",
  description: "Explore past issues and timeless Mystic Aura stories.",
  openGraph: {
    title: "Previous Editions | Mystic Aura Magazine",
    description: "Explore past issues and timeless Mystic Aura stories.",
  },
};

export default function ReleasesPage() {
  return (
    <>
      <section className="container-shell pt-10 text-center md:pt-16">
        <h1 className="font-editorial text-6xl leading-none text-[var(--burgundy)] md:text-7xl lg:text-8xl">
          Previous Editions
        </h1>
        <div className="gold-diamond" />
        <p className="text-base text-[var(--muted)] md:text-lg">
          Explore our past issues and timeless stories.
        </p>
      </section>
      <Suspense
        fallback={
          <section className="container-shell py-14 text-center text-[var(--muted)]">
            Loading editions...
          </section>
        }
      >
        <ReleasesGrid />
      </Suspense>
      <Newsletter />
    </>
  );
}
