"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1E1E1E] flex flex-col items-center px-6">
      {/* --- HERO --- */}
      <section className="w-full max-w-6xl text-center pt-32 pb-20 relative">
        {/* Soft background glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#F5EAC2] via-[#FFF8E1] to-transparent blur-[160px]" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-semibold tracking-tight mb-6"
        >
          About <span className="text-[#C9A227]">Aureus</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-[#4B4B4B] max-w-2xl mx-auto leading-relaxed"
        >
          We’re redefining what it means to train intelligently — blending
          design, technology, and science into a single experience built for
          lifters who demand more from their workouts and their tools.
        </motion.p>
      </section>

      {/* --- STORY --- */}
      <section className="w-full max-w-6xl py-20 border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Aureus began as a response to noise — endless apps, trackers,
              and distractions that overcomplicate fitness. We built something
              radically simpler: a refined environment where focus thrives and
              every rep has meaning.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every design choice, every feature, and every animation was
              crafted to serve one purpose — helping lifters stay consistent,
              disciplined, and inspired without unnecessary friction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl h-80 bg-gradient-to-br from-[#FFFDF4] to-[#F9F7E8] border border-[#C9A227]/20 shadow-inner"
          />
        </div>
      </section>

      {/* --- MISSION --- */}
      <section className="w-full max-w-6xl py-20 border-t border-gray-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold mb-4"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[#555] max-w-2xl mx-auto mb-12"
        >
          To create a timeless platform that merges clarity, performance, and
          mastery — giving lifters the power to track, grow, and evolve without
          friction or distraction.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Simplicity",
              desc: "Every screen, gesture, and motion is intentional — designed to help you move with precision and focus.",
              icon: "🧘‍♂️",
            },
            {
              title: "Science",
              desc: "Grounded in proven strength principles and refined with modern AI insights for measurable results.",
              icon: "⚗️",
            },
            {
              title: "Sustainability",
              desc: "Progress that compounds — not through chaos, but through consistency, minimalism, and mastery.",
              icon: "♻️",
            },
          ].map(({ title, desc, icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="w-full max-w-5xl py-24 border-t border-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-[#FDF8E4] to-[#FFFDF4] rounded-2xl p-12 border border-[#C9A227]/20"
        >
          <h2 className="text-3xl font-semibold mb-4">Join the Movement</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Built for lifters who demand precision. Train smarter. Live stronger.
          </p>
          <a
            href="/"
            className="px-8 py-3 rounded-full bg-[#C9A227] text-white font-semibold hover:bg-[#B5951F] transition"
          >
            Back to Home
          </a>
        </motion.div>
      </section>
    </main>
  );
}
