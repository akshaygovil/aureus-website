"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function OneRMShowcase() {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const oneRM =
    weight && reps
      ? Math.round(Number(weight) * (1 + Number(reps) / 30))
      : null;

  return (
    <section className="relative w-full py-32 bg-gradient-to-b from-[#FFFDF5] via-[#FAF8EF] to-[#F8F6EB] overflow-hidden">
      {/* soft glowing background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[20%] left-[25%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.25),transparent_70%)] blur-[150px]" />
        <div className="absolute bottom-[10%] right-[25%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(90,131,215,0.15),transparent_70%)] blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto text-center px-6">
        {/* --- Heading --- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-semibold text-[#1E1E1E] tracking-tight mb-6"
        >
          Built-In Strength Intelligence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-[#4B4B4B] max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Aureus comes with advanced <span className="text-[#C9A227] font-semibold">1RM calculators</span> and
          utilities that let you predict strength, plan progressions, and optimize every lift with precision.
        </motion.p>

        {/* --- Aesthetic Glass Card --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-md p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-[#EDE7D2] shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#1E1E1E]">
            Estimate Your 1RM
          </h3>

          {/* --- Input Fields --- */}
          <div className="flex flex-col gap-5 mb-6">
            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-5 py-3 rounded-full border border-[#E9E2C7] bg-white/70 placeholder:text-gray-400 text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 transition"
            />
            <input
              type="number"
              placeholder="Reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="w-full px-5 py-3 rounded-full border border-[#E9E2C7] bg-white/70 placeholder:text-gray-400 text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 transition"
            />
          </div>

          {/* --- Result Display --- */}
          <div className="h-[80px] flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-[#F9E8A1] to-[#E3D28E] text-[#1E1E1E] shadow-[0_0_30px_rgba(201,162,39,0.25)]">
            {oneRM ? (
              <>
                <p className="text-lg font-medium text-[#4B4B4B]/90">
                  Estimated 1RM
                </p>
                <p className="text-3xl font-semibold">{oneRM} kg</p>
              </>
            ) : (
              <p className="text-[#4B4B4B]/70 text-lg">
                Enter weight & reps to calculate
              </p>
            )}
          </div>
        </motion.div>

        {/* subtle glow accent */}
        <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.15),transparent_80%)] blur-[180px] -z-10" />
      </div>
    </section>
  );
}
