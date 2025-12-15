"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

export default function FAQSection() {
  const faqs = [
    {
      q: "Will I visually see progress over time?",
      a: `Yes - progress becomes impossible to ignore.
        Aureus automatically turns your workout history, strength data, physique photos, and weight logs into clear visual timelines so you can literally see yourself improving over weeks, months, and years.

        You'll get:
        <ul>
        <li>📈 Strength curves that trend upward</li>
        <li>🏋️‍♂️ Volume charts that show training load increases</li>
        <li>🔥 AI-detected milestones</li>
        <li>🖼️ Side-by-side physique comparisons</li>
        <li>🎞️ Auto-generated transformation slideshows</li>
        </ul>Progress stops being abstract—it's visual, measurable, and extremely motivating.      
      `,
    },
    {
      q: "Can I track photos and weight changes?",
      a: `Yes. Every day, you can log your weight and log an <strong>unlimited</strong> number of progress photos. <i>(available on the free version)</i>

          These get displayed in our app, where you can view your lifetime worth of logs, in a dedicated, simple to use and performant screen. 

          This comes with many features, including weight graphs, full smart weight analytics, giving you insights like "your weight has plateaued in the last 7 days". 

          You can also view your physique photos side by side, and the app comes with a built in auto-builded slideshow of all your photos, all within 1 click. 

          Talk about an all-in-one app!
      `,
    },
    {
      q: "How accurate are the strength and progression estimates?",
      a: `No 1RM calculator can accurately predict strength estimates, and any app saying otherwise is lying.
          
          But our app gets pretty close. Different formulas shine in different conditions and rep ranges, for example the Brzycki works best in the 1-5 rep range, wheras the O'Conner shines in the 6-12 rep range.

          Unfortunately, other fitness apps use only 1 formula, which is not a good solution for a strength app.
          
          Our app employs a hybrid of all formulas, determining the most suitable one to use in the given rep range to ensure the highest level of accuracy in predicting your 1RM's.

          So, our strengh curves, graphs, and progression estimates are pretty accurate. 
          `,
    },
    {
      q: "Will this app make workouts feel easier to stick with?",
      a: `Yes. We're strong believers that <strong>progress</strong> is the best motivation in life. Specifically seeing and visualling your progress is what gets people <strong>hooked</strong> to habits.

          Our app helps visualise weeks, months, years and decades (if you use it that long) of your progress in an easy, intuitive manner than anyone can understand.

          With daily reminders, AI feedback, workout streaks, and upward strength curves, our app makes seeing your progress very easy, and this motivates you to stick to with the gym for life.
        `,  
    },
    {
      q: " I'm inconsistent with training - will this still work?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: "Can I train however I want, or must I follow a fixed plan?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: "How often do I need to train for results?",
      a: "We recommend 3 times per week for busy individuals. 4-6 times for the most optimal results.",
    },
    {
      q: "Is my data safe and private?",
      a: "Yes. Explore the entire experience for 7 days before committing.",
    },
    {
      q: "Most companies just stick that they use “AI” to increase share holder value, when the AI functionality is really bad. Is your app like this? ",
      a: `No. We don't use AI as a marketing buzzwork, the AI functionality has meticulously been picked to ensure that it is genuinely helpful and provides insights which a normal algorithm wouldn't be able to supply. Our AI isn't a generic chatbot, or a ChatGPT wrapper. It is given an extremely comprehensive summary of your workouts, both daily and weekly and provides human sounding, concise and helpful summaries.
      
      Instead of giving vague advice like “train harder”, it can tell you:
      <ul>
        <li>which lifts improved the most this month</li>
        <li>whether your volume is trending upward or downward</li>
        <li>what muscle groups you've unintentionally neglected</li>
        <li>how close you are to previous peaks</li>
      </ul> One thing we strongly believe in is that if AI is your main marketing advantage, then you don't have a really good product, and so our app, without the use of AI beats <strong>99%</strong> of workouts apps out there. The AI is just the extra cherry on top.
      `,
    },
    {
      q: "How is this generic from a normal AI app?",
      a: "No. Whether you have a full gym or just dumbbells, the system tailors training precisely to the equipment you own.",
    },
    {
      q: "How is this different from a ChatGPT wrapper?",
      a: `A ChatGPT wrapper is simply an interface that sends your prompts to ChatGPT and returns a response. There's no intelligence, no personalization, no real understanding of you.
          
          One business thing we always believe is that if your product revolves around AI, then you don't really have a production, you don't really have a product. You have a prompt.
          Many apps today simply send a simple API call to an AI, and wrap it around a nice UI and cool brand. That's what we strive to be the complete opposite.

          Aureus is fundamentally different

          First, Aureus would function just fine without the AI. With the advanced analytics, muscle heatmaps, 1RM prediction graphs, bar graphs, volume, strength, muscle worked trends, Aureus delivers an extremely comprehensive and thorough performance.

          The AI is just the cherry on top that helps it transcend to the next level

          Secondly, the difficult part about using AI is curating the perfect prompt to feed it. The prompt that has all the right information, summarised in a concise but detailed manner. The engineers at Aureus's team have masterfully achieved that.

          Our AI is driven by actual structured data - your workouts, equipment used, weak points, volume, weight, muscle trends, lagging muscles and lifts, strength and weight goals, consistency, weekly schedules, injuries, and the list goes on.
          It understands you extremely well, and is able to provide extremely accurate insights about your training that a normal coach would not be able to provide due to its ability to oversee everything.
          `,
    },
    {
      q: "How performant is your app, is it as fast as native apps?",
      a: `Our app offers an extremely fast, blazing native performance, using the best, fastest, newest and most advanced tools to offer a lag-free, smooth performant app performance, that will remain fast and easy to use even with years of workout data, image and weight logs, you name it. 
          
          We benchmarked Aureus against some of the biggest names in the industry: MyFitnessPal, Strong, Hevy—and repeatedly matched or exceeded their performance across search speed, page load times, animation smoothness, and overall responsiveness.
          
          <strong>You don’t just get a fitness app that works today - you get one built to stay fast indefinitely.</strong> `,
    },
    {
      q: "Will I lose my data ever?",
      a: `No, your data will be stored onto the app securely offline. We store the data offline in case the cloud servers malfunction or something happens, you will always have control of your data. 
          As long as you don't factory reset your phone, your data will remain securely stored on your phone 
          At the moment, we don't store your data on the cloud as that's too costly, but its a strong possibility for the future. `,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#F6F8FA] overflow-hidden">
      {/* Soft ambient glow (more subtle & expensive-looking) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.15, scale: 1 }}
        animate={{ opacity: [0.15, 0.32, 0.15], scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 blur-[160px]"
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(62, 91, 169, 0.12) 0%,
              rgba(255,255,255,0) 65%
            )
          `,
        }}
      />

      {/* Outer container is full width so the heading can span the viewport */}
      <div className="relative z-10 w-full px-6">
        {/* Header – full-width */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            w-full text-center font-[900] tracking-tight text-[#0D1B3D]
            text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]
          "
        >
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E9C85B] to-[#B78A2E]">
            Questions
          </span>
        </motion.h2>

        {/* Inner content constrained to max width */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[#8A94A6] mt-4 mb-10 md:mb-16 text-[15.5px] leading-relaxed font-medium tracking-[0.015em]">
            Transparent answers—so every choice feels informed and intentional.
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => {
              const isOpen = openIndex === i;

              return (
                <motion.div
                  key={i}
                  animate={{
                    boxShadow: isOpen
                      ? "0px 10px 34px rgba(13,27,61,0.08)"
                      : "0px 4px 16px rgba(13,27,61,0.03)",
                    y: isOpen ? -1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`rounded-2xl border overflow-hidden transition-all backdrop-blur-sm ${
                    isOpen
                      ? "border-[#D4AF37]/70 bg-white"
                      : "border-[#E9EDF3] bg-white/80 hover:bg-white/90"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between items-center px-7 py-6 text-left"
                  >
                    <span className="font-semibold text-[#0D1B3D] tracking-[0.01em] text-[15.5px] sm:text-[16.5px] md:text-[17px]">
                      {q}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="text-[#D4AF37]"
                    >
                      <HiChevronDown size={22} />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <motion.div animate={{ height: isOpen ? "auto" : 0 }}>
                    <div className="px-7 py-6 border-t border-[#E9EDF3] overflow-hidden">
                      <div
                        className="
                          text-[14.5px] sm:text-[15px] text-[#8A94A6]
                          leading-[1.7] tracking-[0.01em] whitespace-pre-line
                          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2
                          [&_li]:leading-[1.4] [&_li]:my-1
                          [&_li::marker]:text-[#0D1B3D]
                          [&_strong]:font-semibold [&_strong]:text-[#0D1B3D]
                        "
                        dangerouslySetInnerHTML={{ __html: a }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
