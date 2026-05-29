import Image from "next/image";

export function CategoryCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-sm bg-[var(--cream)]">
        <Image
          src={image}
          alt={`${name} category`}
          width={800}
          height={450}
          className="image-luxury aspect-[1.8] w-full transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[var(--charcoal)]">
        {name}
      </h3>
    </article>
  );
}
