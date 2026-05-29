import Link from "next/link";
import { categories } from "@/data/stories";
import { CategoryCard } from "@/components/CategoryCard";

export function Categories() {
  return (
    <section className="container-shell py-10 md:py-12">
      <div className="mb-6 flex items-end justify-between gap-5">
        <h2 className="font-editorial text-4xl leading-none text-[var(--burgundy)] md:text-5xl">
          Explore Categories
        </h2>
        <Link href="/releases" className="magazine-link hidden sm:inline-flex">
          View All <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
}
