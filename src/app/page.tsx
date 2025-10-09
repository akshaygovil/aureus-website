import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F6F8FA] text-[#2c2c2c] font-sans">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#F6F8FA] via-[#7BA8F5]/10 to-[#5A83D7]/10">
        <h1>
          ejuvneinirenfienijfneinfiueniuverjtiogjn4i9efefrf
        </h1>
        <h3 className="text-6xl font-bold text-[red] hover:rotate-45 hover:scale-200 transition delay-300">
          poop
        </h3>
        <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight text-[#2c2c2c]">
          Unnamed – Built for Serious Lifters poop
        </h1>
        <p className="text-xl text-[#656565] max-w-2xl mb-10">
          Transform the way you train with the next-generation strength &
          hypertrophy platform. Track your progress. Break plateaus. Train like
          an elite.
        </p>

        <a
          href="#"
          className="bg-[#2c2c2c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5a83d7] transition-all duration-300"
        >
          Download on the App Store
        </a>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-28 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#2c2c2c]">
          Why Unnamed?
        </h2>
        <p className="text-lg text-[#656565] mb-20 max-w-2xl mx-auto">
          Precision-engineered to push lifters beyond limits. Everything you
          need to build muscle and strength, backed by science and simplicity.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="relative p-8 rounded-2xl bg-white shadow-md hover:shadow-[0_0_35px_8px_rgba(90,131,215,0.75)] hover:scale-105 hover:brightness-110 transition-all duration-300 ease-out overflow-hidden">
            <h3 className="text-2xl font-semibold mb-4 text-[#5a83d7]">
              📊 Smart Progress Tracking
            </h3>
            <p className="text-[#656565]">
              Visualize your lifts, volume, and strength gains over time with
              intelligent analytics built for lifters.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-[#32b768]">
              🧠 AI-Driven Training Insights
            </h3>
            <p className="text-[#656565]">
              Get personalized feedback and red-flag detection based on your
              recent training history and volume trends.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-[#C9A227]">
              🔥 Built for Performance
            </h3>
            <p className="text-[#656565]">
              Designed exclusively for intermediate to advanced lifters who want
              real results — not gimmicks.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section className="py-28 bg-[#E8E8E8] px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#2c2c2c]">
          How It Works
        </h2>
        <p className="text-lg text-[#656565] mb-20 max-w-2xl mx-auto">
          Unnamed was built to simplify elite-level training. Here’s how:
        </p>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="p-8">
            <div className="text-5xl mb-4 text-[#5a83d7]">📥</div>
            <h3 className="text-2xl font-semibold mb-4">Download</h3>
            <p className="text-[#656565]">
              Get Unnamed on your phone and set your training goals.
            </p>
          </div>

          <div className="p-8">
            <div className="text-5xl mb-4 text-[#32b768]">🏋️‍♂️</div>
            <h3 className="text-2xl font-semibold mb-4">Train</h3>
            <p className="text-[#656565]">
              Log workouts, track progress, and push past limits with science-backed programming.
            </p>
          </div>

          <div className="p-8">
            <div className="text-5xl mb-4 text-[#C9A227]">📈</div>
            <h3 className="text-2xl font-semibold mb-4">Evolve</h3>
            <p className="text-[#656565]">
              Watch your strength skyrocket as AI adapts to your progress.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-32 px-6 bg-gradient-to-t from-[#5a83d7]/10 to-[#F6F8FA] text-center">
        <h2 className="text-5xl font-bold mb-6 text-[#2c2c2c]">
          Start Training Smarter Today
        </h2>
        <p className="text-lg text-[#656565] max-w-2xl mx-auto mb-10">
          Join thousands of lifters building strength and muscle the smarter
          way. Download Unnamed and transform your training forever.
        </p>

        <a
          href="#"
          className="bg-[#2c2c2c] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#5a83d7] transition-all duration-300"
        >
          Download on the App Store
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-sm text-[#656565] bg-[#F6F8FA] border-t border-[#E8E8E8]">
        © {new Date().getFullYear()} Unnamed. All rights reserved.
      </footer>
    </div>
  );
}


