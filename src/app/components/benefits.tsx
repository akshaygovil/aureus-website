"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const features = [
    "AI-Powered Workout Builder",
    "Adaptive Progression Tracking",
    "Personalized Analytics & Insights",
    "Real-Time Performance Feedback",
    "Hand-crafted thoughful and minimilistic UI",
    "Ad-Free Environment",
    "Offline Functionality",
  ];

  const plans = ["Aureus", "", "Other Premium Apps", "Top Competitor"];

  const matrix: Record<string, boolean[]> = {
    "AI-Powered Workout Builder": [true, false, true, true],
    "Adaptive Progression Tracking": [true, false, true, true],
    "Personalized Analytics & Insights": [true, false, true, true],
    "Real-Time Performance Feedback": [true, false, false, true],
    "Hand-crafted thoughful and minimilistic UI": [true, false, true, true],
    "Ad-Free Environment": [true, false, true, false],
    "Offline Functionality": [true, false, true, false],
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0D1B3D] text-white py-28">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,131,215,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* ---------- HEADER ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-[#F0D77C] via-[#D4AF37] to-[#B78A2E] bg-clip-text text-transparent tracking-tight"
        >
          Elevate Your Training Intelligence
        </motion.h2>

        <p className="text-[#A7B0C0] text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          <span className="text-[#F0D77C] font-medium">Aureus</span> redefines digital fitness — precision,
          personalization, and aesthetics in perfect harmony.
        </p>

        {/* ---------- TABLE ---------- */}
        <div className="overflow-x-auto rounded-3xl bg-[#101833]/60 border border-[#3E5BA9]/20 backdrop-blur-2xl shadow-[0_0_50px_rgba(90,131,215,0.15)]">
          <table className="w-full min-w-[880px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#3E5BA9]/25 bg-[#0D1533]/60">
                <th className="py-6 px-8 text-base font-semibold text-[#F6F8FA]/90 text-left tracking-wide uppercase">
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan}
                    className={`py-6 px-6 text-center font-semibold tracking-wide text-base ${
                      plan === "Aureus"
                        ? "text-[#F0D77C] relative"
                        : "text-[#9AA4B7]"
                    }`}
                  >
                    {plan === "Aureus" ? (
                      <motion.div
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="inline-block relative"
                      >
                        <span className="relative z-10">{plan}</span>
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(240,215,124,0.15),transparent_60%)] blur-md rounded-full" />
                      </motion.div>
                    ) : (
                      plan
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature}
                  className={`transition-colors duration-300 ${
                    i % 2 === 0 ? "bg-[#101a3f]/40" : "bg-[#0B1333]/40"
                  } hover:bg-[#1B2957]/50`}
                >
                  <td className="py-5 px-8 text-[15px] font-medium text-[#E9EDF3]">
                    {feature}
                  </td>
                  {matrix[feature].map((hasFeature, j) => {
                    const isAureus = plans[j] === "Aureus";
                    return (
                      <td key={j} className="py-5 px-6 text-center">
                        {hasFeature ? (
                          <motion.div
                            whileHover={{ scale: 1.08 }}
                            className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-300 ${
                              isAureus
                                ? "border-[#D4AF37]/50 bg-[#F0D77C]/15 shadow-[0_0_14px_rgba(240,215,124,0.25)]"
                                : "border-[#5A83D7]/40 bg-[#1A264D]/60 shadow-[0_0_8px_rgba(90,131,215,0.3)]"
                            }`}
                          >
                            <Check
                              className={`w-4 h-4 ${
                                isAureus
                                  ? "text-[#FFD65A]"
                                  : "text-[#6FA3FF]"
                              }`}
                            />
                          </motion.div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#3E5BA9]/25 bg-[#0C1230]/60 shadow-[inset_0_0_6px_rgba(0,0,0,0.4)]">
                            <X className="w-4 h-4 text-[#A0A8BA]/70" />
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------- CTA ---------- */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mt-14 relative px-12 py-3.5 text-base font-semibold rounded-lg text-[#0D1B3D] bg-gradient-to-r from-[#F0D77C] via-[#D4AF37] to-[#B78A2E] shadow-[0_0_40px_rgba(240,215,124,0.35)] hover:shadow-[0_0_70px_rgba(240,215,124,0.55)] transition-all"
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Start Your Precision Journey
          </motion.span>
        </motion.button>

        <p className="mt-6 text-[#8A94A6] text-sm tracking-wide">
          Intelligence meets aesthetics. Only with{" "}
          <span className="text-[#F0D77C]">Aureus</span>.
        </p>
      </div>

      {/* Ambient bottom glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(ellipse_at_bottom,rgba(240,215,124,0.2),transparent_70%)] blur-[120px]" />
    </section>
  );
}
