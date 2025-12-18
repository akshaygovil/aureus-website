"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { faqs } from "../assets/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#F6F8FA] py-14 sm:py-16 md:py-24">
      {/* Softer ambient glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.14, scale: 1 }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.14, scale: 1 }
            : { opacity: [0.14, 0.28, 0.14], scale: [1, 1.04, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 blur-[140px] sm:blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(62, 91, 169, 0.12) 0%, rgba(255,255,255,0) 65%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            text-center font-[900] tracking-tight text-[#0D1B3D]
            text-[1.9rem] leading-[1.05]
            sm:text-[2.4rem] sm:leading-[1.05]
            md:text-[3.1rem] md:leading-[1.02]
            lg:text-[3.6rem]
          "
        >
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E9C85B] to-[#B78A2E]">
            Questions
          </span>
        </motion.h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[#8A94A6] text-[14.5px] leading-relaxed font-medium tracking-[0.015em] sm:text-[15.5px]">
          Transparent answers to some of the most commonly asked questions.
        </p>

        {/* FAQ List */}
        <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            const contentId = `faq-content-${i}`;
            const buttonId = `faq-button-${i}`;

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
                className={`overflow-hidden rounded-2xl border backdrop-blur-sm ${
                  isOpen
                    ? "border-[#D4AF37]/70 bg-white"
                    : "border-[#E9EDF3] bg-white/80 hover:bg-white/90"
                }`}
              >
                <button
                  id={buttonId}
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="
                    w-full text-left
                    flex items-start gap-3
                    px-4 py-4
                    sm:px-6 sm:py-5
                    md:px-7 md:py-6
                  "
                >
                  <span
                    className="
                      min-w-0 flex-1
                      font-semibold text-[#0D1B3D] tracking-[0.01em]
                      text-[15px] leading-[1.25]
                      sm:text-[16px]
                      md:text-[17px]
                    "
                  >
                    {q}
                  </span>

                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="mt-0.5 shrink-0 text-[#D4AF37]"
                  >
                    <HiChevronDown size={22} />
                  </motion.span>
                </button>

                {/* Answer (mobile-friendly, no height:auto animation jank) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.25,
                        ease: "easeOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#E9EDF3] px-4 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6">
                        <div
                          className="
                            text-[#8A94A6]
                            text-[14px] leading-[1.7] tracking-[0.01em]
                            sm:text-[15px]
                            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2
                            [&_li]:leading-[1.45] [&_li]:my-1
                            [&_li::marker]:text-[#0D1B3D]
                            [&_strong]:font-semibold [&_strong]:text-[#0D1B3D]
                          "
                          dangerouslySetInnerHTML={{ __html: a }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
