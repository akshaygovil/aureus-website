"use client";

import React, { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { FEATURES, MATRIX, PLANS } from "../assets/constants";

const FadeIn: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }} // ✅ mount fallback (prevents “blank on mobile”)
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Cell = memo(function Cell({
  value,
  highlighted,
}: {
  value: boolean;
  highlighted?: boolean;
}) {
  const tickShell = highlighted
    ? "border-[#D4AF37]/45 bg-[#FFF6D9] shadow-[0_10px_26px_rgba(212,175,55,0.18)]"
    : "border-emerald-200 bg-emerald-50 shadow-[0_10px_26px_rgba(16,185,129,0.12)]";

  const tickIcon = highlighted ? "text-[#B88A1E]" : "text-emerald-700";

  const crossShell =
    "border-rose-200 bg-rose-50 shadow-[0_10px_26px_rgba(244,63,94,0.10)]";

  const crossIcon = "text-rose-600";

  return (
    <div className="flex items-center justify-center">
      {value ? (
        <div
          className={[
            "inline-flex items-center justify-center",
            "h-9 w-9 rounded-xl border",
            "transition-transform duration-200 will-change-transform",
            tickShell,
          ].join(" ")}
        >
          <Check className={["h-4 w-4", tickIcon].join(" ")} />
        </div>
      ) : (
        <div
          className={[
            "inline-flex items-center justify-center",
            "h-9 w-9 rounded-xl border",
            "transition-transform duration-200 will-change-transform",
            crossShell,
          ].join(" ")}
        >
          <X className={["h-4 w-4", crossIcon].join(" ")} />
        </div>
      )}
    </div>
  );
});

Cell.displayName = "Cell";

export default function ComparisonTable() {
  const reduce = useReducedMotion();

  const rows = useMemo(() => {
    return FEATURES.map((feature) => {
      // ✅ guard: prevents a crash if MATRIX[feature] is missing
      const row = (MATRIX as Record<string, any>)[feature] ?? {};

      return {
        feature,
        values: PLANS.map((p) => ({
          key: p.key,
          highlighted: p.key === "aureus",
          value: Boolean(row[p.key]), // ✅ force boolean
        })),
      };
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F6F8FA] text-slate-900">
      {/* background: aurora ribbons + subtle grain (no grid) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rotate-[-8deg] blur-3xl opacity-70"
          style={{
            background:
              "conic-gradient(from 220deg at 50% 50%, rgba(30,58,138,0.18), rgba(212,175,55,0.14), rgba(99,102,241,0.14), rgba(246,248,250,0) 60%)",
          }}
        />
        <div
          className="absolute -bottom-48 left-[-120px] h-[520px] w-[720px] rotate-[18deg] blur-3xl opacity-75"
          style={{
            background:
              "radial-gradient(closest-side at 40% 40%, rgba(212,175,55,0.18), rgba(246,248,250,0) 70%)",
          }}
        />
        <div
          className="absolute -bottom-56 right-[-140px] h-[560px] w-[780px] rotate-[-10deg] blur-3xl opacity-70"
          style={{
            background:
              "radial-gradient(closest-side at 50% 50%, rgba(30,58,138,0.14), rgba(246,248,250,0) 72%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.13] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22120%22%20height=%22120%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22120%22%20height=%22120%22%20filter=%22url(%23n)%22%20opacity=%220.35%22/%3E%3C/svg%3E')] [background-size:180px_180px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20 md:py-24">
        <FadeIn className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] bg-gradient-to-r from-[#B88A1E] via-[#D4AF37] to-[#8A6A12] bg-clip-text text-transparent">
            Serious tracking. Zero noise.
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See how <span className="font-semibold text-slate-800">Aureus</span>{" "}
            compares to leading competitors and typical fitness apps — from
            interface and performance to the depth of insight you actually get
            from your training.
          </p>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-10 sm:mt-12">
          <div className="rounded-3xl border border-slate-200 bg-white/72 backdrop-blur-2xl shadow-[0_18px_70px_rgba(15,23,42,0.10)] overflow-hidden relative">
            {/* top sheen */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(212,175,55,0.14),transparent_70%)]"
            />

            <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
              <table className="w-full border-collapse text-left">
                <thead className="sticky top-0 z-10">
                  <tr className="border-b border-slate-200/90 bg-white/88 backdrop-blur">
                    <th className="py-3 sm:py-5 px-3 sm:px-6 text-[10px] sm:text-sm font-semibold text-slate-700 tracking-wide uppercase">
                      Feature
                    </th>

                    {PLANS.map((p) => (
                      <th
                        key={p.key}
                        className={[
                          "py-3 sm:py-5 px-2 sm:px-5 text-center",
                          "text-[10px] sm:text-sm font-semibold tracking-wide",
                          p.key === "aureus" ? "text-[#B88A1E]" : "text-slate-500",
                        ].join(" ")}
                      >
                        {p.key === "aureus" && !reduce ? (
                          <motion.span
                            className="relative inline-flex items-center justify-center"
                            animate={{ opacity: [0.78, 1, 0.78] }}
                            transition={{ repeat: Infinity, duration: 3.5 }}
                          >
                            <span className="relative z-10">{p.label}</span>
                            <span
                              aria-hidden
                              className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_60%)] blur-md"
                            />
                          </motion.span>
                        ) : (
                          <span>{p.label}</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={[
                        "transition-colors duration-200",
                        i % 2 === 0 ? "bg-slate-50/60" : "bg-white/40",
                        "hover:bg-[#D4AF37]/[0.06]",
                      ].join(" ")}
                    >
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-[13px] sm:text-[15px] font-medium text-slate-900">
                        {row.feature}
                      </td>

                      {row.values.map((v) => (
                        <td key={v.key} className="py-4 sm:py-5 px-3 sm:px-5">
                          <Cell value={v.value} highlighted={v.highlighted} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[520px] sm:h-[700px] bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.14),transparent_70%)] blur-[130px]"
      />
    </section>
  );
}
