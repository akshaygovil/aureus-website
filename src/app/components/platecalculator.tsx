"use client";
import React, { useEffect, useMemo, useState } from "react";

/* ---------- Types ---------- */
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
  const r = (b >> 16) & 255, g = (b >> 8) & 255, bl = b & 255;
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

/* ---------- Barbell SVG (continuous shaft) ---------- */
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
  const width = 680;
  const height = width / ASPECT;
  const CX = VIEW_W / 2;
  const CY = VIEW_H / 2;
  const leftSleeveStartX = CX - SHAFT_LEN / 2;
  const rightSleeveEndX = CX + SHAFT_LEN / 2;
  const counts = computePerSide(totalKg, 20, activeSpecs, 0.25);

  const mkSide = (side: "L" | "R") => {
    const dir = side === "L" ? -1 : +1;
    let cursor =
      side === "L" ? leftSleeveStartX - COLLAR_WIDTH : rightSleeveEndX + COLLAR_WIDTH;
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
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* --- Metallic gradients --- */}
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

      {/* --- Continuous steel shaft --- */}
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

      {/* --- Collars (slightly thicker rings) --- */}
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

      {/* --- Plates with realistic bevels and gloss --- */}
      {[...left, ...right].map(({ x, t, d, r, spec, key }) => {
        const gradId = `plate-${key}`;
        const textColor = isDark(spec.faceColor) ? "#fff" : "#0F172A";

        return (
          <g key={key}>
            <defs>
              {/* radial face shading for each plate */}
              <radialGradient id={gradId} cx="50%" cy="50%" r="65%">
                <stop offset="0%" stopColor={spec.faceColor} stopOpacity="1" />
                <stop offset="65%" stopColor={spec.faceColor} stopOpacity="0.95" />
                <stop
                  offset="100%"
                  stopColor={spec.bevelColor ?? spec.faceColor}
                  stopOpacity="1"
                />
              </radialGradient>
            </defs>

            {/* plate body */}
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
            {/* inner highlight rim */}
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
            {/* vertical gloss overlay */}
            <rect
              x={x - t / 2}
              y={CY - r}
              width={t}
              height={d}
              rx={Math.min(3 * scale, t / 2)}
              fill="url(#plateGloss)"
            />
            {/* weight text */}
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
  );
}


/* ---------- Main Component ---------- */
export default function PlateCalculatorFixed() {
  const [weight, setWeight] = useState("60");
  const [barType, setBarType] = useState<BarType>("standard");

  const setForType = barType === "powerlifting" ? POWERLIFTING_KG_PLATES : STANDARD_KG_PLATES;
  const [available, setAvailable] = useState<Record<number, boolean>>(
    () => Object.fromEntries(setForType.map((p) => [p.value, true]))
  );

  useEffect(() => {
    setAvailable(Object.fromEntries(setForType.map((p) => [p.value, true])));
  }, [barType]);

  const numericWeight = Math.min(toNumber(weight), 600);
  const togglePlate = (v: number) =>
    setAvailable((prev) => ({ ...prev, [v]: !(prev[v] !== false) }));

  /* --- compute achieved weight --- */
  const activeSpecs = setForType.filter((p) => available[p.value] !== false);
  const counts = computePerSide(numericWeight, 20, activeSpecs, 0.25);
  const achieved = 20 + 2 * activeSpecs.reduce((sum, s, i) => sum + counts[i] * s.value, 0);
  const isExact = Math.abs(achieved - numericWeight) < 0.001;
  const maxExceeded =
    (barType === "standard" && numericWeight > 300) ||
    (barType === "powerlifting" && numericWeight > 470);

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#F8F9FC] text-[#1E1E1E]">
      <div className="w-full max-w-[420px] bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden p-6">
        {/* Weight Input */}
        <div className="border border-gray-200 rounded-2xl shadow-sm py-5 px-4 mb-6 text-center">
          <p className="text-gray-600 text-sm mb-2">Total weight</p>
          <div className="flex justify-between items-center gap-6">
            <button
              onClick={() => setWeight(String(prevStep(weight)))}
              className="w-12 h-12 rounded-xl border border-gray-300 text-2xl font-bold hover:bg-gray-50"
            >
              –
            </button>

            <div className="flex-1 text-center">
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value.replace(/[^0-9.]/g, ""))}
                className="w-full text-center text-5xl font-extrabold bg-transparent outline-none"
              />
              <span className="text-lg font-semibold text-gray-600">kg</span>
            </div>

            <button
              onClick={() => setWeight(String(nextStep(weight)))}
              className="w-12 h-12 rounded-xl border border-gray-300 text-2xl font-bold hover:bg-gray-50"
            >
              +
            </button>
          </div>

          {/* --- Error message --- */}
          <div className="mt-4 text-sm font-medium">
            {maxExceeded ? (
              <p className="text-red-600">
                Maximum weight for {barType} barbell is{" "}
                {barType === "standard" ? "300" : "470"} kg.
              </p>
            ) : !isExact ? (
              <p className="text-amber-600">
                Closest achievable weight: {achieved.toFixed(2)} kg
              </p>
            ) : null}
          </div>
        </div>

        {/* Mode Tabs */}
        <div className="flex rounded-xl bg-white border border-gray-200 mb-6 overflow-hidden">
          {(["standard", "powerlifting"] as const).map((t, i) => (
            <button
              key={t}
              onClick={() => setBarType(t)}
              className={`flex-1 py-3 font-bold text-sm ${
                barType === t ? "bg-[#F9F7F2] text-[#BFA36F]" : "text-gray-700"
              } ${i === 1 ? "border-l border-gray-200" : ""}`}
            >
              {t === "standard" ? "Standard" : "Power"}
            </button>
          ))}
        </div>

        {/* Barbell */}
        <div className="border border-gray-200 rounded-2xl shadow-sm p-4 mb-6">
          <BarbellSVG totalKg={numericWeight} barType={barType} available={available} />
          <div className="mt-4 flex justify-center gap-1">
            <div className="h-[1px] w-5 bg-[#E7D9B8]" />
            <p className="text-gray-500 text-xs">
              {barType === "standard" ? "Standard plates" : "Powerlifting plates"}
            </p>
            <div className="h-[1px] w-5 bg-[#E7D9B8]" />
          </div>
        </div>

        {/* Plate Chips */}
        <div className="grid grid-cols-5 gap-2 mb-8">
          {setForType.map((p) => (
            <button
              key={p.value}
              onClick={() => togglePlate(p.value)}
              className={`flex flex-col items-center rounded-xl border px-2 py-2 text-sm font-bold ${
                available[p.value] !== false
                  ? "border-blue-400/40"
                  : "border-black/10 text-gray-400"
              }`}
            >
              <div
                className="w-5 h-5 rounded-sm mb-1"
                style={{ backgroundColor: p.faceColor }}
              />
              {p.value}
              <span
                className={`text-emerald-500 ${
                  available[p.value] !== false ? "opacity-100" : "opacity-0"
                }`}
              >
                ✓
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
