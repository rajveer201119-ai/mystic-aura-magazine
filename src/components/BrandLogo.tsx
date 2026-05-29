import Link from "next/link";

export function BrandLogo() {
  return (
    <Link href="/" className="focus-ring inline-block" aria-label="Mystic Aura home">
      <div className="font-logo text-4xl font-black uppercase leading-none tracking-[-0.06em] text-black md:text-5xl">
        Mystic <span className="text-[var(--gold)]">Aura</span>
      </div>
      <p className="mt-1 text-[0.66rem] font-semibold text-[var(--charcoal)]">
        Fashion and life style magazine
      </p>
    </Link>
  );
}
