"use client";

import React, { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";

type Plan = "Aureus" | "Leading Competitors" | "Typical Fitness Apps";
type PlanKey = "aureus" | "otherPremium" | "topCompetitor";

const PLANS: { label: Plan; key: PlanKey }[] = [
  { label: "Aureus", key: "aureus" },
  { label: "Leading Competitors", key: "otherPremium" },
  { label: "Typical Fitness Apps", key: "topCompetitor" },
];

const FEATURES = [
  "Ultra-minimal, premium interface",
  "Blazing-fast performance (instant feel)",
  "Daily AI coaching feedback",
  "Weekly AI progress summary",
  "Transformation slideshows (auto-built)",
  "PR detection + milestone highlights",
  "Strength trend graphs (per lift)",
  "1RM prediction curves (auto-estimates)",
  "Muscle heatmap by weekly volume",
  "Workout history + volume analysis",
  "Weight trend analytics + pace insights",
  "Weekly schedule planner (assign days)",
  "Custom workouts + reusable templates",
  "AI workout builder (goal-based)",
  "Rest timers with audio cues",
  "Plate calculator (load the bar fast)",
  "Built in auto-computed DOTS calculator",
  "Physique photos",
  "250+ curated exercise library",
  "Exercise filters (muscle/equipment)",
  "Bar & line charts",
  "Lifetime stats (sets, reps, volume)",
  "Ad-free, zero distractions",
  "On-device data storage (local by default)",
  "Offline-first — works without signal",
] as const;

type Feature = (typeof FEATURES)[number];

const MATRIX: Record<Feature, Record<PlanKey, boolean>> = {
  "Ultra-minimal, premium interface": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Blazing-fast performance (instant feel)": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Daily AI coaching feedback": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Weekly AI progress summary": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Transformation slideshows (auto-built)": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "PR detection + milestone highlights": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "Strength trend graphs (per lift)": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "1RM prediction curves (auto-estimates)": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "Muscle heatmap by weekly volume": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "Workout history + volume analysis": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Weight trend analytics + pace insights": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Weekly schedule planner (assign days)": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "Custom workouts + reusable templates": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "AI workout builder (goal-based)": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "Rest timers with audio cues": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Plate calculator (load the bar fast)": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Built in auto-computed DOTS calculator": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Physique photos": {
    aureus: true,
    otherPremium: false,
    topCompetitor: true,
  },
  "250+ curated exercise library": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Exercise filters (muscle/equipment)": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Bar & line charts": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Lifetime stats (sets, reps, volume)": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Ad-free, zero distractions": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "On-device data storage (local by default)": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Offline-first — works without signal": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
};

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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
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
  return (
    <div className="flex items-center justify-center">
      {value ? (
        <div
          className={[
            "inline-flex items-center justify-center",
            "h-9 w-9 rounded-lg border",
            "transition-transform duration-200 will-change-transform",
            highlighted
              ? "border-[#D4AF37]/50 bg-[#F0D77C]/15 shadow-[0_0_14px_rgba(240,215,124,0.22)]"
              : "border-[#5A83D7]/35 bg-[#1A264D]/60 shadow-[0_0_8px_rgba(90,131,215,0.25)]",
          ].join(" ")}
        >
          <Check
            className={[
              "h-4 w-4",
              highlighted ? "text-[#FFD65A]" : "text-[#6FA3FF]",
            ].join(" ")}
          />
        </div>
      ) : (
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#3E5BA9]/20 bg-[#0C1230]/60 shadow-[inset_0_0_6px_rgba(0,0,0,0.35)]">
          <X className="h-4 w-4 text-[#A0A8BA]/70" />
        </div>
      )}
    </div>
  );
});

