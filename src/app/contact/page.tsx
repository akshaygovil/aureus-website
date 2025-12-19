"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa6";
import { EMAIL_ADRESS } from "../assets/constants";

/**
 * Replace these if needed.
 */
const CONTACT = {
  email: EMAIL_ADRESS,
  instagram: "https://www.instagram.com/aureus.gym/",
  tiktok: "https://www.tiktok.com/@yourhandle",
  youtube: "https://www.youtube.com/@yourhandle",
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: "arrow" | "spark" | "mail";
  className?: string;
}) {
  switch (name) {
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <path
            d="M4.5 7.5A3 3 0 0 1 7.5 4.5h9A3 3 0 0 1 19.5 7.5v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6.75 8.25 12 12.25l5.25-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <path
            d="M12 2l1.4 5.2L19 9l-5.6 1.8L12 16l-1.4-5.2L5 9l5.6-1.8L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M5 14l.8 2.8L9 18l-3.2 1.2L5 22l-.8-2.8L1 18l3.2-1.2L5 14Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <path
            d="M7 17 17 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10 7h7v7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function SocialRow({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
}) {
  const host = useMemo(() => {
    try {
      return new URL(href).hostname.replace("www.", "");
    } catch {
      return href;
    }
  }, [href]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group flex items-center justify-between gap-3 rounded-2xl border",
        "border-slate-200 bg-white px-4 py-3 shadow-sm",
        "transition hover:-translate-y-[1px] hover:shadow-md hover:border-slate-300",
        "focus:outline-none focus:ring-2 focus:ring-[#3E5BA9]/20"
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span
          className={cn(
            "grid h-10 w-10 place-items-center rounded-xl border",
            "border-slate-200 bg-slate-50 text-slate-700",
            "transition group-hover:bg-white"
          )}
        >
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900">{label}</p>
          <p className="text-xs text-slate-500 truncate">{host}</p>
        </div>
      </div>

      <span className="text-slate-400 transition group-hover:text-slate-700">
        <Icon name="arrow" />
      </span>
    </a>
  );
}

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      if (!navigator?.clipboard) return;
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7FAFF] text-slate-900">
      {/* Light fitness background (airy + “clean gym” vibe) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* soft top glow */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(62,91,169,0.14),transparent_60%),radial-gradient(900px_520px_at_80%_10%,rgba(233,200,91,0.12),transparent_60%),radial-gradient(900px_520px_at_50%_100%,rgba(16,185,129,0.08),transparent_62%)]" />
        {/* subtle noise */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(rgba(13,27,61,0.8)_1px,transparent_1px)] [background-size:28px_28px]" />
        {/* gentle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/30" />
      </div>

      <section className="relative mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1",
              "border-slate-200 bg-white/70 backdrop-blur",
              "text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-700"
            )}
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[#E9C85B]/25 text-[#8A6B12]">
              <Icon name="spark" className="h-3.5 w-3.5" />
            </span>
            Support & contact
          </div>

          <Link
            href="/"
            className="text-xs font-semibold tracking-wide text-slate-600 transition hover:text-slate-900"
          >
            ← Back
          </Link>
        </div>

        {/* Card */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white/75 backdrop-blur shadow-[0_20px_70px_rgba(13,27,61,0.10)]">
          {/* Header */}
          <div className="relative p-6 sm:p-8">
            {/* small “athletic” accents */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(62,91,169,0.18) 0%, rgba(62,91,169,0) 65%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(233,200,91,0.16) 0%, rgba(233,200,91,0) 65%)",
              }}
            />

            <div className="relative">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl text-slate-900">
                Contact Aureus
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Have a question, found a bug, or want to share feedback? Email is the
                fastest way to reach us.
              </p>

              {/* Email actions */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex items-center justify-between gap-3 rounded-2xl border",
                    "border-slate-200 bg-white px-4 py-3 shadow-sm",
                    "transition hover:-translate-y-[1px] hover:shadow-md hover:border-slate-300",
                    "focus:outline-none focus:ring-2 focus:ring-[#3E5BA9]/20"
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-xl border",
                        "border-slate-200 bg-slate-50 text-slate-700"
                      )}
                    >
                      <FaEnvelope />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500">
                        Email
                      </p>
                      <p className="text-sm font-semibold text-slate-900 truncate">
                        {CONTACT.email}
                      </p>
                    </div>
                  </div>

                  <span className="text-slate-400 transition group-hover:text-slate-700">
                    <Icon name="arrow" />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className={cn(
                    "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3",
                    "text-sm font-semibold text-slate-700 transition",
                    "hover:bg-white hover:text-slate-900 hover:shadow-sm",
                    "focus:outline-none focus:ring-2 focus:ring-[#3E5BA9]/20"
                  )}
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-200" />

          {/* Socials */}
          <div className="p-6 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-500">
              Updates
            </p>
            <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
              Follow along
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-3">
              <SocialRow label="Instagram" href={CONTACT.instagram} icon={<FaInstagram />} />
              <SocialRow label="TikTok" href={CONTACT.tiktok} icon={<FaTiktok />} />
              <SocialRow label="YouTube" href={CONTACT.youtube} icon={<FaYoutube />} />
            </div>

            <p className="mt-5 text-xs text-slate-500">
              For support, email is best.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Aureus</span>
        </footer>
      </section>
    </main>
  );
}
