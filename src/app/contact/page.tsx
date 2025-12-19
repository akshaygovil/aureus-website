"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa6";
import { EMAIL_ADRESS } from "../assets/constants";

/**
 * Replace these.
 */
const CONTACT = {
  email: EMAIL_ADRESS,
  instagram: "https://instagram.com/yourhandle",
  tiktok: "https://www.tiktok.com/@yourhandle",
  youtube: "https://www.youtube.com/@yourhandle",
};

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: "mail" | "instagram" | "tiktok" | "youtube" | "arrow";
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
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <path
            d="M7.5 3.75h9A3.75 3.75 0 0 1 20.25 7.5v9A3.75 3.75 0 0 1 16.5 20.25h-9A3.75 3.75 0 0 1 3.75 16.5v-9A3.75 3.75 0 0 1 7.5 3.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 15.25A3.25 3.25 0 1 0 12 8.75a3.25 3.25 0 0 0 0 6.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M16.75 7.25h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <path
            d="M14 3v11.25a4.75 4.75 0 1 1-4-4.67"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14 3c.5 2.8 2.4 4.8 5 5.15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <path
            d="M10.2 8.6c-2.7.1-4.4.35-5.35.6A2.5 2.5 0 0 0 3 11.6v.8a14.4 14.4 0 0 0 .6 4.4 2.5 2.5 0 0 0 1.75 1.7c1.35.35 3.75.7 6.65.7s5.3-.35 6.65-.7a2.5 2.5 0 0 0 1.75-1.7 14.4 14.4 0 0 0 .6-4.4v-.8a2.5 2.5 0 0 0-1.85-2.4c-1.3-.35-3.7-.7-6.65-.7-.75 0-1.5.02-2.15.05Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M11 10.25 15.5 12 11 13.75v-3.5Z" fill="currentColor" />
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
      className={[
        "group flex items-center justify-between gap-3 rounded-2xl border border-white/10",
        "bg-white/[0.04] px-4 py-3 transition",
        "hover:bg-white/[0.06] hover:border-white/20",
        "focus:outline-none focus:ring-2 focus:ring-white/20",
      ].join(" ")}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{label}</p>
          <p className="text-xs text-white/55 truncate">{host}</p>
        </div>
      </div>
      <span className="text-white/70 transition group-hover:text-white">
        <Icon name="arrow" />
      </span>
    </a>
  );
}

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const mailto = useMemo(() => `mailto:${CONTACT.email}`, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070B18] text-white">
      {/* Mobile-friendly, lighter background effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_10%_10%,rgba(62,91,169,0.38),transparent_60%),radial-gradient(900px_520px_at_90%_20%,rgba(233,200,91,0.18),transparent_60%),radial-gradient(900px_520px_at_50%_95%,rgba(138,148,166,0.14),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/35" />
      </div>

      <section className="relative mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/75">
            <span className="h-2 w-2 rounded-full bg-[#E9C85B]" />
            Contact
          </div>

          <Link
            href="/"
            className="text-xs font-semibold tracking-wide text-white/70 transition hover:text-white"
          >
            ← Back
          </Link>
        </div>

        {/* Content card */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_30px_110px_rgba(0,0,0,0.55)]">
          {/* Header */}
          <div className="relative p-6 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(62,91,169,0.52) 0%, rgba(62,91,169,0) 65%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(233,200,91,0.30) 0%, rgba(233,200,91,0) 65%)",
              }}
            />

            <div className="relative">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Get in touch
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                For support, feedback, or business — email is the only contact
                method.
              </p>

              {/* Email actions (stack on mobile, row on larger) */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
                <a
                  href={mailto}
                  className={[
                    "group flex items-center justify-between gap-3 rounded-2xl border border-white/12",
                    "bg-gradient-to-b from-white/10 to-white/[0.06] px-4 py-3",
                    "shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition",
                    "hover:-translate-y-[1px] hover:border-white/25",
                    "focus:outline-none focus:ring-2 focus:ring-white/20",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/90">
                      <FaEnvelope />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">
                        Email
                      </p>
                      <p className="text-sm font-semibold text-white truncate">
                        {CONTACT.email}
                      </p>
                    </div>
                  </div>
                  <span className="text-white/70 transition group-hover:text-white">
                    <Icon name="arrow" />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className={[
                    "rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3",
                    "text-sm font-semibold text-white/85 transition",
                    "hover:bg-white/[0.06] hover:text-white",
                    "focus:outline-none focus:ring-2 focus:ring-white/20",
                  ].join(" ")}
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </div>

              <p className="mt-3 text-xs text-white/55">
                If you want a reply, include your goal + any context.
              </p>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          {/* Socials */}
          <div className="p-6 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60">
              Social
            </p>
            <h2 className="mt-2 text-lg font-semibold tracking-tight text-white">
              Follow updates
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Releases, clips, and progress — posted here.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3">
              <SocialRow
                label="Instagram"
                href={CONTACT.instagram}
                icon={<FaInstagram />}
              />
              <SocialRow
                label="TikTok"
                href={CONTACT.tiktok}
                icon={<FaTiktok />}
              />
              <SocialRow
                label="YouTube"
                href={CONTACT.youtube}
                icon={<FaYoutube />}
              />
            </div>

            <p className="mt-5 text-xs text-white/55">
              DMs aren’t monitored — email is best.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-white/45">Navy • Gold accent</span>
        </footer>
      </section>
    </main>
  );
}
