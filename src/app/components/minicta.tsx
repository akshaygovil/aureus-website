"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type MainCTASectionProps = {
  id?: string;
  heading?: string;
  subheading?: string;
  cta?: { label: string; href: string };
  className?: string;
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function DownloadButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        group relative inline-flex items-center justify-center gap-3
        rounded-3xl px-10 py-5
        text-lg font-semibold tracking-tight
        text-[#0D1B3D]
        shadow-[0_20px_60px_rgba(13,27,61,0.25)]
        transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-[0_28px_80px_rgba(13,27,61,0.35)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B3D]/30
      "
    >
      {/* Gold gradient fill */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-3xl
          bg-[linear-gradient(135deg,#F6E7A8_0%,#E9C46A_30%,#D4AF37_60%,#B88A1E_100%)]"
      />

      {/* Subtle inner light */}
      <span
        aria-hidden
        className="absolute inset-[1px] rounded-[22px]
          bg-[radial-gradient(120%_90%_at_20%_10%,rgba(255,255,255,0.55),transparent_55%)]
          opacity-80"
      />

      {/* Border */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-3xl ring-1 ring-black/10"
      />

      <span className="relative flex items-center gap-3">
        {children}
        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export default function MainCTASection({
  id = "download",
  heading = "Free to download. Powerful when you need it.",
  subheading = "Use Aureus for free. Upgrade to add deeper feedback and analysis only if and when you want it.",
  cta = { label: "Download Aureus", href: "#download" },
  className,
}: MainCTASectionProps) {
  const reduce = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-14 sm:py-18",
        className
      )}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-6"
        >
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0D1B3D]">
            {heading}
          </h2>

          <p className="max-w-2xl text-[15px] sm:text-base leading-relaxed text-[#0D1B3D]/60">
            {subheading}
          </p>

          <div className="pt-2">
            <DownloadButton href={cta.href}>
              {cta.label}
            </DownloadButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
