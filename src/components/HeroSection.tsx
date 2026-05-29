import Link from "next/link";
import Image from "next/image";
import { images } from "@/data/images";

export function HeroSection() {
  return (
    <section className="container-shell pt-5 md:pt-7">
      <div className="relative overflow-hidden rounded-md border hairline bg-[var(--cream)]">
        <Image
          src={images.hero}
          alt="Editorial fashion portrait in warm light"
          width={1800}
          height={900}
          priority
          className="image-luxury h-[520px] w-full object-cover object-[66%_center] md:h-[590px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,246,232,0.96)_0%,rgba(255,246,232,0.78)_36%,rgba(255,246,232,0.06)_70%)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-8 md:px-24">
            <h1 className="font-editorial text-balance text-[4.2rem] font-semibold uppercase leading-[0.9] text-[var(--burgundy)] md:text-7xl lg:text-[6.7rem]">
              Fashion.
              <br />
              Culture.
              <br />
              Stories.
            </h1>
            <p className="mt-7 max-w-md text-sm font-medium leading-7 text-[var(--charcoal)] md:text-base">
              Mystic Aura is a celebration of fashion, culture, and lifestyle -
              inspiring you to live with authenticity, confidence, and purpose.
            </p>
            <Link href="/releases" className="editorial-button focus-ring mt-8">
              Explore Latest Edition <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
