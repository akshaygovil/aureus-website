"use client";

import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-black/10 bg-white text-[#0D1B3D]">
      {/* Ambient premium background (on WHITE) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_720px_at_50%_-260px,rgba(62,91,169,0.16),transparent_60%),radial-gradient(900px_650px_at_0%_120%,rgba(233,200,91,0.18),transparent_62%),radial-gradient(900px_650px_at_100%_120%,rgba(13,27,61,0.08),transparent_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(255,255,255,0.65)_40%,rgba(255,255,255,1))]" />
      </div>

      <footer className="relative w-full overflow-hidden border-t border-black/[0.03] bg-white text-[#0D1B3D]"/>

      {/* FULL-WIDTH container */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Main row */}
        <div className="grid gap-10 py-10 sm:py-12 lg:py-14 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* Brand block */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-black/10 bg-white shadow-[0_24px_80px_rgba(13,27,61,0.12)]">
                <span className="text-lg font-semibold tracking-tight text-[#0D1B3D]">
                  A
                </span>

                {/* gold halo */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-70 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(233,200,91,0.30) 0%, rgba(233,200,91,0.0) 62%)",
                  }}
                />
              </div>

              <div className="leading-tight">
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0D1B3D]">
                  Aureus
                </div>
                <div className="mt-1 text-xs sm:text-sm text-[#8A94A6]">
                  Premium training. Clean analytics.
                </div>
              </div>
            </div>

            <p className="max-w-[56rem] text-sm sm:text-base lg:text-lg leading-relaxed text-[#0D1B3D]/75">
              Built for lifters who care about clarity, progression, and design —
              a training experience that feels genuinely premium.
            </p>

            {/* Socials */}
            <div className="flex flex-wrap items-center gap-3">
              <SocialIcon
                href="mailto:your@email.com"
                label="Email"
                icon={<FaEnvelope />}
              />
              <SocialIcon
                href="https://instagram.com/aureus.gym"
                label="Instagram"
                icon={<FaInstagram />}
              />
              <SocialIcon
                href="https://tiktok.com/@yourhandle"
                label="TikTok"
                icon={<FaTiktok />}
              />
              <SocialIcon
                href="https://youtube.com/@yourhandle"
                label="YouTube"
                icon={<FaYoutube />}
              />
            </div>
          </div>

          {/* Links — blended, no rectangle */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-4">
              <div className="text-xs sm:text-sm font-semibold tracking-tight text-[#0D1B3D]">
                Pages
              </div>
              <div className="flex flex-col gap-3 text-sm sm:text-base">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs sm:text-sm font-semibold tracking-tight text-[#0D1B3D]">
                Legal
              </div>
              <div className="flex flex-col gap-3 text-sm sm:text-base">
                <FooterLink href="/privacy_policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms_of_service">Terms of Service</FooterLink>
              </div>
            </div>

            {/* Mobile divider */}
            <div className="col-span-2 lg:hidden mt-2 h-px w-full bg-black/10" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-black/10 py-7 sm:py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-xs sm:text-sm text-[#8A94A6]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#0D1B3D]">Aureus</span> — Strong design. Stronger
            training.
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
            <Link
              href="/privacy_policy"
              className="text-[#0D1B3D]/65 hover:text-[#3E5BA9] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms_of_service"
              className="text-[#0D1B3D]/65 hover:text-[#3E5BA9] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-[#0D1B3D]/65 hover:text-[#3E5BA9] transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        group inline-flex w-fit items-center gap-2
        text-[#0D1B3D]/70 hover:text-[#0D1B3D] transition-colors
      "
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#E9C85B]/95 transition-all duration-300 group-hover:w-full" />
      </span>
      <span className="text-[#C9A227] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        →
      </span>
    </Link>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      aria-label={label}
      className="
        relative group inline-flex h-11 w-11 items-center justify-center rounded-2xl
        border border-black/10 bg-white
        shadow-[0_22px_70px_rgba(13,27,61,0.12)]
        transition-all
        hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[0_28px_90px_rgba(13,27,61,0.16)]
        active:translate-y-0
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3E5BA9]/25
      "
    >
      <span className="text-[18px] text-[#0D1B3D]/85 transition-colors group-hover:text-[#3E5BA9]">
        {icon}
      </span>

      {/* gold halo */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(233,200,91,0.24) 0%, rgba(233,200,91,0.0) 65%)",
        }}
      />
    </a>
  );
}
