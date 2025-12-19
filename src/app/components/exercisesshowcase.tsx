"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Clock,
  Dumbbell,
  Filter,
  Footprints,
  Layers,
  Lightbulb,
  Mouse,
  TrendingUp,
  VideoOff,
  Wrench,
} from "lucide-react";
import ImageText from "./imagetext";
import HumanBody from "./HumanBody";

type TileData = {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  accent?: "gold" | "blue" | "mint";
};

type ExerciseLibrarySectionProps = {
  libraryScreenshotSrc: string;
  iphoneFrameSrc?: string;
  ctaHref?: string;
};

export const colors = {
  accent: "#3E5BA9", // needed
  navy: "#0D1B3D", // needed
  softcolor: "#8A94A6", // needed
  reallysoftcolor: "#E9EDF3",
  light: "#F6F8FA", // needed
  gold_light: "#E9C85B", // needed
  gold_normal: "#D4AF37", // needed
  gold_dark: "#B78A2E", // needed
  full_light_or_black: "#ffffff", // needed
  full_flipped_light_or_black: "#000000", // needed
  bordercolour: "#656565",
  niche_highlight_text_colour: "rgba(62, 91, 169, 0.22)",
} as const;

/** In your app you have a separate "cardbordercolor". On web, keep it very close. */
const cardbordercolor = "#E3E8F1";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function withAlpha(hex: string, alpha: number) {
  // hex: #RRGGBB
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Vertical drag-to-scroll inside the phone preview (mouse/trackpad). Touch scroll works naturally. */
function useVerticalDragScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const st = useRef({ down: false, startY: 0, startTop: 0, pointerId: -1 });

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;

    st.current.down = true;
    st.current.pointerId = e.pointerId;
    st.current.startY = e.clientY;
    st.current.startTop = el.scrollTop;

    el.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (!st.current.down) return;
    if (st.current.pointerId !== e.pointerId) return;

    const dy = e.clientY - st.current.startY;
    el.scrollTop = st.current.startTop - dy;
  }, []);

  const end = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (st.current.pointerId !== e.pointerId) return;

    st.current.down = false;
    st.current.pointerId = -1;
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {}
  }, []);

  return { ref, onPointerDown, onPointerMove, onPointerUp: end, onPointerCancel: end };
}

function SectionBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "#fff" }} />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            `radial-gradient(900px 520px at 15% 10%, ${withAlpha(colors.accent, 0.16)}, transparent 62%)`,
            `radial-gradient(900px 520px at 85% 16%, ${withAlpha(colors.gold_normal, 0.14)}, transparent 60%)`,
            `radial-gradient(900px 540px at 50% 98%, ${withAlpha(colors.navy, 0.08)}, transparent 60%)`,
          ].join(","),
        }}
      />

      <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_35%,black,transparent)] bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_40%,transparent,rgba(0,0,0,0.06))]" />
    </div>
  );
}

const insetXPercent = 4.5;
const insetYPercent = 2;

function PhoneFrame({
  iphoneFrameSrc,
  children,
}: {
  iphoneFrameSrc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[420px] mx-auto">
      <div
        className={cn(
          "relative rounded-[2.25rem]",
          "shadow-[0_30px_90px_rgba(0,0,0,0.22)]",
          "ring-1 ring-black/10"
        )}
        style={{ aspectRatio: "9/18.5" }}
      >
        <div
          className="absolute overflow-hidden rounded-[1rem]"
          style={{
            top: `${5}%`,
            bottom: `${insetYPercent}%`,
            left: `${insetXPercent}%`,
            right: `${insetXPercent}%`,
          }}
        >
          {children}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/7 via-transparent to-black/10" />
        </div>

        <Image
          src={iphoneFrameSrc}
          alt=""
          aria-hidden="true"
          fill
          className="pointer-events-none select-none object-contain"
          draggable={false}
          priority
        />
      </div>
    </div>
  );
}

