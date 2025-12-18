"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap, AlertTriangle } from "lucide-react";

type HeroCTA = { label: string; href: string };
type Snippet = { src: string; alt?: string };

type WarningPanel = {
  label?: string; // "WARNING"
  body?: string;
};

type Brand = {
  /** App icon/logo (square works best). Example: "/brand/logo.png" */
  logoSrc?: string;
  /** Alt text for the logo image */
  logoAlt?: string;
  /** App name text */
  name?: string;
  /** Where the logo/name should link (usually "/") */
  href?: string;
};

type HeroProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;

  /** Header brand (logo + name) */
  brand?: Brand;

  /** Header CTA (also used as main primary CTA by default) */
  primaryCta?: HeroCTA;
  secondaryCta?: HeroCTA;

  /** Panel[0] + Panel[1] are images. Panel[2] is a warning-style callout (rendered by WarningCalloutPanel). */
  panels?: [Snippet, Snippet, Snippet];

  /** Content for the warning-style callout (panel[2]) */
  warning?: WarningPanel;

  className?: string;
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/** Strictly-typed easings (Framer Motion v11+) */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];

function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* softer, larger grid (less busy) */}
      <div
        className="absolute inset-0 opacity-[0.065]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(13,27,61,0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(13,27,61,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* premium glows */}
      <div
        className="absolute -top-48 left-1/2 h-[860px] w-[1220px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, rgba(62,91,169,0.30), rgba(255,255,255,0))",
        }}
      />
      <div
        className="absolute -bottom-72 left-[6%] h-[720px] w-[720px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, rgba(201,162,39,0.24), rgba(255,255,255,0))",
        }}
      />
      <div
        className="absolute -bottom-80 right-[4%] h-[900px] w-[900px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, rgba(13,27,61,0.16), rgba(255,255,255,0))",
        }}
      />

      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/55" />
    </div>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[12px] font-medium text-[#0D1B3D] shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur">
      <span className="grid place-items-center">{icon}</span>
      <span className="tracking-tight">{label}</span>
    </div>
  );
}

