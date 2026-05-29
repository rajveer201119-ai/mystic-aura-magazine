"use client";

import { FormEvent, useState } from "react";

export function Newsletter({ floral = false }: { floral?: boolean }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("You're subscribed. Welcome to Mystic Aura.");
    setEmail("");
  }

  return (
    <section
      id="newsletter"
      className="border-y hairline bg-[linear-gradient(90deg,#f9e8df,#fff7ed)]"
    >
      <div className="container-shell relative grid gap-6 py-7 md:grid-cols-[1fr_1.35fr] md:items-center">
        {floral ? (
          <div className="pointer-events-none absolute right-0 top-4 hidden text-7xl text-[rgba(185,133,52,0.16)] lg:block">
            ✧
          </div>
        ) : null}
        <div>
          <h2 className="font-editorial text-4xl leading-none text-[var(--burgundy)]">
            Stay Inspired
          </h2>
          <p className="mt-2 text-[var(--muted)]">Stories in your inbox.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="focus-ring min-h-14 flex-1 border border-[var(--line)] bg-[rgba(255,250,240,0.86)] px-6 text-sm outline-none"
              required
            />
            <button
              type="submit"
              className="focus-ring min-h-14 bg-[var(--burgundy)] px-9 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[var(--burgundy-dark)]"
            >
              Subscribe
            </button>
          </div>
          {message ? (
            <p className="text-sm font-medium text-[var(--burgundy)]" role="status">
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
