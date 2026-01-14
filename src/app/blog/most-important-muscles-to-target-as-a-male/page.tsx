// app/blog/most-important-muscles-men/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Most Important Muscles to Target as a Male (Size, Strength, Balance)",
  description:
    "A readable, practical guide to the muscle groups that matter most for male physique and strength — and how to prioritise them.",
  alternates: { canonical: "/blog/most-important-muscles-men" },
  openGraph: {
    title: "Most Important Muscles to Target as a Male",
    description:
      "A practical guide to the muscle groups that matter most for male physique and strength — and how to prioritise them.",
    url: "/blog/most-important-muscles-men",
    type: "article",
  },
};

function InlineCallout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <div className="mt-2 text-[15px] leading-7 text-zinc-700">{children}</div>
    </div>
  );
}

function StatPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}

function SectionCard({
  title,
  subtitle,
  why,
  focus,
  takeaway,
  imageLabel,
}: {
  title: string;
  subtitle: string;
  why: string[];
  focus: string[];
  takeaway: string;
  imageLabel: string;
}) {
  return (
    <section className="scroll-mt-24">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-base leading-7 text-zinc-600">{subtitle}</p>
      </div>

      {/* IMAGE PLACEHOLDER */}
      <figure className="my-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="flex aspect-[16/9] items-center justify-center bg-zinc-100">
          <p className="px-6 text-center text-sm text-zinc-500">
            Image placeholder: <span className="font-medium">{imageLabel}</span>
          </p>
        </div>
        <figcaption className="border-t border-zinc-200 px-4 py-3 text-xs text-zinc-500">
          Drop your image here later (replace this figure with next/image).
        </figcaption>
      </figure>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
          <h3 className="text-sm font-semibold text-zinc-900">Why it matters</h3>
          <ul className="mt-3 space-y-2 text-[15px] leading-7 text-zinc-700">
            {why.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
          <h3 className="text-sm font-semibold text-zinc-900">Priority focus</h3>
          <ul className="mt-3 space-y-2 text-[15px] leading-7 text-zinc-700">
            {focus.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <InlineCallout title="Training takeaway">{takeaway}</InlineCallout>
    </section>
  );
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Most Important Muscles to Target as a Male (Size, Strength, Balance)",
    description:
      "A readable, practical guide to the muscle groups that matter most for male physique and strength — and how to prioritise them.",
    datePublished: "2026-01-07",
    dateModified: "2026-01-07",
    author: { "@type": "Organization", name: "Aureus" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "/blog/most-important-muscles-men" },
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            Aureus
          </Link>

          <nav className="flex items-center gap-3 text-sm text-zinc-600">
            <Link href="/blog" className="hover:text-zinc-900">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-10 sm:py-12">
        {/* Hero */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            <StatPill>Hypertrophy</StatPill>
            <StatPill>Strength</StatPill>
            <StatPill>Physique</StatPill>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Most Important Muscles to Target as a Male
          </h1>

          <p className="mt-4 text-lg leading-8 text-zinc-700">
            If you’re training for size, strength, and a balanced physique, some muscles give you a{" "}
            <strong>bigger return</strong> than others. This guide shows you which muscle groups
            matter most, why they matter, and how to prioritise them without wasting time.
          </p>

          <InlineCallout title="Quick answer (read this first)">
            Prioritise <strong>back</strong>, <strong>legs</strong>, <strong>chest</strong>, and{" "}
            <strong>shoulders</strong>. Then add direct work for <strong>arms</strong> and{" "}
            <strong>core</strong>. This order builds the frame first — and makes everything else
            look better.
          </InlineCallout>

          {/* TOC */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
            <p className="text-sm font-semibold text-zinc-900">Jump to:</p>
            <div className="mt-3 grid gap-2 text-[15px] text-zinc-700 sm:grid-cols-2">
              <a className="hover:text-zinc-900 hover:underline" href="#chest">
                1) Chest
              </a>
              <a className="hover:text-zinc-900 hover:underline" href="#back">
                2) Back
              </a>
              <a className="hover:text-zinc-900 hover:underline" href="#legs">
                3) Legs
              </a>
              <a className="hover:text-zinc-900 hover:underline" href="#shoulders">
                4) Shoulders
              </a>
              <a className="hover:text-zinc-900 hover:underline" href="#arms">
                5) Arms
              </a>
              <a className="hover:text-zinc-900 hover:underline" href="#core">
                6) Core
              </a>
              <a className="hover:text-zinc-900 hover:underline" href="#priority">
                Muscle priority hierarchy
              </a>
              <a className="hover:text-zinc-900 hover:underline" href="#mistakes">
                Common mistakes
              </a>
              <a className="hover:text-zinc-900 hover:underline sm:col-span-2" href="#ai">
                Where AI-driven training helps
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-14">
          {/* Chest */}
          <div id="chest">
            <SectionCard
              title="1) Chest (Pectorals)"
              subtitle="Upper-body mass and presence. This is one of the highest-visibility muscles on the male physique."
              imageLabel="Chest / pressing image"
              why={[
                "Adds thickness and fullness from the front and side.",
                "Builds pressing strength (bench, dips, push-ups).",
                "Looks impressive even at moderate body fat levels.",
              ]}
              focus={[
                "Upper chest is often the missing piece that makes the torso look “filled out”.",
                "Use a mix of flat and incline presses before relying on fly variations.",
              ]}
              takeaway="If your chest isn’t growing, it’s usually a progression or weekly volume problem — not a lack of “perfect” exercises."
            />
          </div>

          {/* Back */}
          <div id="back">
            <SectionCard
              title="2) Back (Lats + Upper Back)"
              subtitle="Back is the frame-builder. It’s what gives you width, posture, and that dense ‘athletic’ look."
              imageLabel="Back / pull-ups or rows image"
              why={[
                "Lats create the V-taper (wide shoulders → narrow waist illusion).",
                "Upper back thickness makes your torso look powerful.",
                "Supports posture, shoulder health, and heavy compound lifting.",
              ]}
              focus={[
                "Vertical pulling for width (pull-ups, pulldowns).",
                "Horizontal pulling for thickness (rows) and stability.",
              ]}
              takeaway="If you only train chest + arms, your physique looks flat. A bigger back makes everything else pop."
            />
          </div>

          {/* Legs */}
          <div id="legs">
            <SectionCard
              title="3) Legs (Glutes, Quads, Hamstrings)"
              subtitle="The base. Legs are the biggest mass builder and the strongest signal that you actually train."
              imageLabel="Legs / squat or RDL image"
              why={[
                "Largest contributor to total muscle mass.",
                "Heavy leg training supports overall strength progression.",
                "Prevents the classic ‘upper-only’ imbalance.",
              ]}
              focus={[
                "Quads for size and knee strength.",
                "Glutes + hamstrings for power, athleticism, and posterior-chain balance.",
              ]}
              takeaway="Skipping legs doesn’t just hurt your physique — it limits total growth and strength potential."
            />
          </div>

          {/* Shoulders */}
          <div id="shoulders">
            <SectionCard
              title="4) Shoulders (Delts)"
              subtitle="Shoulders define your width. If you want the “broad” look, delts do that faster than almost anything."
              imageLabel="Shoulders / lateral raises image"
              why={[
                "Broader shoulders instantly improve proportions.",
                "Side delts make your upper body look bigger in shirts.",
                "Overhead strength carries into pressing movements.",
              ]}
              focus={[
                "Lateral delts are usually undertrained and need direct work.",
                "Keep balance: front/side/rear delts across the week.",
              ]}
              takeaway="Most people overdo front delts. Side and rear delts typically need more love."
            />
          </div>

          {/* Arms */}
          <div id="arms">
            <SectionCard
              title="5) Arms (Triceps > Biceps)"
              subtitle="Arms matter — but the torso frame makes arms look big. Prioritise triceps for size."
              imageLabel="Arms / triceps + biceps image"
              why={[
                "Arms are always visible.",
                "Triceps make up most of your upper-arm mass.",
                "Balanced arms complete the look once the frame is built.",
              ]}
              focus={[
                "Triceps long head for thickness and ‘big arm’ silhouette.",
                "Biceps for shape, not just endless curls for a ‘peak’.",
              ]}
              takeaway="If your compounds are progressing, arms often grow anyway. Isolation work is the polish."
            />
          </div>

          {/* Core */}
          <div id="core">
            <SectionCard
              title="6) Core (Abs + Deep Stabilizers)"
              subtitle="Abs are made in the kitchen, but a strong core is made in training — and it improves everything."
              imageLabel="Core / plank or carry image"
              why={[
                "Improves force transfer between upper and lower body.",
                "Stabilises heavy lifts and reduces injury risk.",
                "Helps posture and overall athletic performance.",
              ]}
              focus={[
                "Train anti-extension and anti-rotation (not just crunches).",
                "Progressively load core work like any other muscle group.",
              ]}
              takeaway="Train core like a muscle, not a warm-up: gradually add load, reps, or difficulty."
            />
          </div>

          {/* Priority hierarchy */}
          <section id="priority" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Muscle Priority Hierarchy (Simple Rule)
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              If time, recovery, or focus is limited, use this order. It maximises total muscle gain,
              strength carryover, and visual impact.
            </p>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
              <ol className="space-y-2 text-[15px] leading-7 text-zinc-800">
                <li>
                  <strong>1) Back</strong>
                </li>
                <li>
                  <strong>2) Legs</strong>
                </li>
                <li>
                  <strong>3) Chest</strong>
                </li>
                <li>
                  <strong>4) Shoulders</strong>
                </li>
                <li>
                  <strong>5) Arms</strong>
                </li>
                <li>
                  <strong>6) Core</strong>
                </li>
              </ol>
            </div>
          </section>

          {/* Mistakes */}
          <section id="mistakes" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              The Real Mistake Most Men Make
            </h2>

            <p className="mt-3 text-base leading-7 text-zinc-700">
              Most people don’t fail because they picked the “wrong exercises.” They fail because
              they train without a clear priority system and don’t adjust to recovery.
            </p>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
              <p className="text-sm font-semibold text-zinc-900">Common patterns:</p>
              <ul className="mt-3 space-y-2 text-[15px] leading-7 text-zinc-700">
                {[
                  "Prioritising small muscles too early (arms before frame).",
                  "Accumulating fatigue without tracking recovery.",
                  "Training the same weekly volume forever — even when progress stalls.",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <InlineCallout title="Key point">
              Muscle “importance” isn’t fixed. It shifts based on your{" "}
              <strong>weak points</strong>, <strong>recovery</strong>, and{" "}
              <strong>training age</strong>.
            </InlineCallout>
          </section>

          {/* AI */}
          <section id="ai" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Where AI-Driven Training Actually Helps
            </h2>

            <p className="mt-3 text-base leading-7 text-zinc-700">
              The hard part isn’t knowing “back is important.” The hard part is knowing{" "}
              <em>how much</em> back work you personally need — and when to push or pull volume based
              on recovery.
            </p>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
              <p className="text-sm font-semibold text-zinc-900">
                This is exactly where an adaptive system helps:
              </p>
              <ul className="mt-3 space-y-2 text-[15px] leading-7 text-zinc-700">
                {[
                  "Shift volume toward lagging muscles automatically.",
                  "Pull back when recovery drops (sleep, soreness, performance trends).",
                  "Balance aesthetics, strength, and long-term sustainability without guesswork.",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-zinc-600">
                  Training hard is common. Training intelligently is rare.
                </p>
                <Link
                  href="/app"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Try Aureus
                </Link>
              </div>
            </div>
          </section>

          {/* Related */}
          <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-zinc-900">Related reading</h2>
            <ul className="mt-3 space-y-2 text-[15px] text-zinc-700">
              <li>
                <Link className="hover:text-zinc-900 hover:underline" href="/blog/upper-lower-vs-ppl">
                  Upper/Lower vs PPL: Which Split Builds More Muscle?
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-zinc-900 hover:underline"
                  href="/blog/how-much-volume-per-muscle"
                >
                  How Much Volume Per Muscle Per Week for Hypertrophy?
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-zinc-900 hover:underline"
                  href="/blog/why-not-gaining-muscle"
                >
                  Why Am I Not Gaining Muscle? (The Real Reasons)
                </Link>
              </li>
            </ul>
          </aside>
        </div>

        <footer className="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Aureus. Educational content only — consult a professional
            if you have injuries or medical conditions.
          </p>
        </footer>
      </article>
    </main>
  );
}