function GlassImagePanel({
  src,
  alt,
  tilt,
  aspect,
  floatDelay = 0,
  className,
  priority,
  prominence = "primary",
}: {
  src: string;
  alt: string;
  tilt: number;
  aspect: number; // width / height
  floatDelay?: number;
  className?: string;
  priority?: boolean;
  prominence?: "primary" | "secondary";
}) {
  const reduce = useReducedMotion();

  const shadow =
    prominence === "primary"
      ? "shadow-[0_60px_190px_rgba(13,27,61,0.34)]"
      : "shadow-[0_44px_150px_rgba(13,27,61,0.24)]";

  const border = prominence === "primary" ? "border-white/55" : "border-white/40";

  return (
    <motion.div
      initial={
        reduce
          ? undefined
          : { opacity: 0, y: 18, rotate: tilt * 0.6, scale: prominence === "primary" ? 0.992 : 0.988 }
      }
      animate={reduce ? undefined : { opacity: 1, y: 0, rotate: tilt, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.12 + floatDelay }}
      className={cn("relative", className)}
    >
      {/* glow bed */}
      <div
        aria-hidden
        className={cn("absolute rounded-[40px] blur-2xl", prominence === "primary" ? "-inset-12" : "-inset-10")}
        style={{
          background:
            prominence === "primary"
              ? "radial-gradient(closest-side, rgba(201,162,39,0.36), rgba(62,91,169,0.24), rgba(255,255,255,0))"
              : "radial-gradient(closest-side, rgba(201,162,39,0.22), rgba(62,91,169,0.18), rgba(255,255,255,0))",
        }}
      />

      <motion.div
        className={cn("relative rounded-[32px] border bg-white/45 backdrop-blur-xl", border, shadow)}
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={reduce ? undefined : { duration: 7.2, repeat: Infinity, ease: EASE_IN_OUT, delay: floatDelay }}
      >
        <div
          aria-hidden
          className="absolute inset-0 rounded-[32px] opacity-[0.86]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.22) 36%, rgba(255,255,255,0.06) 72%, rgba(255,255,255,0.26) 100%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 rounded-[32px] ring-1 ring-black/10" />

        <div className="relative m-2 overflow-hidden rounded-[28px]" style={{ aspectRatio: `${aspect} / 1` }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 94vw, (max-width: 1024px) 48vw, 900px"
            className="select-none object-cover"
            priority={priority}
          />
        </div>

        {/* tiny chrome dots */}
        <div aria-hidden className="absolute left-4 top-4 flex gap-1.5 opacity-70">
          <span className="h-2 w-2 rounded-full bg-black/20" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/10" />
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Panel[2] — warning card (auto-height; never clips)
 */
function WarningCalloutPanel({
  label = "WARNING",
  body = "You experienced a significant drop in training volume for the Lats, down 2,737.5 kg from last week, with only 16.5 sets logged this week.",
  tilt = 6,
  floatDelay = 0.32,
  className,
}: {
  label?: string;
  body?: string;
  tilt?: number;
  floatDelay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 16, rotate: tilt * 0.6, scale: 0.99 }}
      animate={reduce ? undefined : { opacity: 1, y: 0, rotate: tilt, scale: 1 }}
      transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.12 + floatDelay }}
      className={cn("relative", className)}
    >
      <motion.div
        className="relative"
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={reduce ? undefined : { duration: 7.4, repeat: Infinity, ease: EASE_IN_OUT, delay: floatDelay }}
      >
        <div
          aria-hidden
          className="absolute -inset-10 rounded-[42px] blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(239,143,143,0.30), rgba(201,162,39,0.10), rgba(255,255,255,0))",
          }}
        />

        <div
          className="relative rounded-[34px] p-[1px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(239,143,143,0.58) 0%, rgba(239,143,143,0.20) 38%, rgba(13,27,61,0.10) 100%)",
            boxShadow: "0 34px 110px rgba(13,27,61,0.16)",
          }}
        >
          <div
            className={cn("relative overflow-hidden rounded-[33px] min-h-[120px] md:min-h-[140px]", className)}
            style={{
              background: "linear-gradient(180deg, #FFF4F4 0%, #FDEEEE 100%)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 z-0 opacity-[0.55]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.76) 0%, rgba(255,255,255,0.26) 32%, rgba(255,255,255,0.06) 72%, rgba(255,255,255,0.18) 100%)",
              }}
            />

            <div
              aria-hidden
              className="absolute inset-[10px] z-0 rounded-[26px]"
              style={{ border: "2px solid rgba(239, 143, 143, 0.22)" }}
            />

            <div
              aria-hidden
              className="absolute left-0 top-0 z-0 h-24 w-40 -translate-x-12 -translate-y-10 rotate-12 rounded-full blur-2xl"
              style={{ background: "radial-gradient(closest-side, rgba(239,143,143,0.28), rgba(255,255,255,0))" }}
            />
            <div
              aria-hidden
              className="absolute bottom-0 right-0 z-0 h-28 w-48 translate-x-12 translate-y-10 -rotate-12 rounded-full blur-2xl"
              style={{ background: "radial-gradient(closest-side, rgba(13,27,61,0.12), rgba(255,255,255,0))" }}
            />

            <div className="relative z-10 flex w-full gap-3 p-[clamp(16px,2.0vw,26px)]">
              <div className="mt-[2px] grid h-9 w-9 flex-none place-items-center rounded-2xl border border-[#EF8F8F]/30 bg-white/55 backdrop-blur">
                <AlertTriangle className="h-4 w-4 text-[#E45A5A]" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div
                    className="text-[clamp(11px,1.05vw,13px)] font-extrabold tracking-[0.22em]"
                    style={{ color: "#E45A5A" }}
                  >
                    {label}
                  </div>
                  <div
                    aria-hidden
                    className="h-px flex-1"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(228,90,90,0.40) 0%, rgba(228,90,90,0.10) 55%, rgba(228,90,90,0) 100%)",
                    }}
                  />
                </div>

                <div
                  className="mt-[clamp(8px,1.0vw,12px)] text-pretty text-[clamp(16px,1.55vw,23px)] leading-[1.22]"
                  style={{ color: "#0D1B3D", fontWeight: 650 }}
                >
                  {body}
                </div>
              </div>
            </div>

            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/35 to-transparent" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeaderBar({
  brand,
  cta,
}: {
  brand: Required<Pick<Brand, "href" | "name" | "logoSrc" | "logoAlt">>;
  cta: HeroCTA;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.header
      initial={reduce ? undefined : { opacity: 0, y: -10 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: EASE_OUT, delay: 0.02 }}
      className="sticky top-0 z-50"
    >
      {/* glass bar */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mt-3 rounded-2xl border border-black/10 bg-white/65 backdrop-blur-xl shadow-[0_10px_60px_rgba(13,27,61,0.08)]">
          <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4">
            {/* Brand */}

            <Link href={brand.href} className="group flex min-w-0 items-center gap-2">
              {/* Logo (A) — completely clean */}
              <span className="relative h-10 w-10 flex-none overflow-hidden rounded-2xl bg-white">
                <Image
                  src={brand.logoSrc}
                  alt={brand.logoAlt}
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </span>

              {/* Wordmark (no A) */}
              <span className="min-w-0">
                <span className="block truncate text-[18px] font-extrabold tracking-[-0.02em] sm:text-[20px]">
                  <span
                    className="
                      bg-gradient-to-r from-[#E0C36A] via-[#BFA24A] to-[#8F6A12]
                      bg-clip-text text-transparent
                      transition-[filter,transform] duration-300
                      group-hover:brightness-110 group-hover:saturate-110
                    "
                  >
                    ureus
                  </span>
                </span>
              </span>
            </Link>

            {/* CTA (single button) */}
            <Link
              href={cta.href}
              className="inline-flex flex-none items-center justify-center rounded-2xl bg-[#0D1B3D] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_44px_rgba(13,27,61,0.20)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_56px_rgba(13,27,61,0.26)] focus:outline-none focus:ring-2 focus:ring-[#0D1B3D]/30"
            >
              <span className="hidden sm:inline">{cta.label}</span>
              <span className="sm:hidden">Waitlist</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* thin separator glow */}
      <div aria-hidden className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </motion.header>
  );
}