function DividerFader() {
  return (
    <div
      className="my-5 h-px w-full"
      style={{
        backgroundImage: `linear-gradient(to right, transparent, ${withAlpha(colors.navy, 0.14)}, transparent)`,
      }}
    />
  );
}
function MiniDivider() {
  return <div className="my-6 w-full" style={{ backgroundColor: colors.reallysoftcolor }} />;
}

function ScrollFades() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${colors.full_light_or_black}, transparent)`,
        }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-12"
        style={{
          backgroundImage: `linear-gradient(to top, ${colors.full_light_or_black}, transparent)`,
        }}
      />
    </>
  );
}

function ScrollMeHint() {
  return (
    <div className="pointer-events-none absolute right-3 top-14 z-20">
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
          "shadow-[0_12px_30px_rgba(0,0,0,0.16)]",
          "ring-1 ring-black/10 backdrop-blur"
        )}
        style={{ backgroundColor: "rgba(255,255,255,0.92)", color: colors.navy }}
      >
        <Mouse className="h-4 w-4 opacity-80" />
        <span className="text-[12px] font-semibold tracking-tight">Scroll</span>
        <ArrowDown className="h-4 w-4 opacity-80 animate-scrollNudge" />
      </div>

      <div className="mt-2 flex justify-end">
        <div className="h-10 w-10 rounded-full bg-black/10 blur-xl opacity-50 animate-floatHint" />
      </div>
    </div>
  );
}

function fmtKg(n: number | null | undefined) {
  if (n == null) return "—";
  const s = Number.isInteger(n) ? String(n) : n.toFixed(1);
  return `${s} kg`;
}

function PrimaryChip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "px-3 py-2 border text-[16px] font-semibold",
        "rounded-lg"
      )}
      style={{
        backgroundColor: colors.accent,
        borderColor: cardbordercolor,
        color: colors.navy,
        marginRight: 8,
        marginBottom: 8,
      }}
    >
      {children}
    </div>
  );
}

function SecondaryChip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "px-3 py-2 border text-[14px] font-medium",
        "rounded-2xl"
      )}
      style={{
        backgroundColor: colors.light,
        borderColor: cardbordercolor,
        color: colors.navy,
        marginRight: 8,
        marginBottom: 8,
      }}
    >
      {children}
    </div>
  );
}

function PBCardRN({
  icon,
  label,
  value,
  detail,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail?: React.ReactNode;
}) {
  return (
    <div
      className="flex-1"
      style={{
        backgroundColor: colors.full_light_or_black,
        borderRadius: 14,
        padding: 14,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.reallysoftcolor,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }}>
        {icon}
        <div className="text-[12px]" style={{ color: colors.navy }}>
          {label}
        </div>
      </div>

      <div className="text-[20px] font-bold tracking-tight" style={{ color: colors.navy }}>
        {value}
      </div>

      {detail ? (
        <div className="text-[12px]" style={{ color: colors.navy }}>
          {detail}
        </div>
      ) : null}
    </div>
  );
}

/** Web replica of your RN MuscleList component (scientific + common). */
function MuscleListWeb({
  title,
  data,
  type,
}: {
  title: string;
  data: string[];
  type: "primary" | "secondary";
}) {
  const isPrimary = type === "primary";

  const cardBg = isPrimary
    ? withAlpha(colors.accent, 0.10)
    : colors.full_light_or_black;

  const borderCol = isPrimary
    ? colors.accent
    : colors.reallysoftcolor;

  return (
    <div
      style={{
        marginBottom: isPrimary ? 26 : 0,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {/* === Title (styles.h3) === */}
      <div
        className="text-[17px] font-bold tracking-[-0.15px]"
        style={{ color: colors.navy }}
      >
        {title}
      </div>

      {data.map((t, i) => {
        const [sci = "", com = ""] = t.split(" - ");

        return (
          <div
            key={`${type}-${i}`}
            className="selection:bg-[rgba(62,91,169,0.22)] selection:text-[#0D1B3D]"
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: cardBg,
              border: `1px solid ${borderCol}`,
              borderRadius: 12,
              padding: "10px 16px",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {/* === Bold Heading Text (styles.bold_heading_text) === */}
              <div
                className="text-[11px] font-bold uppercase"
                style={{ color: colors.accent }}
              >
                {i + 1}. {com}
              </div>

              {/* === Small Text (styles.small_text) === */}
              <div
                className="text-[12px] font-normal leading-[14px]"
                style={{ color: colors.navy }}
              >
                {sci}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** One “interactive scrollable” exercise preview inside the phone — structured 1:1 like your RN SlideModal content. */
function ExerciseDetailPreview({ videoSrc }: { videoSrc?: string }) {
  const drag = useVerticalDragScroll();

  // Demo data (match your RN fields/structure)
  const modalData = useMemo(
    () => ({
      displayName: "Incline Bench Press • Dumbbells",
      type: "Weights",
      bodyPart: "Chest",
      equipment: "Dumbbells",
      primary: ["Pectoralis Major (Clavicular Head) - Upper Chest"],
      secondary: ["Pectoralis Major (Sternal Head) - Middle Chest", "Anterior Deltoid - Front Shoulder", "Triceps Brachii (Long Head) - Triceps (Long Head)", "Triceps Brachii (Lateral Head) - Triceps (Lateral Head)"],
      preparation:
        "Lie back on an incline bench with dumbbells at shoulder height, palms facing forward. Feet flat on the ground.",
      execution:
        "Press the dumbbells up and slightly inward until arms are fully extended. Lower slowly to chest height.",
      keyTips:
        "Control the descent and avoid letting your elbows flare out excessively.",
    }),
    []
  );

  const personalBests = useMemo(
    () => ({
      heaviestKg: 42.5 as number | null,
      heaviestSet: { weight: 42.5, reps: 8 } as { weight: number; reps: number } | null,
      bestE1RMKg: 54.2 as number | null,
      e1rmSet: { weight: 40, reps: 10 } as { weight: number; reps: number } | null,
    }),
    []
  );

  const pbExists = personalBests.heaviestKg != null || personalBests.bestE1RMKg != null;

  // Video states like RN: no video → skeleton → video view
  const hasVideo = true;
  const [loadingVideo, setLoadingVideo] = useState(hasVideo);

  useEffect(() => {
    if (!hasVideo) return;
    const t = setTimeout(() => setLoadingVideo(false), 650);
    return () => clearTimeout(t);
  }, [hasVideo]);

  return (
    <div className="absolute inset-0" style={{ backgroundColor: colors.full_light_or_black, marginTop: '10%' }}>
      <ScrollFades />

      {/* Top handle */}
      <div className="sticky top-0 z-10" style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
        <div className="flex items-center justify-center pt-2.5 pb-1">
          <div className="h-[5px] w-12 rounded-full" style={{ backgroundColor: colors.reallysoftcolor }} />
        </div>
      </div>

      {/* Scroll content */}
      <div
        ref={drag.ref}
        onPointerDown={drag.onPointerDown}
        onPointerMove={drag.onPointerMove}
        onPointerUp={drag.onPointerUp}
        onPointerCancel={drag.onPointerCancel}
        className={cn(
          "h-full overflow-y-auto cursor-grab active:cursor-grabbing",
          "selection:bg-[rgba(62,91,169,0.22)] selection:text-[#0D1B3D]"
        )}
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingBottom: 112, // keep space for sticky footer
          backgroundColor: colors.light,
          paddingTop: 8,
        }}
        aria-label="Scrollable exercise preview"
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-scrollNudge,
            .animate-floatHint,
            .aureusShimmer::before {
              animation: none !important;
            }
          }
          @keyframes scrollNudge {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.85;
            }
            50% {
              transform: translateY(4px);
              opacity: 1;
            }
          }
          @keyframes floatHint {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.35;
            }
            50% {
              transform: translateY(6px);
              opacity: 0.55;
            }
          }
          .animate-scrollNudge {
            animation: scrollNudge 1.2s ease-in-out infinite;
          }
          .animate-floatHint {
            animation: floatHint 1.8s ease-in-out infinite;
          }
          .aureusShimmer {
            position: relative;
            overflow: hidden;
            background: linear-gradient(90deg, #c6ccd4 0%, #d9dee6 35%, #eef1f6 70%, #c6ccd4 100%);
            background-size: 200% 100%;
          }
          .aureusShimmer::before {
            content: "";
            position: absolute;
            inset: 0;
            transform: translateX(-40%);
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.45) 50%,
              transparent 100%
            );
            animation: shimmerMove 1.0s ease-in-out infinite;
          }
          @keyframes shimmerMove {
            0% {
              transform: translateX(-60%);
            }
            100% {
              transform: translateX(60%);
            }
          }
        `}</style>

        {/* Video container (RN: height: width/1.8, radius 20, border) */}
        <div
          className="mt-2 overflow-hidden"
          style={{
            borderRadius: 20,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: colors.reallysoftcolor,
            backgroundColor: colors.full_light_or_black,
            boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
          }}
        >
          <div className="relative aspect-[9/5]">
            {!hasVideo ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <VideoOff className="h-9 w-9" style={{ color: withAlpha(colors.navy, 0.28) }} />
                <div className="text-sm" style={{ color: withAlpha(colors.navy, 0.45) }}>
                  No video available
                </div>
              </div>
            ) : loadingVideo ? (
              <div className="absolute inset-0 aureusShimmer" />
            ) : (
              <video
                src={videoSrc}
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={() => setLoadingVideo(false)}
                onError={() => setLoadingVideo(false)}
              />
            )}

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.08), transparent)",
              }}
            />
          </div>
        </div>

        {/* Title + chips (RN: marginTop: 14, chips wrap) */}
        <div className="mt-[14px]">
          <div className="text-[20px] font-bold tracking-tight" style={{ color: colors.navy }}>
            {modalData.displayName}
          </div>

          <div className="mt-[14px] flex flex-row flex-wrap">
            {!!modalData.type && <PrimaryChip>{modalData.type}</PrimaryChip>}
            {!!modalData.bodyPart && <SecondaryChip>Focus: {modalData.bodyPart}</SecondaryChip>}
            {!!modalData.equipment && <SecondaryChip>Equipment: {modalData.equipment}</SecondaryChip>}
          </div>
        </div>

        <DividerFader />

        {/* Personal Bests (RN structure + styles) */}
        <div>
          <div className="text-[17px] font-bold" style={{ color: colors.navy, marginBottom: 10 }}>
            Personal Bests
          </div>

          {pbExists ? (
            <div className="flex flex-row" style={{ gap: 10, marginTop: 10 }}>
              <PBCardRN
                icon={<Dumbbell className="h-[18px] w-[18px]" style={{ color: colors.gold_normal }} />}
                label="Heaviest Weight"
                value={fmtKg(personalBests.heaviestKg)}
                detail={
                  personalBests.heaviestSet ? (
                    <>
                      Set:{" "}
                      <span className="font-semibold">
                        {personalBests.heaviestSet.weight}kg
                      </span>{" "}
                      × <span className="font-semibold">{personalBests.heaviestSet.reps}</span> reps
                    </>
                  ) : null
                }
              />
              <PBCardRN
                icon={<TrendingUp className="h-[18px] w-[18px]" style={{ color: colors.gold_normal }} />}
                label="Best est. 1RM"
                value={fmtKg(personalBests.bestE1RMKg)}
                detail={
                  personalBests.e1rmSet ? (
                    <>
                      From: <span className="font-semibold">{personalBests.e1rmSet.weight}kg</span> ×{" "}
                      <span className="font-semibold">{personalBests.e1rmSet.reps}</span> reps
                    </>
                  ) : null
                }
              />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors.full_light_or_black,
                padding: 14,
                borderRadius: 14,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: colors.reallysoftcolor,
                gap: 10,
              }}
            >
              <Clock size={26} color={colors.accent} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <div className="text-[14px] font-semibold" style={{ color: colors.navy }}>
                  Exercise never performed before
                </div>
                <div className="text-[13px]" style={{ color: colors.softcolor }}>
                  Log your first set to unlock personal bests.
                </div>
              </div>
            </div>
          )}
        </div>

        <DividerFader />

        {/* Muscle lists (RN MuscleList cards w/ common + scientific) */}
        <MuscleListWeb title="Primary Muscles" data={modalData.primary} type="primary" />
        <MuscleListWeb title="Secondary Muscles" data={modalData.secondary} type="secondary" />

        <DividerFader />

        {/* HumanBody container */}
        <div
          style={{
            backgroundColor: colors.full_light_or_black,
            borderColor: colors.reallysoftcolor,
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 18,
            padding: 14,
          }}
        >
          <HumanBody
            className="w-full h-auto"
            colors={{
              "upper-chest": "#E53935",
              "middle-chest": "#FBC02D",
              "front-shoulder": "#FBC02D",
              "triceps-long-head": "#FBC02D",
              "triceps-lateral-head": "#FBC02D",
            }}
          />
          </div>

        <DividerFader />

        {/* Prep / Exec / Key tips (RN spacing + icon colours) */}
        <div style={{ paddingTop: 6, paddingBottom: 6 }}>
          <div className="flex items-center" style={{ gap: 10 }}>
            <Wrench size={22} color={colors.accent} />
            <div className="text-[17px] font-bold" style={{ color: colors.accent }}>
              Preparation
            </div>
          </div>
          <div className="mt-2 text-[14px] leading-relaxed font-medium" style={{ color: colors.navy }}>
            {modalData.preparation}
          </div>
        </div>

        <MiniDivider />

        <div style={{ paddingTop: 6, paddingBottom: 6 }}>
          <div className="flex items-center" style={{ gap: 10 }}>
            <Footprints size={22} color={colors.accent} />
            <div className="text-[17px] font-bold" style={{ color: colors.accent }}>
              Execution
            </div>
          </div>
          <div className="mt-2 text-[14px] leading-relaxed font-medium" style={{ color: colors.navy }}>
            {modalData.execution}
          </div>
        </div>

        <MiniDivider />

        <div style={{ paddingTop: 6, paddingBottom: 6 }}>
          <div className="flex items-center" style={{ gap: 10 }}>
            <Lightbulb size={22} color={colors.gold_dark} />
            <div className="text-[17px] font-bold" style={{ color: colors.gold_dark }}>
              Key Tips
            </div>
          </div>
          <div className="mt-2 text-[14px] leading-relaxed font-medium" style={{ color: colors.navy }}>
            {modalData.keyTips}
          </div>
        </div>

        <div className="h-6" />
      </div>

      {/* Sticky footer button (RN: borderTop, shadow, padding 5%) */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          backgroundColor: colors.full_light_or_black,
          borderTopWidth: 1,
          borderTopStyle: "solid",
          borderTopColor: colors.reallysoftcolor,
        }}
      >
        <div className="py-2.5" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <button
            type="button"
            className={cn(
              "w-full rounded-2xl px-4 py-3 text-sm font-semibold text-[16px]",
              "active:translate-y-[1px] transition-transform",
            )}
            style={
              pbExists
                ? {
                    backgroundColor: colors.gold_normal,
                    color: colors.navy,
                  }
                : {
                    backgroundColor: colors.accent,
                    color: colors.full_light_or_black,
                  }
            }
          >
            <span className="inline-flex items-center justify-center gap-2">
              Continue <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Tile({ data }: { data: TileData }) {
  const accentRing =
    data.accent === "gold"
      ? "ring-black/10"
      : data.accent === "mint"
      ? "ring-black/10"
      : "ring-black/10";

  const icon =
    data.accent === "gold" ? (
      <Filter className="h-4 w-4" style={{ color: colors.gold_dark }} />
    ) : data.accent === "mint" ? (
      <Layers className="h-4 w-4" style={{ color: colors.accent }} />
    ) : (
      <Layers className="h-4 w-4" style={{ color: colors.accent }} />
    );

  return (
    <div
      className={cn(
        "group relative w-full max-w-[360px] overflow-hidden rounded-3xl",
        "bg-white",
        "ring-1",
        accentRing,
        "shadow-[0_18px_60px_rgba(0,0,0,0.10)]",
        "transition-transform duration-300 will-change-transform",
        "hover:-translate-y-1"
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${withAlpha(colors.gold_normal, 0.10)}, transparent)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.65),transparent_35%,rgba(0,0,0,0.04))]" />

      <div className="relative p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-black/10">
            {icon}
            <span style={{ color: colors.navy }}>{data.badge}</span>
          </span>
          <span className="text-xs" style={{ color: colors.softcolor }}>
            Aureus
          </span>
        </div>

        <div className="mt-4">
          <h4 className="text-base md:text-lg font-semibold tracking-tight" style={{ color: colors.navy }}>
            {data.title}
          </h4>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: colors.softcolor }}>
            {data.description}
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-black/10 bg-white shadow-[0_12px_26px_rgba(0,0,0,0.08)]">
          <div className="relative aspect-[16/10]">
            <Image
              src={data.imageSrc}
              alt={data.title}
              fill
              className="object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-black/10 blur-3xl opacity-30 group-hover:opacity-45 transition-opacity" />
    </div>
  );
}

