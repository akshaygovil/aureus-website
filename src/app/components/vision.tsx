"use client";

import { motion } from "framer-motion";

export default function MyVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F8FA] py-28 sm:py-36">
      {/* --- Background Glows --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(13,27,61,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* ---------- HEADLINE ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-[#0D1B3D] leading-tight mb-6"
        >
          My Vision for <span className="text-[#D4AF37]">Aureus</span>
        </motion.h2>

        {/* ---------- SUBTEXT ---------- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed mb-12"
        >
          I built Aureus to bridge science and soul — to create a training
          experience that feels alive, adaptive, and deeply personal.
          <br className="hidden sm:block" />
          <span className="text-[#0D1B3D] font-medium">
            Because real strength isn’t just built — it’s discovered.
          </span>
        </motion.p>

        {/* ---------- VISUAL SYMBOL ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center mb-12"
        >
          <div className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2),transparent_70%)] blur-[80px]" />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-[260px] h-[260px] rounded-full border-[6px] border-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.25)] bg-gradient-to-br from-[#FDFCFB] via-[#F3EBDD] to-[#E2C96E] flex flex-col items-center justify-center"
          >
            <h3 className="text-2xl font-semibold tracking-wide text-[#0D1B3D]">
              Strength. Reimagined.
            </h3>
          </motion.div>
        </motion.div>

        {/* ---------- CORE STATEMENTS ---------- */}
        <div className="grid md:grid-cols-3 gap-10 text-left mt-12">
          {[
            {
              title: "Human x AI",
              text: "Every plan, every rep, every recovery phase—intelligently adapted to your data and your rhythm. You evolve, so should your training.",
            },
            {
              title: "Design with Purpose",
              text: "Aureus isn’t cluttered with noise. Every pixel, sound, and motion is built to focus your mind and amplify discipline.",
            },
            {
              title: "Beyond the Gym",
              text: "We’re not just building an app. We’re building a movement—a new standard for what human performance can look like.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.15)] transition-all duration-500 border border-[#E9EDF3]"
            >
              <h4 className="text-2xl font-semibold text-[#0D1B3D] mb-3">
                {item.title}
              </h4>
              <p className="text-[#4B5563]">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* ---------- CTA ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="#join"
            className="inline-block bg-[#D4AF37] text-[#0D1B3D] font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Join the Movement
          </a>
          <p className="text-sm text-[#6B7280] mt-4">
            The future of training begins here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
