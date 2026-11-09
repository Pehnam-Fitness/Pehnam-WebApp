import { Link } from "react-router-dom";
import { BadgeCheck, MapPin, Users, Sparkles } from "lucide-react";
import { TRUST_PILLARS } from "@/data/sampleContent";
import logo from "@/images/pehnam-logo.png";

const ICONS = { BadgeCheck, MapPin, Users, Sparkles };

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Coaches", to: "/coaches" },
  { label: "Disciplines", to: "/disciplines" },
  { label: "How it works", to: "/how-it-works" },
  { label: "About", to: "/about" },
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="border-t border-border bg-background">
        <div className="shell grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon];
            return (
              <div key={pillar.title} className="flex flex-col gap-3">
                <Icon className="h-5 w-5 text-foreground" strokeWidth={1.4} />
                <div>
                  <p className="eyebrow text-foreground">{pillar.title}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{pillar.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#0B0B0B] text-white">
        <div className="shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="Pehnam Fitness"
                className="h-14 w-[86px] object-contain brightness-0 invert"
              />
            </div>
            <p className="mt-6 font-heading text-2xl font-semibold tracking-tight text-white/90">
              Stronger everyday.
            </p>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-white/50">
              Private combat-sports coaching in Halifax. Personalized training, real people, and
              progress built around you.
            </p>
          </div>

          <div>
            <p className="eyebrow text-white/40">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[13px] text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/book" className="text-[13px] text-white/70 transition-colors hover:text-white">
                  Book a session
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40">Pehnam</p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-white/70">
              <li>Halifax, Nova Scotia</li>
              <li>Private 1:1 sessions</li>
              <li>All levels welcome</li>
              <li>Coaching built around you</li>
            </ul>
            <p className="mt-6 text-[11px] text-white/45">A stronger version of yourself starts here.</p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="shell flex flex-col gap-2 py-6 text-[11px] tracking-wide text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Pehnam. Halifax, NS.</p>
            <p>Preview experience — availability and booking are not connected yet.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}