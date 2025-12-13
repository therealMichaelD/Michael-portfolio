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

    kpis: [
      { label: 'Day-7 retention (target)', value: '35%+' },
      { label: 'Weekly focus time',        value: '6–10 hrs median' },
      { label: 'Tasks to reward ratio',    value: 'Configurable (e.g., 5:1)' },
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