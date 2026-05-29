import Image from "next/image";
import type { Edition } from "@/data/editions";

export function MagazineCard({ edition }: { edition: Edition }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-sm bg-[var(--cream)]">
        <Image
          src={edition.image}
          alt={`${edition.title} magazine cover`}
          width={700}
          height={900}
          className="image-luxury aspect-[0.78] w-full transition duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-4 text-xs font-semibold text-[var(--gold)]">{edition.issue}</p>
      <h2 className="font-editorial mt-1 text-3xl leading-none text-[var(--charcoal)]">
        {edition.title}
      </h2>
      <p className="mt-2 text-sm font-bold text-[var(--charcoal)]">{edition.date}</p>
      <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--charcoal)]">
        {edition.description}
      </p>
      <a href="#" className="magazine-link mt-5">
        Read Edition <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
