"use client";

import { useMemo, useState } from "react";
import { editions, releaseYears } from "@/data/editions";
import { MagazineCard } from "@/components/MagazineCard";

export function ReleasesGrid() {
  const [activeYear, setActiveYear] = useState("ALL");
  const filtered = useMemo(
    () =>
      activeYear === "ALL"
        ? editions
        : editions.filter((edition) => edition.year === activeYear),
    [activeYear],
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
