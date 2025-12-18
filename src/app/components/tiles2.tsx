"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type RowTile = {
  title: string;
  subtitle?: string;
  src: string;
  alt: string;
};

export type HorizontalRowTilesProps = {
  heading?: string;
  subheading?: string;
  items: [RowTile, RowTile, RowTile]; // exactly 3
  className?: string;
};

export default function HorizontalRowTiles({
  heading,
  subheading,
  items,
  className,
}: HorizontalRowTilesProps) {
  // store true aspect ratios so each image frame fits its image (no crop, no distortion)
  const [ratios, setRatios] = useState<Record<string, string>>({});

  const keys = useMemo(
    () => items.map((it, idx) => `${it.src}__${idx}`),
    [items]
  );

  return (
    <section className={cn("w-full", className)}>
      {/* slight padding from the page edge */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {(heading || subheading) && (
          <div className="mb-5 sm:mb-6">
            {heading && (
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#171717]">
                {heading}
              </h3>
            )}
            {subheading && (
              <p className="mt-2 max-w-2xl text-[13px] sm:text-[14px] leading-relaxed text-black/60">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* ✅ IMPORTANT: items-start prevents equal-height stretching (removes “empty space”) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-start">
          {items.map((it, idx) => {
            const k = keys[idx];
            const aspectRatio = ratios[k] ?? "16/10"; // fallback until load

            return (
              <article
                key={k}
                className={cn(
                  "self-start", // ✅ also prevents stretching
                  "overflow-hidden rounded-2xl sm:rounded-3xl",
                  "ring-1 ring-black/10",
                  "bg-white/22 backdrop-blur-[2px]",
                  "shadow-[0_18px_50px_rgba(0,0,0,0.10)]"
                )}
              >
                {/* ✅ Image area (padding inside, rounded image corners) */}
                <div className="p-2.5 sm:p-3">
                  <div
                    className={cn(
                      "relative w-full overflow-hidden",
                      "rounded-xl sm:rounded-2xl",
                      "ring-1 ring-black/10",
                      "bg-white/35"
                    )}
                    style={{ aspectRatio }}
                  >
                    <Image
                      src={it.src}
                      alt={it.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain select-none"
                      priority={idx === 0}
                      onLoadingComplete={(img) => {
                        const w = img.naturalWidth || 16;
                        const h = img.naturalHeight || 10;
                        const r = `${w}/${h}`;
                        setRatios((prev) => (prev[k] === r ? prev : { ...prev, [k]: r }));
                      }}
                    />

                    {/* subtle gloss (does NOT affect layout) */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.28), rgba(255,255,255,0) 48%)",
                      }}
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <h4 className="text-[15px] sm:text-base font-semibold tracking-tight text-[#171717]">
                    {it.title}
                  </h4>
                  {it.subtitle && (
                    <p className="mt-2 text-[13px] sm:text-[14px] leading-relaxed text-black/60">
                      {it.subtitle}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
