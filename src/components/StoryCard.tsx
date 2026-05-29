import Image from "next/image";
import type { Story } from "@/data/stories";

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-sm bg-[var(--cream)]">
        <Image
          src={story.image}
          alt={`${story.title} editorial image`}
          width={800}
          height={600}
          className="image-luxury aspect-[1.35] w-full transition duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[var(--burgundy)]">
        {story.category}
      </p>
      <h3 className="font-editorial mt-2 min-h-[3.2rem] text-2xl leading-[1.04] text-[var(--charcoal)]">
        {story.title}
      </h3>
      <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
        {story.readingTime}
      </p>
    </article>
  );
}
