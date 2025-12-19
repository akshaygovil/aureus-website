"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import HumanBody from "./HumanBody";

type BarType = "standard" | "powerlifting";
type PlateSpec = {
  value: number;
  faceColor: string;
  bevelColor?: string;
  thicknessMM: number;
  diameterMM: number;
};

/* ---------- Plate Libraries ---------- */
const STANDARD_KG_PLATES: PlateSpec[] = [
  { value: 20, faceColor: "#1976D2", bevelColor: "#0F3C6E", thicknessMM: 50, diameterMM: 450 },
  { value: 10, faceColor: "#388E3C", bevelColor: "#1F4F1D", thicknessMM: 44, diameterMM: 340 },
  { value: 5, faceColor: "#FBC02D", bevelColor: "#9A7415", thicknessMM: 38, diameterMM: 250 },
  { value: 2.5, faceColor: "#D32F2F", bevelColor: "#7A1B1B", thicknessMM: 34, diameterMM: 190 },
  { value: 1.25, faceColor: "#9E9E9E", bevelColor: "#5C5C5C", thicknessMM: 28, diameterMM: 130 },
];

const POWERLIFTING_KG_PLATES: PlateSpec[] = [
  { value: 25, faceColor: "#D32F2F", bevelColor: "#7A1B1B", thicknessMM: 34, diameterMM: 450 },
  { value: 20, faceColor: "#1976D2", bevelColor: "#0F3C6E", thicknessMM: 32, diameterMM: 450 },
  { value: 15, faceColor: "#FBC02D", bevelColor: "#9A7415", thicknessMM: 30, diameterMM: 450 },
  { value: 10, faceColor: "#388E3C", bevelColor: "#1F4F1D", thicknessMM: 28, diameterMM: 450 },
  { value: 5, faceColor: "#FFFFFF", bevelColor: "#BDBDBD", thicknessMM: 24, diameterMM: 450 },
  { value: 2.5, faceColor: "#000000", bevelColor: "#333333", thicknessMM: 20, diameterMM: 210 },
  { value: 1.25, faceColor: "#AAAAAA", bevelColor: "#666666", thicknessMM: 18, diameterMM: 160 },
];

/* ---------- Helpers ---------- */
const toNumber = (v: string | number) => (Number.isFinite(+v) ? +v : 0);

const nextStep = (v: string | number, step = 2.5) =>
  Math.max(0, Math.ceil(toNumber(v) / step) * step + (toNumber(v) % step === 0 ? step : 0));

const prevStep = (v: string | number, step = 2.5) =>
  Math.max(0, Math.floor(toNumber(v) / step) * step - (toNumber(v) % step === 0 ? step : 0));

const floorTo = (v: number, step: number) => Math.floor((v + 1e-9) / step) * step;

const isDark = (hex: string) => {
  const b = parseInt(hex.replace("#", ""), 16);
  const r = (b >> 16) & 255,
    g = (b >> 8) & 255,
    bl = b & 255;
  return (r * 299 + g * 587 + bl * 114) / 1000 < 150;
};

function computePerSide(total: number, bar: number, specs: PlateSpec[], minInc: number) {
  const load = Math.max(0, total - bar);
  let perSide = load / 2;
  const values = specs.map((s) => s.value);
  const step = Math.min(minInc, Math.min(...values.filter((v) => v > 0)));
  const counts = new Array(specs.length).fill(0);

  for (let i = 0; i < specs.length; i++) {
    const p = values[i];
    if (p <= 0) continue;
    const n = Math.floor((perSide + 1e-9) / p);
    if (n > 0) {
      counts[i] = n;
      perSide = floorTo(perSide - n * p, step);
    }
  }
  return counts;
}

