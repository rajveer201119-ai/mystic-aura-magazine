import Image from "next/image";
import Link from "next/link";

export function CategoryCard({
  name,
  image,
  href,
}: {
  name: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="focus-ring group block" aria-label={`Explore ${name}`}>
      <div className="overflow-hidden rounded-sm bg-[var(--cream)]">
        <Image
          src={image}
          alt={`${name} category`}
          width={800}
          height={450}
          className="image-luxury aspect-[1.8] w-full transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[var(--charcoal)] transition group-hover:text-[var(--burgundy)]">
        {name}
      </h3>
    </Link>
  );
}
