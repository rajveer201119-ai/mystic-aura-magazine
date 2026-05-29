"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { editions, releaseYears } from "@/data/editions";
import { MagazineCard } from "@/components/MagazineCard";

const categoryLabels: Record<string, string> = {
  fashion: "Fashion",
  beauty: "Beauty",
  culture: "Culture",
  lifestyle: "Lifestyle",
  interviews: "Interviews",
};

function matchesCategory(
  edition: (typeof editions)[number],
  category: string | null,
) {
  if (!category) {
    return true;
  }

  const text = `${edition.title} ${edition.description} ${edition.issue}`.toLowerCase();
  const terms: Record<string, RegExp> = {
    fashion: /fashion|style|trend|chic|elegance|divas|regal|grace|radiance/,
    beauty: /beauty|looks|love|natural|radiance|grace|purity/,
    culture: /culture|festival|heritage|children|northeast|zubeen|artist/,
    lifestyle: /lifestyle|health|mindset|summer|winter|new year|pure soul|living/,
    interviews: /zubeen|artist|women|divas|empowered|northeast/,
  };

  return terms[category]?.test(text) ?? true;
}

export function ReleasesGrid() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  const [activeYear, setActiveYear] = useState("ALL");
  const filtered = useMemo(
    () =>
      editions.filter((edition) => {
        const yearMatches = activeYear === "ALL" || edition.year === activeYear;
        return yearMatches && matchesCategory(edition, activeCategory);
      }),
    [activeYear, activeCategory],
  );

  return (
    <section className="container-shell py-10 md:py-14">
      <div
        className="mb-9 flex gap-7 overflow-x-auto border-b hairline pb-4 md:gap-14"
        aria-label="Filter editions by year"
      >
        {releaseYears.map((year) => {
          const active = year === activeYear;
          return (
            <button
              key={year}
              type="button"
              onClick={() => setActiveYear(year)}
              className={`focus-ring relative min-w-max pb-2 text-sm font-bold transition ${
                active ? "text-[var(--burgundy)]" : "text-[var(--charcoal)]"
              }`}
              aria-pressed={active}
            >
              {year}
              {active ? (
                <span className="absolute inset-x-0 -bottom-[17px] h-0.5 bg-[var(--gold)]" />
              ) : null}
            </button>
          );
        })}
      </div>
      {activeCategory && categoryLabels[activeCategory] ? (
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b hairline pb-4">
          <p className="text-sm font-semibold text-[var(--muted)]">
            Showing {categoryLabels[activeCategory]} editions
          </p>
          <Link href="/releases" className="magazine-link">
            All releases <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      ) : null}
      {filtered.length ? (
        <div className="grid gap-x-20 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((edition) => (
            <MagazineCard key={edition.issue} edition={edition} />
          ))}
        </div>
      ) : (
        <div className="border hairline bg-[rgba(247,236,220,0.45)] py-16 text-center">
          <p className="font-editorial text-3xl text-[var(--burgundy)]">
            No editions available for {activeYear}.
          </p>
        </div>
      )}
    </section>
  );
}
