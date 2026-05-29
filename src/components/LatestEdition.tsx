import Link from "next/link";
import Image from "next/image";
import { editions } from "@/data/editions";

export function LatestEdition() {
  const latest = editions[0];

  return (
    <section className="container-shell border-y hairline py-10">
      <div className="grid items-center gap-8 md:grid-cols-[220px_1fr_260px] lg:grid-cols-[260px_1fr_300px]">
        <div className="mx-auto w-52 overflow-hidden rounded-sm border hairline bg-[var(--cream)] md:w-full">
          <Image
            src={latest.image}
            alt={`${latest.title} magazine cover`}
            width={700}
            height={900}
            className="image-luxury aspect-[0.78] w-full"
          />
        </div>
        <div>
          <h2 className="font-editorial text-5xl leading-none text-[var(--burgundy)]">
            Latest Edition
          </h2>
          <p className="mt-5 max-w-sm leading-7 text-[var(--charcoal)]">
            Discover stories that shape culture, fashion, and lifestyle.
          </p>
          <Link href="/releases" className="magazine-link mt-8">
            Read Edition <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="md:border-l md:border-[var(--line)] md:pl-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--charcoal)]">
            {latest.issue}
          </p>
          <h3 className="font-editorial mt-5 text-4xl leading-none text-[var(--charcoal)]">
            {latest.title}
          </h3>
          <div className="my-5 h-px w-24 bg-[var(--gold)]" />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
            {latest.date}
          </p>
        </div>
      </div>
    </section>
  );
}
