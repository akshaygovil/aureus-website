"use client";

import Image from "next/image";
import React from "react";

type Tile = {
  title: string;
  subtitle?: string;
  src: string;
  alt: string;
  href?: string;
  onClick?: () => void;

  /** optional overrides per tile */
  fit?: "contain" | "cover";
  position?: string; // e.g. "50% 35%"
};

type Tiles2x2Props = {
  heading?: string;
  subheading?: string;
  items: [Tile, Tile, Tile, Tile]; // exactly 4
  className?: string;
};

export default function Tiles2x2({
  heading,
  subheading,
  items,
  className,
}: Tiles2x2Props) {
  return (
    <section className={["w-full", className].filter(Boolean).join(" ")}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {(heading || subheading) && (
          <div className="mb-8 sm:mb-10">
            {heading && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#0D1B3D]">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-3 text-[15px] sm:text-base text-[#8A94A6] max-w-2xl">
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {items.map((t, i) => (
            <TileCard key={i} tile={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TileCard({ tile }: { tile: Tile }) {
  const clickable = Boolean(tile.href || tile.onClick);
  const Wrapper: any = tile.href ? "a" : "div";

  const fit = tile.fit ?? "contain";
  const position = tile.position ?? "50% 50%";

  return (
    <Wrapper
      href={tile.href}
      onClick={tile.onClick}
      className={[
        "group relative overflow-hidden rounded-2xl",
        "bg-white ring-1 ring-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.08)]",
        clickable
          ? "cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Image (framed, no crop by default) */}
      <div className="p-3 sm:p-3.5">
        <div
          className={[
            "relative w-full overflow-hidden",
            "rounded-xl ring-1 ring-black/10",
            "bg-[#F6F8FA]",
            "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
            "aspect-[16/10]",
          ].join(" ")}
        >
          {/* inner “frame lip” */}
          <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-white/60" />

          {/* pad to make it feel like an image frame */}
          <div className="absolute inset-0 p-2 sm:p-2.5">
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-white/0">
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className={[
                  "transition-transform duration-500 ease-out group-hover:scale-[1.02]",
                  fit === "cover" ? "object-cover" : "object-contain",
                ].join(" ")}
                style={{ objectPosition: position }}
              />
            </div>
          </div>

          {/* subtle vignette so letterboxing looks premium */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/6 via-transparent to-transparent" />
        </div>
      </div>

      {/* Text */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[17px] sm:text-lg font-semibold leading-snug text-[#0D1B3D]">
            {tile.title}
          </h3>
          {clickable && (
            <span
              aria-hidden
              className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F6F8FA] ring-1 ring-black/10 text-[#0D1B3D] transition-transform duration-300 group-hover:translate-x-0.5"
              title="Open"
            >
              →
            </span>
          )}
        </div>

        {tile.subtitle && (
          <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-[#8A94A6]">
            {tile.subtitle}
          </p>
        )}
      </div>

      {/* Hover sheen */}
      {clickable && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(600px circle at var(--mx,50%) var(--my,30%), rgba(62,91,169,0.10), transparent 40%)",
          }}
          onMouseMove={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            const r = el.getBoundingClientRect();
            el.style.setProperty("--mx", `${e.clientX - r.left}px`);
            el.style.setProperty("--my", `${e.clientY - r.top}px`);
          }}
        />
      )}
    </Wrapper>
  );
}
