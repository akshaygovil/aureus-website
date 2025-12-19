type Plan = "Aureus" | "Leading Competitors" | "Typical Fitness Apps";
type PlanKey = "aureus" | "otherPremium" | "topCompetitor";
type Feature = (typeof FEATURES)[number];

export const faqs = 
  [
    {
      q: "Will I visually see progress over time?",
      a: `
        Yes. Progress becomes clear when it’s viewed over time — not session by session.

        Aureus automatically turns your training history into long-term visual timelines, so improvements are easy to recognise across weeks, months, and years.

        You’ll see:
        <ul>
          <li>Strength curves that show real upward trends</li>
          <li>Volume charts that reflect increasing workload</li>
          <li>Detected milestones and personal bests</li>
          <li>Side-by-side physique comparisons</li>
          <li>Auto-generated transformation timelines</li>
        </ul>

        Progress stops feeling abstract. You can see it clearly.
      `,
    },
    {
      q: "Can I track photos and weight changes?",
      a: `
        Yes. You can log your weight daily and add an unlimited number of progress photos. <em>(Available on the free version.)</em>

        Weight and physique data are displayed in dedicated views designed to stay fast and responsive, even with years of history.

        This includes:
        <ul>
          <li>Clean weight trend graphs</li>
          <li>Smart weight-change analysis (plateaus, rate of change)</li>
          <li>Side-by-side physique comparisons</li>
          <li>Automatically generated photo timelines</li>
        </ul>

        Everything stays organised and easy to review — without clutter.
      `,
    },
    {
      q: "How accurate are the strength and progression estimates?",
      a: `
        No 1RM estimate is perfectly accurate — and Aureus doesn’t pretend otherwise.

        Strength estimation depends heavily on rep range and context. Instead of relying on a single formula, Aureus adapts its estimates based on how you actually train.

        This approach produces more reliable strength curves and progression trends over time — especially when viewed across multiple weeks or training blocks.

        The result isn’t a single number to chase, but a clearer picture of how your strength is evolving.
      `,
    },
    {
      q: "Will this app make workouts feel easier to stick with?",
      a: `Yes. We're strong believers that <strong>progress</strong> is the best motivation in life. Specifically seeing and visualling your progress is what gets people <strong>hooked</strong> to habits.

          Our app helps visualise weeks, months, years and decades (if you use it that long) of your progress in an easy, intuitive manner than anyone can understand.

          With daily reminders, AI feedback, workout streaks, and upward strength curves, our app makes seeing your progress very easy, and this motivates you to stick with the gym for life.
        `,  
    },
    {
      q: "I'm inconsistent with training - will this still work?",
      a: `Of course, this app works much better than others for those who are inconsistant. It has constant actionable steps, including an built in AI coach that will provide actionable feedback to get you back into it. 
      Not just generic feedback, but stuff like <i>'perform your push workout tomorrow, with an extra focus on upper chest'</i>, or <i>'today's a rest day, no need to train today'</i>`,
    },
    {
      q: "Can I train however I want, or must I follow a fixed plan?",
      a: "You can train however you want, and you can build your own workouts too",
    },
    {
      q: "How often do I need to train for results?",
      a: "We recommend 3 times per week for busy individuals. 4-6 times for the most optimal results.",
    },
    {
      q: "Is my data safe and private?",
      a: "Yes. Your data is stored fully offline, so the owners of the app, even if they wanted to, won't be able to access it. The app is fully safe and private",
    },
    {
      q: "Is this just another AI-powered fitness app?",
      a: `
        No. Aureus doesn’t use AI as a headline feature — and it doesn’t rely on it.

        The core of the app is structured training data: volume, load, progression trends, muscle balance, recovery patterns, and long-term history. That foundation works independently.

        The AI simply helps interpret that data when you want a clear summary or second opinion — replacing vague advice with specific, training-aware feedback.

        It’s there to add clarity, not noise.
      `,
    },
    {
      q: "How is this generic from a normal AI app?",
      a: "This app cleverly scans a ton of your workouts, and then summarises the most important, relevant parts of it, computing the most important stats. It then sends those stats over to an AI, which analyses these highly-summarised precomputed stats. ",
    },
    {
      q: "How is this different from a ChatGPT wrapper?",
      a: `
        A ChatGPT wrapper responds to prompts. It doesn’t understand your training history.

        Aureus is built around persistent, structured data — your workouts, loads, volume, muscle emphasis, progression trends, goals, and consistency over time.

        The app delivers deep analysis on its own. The AI layer simply helps synthesise that information into concise, relevant feedback when you choose to use it.

        Even without AI, Aureus remains a complete performance tracking and analysis tool.
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
          At the moment, we don't store your data on the cloud as that's too costly, but it's a strong possibility for the future. `,
    },
];

export const PLANS: { label: Plan; key: PlanKey }[] = [
  { label: "Aureus", key: "aureus" },
  { label: "Leading Competitors", key: "otherPremium" },
  { label: "Typical Fitness Apps", key: "topCompetitor" },
];

export const FEATURES = [
  "Ultra-minimal, premium interface",
  "Blazing-fast performance",
  "Daily AI coaching feedback",
  "Weekly AI progress summary",
  "Transformation slideshows (auto-built)",
  "PR detection + milestone highlights",
  "Strength trend graphs",
  "1RM prediction curves (auto-estimates)",
  "Muscle heatmap by weekly volume",
  "Workout history + volume analysis",
  "Weight trend analytics + pace insights",
  "Weekly schedule planner (assign days)",
  "Custom workouts + reusable templates",
  "AI workout builder (goal-based)",
  "Rest timers with audio cues",
  "Plate calculator (load the bar fast)",
  "Built in auto-computed DOTS calculator",
  "Physique photos",
  "250+ curated exercise library",
  "Bar & line charts",
  "Lifetime stats (sets, reps, volume)",
  "Ad-free, zero distractions",
  "On-device data storage",
  "Offline-first — works without signal",
] as const;


export const MATRIX: Record<Feature, Record<PlanKey, boolean>> = {
  "Ultra-minimal, premium interface": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Blazing-fast performance": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Daily AI coaching feedback": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Weekly AI progress summary": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Transformation slideshows (auto-built)": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "PR detection + milestone highlights": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "Strength trend graphs": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "1RM prediction curves (auto-estimates)": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "Muscle heatmap by weekly volume": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "Workout history + volume analysis": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Weight trend analytics + pace insights": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Weekly schedule planner (assign days)": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "Custom workouts + reusable templates": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "AI workout builder (goal-based)": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "Rest timers with audio cues": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Plate calculator (load the bar fast)": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Built in auto-computed DOTS calculator": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Physique photos": {
    aureus: true,
    otherPremium: false,
    topCompetitor: true,
  },
  "250+ curated exercise library": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Bar & line charts": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Lifetime stats (sets, reps, volume)": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Ad-free, zero distractions": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
  "On-device data storage": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
  },
  "Offline-first — works without signal": {
    aureus: true,
    otherPremium: true,
    topCompetitor: false,
  },
};

export const EMAIL_ADRESS = 'aureus.app01@gmail.com'
