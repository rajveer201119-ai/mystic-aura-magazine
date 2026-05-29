import Image from "next/image";
import { team } from "@/data/team";

export function TeamSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`bg-[linear-gradient(105deg,#b8e4df_0%,#eef0d8_48%,#ffe1a9_100%)] ${
        compact ? "py-10 md:py-14" : "py-14 md:py-20"
      }`}
    >
      <div className="container-shell">
        <div className="text-center">
          <h1 className="font-editorial text-5xl leading-none text-[var(--burgundy)] md:text-6xl">
            Mystic Aura Team
          </h1>
          <div className="gold-diamond" />
          <p className="text-sm text-[var(--muted)]">Passion. Purpose. Presence.</p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-0">
          {team.map((member, index) => (
            <article
              key={member.name}
              className={`grid gap-8 md:grid-cols-[220px_1fr] md:items-center lg:px-12 ${
                index === 1 ? "lg:border-l lg:border-[var(--line)]" : ""
              }`}
            >
              <div className="mx-auto size-56 overflow-hidden rounded-full border-2 border-[var(--gold)] bg-[var(--cream)] p-1 shadow-[0_0_0_8px_rgba(255,250,244,0.34)]">
                <Image
                  src={member.image}
                  alt={`${member.name} portrait`}
                  width={700}
                  height={700}
                  className="image-luxury size-full rounded-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-editorial text-2xl font-bold uppercase leading-tight text-[var(--burgundy)]">
                  {member.name}
                </h2>
                <p className="mt-2 font-medium text-[var(--charcoal)]">{member.role}</p>
                <div className="my-5 h-px w-24 bg-[var(--gold)]" />
                <p className="text-sm leading-7 text-[var(--charcoal)]">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