export default function ExerciseLibrarySectionFinalLight({
  libraryScreenshotSrc,
  iphoneFrameSrc = "/finaliphoneframe.png",
  ctaHref = "#download",
}: ExerciseLibrarySectionProps) {
  return (
    <section className="relative w-full py-16 md:py-24">
      <SectionBg />

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight" style={{ color: colors.navy }}>
            A complete exercise library, built for real training
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: colors.softcolor }}>
            250+ carefully curated exercises — practical movements people actually train with. Organised for fast selection, so you spend less time searching and more time lifting.
          </p>
        </div>

        <ImageText
          title="You won’t outgrow it"
          subtitle="Around 300 movements covering compounds, accessories, and variations — all quick to view, edit, and slot into your workouts as your training evolves."
          screenshotSrc={libraryScreenshotSrc}
          reverse
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <div
              className="rounded-3xl ring-1 ring-[rgba(13,27,61,0.08)] shadow-[0_26px_90px_rgba(0,0,0,0.12)] p-6 md:p-7 backdrop-blur"
              style={{ backgroundColor: "rgba(255,255,255,0.80)", borderColor: withAlpha(colors.navy, 0.10) }}
            >
              <div className="flex items-center gap-2" style={{ color: colors.navy }}>
                <Dumbbell className="h-5 w-5" style={{ color: colors.gold_dark }} />
                <div className="text-sm font-semibold">Preview a full entry</div>
              </div>

              <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: colors.navy }}>
                Everything you need, instantly.
              </h3>

              <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: colors.softcolor }}>
                Scroll the preview to see exactly how an exercise is structured — media, cues, muscles, and context.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Clear media + form cues (no guessing)",
                  "Accurate primary & secondary muscle mapping",
                  "Preparation, execution, and key tips in one place",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border bg-white p-3.5 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
                    style={{ borderColor: colors.reallysoftcolor }}
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full" style={{ backgroundColor: colors.accent }} />
                    <div className="text-sm" style={{ color: colors.navy }}>
                      {t}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold shadow-[0_14px_34px_rgba(0,0,0,0.14)] active:translate-y-[1px] transition-transform"
                  style={{
                    backgroundColor: colors.accent,
                    color: colors.full_light_or_black,
                  }}
                >
                  Explore the app <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <PhoneFrame iphoneFrameSrc={iphoneFrameSrc}>
              <ExerciseDetailPreview videoSrc='https://utdpgflhusmeijpclavl.supabase.co/storage/v1/object/public/exercise_videos/dumbbell-incline-bench-press.mp4'/>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
