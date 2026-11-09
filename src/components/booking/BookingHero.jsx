import { Flame, Target, Shield, Activity, Swords } from "lucide-react";
import { DISCIPLINES } from "@/data/sampleContent";
import heroImage from "../../Screenshot 2026-11-09 153059.png";

const ICONS = { Flame, Target, Shield, Activity, Swords };

export default function BookingHero({ activeDiscipline, onSelectDiscipline }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] text-white">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/55 to-[#0A0A0A]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/10 to-[#0A0A0A]/35" />

      <div className="shell relative flex min-h-[540px] flex-col justify-between py-14 md:py-20">
        <div className="flex items-start justify-between gap-10">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-white/60">
              <span className="h-px w-6 bg-white/40" />
              TRAIN WITH PURPOSE
            </p>
            <h1 className="mt-6 font-heading text-[42px] font-semibold leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-[76px]">
              Book your corner.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
              Verified Halifax combat-sports coaches. Private one-to-one sessions, booked around
              your week.
            </p>
          </div>

          <div className="hidden max-w-[220px] text-right md:block">
            <p className="font-heading text-[15px] font-medium leading-snug text-white/85">
              Stronger People,
              <br />
              Brighter Halifax.
            </p>
            <p className="mt-3 text-[9px] font-semibold leading-relaxed tracking-[0.24em] text-white/40">
              MORE THAN FITNESS
              <br />
              A STRONGER YOU
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 md:mt-16 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {DISCIPLINES.map((discipline) => {
              const Icon = ICONS[discipline.icon];
              const active = activeDiscipline === discipline.name;
              return (
                <button
                  key={discipline.slug}
                  type="button"
                  onClick={() => onSelectDiscipline(active ? null : discipline.name)}
                  className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] transition-all duration-300 ${
                    active
                      ? "border-white bg-white text-[#0A0A0A]"
                      : "border-white/20 bg-white/5 text-white/80 hover:border-white/45 hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                      active ? "border-[#0A0A0A]/25" : "border-white/25"
                    }`}
                  >
                    <Icon className="h-3 w-3" strokeWidth={1.6} />
                  </span>
                  {discipline.name}
                </button>
              );
            })}
          </div>

          <p className="text-[9px] font-semibold tracking-[0.3em] text-white/40">
            REAL PEOPLE. REAL COACHES. A STRONGER YOU.
          </p>
        </div>
      </div>
    </section>
  );
}