/* ---------- Apple-style glass tile ---------- */
function GlassTile({
  title,
  subtitle,
  children,
  className,
}: {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative shrink-0 snap-start",
        "w-[320px] sm:w-[340px] xl:w-[360px]",
        "h-[560px]",
        "rounded-[28px] overflow-hidden",
        "bg-white/45 backdrop-blur-2xl",
        "border border-white/60",
        "shadow-[0_30px_90px_rgba(15,23,42,0.14)]",
        "ring-1 ring-black/5",
        className ?? "",
      ].join(" ")}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-28 left-8 w-[420px] h-[420px] rounded-full blur-[55px]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(201,162,39,0.22), rgba(255,255,255,0) 62%)",
          }}
        />
        <div
          className="absolute -bottom-28 -right-10 w-[440px] h-[440px] rounded-full blur-[60px]"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(90,131,215,0.20), rgba(255,255,255,0) 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.10) 55%, rgba(255,255,255,0.22) 100%)",
          }}
        />
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)" }} />
      </div>

      <div className="relative h-full flex flex-col">
        {(title || subtitle) && (
          <div className="px-6 pt-6 pb-4">
            {title && <h3 className="text-[18px] font-semibold tracking-tight text-[#141414]">{title}</h3>}
            {subtitle && <p className="mt-1 text-[13px] leading-relaxed text-[#3C3C3C]/80">{subtitle}</p>}
          </div>
        )}

        <div className="px-6 pb-6 flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto pr-1 [scrollbar-width:thin]">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Barbell SVG ---------- */
