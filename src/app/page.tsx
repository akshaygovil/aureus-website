"use client";
import FAQSection from "./components/faq";
import HeroLanding from "./components/HeroLanding";
import HumanBody from "./components/HumanBody";
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
import AureusFeatureShowcase from "./components/functionaltimes";
import AlternativeSection from "./components/productcomparison";
import MainCTASection from "./components/minicta";
import SearchOverSection from "./components/belowherosection";

const x = 150
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#1E1E1E] flex flex-col">
      {/* --- HERO --- */}
      <HeroLanding 
        panels={[
          { src: "/snippets/heroimage2.png", alt: "Panel 1" }, // 1.38
          { src: "/snippets/heroimage1.png", alt: "Panel 2" }, // 0.89
          { src: "/snippets/hero-c.jpg", alt: "Panel 3" }, // 2.45 (small accent)
        ]}
        brand={{ logoSrc: "/apple-touch-icon.png", name: "Aureus", href: "/signup" }}
        primaryCta={{ label: "Join the waitlist", href: "/signup" }}
      />

      <SearchOverSection/>

      <section id="features">
        <AIFunctionalitySection
          weekly={{ src: "/snippets/ai-weekly.webp", alt: "Weekly AI feedback screenshot" }}
          daily={{ src: "/snippets/ai-daily.webp", alt: "Daily AI feedback screenshot" }}
          builder={{ src: "/snippets/ai-builder.webp", alt: "AI workout builder screenshot" }}
        />
        <ImageText
          title="Workout calander + Streak tracking"
          subtitle="This is a simple calendar that shows how your month is actually going.
            You can see which days you trained, which days you rested, and which days were left incomplete. Below the calendar, your current streak is shown so you always know how long you’ve been consistent — without having to think about it."
          screenshotSrc="/appscreenshots/websitescreenshot2.png"
        />
        <ImageText
          title="Detailed muscle analysis"
          subtitle="Choose a time range and you’ll get a clear summary of which muscle groups you’ve prioritised, and which ones have been trained less. The heatmap shows the intensity of the muscles worked, and below a table presents the full data. "
          screenshotSrc="/appscreenshots/websitescreenshot5.png"
          reverse
        />
        <ImageText
          title="Look over past workouts with ease"
          subtitle="A clear snapshot of a past session — duration, volume, exercises, and a visual breakdown of the muscles trained. Everything below is listed exactly as you logged it, so you can review the workout without rethinking it."
          screenshotSrc="/appscreenshots/websitescreenshot10.png"
        />
        <ImageText
          title="Detailed and complete volume analytics"
          subtitle="This screen tracks your total volume, sets, and training frequency over any time range. You can spot trends day-to-day, see how consistent your workload has been, and understand how hard you’re really training — beyond just exercises and reps."
          screenshotSrc="/appscreenshots/websitescreenshot13.png"
          reverse
        />
        <VideoText
          title="Day to day volume and training analysis slideshow"
          subtitle="This is a day-by-day replay of your training.
            Select a time range and watch how your volume and sets change over time. Each frame shows what you trained on that day, along with a heatmap so you can see where the work actually went.
            It’s useful for spotting patterns — busy weeks, missed days, overload phases — without digging through logs or charts."
          videoSrc="/muscleslideshow.mp4"
        />      
        <TwoPhonesCenterText
          title="Full weight analysis"
          subtitle="You can see how your weight has changed over time, how consistent your logging has been, and how your current trend compares to your goal. The insights call out what’s happening and whether you’re moving in the right direction."
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
            <span className="font-black">TODO change the image to include RPE and use proper times and show the deleting of rows</span>
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
                title: "Workout name",
                description: "Clearly labelled sessions so nothing feels lost.",
                anchor: { top: "6.5%", left: "15%" },
                panel: { left: `-${x}%`, top: "1.5%" },
              },
              {
                id: "b",
                title: "Timings",
                description: "Displays the time you started the workout, along with how much time you've spent so far.",
                anchor: { top: "10%", left: "57%" },
                panel: { right: `-${x}%`, top: "5%" },
              },
              {
                id: "c",
                title: "Different types of sets for different occasions",
                description: "Want to log a warmup set? A superset? A dropset? Or just a normal set, you can toggle the set type",
                anchor: { top: "40%", left: "17%" },
                panel: { left: `-${x}%`, top: "35%" },
              },
              {
                id: "d",
                title: "Rest timing",
                description: "Built-in rest control, always visible.",
                anchor: { top: "46%", left: "95%" },
                panel: { right: `-${x}%`, top: "36%" },
              },
              {
                id: "e",
                title: "RPE",
                description: "Automatically log your next set",
                anchor: { top: "51%", left: "75%" },
                panel: { right: `-${x}%`, top: "66%" },
              },              
              {
                id: "f",
                title: "Toggle up or down exercises to save space",
                description: "Got plenty of exercises in your workout? No problem, collapse exercises to save space, only having open the ones you're using.",
                anchor: { top: "77.8%", left: "3%" },
                panel: { left: `-${x}%`, top: "72.8%" },
              },
              {
                id: "g",
                title: "Easy set logging",
                description: "Automatically log your next set",
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
            <p className="mt-2 max-w-2xl text-[14px] sm:text-[15px] text-[#6E7A8C] leading-relaxed">
              Rest, set types, quick edits, and the session overview — designed to keep
              you moving.
            </p>
          </div>

          <Tiles2x2
            items={[
              {
                title: "Always-on rest timer",
                subtitle: "Starts instantly, stays visible, never breaks your flow",
                src: "/snippets/resttimer.png",
                alt: "Rest timer",
              },
              {
                title: "Advanced set types",
                subtitle: "Warm-ups, drop sets, AMRAPs — log exactly how you train",
                src: "/snippets/settype.png",
                alt: "Set type",
              },
              {
                title: "Instant edits",
                subtitle: "Adjust weight, reps, or rest in seconds — no friction",
                src: "/snippets/editresttimer.png",
                alt: "Quick edits",
              },
              {
                title: "TODO replace this with the rpe mention",
                subtitle: "Every exercise, set, and rest — clear at a glance",
                src: "/snippets/addexercises.png",
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
              Train with direction.
              <span className="block text-black/60 font-medium">
                Everything you’re working toward, in one place.
              </span>
            </h2>

            <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] text-black/60">
              Set strength, bodyweight, or performance goals and see them fill as you train. Aureus automatically calculates progress, predicts timelines, and updates your path forward—feeding everything into your AI insights without extra effort.
            </p>
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
                  description: "Want to reach a specific bodyweight? Set it here and Aureus intelligently tracks trends, estimates timelines, and feeds it into your AI insights.",
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
                subheading="Strength, bodyweight and consistancy goals, all to get you to a brighter future"
                items={[
                  {
                    title: "Strength Goals",
                    subtitle: "Choose any exercise and your goal 1RM. Watch the goal fill automatically fill up as you workout, with 1RM's being auto computed.",
                    src: "/snippets/strengthgoal.png",
                    alt: "Rest timer",
                  },
                  {
                    title: "Body Goals",
                    subtitle: "Weather you're cutting / bulking, trying to gain or lose weight setting a body goal helps shape your physique to your dream bodyweight. After entering your goal, the app's actionable weight analytics screen keeps you on track",
                    src: "/snippets/bodygoal.png",
                    alt: "Set type",
                  },
                  {
                    title: "Go at the speed you like",
                    subtitle: "Your weight journey doesn't need to go to fast, you can go at the speed you feel comfortable at.",
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
          filterPanelSrc="/appscreenshots/filter-panel.png"
          filtersActiveSrc="/appscreenshots/filters-active.png"
          customExerciseSrc="/appscreenshots/custom-exercise.png"
          iphoneFrameSrc="/finaliphoneframe.png"
        />
      </div>

      <AureusFeatureShowcase/>

      <AlternativeSection/>

      <ComparisonTable/>

      <MainCTASection/>

      <FAQSection/>

      <Footer/>

    </main>
  );
}
