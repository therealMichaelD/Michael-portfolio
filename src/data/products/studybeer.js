// src/data/products/studybeer.js
const studyBeer = {
  id: 'studybeer',
  title: 'StudyBeer',
  subtitle:
    'A task-first productivity app that turns completed work into earned real-world rewards.',

  href: '/products/studybeer',
  tags: ['Product Management', 'Productivity', 'Behavior Design', 'React Native', 'Supabase'],

  // Images you place in /public/studybeer/
  heroImage: '/StudyBeerLogo.png',

  blocks: {
    /* =========================
       OVERVIEW
    ========================= */
    overviewText:
      'StudyBeer reframes productivity as a clear contract with yourself: finish a defined set of tasks, then earn a real, self-chosen reward. Instead of abstract points or endless to-do lists, the app enforces a simple loop designed to reduce procrastination and increase follow-through.',

    /* =========================
       AT A GLANCE
    ========================= */
    atAGlance: [
      { k: 'Role', v: 'Product Manager + Full-stack Engineer' },
      { k: 'Status', v: 'Shipped MVP / Active iteration' },
      { k: 'Platforms', v: 'iOS • Android (Expo / React Native)' },
      { k: 'Stack', v: 'React Native, Expo Router, Supabase, Postgres' },
    ],

    /* =========================
       PROBLEM & AUDIENCE
    ========================= */
    problemAudience: [
      {
        k: 'Problem',
        v: 'Most productivity tools optimize for tracking activity rather than enforcing completion. Without a hard boundary between work and reward, users negotiate with themselves and often break their own rules.',
      },
      {
        k: 'Audience',
        v: 'Students and young professionals who want accountability without rigid productivity systems.',
      },
    ],

    /* =========================
       CORE FEATURES
    ========================= */
    features: [
      'Session-based task lists with a single, clear completion goal',
      'User-selected rewards (beer, pizza, coffee, dessert, night out)',
      'Animated reward progress that fills as tasks are completed',
      'Automatic session reset once a reward is earned',
      'Profile dashboard with lifetime stats and reward breakdowns',
      'Session history with timestamps and earned rewards',
    ],

    /* =========================
       HOW IT WORKS
    ========================= */
    howItWorks: [
      {
        k: 'Choose a reward',
        v: 'Before starting, users select one reward they want to earn for the session.',
      },
      {
        k: 'Define the work',
        v: 'Users list the tasks that must be completed before the reward is unlocked.',
      },
      {
        k: 'Progress visually',
        v: 'Each completed task advances a visual progress animation toward the reward.',
      },
      {
        k: 'Earn & reset',
        v: 'Once all tasks are done, the reward is logged and the session resets.',
      },
    ],

    /* =========================
       SKILLS & TOOLS
    ========================= */
    skillsTools: [
      {
        k: 'Product skills',
        v: 'Problem framing, behavioral loops, scope control, UX decision-making',
      },
      {
        k: 'Engineering',
        v: 'React Native, Expo, Supabase auth, Postgres schema design',
      },
      {
        k: 'Methods',
        v: 'Iterative MVP development, user-driven feature pruning, system constraints',
      },
    ],

    /* =========================
       ARCHITECTURE NOTES
    ========================= */
    architectureNotes: [
      'Supabase authentication with row-level security for user data isolation.',
      'Postgres tables for tasks, reward settings, drink counters, and session history.',
      'Session-scoped data model to support future drill-downs (e.g., task-level history).',
      'Expo Router used for tab-based navigation and state refresh on focus.',
    ],

    /* =========================
       KEY PRODUCT WORK
    ========================= */
    keyWork: [
      'Identified that abstract rewards (points, streaks) failed to change behavior; pivoted to real, self-chosen rewards.',
      'Designed a task-first flow to avoid productivity theater and endless planning.',
      'Intentionally limited each session to one reward to create a clear win condition.',
      'Built session logging and reward stats to reinforce long-term accountability.',
      'Handled backend schema migrations and recovery after breaking changes.',
    ],
  

    /* =========================
       RESULTS & LEARNINGS
    ========================= */
    results: [
      'Users reported finishing tasks they previously postponed before going out.',
      'Single-reward sessions reduced scope creep and improved completion rates.',
      'Visual progress feedback proved more motivating than numeric counters alone.',
    ],

    /* =========================
       TIMELINE
    ========================= */
    timeline: [
      'Problem discovery and early concept validation.',
      'Initial timer-based MVP → pivot to task-based sessions.',
      'Reward system redesign with animated progress.',
      'Backend stabilization and session history logging.',
      'Profile analytics and long-term stats.',
    ],

    liveAppUrl: 'https://studybeer.vercel.app/auth',

    repo: 'therealMichaelD/studybeer',
  },
}

export default studyBeer
