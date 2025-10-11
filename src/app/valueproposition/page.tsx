"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Adaptive Intelligence",
    desc: "Aureus learns from every rep — dynamically visualizing how your muscles respond, adapt, and grow.",
    x: "70%", y: "25%", arrowFrom: "60% 50%",
  },
  {
    id: 2,
    title: "Precision Analytics",
    desc: "Every workout paints a data-driven heatmap of your entire body. See balance, fatigue, and recovery in real time.",
    x: "30%", y: "60%", arrowFrom: "45% 70%",
  },
  {
    id: 3,
    title: "Smart Recovery",
    desc: "Aureus identifies stress points and guides you to optimal recovery windows for sustainable progress.",
    x: "75%", y: "75%", arrowFrom: "60% 70%",
  },
];

export default function BodyVisualizationSection() {
  return (
    <section className="relative w-full bg-[#F9FAFB] py-40 overflow-hidden">
      {/* Background aura */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(90,131,215,0.10),transparent_70%)] blur-[200px]" />
      <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.15),transparent_80%)] blur-[180px] -z-10 animate-pulse-slow" />

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">

        {/* Left: Body Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 flex justify-center"
        >
          {/* SVG/IMG */}
          <div className="relative">
            <Image
              src="/images/muscle-map.svg"
              alt="Muscle Engagement"
              width={520}
              height={720}
              className="drop-shadow-2xl"
            />

            {/* Animated glow overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.12),transparent_70%)] animate-pulse-slow rounded-full blur-3xl" />
          </div>

          {/* Arrows + Labels */}
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                left: f.x,
                top: f.y,
                transform: "translate(-50%, -50%)",
              }}
              className="hidden md:flex flex-col items-center text-center"
            >
              {/* connecting arrow */}
              <div
                className="absolute w-[120px] h-[2px] bg-gradient-to-r from-[#5A83D7] to-[#C9A227] rounded-full origin-left"
                style={{
                  left: "-120px",
                  top: "50%",
                  transform: "rotate(-10deg)",
                }}
              />
              {/* floating label */}
              <div className="bg-white/80 backdrop-blur-xl border border-gray-100 shadow-lg rounded-xl px-4 py-2">
                <h4 className="text-sm font-semibold text-gray-800">{f.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Descriptive Feature Cards */}
        <div className="relative w-full md:w-1/2 flex flex-col gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A83D7] to-[#C9A227]">
              The Body Engine.
            </span>{" "}
            Intelligence you can see.
          </motion.h2>

          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="relative bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#5A83D7] to-[#C9A227] shadow-[0_0_10px_rgba(201,162,39,0.8)]" />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <h3 className="text-xl font-medium text-gray-700 mb-4">
          Experience your performance — visualized, analyzed, perfected.
        </h3>
        <a
          href="#download"
          className="inline-block bg-gradient-to-r from-[#C9A227] to-[#5A83D7] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
        >
          Try Aureus Now
        </a>
      </motion.div>
    </section>
  );
}
