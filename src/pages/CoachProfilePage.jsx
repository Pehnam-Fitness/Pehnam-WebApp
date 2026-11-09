import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AvailabilityPanel from "@/components/booking/AvailabilityPanel";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import { SAMPLE_COACHES } from "@/data/sampleContent";
import PageNotFound from "@/lib/PageNotFound";

export default function CoachProfilePage() {
  const { coachId } = useParams();
  const coach = SAMPLE_COACHES.find((item) => item.id === coachId);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const availabilityRef = useRef(null);

  const slots = useMemo(() => {
    if (!coach) return [];
    return coach.availability.map(({ day, hour }) => ({
      id: `${coach.id}-${day}-${hour}`,
      day,
      hour,
      coachId: coach.id,
      coachName: coach.name,
      initials: coach.initials,
      discipline: coach.discipline,
      price: coach.price,
    }));
  }, [coach]);

  if (!coach) return <PageNotFound />;

  const scrollToAvailability = () =>
    availabilityRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <MarketingLayout>
      <section className="shell pb-12 pt-10 md:pb-16 md:pt-16">
        <Link
          to="/coaches"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All coaches
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg text-foreground/75">
                {coach.initials}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
                    {coach.name}
                  </h1>
                  <span className="rounded-full border border-border px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Sample profile
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {coach.discipline} · {coach.area}, Halifax
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-4xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {coach.bio}
            </p>

            <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
              <div>
                <p className="eyebrow text-muted-foreground">Experience</p>
                <p className="mt-2 text-sm">{coach.years} years coaching</p>
              </div>
              <div>
                <p className="eyebrow text-muted-foreground">Languages</p>
                <p className="mt-2 text-sm">{coach.languages.join(", ")}</p>
              </div>
              <div>
                <p className="eyebrow text-muted-foreground">Private session</p>
                <p className="mt-2 text-sm">${coach.price}.00 / hour</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
              {coach.focus.slice(0, 3).map((item) => (
                <span key={item} className="text-xs text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6">
            <p className="eyebrow text-muted-foreground">Session includes</p>
            <ul className="mt-5 space-y-4 text-xs leading-5 text-muted-foreground">
              <li className="flex gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0" />
                60-minute private session, one to one
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Gym, home or outdoor location agreed at booking
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
                Cancellation details confirmed when booking
              </li>
            </ul>
            <button
              type="button"
              onClick={scrollToAvailability}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-xs font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-85"
            >
              BOOK WITH {coach.name.split(" ")[0].toUpperCase()}
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-[10px] text-muted-foreground">
              Preview only — booking is not active.
            </p>
          </aside>
        </div>

        <div className="mt-10 rounded-xl border border-amber-900/15 bg-amber-900/[0.04] px-4 py-3 text-xs leading-6 text-muted-foreground">
          {coach.profileNote} Rates and calendar times are illustrative sample content, not confirmed availability.
        </div>
      </section>

      <section ref={availabilityRef} id="availability" className="scroll-mt-24 bg-secondary/20 py-12 md:py-16">
        <div className="shell">
          <div className="mb-6">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {coach.name.split(" ")[0]}'s availability this week
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Sample calendar · times shown in Atlantic Time.
            </p>
          </div>
          <AvailabilityPanel
            slots={slots}
            discipline={coach.disciplines[0]}
            selectedSlotId={selectedSlotId}
            onSelectSlot={setSelectedSlotId}
          />
        </div>
      </section>
    </MarketingLayout>
  );
}