export default function HeroLandingAbstract({
  brand = { logoSrc: "/brand/logo.png", logoAlt: "Aureus logo", name: "Aureus", href: "/" },
  eyebrow = "AUREUS • PREMIUM TRAINING LOG",
  title = "Train with zero friction.",
  subtitle = "A calmer, faster way to log workouts — built for lifters who care about details. Clean UI, powerful insights, and an experience that stays out of your way.",
  primaryCta = { label: "Join the waitlist", href: "#waitlist" },
  secondaryCta = { label: "See features", href: "#features" },
  panels = [
    { src: "/snippets/hero-a.jpg", alt: "Panel 0" }, // 1.38 (most prominent)
    { src: "/snippets/hero-b.jpg", alt: "Panel 1" }, // 0.89
    { src: "/snippets/hero-c.jpg", alt: "Panel 2" }, // unused (warning card renders instead)
  ],
  warning,
  className,
}: HeroProps) {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0): MotionProps =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE_OUT, delay },
        };

  const A0 = 1.38;
  const A1 = 0.89;

  const safeBrand = {
    href: brand?.href ?? "/",
    name: brand?.name ?? "Aureus",
    logoSrc: brand?.logoSrc ?? "/brand/logo.png",
    logoAlt: brand?.logoAlt ?? "Aureus logo",
  } as const;

  return (
    <section className={cn("relative w-full overflow-hidden bg-white", className)}>
      <AmbientBackground />

      {/* HEADER (logo + name, single CTA on right) */}
      <HeaderBar brand={safeBrand} cta={primaryCta} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* slightly tighter top padding because header exists */}
        <div className="grid items-center gap-10 pb-16 pt-10 sm:pb-20 sm:pt-12 lg:grid-cols-12 lg:gap-14 lg:pb-24 lg:pt-16">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-[#0D1B3D] shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                {eyebrow}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#0D1B3D] sm:text-5xl md:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#516079] sm:text-lg"
            >
              {subtitle}
            </motion.p>

            {/* Keep both CTAs in the hero (header only has 1 CTA, per your request) */}
            <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D1B3D] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_44px_rgba(13,27,61,0.24)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_56px_rgba(13,27,61,0.28)] focus:outline-none focus:ring-2 focus:ring-[#0D1B3D]/30"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#0D1B3D] shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D1B3D]/20"
              >
                {secondaryCta.label}
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.32)} className="mt-7 flex flex-wrap gap-2">
              <Badge icon={<Zap className="h-4 w-4 text-[#C9A227]" />} label="Fast logging" />
              <Badge icon={<ShieldCheck className="h-4 w-4 text-[#0D1B3D]" />} label="Built for consistency" />
              <Badge icon={<Sparkles className="h-4 w-4 text-[#3E5BA9]" />} label="Premium insights" />
            </motion.div>

            <motion.p {...fadeUp(0.4)} className="mt-8 max-w-xl text-sm text-[#6E7A8C]">
              Built to feel premium from day one — smooth interactions, thoughtful details, and zero clutter.
            </motion.p>
          </div>

          {/* RIGHT (recomposed to be bigger + more dominant) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[980px]">
              {/* faint orbit ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5 md:block"
              />

              {/* Mobile: stacked and LARGE */}
              <div className="flex flex-col gap-6 md:hidden">
                <GlassImagePanel
                  src={panels[0].src}
                  alt={panels[0].alt ?? "Panel 0"}
                  aspect={A0}
                  tilt={-7}
                  floatDelay={0}
                  prominence="primary"
                  priority
                />
                <GlassImagePanel
                  src={panels[1].src}
                  alt={panels[1].alt ?? "Panel 1"}
                  aspect={A1}
                  tilt={6}
                  floatDelay={0.12}
                  prominence="secondary"
                />
                <WarningCalloutPanel
                  label={warning?.label ?? "WARNING"}
                  body={
                    warning?.body ??
                    "You experienced a significant drop in training volume for the Lats, down 2,737.5 kg from last week, with only 16.5 sets logged this week."
                  }
                  tilt={4}
                  floatDelay={0.18}
                />
              </div>

              {/* Desktop: big hero collage (fills the column) */}
              <div className="relative hidden md:block md:min-h-[780px] lg:min-h-[860px]">
                {/* Panel 0 — the hero: huge, anchored left */}
                <div className="absolute left-0 top-0 z-30 w-[76%] lg:w-[78%]">
                  <GlassImagePanel
                    src={panels[0].src}
                    alt={panels[0].alt ?? "Panel 0"}
                    aspect={A0}
                    tilt={-10}
                    floatDelay={0}
                    prominence="primary"
                    priority
                  />
                </div>

                {/* Panel 1 — secondary: overlaps the right edge, larger than before */}
                <div className="absolute right-0 top-[14%] z-20 w-[50%] lg:top-[16%] lg:w-[52%]">
                  <GlassImagePanel
                    src={panels[1].src}
                    alt={panels[1].alt ?? "Panel 1"}
                    aspect={A1}
                    tilt={8}
                    floatDelay={0.16}
                    prominence="secondary"
                  />
                </div>

                {/* Warning — least prominent: tucked bottom-right, smaller but still readable */}
                <div className="absolute bottom-0 right-[2%] z-10 w-[68%] origin-bottom-right scale-[0.84] lg:w-[70%] lg:scale-[0.82]">
                  <WarningCalloutPanel
                    label={warning?.label ?? "WARNING"}
                    body={
                      warning?.body ??
                      "You experienced a significant drop in training volume for the Lats, down 2,737.5 kg from last week, with only 16.5 sets logged this week."
                    }
                    tilt={6}
                    floatDelay={0.28}
                  />
                </div>

                {/* subtle connector line (adds “designed” feel without clutter) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-[18%] top-[62%] h-px w-[520px] opacity-80"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(201,162,39,0) 0%, rgba(201,162,39,0.62) 42%, rgba(62,91,169,0.18) 100%)",
                  }}
                />
              </div>

              <div className="mt-5 text-center text-xs text-[#6E7A8C]">
                Big visuals first — then a real warning to prove the “insights” story.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden className="relative h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}
