"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  CalendarClock,
  ChartNoAxesCombined,
  Coins,
  Crown,
  Download,
  FileSpreadsheet,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";

type CTA = { label: string; href: string };

type AlternativeSectionProps = {
  appName?: string; // default: "Aureus"
  primaryCta?: CTA; // default: { label: "Download free", href: "/download" }
  secondaryCta?: CTA; // default: { label: "See what you get", href: "#insights" }
  className?: string;
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

type Mode = "cost" | "effort" | "insights";

function SegButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold transition",
        "outline-none focus-visible:ring-2 focus-visible:ring-[#F3D37C]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070C1B]",
        active
          ? "bg-white/10 text-white ring-1 ring-white/15"
          : "text-white/70 hover:text-white hover:bg-white/5"
      )}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

function MetricRow({
  icon: Icon,
  label,
  value,
  tone = "neutral",
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  tone?: "good" | "bad" | "neutral" | "gold";
}) {
  const toneClass =
    tone === "good"
      ? "text-emerald-200/90"
      : tone === "bad"
      ? "text-rose-200/90"
      : tone === "gold"
      ? "text-[#F3D37C]"
      : "text-white/85";

  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-2 text-white/70">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        <span className="text-[12px] font-medium">{label}</span>
      </div>
      <div className={cn("text-right text-[12px] font-semibold leading-tight", toneClass)}>
        {value}
      </div>
    </div>
  );
}

function SoftDivider() {
  return <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />;
}

function CardShell({
  children,
  highlighted,
  className,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-white/[0.05] ring-1 ring-white/10",
        "shadow-[0_30px_80px_rgba(0,0,0,0.45)]",
        highlighted && "ring-[#F3D37C]/35",
        className
      )}
    >
      {/* subtle sheen */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-24 left-1/2 h-48 w-[520px] -translate-x-1/2 rounded-full blur-3xl",
          highlighted ? "bg-[#F3D37C]/18" : "bg-white/10"
        )}
      />
      {/* edge glow */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-3xl",
          highlighted
            ? "bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(243,211,124,0.18),transparent_55%)]"
            : "bg-[radial-gradient(1000px_420px_at_50%_-10%,rgba(255,255,255,0.10),transparent_58%)]"
        )}
      />
      {children}
    </div>
  );
}

function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "gold" | "soft";
}) {
  const cls =
    tone === "gold"
      ? "bg-[#F3D37C]/12 text-[#F3D37C] ring-1 ring-[#F3D37C]/25"
      : tone === "soft"
      ? "bg-white/6 text-white/80 ring-1 ring-white/10"
      : "bg-white/8 text-white/75 ring-1 ring-white/10";

  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold", cls)}>
      {children}
    </span>
  );
}

function CompareCard({
  title,
  icon: Icon,
  subtitle,
  bullets,
  mode,
  metrics,
  highlighted,
  topRightBadge,
}: {
  title: string;
  icon: React.ElementType;
  subtitle: string;
  bullets: Array<{ icon: React.ElementType; text: string }>;
  mode: Mode;
  metrics: Record<Mode, Array<React.ComponentProps<typeof MetricRow>>>;
  highlighted?: boolean;
  topRightBadge?: React.ReactNode;
}) {
  return (
    <CardShell highlighted={highlighted} className="h-full">
      <div className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1",
                  highlighted
                    ? "bg-[#F3D37C]/10 text-[#F3D37C] ring-[#F3D37C]/25"
                    : "bg-white/5 text-white/85 ring-white/10"
                )}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="truncate text-base font-semibold tracking-tight text-white">{title}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{subtitle}</p>
          </div>

          {topRightBadge ? <div className="shrink-0">{topRightBadge}</div> : null}
        </div>

        <SoftDivider />

        <div className="space-y-3">
          {metrics[mode].map((m, idx) => (
            <MetricRow key={idx} {...m} />
          ))}
        </div>

        <SoftDivider />

        <ul className="space-y-3">
          {bullets.map((b, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <b.icon className="h-4 w-4 text-white/80" aria-hidden />
              </span>
              <span className="text-sm leading-relaxed text-white/75">{b.text}</span>
            </li>
          ))}
        </ul>

        {highlighted ? (
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#F3D37C]/10 via-white/5 to-[#F3D37C]/10 p-4 ring-1 ring-[#F3D37C]/18">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#F3D37C]/12 ring-1 ring-[#F3D37C]/20">
                <Sparkles className="h-4 w-4 text-[#F3D37C]" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Premium insights, without premium friction.
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Download free. Upgrade only if you want deeper automation and advanced analysis.
                </p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-auto" />
      </div>
    </CardShell>
  );
}

