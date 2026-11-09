import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CoachRow from "@/components/booking/CoachRow";

export default function CoachPanel({ coaches }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-lg font-semibold tracking-tight">
            Meet your Halifax coach
          </h2>
          <p className="mt-1 text-[12px] text-muted-foreground">
            Personal coaching, built around you.
          </p>
        </div>
        <Link
          to="/coaches"
          className="flex shrink-0 items-center gap-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
        >
          View all
          <ArrowRight className="h-3 w-3" strokeWidth={1.8} />
        </Link>
      </div>

      <div className="mt-4 space-y-2">
        {coaches.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border px-3 py-6 text-center text-[12px] text-muted-foreground">
            No coaches published for this discipline yet.
          </p>
        ) : (
          coaches.slice(0, 3).map((coach) => <CoachRow key={coach.id} coach={coach} />)
        )}
      </div>

      <p className="mt-4 text-[10px] leading-relaxed text-muted-foreground/80">
        Sample profiles and details for presentation only; confirm before publication.
      </p>
    </section>
  );
}