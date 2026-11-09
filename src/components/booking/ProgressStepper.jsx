const STEPS = [
  "Choose discipline",
  "Meet a coach",
  "Set your goals",
  "Plan your session",
  "Train with purpose",
];

export default function ProgressStepper({ active = 0 }) {
  return (
    <div className="border-b border-border bg-background">
      <div className="shell thin-scroll overflow-x-auto py-5">
        <ol className="flex min-w-[720px] items-center gap-3">
          {STEPS.map((label, index) => {
            const isActive = index === active;
            const isDone = index < active;
            return (
              <li key={label} className="flex flex-1 items-center gap-3">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold transition-colors ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : isDone
                        ? "border-primary/30 bg-primary/10 text-foreground"
                        : "border-border text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  className={`whitespace-nowrap text-[11px] tracking-[0.04em] ${
                    isActive ? "font-medium text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
                {index < STEPS.length - 1 && <span className="h-px flex-1 bg-border" />}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}