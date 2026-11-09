import { useState } from "react";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import CoachCard from "@/components/CoachCard";
import { SAMPLE_COACHES } from "@/data/sampleContent";

const FILTERS = ["All", "Boxing", "Muay Thai", "BJJ", "Wrestling", "MMA"];

export default function CoachesPage() {
  const [discipline, setDiscipline] = useState("All");
  const coaches =
    discipline === "All"
      ? SAMPLE_COACHES
      : SAMPLE_COACHES.filter((coach) => coach.disciplines.includes(discipline));

  return (
    <MarketingLayout>
      <section className="shell pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Pehnam · Halifax</p>
          <h1 className="mt-4 font-display text-5xl font-medium tracking-tight md:text-6xl">
            Meet your coaches.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
            Find the right one-on-one coach for your goals, your experience, and the way you want to train.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-2" aria-label="Filter coaches by discipline">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setDiscipline(filter)}
              aria-pressed={discipline === filter}
              className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                discipline === filter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-b border-border pb-4">
          <p className="text-xs text-muted-foreground">
            {coaches.length} {coaches.length === 1 ? "coach" : "coaches"}
            {discipline !== "All" ? ` · ${discipline}` : ""}
          </p>
          <p className="text-[9px] font-medium tracking-[0.16em] text-muted-foreground">
            SAMPLE DIRECTORY
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>

        <p className="mt-8 rounded-xl border border-amber-900/15 bg-amber-900/[0.04] px-4 py-3 text-xs leading-6 text-muted-foreground">
          Sample profiles for presentation only. Coach bios, experience, rates, locations, and availability are illustrative and must be confirmed before publication.
        </p>
      </section>
    </MarketingLayout>
  );
}
