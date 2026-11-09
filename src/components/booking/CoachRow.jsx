import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function CoachRow({ coach }) {
  return (
    <Link
      to={`/coaches/${coach.id}`}
      className="group flex items-center gap-3.5 rounded-xl border border-border bg-card p-3 transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#171717] font-display text-lg font-semibold text-white">
        {coach.initials}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p className="truncate text-[13px] font-medium">{coach.name}</p>
        </div>
        <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
          {coach.discipline}
        </p>
        <p className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
          <MapPin className="h-3 w-3" /> {coach.area}, Halifax · Profile preview
        </p>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}