import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoachCard({ coach }) {
  return (
    <Link
      to={`/coaches/${coach.id}`}
      className="group flex min-h-[310px] flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg hover:shadow-black/[0.04]"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary font-display text-base text-foreground/75">
          {coach.initials}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <div className="mt-5">
        <h2 className="text-[22px] font-semibold tracking-tight">{coach.name}</h2>
        <p className="mt-1 text-xs text-muted-foreground">{coach.discipline}</p>
        <p className="mt-4 line-clamp-3 min-h-[60px] text-xs leading-5 text-muted-foreground">
          {coach.bio}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {coach.focus.slice(0, 2).map((tag) => (
          <span key={tag} className="rounded-full bg-secondary/75 px-2.5 py-1 text-[10px] text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto border-t border-border pt-4">
        <div className="flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            {coach.area} · {coach.years} yrs
          </span>
          <span className="shrink-0 text-foreground">
            ${coach.price}<span className="text-muted-foreground"> / hr</span>
          </span>
        </div>
        <p className="mt-3 text-[9px] font-medium tracking-[0.16em] text-muted-foreground">
          {coach.openSlots} SAMPLE OPEN SLOTS THIS WEEK
        </p>
      </div>
    </Link>
  );
}
