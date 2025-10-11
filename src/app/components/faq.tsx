"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      q: "What makes this different from other fitness apps?",
      a: "Aureus strips away distractions — no endless scrolling or cluttered dashboards. Every feature is intentionally crafted to help you train smarter, recover better, and see measurable progress that lasts.",
    },
    {
      q: "Do I need any special equipment?",
      a: "Not at all. The app adapts to you. Whether you have a full gym or just a set of dumbbells, it tailors your workouts to the gear you actually own.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. You’re in control. Cancel or pause your subscription anytime directly from your account settings — no hidden fees, no contracts.",
    },
    {
      q: "Will I get new updates?",
      a: "Absolutely. Subscribers automatically receive every feature update, design refinement, and training enhancement as soon as it’s released.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes — you can explore everything for 7 days at no cost. Experience the platform before deciding to commit.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative w-full py-28 border-t border-gray-100 text-center overflow-hidden bg-[#FAFAF7]"
    >
      {/* --- Subtle Breathing Glow (behind content) --- */}
      <div aria-hidden className="absolute inset-0 z-0 flex justify-center pointer-events-none">
      <motion.div
        className="absolute w-[1200px] h-[1200px] rounded-full blur-[200px] opacity-50"
        style={{
          top: "-400px",      // pushes the glow higher
          left: "-300px",     // pushes it to the left
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(80,160,255,0.8) 0%, rgba(150,210,255,0.45) 35%, rgba(250,250,247,0) 70%)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.6, 0.45],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      </div>

      {/* --- Content --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6A2E] via-[#C9A227] to-[#F5DC82]">
            Questions
          </span>
        </h2>
        <p className="text-[#555] max-w-md mx-auto mb-12">
          Clarity before commitment. Here’s what you should know.
        </p>

        {/* --- FAQ Accordion (no height:auto; zero glitch) --- */}
        <div className="space-y-4 text-left">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "border-[#C9A227]/40 shadow-sm bg-white"
                    : "border-gray-200 hover:border-[#C9A227]/30 bg-white/95"
                }`}
              >
                <button
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center text-lg font-medium text-[#1E1E1E] px-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]/40 rounded-2xl"
                >
                  <span>{q}</span>
                  <motion.span
                    // only a transform → GPU, super smooth
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="text-[#C9A227] select-none"
                  >
                    ▼
                  </motion.span>
                </button>

                {/* Smooth accordion with CSS grid rows (0fr → 1fr) */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
