type Plan = "Aureus" | "Leading Competitors" | "Typical Fitness Apps";
type PlanKey = "aureus" | "otherPremium" | "topCompetitor";
type Feature = (typeof FEATURES)[number];

export const faqs = 
  [
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
          
          But our app gets pretty close. Different formulas shine in different conditions and rep ranges, for example the Brzycki works best in the 1-5 rep range, whereas the O'Conner shines in the 6-12 rep range.

          Unfortunately, other fitness apps use only 1 formula, which is not a good solution for a strength app.
          
          Our app employs a hybrid of all formulas, determining the most suitable one to use in the given rep range to ensure the highest level of accuracy in predicting your 1RM's.

          So, our strength curves, graphs, and progression estimates are pretty accurate. 
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
      a: "Yes. Your data is stored fully offline, so the owners of the app, even if they wanted, to won't be able to access it. The app is fully safe and private",
    },
    {
      q: "Most companies just stick that they use “AI” to increase shareholder value, when the AI functionality is really bad. Is your app like this? ",
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
      a: "This app cleverly scans a ton of your workouts, and then summarises the most important, relevant parts of it, computing the most important stats. It then sends those stats over to an AI, which analyses these highly-summarised precomputed stats. ",
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
  "Blazing-fast performance (instant feel)",
  "Daily AI coaching feedback",
  "Weekly AI progress summary",
  "Transformation slideshows (auto-built)",
  "PR detection + milestone highlights",
  "Strength trend graphs (per lift)",
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
  "Exercise filters (muscle/equipment)",
  "Bar & line charts",
  "Lifetime stats (sets, reps, volume)",
  "Ad-free, zero distractions",
  "On-device data storage (local by default)",
  "Offline-first — works without signal",
] as const;


export const MATRIX: Record<Feature, Record<PlanKey, boolean>> = {
  "Ultra-minimal, premium interface": {
    aureus: true,
    otherPremium: true,
    topCompetitor: true,
  },
  "Blazing-fast performance (instant feel)": {
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
  "Strength trend graphs (per lift)": {
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
  "Exercise filters (muscle/equipment)": {
    aureus: true,
    otherPremium: false,
    topCompetitor: false,
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
  "On-device data storage (local by default)": {
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
