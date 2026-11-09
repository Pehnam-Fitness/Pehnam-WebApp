import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CalendarDays, List, MapPin } from "lucide-react";
import AvailabilityGrid from "@/components/booking/AvailabilityGrid";
import AvailabilityList from "@/components/booking/AvailabilityList";

export default function AvailabilityPanel({ slots, discipline, selectedSlotId, onSelectSlot }) {
  const [view, setView] = useState("calendar");
  const navigate = useNavigate();
  const selected = useMemo(() => slots.find((s) => s.id === selectedSlotId), [slots, selectedSlotId]);

  const continueToFlow = () => {
    if (!selectedSlotId) return;
    navigate(`/book?slot=${selectedSlotId}${discipline ? `&discipline=${discipline}` : ""}`);
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="font-heading text-lg font-semibold tracking-tight">Choose a time and location</h2>
          <p className="mt-1 flex items-center gap-1.5 text-[12px] text-muted-foreground">
            <MapPin className="h-3 w-3" strokeWidth={1.6} />
            Halifax, NS · times shown in Atlantic Time
          </p>
        </div>

        <div className="inline-flex shrink-0 rounded-full border border-border bg-secondary/60 p-1">
          <button
            type="button"
            onClick={() => setView("calendar")}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] transition-colors ${
              view === "calendar" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <CalendarDays className="h-3 w-3" strokeWidth={1.8} />
            Calendar view
          </button>
          <button
            type="button"
            onClick={() => setView("list")}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] transition-colors ${
              view === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <List className="h-3 w-3" strokeWidth={1.8} />
            List view
          </button>
        </div>
      </div>

      <div className="mt-5">
        {view === "calendar" ? (
          <AvailabilityGrid slots={slots} selectedSlotId={selectedSlotId} onSelect={onSelectSlot} />
        ) : (
          <AvailabilityList slots={slots} selectedSlotId={selectedSlotId} onSelect={onSelectSlot} />
        )}
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-5 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full border border-border bg-card" /> Available
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" /> Selected
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" /> Unavailable
          </span>
        </div>

        <div className="flex items-center gap-3">
          {selected && (
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              {selected.coachName} · ${selected.price}
            </span>
          )}
          <button
            type="button"
            onClick={continueToFlow}
            disabled={!selectedSlotId}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[12px] font-medium tracking-[0.06em] text-primary-foreground transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-35"
          >
            CONTINUE
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  );
}