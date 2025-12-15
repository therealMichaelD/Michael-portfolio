// src/data/products/studybeer.js
const studyBeer = {
  id: 'studybeer',
  title: 'StudyBeer',
  subtitle:
    'A task-first productivity app that turns completed work into earned real-world rewards.',

  href: '/products/studybeer',
  tags: ['Product Management', 'Productivity', 'Behavior Design', 'React Native', 'Supabase'],

  // Images you place in /public/studybeer/
  heroImage: '/StudybeerHero.png',

  blocks: {
    /* =========================
       OVERVIEW
    ========================= */
    overviewText:
      'StudyBeer reframes productivity as a clear contract with yourself: finish a defined set of tasks, then earn a real, self-chosen reward. Instead of abstract points or endless to-do lists, the app enforces a simple loop — work first, reward later — designed to reduce procrastination and increase follow-through.',

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
        v: 'People often reward themselves before completing meaningful work, breaking focus and reinforcing procrastination.',
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
       PROBLEM STATEMENT (LONG)
    ========================= */
    problem:
      'Most productivity tools optimize for tracking activity rather than enforcing completion. Without a hard boundary between work and reward, users negotiate with themselves and often break their own rules.',

    /* =========================
       APPROACH
    ========================= */
    approach:
      'StudyBeer enforces a simple behavioral rule: no reward without completion. By making the reward explicit and visible from the start, the product removes ambiguity and reduces decision fatigue during work sessions.',

    /* =========================
       PERFORMANCE & RELIABILITY
    ========================= */
    performance: [
      'Server-validated reward logging to prevent duplicate or partial sessions.',
      'Session state refresh on tab focus to ensure accurate progress display.',
      'Explicit error handling for failed inserts and auth edge cases.',
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
       BENCHMARKS
    ========================= */
    benchmarks: [
      { k: 'Session completion', v: 'Binary (all tasks done or no reward)' },
      { k: 'Reward types', v: 'Expandable via configuration, not code changes' },
      { k: 'Data integrity', v: 'Server-timestamped sessions' },
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

    /* =========================
       RISKS & TRADEOFFS
    ========================= */
    risks: [
      'Over-gamification could reduce intrinsic motivation if expanded too far.',
      'Reward framing must stay responsible and user-controlled.',
      'Schema changes require careful migration planning.',
    ],

    /* =========================
       KPIs (PRODUCT THINKING)
    ========================= */
    kpis: [
      { label: 'Session completion rate', value: 'Primary success metric' },
      { label: 'Tasks per session', value: 'Signal of realistic goal-setting' },
      { label: 'Repeat usage', value: 'Indicates habit formation' },
    ],

    liveAppUrl: 'https://studybeer.vercel.app/auth',

    repo: 'therealMichaelD/studybeer',
  },
}

export default studyBeer
