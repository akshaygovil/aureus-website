"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function AboutMinimal() {
  return null
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ultra-soft background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 520px at 50% -10%, rgba(62,91,169,0.10) 0%, rgba(255,255,255,0) 60%), radial-gradient(700px 420px at 15% 110%, rgba(201,162,39,0.12) 0%, rgba(255,255,255,0) 60%)",
          }}
        />
        {/* subtle vignette for depth */}
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            background:
              "radial-gradient(900px 520px at 50% 30%, rgba(13,27,61,0.04) 0%, rgba(255,255,255,0) 60%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-12 pb-20">
        {/* Top bar */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-[#0D1B3D] backdrop-blur transition hover:bg-white"
          >
            <span className="inline-block -mt-px transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            <span>Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.34em] uppercase text-[#8A94A6]">
            About Aureus
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0D1B3D]">
            Built from the “skinny guy” phase — for serious lifters.
          </h1>

          <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[#6E7A8C]">
            I’m not a brand-first founder. I’m a lifter who obsessed over the
            basics: clean logging, real progression, and a training flow that
            never gets in the way.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Copy */}
          <div className="lg:col-span-6">
            <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#6E7A8C]">
              <p>
                I started lifting as the skinny guy who overthought everything.
                I tracked every set, every rep, every rest timer — because I
                had to. Progress wasn’t automatic for me.
              </p>

              <p>
                Over the years I tried the big names:{" "}
                <span className="text-[#0D1B3D] font-medium">MyFitnessPal</span>,{" "}
                <span className="text-[#0D1B3D] font-medium">Strong</span>,{" "}
                <span className="text-[#0D1B3D] font-medium">Hevy</span>,{" "}
                <span className="text-[#0D1B3D] font-medium">JEFIT</span>,{" "}
                <span className="text-[#0D1B3D] font-medium">Fitbod</span>.
                Some were decent — but none felt like a tool built for lifters
                who care about the details.
              </p>

              <p>
                They were either noisy, slow, or made the basics harder than
                they should be. So I built Aureus — the app I wanted on day one:
                clean, fast, and made for real training.
              </p>

              <p>
                And it’s not just for bulking. The same “no-noise” tracking is
                what makes fat loss work too: consistent lifts, simple progress
                checks, and the kind of adherence you can actually stick to.
              </p>

              <p>
                I choose to stay anonymous on purpose. Not to be mysterious —
                just because I want the product to earn trust by how it feels
                to use.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <ShotCard
                label="Before"
                src="/mybefore.png"
                metaTop="45kg"
                metaBottom={`Height: 5'10"`}
              />
              <ShotCard
                label="After"
                src="/myafter.png"
                metaTop="70kg"
                metaBottom={`Height: 5'10"`}
              />
            </div>
            <div className="mt-5">
              <div
                className="
                  inline-flex max-w-full flex-wrap items-center gap-x-4 gap-y-2
                  rounded-full bg-white/80 px-4 py-2.5
                  ring-1 ring-inset ring-black/10
                  shadow-[0_14px_40px_rgba(13,27,61,0.10)]
                  backdrop-blur
                "
              >
                <div className="inline-flex items-center gap-2">
                  <PillDot />
                  <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#0D1B3D]/60">
                    Transformation
                  </span>
                  <span className="text-[14px] font-semibold text-[#0D1B3D]">+25kg</span>
                </div>

                <span className="hidden sm:block h-4 w-px bg-black/10" aria-hidden />

                <div className="inline-flex items-center gap-2">
                  <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#0D1B3D]/60">
                    Height
                  </span>
                  <span className="text-[14px] font-semibold text-[#0D1B3D]">5&apos;10&quot;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-10" />
      </div>
    </section>
  );
}

function PillDot() {
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className="absolute inset-0 rounded-full bg-[#C9A227] opacity-30 blur-[2px]" />
      <span className="relative h-2 w-2 rounded-full bg-[#C9A227]" />
    </span>
  );
}

function ShotCard({
  label,
  src,
  metaTop,
  metaBottom,
}: {
  label: string;
  src: string;
  metaTop: string;
  metaBottom: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-[#F4F6FA] shadow-[0_12px_40px_rgba(13,27,61,0.08)]">
      {/* soft ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(201,162,39,0.28), inset 0 0 0 999px rgba(255,255,255,0.02)",
        }}
      />

      <div className="relative aspect-[3/4] w-full">
        <Image
          src={src}
          alt={`${label} transformation`}
          fill
          sizes="(max-width: 768px) 50vw, 520px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority={false}
        />

        {/* gentle bottom fade for text legibility */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(to top, rgba(13,27,61,0.55), rgba(13,27,61,0))",
          }}
        />
      </div>

      {/* Label */}
      <div className="absolute left-3 right-3 bottom-3 flex items-end justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
          <span className="text-[12px] font-medium text-white">{label}</span>
        </span>

        <span className="rounded-2xl border border-white/12 bg-black/30 px-3 py-2 backdrop-blur">
          <div className="text-[12px] font-semibold text-white">{metaTop}</div>
          <div className="text-[11px] text-white/80">{metaBottom}</div>
        </span>
      </div>
    </div>
  );
}
