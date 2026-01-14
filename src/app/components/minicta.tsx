"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type StoreLink = {
  href: string;
  kicker: string;
  label: string;
  ariaLabel: string;
  variant: "apple" | "google";
};

type MainCTASectionProps = {
  id?: string;
  heading?: string;
  subheading?: string;
  className?: string;

  apple?: { href: string };
  google?: { href: string };

  rating?: number; // e.g. 4.5
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/* ---------- Icons ---------- */

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.55 13.02c.02 2.22 1.95 2.96 1.97 2.97-.01.05-.3 1.04-1.01 2.06-.61.89-1.25 1.78-2.24 1.8-.97.02-1.29-.58-2.4-.58-1.11 0-1.47.56-2.39.6-.96.04-1.69-.96-2.31-1.85-1.25-1.81-2.21-5.1-.92-7.33.64-1.1 1.79-1.8 3.03-1.82.95-.02 1.84.64 2.4.64.56 0 1.61-.79 2.71-.67.46.02 1.76.19 2.59 1.45-.07.04-1.55.9-1.53 2.73ZM14.86 4.31c.51-.62.86-1.48.77-2.34-.73.03-1.62.49-2.15 1.11-.47.55-.89 1.43-.78 2.28.82.06 1.64-.41 2.16-1.05Z" />
    </svg>
  );
}

function GooglePlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3.8 2.5c-.5.3-.8.9-.8 1.6v15.8c0 .7.3 1.3.8 1.6l9-10-9-9Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M14 12 3.8 2.5c.3-.2.7-.3 1.1-.1l13.1 7.5L14 12Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M18 14.1 5 21.6c-.4.2-.8.2-1.1-.1L14 12l4 2.1Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M20.2 12.8c.5-.3.8-.7.8-1.3s-.3-1-.8-1.3L18 10l-4 2 4 2 .2-.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---------- Rating ---------- */

function Star({
  fill = 0,
  className,
}: {
  /** 0..1 */
  fill?: number;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(1, fill));
  return (
    <span className={cn("relative inline-block h-4 w-4", className)}>
      <svg viewBox="0 0 24 24" className="absolute inset-0 h-4 w-4" aria-hidden="true">
        <path
          d="M12 17.3 18.2 21l-1.7-7.1 5.5-4.7-7.2-.6L12 2l-2.8 6.6-7.2.6 5.5 4.7L5.8 21 12 17.3Z"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>

      <span className="absolute inset-0 overflow-hidden" style={{ width: `${clamped * 100}%` }}>
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            d="M12 17.3 18.2 21l-1.7-7.1 5.5-4.7-7.2-.6L12 2l-2.8 6.6-7.2.6 5.5 4.7L5.8 21 12 17.3Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </span>
  );
}

