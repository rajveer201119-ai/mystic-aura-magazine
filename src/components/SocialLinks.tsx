const socials = [
  { label: "Facebook", mark: "f", href: "https://www.facebook.com/" },
  { label: "Instagram", mark: "◎", href: "https://www.instagram.com/" },
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
          className={`focus-ring grid size-7 place-items-center rounded-full text-sm font-black transition hover:-translate-y-0.5 ${
            filled
              ? "bg-[var(--gold)] text-white hover:bg-[var(--burgundy)]"
              : "text-[var(--burgundy)] hover:bg-[var(--blush)]"
          }`}
        >
          {social.mark}
        </a>
      ))}
    </div>
  );
}
