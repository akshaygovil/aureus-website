"use client";

import Image from "next/image";
import * as React from "react";

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

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function presetToMaxW(preset: WidthPreset) {
  if (preset === "md") return "max-w-5xl";
  if (preset === "lg") return "max-w-6xl";
  if (preset === "xl") return "max-w-7xl";
  // "full": full-width section, but cap inner content on ultra-wide screens
  return "max-w-screen-2xl";
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
  const headingId = React.useId();

  const { phoneMobile, phoneDesktop } = React.useMemo(() => {
    const t = clamp01(size);
    return {
      phoneMobile: Math.round(lerp(phoneMobileRangePx[0], phoneMobileRangePx[1], t)),
      phoneDesktop: Math.round(lerp(phoneDesktopRangePx[0], phoneDesktopRangePx[1], t)),
    };
  }, [size, phoneMobileRangePx, phoneDesktopRangePx]);

  const containerStyle =
    maxWidth != null
      ? {
          maxWidth:
            typeof maxWidth === "number"
              ? `${maxWidth}px`
              : maxWidth === "none"
                ? "none"
                : maxWidth,
        }
      : undefined;

  return (
    <section className="w-full" aria-labelledby={headingId}>
      <div
        className={cn(
          "mx-auto w-full px-5 sm:px-8 py-14 sm:py-16 lg:py-20",
          presetToMaxW(widthPreset),
          className
        )}
        style={containerStyle}
      >
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* TEXT */}
          <div
            className={cn(
              "w-full flex justify-center",
              // desktop: keep text at outer edge of its column
              reverse ? "lg:order-2 lg:justify-end" : "lg:order-1 lg:justify-start"
            )}
          >
            <div className="w-full max-w-2xl text-center lg:text-left">
              <h2
                id={headingId}
                className="text-pretty text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900"
              >
                {title}
              </h2>

              {subtitle ? (
                <p className="mt-4 text-pretty text-base sm:text-lg text-neutral-600 leading-relaxed">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>

          {/* PHONE */}
          <div
            className={cn(
              "w-full flex justify-center", // ✅ centers on mobile
              reverse ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end" // ✅ far edge on desktop
            )}
          >
            {/* Mobile phone */}
            <div
              className="relative aspect-[886/1725] lg:hidden"
              style={{ width: phoneMobile, maxWidth: "92vw" }}
            >
              <PhoneFrameVideo
                title={title}
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
                title={title}
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
  title,
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
  title: string;
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
  const clampPct = (n: number) => Math.max(0, Math.min(20, n));
  const ix = clampPct(insetXPercent);
  const iy = clampPct(insetYPercent);

  return (
    <div className="absolute inset-0">
      {/* Video “screen” inside the iPhone cutout */}
      <div
        className="absolute z-10 overflow-hidden rounded-[3.2%]"
        style={{
          top: `${iy}%`,
          bottom: `${iy}%`,
          left: `${ix}%`,
          right: `${ix}%`,
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
          aria-label={`Video preview: ${title}`}
        />
      </div>

      {/* iPhone frame overlay */}
      {iphoneFrameSrc ? (
        <Image
          src={iphoneFrameSrc}
          alt=""
          aria-hidden="true"
          fill
          draggable={false}
          className="pointer-events-none z-20 select-none object-contain"
          priority
          sizes="(max-width: 1024px) 92vw, 520px"
        />
      ) : null}
    </div>
  );
}
