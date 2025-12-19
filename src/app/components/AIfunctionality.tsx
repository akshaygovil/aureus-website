"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { CalendarDays, Sparkles, Wand2, ArrowRight, ShieldCheck } from "lucide-react";

type Shot = { src: string; alt: string };

export type AIFunctionalitySectionProps = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;

  weekly: Shot;
  daily: Shot;
  builder: Shot;

  learnMoreHref?: string;
  className?: string;
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Desired “long phone” aspect ratio: ~2.167 (height/width).
 * Tailwind aspect-* is width/height, so invert -> 100/217 ≈ 0.461.
 */
const PHONE_ASPECT = "aspect-[100/217]";

type MotionWrapProps = HTMLMotionProps<"div"> & {
  reduced: boolean;
  children: React.ReactNode;
};

function MotionWrap({ reduced, children, className, ...props }: MotionWrapProps) {
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
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
          <p className="mt-2 text-[13px] leading-relaxed text-black/60 sm:text-[14px]">{desc}</p>
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
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
        style={{
          background:
            "radial-gradient(600px 320px at 30% 20%, rgba(13,27,61,0.20), transparent 60%), radial-gradient(520px 280px at 70% 40%, rgba(212,175,55,0.22), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.75), rgba(255,255,255,0) 38%)",
        }}
      />

      <div className="relative">
        <div className={cn("relative w-full", PHONE_ASPECT)}>
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        </div>

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
  className,
}: AIFunctionalitySectionProps) {
  // ✅ boolean | null -> boolean
  const reduced = !!useReducedMotion();

  return (
    <section id="ai" className={cn("relative overflow-hidden py-8 sm:py-10", className)}>
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(246,248,250,1) 60%, rgba(255,255,255,1) 100%)",
          }}
        />
        <div
          className="absolute -top-24 right-[-140px] h-[520px] w-[520px] opacity-50 blur-3xl"
          style={{
            background: "radial-gradient(closest-side at 50% 50%, rgba(212,175,55,0.26), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header / Copy */}
        <MotionWrap
          reduced={reduced}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[12px] font-semibold tracking-tight text-[#0D1B3D] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#C9A227]" />
            {eyebrow}
          </div>

          <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0D1B3D] sm:text-4xl">
                {heading}
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-black/60 sm:text-base">
                {subheading}
              </p>
            </div>
          </div>
        </MotionWrap>

        {/* Screenshots: ALL SAME SIZE */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { shot: weekly, label: "Weekly AI feedback", tone: "gold" as const, priority: true },
            { shot: daily, label: "Daily AI feedback", tone: "navy" as const, priority: false },
            { shot: builder, label: "AI workout builder", tone: "gold" as const, priority: false },
          ].map((t, i) => (
            <MotionWrap
              key={t.label}
              reduced={reduced}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.04 * i }}
              whileHover={reduced ? undefined : { y: -4 }}
            >
              <ScreenshotTile
                shot={t.shot}
                label={t.label}
                tone={t.tone}
                priority={t.priority}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </MotionWrap>
          ))}
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid gap-3 md:grid-cols-3">
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

        {/* Proof strip */}
        <div className="mt-10">
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
                <p className="text-[13px] font-semibold tracking-tight text-[#0D1B3D]">Proof-first AI</p>
                <p className="mt-1 text-[13px] leading-relaxed text-black/60">
                  Not generic advice — the feedback is anchored to what the app can see in your training history.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Auto-calculated", "Trend-aware", "Concrete next steps"].map((x) => (
                  <span
                    key={x}
                    className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[12px] font-medium text-black/70"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
