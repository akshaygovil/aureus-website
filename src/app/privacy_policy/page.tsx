"use client";

import { motion } from "framer-motion";
import { EMAIL_ADRESS } from "../assets/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050509] text-[#F5F5F7] flex flex-col items-center px-6">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-gradient-to-b from-[#D4AF37]/18 via-transparent to-transparent blur-[120px]" />
        <div className="absolute bottom-[-240px] left-[-120px] w-[420px] h-[420px] bg-gradient-to-tr from-[#111827] via-[#111827] to-transparent blur-[120px]" />
        <div className="absolute bottom-[-260px] right-[-40px] w-[360px] h-[360px] bg-gradient-to-tl from-[#D4AF37]/10 via-transparent to-transparent blur-[120px]" />
      </div>

      {/* Content wrapper */}
      <section className="w-full max-w-5xl pt-28 pb-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-black/40 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#9CA3AF]">
              Aureus Fitness • Privacy First
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#9CA3AF] max-w-2xl">
            This Privacy Policy explains how Aureus Fitness (&quot;Aureus&quot;, &quot;we&quot;, &quot;us&quot;)
            handles your information in the Aureus mobile application and on our
            website. We’ve written this to be clear, honest, and easy to read.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative rounded-3xl border border-[#262626] bg-gradient-to-b from-[#050509]/98 via-[#050509]/98 to-[#020308]/98 px-5 md:px-8 py-8 md:py-10 backdrop-blur-md shadow-[0_18px_120px_rgba(0,0,0,0.65)] space-y-7 text-sm md:text-[15px] leading-relaxed"
        >
          {/* 1. Scope & Operator */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              1. Who We Are & Scope
            </h2>
            <p className="text-[#9CA3AF]">
              This Privacy Policy applies to the Aureus Fitness mobile
              application and any related web experiences (collectively, the
              &quot;Service&quot;). The Service is operated under the Aureus Fitness brand.
              For any questions about this Policy or your data, you can contact us
              at{" "}
              <a
                href={`mailto:${EMAIL_ADRESS}`}
                className="text-[#D4AF37] hover:text-[#F5E6A8] underline underline-offset-2"
              >
                {EMAIL_ADRESS}
              </a>
              .
            </p>
          </motion.section>

          {/* 2. Data We Handle */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              2. Information We Handle
            </h2>
            <p className="text-[#9CA3AF]">
              We focus on performance training data, not selling your identity.
              Depending on how you use Aureus, we may handle:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[#9CA3AF]">
              <li>
                <span className="font-medium text-white">
                  Account Information:
                </span>{" "}
                Email address and authentication details when you sign up or log
                in (managed via our auth provider, such as Supabase).
              </li>
              <li>
                <span className="font-medium text-white">
                  Training & Progress Data:
                </span>{" "}
                Workouts, exercises, sets, reps, load, RPE, notes, goals, and
                related performance metrics.
              </li>
              <li>
                <span className="font-medium text-white">
                  Body Metrics & Physique Data:
                </span>{" "}
                Bodyweight and other self-entered stats. If you choose, you may
                upload or store physique photos for your own progress tracking.
              </li>
              <li>
                <span className="font-medium text-white">
                  Device & Technical Data:
                </span>{" "}
                Basic technical information (e.g. device model, OS version,
                in-app events) that may be required to operate the Service
                securely and reliably. We do not currently use invasive
                analytics tools.
              </li>
            </ul>
          </motion.section>

          {/* 3. How & Where Data is Stored */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              3. How Your Data Is Stored
            </h2>
            <p className="text-[#9CA3AF]">
              Aureus is designed with a <span className="text-white font-medium">local-first</span> mindset:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[#9CA3AF]">
              <li>
                <span className="font-medium text-white">
                  On Your Device:
                </span>{" "}
                Training logs, notes, and related data are primarily stored
                locally on your device using secure storage technologies (such
                as databases like WatermelonDB / SQLite). This means we do not
                automatically see or control that data.
              </li>
              <li>
                <span className="font-medium text-white">
                  Cloud Sync & Accounts:
                </span>{" "}
                If you create an account or enable cloud backup/sync, certain
                data (like your email, profile, and training history) may be
                securely stored with our backend provider (e.g. Supabase) to
                provide backup, sync, and secure authentication.
              </li>
            </ul>
            <p className="text-[#9CA3AF]">
              We do <span className="font-medium text-white">not</span> sell your
              personal data.
            </p>
          </motion.section>

          {/* 4. How We Use Your Data */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              4. How We Use This Information
            </h2>
            <p className="text-[#9CA3AF]">We use your information to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#9CA3AF]">
              <li>Provide and personalise your training experience.</li>
              <li>
                Calculate insights such as volume, estimated 1RM, strength
                trends, and progress visuals.
              </li>
              <li>
                Authenticate your account and keep your data securely associated
                with you.
              </li>
              <li>
                Maintain, protect, and improve the app’s stability, security,
                and user experience.
              </li>
            </ul>
          </motion.section>

          {/* 5. Payments (Future Stripe etc.) */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              5. Subscriptions & Payments
            </h2>
            <p className="text-[#9CA3AF]">
              If you purchase a subscription through the App Store, Play Store,
              or a third-party payment provider (such as Stripe in the future),
              your payment details are processed directly by those platforms.
              We do not store your full credit card number.
            </p>
            <p className="text-[#9CA3AF]">
              We may receive limited billing-related information (e.g. a
              transaction ID or subscription status) solely to activate and
              manage your access to premium features.
            </p>
          </motion.section>

          {/* 6. AI & No Medical Advice */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              6. AI Features & No Medical Advice
            </h2>
            <p className="text-[#9CA3AF]">
              Aureus may provide training suggestions, auto-generated programs,
              or insights powered by algorithms or AI. These outputs are for
              informational and educational purposes only.
            </p>
            <p className="text-[#9CA3AF]">
              They do not constitute medical, nutritional, or professional
              health advice. Always consult a qualified healthcare or fitness
              professional before making significant changes to your training,
              diet, or lifestyle.
            </p>
          </motion.section>

          {/* 7. Sharing & Third Parties */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              7. Sharing Your Information
            </h2>
            <p className="text-[#9CA3AF]">
              We do not sell your personal data.
            </p>
            <p className="text-[#9CA3AF]">
              We may share limited data with trusted service providers who help
              us operate the Service (for example, authentication, secure cloud
              storage, or payment processing), strictly for the purpose of
              providing these functions. These providers are required to handle
              your data securely and in line with this Policy.
            </p>
            <p className="text-[#9CA3AF]">
              We may also disclose information if required by law, to protect
              our rights, or in connection with a merger, acquisition, or
              similar corporate event.
            </p>
          </motion.section>

          {/* 8. Security */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">8. Security</h2>
            <p className="text-[#9CA3AF]">
              We use reasonable technical and organisational measures to protect
              your information from unauthorised access, loss, misuse, or
              alteration. No system is perfectly secure, but we design Aureus
              with privacy and security as core principles.
            </p>
          </motion.section>

          {/* 9. Your Choices & Rights */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              9. Your Choices & Data Control
            </h2>
            <p className="text-[#9CA3AF]">
              Depending on your location, you may have rights to access, update,
              or delete certain information. In practice, you can:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[#9CA3AF]">
              <li>Edit or delete your training data directly in the app.</li>
              <li>
                Delete physique photos or notes you no longer wish to keep.
              </li>
              <li>
                Request assistance or account deletion by emailing{" "}
                <a
                  href={`mailto:${EMAIL_ADRESS}`}
                  className="text-[#D4AF37] hover:text-[#F5E6A8] underline underline-offset-2"
                >
                  {EMAIL_ADRESS}
                </a>
                .
              </li>
            </ul>
          </motion.section>

          {/* 10. Children */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              10. Children&apos;s Privacy
            </h2>
            <p className="text-[#9CA3AF]">
              Aureus is intended for users aged 16+ (or the age of digital
              consent in your region). We do not knowingly collect personal
              information from children. If you believe a child has provided us
              with personal data, please contact us so we can take appropriate
              action.
            </p>
          </motion.section>

          {/* 11. Changes */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              11. Changes to This Policy
            </h2>
            <p className="text-[#9CA3AF]">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. When we do, we
              will update the &quot;Last updated&quot; date below. For material
              changes, we may provide an in-app notice.
            </p>
            <p className="text-xs text-[#6B7280]">
              Last updated: 11 November 2025
            </p>
          </motion.section>

          {/* CTA / Contact */}
          <motion.div
            variants={fadeUp}
            className="pt-4 mt-2 border-t border-[#262626] flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          >
            <p className="text-[11px] md:text-xs text-[#9CA3AF]">
              If you have any questions about this Policy or how Aureus handles
              your data, email us at{" "}
              <a
                href={`mailto:${EMAIL_ADRESS}`}
                className="text-[#D4AF37] hover:text-[#F5E6A8] underline underline-offset-2"
              >
                {EMAIL_ADRESS}
              </a>
              .
            </p>
            <div className="inline-flex items-center gap-2 text-[10px] md:text-[11px] text-[#6B7280]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Engineered for lifters who take progress seriously.</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
