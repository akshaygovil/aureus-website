"use client";

import Image from "next/image";
import React from "react";

type WidthPreset = "md" | "lg" | "xl" | "full";

type TwoPhonesCenterTextProps = {
  title: string;
  subtitle?: string;

  leftScreenshotSrc: string;
  rightScreenshotSrc: string;

  iphoneFrameSrc?: string;

  widthPreset?: WidthPreset;
  maxWidth?: number | string;

  /** 0 (smallest) → 1 (largest) */
  size?: number;

  /** Width slider ranges (single phone) */
  phoneMobileRangePx?: [number, number];
  phoneDesktopRangePx?: [number, number];

  insetXPercent?: number;
  insetYPercent?: number;

  className?: string;
};

function presetToMaxW(preset: WidthPreset) {
  if (preset === "md") return "max-w-5xl";
  if (preset === "lg") return "max-w-6xl";
  if (preset === "xl") return "max-w-7xl";
  return "max-w-none";
}

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function TwoPhonesCenterText({
  title,
  subtitle,

  leftScreenshotSrc,
  rightScreenshotSrc,

  iphoneFrameSrc = "/finaliphoneframe.png",

  widthPreset = "full",
  maxWidth,

  // Slightly smaller defaults than ImageText because we have 2 phones on desktop
  size = 0.6,
  phoneMobileRangePx = [210, 270],
  phoneDesktopRangePx = [240, 330],

  insetXPercent = 7,
  insetYPercent = 2,

  className = "",
}: TwoPhonesCenterTextProps) {
  const t = clamp01(size);
  const phoneMobile = Math.round(lerp(phoneMobileRangePx[0], phoneMobileRangePx[1], t));
  const phoneDesktop = Math.round(lerp(phoneDesktopRangePx[0], phoneDesktopRangePx[1], t));

  return (
    <section className="w-full">
      <div
        className={[
          "mx-auto w-full px-5 sm:px-8 py-14 sm:py-20",
          presetToMaxW(widthPreset),
          className,
        ].join(" ")}
        style={
          maxWidth != null
            ? { maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth }
            : undefined
        }
      >
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-14">
          {/* Left phone */}
          <div className="flex justify-center lg:justify-end">
            {/* Mobile */}
            <div
              className="relative aspect-[886/1725] lg:hidden"
              style={{ width: phoneMobile, maxWidth: "92vw" }}
            >
              <PhoneFrame
                screenshotSrc={leftScreenshotSrc}
                iphoneFrameSrc={iphoneFrameSrc}
                insetXPercent={insetXPercent}
                insetYPercent={insetYPercent}
              />
            </div>

            {/* Desktop */}
            <div className="relative aspect-[886/1725] hidden lg:block" style={{ width: phoneDesktop }}>
              <PhoneFrame
                screenshotSrc={leftScreenshotSrc}
                iphoneFrameSrc={iphoneFrameSrc}
                insetXPercent={insetXPercent}
                insetYPercent={insetYPercent}
              />
            </div>
          </div>

          {/* Center text */}
          <div className="text-center lg:text-center">
            <div className="mx-auto w-full max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
                {title}
              </h2>

              {subtitle && (
                <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right phone */}
          <div className="flex justify-center lg:justify-start">
            {/* Mobile */}
            <div
              className="relative aspect-[886/1725] lg:hidden"
              style={{ width: phoneMobile, maxWidth: "92vw" }}
            >
              <PhoneFrame
                screenshotSrc={rightScreenshotSrc}
                iphoneFrameSrc={iphoneFrameSrc}
                insetXPercent={insetXPercent}
                insetYPercent={insetYPercent}
              />
            </div>

            {/* Desktop */}
            <div className="relative aspect-[886/1725] hidden lg:block" style={{ width: phoneDesktop }}>
              <PhoneFrame
                screenshotSrc={rightScreenshotSrc}
                iphoneFrameSrc={iphoneFrameSrc}
                insetXPercent={insetXPercent}
                insetYPercent={insetYPercent}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({
  screenshotSrc,
  iphoneFrameSrc,
  insetXPercent,
  insetYPercent,
}: {
  screenshotSrc: string;
  iphoneFrameSrc?: string;
  insetXPercent: number;
  insetYPercent: number;
}) {
  return (
    <>
      <div
        className="absolute overflow-hidden z-10"
        style={{
          top: `${insetYPercent}%`,
          bottom: `${insetYPercent}%`,
          left: `${insetXPercent}%`,
          right: `${insetXPercent}%`,
        }}
      >
        <Image
          src={screenshotSrc}
          alt="App screenshot"
          fill
          draggable
          className="object-cover select-none"
          priority
        />
      </div>

      {!!iphoneFrameSrc && (
        <Image
          src={iphoneFrameSrc}
          alt=""
          aria-hidden="true"
          fill
          draggable
          className="object-contain z-20 pointer-events-none select-none"
          priority
        />
      )}
    </>
  );
}
