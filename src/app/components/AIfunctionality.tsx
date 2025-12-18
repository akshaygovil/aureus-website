"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { CalendarDays, Sparkles, Wand2, ArrowRight, ShieldCheck } from "lucide-react";

type Shot = { src: string; alt: string };

export type AIFunctionalitySectionProps = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;

  /** Screenshots/snippets (put files in /public/snippets/...) */
  weekly: Shot;
  daily: Shot;
  builder: Shot;

  /** Optional anchor for “Learn more” */
  learnMoreHref?: string;

  className?: string;
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

function MotionWrap({
  reduced,
  children,
  ...props
}: { reduced: boolean; children: React.ReactNode } & MotionProps) {
  if (reduced) return <div className={props.className as string}>{children}</div>;
  return <motion.div {...props}>{children}</motion.div>;
}

function GlassCard({
  title,
  desc,
  icon,
  pill,
}: {
  title: string;
  desc: string;
  pill: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-5 shadow-[0_18px_60px_-28px_rgba(16,24,40,0.35)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-0.5">
      {/* soft gold sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px 280px at 30% 30%, rgba(212,175,55,0.22), transparent 70%)",
        }}
      />
      <div className="relative flex items-start gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-black/5 bg-[#0D1B3D] text-white shadow-[0_14px_40px_-24px_rgba(13,27,61,0.75)]">
          {icon}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[15px] font-semibold tracking-tight text-[#0D1B3D] sm:text-base">
              {title}
            </h3>
            <span className="inline-flex items-center rounded-full border border-black/5 bg-black/[0.03] px-2.5 py-1 text-[11px] font-medium text-black/60">
              {pill}
            </span>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-black/60 sm:text-[14px]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScreenshotTile({
  shot,
  label,
  tone = "gold",
  className,
  sizes,
  priority,
}: {
  shot: Shot;
  label: string;
  tone?: "gold" | "navy";
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const badge =
    tone === "navy"
      ? "bg-[#0D1B3D] text-white"
      : "bg-gradient-to-r from-[#D4AF37] via-[#E9C46A] to-[#C9A227] text-[#0D1B3D]";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_30px_90px_-55px_rgba(13,27,61,0.55)]",
        className
      )}
    >
      {/* gradient border glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
        style={{
          background:
            "radial-gradient(600px 320px at 30% 20%, rgba(13,27,61,0.20), transparent 60%), radial-gradient(520px 280px at 70% 40%, rgba(212,175,55,0.22), transparent 65%)",
        }}
      />
      {/* top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.75), rgba(255,255,255,0) 38%)",
        }}
      />

      <div className="relative">
        <div className="relative aspect-[10/13] w-full">
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        </div>

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold", badge)}>
            {label}
          </span>
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-black/60 backdrop-blur">
            Screenshot
          </span>
        </div>

        {/* bottom vignette for readability */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background: "linear-gradient(to top, rgba(13,27,61,0.14), rgba(13,27,61,0))",
          }}
        />
      </div>
    </div>
  );
}