function RatingRow({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const v = rating - i;
    return Math.max(0, Math.min(1, v));
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-[#0D1B3D]">
        {stars.map((f, idx) => (
          <Star key={idx} fill={f} />
        ))}
      </div>
      <div className="text-sm font-semibold text-[#0D1B3D]">{rating.toFixed(1)}</div>
    </div>
  );
}

/* ---------- Buttons ---------- */

function StoreButton({ link }: { link: StoreLink }) {
  const isApple = link.variant === "apple";

  return (
    <Link
      href={link.href}
      aria-label={link.ariaLabel}
      target="_blank"
      className={cn(
        "group relative inline-flex w-full items-center justify-center gap-3",
        "rounded-2xl px-5 py-4 sm:px-6",
        "transition-all duration-200",
        "hover:-translate-y-0.5 active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
        "shadow-[0_14px_44px_rgba(3,10,35,0.24)] hover:shadow-[0_22px_70px_rgba(3,10,35,0.30)]"
      )}
    >
      {/* Minimal, premium fills */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-2xl",
          isApple
            ? "bg-[linear-gradient(135deg,#0B1022_0%,#101B3A_60%,#0B1022_100%)]"
            : "bg-[linear-gradient(135deg,#F6E7A8_0%,#E9C46A_40%,#D4AF37_75%,#B88A1E_100%)]"
        )}
      />

      {/* Subtle highlight */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-[1px] rounded-[15px] opacity-80",
          isApple
            ? "bg-[radial-gradient(120%_90%_at_20%_10%,rgba(255,255,255,0.16),transparent_55%)]"
            : "bg-[radial-gradient(120%_90%_at_20%_10%,rgba(255,255,255,0.42),transparent_55%)]"
        )}
      />

      {/* Hairline border */}
      <span
        aria-hidden
        className={cn("absolute inset-0 rounded-2xl ring-1", isApple ? "ring-white/12" : "ring-black/10")}
      />

      <span className="relative flex items-center gap-3">
        <span
          className={cn(
            "grid h-10 w-10 place-items-center rounded-xl",
            isApple ? "bg-white/10 text-white" : "bg-black/10 text-[#0D1B3D]"
          )}
        >
          {isApple ? <AppleIcon className="h-5 w-5" /> : <GooglePlayIcon className="h-5 w-5" />}
        </span>

        <span className="flex flex-col items-start leading-tight">
          <span className={cn("text-[12px] font-medium tracking-wide", isApple ? "text-white/70" : "text-[#0D1B3D]/70")}>
            {link.kicker}
          </span>
          <span className={cn("text-[16px] font-semibold tracking-tight", isApple ? "text-white" : "text-[#0D1B3D]")}>
            {link.label}
          </span>
        </span>
      </span>
    </Link>
  );
}

/* ---------- Main Section ---------- */

export default function MainCTASection({
  id = "download",
  heading = "Free to download. Powerful when you need it.",
  subheading = "Use Aureus for free. Upgrade to unlock deeper feedback and analysis only if and when you want it.",
  className,
  apple = { href: "#" },
  google = { href: "https://play.google.com/store/apps/details?id=com.aureus.app" },
  rating = 4.5,
}: MainCTASectionProps) {
  const reduce = useReducedMotion();

  const variants: Variants = reduce
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
      };

  const item: Variants = reduce
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
      };

  const links: StoreLink[] = [
    {
      href: apple.href,
      kicker: "Download on the",
      label: "App Store",
      ariaLabel: "Download Aureus on the App Store",
      variant: "apple",
    },
    {
      href: google.href,
      kicker: "GET IT ON",
      label: "Google Play",
      ariaLabel: "Get Aureus on Google Play",
      variant: "google",
    },
  ];

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        // Taller section (feels like a hero)
        "py-20 sm:py-28 md:py-32",
        className
      )}
    >
      {/* Blue background (no grid) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Deep blue base */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#06122D_0%,#071A3F_55%,#071735_100%)]" />

        {/* Soft highlights */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_560px_at_50%_-10%,rgba(120,160,255,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(860px_560px_at_15%_35%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(860px_520px_at_85%_55%,rgba(212,175,55,0.10),transparent_62%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className={cn(
            "mx-auto max-w-3xl text-center",
            "rounded-[30px] bg-white/8 backdrop-blur-xl",
            "ring-1 ring-white/12",
            "shadow-[0_24px_110px_rgba(0,0,0,0.35)]",
            // Taller card
            "px-6 py-14 sm:px-10 sm:py-16 md:py-18"
          )}
        >
          <motion.h2
            variants={item}
            className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl mx-auto text-[15px] sm:text-base leading-relaxed text-white/70"
          >
            {subheading}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex justify-center">
            <div className="rounded-2xl bg-white/10 px-4 py-2.5 ring-1 ring-white/12">
              <div className="text-white">
                <RatingRow rating={rating} />
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-9">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {links.map((l) => (
                <StoreButton key={l.variant} link={l} />
              ))}
            </div>

            <div className="mt-5 text-center text-[12px] leading-relaxed text-white/60">
              Free to try. Upgrade anytime.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
