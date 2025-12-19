"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";

type HeroCTA = { label: string; href: string };
type Snippet = { src: string; alt?: string };

type Brand = {
  logoSrc?: string;
  logoAlt?: string;
  name?: string;
  href?: string;
};

type HeroProps = {
  brand?: Brand;
  primaryCta?: HeroCTA;
  secondaryCta?: HeroCTA;
  panels?: [Snippet, Snippet];
  className?: string;
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/** Strictly-typed easings (Framer Motion v11+) */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];

function RotatingTypeCaps({
  words,
  prefix = "TRACK YOUR ",
  className,
  prefixClassName,
  wordClassName,
  caretClassName,
  typeMs = 62,
  deleteMs = 44,
  holdMs = 1650,
  gapMs = 520,
}: {
  words: string[];
  prefix?: string;

  /** wrapper */
  className?: string;

  /** style only for prefix */
  prefixClassName?: string;

  /** style only for the rotating word */
  wordClassName?: string;

  caretClassName?: string;
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
  gapMs?: number;
}) {
  const reduce = useReducedMotion();

  const [wordIndex, setWordIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [phase, setPhase] = React.useState<"typing" | "holding" | "deleting" | "gap">("typing");

  const current = (words[wordIndex] ?? "").toUpperCase();

  React.useEffect(() => {
    if (reduce) return;

    if (phase === "typing") {
      if (subIndex >= current.length) {
        const t = window.setTimeout(() => setPhase("holding"), holdMs);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(() => setSubIndex((i) => i + 1), typeMs);
      return () => window.clearTimeout(t);
    }

    if (phase === "holding") {
      const t = window.setTimeout(() => setPhase("deleting"), holdMs);
      return () => window.clearTimeout(t);
    }

    if (phase === "deleting") {
      if (subIndex <= 0) {
        setPhase("gap");
        return;
      }
      const t = window.setTimeout(() => setSubIndex((i) => i - 1), deleteMs);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setWordIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }, gapMs);
    return () => window.clearTimeout(t);
  }, [reduce, phase, subIndex, current.length, typeMs, deleteMs, holdMs, gapMs, words.length]);

  const shown = current.slice(0, subIndex);

  if (reduce) {
    return (
      <div className={cn("inline-flex flex-wrap items-baseline gap-2", className)}>
        <span className={cn("font-extrabold tracking-[0.26em] uppercase", prefixClassName)}>{prefix}</span>
        <span className={cn("font-extrabold tracking-[0.26em] uppercase", wordClassName)}>{(words[0] ?? "WORKOUTS").toUpperCase()}</span>
      </div>
    );
  }

  return (
    <div className={cn("inline-flex flex-wrap items-baseline gap-2", className)}>
      <span className={cn("font-extrabold tracking-[0.26em] uppercase", prefixClassName)}>{prefix}</span>

      <span aria-hidden className="inline-flex items-baseline">
        <span className={cn("font-extrabold tracking-[0.26em] uppercase", wordClassName)}>{shown}</span>
        <span
          className={cn(
            "ml-1 inline-block h-[0.95em] w-[1.5px] translate-y-[1px] rounded-full",
            reduce ? "" : "animate-[caretBlink_1.25s_steps(1,end)_infinite]",
            caretClassName
          )}
          style={{ backgroundColor: "currentColor" }}
        />
      </span>

      <span className="sr-only">
        {prefix}
        {(words[0] ?? "WORKOUTS").toUpperCase()}
      </span>
    </div>
  );
}

function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(13,27,61,0.48) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(13,27,61,0.48) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="absolute -top-52 left-1/2 h-[900px] w-[1280px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, rgba(62,91,169,0.28), rgba(255,255,255,0))",
        }}
      />
      <div
        className="absolute -bottom-72 left-[6%] h-[720px] w-[720px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, rgba(201,162,39,0.22), rgba(255,255,255,0))",
        }}
      />
      <div
        className="absolute -bottom-80 right-[4%] h-[920px] w-[920px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, rgba(13,27,61,0.16), rgba(255,255,255,0))",
        }}
      />

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
  aspect: number;
  floatDelay?: number;
  className?: string;
  priority?: boolean;
  prominence?: "primary" | "secondary";
}) {
  const reduce = useReducedMotion();

  const shadow =
    prominence === "primary"
      ? "shadow-[0_52px_170px_rgba(13,27,61,0.30)]"
      : "shadow-[0_40px_140px_rgba(13,27,61,0.22)]";

  const border = prominence === "primary" ? "border-white/55" : "border-white/40";

  return (
    <motion.div
      initial={
        reduce
          ? undefined
          : { opacity: 0, y: 16, rotate: tilt * 0.6, scale: prominence === "primary" ? 0.992 : 0.988 }
      }
      animate={reduce ? undefined : { opacity: 1, y: 0, rotate: tilt, scale: 1 }}
      transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.10 + floatDelay }}
      className={cn("relative", className)}
    >
      <div
        aria-hidden
        className={cn("absolute rounded-[40px] blur-2xl", prominence === "primary" ? "-inset-10" : "-inset-9")}
        style={{
          background:
            prominence === "primary"
              ? "radial-gradient(closest-side, rgba(201,162,39,0.30), rgba(62,91,169,0.20), rgba(255,255,255,0))"
              : "radial-gradient(closest-side, rgba(201,162,39,0.20), rgba(62,91,169,0.14), rgba(255,255,255,0))",
        }}
      />

      <motion.div
        className={cn("relative rounded-[30px] border bg-white/45 backdrop-blur-xl", border, shadow)}
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={reduce ? undefined : { duration: 7.0, repeat: Infinity, ease: EASE_IN_OUT, delay: floatDelay }}
      >
        <div
          aria-hidden
          className="absolute inset-0 rounded-[30px] opacity-[0.86]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.22) 36%, rgba(255,255,255,0.06) 72%, rgba(255,255,255,0.26) 100%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 rounded-[30px] ring-1 ring-black/10" />

        <div className="relative m-2 overflow-hidden rounded-[26px]" style={{ aspectRatio: `${aspect} / 1` }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 94vw, (max-width: 1024px) 48vw, 900px"
            className="select-none object-cover"
            priority={priority}
          />
        </div>

        <div aria-hidden className="absolute left-4 top-4 flex gap-1.5 opacity-70">
          <span className="h-2 w-2 rounded-full bg-black/20" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/10" />
        </div>
      </motion.div>
    </motion.div>
  );
}

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
      initial={reduce ? undefined : { opacity: 0, y: 14, rotate: tilt * 0.55, scale: 0.992 }}
      animate={reduce ? undefined : { opacity: 1, y: 0, rotate: tilt, scale: 1 }}
      transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.10 + floatDelay }}
      className={cn("relative", className)}
    >
      <motion.div
        className="relative"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={reduce ? undefined : { duration: 7.2, repeat: Infinity, ease: EASE_IN_OUT, delay: floatDelay }}
      >
        <div
          aria-hidden
          className="absolute -inset-9 rounded-[40px] blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(239,143,143,0.28), rgba(201,162,39,0.10), rgba(255,255,255,0))",
          }}
        />

        <div
          className="relative rounded-[32px] p-[1px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(239,143,143,0.56) 0%, rgba(239,143,143,0.18) 38%, rgba(13,27,61,0.10) 100%)",
            boxShadow: "0 30px 96px rgba(13,27,61,0.14)",
          }}
        >
          <div
            className={cn("relative overflow-hidden rounded-[31px]", className)}
            style={{ background: "linear-gradient(180deg, #FFF4F4 0%, #FDEEEE 100%)" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 z-0 opacity-[0.55]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.76) 0%, rgba(255,255,255,0.26) 32%, rgba(255,255,255,0.06) 72%, rgba(255,255,255,0.18) 100%)",
              }}
            />

            <div aria-hidden className="absolute inset-[9px] z-0 rounded-[24px]" style={{ border: "2px solid rgba(239, 143, 143, 0.20)" }} />

            <div className="relative z-10 flex w-full gap-3 p-[clamp(14px,1.8vw,22px)]">
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
                  className="mt-[clamp(7px,0.9vw,10px)] text-pretty text-[clamp(15px,1.45vw,21px)] leading-[1.22]"
                  style={{ color: "#0D1B3D", fontWeight: 650 }}
                >
                  {body}
                </div>
              </div>
            </div>

            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-white/35 to-transparent" />
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
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className="sticky top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div
          className="
            relative mt-4 rounded-3xl
            border border-black/5
            bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(245,248,252,0.72))]
            backdrop-blur-xl
            shadow-[0_8px_40px_rgba(13,27,61,0.12)]
          "
        >
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute inset-x-6 top-0 h-px
              bg-gradient-to-r
              from-transparent via-[#E6D38A]/40 to-transparent
            "
          />

          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
            <Link href={brand.href} className="group flex min-w-0 items-center gap-1">
              <span className="relative h-9 w-9 flex-none overflow-hidden rounded-xl">
                <Image src={brand.logoSrc} alt={brand.logoAlt} fill sizes="36px" className="object-cover" priority />
              </span>

              <span className="min-w-0">
                <span className="block truncate text-[18px] font-extrabold tracking-[-0.02em] sm:text-[20px]">
                  <span
                    className="
                      bg-gradient-to-r
                      from-[#E0C36A]
                      via-[#BFA24A]
                      to-[#8F6A12]
                      bg-clip-text text-transparent
                      transition-all duration-300
                      group-hover:brightness-110
                    "
                  >
                    ureus
                  </span>
                </span>
              </span>
            </Link>

            <Link
              href={cta.href}
              className="
                inline-flex flex-none items-center justify-center
                rounded-2xl px-4 py-2.5
                text-[13px] font-semibold text-[#0D1B3D]
                bg-[linear-gradient(135deg,#F4E2A3,#E0C36A)]
                shadow-[0_10px_30px_rgba(224,195,106,0.35)]
                transition-all duration-300
                hover:translate-y-[-1px]
                hover:shadow-[0_16px_44px_rgba(224,195,106,0.45)]
                focus:outline-none focus:ring-2 focus:ring-[#E0C36A]/40
              "
            >
              <span className="hidden sm:inline">{cta.label}</span>
              <span className="sm:hidden">Join</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-black/5 to-transparent"
      />
    </motion.header>
  );
}

export default function HeroLandingAbstract({
  brand = { logoSrc: "/brand/logo.png", logoAlt: "Aureus logo", name: "Aureus", href: "/" },
  primaryCta = { label: "Join the waitlist", href: "/signup" },
  secondaryCta = { label: "See features", href: "#features" },
  panels = [
    { src: "/snippets/hero-a.jpg", alt: "Panel 0" },
    { src: "/snippets/hero-b.jpg", alt: "Panel 1" },
  ],
  className,
}: HeroProps) {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0): MotionProps =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: EASE_OUT, delay },
        };

  // aspect ratios (width/height)
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
      <HeaderBar brand={safeBrand} cta={primaryCta} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-8 pb-12 pt-8 sm:pb-16 sm:pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-12">
          {/* LEFT */}
          <div className="lg:col-span-6">
            {/* SMALL UPPER LINE (animated) */}
              <motion.div {...fadeUp(0.04)} className="mt-2">
                <RotatingTypeCaps
                  words={["weight changes", "workouts", "physique pics", "strength curves", "volume", "PRs"]}
                  prefix="TRACK YOUR"
                  className="text-[13px] sm:text-[14px]"
                  prefixClassName="text-[#0D1B3D]/60 font-extrabold tracking-[0.26em]"
                  wordClassName="
                    bg-gradient-to-r
                    from-[#C9A227]
                    via-[#D4AF37]
                    to-[#3E5BA9]
                    bg-clip-text text-transparent
                    font-extrabold tracking-[0.26em]
                  "
                  caretClassName="opacity-70"
                  typeMs={74}
                  deleteMs={56}
                  holdMs={1600}
                  gapMs={900}
                />
              </motion.div>
            {/* MAIN TAGLINE */}
            <motion.h1
              {...fadeUp(0.08)}
              className="mt-4 text-balance text-4xl font-semibold tracking-tight text-[#0D1B3D] sm:text-5xl md:text-6xl"
            >
              Train with{" "}
              <span className="bg-gradient-to-r from-[#2B3F73] via-[#3E5BA9] to-[#5B74C8] bg-clip-text text-transparent">
                elite
              </span>{" "}
              direction
            </motion.h1>

            <motion.p
              {...fadeUp(0.12)}
              className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-[#516079] sm:text-lg"
            >
              You already train hard. Now track{" "}
              <em className="font-semibold italic text-[#0D1B3D]">everything</em>{" "}, reveal the trends
              — and turn it into clear actionable feedback
            </motion.p>

            <motion.div {...fadeUp(0.18)} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0D1B3D] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_44px_rgba(13,27,61,0.22)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_56px_rgba(13,27,61,0.26)] focus:outline-none focus:ring-2 focus:ring-[#0D1B3D]/30"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <button
                onClick={() => {
                  document.getElementById("features")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="cursor-pointer inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#0D1B3D] shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D1B3D]/20"
              >
                {secondaryCta.label}
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[980px]">
              {/* Mobile */}
              <div className="flex flex-col gap-3 md:hidden">
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
                  floatDelay={0.10}
                  prominence="secondary"
                />
                <WarningCalloutPanel
                  label={"WARNING"}
                  body={
                    "You experienced a significant drop in training volume for the Lats, down 2,737.5 kg from last week, with only 16.5 sets logged this week."
                  }
                  tilt={3}
                  floatDelay={0.22}
                />
              </div>

              {/* Desktop */}
              <div className="relative hidden md:block md:h-[540px] lg:h-[620px] xl:h-[680px]">
                <div className="absolute left-0 top-0 z-30 w-[72%] lg:w-[74%]">
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

                <div className="absolute right-0 top-[12%] z-20 w-[46%] lg:top-[14%] lg:w-[48%]">
                  <GlassImagePanel
                    src={panels[1].src}
                    alt={panels[1].alt ?? "Panel 1"}
                    aspect={A1}
                    tilt={8}
                    floatDelay={0.14}
                    prominence="secondary"
                  />
                </div>

                <div className="absolute left-[10%] top-[62%] z-10 w-[44%] lg:left-[12%] lg:top-[64%] lg:w-[42%]">
                </div>

                <div className="absolute bottom-[1%] right-[1%] z-20 w-[66%] origin-bottom-right scale-[0.72] lg:w-[68%] lg:scale-[0.70]">
                  <WarningCalloutPanel
                    label={"WARNING"}
                    body={
                      "You experienced a significant drop in training volume for the Lats, down 2,737.5 kg from last week, with only 16.5 sets logged this week."
                    }
                    tilt={6}
                    floatDelay={0.28}
                    className="min-h-0"
                  />
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute left-[16%] top-[58%] h-px w-[460px] opacity-70"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(201,162,39,0) 0%, rgba(201,162,39,0.60) 42%, rgba(62,91,169,0.16) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden className="relative h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}
