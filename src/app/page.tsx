"use client";
import FAQSection from "./components/faq";
import HeroLanding from "./components/HeroLanding";
import { motion } from "framer-motion";
import ValueProposition from "./valueproposition/page";
import DataDrivenPhysique from "./productshowcase.tsx/page";
import FeatureShowcase from "./information/page";
import OneRMShowcase from "./components/oneRMcalculator";
import Image from "next/image";
import PlateCalculator from "./components/platecalculator";
import FeatureShowcaseSection from "./components/featuresshowcase";

function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-3xl text-[#C9A227]">{icon}</span>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#1E1E1E] flex flex-col items-center">
      {/* --- HERO --- */}
      <HeroLanding />
      <ValueProposition/>
      <FeatureShowcaseSection/>
      <PlateCalculator/>
      <FeatureShowcase
        title="Log your fitness journey"
        description="Stay consistent by logging your progress from your mobile or watch. Follow exercise instructions to perfect your form, and take notes to remind yourself of key details."
        buttonText="Start Now"
        buttonLink="#"
        //images={["/appscreenshots/1.png"]}
        flip={false}
      />
      





    <section className="relative w-full py-32 bg-[#0B0B0B] text-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(201,162,39,0.15),transparent_60%)] blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(90,131,215,0.25),transparent_60%)] blur-[160px]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(0deg,#fff_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* ---------- TEXT SIDE ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#C9A227]">Aureus Intelligence</span>
            <br /> The Future of Fitness AI
          </h2>

          <p className="text-gray-300 text-lg max-w-xl mb-10 leading-relaxed">
            Not just another AI — Aureus is a fine-tuned, fitness-specific intelligence built on real biomechanics, recovery science, and elite programming data. 
            Every decision it makes has been prompt-engineered and performance-validated for lifters who demand more than generic advice.
          </p>

          <div className="space-y-6">
            <Feature
              icon="🧬"
              title="Fine-Tuned Model"
              desc="Trained exclusively on strength and hypertrophy data — every output is rooted in real performance science."
            />
            <Feature
              icon="⚙️"
              title="Precision Prompt Engineering"
              desc="Layered with complex instruction sets that guide micro-adjustments across your training blocks."
            />
            <Feature
              icon="💡"
              title="Neural Insight Engine"
              desc="Analyzes your past sessions to anticipate recovery and adapt intensity in real time."
            />
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-block mt-12 px-10 py-4 bg-gradient-to-r from-[#C9A227] to-[#E8CF8E] text-black text-lg font-semibold rounded-full shadow-[0_0_40px_rgba(201,162,39,0.5)] hover:shadow-[0_0_60px_rgba(201,162,39,0.8)] transition-all duration-300"
          >
            Explore the Aureus Engine
          </motion.a>
        </motion.div>

        {/* ---------- VISUAL SIDE ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative flex justify-center items-center"
        >
          {/* Diffuse halo behind model */}
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.25),rgba(90,131,215,0.25),transparent_70%)] blur-[200px] animate-pulse-slow" />
          
          {/* Energy ripple (blue wave from chest) */}
          <div className="absolute left-1/2 top-[34%] -translate-x-1/2 w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle_at_center,rgba(90,131,215,0.6),transparent_70%)] blur-[50px] animate-core-pulse" />
          <div className="absolute left-1/2 top-[34%] -translate-x-1/2 w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle_at_center,rgba(90,131,215,0.25),transparent_80%)] blur-[70px] animate-wave" />

          {/* Main Image */}
          <div className="relative w-[400px] sm:w-[440px]">
            <Image
              src="/aiimage.png"
              alt="Aureus AI Intelligence Visual"
              width={440}
              height={440}
              draggable={false}
              priority
              className="relative z-10 mix-blend-screen select-none"
            />
          </div>
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -right-16 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-2xl border border-[#C9A227]/30 rounded-2xl shadow-[0_0_60px_rgba(201,162,39,0.4)] p-6 w-[260px]"
          >
            <h4 className="text-lg font-semibold text-[#C9A227] mb-2">
              Cognitive Strength Layer
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              The Aureus Engine doesn’t just generate workouts — it understands your physiology, making data-driven decisions in real time.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- Animations ---------- */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 7s ease-in-out infinite;
        }

        @keyframes core-pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
            filter: drop-shadow(0 0 30px rgba(90,131,215,0.6));
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
            filter: drop-shadow(0 0 120px rgba(90,131,215,0.95));
          }
        }
        .animate-core-pulse {
          animation: core-pulse 2.5s ease-in-out infinite;
        }

        @keyframes wave {
          0% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 0.7; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(2.4); }
        }
        .animate-wave {
          animation: wave 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>










      <section className="w-full max-w-6xl text-center pt-32 pb-24 relative">
        {/* soft gradient glow background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#F5EAC2] via-[#FFF8E1] to-transparent blur-[160px]" />
        </div>

        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight mb-6 animate-fadeIn">
          Train Smarter.<br />Look Better. Live Stronger.
        </h1>
        <p className="text-lg text-[#4B4B4B] max-w-2xl mx-auto">
          Precision fitness, simplified. A minimal platform built for lifters who
          want clarity, focus, and real results — without distractions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-[#C9A227] text-white font-semibold hover:bg-[#B5951F] transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full border border-[#C9A227]/30 text-[#2C2C2C] hover:border-[#C9A227] hover:text-[#C9A227] transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="w-full max-w-6xl py-24 text-center border-t border-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Unnamed</h2>
        <p className="text-[#555] max-w-xl mx-auto mb-14">
          Designed for focus and longevity — no clutter, just progress.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Minimal Interface",
              desc: "A clean design that helps you stay focused on what matters — your lifts.",
              icon: "💎",
            },
            {
              title: "Science-Backed Progression",
              desc: "Programs grounded in proven strength principles, refined for simplicity.",
              icon: "📈",
            },
            {
              title: "Intelligent Tracking",
              desc: "Automatic load suggestions and trend analytics without overcomplication.",
              icon: "⚙️",
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SHOWCASE --- */}
      <section className="w-full max-w-6xl py-24 border-t border-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Beautifully Functional</h2>
        <p className="text-[#555] max-w-xl mx-auto mb-14">
          A minimal design that enhances focus, not noise. Every pixel serves purpose.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gradient-to-br from-[#FDFBF3] to-[#F5F5F0] rounded-xl border border-gray-100 shadow-inner hover:shadow-md transition"
            />
          ))}
        </div>
      </section>

      {/* --- PRICING --- */}
      <section className="w-full max-w-5xl py-24 border-t border-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">Simple Pricing</h2>
        <p className="text-[#555] max-w-md mx-auto mb-12">
          No hidden fees, no gimmicks — just results that compound.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-2xl p-10 bg-white hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-gray-500 mt-1">For those beginning their journey</p>
            <p className="mt-6 text-4xl font-bold">$9<span className="text-lg text-gray-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-gray-600 text-sm">
              <li>• Core training plans</li>
              <li>• Basic progress tracking</li>
              <li>• Access to updates</li>
            </ul>
            <a
              href="#"
              className="block mt-8 w-full rounded-full bg-[#C9A227] text-white py-2 font-semibold hover:bg-[#B5951F] transition"
            >
              Choose Starter
            </a>
          </div>

          <div className="border border-[#C9A227]/30 rounded-2xl p-10 bg-gradient-to-br from-white to-[#FFFDF4] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
              Pro <span className="text-xs bg-[#C9A227]/10 text-[#C9A227] px-2 py-0.5 rounded-full">Popular</span>
            </h3>
            <p className="text-gray-500 mt-1">Advanced tools for dedicated lifters</p>
            <p className="mt-6 text-4xl font-bold">$29<span className="text-lg text-gray-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-gray-600 text-sm">
              <li>• AI-assisted load tracking</li>
              <li>• Detailed analytics</li>
              <li>• Priority support</li>
            </ul>
            <a
              href="#"
              className="block mt-8 w-full rounded-full bg-[#C9A227] text-white py-2 font-semibold hover:bg-[#B5951F] transition"
            >
              Choose Pro
            </a>
          </div>
        </div>
      </section>
      <a className="btn-primary">
        hello
      </a>

      {/* --- CTA --- */}
      <section className="w-full max-w-5xl py-24 border-t border-gray-100 text-center">
        <div className="bg-gradient-to-r from-[#FDF8E4] to-[#FFFDF4] rounded-2xl p-12 border border-[#C9A227]/20">
          <h2 className="text-3xl font-semibold mb-4">Start Your Journey Today</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Build the body and mind you’ve always wanted — without clutter or chaos.
          </p>
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-[#C9A227] text-white font-semibold hover:bg-[#B5951F] transition"
          >
            Get Started
          </a>
        </div>
      </section>



{/* --- WHY CHOOSE AUREUS --- */}
<section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-32 bg-gradient-to-br from-[#FDFBF5] via-[#FAF8EF] to-[#F5F5F0] text-[#1E1E1E]">
  {/* --- Background Glow --- */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {/* soft left glow */}
    <div className="absolute top-0 left-[-20%] w-[80vw] h-[120vh] bg-[radial-gradient(circle_at_center,rgba(249,236,200,0.4),transparent_70%)] blur-[180px]" />
    {/* soft right glow */}
    <div className="absolute top-[10%] right-[-25%] w-[80vw] h-[120vh] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.25),transparent_70%)] blur-[200px]" />
  </div>

  <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
    {/* Header */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-4xl sm:text-5xl font-semibold mb-4"
    >
      Why Choose <span className="text-[#C9A227]">Aureus</span>?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-[#4B4B4B] max-w-2xl mx-auto mb-24 text-lg leading-relaxed"
    >
      Aureus provides intelligent workout planning, nutrition guidance, and advanced tracking — everything you need to elevate your training, beautifully.
    </motion.p>

    {/* --- Layout Grid --- */}
    <div className="grid md:grid-cols-3 gap-10 items-center w-full max-w-6xl">
      {/* Left Features */}
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg mb-1">Progress Tracking</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Monitor your achievements with intelligent analytics and visual insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg mb-1">Nutrition Support</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Meal plans and calorie tracking to complement your fitness journey.
          </p>
        </motion.div>
      </div>

      {/* Center Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative flex justify-center"
      >
        {/* Phone */}
        <div className="relative w-[260px] sm:w-[300px] md:w-[340px] aspect-[9/19] rounded-[2.5rem] bg-white border-[6px] border-black shadow-2xl overflow-hidden">
          {/* Screen area */}
          <div className="h-full w-full bg-gradient-to-b from-[#F8F8F8] to-[#ECECEC] flex flex-col items-center justify-center text-center px-6">
            <div className="w-24 h-24 bg-[#C9A227]/20 rounded-full mb-5" />
            <h4 className="text-lg font-semibold mb-2">Full Body Workout</h4>
            <p className="text-sm text-gray-600">
              Smart, adaptive sessions built for total strength and focus.
            </p>
          </div>
        </div>

        {/* Center glow under phone */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.25),transparent_80%)] blur-[160px]" />
      </motion.div>

      {/* Right Features */}
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg mb-1">Personalized Workouts</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Tailored plans optimized for your equipment, goals, and recovery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg mb-1">AI-Powered Coaching</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Real-time guidance and adaptive recommendations powered by AI.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
</section>
      <DataDrivenPhysique/>

      <FAQSection/>
      {/* --- FOOTER --- */}
      <footer className="w-full border-t border-gray-100 py-12 text-center">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6">
          {/* Left: Brand / Tagline */}
          <div className="text-[#1E1E1E] text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">Aureus</span> — Built for clarity and strength.
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="/about"
              className="text-[#4B4B4B] hover:text-[#C9A227] transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-[#4B4B4B] hover:text-[#C9A227] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[#4B4B4B] hover:text-[#C9A227] transition-colors"
            >
              Terms
            </a>
          </div>
        </div>

        {/* Subtle gradient glow background */}
        <div className="absolute inset-x-0 bottom-0 -z-10 overflow-hidden">
          <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-[#FFF8E1] via-[#FDFBF3] to-transparent blur-[140px]" />
        </div>
      </footer>

    </main>
  );
}
