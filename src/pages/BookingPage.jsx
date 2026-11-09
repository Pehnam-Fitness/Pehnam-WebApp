import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BookingHero from "@/components/booking/BookingHero";
import ProgressStepper from "@/components/booking/ProgressStepper";
import AvailabilityPanel from "@/components/booking/AvailabilityPanel";
import CoachPanel from "@/components/booking/CoachPanel";
import { SAMPLE_COACHES, SAMPLE_SLOTS } from "@/data/sampleContent";

export default function BookingPage() {
  const [discipline, setDiscipline] = useState(null);
  const [selectedSlotId, setSelectedSlotId] = useState(null);

  const slots = useMemo(
    () => (discipline ? SAMPLE_SLOTS.filter((s) => s.discipline === discipline) : SAMPLE_SLOTS),
    [discipline]
  );

  const coaches = useMemo(
    () => (discipline ? SAMPLE_COACHES.filter((coach) => coach.disciplines.includes(discipline)) : SAMPLE_COACHES),
    [discipline]
  );

  const selectDiscipline = (name) => {
    setDiscipline(name);
    setSelectedSlotId(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <BookingHero activeDiscipline={discipline} onSelectDiscipline={selectDiscipline} />
      <ProgressStepper active={0} />

      <main className="shell py-10 md:py-14">
        <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
            {discipline ?? "Every discipline"}, one coach, your hour.
          </p>
          <p className="text-[11px] text-muted-foreground">
            Preview experience — availability and booking are not connected yet.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-8">
          <AvailabilityPanel
            slots={slots}
            discipline={discipline}
            selectedSlotId={selectedSlotId}
            onSelectSlot={setSelectedSlotId}
          />
          <CoachPanel coaches={coaches} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}