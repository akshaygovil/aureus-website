"use client";
import FAQSection from "./components/faq";
import HeroLanding from "./components/HeroLanding";
import { motion } from "framer-motion";
import ValueProposition from "./valueproposition/page";
import DataDrivenPhysique from "./productshowcase.tsx/page";
import FeatureShowcase from "./information/page";
import Image from "next/image";
import PlateCalculator from "./components/platecalculator";
import FeatureShowcaseSection from "./components/featuresshowcase";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import HumanBody from "./components/HumanBody";
import InteractiveMuscleMap from "./components/selectablehumanbody";

function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <span className="text-3xl text-[#C9A227] transition-transform group-hover:scale-110 duration-300">
        {icon}
      </span>
      <div>
        <h3 className="text-lg font-semibold text-white group-hover:text-[#E8CF8E] transition-colors duration-300">
          {title}
        </h3>
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
      <FeatureShowcase
        title="Log your fitness journey"
        description="Stay consistent by logging your progress from your mobile or watch. Follow exercise instructions to perfect your form, and take notes to remind yourself of key details."
        buttonText="Start Now"
        buttonLink="#"
        //images={["/appscreenshots/1.png"]}
        flip={false}
      />

    <section className="relative w-full py-36 bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#101010] text-white overflow-hidden">
      {/* ---- Atmospheric layers ---- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(201,162,39,0.12),transparent_70%)] blur-[200px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(90,131,215,0.25),transparent_70%)] blur-[200px]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(0deg,#fff_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* ---- Gold gradient arc ring ---- */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 w-[900px] h-[900px] rounded-full border border-[#C9A227]/10 blur-[3px]" />
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 w-[1100px] h-[1100px] rounded-full border border-[#C9A227]/5 blur-[2px]" />

      <div className="max-w-7xl mx-auto relative z-10 px-8 flex flex-col lg:flex-row items-center justify-between gap-28">
        {/* ---------- TEXT SIDE ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-[#C9A227] via-[#E8CF8E] to-[#5A83D7] bg-clip-text text-transparent whitespace-nowrap">
              Aureus Intelligence
            </span>
            <br />
            The Neural Edge of Performance
          </h2>

          <p className="text-gray-300/90 text-lg max-w-xl mb-12 leading-relaxed">
            Aureus isn’t built on generic AI models. It’s a <strong>neural-level performance system</strong> — fine-tuned for biomechanics, recovery, and elite strength programming. 
            Every insight, adjustment, and adaptation comes from <strong>domain-specific intelligence</strong> engineered for serious lifters.
          </p>

          <div className="space-y-8">
            <Feature
              icon="🧬"
              title="Biomechanical Intelligence"
              desc="Learns your unique patterns — torque, tempo, and recovery curves — to refine performance precision."
            />
            <Feature
              icon="⚙️"
              title="Prompt-Layered Reasoning"
              desc="Built on proprietary prompt stacks designed for hypertrophy, strength, and recovery optimization."
            />
            <Feature
              icon="💡"
              title="Adaptive Neural Coaching"
              desc="Evolves after every workout, creating a closed feedback loop that mirrors a real coach’s progression logic."
            />
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mt-14 px-12 py-5 bg-gradient-to-r from-[#C9A227] to-[#E8CF8E] text-black text-lg font-semibold rounded-full shadow-[0_0_50px_rgba(201,162,39,0.45)] hover:shadow-[0_0_80px_rgba(201,162,39,0.7)] hover:scale-[1.02] transition-all duration-300"
          >
            Discover the Aureus Engine
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
          {/* --- Blue neural energy core --- */}
          <div className="absolute left-1/2 top-[34%] -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(90,131,215,0.7),transparent_70%)] blur-[70px] animate-core-pulse" />
          <div className="absolute left-1/2 top-[34%] -translate-x-1/2 w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle_at_center,rgba(90,131,215,0.4),transparent_80%)] blur-[90px] animate-wave" />

          {/* --- Outer glow diffusion --- */}
          <div className="absolute w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.25),rgba(90,131,215,0.2),transparent_70%)] blur-[240px] animate-pulse-slow" />

          {/* --- Main model --- */}
          <div className="relative w-[420px] sm:w-[460px]">
            <Image
              src="/aiimage.png"
              alt="Aureus AI Intelligence Visual"
              width={460}
              height={460}
              draggable={false}
              priority
              className="relative z-10 mix-blend-screen select-none"
            />
          </div>

          
{/* --- Floating metric panels --- */}
<div className="absolute inset-0 z-30 pointer-events-none">
  {/* --- Left Gold Panel --- */}
  <div className="absolute left-[10%] top-[25%] pointer-events-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="
        group relative w-[260px] rounded-2xl border border-[#C9A227]/40
        bg-gradient-to-br from-black/80 via-black/70 to-black/60
        backdrop-blur-3xl p-6 opacity-60 hover:opacity-100
        shadow-[0_0_40px_rgba(201,162,39,0.15)]
        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:scale-[1.08] hover:border-[#C9A227]/80 
        hover:shadow-[0_0_120px_rgba(201,162,39,0.6)]
        hover:brightness-125 hover:z-50 hover:rotate-2
        "
    >
      <div
        className="
          absolute inset-0 rounded-2xl pointer-events-none
          bg-[radial-gradient(circle_at_top_left,rgba(201,162,39,0.25),transparent_70%)]
          opacity-40 blur-xl transition-all duration-700 group-hover:opacity-100
        "
      />
      <h4 className="relative text-lg font-semibold text-[#E8CF8E] mb-2 drop-shadow-[0_0_6px_rgba(201,162,39,0.6)]">
        Neural Drive Index
      </h4>
      <p className="relative text-sm text-gray-200 leading-relaxed">
        +18.7% average torque increase since last cycle
      </p>
    </motion.div>
  </div>

  {/* --- Right Blue Panel --- */}
  <div className="absolute right-[8%] bottom-[25%] pointer-events-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="
        group relative w-[260px] rounded-2xl border border-[#5A83D7]/40
        bg-gradient-to-br from-black/80 via-black/70 to-black/60
        backdrop-blur-3xl p-6 opacity-60 hover:opacity-100
        shadow-[0_0_40px_rgba(90,131,215,0.15)]
        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:scale-[1.08] hover:border-[#5A83D7]/80 
        hover:shadow-[0_0_120px_rgba(90,131,215,0.6)]
        hover:brightness-125 hover:z-50 hover:-rotate-2
      "
    >
      <div
        className="
          absolute inset-0 rounded-2xl pointer-events-none
          bg-[radial-gradient(circle_at_bottom_right,rgba(90,131,215,0.25),transparent_70%)]
          opacity-40 blur-xl transition-all duration-700 group-hover:opacity-100
        "
      />
      <h4 className="relative text-lg font-semibold text-[#AFC8F9] mb-2 drop-shadow-[0_0_6px_rgba(90,131,215,0.8)]">
        Recovery Equilibrium
      </h4>
      <p className="relative text-sm text-gray-200 leading-relaxed">
        Neural readiness score: <span className="text-[#C9A227]">92%</span>
      </p>
    </motion.div>
  </div>
</div>



        </motion.div>
      </div>

      {/* ---- Animations ---- */}
    </section>








<section className="relative w-full py-32 bg-white text-[#111] overflow-hidden">
  {/* Ambient backdrop glows */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,90,90,0.1),transparent_70%)] blur-[160px]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(60,255,150,0.1),transparent_70%)] blur-[160px]" />

  <div className="relative z-10 flex flex-col items-center">
    <h2 className="text-5xl font-bold mb-4 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#E53935] to-[#43A047]">
      Transformation in Motion
    </h2>
    <p className="text-gray-600 text-lg max-w-2xl text-center mb-16 leading-relaxed">
      Witness your evolution — from intense effort to intelligent growth.  
      <span className="font-medium text-[#2E7D32]">Aureus AI</span> brings your journey to life.
    </p>

    {/* Slider container */}
    <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-[#E6E6E6] bg-white shadow-[0_0_80px_rgba(0,0,0,0.05)]">
      <ReactCompareSlider
        itemOne={
          <div className="relative flex justify-center items-center w-full bg-white overflow-hidden">
            {/* 🔥 Red halo (LEFT EDGE) */}
            <div className="absolute left-[-150px] top-1/2 -translate-y-1/2 w-[500px] h-[700px] bg-[radial-gradient(circle_at_left,rgba(255,60,60,0.45),transparent_70%)] blur-[120px] opacity-80" />
            <div className="w-[600px] aspect-[1/1] flex items-center justify-center">
              <HumanBody className="w-full h-auto" />
              <span className="absolute top-6 left-8 text-[#E53935] font-semibold text-lg tracking-wide uppercase">
                Before
              </span>
            </div>
          </div>
        }
        itemTwo={
          <div className="relative flex justify-center items-center w-full bg-white overflow-hidden">
            {/* 💚 Green halo (RIGHT EDGE) */}
            <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[500px] h-[700px] bg-[radial-gradient(circle_at_right,rgba(60,255,140,0.45),transparent_70%)] blur-[120px] opacity-80" />
            <div className="w-[600px] aspect-[1/1] flex items-center justify-center">
              <HumanBody
                className="w-full h-auto"
                colors={{
                  "middle-chest": "#43A047",
                  "biceps": "#43A047",
                  "glutes": "#43A047",
                }}
              />
              <span className="absolute top-6 right-8 text-[#43A047] font-semibold text-lg tracking-wide uppercase">
                After
              </span>
            </div>
          </div>
        }
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "1.5rem",
        }}
        handle={
          <div className="relative flex items-center justify-center">
            {/* Central glowing divider */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[700px] bg-[#4CAF50] shadow-[0_0_30px_rgba(255,80,80,0.4)] z-0 animate-pulse-slow" />
            
            {/* Handle circle */}
            <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white backdrop-blur-md border border-[#4CAF50]/40 shadow-[0_0_25px_rgba(60,210,100,0.4)] hover:scale-110 transition-all duration-300">
              <span className="text-2xl font-bold text-[#43A047] drop-shadow-[0_0_6px_rgba(60,210,100,0.6)] select-none">
                {'‹›'}
              </span>
            </div>
          </div>
        }
      />
    </div>

    <p className="mt-10 text-center text-gray-600 max-w-xl text-base">
      <span className="font-semibold text-[#E53935]">Effort.</span>  
      <span className="font-semibold text-[#43A047]"> Evolution.</span>  
      See the difference, powered by intelligent training analytics.
    </p>
  </div>
</section>
<InteractiveMuscleMap/>


















    <section className="relative w-full min-h-[100vh] overflow-hidden bg-[#050505] text-white flex items-center justify-center">
      {/* ===== Background Hero Image ===== */}
      <div className="absolute inset-0">
        <Image
          src="/images/ai-athlete-bg.jpg" // <- your futuristic athlete/AI fusion image
          alt="AI Athlete Background"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0B0B0B]/95" />
      </div>

      {/* ===== Animated Glows ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[25%] w-[500px] h-[500px] rounded-full blur-[160px] bg-[#C9A227]/25 animate-pulse" />
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full blur-[180px] bg-[#5A83D7]/30 animate-pulse" />
      </div>

      {/* ===== Grid Overlay ===== */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(0deg,#fff_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm tracking-wider uppercase">
            <span className="h-2 w-2 rounded-full bg-[#C9A227] shadow-[0_0_10px_#C9A227]" />
            Fine-Tuned Neural Intelligence
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-white to-[#5A83D7]">Strongest AI</span>{" "}
            <br />
            <span className="text-white/90">Built For Strength.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-white/70">
            A purpose-trained AI model — sculpted on real hypertrophy data, velocity curves, and fatigue patterns — not a general chatbot.
            Every rep, rest, and recovery optimized for your physiology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#C9A227] to-[#5A83D7] px-7 py-3 font-semibold shadow-[0_8px_40px_rgba(201,162,39,0.35)] hover:shadow-[0_10px_44px_rgba(201,162,39,0.45)] transition"
            >
              Experience the Model
            </a>
            <a
              href="#"
              className="relative inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-3 font-medium text-white/90 hover:bg-white/10 transition"
            >
              See Comparison
            </a>
          </div>
        </motion.div>

        {/* ===== Floating Stats / Chips ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              label: "Prediction Accuracy",
              value: "+27.4%",
              sub: "on velocity & RIR detection",
            },
            {
              label: "Training Plan Adherence",
              value: "+19.2%",
              sub: "real-world lifter retention",
            },
            {
              label: "Adaptive Fatigue Control",
              value: "Auto-tuned",
              sub: "deload triggers by HRV & sleep",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/[0.08] transition group"
            >
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#5A83D7]">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-white/80 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-xs text-white/50 mt-1">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== Bottom Accent Lines ===== */}
      <svg
        className="absolute left-0 bottom-0 w-full opacity-30"
        height="90"
        viewBox="0 0 1200 90"
        fill="none"
      >
        <path
          d="M0 70 C 300 10, 900 130, 1200 70"
          stroke="url(#g1)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1200" y2="0">
            <stop offset="0%" stopColor="#C9A227" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#C9A227" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#5A83D7" stopOpacity="0.0" />
          </linearGradient>
        </defs>
      </svg>
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
