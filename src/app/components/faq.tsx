"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

export default function FAQSection() {
  const faqs = [
    {
      q: "Will I visually see progress over time?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: "Can I track photos and weight changes?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: "How accurate are the strength and progression estimates?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: "Will this app make workouts feel easier to stick with?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: " I'm inconsistent with training - will this still work?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: "Can I train however I want, or must I follow a fixed plan?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: "How often do I need to train for results?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: "Is my data safe and private?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: "Most companies just stick that they use “AI” to increase share holder value, when the AI functionality is really bad. Is your app like this? ",
      a: `No. We don't use AI as a marketing buzzwork, the AI functionality has meticulously been picked to ensure that it is genuinely helpful and provides insights which a normal algorithm wouldn't be able to supply. Our AI isn't a generic chatbot, or a ChatGPT wrapper. It is given an extremely comprehensive summary of your workouts, both daily and weekly and provides human sounding, concise and helpful summaries.
      
      Instead of giving vague advice like “train harder”, it can tell you:
      <ul>
        <li>which lifts improved the most this month</li>
        <li>whether your volume is trending upward or downward</li>
        <li>what muscle groups you've unintentionally neglected</li>
        <li>how close you are to previous peaks</li>
      </ul> One thing we strongly believe in is that if AI is your main marketing advantage, then you don’t have a really good product, and so our app, without the use of AI beats <strong>99%</strong> of workouts apps out there. The AI is just the extra cherry on top.
      `,
    },
    {
      q: "How is this generic from a normal AI app?",
      a: "No. Whether you have a full gym or just dumbbells, the system tailors training precisely to the equipment you own.",
    },
    {
      q: "How is this different from a ChatGPT wrapper?",
      a: "Yes. Modify, pause, or cancel your subscription at any time without fees, commitments, or support requests.",
    },
    {
      q: "How performant is your app, is it as fast as native apps?",
      a: "Subscribers gain immediate access to all upgrades—new tools, training intelligence improvements, refinements, and enhancements.",
    },
    {
      q: "Will I lose my data ever?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-32 bg-[#F6F8FA] overflow-hidden">
      {/* Soft ambient glow (more subtle & expensive-looking) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.15, scale: 1 }}
        animate={{ opacity: [0.15, 0.32, 0.15], scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 blur-[160px]"
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(62, 91, 169, 0.12) 0%,
              rgba(255,255,255,0) 65%
            )
          `,
        }}
      />

      {/* Outer container is full width so the heading can span the viewport */}
      <div className="relative z-10 w-full px-6">
        {/* Header – full-width */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full text-center text-[4rem] font-[900] tracking-tight text-[#0D1B3D]"
        >
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E9C85B] to-[#B78A2E]">
            Questions
          </span>
        </motion.h2>

        {/* Inner content constrained to max width */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[#8A94A6] max-w-lg mx-auto mt-4 mb-16 text-[15.5px] leading-relaxed font-medium tracking-[0.015em]">
            Transparent answers—so every choice feels informed and intentional.
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => {
              const isOpen = openIndex === i;

              return (
                <motion.div
                  key={i}
                  animate={{
                    boxShadow: isOpen
                      ? "0px 10px 34px rgba(13,27,61,0.08)"
                      : "0px 4px 16px rgba(13,27,61,0.03)",
                    y: isOpen ? -1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`rounded-2xl border overflow-hidden transition-all backdrop-blur-sm ${
                    isOpen
                      ? "border-[#D4AF37]/70 bg-white"
                      : "border-[#E9EDF3] bg-white/80 hover:bg-white/90"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between items-center px-7 py-6 text-left"
                  >
                    <span className="text-[17px] font-semibold text-[#0D1B3D] tracking-[0.01em]">
                      {q}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="text-[#D4AF37]"
                    >
                      <HiChevronDown size={22} />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <motion.div animate={{ height: isOpen ? "auto" : 0 }}>
                    <div className="px-7 py-6 border-t border-[#E9EDF3] overflow-hidden">
                      <div
                        className="
                          text-[14.5px] text-[#8A94A6] leading-[1.75] tracking-[0.01em] whitespace-pre-line
                          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-[4px]
                          [&_li]:leading-[1]
                          [&_li::marker]:text-[#0D1B3D]
                          [&_strong]:font-semibold [&_strong]:text-[#0D1B3D]
                        "
                        dangerouslySetInnerHTML={{ __html: a }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
