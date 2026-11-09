// Static preview content; no live coach, availability, or booking service is connected.

export const DISCIPLINES = [
  {
    name: "Boxing",
    slug: "boxing",
    icon: "Flame",
    tagline: "Hands, feet, and the discipline between them.",
    description:
      "Private boxing sessions built on stance, footwork and clean punching mechanics. You learn how to move before you learn how to hit, so the fundamentals hold up when the pace rises.",
    focus: ["Stance and footwork", "Head movement and defence", "Bag and pad work", "Amateur preparation"],
  },
  {
    name: "Muay Thai",
    slug: "muay-thai",
    icon: "Target",
    tagline: "The art of eight limbs, taught properly.",
    description:
      "Teeps, round kicks, knees and clinch work — sequenced so each session builds on the last. Coaches scale the intensity to your experience, from first class to fight camp.",
    focus: ["Kicking mechanics", "Clinch and control", "Pad and bag rounds", "Timing and distance"],
  },
  {
    name: "BJJ",
    slug: "brazilian-jiu-jitsu",
    icon: "Shield",
    tagline: "Leverage over strength, every round.",
    description:
      "Ground control, escapes and submissions with the small details that make them work against a resisting partner. Ideal for people who want to train safely for years, not weeks.",
    focus: ["Positional control", "Escapes and retention", "Submission mechanics", "Gi and no-gi"],
  },
  {
    name: "Wrestling",
    slug: "wrestling",
    icon: "Activity",
    tagline: "Pace, pressure, and honest conditioning.",
    description:
      "Stance, penetration steps and chain wrestling taught at a tempo you can actually hold. The most direct route to confidence in the clinch and real mat conditioning.",
    focus: ["Takedowns", "Mat control", "Chain wrestling", "Conditioning"],
  },
  {
    name: "MMA",
    slug: "mma",
    icon: "Swords",
    tagline: "Where the disciplines meet.",
    description:
      "Range management, transitions between striking and grappling, and the conditioning that holds it together. For people with some base in one discipline who want the whole picture.",
    focus: ["Range management", "Transitions", "Cage and wall work", "Fight conditioning"],
  },
];

export const GOALS = [
  "Learn the fundamentals",
  "Build confidence",
  "Get fight-ready",
  "Improve fitness",
  "Self-defence",
  "Return after time away",
];

export const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export const TRUST_PILLARS = [
  { icon: "BadgeCheck", title: "Verified coaches", copy: "Real people. Real results." },
  { icon: "MapPin", title: "A stronger Halifax", copy: "Support local. Train local." },
  { icon: "Users", title: "All levels welcome", copy: "Beginner to advanced." },
  { icon: "Sparkles", title: "More than fitness", copy: "Confidence. Discipline. Community." },
];

export const SAMPLE_COACHES = [];
export const SAMPLE_SLOTS = [];

export const WEEK = Array.from({ length: 7 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  return {
    date: date.toLocaleDateString("en-CA", { month: "short", day: "numeric" }),
    label: date.toLocaleDateString("en-CA", { weekday: "short" }),
  };
});

export const HOURS = Array.from({ length: 12 }, (_, index) => index + 8);

export const formatHour = (hour) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:00 ${suffix}`;
};