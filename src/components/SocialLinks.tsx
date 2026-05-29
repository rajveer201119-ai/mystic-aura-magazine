const socials = [
  { label: "Facebook", mark: "f", href: "https://www.facebook.com/" },
  { label: "Instagram", mark: "ig", href: "https://www.instagram.com/" },
];

export function SocialLinks({ filled = false }: { filled?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noreferrer"
          className={`focus-ring grid size-8 place-items-center rounded-full text-[0.7rem] font-black uppercase transition hover:-translate-y-0.5 ${
            filled
              ? "bg-[var(--gold)] text-white hover:bg-[var(--burgundy)]"
              : "border border-transparent text-[var(--burgundy)] hover:border-[var(--line)] hover:bg-[var(--blush)]"
          }`}
        >
          {social.mark}
        </a>
      ))}
    </div>
  );
}