export default function ComparisonTable({
  onCtaClick,
}: {
  onCtaClick?: () => void;
}) {
  const reduce = useReducedMotion();

  // Precompute rows once (prevents re-creating arrays/objects each render)
  const rows = useMemo(() => {
    return FEATURES.map((feature) => {
      const row = MATRIX[feature];
      return {
        feature,
        values: PLANS.map((p) => ({
          key: p.key,
          highlighted: p.key === "aureus",
          value: row[p.key],
        })),
      };
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0D1B3D] text-white">
      {/* subtle background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,131,215,0.08),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20 md:py-24">
        {/* Header */}
        <FadeIn className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#F0D77C] via-[#D4AF37] to-[#B78A2E] bg-clip-text text-transparent">
            Serious tracking. Zero noise.
          </h2>
          <p className="mt-4 text-[15px] sm:text-base md:text-lg text-[#A7B0C0] max-w-2xl mx-auto leading-relaxed">
            <span className="text-[#F0D77C] font-medium">Aureus</span> is built
            for lifters who care about data — clean visuals, real analytics, and
            an offline-first experience that stays fast.
          </p>
        </FadeIn>

        {/* Table wrapper: no “weird” layout shifts on mobile */}
        <FadeIn delay={0.05} className="mt-10 sm:mt-12">
          <div className="rounded-3xl border border-[#3E5BA9]/20 bg-[#101833]/55 backdrop-blur-2xl shadow-[0_0_50px_rgba(90,131,215,0.14)] overflow-hidden">
            {/* Mobile-first: allow horizontal scroll without forcing giant min-width */}
            <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
              <table className="w-full border-collapse text-left">
                <thead className="sticky top-0 z-10">
                  <tr className="border-b border-[#3E5BA9]/25 bg-[#0D1533]/70">
                    <th className="py-4 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-[#F6F8FA]/90 tracking-wide uppercase">
                      Feature
                    </th>

                    {PLANS.map((p) => (
                      <th
                        key={p.key}
                        className={[
                          "py-4 sm:py-5 px-3 sm:px-5 text-center",
                          "text-xs sm:text-sm font-semibold tracking-wide",
                          p.key === "aureus" ? "text-[#F0D77C]" : "text-[#9AA4B7]",
                        ].join(" ")}
                      >
                        {p.key === "aureus" && !reduce ? (
                          <motion.span
                            className="relative inline-flex items-center justify-center"
                            animate={{ opacity: [0.75, 1, 0.75] }}
                            transition={{ repeat: Infinity, duration: 3.5 }}
                          >
                            <span className="relative z-10">{p.label}</span>
                            <span
                              aria-hidden
                              className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(240,215,124,0.14),transparent_60%)] blur-md"
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
                        i % 2 === 0 ? "bg-[#101a3f]/35" : "bg-[#0B1333]/35",
                        "hover:bg-[#1B2957]/45",
                      ].join(" ")}
                    >
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-[13px] sm:text-[15px] font-medium text-[#E9EDF3]">
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

        {/* CTA */}
        <FadeIn delay={0.1} className="text-center">
          <motion.button
            type="button"
            onClick={onCtaClick}
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.99 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="mt-10 sm:mt-12 inline-flex items-center justify-center rounded-xl px-8 sm:px-10 py-3.5 text-sm sm:text-base font-semibold text-[#0D1B3D] bg-gradient-to-r from-[#F0D77C] via-[#D4AF37] to-[#B78A2E] shadow-[0_0_40px_rgba(240,215,124,0.32)] hover:shadow-[0_0_70px_rgba(240,215,124,0.5)] transition-shadow"
          >
            {reduce ? (
              "Download App"
            ) : (
              <motion.span
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                Download App
              </motion.span>
            )}
          </motion.button>

          <p className="mt-4 text-[#8A94A6] text-xs sm:text-sm tracking-wide">
            Built for consistency. Designed for focus.{" "}
            <span className="text-[#F0D77C]">Aureus</span>.
          </p>
        </FadeIn>
      </div>

      {/* bottom ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[520px] sm:h-[700px] bg-[radial-gradient(ellipse_at_bottom,rgba(240,215,124,0.18),transparent_70%)] blur-[120px]"
      />
    </section>
  );
}
