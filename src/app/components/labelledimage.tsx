"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useId, useLayoutEffect, useMemo, useRef, useState } from "react";

/* ---------------------------------------------
  Types
--------------------------------------------- */

export type Label = {
  id: string;
  title: string;
  description?: string;

  /** Point on the visible SCREEN area (percent strings) */
  anchor: {
    top: string; // "22%"
    left: string; // "52%"
  };

  /** Desktop panel position relative to the PHONE container */
  panel: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    transform?: string;
  };
};

type Props = {
  screenshotSrc: string;
  phoneFrameSrc: string;
  labels: Label[];

  widthPx?: number;
  insetXPercent?: number;
  insetYPercent?: number;

  dotColor?: string;
  dotRingColor?: string;

  lineColor?: string;
  lineGlowColor?: string;

  labelBg?: string;
  labelBorderColor?: string;
  labelTitleColor?: string;
  labelDescColor?: string;

  labelWidthPx?: number;
  labelScale?: number;

  dotSizePx?: number;
  lineWidthPx?: number;
  lineGlowWidthPx?: number;
};

/* ---------------------------------------------
  Helpers
--------------------------------------------- */

function snapForStroke(v: number, strokeWidth: number) {
  const w = Math.max(1, Math.round(strokeWidth));
  return w % 2 === 0 ? Math.round(v) : Math.round(v) + 0.5;
}

function middlePointOnRectEdgeFacingPoint(
  from: { x: number; y: number },
  rect: { left: number; top: number; right: number; bottom: number }
) {
  const cx = (rect.left + rect.right) / 2;
  const cy = (rect.top + rect.bottom) / 2;
  const dx = from.x - cx;
  const dy = from.y - cy;

  // Choose the edge that faces the point, attach at center of that edge
  if (Math.abs(dx) > Math.abs(dy)) {
    return { x: dx > 0 ? rect.right : rect.left, y: cy };
  }
  return { x: cx, y: dy > 0 ? rect.bottom : rect.top };
}

/* ---------------------------------------------
  Component
--------------------------------------------- */

