import { formatHour, WEEK } from "@/data/sampleContent";
import SlotChip from "@/components/booking/SlotChip";

export default function AvailabilityList({ slots, selectedSlotId, onSelect }) {
  if (slots.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border px-3 py-8 text-center text-sm text-muted-foreground">
        No sample times are available for this discipline.
      </p>
    );
  }

  return (
    <div className="thin-scroll max-h-[560px] space-y-4 overflow-auto">
      {WEEK.map((day, dayIndex) => {
        const daySlots = slots
          .filter((slot) => slot.day === dayIndex)
          .sort((a, b) => a.hour - b.hour);

        if (daySlots.length === 0) return null;

        return (
          <section key={day.date}>
            <h3 className="mb-2 text-xs font-semibold text-muted-foreground">
              {day.label}, {day.date}
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {daySlots.map((slot) => (
                <div key={slot.id} className="flex items-center gap-3 rounded-xl border border-border p-3">
                  <span className="w-16 shrink-0 text-xs tabular-nums text-muted-foreground">
                    {formatHour(slot.hour)}
                  </span>
                  <SlotChip
                    slot={slot}
                    selected={selectedSlotId === slot.id}
                    onSelect={onSelect}
                    compact
                  />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