export default function AIFunctionalitySection({
  eyebrow = "AI that actually trains you",
  heading = "Actionable feedback. Every day. Every week.",
  subheading = "Aureus reads your training history and turns it into clear next steps — then backs it up with what it’s seeing in your actual log.",
  weekly,
  daily,
  builder,
  learnMoreHref = "#ai",
  className,
}: AIFunctionalitySectionProps) {
  const reduced = useReducedMotion();

  return (
    <section id="ai" className={cn("relative overflow-hidden py-16 sm:py-20", className)}>
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(246,248,250,1) 60%, rgba(255,255,255,1) 100%)",
          }}
        />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.6]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(900px 520px at 50% 0%, black 40%, transparent 70%)",
          }}
        />
        {/* navy + gold glows */}
        <div
          className="absolute -top-28 left-1/2 h-[520px] w-[900px] -translate-x-1/2 opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side at 50% 50%, rgba(13,27,61,0.18), transparent 65%)",
          }}
        />
        <div
          className="absolute -top-24 right-[-140px] h-[520px] w-[520px] opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side at 50% 50%, rgba(212,175,55,0.26), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left copy */}
          <MotionWrap
            reduced={reduced}
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[12px] font-semibold tracking-tight text-[#0D1B3D] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#C9A227]" />
              {eyebrow}
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0D1B3D] sm:text-4xl">
              {heading}
            </h2>

            <p className="mt-3 text-[15px] leading-relaxed text-black/60 sm:text-base">
              {subheading}
            </p>

            <div className="mt-6 space-y-3">
              <GlassCard
                icon={<CalendarDays className="h-5 w-5" />}
                pill="Weekly AI feedback"
                title="Weekly review that tells you what to change"
                desc="Gets specific: what’s progressing, what’s stalling, and the one adjustment that will move you forward this week."
              />
              <GlassCard
                icon={<Sparkles className="h-5 w-5" />}
                pill="Daily AI feedback"
                title="Daily clarity in one glance"
                desc="A tight summary of what you did today — plus the next best move for tomorrow, based on your recent trend."
              />
              <GlassCard
                icon={<Wand2 className="h-5 w-5" />}
                pill="AI workout builder"
                title="Build a session that fits your goal and history"
                desc="Tell it your goal, time, and equipment. It generates a session with sets/reps/rest ready to log."
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={learnMoreHref}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#0D1B3D] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_16px_60px_-34px_rgba(13,27,61,0.8)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                See it in action
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <div className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-4 py-2 text-[13px] font-semibold text-black/70 backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-[#C9A227]" />
                Based on your logged training
              </div>
            </div>
          </MotionWrap>

          {/* Right bento screenshots */}
          <MotionWrap
            reduced={reduced}
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.05 }}
          >
            <div className="grid grid-cols-12 gap-4">
              {/* Big: Weekly */}
              <MotionWrap
                reduced={reduced}
                className="col-span-12 md:col-span-7"
                whileHover={reduced ? undefined : { y: -4 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
              >
                <ScreenshotTile
                  shot={weekly}
                  label="Weekly AI feedback"
                  tone="gold"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </MotionWrap>

              {/* Two stacked: Daily + Builder */}
              <div className="col-span-12 grid gap-4 md:col-span-5">
                <MotionWrap
                  reduced={reduced}
                  whileHover={reduced ? undefined : { y: -4 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                >
                  <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_30px_90px_-55px_rgba(13,27,61,0.55)]">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-10 opacity-35 blur-2xl"
                      style={{
                        background:
                          "radial-gradient(520px 280px at 30% 20%, rgba(212,175,55,0.20), transparent 65%), radial-gradient(520px 280px at 80% 60%, rgba(13,27,61,0.18), transparent 70%)",
                      }}
                    />
                    <div className="relative">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={daily.src}
                          alt={daily.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="absolute left-4 top-4 flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-[#0D1B3D] px-3 py-1 text-[11px] font-semibold text-white">
                          Daily AI feedback
                        </span>
                        <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-black/60 backdrop-blur">
                          Screenshot
                        </span>
                      </div>

                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
                        style={{
                          background: "linear-gradient(to top, rgba(13,27,61,0.12), rgba(13,27,61,0))",
                        }}
                      />
                    </div>
                  </div>
                </MotionWrap>

                <MotionWrap
                  reduced={reduced}
                  whileHover={reduced ? undefined : { y: -4 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                >
                  <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_30px_90px_-55px_rgba(13,27,61,0.55)]">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-10 opacity-35 blur-2xl"
                      style={{
                        background:
                          "radial-gradient(520px 280px at 40% 10%, rgba(13,27,61,0.20), transparent 62%), radial-gradient(520px 280px at 80% 70%, rgba(212,175,55,0.22), transparent 70%)",
                      }}
                    />
                    <div className="relative">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={builder.src}
                          alt={builder.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="absolute left-4 top-4 flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E9C46A] to-[#C9A227] px-3 py-1 text-[11px] font-semibold text-[#0D1B3D]">
                          AI workout builder
                        </span>
                        <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-black/60 backdrop-blur">
                          Screenshot
                        </span>
                      </div>

                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
                        style={{
                          background: "linear-gradient(to top, rgba(13,27,61,0.12), rgba(13,27,61,0))",
                        }}
                      />
                    </div>
                  </div>
                </MotionWrap>
              </div>

              {/* Bottom proof strip */}
              <div className="col-span-12">
                <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-5 backdrop-blur-xl">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-24 opacity-40 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(700px 220px at 20% 40%, rgba(212,175,55,0.16), transparent 70%), radial-gradient(700px 220px at 80% 60%, rgba(13,27,61,0.14), transparent 70%)",
                    }}
                  />
                  <div className="relative flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[13px] font-semibold tracking-tight text-[#0D1B3D]">
                        Proof-first AI
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed text-black/60">
                        Not generic advice — the feedback is anchored to what the app can see in your training history.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Auto-calculated", "Trend-aware", "Concrete next steps"].map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[12px] font-medium text-black/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrap>
        </div>
      </div>
    </section>
  );
}

/**
 * Example usage:
 *
 * <AIFunctionalitySection
 *   weekly={{ src: "/snippets/ai-weekly.webp", alt: "Weekly AI feedback screenshot" }}
 *   daily={{ src: "/snippets/ai-daily.webp", alt: "Daily AI feedback screenshot" }}
 *   builder={{ src: "/snippets/ai-builder.webp", alt: "AI workout builder screenshot" }}
 * />
 */
