import Link from "next/link";
import { stories } from "@/data/stories";
import { StoryCard } from "@/components/StoryCard";

export function FeaturedStories() {
  return (
    <section className="container-shell py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between gap-5">
        <h2 className="font-editorial text-4xl leading-none text-[var(--burgundy)] md:text-5xl">
          Featured Stories
        </h2>
        <Link href="/releases" className="magazine-link hidden sm:inline-flex">
          View All Articles <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </div>
    </section>
  );
}
