"use client";

import { motion } from "framer-motion";
import { EMAIL_ADRESS } from "../assets/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050509] text-[#F5F5F7] flex flex-col items-center px-6">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-gradient-to-b from-[#D4AF37]/18 via-transparent to-transparent blur-[120px]" />
        <div className="absolute bottom-[-240px] left-[-120px] w-[420px] h-[420px] bg-gradient-to-tr from-[#111827] via-[#111827] to-transparent blur-[120px]" />
        <div className="absolute bottom-[-260px] right-[-40px] w-[360px] h-[360px] bg-gradient-to-tl from-[#D4AF37]/10 via-transparent to-transparent blur-[120px]" />
      </div>

      {/* Content */}
      <section className="w-full max-w-5xl pt-28 pb-20">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-black/40 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#9CA3AF]">
              Aureus Fitness • Terms of Service
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Terms of Service</h1>
          <p className="mt-4 text-sm md:text-base text-[#9CA3AF] max-w-2xl">
            These Terms of Service (“Terms”) govern your access to and use of the Aureus Fitness mobile application and
            related websites and services (collectively, the “Service”). Please read them carefully.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative rounded-3xl border border-[#262626] bg-gradient-to-b from-[#050509]/98 via-[#050509]/98 to-[#020308]/98 px-5 md:px-8 py-8 md:py-10 backdrop-blur-md shadow-[0_18px_120px_rgba(0,0,0,0.65)] space-y-7 text-sm md:text-[15px] leading-relaxed"
        >
          {/* 1. Acceptance */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">1) Acceptance of Terms</h2>
            <p className="text-[#9CA3AF]">
              By accessing or using the Service, you agree to be bound by these Terms and our{" "}
              <a href="/privacy" className="text-[#D4AF37] hover:text-[#F5E6A8] underline underline-offset-2">
                Privacy Policy
              </a>
              . If you do not agree, do not use the Service.
            </p>
          </motion.section>

          {/* 2. Eligibility */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">2) Eligibility</h2>
            <p className="text-[#9CA3AF]">
              The Service is intended for individuals aged 16+ (or the age of digital consent in your region). By using
              the Service, you represent that you meet this requirement.
            </p>
          </motion.section>

          {/* 3. Accounts & Local Mode */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">3) Accounts & Local Mode</h2>
            <p className="text-[#9CA3AF]">
              Aureus supports a{" "}
              <span className="text-white font-medium">local-only mode</span> (no account required) for on-device
              training logs and features. Certain features—such as cloud backup/sync, cross-device access, or premium
              content—may require you to create an account and/or hold an active subscription.
            </p>
            <p className="text-[#9CA3AF]">
              If you create an account, you are responsible for maintaining the confidentiality of your login
              credentials and for all activities that occur under your account. You must provide accurate information
              and promptly update any changes.
            </p>
          </motion.section>

          {/* 4. Subscriptions & Billing */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">4) Subscriptions, Trials & Billing</h2>
            <p className="text-[#9CA3AF]">
              Access to certain features may require a paid subscription. If you purchase through the Apple App Store,
              Google Play, or a payment provider (e.g., Stripe, if introduced), billing is handled by that platform and
              their terms apply. Subscriptions typically renew automatically until cancelled. You can manage or cancel
              your subscription via the platform’s account settings. We do not issue refunds beyond what the platform
              provides unless required by law.
            </p>
            <p className="text-[#9CA3AF]">
              We may offer free trials or promotional periods. If you do not cancel before the trial ends, the
              subscription may convert to a paid plan automatically, subject to the renewal terms shown at purchase.
            </p>
          </motion.section>

          {/* 5. Acceptable Use */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">5) Acceptable Use</h2>
            <p className="text-[#9CA3AF]">You agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#9CA3AF]">
              <li>Use the Service for unlawful, harmful, or deceptive purposes.</li>
              <li>Reverse engineer, decompile, or attempt to access source code or non-public systems.</li>
              <li>Interfere with security or integrity of the Service or others’ use of it.</li>
              <li>Upload or share content that is illegal, infringing, abusive, hateful, or violates others’ rights.</li>
            </ul>
          </motion.section>

          {/* 6. User Content */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">6) Your Content</h2>
            <p className="text-[#9CA3AF]">
              You retain ownership of content you create or upload (e.g., workouts, notes, photos). You grant us a
              limited, non-exclusive, royalty-free license to store and process that content solely to operate and
              improve the Service (e.g., syncing your data, generating insights, or troubleshooting issues).
            </p>
            <p className="text-[#9CA3AF]">
              You are responsible for ensuring you have rights to the content you upload and that it complies with these
              Terms and applicable law.
            </p>
          </motion.section>

          {/* 7. Intellectual Property */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">7) Our Intellectual Property</h2>
            <p className="text-[#9CA3AF]">
              The Service, including its design, features, software, text, images, trademarks, and other materials, is
              owned by or licensed to Aureus Fitness and is protected by intellectual property laws. We grant you a
              limited, revocable, non-transferable license to use the Service for personal, non-commercial purposes in
              accordance with these Terms.
            </p>
          </motion.section>

          {/* 8. AI & No Medical Advice */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">8) AI Features & No Medical Advice</h2>
            <p className="text-[#9CA3AF]">
              The Service may provide training suggestions or insights powered by algorithms or AI. These are for
              informational and educational purposes only and are not medical, nutritional, or professional advice. You
              are responsible for your training decisions. Consult qualified professionals before making significant
              changes to your training, diet, or lifestyle.
            </p>
          </motion.section>

          {/* 9. Disclaimers */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">9) Disclaimers</h2>
            <p className="text-[#9CA3AF]">
              The Service is provided on an “as is” and “as available” basis, without warranties of any kind, whether
              express or implied, including fitness for a particular purpose, accuracy, or non-infringement. We do not
              warrant that the Service will be uninterrupted, secure, or error-free.
            </p>
          </motion.section>

          {/* 10. Limitation of Liability */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">10) Limitation of Liability</h2>
            <p className="text-[#9CA3AF]">
              To the maximum extent permitted by law, Aureus Fitness and its affiliates will not be liable for any
              indirect, incidental, special, consequential, or exemplary damages, or for any loss of profits, data, or
              goodwill, arising from or relating to your use of the Service. Our total liability for any claim relating
              to the Service shall not exceed the greater of (a) the amount you paid to us for the Service in the 12
              months preceding the claim, or (b) AUD $50.
            </p>
          </motion.section>

          {/* 11. Indemnity */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">11) Indemnity</h2>
            <p className="text-[#9CA3AF]">
              You agree to indemnify and hold harmless Aureus Fitness and its affiliates from any claims, liabilities,
              damages, losses, and expenses (including legal fees) arising from your use of the Service, your content,
              or your violation of these Terms or applicable law.
            </p>
          </motion.section>

          {/* 12. Termination & Suspension */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">12) Termination & Suspension</h2>
            <p className="text-[#9CA3AF]">
              We may suspend or terminate access to the Service at any time if we reasonably believe you have breached
              these Terms, engaged in fraud or abuse, or if required by law. You may stop using the Service at any time,
              and you can delete your account (if applicable) following the instructions in the app or by contacting us.
            </p>
          </motion.section>

          {/* 13. Governing Law */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">13) Governing Law & Venue</h2>
            <p className="text-[#9CA3AF]">
              These Terms are governed by the laws of New South Wales, Australia, without regard to its conflict of laws
              principles. You agree to submit to the exclusive jurisdiction of the courts located in New South Wales,
              Australia, for any dispute arising out of or relating to these Terms or the Service.
            </p>
          </motion.section>

          {/* 14. Changes */}
          <motion.section variants={fadeUp} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">14) Changes to These Terms</h2>
            <p className="text-[#9CA3AF]">
              We may update these Terms from time to time. When we do, we will update the “Last updated” date below. If
              a change materially affects your rights, we may provide an in-app notice. Your continued use of the
              Service after changes become effective constitutes acceptance of the revised Terms.
            </p>
            <p className="text-xs text-[#6B7280]">Last updated: 11 November 2025</p>
          </motion.section>

          {/* 15. Contact */}
          <motion.div
            variants={fadeUp}
            className="pt-4 mt-2 border-t border-[#262626] flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          >
            <p className="text-[11px] md:text-xs text-[#9CA3AF]">
              Questions about these Terms? Email{" "}
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
