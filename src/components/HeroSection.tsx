import Link from "next/link";
import Image from "next/image";
import { images } from "@/data/images";

export function HeroSection() {
  return (
    <section className="container-shell pt-6 md:pt-8">
      <div className="relative overflow-hidden rounded-lg border hairline bg-[var(--cream)]">
        <Image
          src={images.hero}
          alt="Editorial fashion portrait in warm light"
          width={1800}
          height={900}
          priority
          className="image-luxury h-[560px] w-full object-cover object-[65%_center] md:h-[590px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,246,232,0.94)_0%,rgba(255,246,232,0.74)_34%,rgba(255,246,232,0.08)_68%)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-8 md:px-24">
            <h1 className="font-editorial text-balance text-6xl font-semibold uppercase leading-[0.96] text-[var(--burgundy)] md:text-7xl lg:text-8xl">
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
              Explore Latest Edition <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
