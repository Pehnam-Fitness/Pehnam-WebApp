export default function SlotChip({ slot, selected, onSelect, compact = false }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(slot.id)}
      aria-pressed={selected}
      className={`group flex w-full items-center gap-1.5 rounded-lg border px-1.5 py-1.5 text-left transition-all duration-200 ${
        selected
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-card hover:border-foreground/30 hover:bg-secondary/60"
      }`}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[8px] font-semibold tracking-wide ${
          selected ? "bg-white/20 text-white" : "bg-secondary text-foreground/70"
        }`}
      >
        {slot.initials}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[10px] font-medium leading-tight">{slot.coachName}</span>
        {!compact && (
          <span
            className={`block truncate text-[9px] leading-tight ${
              selected ? "text-white/60" : "text-muted-foreground"
            }`}
          >
            {slot.discipline}
          </span>
        )}
      </span>
    </button>
  );
}