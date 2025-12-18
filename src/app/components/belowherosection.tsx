"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type SearchOverDarkLuxProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function SearchOverDarkLux({
  eyebrow = "Your search for a fitness app is over",
  title = "Consistency—without the chaos.",
  subtitle = "A calmer kind of discipline. Direction that feels obvious. Progress you can finally trust.",
  className,
}: SearchOverDarkLuxProps) {
  const reduce = useReducedMotion();

  return (
    <section className={cn("relative w-full overflow-hidden bg-[#070A12] text-white", className)}>
      {/* Deep, premium visuals */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Base depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 800px at 50% -120px, rgba(233,196,106,0.18), transparent 60%), radial-gradient(900px 650px at 12% 18%, rgba(99,140,255,0.14), transparent 62%), radial-gradient(900px 650px at 88% 26%, rgba(13,27,61,0.55), transparent 62%), linear-gradient(to bottom, rgba(7,10,18,1), rgba(6,10,18,1))",
          }}
        />

        {/* Micro-stars */}
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.35) 40%, transparent 41%), radial-gradient(1px 1px at 82% 22%, rgba(255,255,255,0.22) 40%, transparent 41%), radial-gradient(1px 1px at 35% 72%, rgba(255,255,255,0.22) 40%, transparent 41%), radial-gradient(1px 1px at 62% 64%, rgba(255,255,255,0.18) 40%, transparent 41%), radial-gradient(1px 1px at 18% 82%, rgba(255,255,255,0.16) 40%, transparent 41%), radial-gradient(1px 1px at 76% 78%, rgba(255,255,255,0.16) 40%, transparent 41%)",
          }}
        />

        {/* Premium grid */}
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "78px 78px",
            maskImage: "radial-gradient(closest-side at 50% 45%, black 58%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(closest-side at 50% 45%, black 58%, transparent 100%)",
          }}
        />

        {/* Halos (many) */}
        <div
          className="absolute -top-72 left-[-18%] h-[860px] w-[860px] rounded-full blur-[150px] opacity-70"
          style={{ background: "radial-gradient(circle, rgba(233,196,106,0.34), transparent 62%)" }}
        />
        <div
          className="absolute -top-80 right-[-22%] h-[980px] w-[980px] rounded-full blur-[170px] opacity-65"
          style={{ background: "radial-gradient(circle, rgba(99,140,255,0.22), transparent 60%)" }}
        />
        <div
          className="absolute -bottom-80 left-[12%] h-[980px] w-[980px] rounded-full blur-[190px] opacity-55"
          style={{ background: "radial-gradient(circle, rgba(13,27,61,0.85), transparent 60%)" }}
        />

        {/* Glass orbs */}
        {[
          { left: "7%", top: "30%", size: 190, glow: "rgba(233,196,106,0.26)" },
          { left: "78%", top: "18%", size: 150, glow: "rgba(99,140,255,0.20)" },
          { left: "82%", top: "62%", size: 220, glow: "rgba(233,196,106,0.16)" },
          { left: "18%", top: "70%", size: 140, glow: "rgba(120,169,255,0.14)" },
        ].map((o, idx) => (
          <div
            key={idx}
            className="absolute rounded-full"
            style={{
              left: o.left,
              top: o.top,
              width: o.size,
              height: o.size,
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 28% 28%, rgba(255,255,255,0.22), rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.04) 48%, rgba(0,0,0,0) 68%)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.30)",
              }}
            />
            <div
              className="absolute -inset-10 rounded-full blur-3xl opacity-70"
              style={{ background: `radial-gradient(circle, ${o.glow}, transparent 60%)` }}
            />
          </div>
        ))}

        {/* Abstract ribbons / beams */}
        <motion.div
          className="absolute left-[-28%] top-[16%] h-28 w-[92%] rotate-[-10deg] blur-[24px]"
          initial={reduce ? undefined : { opacity: 0.10, x: -40 }}
          animate={reduce ? undefined : { opacity: [0.06, 0.16, 0.06], x: [-40, 30, -40] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(233,196,106,0.75) 46%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute right-[-30%] top-[34%] h-24 w-[92%] rotate-[12deg] blur-[26px]"
          initial={reduce ? undefined : { opacity: 0.09, x: 40 }}
          animate={reduce ? undefined : { opacity: [0.05, 0.14, 0.05], x: [40, -30, 40] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(99,140,255,0.60) 46%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute left-[-18%] bottom-[16%] h-28 w-[84%] rotate-[8deg] blur-[28px]"
          initial={reduce ? undefined : { opacity: 0.08, x: -30 }}
          animate={reduce ? undefined : { opacity: [0.04, 0.12, 0.04], x: [-30, 26, -30] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(13,27,61,0.85) 46%, transparent 100%)",
          }}
        />

        {/* Center shimmer veil */}
        <motion.div
          className="absolute inset-y-0 left-1/2 w-[520px] -translate-x-1/2"
          initial={reduce ? undefined : { opacity: 0.08, scale: 0.98 }}
          animate={reduce ? undefined : { opacity: [0.05, 0.12, 0.05], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(260px 460px at 50% 50%, rgba(255,255,255,0.14), rgba(255,255,255,0.02) 52%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 520px at 50% 42%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-20 sm:py-24 md:py-28">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.85, ease: EASE_OUT }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 backdrop-blur">
            <span
              className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "linear-gradient(90deg, #D4AF37, #E9C46A)" }}
            />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white/65">
              {eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 className="mt-6 text-[46px] leading-[1.03] sm:text-6xl lg:text-[72px] font-semibold tracking-tight">
            {title}
            <span
              className="block mt-3 text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(233,196,106,0.95) 35%, rgba(120,169,255,0.92) 62%, rgba(255,255,255,0.85) 100%)",
              }}
            >
              Calm direction. Quiet power.
            </span>
          </h2>

          {/* Minimal text (still short) */}
          <p className="mt-6 text-[14px] sm:text-[15px] leading-relaxed text-white/60 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Ultra-minimal promise line */}
          <div className="mt-8 text-[12px] tracking-[0.16em] uppercase text-white/45">
            Less noise • More momentum • Built to last
          </div>
        </motion.div>

        {/* Bottom divider + glow */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div
          aria-hidden
          className="mx-auto mt-6 h-6 w-[72%] blur-2xl opacity-50"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(233,196,106,0.35) 30%, rgba(120,169,255,0.22) 55%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
