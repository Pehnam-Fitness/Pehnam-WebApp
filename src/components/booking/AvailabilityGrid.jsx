import { WEEK, HOURS, formatHour } from "@/data/sampleContent";
import SlotChip from "@/components/booking/SlotChip";

export default function AvailabilityGrid({ slots, selectedSlotId, onSelect }) {
  return (
    <div className="thin-scroll max-h-[560px] overflow-auto rounded-xl border border-border">
      <table className="w-full min-w-[760px] border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="sticky left-0 top-0 z-20 w-[78px] border-b border-border bg-card px-2 py-2.5 text-left">
              <span className="eyebrow text-muted-foreground">Time</span>
            </th>
            {WEEK.map((day) => (
              <th
                key={day.date}
                className="sticky top-0 z-10 border-b border-l border-border bg-card px-1.5 py-2.5 text-center"
              >
                <span className="block text-[11px] font-semibold text-foreground">{day.label}</span>
                <span className="block text-[10px] text-muted-foreground">{day.date}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {HOURS.map((hour) => (
            <tr key={hour}>
              <td className="sticky left-0 z-10 border-b border-border bg-card px-2 py-1.5 align-top">
                <span className="text-[10px] tabular-nums text-muted-foreground">{formatHour(hour)}</span>
              </td>
              {WEEK.map((day, dayIndex) => {
                const slot = slots.find((s) => s.day === dayIndex && s.hour === hour);
                return (
                  <td key={day.date} className="border-b border-l border-border p-1 align-top">
                    {slot ? (
                      <SlotChip
                        slot={slot}
                        selected={selectedSlotId === slot.id}
                        onSelect={onSelect}
                      />
                    ) : (
                      <div className="h-[38px] rounded-lg bg-secondary/40" aria-hidden="true" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}