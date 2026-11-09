export default function PandaMark({ className = "h-8 w-8", tone = "currentColor" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="6" fill={tone} opacity="0.9" />
      <circle cx="30" cy="10" r="6" fill={tone} opacity="0.9" />
      <circle cx="20" cy="22" r="14" fill={tone} opacity="0.08" />
      <circle cx="20" cy="22" r="14" stroke={tone} strokeWidth="1.5" />
      <ellipse cx="14.5" cy="20" rx="4" ry="5" fill={tone} />
      <ellipse cx="25.5" cy="20" rx="4" ry="5" fill={tone} />
      <circle cx="14.8" cy="19.4" r="1.4" fill="white" />
      <circle cx="25.2" cy="19.4" r="1.4" fill="white" />
      <path d="M17 28.5c1.8 1.4 4.2 1.4 6 0" stroke={tone} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 24.5v1.8" stroke={tone} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}