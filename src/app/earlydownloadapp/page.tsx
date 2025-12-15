// app/page.tsx
"use client";

import Link from "next/link";
import React from "react";

const APK_URL = "https://expo.dev/artifacts/eas/kAh5TF7SPCFvZaagB24Ya9.apk";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 decoration-white/25 text-white/75 hover:text-white hover:decoration-white/60 transition"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Link>
  );
}

export default function Page() {
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(APK_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard may be blocked; ignore
    }
  };

  return (
    <main className="min-h-[100svh] w-full bg-[#070A0F] text-white">
      {/* calm, reputable background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 15% 12%, rgba(255, 210, 120, 0.10), transparent 60%)," +
            "radial-gradient(820px 520px at 85% 22%, rgba(90, 170, 255, 0.10), transparent 55%)," +
            "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 35%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col px-5 sm:px-6">
        {/* header */}
        <header className="flex items-center justify-between pt-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 backdrop-blur" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Aureus</div>
              <div className="text-xs text-white/55">Early access</div>
            </div>
          </div>

          <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 backdrop-blur">
            Android APK
          </span>
        </header>

        {/* content */}
        <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center py-10 sm:py-12">
          <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-5xl">
            Train with clarity.
            <span className="block text-white/70">
              A premium fitness tracker built for consistency.
            </span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base">
            Temporary download page while the full website is being built. No
            ads, no redirects — just the install link.
          </p>

          {/* card */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur sm:mt-10 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold tracking-tight">
                  Download Aureus (Android)
                </div>
                <div className="mt-1 text-xs text-white/60">
                  Hosted on Expo EAS artifacts.
                </div>
              </div>

              {/* big mobile-friendly button */}
              <Link
                href={APK_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl px-5 py-3.5 text-sm font-semibold text-[#070A0F] shadow-[0_14px_30px_rgba(0,0,0,0.35)] transition active:scale-[0.99]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,214,120,1) 0%, rgba(170,220,255,1) 55%, rgba(255,255,255,1) 100%)",
                }}
                target="_blank"
                rel="noreferrer"
              >
                Download APK
              </Link>
            </div>

            {/* info blocks (stack on mobile) */}
            <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs font-semibold text-white/80">
                  What you’re downloading
                </div>
                <div className="mt-1 text-xs leading-relaxed text-white/60">
                  An Android <span className="text-white/70">.apk</span> build
                  of Aureus.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs font-semibold text-white/80">
                  Install requirement
                </div>
                <div className="mt-1 text-xs leading-relaxed text-white/60">
                  You may need to enable{" "}
                  <span className="text-white/70">Install unknown apps</span>.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs font-semibold text-white/80">
                  Safety check
                </div>
                <div className="mt-1 text-xs leading-relaxed text-white/60">
                  Confirm the domain is{" "}
                  <span className="text-white/70">expo.dev</span>.
                </div>
              </div>
            </div>

            {/* link + copy */}
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:mt-5">
              <div className="text-xs font-semibold text-white/75">
                Direct download link
              </div>

              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <code className="w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-[11px] text-white/70">
                  {APK_URL}
                </code>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onCopy}
                    className="flex-1 sm:flex-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-white/70 hover:bg-white/10 transition"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>

                  <Link
                    href={APK_URL}
                    className="flex-1 sm:flex-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-[11px] text-white/70 hover:bg-white/10 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                  </Link>
                </div>
              </div>

              <div className="mt-3 text-[11px] leading-relaxed text-white/50">
                This build isn’t from the Play Store yet. Android warnings are
                normal for external APKs.
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="mt-7 flex flex-col gap-2 text-xs text-white/55 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              Want to verify the host?{" "}
              <ExternalLink href="https://expo.dev/">expo.dev</ExternalLink>
            </div>
            <div className="text-white/45">© {new Date().getFullYear()} Aureus</div>
          </div>
        </section>
      </div>
    </main>
  );
}
