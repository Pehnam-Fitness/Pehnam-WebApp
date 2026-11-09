import { Link } from "react-router-dom";
import { Star, BadgeCheck } from "lucide-react";

export default function CoachRow({ coach }) {
  return (
    <Link
      to={`/coaches/${coach.id}`}
      className="group flex items-center gap-3.5 rounded-xl border border-border bg-card p-3 transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary font-heading text-[13px] font-semibold tracking-wide text-foreground/70">
        {coach.initials}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p className="truncate text-[13px] font-medium">{coach.name}</p>
          {coach.verified && <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-foreground/60" strokeWidth={1.8} />}
        </div>
        <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
          {coach.discipline} · Halifax · {coach.years} yrs
        </p>
        <div className="mt-1 flex items-center gap-1">
          <Star className="h-3 w-3 fill-foreground text-foreground" strokeWidth={0} />
          <span className="text-[11px] font-medium tabular-nums">{coach.rating}</span>
          <span className="text-[11px] text-muted-foreground">· {coach.area}</span>
        </div>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-[12px] font-medium tabular-nums">${coach.price}</p>
        <p className="text-[10px] text-muted-foreground">per hour</p>
      </div>
    </Link>
  );
}