export default function LabeledPhoneMockup({
  screenshotSrc,
  phoneFrameSrc,
  labels,
  widthPx = 360,
  insetXPercent = 7,
  insetYPercent = 2,

  dotColor = "#C9A227",
  dotRingColor = "rgba(201,162,39,0.18)",

  lineColor = "rgba(201,162,39,0.92)",
  lineGlowColor = "rgba(201,162,39,0.35)",

  labelBg = "rgba(255,255,255,0.92)",
  labelBorderColor = "rgba(0,0,0,0.10)",
  labelTitleColor = "#0D1B3D",
  labelDescColor = "rgba(138,148,166,1)",

  labelWidthPx = 260,
  labelScale = 1,

  dotSizePx = 10,
  lineWidthPx = 2,
  lineGlowWidthPx = 6,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);

  const dotRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const mobilePillRef = useRef<HTMLDivElement | null>(null);

  const [isDesktop, setIsDesktop] = useState(false);

  // ✅ allow "no selection" on mobile (empty string)
  const [activeId, setActiveId] = useState<string>(labels[0]?.id ?? "");

  type Line = { id: string; x1: number; y1: number; x2: number; y2: number };
  const [lines, setLines] = useState<Line[]>([]);

  const labelIds = useMemo(() => labels.map((l) => l.id).join("|"), [labels]);
  const rawId = useId();
  const glowId = useMemo(() => `softGlow${rawId.replaceAll(":", "")}`, [rawId]);

  // responsive switch
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  // sizes
  const dotSize = isDesktop ? dotSizePx : Math.max(12, Math.round(dotSizePx * 1.2));
  const mobileLineW = isDesktop ? lineWidthPx : Math.max(3, lineWidthPx + 1);
  const mobileGlowW = isDesktop ? lineGlowWidthPx : Math.max(8, lineGlowWidthPx + 3);

  const phoneWidth = `clamp(260px, 92vw, ${widthPx}px)`;

  const activeLabel = useMemo(() => {
    if (!activeId) return null;
    return labels.find((l) => l.id === activeId) ?? null;
  }, [labels, activeId]);

  const closeMobilePanel = () => {
    if (!isDesktop) setActiveId("");
  };

  const toggleSelect = (id: string) => {
    // Desktop always selects (panels are always shown anyway)
    if (isDesktop) {
      setActiveId(id);
      return;
    }
    // Mobile: tap same id = close
    setActiveId((prev) => (prev === id ? "" : id));
  };

  // recompute lines
  useLayoutEffect(() => {
    const containerEl = containerRef.current;
    const screenEl = screenRef.current;
    if (!containerEl || !screenEl) return;

    let raf = 0;

    const recompute = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const containerRect = containerEl.getBoundingClientRect();
        const next: Line[] = [];

        if (isDesktop) {
          // Desktop: dot -> desktop panel edge (all labels)
          for (const label of labels) {
            const dotEl = dotRefs.current[label.id];
            const panelEl = panelRefs.current[label.id];
            if (!dotEl || !panelEl) continue;

            const d = dotEl.getBoundingClientRect();
            const p = panelEl.getBoundingClientRect();

            const dot = {
              x: d.left - containerRect.left + d.width / 2,
              y: d.top - containerRect.top + d.height / 2,
            };

            const panelRect = {
              left: p.left - containerRect.left,
              top: p.top - containerRect.top,
              right: p.right - containerRect.left,
              bottom: p.bottom - containerRect.top,
            };

            const end = middlePointOnRectEdgeFacingPoint(dot, panelRect);

            next.push({
              id: label.id,
              x1: snapForStroke(dot.x, lineWidthPx),
              y1: snapForStroke(dot.y, lineWidthPx),
              x2: snapForStroke(end.x, lineWidthPx),
              y2: snapForStroke(end.y, lineWidthPx),
            });
          }
        } else {
          // ✅ Mobile: only draw if there's an active label AND pill exists
          if (activeLabel?.id) {
            const dotEl = dotRefs.current[activeLabel.id];
            const pillEl = mobilePillRef.current;

            if (dotEl && pillEl) {
              const d = dotEl.getBoundingClientRect();
              const p = pillEl.getBoundingClientRect();

              const dot = {
                x: d.left - containerRect.left + d.width / 2,
                y: d.top - containerRect.top + d.height / 2,
              };

              const pillRect = {
                left: p.left - containerRect.left,
                top: p.top - containerRect.top,
                right: p.right - containerRect.left,
                bottom: p.bottom - containerRect.top,
              };

              const end = middlePointOnRectEdgeFacingPoint(dot, pillRect);

              next.push({
                id: activeLabel.id,
                x1: snapForStroke(dot.x, mobileLineW),
                y1: snapForStroke(dot.y, mobileLineW),
                x2: snapForStroke(end.x, mobileLineW),
                y2: snapForStroke(end.y, mobileLineW),
              });
            }
          }
        }

        setLines(next);
      });
    };

    recompute();

    const ro = new ResizeObserver(recompute);
    ro.observe(containerEl);
    ro.observe(screenEl);

    if (isDesktop) {
      for (const label of labels) {
        const panelEl = panelRefs.current[label.id];
        if (panelEl) ro.observe(panelEl);
      }
    } else {
      if (mobilePillRef.current) ro.observe(mobilePillRef.current);
    }

    const onResize = () => recompute();
    const onScroll = () => recompute();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, true);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [isDesktop, labelIds, labels, activeId, activeLabel, lineWidthPx, mobileLineW, lineGlowWidthPx, mobileGlowW]);

  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col items-center">
        <div ref={containerRef} className="relative aspect-[886/1725] overflow-visible" style={{ width: phoneWidth }}>
          {/* Screenshot clip area */}
          <div
            ref={screenRef}
            className="absolute z-10 overflow-hidden"
            style={{
              top: `${insetYPercent}%`,
              bottom: `${insetYPercent}%`,
              left: `${insetXPercent}%`,
              right: `${insetXPercent}%`,
            }}
          >
            <div className="relative h-full w-full">
              <Image src={screenshotSrc} alt="App screenshot" fill className="object-cover select-none" priority />

              {/* Dots (tap targets) */}
              {labels.map((label, idx) => {
                const isActive = !isDesktop && activeLabel?.id === label.id;
                return (
                  <button
                    key={`${label.id}-dot`}
                    ref={(node) => {
                      dotRefs.current[label.id] = node;
                    }}
                    type="button"
                    aria-label={label.title}
                    onClick={() => toggleSelect(label.id)}
                    className="absolute z-30 rounded-full grid place-items-center"
                    style={{
                      top: label.anchor.top,
                      left: label.anchor.left,
                      width: dotSize,
                      height: dotSize,
                      background: dotColor,
                      transform: "translate(-50%, -50%)",
                      boxShadow: `0 0 0 ${isDesktop ? 2 : isActive ? 5 : 4}px ${dotRingColor}`,
                      border: isActive ? "1px solid rgba(255,255,255,0.85)" : "none",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      className="select-none font-semibold"
                      style={{
                        fontSize: isDesktop ? 0 : 10,
                        lineHeight: 1,
                        color: "rgba(13,27,61,0.92)",
                        opacity: isDesktop ? 0 : 1,
                      }}
                    >
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Phone frame */}
          <Image
            src={phoneFrameSrc}
            alt="Phone frame"
            fill
            className="object-contain pointer-events-none select-none z-20"
            priority
          />

          {/* Leader lines (DESKTOP: all, MOBILE: active only if open) */}
          <svg className="absolute inset-0 z-30 pointer-events-none" style={{ overflow: "visible" }}>
            <defs>
              <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {lines.map((l) => (
              <g key={l.id}>
                <line
                  x1={l.x1}
                  y1={l.y1}
                  x2={l.x2}
                  y2={l.y2}
                  stroke={lineGlowColor}
                  strokeWidth={isDesktop ? lineGlowWidthPx : mobileGlowW}
                  strokeLinecap="round"
                  filter={`url(#${glowId})`}
                />
                <line
                  x1={l.x1}
                  y1={l.y1}
                  x2={l.x2}
                  y2={l.y2}
                  stroke={lineColor}
                  strokeWidth={isDesktop ? lineWidthPx : mobileLineW}
                  strokeLinecap="round"
                />
              </g>
            ))}
          </svg>

          {/* Desktop panels around phone */}
          {labels.map((label, index) => (
            <motion.div
              key={label.id}
              ref={(node) => {
                panelRefs.current[label.id] = node;
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.35 }}
              className="absolute z-40 hidden sm:block"
              style={label.panel}
            >
              <div
                className="rounded-xl shadow-[0_22px_70px_rgba(0,0,0,0.20)] px-4 py-3"
                style={{
                  width: labelWidthPx,
                  transform: `scale(${labelScale})`,
                  transformOrigin: "top left",
                  background: labelBg,
                  border: `1px solid ${labelBorderColor}`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <h4 className="font-semibold text-sm" style={{ color: labelTitleColor }}>
                  {label.title}
                </h4>
                {label.description && (
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: labelDescColor }}>
                    {label.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {/* ✅ Mobile: ACTIVE info pill (closable) */}
          <div className="sm:hidden absolute z-40 left-1/2 -translate-x-1/2 bottom-[10%] w-[92%]">
            {activeLabel && (
              <motion.div
                key={activeLabel.id}
                ref={mobilePillRef}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="relative rounded-2xl shadow-[0_22px_60px_rgba(0,0,0,0.22)] px-4 py-3"
                style={{
                  background: labelBg,
                  border: `1px solid ${labelBorderColor}`,
                  backdropFilter: "blur(14px)",
                }}
              >
                {/* close button */}
                <button
                  type="button"
                  onClick={closeMobilePanel}
                  aria-label="Close panel"
                  className="absolute right-2 top-2 rounded-lg px-2 py-1 text-[14px] leading-none"
                  style={{
                    color: "rgba(13,27,61,0.72)",
                    background: "rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  ✕
                </button>

                <div className="flex items-start gap-3 pr-8">
                  <div
                    className="mt-[6px] rounded-full"
                    style={{
                      width: 12,
                      height: 12,
                      background: dotColor,
                      boxShadow: `0 0 0 4px ${dotRingColor}`,
                      flex: "0 0 auto",
                    }}
                  />
                  <div className="min-w-0">
                    <div className="text-[11px] tracking-wide uppercase opacity-70" style={{ color: labelTitleColor }}>
                      Tap dots to explore
                    </div>
                    <div className="mt-1 font-semibold text-[14px] leading-snug" style={{ color: labelTitleColor }}>
                      {activeLabel.title}
                    </div>
                    {activeLabel.description && (
                      <div className="mt-1 text-[12px] leading-relaxed" style={{ color: labelDescColor }}>
                        {activeLabel.description}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Optional mobile legend */}
        <div className="sm:hidden w-full max-w-[560px] px-4 mt-3">
          <div className="grid gap-2">
            {labels.map((l, idx) => {
              const selected = activeLabel?.id === l.id;
              return (
                <button
                  key={`${l.id}-legend`}
                  type="button"
                  onClick={() => toggleSelect(l.id)}
                  className="text-left rounded-xl px-3 py-2 border"
                  style={{
                    background: selected ? "rgba(201,162,39,0.10)" : "transparent",
                    borderColor: selected ? "rgba(201,162,39,0.35)" : "rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-full grid place-items-center font-semibold"
                      style={{
                        width: 20,
                        height: 20,
                        background: dotColor,
                        color: "rgba(13,27,61,0.92)",
                        boxShadow: `0 0 0 3px ${dotRingColor}`,
                        fontSize: 11,
                        flex: "0 0 auto",
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-[13px]" style={{ color: labelTitleColor }}>
                        {l.title}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
