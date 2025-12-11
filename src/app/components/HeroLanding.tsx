"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroLanding() {
  return (
    <header className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0A0A0B] text-white">
      {/* ====== NAVBAR ====== */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-xl tracking-widest font-black">Aureus</div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <li><a className="hover:text-white transition" href="#">Home</a></li>
          <li><a className="hover:text-white transition" href="/about">About us</a></li>
          <li><a className="hover:text-white transition" href="#">Training</a></li>
          <li><a className="hover:text-white transition" href="#">Blog</a></li>
          <li><a className="hover:text-white transition" href="#">Contact</a></li>
        </ul>
        <a
          href="/signup"
          className="hidden sm:inline-flex rounded-full bg-white/5 backdrop-blur border border-white/15 px-5 py-2 text-sm hover:bg-white/10 transition"
        >
          JOIN NOW
        </a>
      </nav>

      {/* ====== BACKGROUND GRADIENT / RIBBONS ====== */}
      <div className="absolute inset-0 -z-10">
        {/* deep vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
        {/* left cool glow */}
        <div className="absolute -left-1/3 -top-1/4 w-[1200px] h-[900px] blur-[120px] bg-[radial-gradient(circle_at_center,rgba(120,180,255,0.12),transparent_70%)]" />
        {/* right warm glow */}
        <div className="absolute -right-1/3 -top-1/4 w-[1200px] h-[900px] blur-[120px] bg-[radial-gradient(circle_at_center,rgba(255,140,70,0.14),transparent_70%)]" />
        {/* flowing ribbons (SVG) */}
        <Ribbons />
      </div>

      {/* ====== HERO CONTENT ====== */}
      <section className="relative max-w-7xl mx-auto px-6 pt-6 pb-20 sm:pb-28">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.1] font-light text-white/95 tracking-tight"
        >
          The Power of Data-Driven
        </motion.h1>

        {/* Big “SMART TRAINING” layered style */}
        <div className="relative mt-2">
          {/* bottom fill text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[60px] sm:text-[92px] lg:text-[140px] font-extrabold tracking-tight leading-[0.95] text-transparent bg-clip-text
                       bg-gradient-to-b from-white to-white/70"
          >
            SMART TRAINING
          </motion.div>
          {/* chrome-ish stroke overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 text-transparent bg-clip-text
                       bg-[conic-gradient(from_180deg_at_50%_50%,#ffffff_0%,#c9c9c9_25%,#8f8f8f_50%,#e6e6e6_75%,#ffffff_100%)]
                       mix-blend-overlay opacity-30"
          >
            <span className="sr-only">stroke</span>
            <div className="text-[60px] sm:text-[92px] lg:text-[140px] font-extrabold leading-[0.95]">SMART TRAINING</div>
          </div>
        </div>

        {/* Center model image */}
        <div className="relative mt-6 md:mt-2">
          {/* glow under model */}
          <div className="absolute left-1/2 -translate-x-1/2 top-6 w-[900px] h-[900px] rounded-full blur-[120px] opacity-70
                          bg-[radial-gradient(circle_at_center,rgba(255,145,77,0.12),transparent_60%)]" />
          <div className="relative mx-auto w-full flex justify-center">
            {/* Replace with your transparent PNG */}
            {/* <Image src="/model.png" alt="Athlete" width={920} height={900} priority className="w-[760px] sm:w-[860px] lg:w-[920px] h-auto select-none pointer-events-none" /> */}
            <div className="model-fallback w-[680px] sm:w-[760px] lg:w-[820px] aspect-[3/4] rounded-2xl bg-gradient-to-b from-white/10 to-white/0 border border-white/10 shadow-[0_40px_150px_-40px_rgba(0,0,0,0.7)]" />
          </div>

          {/* floating glass cards */}
          <FloatingCards />
        </div>
      </section>
    </header>
  );
}

/* ----------------- Decorative Components ----------------- */

function Ribbons() {
  // Two layered SVG ribbons (dark + orange highlight)
  return (
    <svg
      className="absolute -bottom-28 -left-10 w-[130%] h-[120%] rotate-0"
      viewBox="0 0 1600 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ribDark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f1115" />
          <stop offset="50%" stopColor="#1a1d23" />
          <stop offset="100%" stopColor="#0f1115" />
        </linearGradient>
        <linearGradient id="ribGloss" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ffb07a" />
        </linearGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* dark base ribbon */}
      <path
        d="M-50,700 C300,520 600,880 900,680 C1200,480 1400,640 1700,520"
        stroke="url(#ribDark)"
        strokeWidth="120"
        strokeLinecap="round"
        filter="url(#soft)"
      />
      {/* thin chrome edge */}
      <path
        d="M-50,700 C300,520 600,880 900,680 C1200,480 1400,640 1700,520"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* orange highlight ribbon */}
      <path
        d="M-20,760 C320,580 620,940 920,740 C1220,540 1420,700 1720,580"
        stroke="url(#ribGloss)"
        strokeWidth="40"
        strokeLinecap="round"
        filter="url(#soft)"
        opacity="0.85"
      />
    </svg>
  );
}

function FloatingCards() {
  const cardBase =
    "absolute rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)] p-4 w-[220px]";

  return (
    <>
      {/* Calories (left-top) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={`${cardBase} left-[12%] top-12 rotate-[-8deg]`}
      >
        <div className="text-xs text-gray-300 mb-2">Calories</div>
        <div className="h-2 rounded bg-white/10 overflow-hidden">
          <div className="h-full w-[70%] bg-gradient-to-r from-orange-400 to-amber-300" />
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-white/90">30.34 kcal</span>
          <span className="text-white/40">/ 400</span>
        </div>
      </motion.div>

      {/* Heart Rate (right-top) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={`${cardBase} right-[12%] top-10 rotate-[6deg]`}
      >
        <div className="text-xs text-gray-300 mb-2">Heart Rate</div>
        <div className="h-20 w-full rounded-md bg-black/30 relative overflow-hidden">
          {/* simple fake waveform */}
          <svg viewBox="0 0 200 80" className="absolute inset-0">
            <polyline
              points="0,50 20,50 35,25 50,60 65,45 80,70 95,30 110,55 125,40 140,65 160,50 180,60 200,50"
              fill="none"
              stroke="url(#gradRed)"
              strokeWidth="3"
            />
            <defs>
              <linearGradient id="gradRed" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff4d4d" />
                <stop offset="100%" stopColor="#ffb3b3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mt-3 text-sm text-white/90">
          <span className="text-white mr-1 font-semibold">109</span>bpm
        </div>
      </motion.div>

      {/* Weight (left-bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        viewport={{ once: true }}
        className={`${cardBase} left-[18%] bottom-6 rotate-[-2deg]`}
      >
        <div className="text-xs text-gray-300 mb-2">Weight</div>
        <div className="h-16 w-full rounded-md bg-black/30 relative overflow-hidden">
          {/* simple fake area chart */}
          <svg viewBox="0 0 200 80" className="absolute inset-0">
            <path
              d="M0,60 C40,45 60,70 90,50 C120,35 150,55 200,40 L200,80 L0,80 Z"
              fill="url(#gradGreen)"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="gradGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3bea8f" />
                <stop offset="100%" stopColor="#175f3a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mt-3 text-sm text-white/90">
          56.5 <span className="text-white/60">kg</span>
        </div>
      </motion.div>
    </>
  );
}