function BarbellSVG({
  totalKg,
  barType,
  available,
}: {
  totalKg: number;
  barType: BarType;
  available: Record<number, boolean>;
}) {
  const set = barType === "powerlifting" ? POWERLIFTING_KG_PLATES : STANDARD_KG_PLATES;
  const activeSpecs = useMemo(
    () => set.filter((p) => available[p.value] !== false).sort((a, b) => b.value - a.value),
    [set, available]
  );

  const scale = 1;
  const MM_TO_PX = 0.35 * scale;
  const THICKNESS_SCALE = 1.55 * scale;
  const GAP_PX = 3 * scale;
  const SHAFT_LEN = 800 * MM_TO_PX;
  const SHAFT_DIAM = 34 * MM_TO_PX;
  const SLEEVE_DIAM = 56 * MM_TO_PX;
  const SLEEVE_LEN = 620 * MM_TO_PX;
  const COLLAR_WIDTH = 34 * scale;
  const VIEW_W = SHAFT_LEN + 2 * (SLEEVE_LEN + 80 * scale);
  const VIEW_H = Math.max(...set.map((p) => p.diameterMM)) * MM_TO_PX + 60 * scale;
  const ASPECT = VIEW_W / VIEW_H;

  const CX = VIEW_W / 2;
  const CY = VIEW_H / 2;
  const leftSleeveStartX = CX - SHAFT_LEN / 2;
  const rightSleeveEndX = CX + SHAFT_LEN / 2;

  const counts = computePerSide(totalKg, 20, activeSpecs, 0.25);

  const mkSide = (side: "L" | "R") => {
    const dir = side === "L" ? -1 : +1;
    let cursor = side === "L" ? leftSleeveStartX - COLLAR_WIDTH : rightSleeveEndX + COLLAR_WIDTH;
    const arr: any[] = [];
    for (let i = 0; i < activeSpecs.length; i++) {
      const n = counts[i];
      if (!n) continue;
      const spec = activeSpecs[i];
      const t = Math.max(12 * scale, spec.thicknessMM * MM_TO_PX * THICKNESS_SCALE);
      const d = spec.diameterMM * MM_TO_PX;
      const r = d / 2;
      for (let c = 0; c < n; c++) {
        const x = cursor + dir * (t / 2);
        arr.push({ x, t, d, r, spec, key: `${side}-${i}-${c}` });
        cursor += dir * (t + GAP_PX);
      }
    }
    return arr;
  };

  const left = mkSide("L");
  const right = mkSide("R");

  return (
    <div className="w-full" style={{ aspectRatio: `${ASPECT}` }}>
      <svg className="w-full h-full" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="steelSmooth" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A9B3BC" />
            <stop offset="25%" stopColor="#E6EBEF" />
            <stop offset="50%" stopColor="#F6F7F8" />
            <stop offset="75%" stopColor="#D0D6DC" />
            <stop offset="100%" stopColor="#A9B3BC" />
          </linearGradient>

          <linearGradient id="plateGloss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="85%" stopColor="#000000" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <rect
          x={leftSleeveStartX - (SLEEVE_LEN + COLLAR_WIDTH)}
          y={CY - SHAFT_DIAM / 2}
          width={SHAFT_LEN + 2 * (SLEEVE_LEN + COLLAR_WIDTH)}
          height={SHAFT_DIAM}
          rx={SHAFT_DIAM / 2}
          fill="url(#steelSmooth)"
          stroke="rgba(0,0,0,0.15)"
          strokeWidth={0.8}
        />

        <rect
          x={leftSleeveStartX - COLLAR_WIDTH}
          y={CY - SLEEVE_DIAM / 2 - 3}
          width={COLLAR_WIDTH}
          height={SLEEVE_DIAM + 6}
          rx={4}
          fill="url(#steelSmooth)"
          stroke="rgba(0,0,0,0.2)"
          strokeWidth={1}
        />
        <rect
          x={rightSleeveEndX}
          y={CY - SLEEVE_DIAM / 2 - 3}
          width={COLLAR_WIDTH}
          height={SLEEVE_DIAM + 6}
          rx={4}
          fill="url(#steelSmooth)"
          stroke="rgba(0,0,0,0.2)"
          strokeWidth={1}
        />

        {[...left, ...right].map(({ x, t, d, r, spec, key }) => {
          const gradId = `plate-${key}`;
          const textColor = isDark(spec.faceColor) ? "#fff" : "#0F172A";

          return (
            <g key={key}>
              <defs>
                <radialGradient id={gradId} cx="50%" cy="50%" r="65%">
                  <stop offset="0%" stopColor={spec.faceColor} stopOpacity="1" />
                  <stop offset="65%" stopColor={spec.faceColor} stopOpacity="0.95" />
                  <stop offset="100%" stopColor={spec.bevelColor ?? spec.faceColor} stopOpacity="1" />
                </radialGradient>
              </defs>

              <rect
                x={x - t / 2}
                y={CY - r}
                width={t}
                height={d}
                rx={Math.min(3 * scale, t / 2)}
                fill={`url(#${gradId})`}
                stroke={spec.bevelColor ?? "#000"}
                strokeOpacity="0.22"
                strokeWidth={1.1 * scale}
              />
              <rect
                x={x - t / 2 + 0.8 * scale}
                y={CY - r + 0.8 * scale}
                width={t - 1.6 * scale}
                height={d - 1.6 * scale}
                rx={Math.min(2.5 * scale, t / 2)}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth={0.9 * scale}
                fill="transparent"
              />
              <rect
                x={x - t / 2}
                y={CY - r}
                width={t}
                height={d}
                rx={Math.min(3 * scale, t / 2)}
                fill="url(#plateGloss)"
              />
              <text
                x={x}
                y={CY}
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight={700}
                fontSize={Math.max(12 * scale, Math.min(26 * scale, t * 0.72))}
                fill={textColor}
              >
                {spec.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* -------------------- Heatmap (Tile 3) -------------------- */
type HeatmapMode = "category1" | "category2" | "gradient";

const BUCKETS1 = [
  { upTo: 0.15, color: "#EAEAEA" },
  { upTo: 0.35, color: "#C9A227" },
  { upTo: 0.6, color: "#5A83D7" },
  { upTo: 1.0, color: "#0D1B3D" },
] as const;

const BUCKETS2 = [
  { upTo: 0.15, color: "#EFEFEF" },
  { upTo: 0.35, color: "#F2B8B8" },
  { upTo: 0.6, color: "#E55353" },
  { upTo: 1.0, color: "#7A1B1B" },
] as const;

export function getVolumeColor(volume: number, maxVolume: number, mode: HeatmapMode): string {
  const safeMax = maxVolume > 0 ? maxVolume : 1;
  const ratio = Math.min(1, Math.max(0, volume / safeMax));

  if (mode === "category1" || mode === "category2") {
    const buckets = mode === "category1" ? BUCKETS1 : BUCKETS2;
    const bucket = buckets.find((b) => ratio <= b.upTo) ?? buckets[buckets.length - 1];
    return bucket.color;
  }

  // opacity/gradient
  const start = { r: 0xe0, g: 0xe0, b: 0xe0 }; // #E0E0E0
  const end = { r: 0xe5, g: 0x53, b: 0x53 }; // #E55353
  const r = Math.round(start.r + (end.r - start.r) * ratio);
  const g = Math.round(start.g + (end.g - start.g) * ratio);
  const b = Math.round(start.b + (end.b - start.b) * ratio);
  return `rgb(${r},${g},${b})`;
}

// ✅ Replace with YOUR real SVG ids (these are common examples)
const MUSCLE_IDS = [
  // chest
  "upper-chest",
  "middle-chest",

  // shoulders / arms
  "front-shoulder",
  "side-shoulder",
  "rear-shoulder",
  "triceps-long-head",
  "triceps-lateral-head",
  "triceps-medial-head",
  "forearms",

  // back
  "upper-trapezius",
  "lower-trapezius",
  "upper-back",
  "lats-mid-back",
  "lower-back",

  // core
  "internal-obliques",
  "external-obliques",
  "upper-abdominals",
  "lower-abdominals",
  "serratus-anterior",

  // hips / legs
  "hip-flexors",
  "hip-adductors",
  "hip-abductors",
  "glutes",
  "inner-quadriceps",
  "middle-quadriceps",
  "outer-quadriceps",
  "inner-hamstrings",
  "outer-hamstrings",
  "gastrocnemius",
  "soleus",
  "tibialis-anterior",
] as const;

type VolumeMap = Record<string, number>;

function makeStableVolumes(ids: readonly string[]): VolumeMap {
  // Pick a consistent set of “active” muscles (you can tweak these)
  const active: Record<string, number> = {
    "middle-chest": 14,
    "upper-chest": 10,
    "side-shoulder": 12,
    "triceps-long-head": 9,
    "lats-mid-back": 16,
    "upper-abdominals": 8,
    glutes: 18,
    "middle-quadriceps": 15,
    gastrocnemius: 7,
  };

  const out: VolumeMap = {};
  for (const id of ids) out[id] = active[id] ?? 0;
  return out;
}

function randomVolumes(ids: readonly string[], picks = 4): VolumeMap {
  const shuffled = [...ids].sort(() => Math.random() - 0.5);
  const chosen = new Set(shuffled.slice(0, Math.max(1, Math.min(picks, ids.length))));
  const out: VolumeMap = {};
  for (const id of ids) {
    out[id] = chosen.has(id) ? Math.floor(4 + Math.random() * 18) : 0;
  }
  return out;
}

function nextMode(m: HeatmapMode): HeatmapMode {
  if (m === "category1") return "category2";
  if (m === "category2") return "gradient";
  return "category1";
}

function HeatmapTileBody({
  modes,
  getVolumeColor,
}: {
  modes: Array<{ id: HeatmapMode; label: string }>;
  getVolumeColor: (volume: number, maxVolume: number, mode: HeatmapMode) => string;
}) {
  const [heatMode, setHeatMode] = useState<HeatmapMode>("category1");
  const [hover, setHover] = useState<{ id: string; x: number; y: number } | null>(null);

  // ✅ stable volumes — never change when mode changes
  const volumes = useMemo(() => makeStableVolumes(MUSCLE_IDS), []);

  const maxVolume = useMemo(() => {
    const vals = Object.values(volumes);
    return vals.length ? Math.max(...vals) : 1;
  }, [volumes]);

  // ✅ only depends on heatMode (and volumes), so shaded muscles stay the same
  const heatColors = useMemo(() => {
    const out: Record<string, string> = {};
    for (const id of MUSCLE_IDS) {
      const v = volumes[id] ?? 0;
      if (v > 0) out[id] = getVolumeColor(v, maxVolume, heatMode);
    }
    return out;
  }, [volumes, maxVolume, heatMode, getVolumeColor]);

  return (
    <div className="space-y-4">
      {/* 3-option toggle */}
      <div className="rounded-2xl border border-white/65 bg-white/55 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
        <div className="grid grid-cols-3 gap-1">
          {modes.map((m) => {
            const active = heatMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setHeatMode(m.id)}
                className={[
                  "px-2 py-2 rounded-xl text-[11px] sm:text-xs font-medium transition",
                  active
                    ? "bg-white/85 text-[#141414] shadow-[0_10px_24px_rgba(15,23,42,0.10)]"
                    : "text-[#4B4B4B]/80 hover:text-[#141414] hover:bg-white/40",
                ].join(" ")}
              >
                {m.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* heatmap card */}
      <div className="relative rounded-2xl border border-white/65 bg-white/55 p-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
        {/* Tooltip */}
        {hover && (
          <div
            className="pointer-events-none absolute z-20 px-3 py-2 rounded-xl bg-white/90 backdrop-blur border border-black/10 shadow-lg"
            style={{ left: hover.x + 10, top: hover.y + 10 }}
          >
            <div className="text-[11px] font-semibold text-[#0D1B3D]">{hover.id}</div>
            <div className="text-[11px] text-[#6E7A8C]">Volume: {volumes[hover.id] ?? 0}</div>
          </div>
        )}

        <HumanBody
          className="w-full h-auto max-h-[360px] select-none"
          colors={heatColors}
          onRegionHoverStart={(id, e) => {
            const svg = (e.currentTarget.ownerSVGElement ?? (e.currentTarget as any)) as SVGElement | null;
            const rect = svg?.getBoundingClientRect();
            if (!rect) return setHover({ id, x: 0, y: 0 });
            setHover({ id, x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
          onRegionHoverEnd={(id) => setHover((h) => (h?.id === id ? null : h))}
        />
      </div>

      {/* summary */}
      <div className="flex items-center justify-between text-[11px] text-[#4B4B4B]/80">
        <span>
          Max: <span className="font-semibold text-[#141414]">{maxVolume}</span>
        </span>
        <span>
          Active:{" "}
          <span className="font-semibold text-[#141414]">
            {Object.values(volumes).filter((v) => v > 0).length}
          </span>
        </span>
      </div>
    </div>
  );
}


/* -------------------- Main component -------------------- */
export default function AureusFeatureShowcase() {
  /* Tile 1: 1RM */
  const [oneRMWeight, setOneRMWeight] = useState("");
  const [oneRMReps, setOneRMReps] = useState("");
  const oneRM =
    oneRMWeight && oneRMReps ? Math.round(Number(oneRMWeight) * (1 + Number(oneRMReps) / 30)) : null;

  /* Tile 2: plates */
  const [weight, setWeight] = useState("60");
  const [barType, setBarType] = useState<BarType>("standard");
  const setForType = barType === "powerlifting" ? POWERLIFTING_KG_PLATES : STANDARD_KG_PLATES;

  const [available, setAvailable] = useState<Record<number, boolean>>(
    () => Object.fromEntries(setForType.map((p) => [p.value, true]))
  );

  useEffect(() => {
    setAvailable(Object.fromEntries(setForType.map((p) => [p.value, true])));
  }, [barType, setForType]);

  const numericWeight = Math.min(toNumber(weight), 600);
  const togglePlate = (v: number) => setAvailable((prev) => ({ ...prev, [v]: !(prev[v] !== false) }));

  const activeSpecs = setForType.filter((p) => available[p.value] !== false);
  const counts = computePerSide(numericWeight, 20, activeSpecs, 0.25);
  const achieved = 20 + 2 * activeSpecs.reduce((sum, s, i) => sum + counts[i] * s.value, 0);
  const isExact = Math.abs(achieved - numericWeight) < 0.001;
  const maxExceeded =
    (barType === "standard" && numericWeight > 300) || (barType === "powerlifting" && numericWeight > 470);

  /* Tile 3: heatmap */
  const [heatMode, setHeatMode] = useState<HeatmapMode>("category1");
  const [volumes, setVolumes] = useState<VolumeMap>(() => randomVolumes(MUSCLE_IDS, 4));
  const [hover, setHover] = useState<{ id: string; x: number; y: number } | null>(null);

  const maxVolume = useMemo(() => {
    const vals = Object.values(volumes);
    return vals.length ? Math.max(...vals) : 1;
  }, [volumes]);

  const heatColors = useMemo(() => {
    const out: Record<string, string> = {};
    for (const id of MUSCLE_IDS) {
      const v = volumes[id] ?? 0;
      if (v > 0) out[id] = getVolumeColor(v, maxVolume, heatMode);
    }
    return out;
  }, [volumes, maxVolume, heatMode]);

  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-[#FFFDF5] via-[#FAF8EF] to-[#F8F6EB] overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[8%] left-[8%] w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.22),transparent_70%)] blur-[150px]" />
        <div className="absolute bottom-[8%] right-[8%] w-[650px] h-[650px] bg-[radial-gradient(circle_at_center,rgba(90,131,215,0.18),transparent_70%)] blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1E1E1E] tracking-tight">
            Precision tools. Built right in.
          </h2>
          <p className="mt-5 text-[15px] sm:text-lg text-[#4B4B4B] max-w-2xl mx-auto leading-relaxed">
            Get a feel of some parts of the app.
          </p>
        </motion.div>

        <div className="mt-14">
          <div className="flex flex-nowrap gap-5 overflow-x-auto pb-4 -mx-2 px-2 snap-x snap-mandatory">
            {/* Tile 1: 1RM */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <GlassTile title="1RM Calculator" subtitle="Estimate your max in seconds.">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <input
                      type="number"
                      placeholder="Weight (kg)"
                      value={oneRMWeight}
                      onChange={(e) => setOneRMWeight(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-white/70 bg-white/70 placeholder:text-gray-400 text-[#141414]
                                 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/35 transition"
                    />
                    <input
                      type="number"
                      placeholder="Reps"
                      value={oneRMReps}
                      onChange={(e) => setOneRMReps(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-white/70 bg-white/70 placeholder:text-gray-400 text-[#141414]
                                 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/35 transition"
                    />
                  </div>

                  <div className="rounded-2xl border border-white/65 bg-white/55 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <div className="flex items-center justify-between">
                      <p className="text-xs tracking-[0.18em] uppercase text-[#4B4B4B]/70">Estimated</p>
                      <div className="h-2 w-2 rounded-full bg-[#C9A227]/70 shadow-[0_0_18px_rgba(201,162,39,0.35)]" />
                    </div>

                    <div className="mt-3">
                      {oneRM ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-semibold tracking-tight text-[#141414]">{oneRM}</span>
                          <span className="text-sm text-[#4B4B4B]/80">kg</span>
                        </div>
                      ) : (
                        <p className="text-sm text-[#4B4B4B]/75">Enter weight + reps.</p>
                      )}
                    </div>

                    <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />

                    <p className="mt-4 text-[13px] leading-relaxed text-[#4B4B4B]/80">
                      Built for fast decisions between sets — no clutter, no extra taps.
                    </p>
                  </div>
                </div>
              </GlassTile>
            </motion.div>

            {/* Tile 2: Plates */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              <GlassTile title="Plate Calculator" subtitle="Match your target with what you have.">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/65 bg-white/55 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setWeight(String(prevStep(weight)))}
                        className="h-9 w-9 rounded-xl border border-black/10 bg-white/70 text-lg font-semibold text-[#141414]
                                   hover:bg-white transition active:scale-[0.98]"
                        aria-label="Decrease weight"
                      >
                        –
                      </button>

                      <div className="flex items-end gap-2">
                        <input
                          value={weight}
                          onChange={(e) => setWeight(e.target.value.replace(/[^0-9.]/g, ""))}
                          className="w-[92px] text-center text-4xl font-semibold tracking-tight text-[#141414] bg-transparent outline-none"
                        />
                        <span className="pb-1 text-xs tracking-[0.18em] uppercase text-[#4B4B4B]/70">kg</span>
                      </div>

                      <button
                        onClick={() => setWeight(String(nextStep(weight)))}
                        className="h-9 w-9 rounded-xl border border-black/10 bg-white/70 text-lg font-semibold text-[#141414]
                                   hover:bg-white transition active:scale-[0.98]"
                        aria-label="Increase weight"
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-3 text-xs text-[#4B4B4B]/75">
                      {maxExceeded
                        ? `⚠️ Max: ${barType === "standard" ? 300 : 470} kg`
                        : isExact
                        ? "Perfect match"
                        : `Closest: ${achieved.toFixed(1)} kg`}
                    </p>
                  </div>

                  <div className="flex rounded-2xl border border-white/65 bg-white/55 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    {(["standard", "powerlifting"] as const).map((t) => {
                      const active = barType === t;
                      return (
                        <button
                          key={t}
                          onClick={() => setBarType(t)}
                          className={[
                            "flex-1 py-2 text-xs font-medium rounded-xl transition",
                            active
                              ? "bg-white/80 text-[#141414] shadow-[0_8px_22px_rgba(15,23,42,0.10)]"
                              : "text-[#4B4B4B]/80 hover:text-[#141414]",
                          ].join(" ")}
                        >
                          {t === "standard" ? "Standard" : "Power"}
                        </button>
                      );
                    })}
                  </div>

                  <div className="rounded-2xl border border-white/65 bg-white/55 p-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <BarbellSVG totalKg={numericWeight} barType={barType} available={available} />
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {setForType.map((p) => {
                      const on = available[p.value] !== false;
                      return (
                        <motion.button
                          key={p.value}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => togglePlate(p.value)}
                          className={[
                            "rounded-xl border px-2 py-2 text-[11px] font-semibold transition",
                            "flex flex-col items-center justify-center",
                            on
                              ? "border-white/70 bg-white/70 text-[#141414] shadow-[0_8px_18px_rgba(15,23,42,0.06)]"
                              : "border-black/10 bg-white/40 text-[#4B4B4B]/50",
                          ].join(" ")}
                        >
                          <div className="w-4 h-4 rounded-md mb-1" style={{ backgroundColor: p.faceColor }} />
                          {p.value}
                          {on && <span className="mt-0.5 text-[10px] text-emerald-600 font-bold">✓</span>}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </GlassTile>
            </motion.div>

            {/* Tile 3: Human heatmap + toggle */}
<motion.div
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.1 }}
>
  <GlassTile title="Muscle heatmap" subtitle="Same data. Different rendering modes.">
    {(() => {
      // local helpers inside render (keeps your file tidy)
      const modes: Array<{ id: HeatmapMode; label: string }> = [
        { id: "category1", label: "Colour buckets" },
        { id: "category2", label: "Red buckets" },
        { id: "gradient", label: "Linear gradient" },
      ];

      return (
        <HeatmapTileBody
          modes={modes}
          getVolumeColor={getVolumeColor}
        />
      );
    })()}
  </GlassTile>
</motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