export default function AlternativeSection({
  appName = "Aureus",
  primaryCta = { label: "Download free", href: "/download" },
  secondaryCta = { label: "See what you get", href: "#insights" },
  className,
}: AlternativeSectionProps) {
  const reduce = useReducedMotion();
  const [mode, setMode] = React.useState<Mode>("cost");

  const wrap = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.35 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      };

  const PT = {
    title: "Personal training",
    icon: UserRound,
    subtitle: "Great when you can afford it — but expensive, scheduled, and hard to scale.",
    bullets: [
      { icon: CalendarClock, text: "Results depend on availability (and who you get)." },
      { icon: Coins, text: "You keep paying to keep progress moving." },
      { icon: Zap, text: "Most insight happens inside the session — not between them." },
    ],
    metrics: {
      cost: [
        { icon: Coins, label: "Cost", value: "High (often $/session)", tone: "bad" as const },
        { icon: CalendarClock, label: "Commitment", value: "Scheduled + recurring", tone: "neutral" as const },
        { icon: ChartNoAxesCombined, label: "Visibility", value: "Limited outside sessions", tone: "neutral" as const },
      ],
      effort: [
        { icon: CalendarClock, label: "Setup time", value: "Booking + travel", tone: "bad" as const },
        { icon: Zap, label: "Consistency", value: "Hard on busy weeks", tone: "neutral" as const },
        { icon: BadgeCheck, label: "Guidance", value: "Strong (but session-bound)", tone: "good" as const },
      ],
      insights: [
        { icon: Sparkles, label: "Actionable insight", value: "Good (live coaching)", tone: "good" as const },
        { icon: ChartNoAxesCombined, label: "Trend analysis", value: "Depends on trainer", tone: "neutral" as const },
        { icon: Coins, label: "Value", value: "Costs more than most need", tone: "bad" as const },
      ],
    } as const,
  };

  const Sheets = {
    title: "Charts / spreadsheets",
    icon: FileSpreadsheet,
    subtitle: "Cheap on paper — costly in time. Data without direction becomes noise.",
    bullets: [
      { icon: FileSpreadsheet, text: "Manual entry, manual formulas, manual motivation." },
      { icon: ChartNoAxesCombined, text: "You end up staring at charts… wondering what to do next." },
      { icon: Zap, text: "Easy to fall off when life gets busy." },
    ],
    metrics: {
      cost: [
        { icon: Coins, label: "Cost", value: "Low (mostly time)", tone: "neutral" as const },
        { icon: CalendarClock, label: "Time cost", value: "High (maintenance)", tone: "bad" as const },
        { icon: Sparkles, label: "Guidance", value: "None (DIY)", tone: "bad" as const },
      ],
      effort: [
        { icon: CalendarClock, label: "Setup time", value: "High (templates + tweaking)", tone: "bad" as const },
        { icon: Zap, label: "Ease of use", value: "Friction every week", tone: "bad" as const },
        { icon: ChartNoAxesCombined, label: "Clarity", value: "Hard to interpret", tone: "neutral" as const },
      ],
      insights: [
        { icon: ChartNoAxesCombined, label: "Trends", value: "Visible (if you build it)", tone: "neutral" as const },
        { icon: Sparkles, label: "Action items", value: "Missing", tone: "bad" as const },
        { icon: BadgeCheck, label: "Confidence", value: "Low (guesswork)", tone: "bad" as const },
      ],
    } as const,
  };

  const App = {
    title: appName,
    icon: Crown,
    subtitle: "Coach-level clarity from your training — without the PT pricing or spreadsheet grind.",
    bullets: [
      { icon: Sparkles, text: "Premium insights that tell you what matters (and what to change)." },
      { icon: ChartNoAxesCombined, text: "Automatic trends, muscle balance, volume & strength analytics." },
      { icon: Download, text: "Free to download — upgrade only when you’re ready." },
    ],
    metrics: {
      cost: [
        { icon: Coins, label: "Cost", value: "Free to download", tone: "gold" as const },
        { icon: Coins, label: "Compared to PT", value: "Cheaper than one session", tone: "good" as const },
        { icon: BadgeCheck, label: "Value", value: "Premium insights included", tone: "gold" as const },
      ],
      effort: [
        { icon: Zap, label: "Workflow", value: "Log → instant clarity", tone: "good" as const },
        { icon: CalendarClock, label: "Consistency", value: "Built for busy weeks", tone: "good" as const },
        { icon: FileSpreadsheet, label: "Manual work", value: "Near-zero", tone: "good" as const },
      ],
      insights: [
        { icon: Sparkles, label: "Actionable insight", value: "High (what to do next)", tone: "gold" as const },
        { icon: ChartNoAxesCombined, label: "Depth", value: "Advanced analysis", tone: "gold" as const },
        { icon: BadgeCheck, label: "Confidence", value: "Decisions backed by data", tone: "good" as const },
      ],
    } as const,
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-[#070C1B] py-16 sm:py-20 md:py-24",
        className
      )}
    >
      {/* Ambient background (no grid) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#2A6AF0]/12 blur-3xl" />
        <div className="absolute -bottom-64 right-[-15%] h-[520px] w-[760px] rounded-full bg-[#F3D37C]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div {...wrap} className="mx-auto max-w-2xl text-center">
          <Pill tone="gold">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            The alternative
          </Pill>

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Stop paying for guesswork.
          </h2>

          <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 sm:text-[17px]">
            Personal training is powerful — but it’s expensive and tied to a schedule. Spreadsheets are “free” —
            but they steal your time and still don’t tell you what to do.
            <span className="text-white/85"> {appName} gives you premium, actionable insights</span> from the workouts
            you already log.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={primaryCta.href}
              className={cn(
                "group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold",
                "bg-gradient-to-b from-[#F3D37C] via-[#D7B35E] to-[#A67C2A] text-[#0B1020]",
                "shadow-[0_18px_60px_rgba(243,211,124,0.18)]",
                "ring-1 ring-white/10 hover:brightness-[1.03] active:brightness-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D37C]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070C1B]"
              )}
            >
              <Download className="h-4 w-4" aria-hidden />
              {primaryCta.label}
              <span className="ml-1 text-[#0B1020]/70 transition group-hover:translate-x-0.5">→</span>
            </Link>

            <Link
              href={secondaryCta.href}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold",
                "bg-white/5 text-white/85 ring-1 ring-white/10 hover:bg-white/8",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D37C]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070C1B]"
              )}
            >
              <Zap className="h-4 w-4" aria-hidden />
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>

        {/* Segmented control */}
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.35 },
                transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: 0.05 },
              })}
          className="mt-10 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 p-1.5 ring-1 ring-white/10">
            <SegButton active={mode === "cost"} onClick={() => setMode("cost")}>
              Cost
            </SegButton>
            <SegButton active={mode === "effort"} onClick={() => setMode("effort")}>
              Effort
            </SegButton>
            <SegButton active={mode === "insights"} onClick={() => setMode("insights")}>
              Insights
            </SegButton>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 14 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.25 },
                transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: 0.08 },
              })}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          <CompareCard
            title={PT.title}
            icon={PT.icon}
            subtitle={PT.subtitle}
            bullets={PT.bullets}
            mode={mode}
            metrics={PT.metrics as any}
            topRightBadge={<Pill tone="soft">Traditional</Pill>}
          />

          <CompareCard
            title={Sheets.title}
            icon={Sheets.icon}
            subtitle={Sheets.subtitle}
            bullets={Sheets.bullets}
            mode={mode}
            metrics={Sheets.metrics as any}
            topRightBadge={<Pill tone="soft">Manual</Pill>}
          />

          <CompareCard
            title={App.title}
            icon={App.icon}
            subtitle={App.subtitle}
            bullets={App.bullets}
            mode={mode}
            metrics={App.metrics as any}
            highlighted
            topRightBadge={
              <Pill tone="gold">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                Better choice
              </Pill>
            }
          />
        </motion.div>

        {/* Bottom conversion band */}
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 14 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.3 },
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.12 },
              })}
          className="mt-10 overflow-hidden rounded-3xl bg-white/[0.045] p-6 ring-1 ring-white/10 sm:p-7"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Pill tone="gold">
                  <Download className="h-3.5 w-3.5" aria-hidden />
                  Free to download
                </Pill>
                <Pill tone="soft">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Premium insights included
                </Pill>
                <Pill tone="soft">
                  <Zap className="h-3.5 w-3.5" aria-hidden />
                  No spreadsheets
                </Pill>
              </div>

              <p className="mt-3 text-pretty text-sm leading-relaxed text-white/70">
                If you’ve ever logged workouts and thought, “Okay… now what?” — this is the missing piece.
                {` ${appName}`} turns your training into clear next steps, without a coach’s hourly rate.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <Link
                href={primaryCta.href}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold",
                  "bg-white text-[#0B1020] hover:brightness-[0.98]",
                  "shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D37C]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070C1B]"
                )}
              >
                <Download className="h-4 w-4" aria-hidden />
                {primaryCta.label}
              </Link>

              <Link
                href={secondaryCta.href}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold",
                  "bg-transparent text-white/85 ring-1 ring-white/15 hover:bg-white/5",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D37C]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070C1B]"
                )}
              >
                <ChartNoAxesCombined className="h-4 w-4" aria-hidden />
                Compare features
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Usage:
 * <AlternativeSection
 *   appName="Aureus"
 *   primaryCta={{ label: "Download free", href: "/download" }}
 *   secondaryCta={{ label: "See insights", href: "#insights" }}
 * />
 */
