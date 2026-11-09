// Static preview content; no live coach, availability, or booking service is connected.

import boxingImage from "@/images/cc34711f-e16e-424f-abe7-124165fea818.jpeg";
import muayThaiImage from "@/images/f6d8e3ad-f7b0-475c-b54d-74272d516204.jpeg";
import bjjImage from "@/images/52095082-efd4-4446-9c43-a1c3e2f4ec29.jpeg";
import wrestlingImage from "@/images/1337ebfc-f187-4762-81cb-97efa693b52a.jpeg";
import mmaImage from "@/images/43e745e2-f751-4460-a11d-7281841507f7.jpeg";
import coachImage from "@/images/coach-feature.jpeg";
import journeyImage from "@/images/journey-feature.jpeg";
import brandImage from "@/images/brand-feature.jpeg";

export const DISCIPLINES = [
  {
    name: "Boxing",
    slug: "boxing",
    icon: "Flame",
    tagline: "Hands, feet, and the discipline between them.",
    description:
      "Private boxing sessions built on stance, footwork and clean punching mechanics. You learn how to move before you learn how to hit, so the fundamentals hold up when the pace rises.",
    focus: ["Stance and footwork", "Head movement and defence", "Bag and pad work", "Amateur preparation"],
    image: boxingImage,
    imageAlt: "Boxing gloves and training equipment in a dark gym",
  },
  {
    name: "Muay Thai",
    slug: "muay-thai",
    icon: "Target",
    tagline: "The art of eight limbs, taught properly.",
    description:
      "Teeps, round kicks, knees and clinch work — sequenced so each session builds on the last. Coaches scale the intensity to your experience, from first class to fight camp.",
    focus: ["Kicking mechanics", "Clinch and control", "Pad and bag rounds", "Timing and distance"],
    image: muayThaiImage,
    imageAlt: "Private striking coaching in a boxing gym",
  },
  {
    name: "BJJ",
    slug: "brazilian-jiu-jitsu",
    icon: "Shield",
    tagline: "Leverage over strength, every round.",
    description:
      "Ground control, escapes and submissions with the small details that make them work against a resisting partner. Ideal for people who want to train safely for years, not weeks.",
    focus: ["Positional control", "Escapes and retention", "Submission mechanics", "Gi and no-gi"],
    image: bjjImage,
    imageAlt: "Athlete reflecting between training rounds",
  },
  {
    name: "Wrestling",
    slug: "wrestling",
    icon: "Activity",
    tagline: "Pace, pressure, and honest conditioning.",
    description:
      "Stance, penetration steps and chain wrestling taught at a tempo you can actually hold. The most direct route to confidence in the clinch and real mat conditioning.",
    focus: ["Takedowns", "Mat control", "Chain wrestling", "Conditioning"],
    image: wrestlingImage,
    imageAlt: "Combat-sports athlete preparing for a training session",
  },
  {
    name: "MMA",
    slug: "mma",
    icon: "Swords",
    tagline: "Where the disciplines meet.",
    description:
      "Range management, transitions between striking and grappling, and the conditioning that holds it together. For people with some base in one discipline who want the whole picture.",
    focus: ["Range management", "Transitions", "Cage and wall work", "Fight conditioning"],
    image: mmaImage,
    imageAlt: "MMA athlete seated in a training gym",
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
  { icon: "BadgeCheck", title: "Thoughtful coaching", copy: "One-to-one sessions, focused on you." },
  { icon: "MapPin", title: "A stronger Halifax", copy: "Support local. Train local." },
  { icon: "Users", title: "All levels welcome", copy: "Beginner to advanced." },
  { icon: "Sparkles", title: "More than fitness", copy: "Confidence. Discipline. Community." },
];

export const SITE_IMAGES = {
  coaches: coachImage,
  journey: journeyImage,
  brand: brandImage,
};

export const SAMPLE_COACHES = [
  {
    id: "zarif-ayman",
    name: "Zarif Ayman",
    initials: "ZA",
    disciplines: ["Boxing", "MMA"],
    discipline: "Boxing & MMA",
    area: "Downtown",
    years: 8,
    price: 90,
    openSlots: 4,
    bio:
      "Zarif's coaching style is built around strong fundamentals, thoughtful progressions, and training that meets you where you are. Sessions balance technical detail with purposeful conditioning—whether you're building confidence or sharpening skills.",
    focus: ["Boxing fundamentals", "Striking technique", "Movement & defence", "Personalized conditioning"],
    profileNote:
      "Sample profile copy for presentation only. Confirm all experience, qualifications, and bio details with Zarif before publication.",
  },
  {
    id: "alyssa-chen",
    name: "Alyssa Chen",
    initials: "AC",
    disciplines: ["Muay Thai"],
    discipline: "Muay Thai",
    area: "Downtown",
    years: 7,
    price: 90,
    openSlots: 4,
    bio:
      "Alyssa teaches Muay Thai as a full system: stance, teep, clinch, and the discipline that ties them together. Her sessions focus on relaxed technique, balance, and building confidence one round at a time.",
    focus: ["Clinch work", "Kicking mechanics", "Pad rounds", "Balance & timing"],
    profileNote:
      "Sample coach profile for presentation only. Confirm all experience, qualifications, and bio details before publication.",
  },
  {
    id: "devon-park",
    name: "Devon Park",
    initials: "DP",
    disciplines: ["BJJ"],
    discipline: "BJJ",
    area: "South End",
    years: 11,
    price: 95,
    openSlots: 5,
    bio:
      "With a thoughtful, detail-first approach to Brazilian Jiu-Jitsu, Devon's private sessions focus on positional control, escapes, and the small adjustments that make technique feel natural.",
    focus: ["Guard retention", "Escapes", "Positional control", "Submission defence"],
    profileNote:
      "Sample coach profile for presentation only. Confirm all experience, qualifications, and bio details before publication.",
  },
  {
    id: "marcus-lee",
    name: "Marcus Lee",
    initials: "ML",
    disciplines: ["Boxing"],
    discipline: "Boxing",
    area: "North End",
    years: 9,
    price: 85,
    openSlots: 6,
    bio:
      "Marcus builds boxing sessions around sharp fundamentals. Develop footwork, head movement, and clean combinations through focused rounds that meet your current level.",
    focus: ["Fundamentals", "Footwork & defence", "Combinations", "Pad work"],
    profileNote:
      "Sample coach profile for presentation only. Confirm all experience, qualifications, and bio details before publication.",
  },
  {
    id: "sara-malik",
    name: "Sara Malik",
    initials: "SM",
    disciplines: ["Wrestling"],
    discipline: "Wrestling",
    area: "Clayton Park",
    years: 6,
    price: 80,
    openSlots: 4,
    bio:
      "Sara coaches folkstyle and freestyle wrestling with an emphasis on a strong stance, confident penetration steps, and chaining attacks together with good timing.",
    focus: ["Takedowns", "Mat control", "Stance & motion", "Chain wrestling"],
    profileNote:
      "Sample coach profile for presentation only. Confirm all experience, qualifications, and bio details before publication.",
  },
  {
    id: "tariq-hassan",
    name: "Tariq Hassan",
    initials: "TH",
    disciplines: ["MMA"],
    discipline: "MMA",
    area: "Dartmouth",
    years: 8,
    price: 105,
    openSlots: 5,
    bio:
      "Tariq connects the disciplines: where striking creates an opening, how grappling changes the picture, and how to move between ranges with intention.",
    focus: ["Range management", "Transitions", "Striking to takedowns", "Fight conditioning"],
    profileNote:
      "Sample coach profile for presentation only. Confirm all experience, qualifications, and bio details before publication.",
  },
];

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