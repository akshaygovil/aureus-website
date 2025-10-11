"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BiometricHUD() {
  const clampX = (x: string) => {
    const num = parseFloat(x);
    if (num <= 5) return "5%";
    if (num >= 95) return "85%";
    return x;
  };

  const dataPoints = [
    {
      id: "arm",
      label: "ARM TORQUE",
      stat: "146 Nm",
      sub: "PEAK STRENGTH",
      color: "#4ABEFF",
      anchor: { x: "47%", y: "38%" },
      panel: { x: "5%", y: "35%" },
    },
    {
      id: "chest",
      label: "CHEST CONTRACTION",
      stat: "92%",
      sub: "MAX INTENSITY",
      color: "#FF4A4A",
      anchor: { x: "52%", y: "43%" },
      panel: { x: "5%", y: "45%" },
    },
    {
      id: "quads",
      label: "QUADRICEPS LOAD",
      stat: "50.4%",
      sub: "BALANCE RATIO",
      color: "#2CB3FF",
      anchor: { x: "50%", y: "74%" },
      panel: { x: "5%", y: "65%" },
    },
    {
      id: "delts",
      label: "DELTOID POWER",
      stat: "+18.6%",
      sub: "OUTPUT VS AVG",
      color: "#C9A227",
      anchor: { x: "56%", y: "26%" },
      panel: { x: "95%", y: "26%" },
    },
    {
      id: "core",
      label: "CORE STABILITY",
      stat: "+6.2s",
      sub: "HOLD DURATION",
      color: "#7AE582",
      anchor: { x: "52%", y: "57%" },
      panel: { x: "95%", y: "54%" },
    },
    {
      id: "calf",
      label: "CALF EXTENSION",
      stat: "+12%",
      sub: "FORCE EFFICIENCY",
      color: "#D3B04D",
      anchor: { x: "55%", y: "83%" },
      panel: { x: "95%", y: "74%" },
    },
  ];

  return (
    <section className="relative w-full min-h-[900px] sm:min-h-[1000px] bg-[#0A0A0A] text-white overflow-hidden flex justify-center items-center">
      {/* Background grid + glow */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(80,180,255,0.1),transparent_80%)] blur-[180px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,transparent_90%,rgba(255,255,255,0.03)_95%),linear-gradient(0deg,transparent_90%,rgba(255,255,255,0.03)_95%)] bg-[length:60px_60px] opacity-10" />

      {/* Athlete */}
      <div className="relative z-10">
        <Image
          src="/physicue.png"
          alt="Athlete"
          width={600}
          height={900}
          className="object-contain opacity-95 drop-shadow-[0_0_50px_rgba(201,162,39,0.25)] max-w-[70vw] sm:max-w-[600px]"
        />
      </div>

      {/* SVG Connecting Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <style>
            {`
              @keyframes subtleShimmer {
                0% { stroke-dashoffset: 0; opacity: 0.25; }
                50% { stroke-dashoffset: -20; opacity: 0.35; }
                100% { stroke-dashoffset: -40; opacity: 0.25; }
              }
            `}
          </style>
        </defs>

        {dataPoints.map((p) => (
          <g key={p.id} filter="url(#softGlow)">
            <line
              x1={clampX(p.panel.x)}
              y1={`calc(${p.panel.y} + 2%)`}
              x2={p.anchor.x}
              y2={p.anchor.y}
              stroke={p.color}
              strokeWidth="1.6"
              strokeOpacity="0.85"
              style={{
                filter: `drop-shadow(0 0 4px ${p.color})`,
              }}
            />
            <line
              x1={clampX(p.panel.x)}
              y1={`calc(${p.panel.y} + 2%)`}
              x2={p.anchor.x}
              y2={p.anchor.y}
              stroke="white"
              strokeWidth="2"
              strokeDasharray="8 80"
              style={{
                mixBlendMode: "screen",
                opacity: 0.2,
                animation: "subtleShimmer 8s linear infinite",
              }}
            />
          </g>
        ))}
      </svg>

      {/* Info Panels */}
      {dataPoints.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="absolute z-20 text-center rounded-xl backdrop-blur-md bg-[#0F0F0F]/80 border px-4 py-3 
                     w-[200px] sm:w-[220px] 
                     text-xs sm:text-sm"
          style={{
            left: clampX(p.panel.x),
            top: p.panel.y,
            borderColor: `${p.color}80`,
            boxShadow: `0 0 12px ${p.color}25`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <p
            className="font-bold uppercase tracking-wide text-[11px] sm:text-[13px]"
            style={{ color: p.color }}
          >
            {p.label}
          </p>
          <div className="flex flex-col items-center mt-1">
            <p
              className="text-lg sm:text-xl font-extrabold leading-none"
              style={{ color: p.color }}
            >
              {p.stat}
            </p>
            <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase mt-1">
              {p.sub}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
