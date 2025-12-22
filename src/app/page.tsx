"use client";
import FAQSection from "./components/faq";
import HeroLanding from "./components/HeroLanding";
import ComparisonTable from "./components/benefits";
import ImageText from "./components/imagetext";
import ExerciseLibrarySectionFinal from "./components/exercisesshowcase";
import Footer from "./components/footer";
import LabeledPhoneMockup from "./components/labelledimage";
import Tiles2x2 from "./components/tiles";
import HorizontalRowTiles from "./components/tiles2";
import AIFunctionalitySection from "./components/AIfunctionality";
import VideoText from "./components/videotext";
import TwoPhonesCenterText from "./components/TwoScreensWithCenterText";
import AlternativeSection from "./components/productcomparison";
import MainCTASection from "./components/minicta";
import SearchOverSection from "./components/belowherosection";
import React from "react";
import Link from "next/link";

const x = 150
export default function Page() {
  const featuresRef = React.useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-white text-[#1E1E1E] flex flex-col">
      {/* --- HERO --- */}
      <HeroLanding 
        panels={[
          { src: "/snippets/heroimage2.png", alt: "Panel 1" }, // 1.38
          { src: "/snippets/heroimage1.png", alt: "Panel 2" }, // 0.89
        ]}
        brand={{ logoSrc: "/apple-touch-icon.png", name: "Aureus", href: "/" }}
      />

      <SearchOverSection/>

      <section id="features">
        <ImageText
          title="Workout calendar + Streak tracking"
          subtitle="Get a clear snapshot of your training month at a glance. See exactly when you trained, when you rested, and where sessions were missed — without digging through logs. Your current streak updates automatically, giving you an honest signal of consistency over time."
          screenshotSrc="/appscreenshots/websitescreenshot2.png"
          widthPreset="xl"
        />
        <ImageText
          title="Detailed muscle analysis"
          subtitle="Select any time range to see exactly how your training volume is distributed across muscle groups. The heatmap highlights what you’ve been prioritising — and what’s being undertrained — while the breakdown below gives you the full, unfiltered data to assess balance, bias, and recovery."
          screenshotSrc="/appscreenshots/websitescreenshot5.png"
          reverse
          widthPreset="xl"
        />
        <ImageText
          title="Detailed and complete volume analytics"
          subtitle="Analyse total volume, set count, and training frequency across any time range. Spot workload trends, assess consistency, and understand how hard you’re actually training — beyond individual exercises or reps."
          screenshotSrc="/appscreenshots/websitescreenshot13.png"
          widthPreset="xl"
        />
        <ImageText
          title="Log physique photos. See real change."
          subtitle="Log physique photos with zero limits — unlimited entries, even multiple shots per day. Capture every check-in, then later review them side-by-side or as a clean slideshow to spot real changes over weeks and blocks, not mirror-day noise."
          screenshotSrc="/appscreenshots/websitescreenshot14.png"
          widthPreset="xl"
          reverse
        /> 
      <ImageText
          title="Look over past workouts with ease"
          subtitle="See a complete snapshot of any session — duration, volume, exercises, and a visual breakdown of the muscles trained. Everything is shown exactly as you logged it, so you can review the work objectively, without second-guessing or reinterpreting it later."
          screenshotSrc="/appscreenshots/websitescreenshot10.png"
          widthPreset="xl"
        />  
        <VideoText
          title="Day-by-day training replay"
          subtitle="Replay your training one day at a time across any time range. See how volume and set distribution shift over time, with each day showing exactly what was trained and where the work went via a muscle heatmap. Designed to reveal patterns — overload phases, missed sessions, and inconsistent weeks."
          videoSrc="/muscleslideshow.mp4"
          reverse
          widthPreset="xl"
        />
        <AIFunctionalitySection
          weekly={{ src: "/appscreenshots/websitescreenshot16.png", alt: "Weekly AI feedback screenshot" }}
          daily={{ src: "/appscreenshots/websitescreenshot15.png", alt: "Daily AI feedback screenshot" }}
          builder={{ src: "/appscreenshots/websitescreenshot7.png", alt: "AI workout builder screenshot" }}
        />          
        <TwoPhonesCenterText
          title="Full bodyweight analysis"
          subtitle="Track bodyweight trends over time, assess logging consistency, and compare your current trajectory against your goal. Built-in insights highlight what’s changing and whether your approach is actually moving you in the right direction."
          leftScreenshotSrc="/appscreenshots/websitescreenshot11.png"
          rightScreenshotSrc="/appscreenshots/websitescreenshot12.png"
          iphoneFrameSrc="/finaliphoneframe.png"
          size={1}
        />
      </section>

      <section className="relative w-full overflow-hidden bg-white">
        {/* ✅ Ultra-subtle section unifier: faint grid + soft gradient wash */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* very light grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(13,27,61,0.18) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(13,27,61,0.18) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          {/* soft top wash */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 520px at 50% 0%, rgba(62,91,169,0.10) 0%, rgba(255,255,255,0) 60%)",
            }}
          />
          {/* tiny gold tint near tiles area (super subtle) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(760px 460px at 50% 58%, rgba(233,200,91,0.08) 0%, rgba(255,255,255,0) 62%)",
            }}
          />
        </div>

        {/* Intro */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#0D1B3D]">
            Train without friction.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#6E7A8C] leading-relaxed">
            Logging workouts feels instant — everything is where you expect it, nothing
            gets in the way. Focus on lifting. Aureus handles the rest.
          </p>
        </div>

        {/* Annotated phone */}
        <div className="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-10">
          <LabeledPhoneMockup
            screenshotSrc="/appscreenshots/websitescreenshot4.png"
            phoneFrameSrc="/finaliphoneframe.png"
            dotColor="#3E5BA9"
            dotRingColor="rgba(62,91,169,0.16)"
            dotSizePx={6}
            lineColor="rgba(62,91,169,0.55)"
            lineGlowColor="rgba(62,91,169,0.10)"
            labelBg="rgba(246,248,250,0.92)"
            labelBorderColor="rgba(62,91,169,0.10)"
            labelTitleColor="#0D1B3D"
            labelDescColor="rgba(110,122,140,1)"
            labelWidthPx={260}
            labelScale={1.15}
            labels={[
              {
                id: "a",
                title: "Clear session context",
                description: "Clearly labelled sessions so nothing feels lost.",
                anchor: { top: "6.5%", left: "15%" },
                panel: { left: `-${x}%`, top: "1.5%" },
              },
              {
                id: "b",
                title: "Live session timing",
                description: "See when you started and how long the session has been running — always visible, without interrupting your flow.",
                anchor: { top: "10%", left: "55%" },
                panel: { right: `-${x}%`, top: "5%" },
              },
              {
                id: "c",
                title: "Flexible set logging",
                description: "Switch between warm-ups, working sets, supersets or dropsets — built in for real-world training",
                anchor: { top: "40%", left: "17%" },
                panel: { left: `-${x}%`, top: "35%" },
              },
              {
                id: "d",
                title: "Effort tracking (RPE)",
                description: "Log perceived effort alongside your sets to capture intensity — not just numbers.",
                anchor: { top: "51%", left: "79%" },
                panel: { right: `-${x}%`, top: "46%" },
              },              
              {
                id: "e",
                title: "Space-efficient workouts",
                description: "Collapse exercises when you’re not using them to keep large sessions clean, focused, and easy to manage.",
                anchor: { top: "77.8%", left: "3%" },
                panel: { left: `-${x}%`, top: "72.8%" },
              },
              {
                id: "f",
                title: "One-tap set logging",
                description: "Log the next set instantly with a single tap.",
                anchor: { top: "90%", left: "95%" },
                panel: { right: `-${x}%`, top: "85%" },
              },
            ]}
          />
        </div>

        {/* Tessellated proof section */}
        <div className="relative mt-10 sm:mt-12 pb-20">
          {/* subtle divider that still feels “connected” */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-4 sm:mb-6">
            <div className="w-full bg-gradient-to-r from-transparent via-black/10 to-transparent mb-5" />

            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8A94A6]">
              In-session tools
            </p>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[#0D1B3D]">
              Everything stays one tap away.
            </h3>
          </div>

          <Tiles2x2
            items={[
              {
                title: "Always-on rest timer",
                subtitle: "Starts instantly, stays visible, and never interrupts your training.",
                src: "/snippets/resttimer.png",
                alt: "Rest timer",
              },
              {
                title: "Advanced set types",
                subtitle: "Warm-ups, dropsets, supersets — log sessions exactly as you train them.",
                src: "/snippets/settype.png",
                alt: "Set type",
              },
              {
                title: "Per-exercise rest control",
                subtitle: "Set and adjust rest times per exercise. Shorten rest for accessories, extend it for heavy compounds.",
                src: "/snippets/editresttimer.png",
                alt: "Quick edits",
              },
              {
                title: "RPE-based effort tracking",
                subtitle: "Optionally log perceived effort alongside reps and weight to capture how demanding a set actually was. Useful when reps or weight stop increasing and effort becomes the primary measure of progression.",
                src: "/snippets/rpedisplay.png",
                alt: "Session overview",
              },
            ]}
          />
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#FCF6EA] text-[#171717]">
        {/* ✅ ONE continuous “light gold paper” background across EVERYTHING */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(1200px 760px at 18% 10%, rgba(23,23,23,0.045) 0%, rgba(252,246,234,0) 60%),
                radial-gradient(980px 560px at 86% 18%, rgba(214,171,74,0.20) 0%, rgba(252,246,234,0) 62%),
                linear-gradient(to bottom, rgba(255,255,255,0.50), rgba(252,246,234,0.92))
              `,
            }}
          />
          {/* soft vignette (no lines, no separators) */}
          <div
            className="absolute inset-0 opacity-[0.55]"
            style={{
              background:
                "radial-gradient(1200px 760px at 50% 18%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.028) 72%, rgba(0,0,0,0.055) 100%)",
            }}
          />
          {/* subtle grain */}
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.92' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* Intro */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-10 sm:pb-12">
          <div className="max-w-4xl flex flex-col gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Set your destination
            </h2>
            <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] text-black/60">
              Define strength, bodyweight, or consistency goals and let Aureus track progress automatically as you train. Every session updates your targets in the background, so you always know how close you are — and whether your current approach is actually moving you there.            </p>
          </div>
        </div>


        {/* ✅ FULL-BLEED FLOW ZONE (no internal lines, no separate backgrounds) */}
        <div className="relative w-screen left-1/2 -translate-x-1/2">
          <div className="py-8 sm:py-12">
            {/* Phone (full-bleed: no x padding) */}
            <LabeledPhoneMockup
              screenshotSrc="/appscreenshots/websitescreenshot6.png"
              phoneFrameSrc="/finaliphoneframe.png"
              dotColor="#171717"
              dotRingColor="rgba(23,23,23,0.10)"
              dotSizePx={6}
              lineColor="rgba(23,23,23,0.40)"
              lineGlowColor="rgba(214,171,74,0.22)"
              labelBg="rgba(252,246,234,0.92)"
              labelBorderColor="rgba(23,23,23,0.10)"
              labelTitleColor="#171717"
              labelDescColor="rgba(23,23,23,0.62)"
              labelWidthPx={270}
              labelScale={1.12}
              labels={[
                {
                  id: "a",
                  title: "Strength Goals",
                  description: "Chasing a PR? Add the lift and Aureus handles the tracking, projections, and AI feedback for you.",
                  anchor: { top: "16.25%", left: "4%" },
                  panel: { left: `-${x}%`, top: "11.25%" },
                },
                {
                  id: "b",
                  title: "Bodyweigth Goals",
                  description: "Set a target bodyweight and Aureus tracks trends, estimates timelines, and incorporates the data into your training insights automatically.",
                  anchor: { top: "26.5%", left: "96%" },
                  panel: { right: `-${x}%`, top: "21.5%" },
                },
                {
                  id: "c",
                  title: "Add unlimited new goals",
                  anchor: { top: "89.7%", left: "95%" },
                  panel: { right: `-${x}%`, top: "84.7%" },
                },
              ]}
            />

            {/* Tiles (full-bleed: no x padding wrappers) */}
            <div className="mt-6 sm:mt-8">
              <HorizontalRowTiles
                heading="Explore the types of goals you can make"
                subheading="Strength, bodyweight and consistancy goals, all to get you on track to your dream physical life."
                items={[
                  {
                    title: "Strength Goals",
                    subtitle: "Choose any exercise and set a target 1RM. Progress fills automatically as you train, with estimated 1RMs calculated from your logged sets.",
                    src: "/snippets/strengthgoal.png",
                    alt: "Rest timer",
                  },
                  {
                    title: "Body Goals",
                    subtitle: "Whether you’re cutting or gaining, set a target bodyweight and track progress through trend-based weight analytics. See how your current trajectory compares to your goal and adjust accordingly.",
                    src: "/snippets/bodygoal.png",
                    alt: "Set type",
                  },
                  {
                    title: "Go at the speed you like",
                    subtitle: "Set a rate of change that fits your approach. Aureus tracks progress against that pace, helping you move deliberately rather than rushing weight changes.",
                    src: "/snippets/paceviewer.png",
                    alt: "Quick edit",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative pb-32">
        <ExerciseLibrarySectionFinal
          libraryScreenshotSrc="/appscreenshots/websitescreenshot3.png"
          iphoneFrameSrc="/finaliphoneframe.png"
        />
      </div>

      <AlternativeSection/>

      <ComparisonTable/>

      <MainCTASection/>

      <FAQSection/>

      <Footer/>
      
      <Link href='privacy_policy'>
        <button>
          <div>test</div>
        </button>
      </Link>

    </main>
  );
}
