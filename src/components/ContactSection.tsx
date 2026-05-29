"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { images } from "@/data/images";

const details = [
  { icon: "☎", label: "Phone", lines: ["+91 8638684096"] },
  { icon: "✉", label: "Email", lines: ["mysticaura.fashion@gmail.com"] },
  {
    icon: "⌖",
    label: "Office Address",
    lines: ["Brindaban Path, House No. 2", "Hatigaon, Guwahati-38, Assam"],
  },
  {
    icon: "◷",
    label: "Working Hours",
    lines: ["Monday - Friday", "10:00 AM - 6:00 PM IST"],
  },
];

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");

  function updateField(field: keyof typeof emptyForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("Please complete all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setForm(emptyForm);
    setStatus("Thank you! Your message has been received.");
  }

  return (
    <>
      <section className="container-shell pt-10 text-center md:pt-16">
        <h1 className="font-editorial text-6xl leading-none text-[var(--burgundy)] md:text-7xl lg:text-8xl">
          Contact Us
        </h1>
        <p className="mt-4 text-base text-[var(--charcoal)] md:text-lg">
          We&apos;d love to hear from you.
        </p>
        <div className="gold-diamond" />
      </section>
      <section className="container-shell grid gap-10 pb-12 pt-4 lg:grid-cols-[1.05fr_1fr_1.05fr] lg:items-start">
        <div className="overflow-hidden bg-[var(--cream)]">
          <Image
            src={images.contact}
            alt="Editorial portrait for Mystic Aura contact"
            width={900}
            height={1100}
            className="image-luxury aspect-[0.82] w-full object-cover"
          />
        </div>
        <div className="space-y-9 lg:pt-8">
          {details.map((detail) => (
            <div key={detail.label} className="grid grid-cols-[52px_1fr] gap-5">
              <div className="grid size-12 place-items-center rounded-full bg-[var(--gold)] text-lg text-white">
                <span aria-hidden="true">{detail.icon}</span>
              </div>
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--charcoal)]">
                  {detail.label}
                </h2>
                <div className="mt-2 space-y-1 text-base leading-6 text-[var(--charcoal)]">
                  {detail.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="border-t hairline pt-6 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0"
        >
          <div className="grid gap-5">
            {[
              { key: "name", label: "Name", placeholder: "Your name", type: "text" },
              { key: "email", label: "Email", placeholder: "Your email", type: "email" },
              {
                key: "subject",
                label: "Subject",
                placeholder: "How can we help?",
                type: "text",
              },
            ].map((field) => (
              <div key={field.key}>
                <label
                  htmlFor={field.key}
                  className="mb-2 block text-sm font-bold text-[var(--charcoal)]"
                >
                  {field.label}
                </label>
                <input
                  id={field.key}
                  type={field.type}
                  value={form[field.key as keyof typeof emptyForm]}
                  onChange={(event) =>
                    updateField(field.key as keyof typeof emptyForm, event.target.value)
                  }
                  placeholder={field.placeholder}
                  className="focus-ring min-h-12 w-full border border-[var(--line)] bg-[rgba(255,250,240,0.8)] px-4 text-sm outline-none"
                  required
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-[var(--charcoal)]"
              >
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Your message"
                className="focus-ring min-h-28 w-full resize-y border border-[var(--line)] bg-[rgba(255,250,240,0.8)] px-4 py-3 text-sm outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="focus-ring min-h-14 bg-[var(--burgundy)] text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[var(--burgundy-dark)]"
            >
              Send Message
            </button>
            {status ? (
              <p className="text-sm font-medium text-[var(--burgundy)]" role="status">
                {status}
              </p>
            ) : null}
          </div>
        </form>
      </section>
      <section className="map-grid relative min-h-56 border-y hairline">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-full bg-[var(--gold)] text-3xl text-white">
            ⌖
          </div>
          <p className="font-editorial mt-3 text-3xl text-[var(--bronze)]">Guwahati</p>
        </div>
      </section>
    </>
  );
}
