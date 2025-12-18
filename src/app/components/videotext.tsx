"use client";

import Image from "next/image";
import React from "react";

type WidthPreset = "md" | "lg" | "xl" | "full";

type VideoTextProps = {
  title: string;
  subtitle?: string;

  /** video url, e.g. "/clips/ai-builder.mp4" */
  videoSrc: string;

  /** optional poster image shown before playback */
  posterSrc?: string;

  iphoneFrameSrc?: string;
  reverse?: boolean;

  widthPreset?: WidthPreset;
  maxWidth?: number | string;

  /** 0 (smallest) → 1 (largest) */
  size?: number;

  /** Size ranges the slider maps to */
  phoneMobileRangePx?: [number, number]; // default [290, 360]
  phoneDesktopRangePx?: [number, number]; // default [380, 520]

  insetXPercent?: number; // default 7
  insetYPercent?: number; // default 2

  /** behavior */
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;

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

export default function VideoText({
  title,
  subtitle,
  videoSrc,
  posterSrc,
  iphoneFrameSrc = "/finaliphoneframe.png",
  reverse = false,

  widthPreset = "full",
  maxWidth,

  size = 0.6,
  phoneMobileRangePx = [220, 285],
  phoneDesktopRangePx = [300, 410],

  insetXPercent = 7,
  insetYPercent = 2,

  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,

  className = "",
}: VideoTextProps) {
  const t = clamp01(size);
  const phoneMobile = Math.round(lerp(phoneMobileRangePx[0], phoneMobileRangePx[1], t));
  const phoneDesktop = Math.round(lerp(phoneDesktopRangePx[0], phoneDesktopRangePx[1], t));

  const textOrder = reverse ? "lg:order-2" : "lg:order-1";
  const phoneOrder = reverse ? "lg:order-1" : "lg:order-2";

  // Keep text left-aligned on desktop always (mobile still centered)
  const textAlign = "lg:text-left";

  // When reversed, keep the text block near the CENTER of the grid (not the far right edge)
  const textJustify = reverse ? "lg:justify-self-start" : "lg:justify-self-end";

  // Phone can stay “outer edge” aligned
  const phoneJustify = reverse ? "lg:justify-self-start" : "lg:justify-self-end";

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
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className={[textOrder, textJustify].join(" ")}>
            <div className={["w-full max-w-2xl text-center", textAlign].join(" ")}>
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

          {/* Phone */}
          <div className={[phoneOrder, phoneJustify].join(" ")}>
            {/* Mobile phone */}
            <div
              className="relative aspect-[886/1725] lg:hidden"
              style={{ width: phoneMobile, maxWidth: "92vw" }}
            >
              <PhoneFrameVideo
                videoSrc={videoSrc}
                posterSrc={posterSrc}
                iphoneFrameSrc={iphoneFrameSrc}
                insetXPercent={insetXPercent}
                insetYPercent={insetYPercent}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                controls={controls}
              />
            </div>

            {/* Desktop phone */}
            <div className="relative aspect-[886/1725] hidden lg:block" style={{ width: phoneDesktop }}>
              <PhoneFrameVideo
                videoSrc={videoSrc}
                posterSrc={posterSrc}
                iphoneFrameSrc={iphoneFrameSrc}
                insetXPercent={insetXPercent}
                insetYPercent={insetYPercent}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                controls={controls}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrameVideo({
  videoSrc,
  posterSrc,
  iphoneFrameSrc,
  insetXPercent,
  insetYPercent,
  autoPlay,
  loop,
  muted,
  controls,
}: {
  videoSrc: string;
  posterSrc?: string;
  iphoneFrameSrc?: string;
  insetXPercent: number;
  insetYPercent: number;
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  controls: boolean;
}) {
  return (
    <>
      {/* Video “screen” inside the iPhone cutout */}
      <div
        className="absolute overflow-hidden z-10"
        style={{
          top: `${insetYPercent}%`,
          bottom: `${insetYPercent}%`,
          left: `${insetXPercent}%`,
          right: `${insetXPercent}%`,
        }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover select-none"
          src={videoSrc}
          poster={posterSrc}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          playsInline
          preload="metadata"
          draggable={false}
        />
      </div>

      {/* iPhone frame overlay */}
      {!!iphoneFrameSrc && (
        <Image
          src={iphoneFrameSrc}
          alt=""
          aria-hidden="true"
          fill
          draggable={false}
          className="object-contain z-20 pointer-events-none select-none"
          priority
        />
      )}
    </>
  );
}
