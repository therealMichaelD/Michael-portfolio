// src/data/products/studybeer.js
const studyBeer = {
  id: 'studybeer',
  title: 'StudyBeer',
  subtitle:
    'A gamified productivity + beverage tracker: finish the work, then enjoy the reward—responsibly.',
  href: '/products/studybeer',
  tags: ['Productivity', 'Habits', 'Gamification', 'iOS/Android', 'Web'],

  // Images you place in /public/studybeer/
  heroImage: '/studybeer/hero.jpg',
  gallery: [
    { src: '/studybeer/dashboard.jpg',       caption: 'Home dashboard' },
    { src: '/studybeer/session-timer.jpg',   caption: 'Session timer' },
    { src: '/studybeer/rewards.jpg',         caption: 'Rewards & limits' },
    { src: '/studybeer/social.jpg',          caption: 'Friend accountability' },
  ],

  blocks: {
    // Shown in “Overview”
    overviewText:
      'StudyBeer turns your to-do list into a game: complete focused work sessions to unlock small, responsible rewards. It blends a clean study timer, streaks, and accountability with a simple reward ledger—so the “fun part” comes after the work is done.',

    // Right-sidebar card for products
    atAGlance: [
      { k: 'Role',        v: 'PM + Full-stack' },
      { k: 'Status',      v: 'MVP / Private alpha' },
      { k: 'Platforms',   v: 'Web (React) • iOS/Android (React Native/Expo)' },
      { k: 'Stack',       v: 'React/Expo, Supabase, Postgres, Vercel' },
    ],

    problemAudience: [
      { k: 'Problem',  v: 'Hard to sustain deep-work routines; rewards come first, focus comes later.' },
      { k: 'Audience', v: 'Students & young professionals who respond to streaks, XP, and clear limits.' },
    ],

    features: [
      'Focus sessions (Pomodoro + long-focus modes) with streaks & XP',
      'Task lists with “completion thresholds” to unlock rewards',
      'Reward rules & caps (per day/week) with hydration nudges',
      'Social accountability: share streaks, invite friends, lock-in study slots',
      'Analytics: time on task, weekly trendlines, consistency score',
    ],

    howItWorks: [
      { k: 'Timer → XP',     v: 'Each finished focus session grants XP; missed breaks reset streak buffers.' },
      { k: 'Lists → Rewards',v: 'Hit a list threshold (e.g., 5 tasks) to unlock 1 reward credit.' },
      { k: 'Limits',         v: 'Daily/weekly caps and cooldowns prevent over-consumption; hydration prompts.' },
      { k: 'Sync',           v: 'Supabase auth + Postgres; real-time session sync across devices.' },
    ],

    skillsTools: [
      { k: 'Skills',    v: 'Product strategy, habit loops, gamification, UX writing, experimentation' },
      { k: 'Tools',     v: 'Figma, React/Expo, Supabase, Postgres, Vercel, Mixpanel/GA' },
      { k: 'Methods',   v: 'Cohort retention, A/B tests on reward rules, funnel + session analytics' },
    ],

    architectureNotes: [
      'Supabase auth with RLS-protected tables for sessions, rewards, and streak history.',
      'Shared data model for tasks and reward credits so limits/cooldowns can be enforced server-side.',
      'Expo app + React web reuse a shared component layer for timer, rewards, and analytics views.',
      'Real-time sync channels keep active sessions and streak states consistent across devices.',
    ],

    keyWork: [
      'Mapped the habit loop (cue → focus session → reward) and tuned XP thresholds to feel motivating but safe.',
      'Designed reward rules and cooldowns to keep consumption responsible; hydration nudges built into breaks.',
      'Shipped accountability features (friend invites, streak sharing) to increase follow-through.',
      'Instrumented funnels for session starts/completions and retention cohorts to measure stickiness.',
      'Prototyped monetization via premium analytics + custom reward rules without cluttering the core loop.',
    ],

    problem:
      'Students and young professionals often reward themselves before meaningful work is finished, making it hard to sustain deep-work habits. Existing timers rarely pair focus with responsible, capped rewards or social accountability.',

    approach:
      'Tie rewards to completed work sessions, not intentions. Add caps and cooldowns to keep things responsible, layer in social accountability, and instrument the product to measure retention and session quality. Keep the core loop simple so the product stays calm, not noisy.',

    performance: [
      'Reward ledger enforces caps and cooldowns server-side to prevent “double spending.”',
      'Timer state syncs in near-real-time across devices to avoid dangling sessions or duplicate rewards.',
      'Session data validated with server timestamps to protect streak integrity.',
    ],

    results: [
      'Early testers reported fewer “reward-first” lapses once thresholds and cooldowns were enabled.',
      'Accountability features (friend invites/streak sharing) increased session completion rates.',
      'Clear hydration nudges and caps reduced over-consumption risk compared to ungated rewards.',
    ],

    benchmarks: [
      { k: 'Session reliability (target)', v: '99% session start/stop success' },
      { k: 'Sync latency (target)',        v: '<500ms perceived updates' },
      { k: 'Reward caps',                  v: 'Configurable daily/weekly limits' },
      { k: 'Platforms',                    v: 'Web + React Native (shared logic)' },
    ],

    timeline: [
      'Problem framing + habit loop design.',
      'Prototype timer, XP, and reward ledger on web.',
      'Add caps/cooldowns + hydration nudges; wire analytics for funnels/cohorts.',
      'Ship social accountability (invites, streak sharing).',
      'Refine mobile parity and optimize onboarding for focus-first habits.',
    ],

    risks: [
      'Reward abuse edge cases — guard against backdated sessions or rapid start/stop exploits.',
      'Motivation decay — keep reminders light and make streak recovery forgiving but meaningful.',
      'Privacy/trust — transparent data use for analytics and social features.',
    ],

    kpis: [
      { label: 'Day-7 retention (target)', value: '35%+' },
      { label: 'Weekly focus time',        value: '6–10 hrs median' },
      { label: 'Tasks to reward ratio',    value: 'Configurable (e.g., 5:1)' },
    ],

    collaborators: [
      { name: 'Michael Dang', role: 'PM + full-stack' },
    ],

    // Optional docs; add the file to /public/docs if you want the PDF tab to appear for products
    // pdfUrl: '/docs/StudyBeer-OnePager.pdf',

    links: [
      // { href: 'https://github.com/yourname/studybeer', label: 'Repository' },
      // { href: 'https://studybeer.app', label: 'Live site' },
    ],
  },
}

export default studyBeer
