import { ArrowLeft, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import PageHero from "@/components/marketing/PageHero";
import PreviewNotice from "@/components/marketing/PreviewNotice";
import { SAMPLE_COACHES, SITE_IMAGES } from "@/data/sampleContent";
import PageNotFound from "@/lib/PageNotFound";

export default function CoachProfilePage() {
  const { coachId } = useParams();
  const coach = SAMPLE_COACHES.find((item) => item.id === coachId);

  if (!coach) return <PageNotFound />;

  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Coach profile preview"
        title={coach.name}
        description="A personal, fundamentals-first approach to combat sports—built around your goals, your pace, and the skills you want to develop."
        image={SITE_IMAGES.coaches}
        imageAlt="Pehnam campaign image for private coaches"
        primaryTo="/book"
        primaryLabel="Explore the booking preview"
        secondaryTo="/coaches"
        secondaryLabel="All coaches"
      />
      <section className="shell pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit rounded-2xl bg-secondary/55 p-6">
            <p className="eyebrow text-muted-foreground">At a glance</p>
            <p className="mt-5 flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" /> {coach.area}, Halifax
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {coach.years} years of experience · ${coach.price} / hour
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{coach.discipline}</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {coach.openSlots} sample open slots this week
            </p>
          </aside>
          <div>
            <p className="eyebrow text-muted-foreground">Coaching philosophy</p>
            <h2 className="mt-3 text-4xl">Progress with purpose.</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">{coach.bio}</p>
            <h3 className="mt-9 text-2xl">Areas of focus</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {coach.focus.map((item) => (
                <span key={item} className="rounded-full border border-border bg-card px-4 py-2 text-xs">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 rounded-xl border border-amber-900/15 bg-amber-900/[0.04] px-4 py-3 text-xs leading-6 text-muted-foreground">
              {coach.profileNote}
            </p>
            <Link to="/coaches" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              <ArrowLeft className="h-4 w-4" /> Back to coaches
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <PreviewNotice />
        </div>
      </section>
    </MarketingLayout>
  );
}
