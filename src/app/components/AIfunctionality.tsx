"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Img = { src: string; alt: string };

type AIFunctionalitySectionProps = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;

  /** LEFT collage */
  leftTall: Img;
  leftBottom: Img;
  rightTop: Img;
  rightBottom: Img;

  /** RIGHT output */
  outputTall: Img;

  className?: string;
};

function cn(...a: Array<string | undefined | false>) {
  return a.filter(Boolean).join(" ");
}

function SectionBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(246,248,250,1) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 28% 0%, rgba(62,91,169,0.10) 0%, rgba(255,255,255,0) 62%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(720px 420px at 86% 12%, rgba(201,162,39,0.10) 0%, rgba(255,255,255,0) 60%)",
        }}
      />
    </div>
  );
}

/** ✅ ONE ring only */
function Shot({
  img,
  aspect,
  fit = "contain",
  draggable = false,
  className,
  sizes,
}: {
  img: Img;
  aspect: string;
  fit?: "cover" | "contain";
  draggable?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[26px]",
        "bg-white/80 ring-1 ring-black/10",
        "shadow-[0_18px_60px_rgba(13,27,61,0.10)]",
        className
      )}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        priority
        draggable={draggable}
        sizes={sizes ?? "(max-width: 1024px) 100vw, 520px"}
        className={cn(
          "object-center",
          fit === "contain" ? "object-contain" : "object-cover"
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(560px 420px at 50% 18%, rgba(62,91,169,0.06) 0%, rgba(255,255,255,0) 60%)",
        }}
      />
    </div>
  );
}

function TopText({
  eyebrow,
  heading,
  subheading,
}: {
  eyebrow: string;
  heading: string;
  subheading: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs tracking-[0.28em] uppercase text-[#8A94A6]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0D1B3D] leading-[1.08]">
        {heading}
      </h2>

      <p className="mt-4 text-[15px] sm:text-base md:text-lg text-[#6E7A8C] leading-relaxed">
        {subheading}
      </p>

      {/* compact "what's happening" row */}
      <div className="mt-7 flex flex-wrap items-center gap-2.5">
        {[
          "You provide constraints",
          "AI builds the session",
          "Refine in seconds",
        ].map((t) => (
          <div
            key={t}
            className="rounded-full bg-white/70 ring-1 ring-black/5 shadow-[0_14px_44px_rgba(13,27,61,0.06)] px-3.5 py-2"
          >
            <div className="text-[12.5px] font-medium text-[#0D1B3D]">
              {t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VerticalDivider() {
  return (
    <div className="hidden lg:flex items-stretch justify-center">
      <div className="relative h-full w-[32px] flex items-center justify-center">
        <div
          aria-hidden
          className="h-full w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(13,27,61,0.14) 18%, rgba(13,27,61,0.14) 82%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default function AIFunctionalitySection({
  eyebrow,
  heading = "From constraints → a complete session.",
  subheading = "Drop in your preferences (time, equipment, focus). Aureus generates a structured workout — ready to run, and easy to tweak.",
  leftTall,
  leftBottom,
  rightTop,
  rightBottom,
  outputTall,
  className,
}: AIFunctionalitySectionProps) {
  return (
    <section className={cn("relative w-full overflow-hidden bg-white", className)}>
      <SectionBackground />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-20 sm:pt-24 pb-20 sm:pb-24">
        <TopText eyebrow={eyebrow!} heading={heading} subheading={subheading} />

        {/* labels row (optional but clarifies "what's going on") */}
        <div className="mt-10 sm:mt-12 flex items-center justify-between gap-6">
          <div className="text-[12px] tracking-[0.22em] uppercase text-[#8A94A6]">
            Inputs
          </div>
          <div className="hidden lg:block text-[12px] tracking-[0.22em] uppercase text-[#8A94A6]">
            Output
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_40px_minmax(0,460px)] gap-8 lg:gap-10 items-start">
          {/* LEFT collage */}
          <div className="min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* left column: tall + square */}
              <div className="min-w-0 flex flex-col gap-3 sm:gap-4">
                {/* ⬇️ aspect tweaked so total column height matches right column */}
                <Shot
                  img={leftTall}
                  aspect="3/5"
                  fit="contain"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <Shot
                    img={leftBottom}
                    aspect="1/1"
                    fit="contain"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </motion.div>
              </div>

              {/* right column: 2 stacked (same total height as left column) */}
              <div className="min-w-0 flex flex-col gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <Shot
                    img={rightTop}
                    aspect="3/4"
                    fit="contain"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <Shot
                    img={rightBottom}
                    aspect="3/4"
                    fit="contain"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* VERTICAL SPACER */}
          <VerticalDivider />

          {/* RIGHT output */}
          <div className="min-w-0">
            <Shot
              img={outputTall}
              aspect="9/16"
              fit="contain"
              sizes="(max-width: 1024px) 100vw, 460px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}