import { ArrowRight, Check, Compass, MessageCircle, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import PageHero from "@/components/marketing/PageHero";
import PreviewNotice from "@/components/marketing/PreviewNotice";
import SectionHeading from "@/components/marketing/SectionHeading";
import { SITE_IMAGES } from "@/data/sampleContent";

const STEPS = [
  {
    number: "01",
    icon: Compass,
    title: "Choose your direction",
    copy: "Pick the discipline you're curious about and tell us what you want from training.",
  },
  {
    number: "02",
    icon: UserRound,
    title: "Meet your coach",
    copy: "Explore a coach's approach and find a good fit for your experience and goals.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Plan your session",
    copy: "Share your preferences so your first session can feel personal, clear, and considered.",
  },
  {
    number: "04",
    icon: Check,
    title: "Show up and grow",
    copy: "Start building skills with one-to-one support and a plan that can grow with you.",
  },
];

export default function HowItWorksPage() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="A better way to begin"
        title="Your first step should feel simple."
        description="Pehnam brings the coach, the discipline, and the next step into one clear experience—so you can focus on getting started."
        image={SITE_IMAGES.journey}
        imageAlt="Pehnam campaign image about starting a training journey"
        primaryTo="/disciplines"
        primaryLabel="Explore disciplines"
        secondaryTo="/coaches"
        secondaryLabel="Meet the coach"
      />

      <section className="shell pb-14 md:pb-20">
        <SectionHeading
          eyebrow="From curious to confident"
          title="Four steps. One stronger you."
          description="A thoughtful path from deciding to train to showing up for your first session."
        />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ number, icon: Icon, title, copy }) => (
            <article key={number} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-muted-foreground/60">{number}</span>
                <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <h2 className="mt-8 text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell pb-16 md:pb-24">
        <div className="grid overflow-hidden rounded-[1.5rem] bg-[#111] text-white md:grid-cols-2">
          <div className="flex flex-col justify-center p-7 sm:p-10 md:p-14">
            <p className="eyebrow text-white/55">Made for real life</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Training that fits your starting point.</h2>
            <p className="mt-5 text-sm leading-7 text-white/65">
              Whether you're brand new, returning after time away, or ready to sharpen your technique, private coaching gives you space to learn at your own pace.
            </p>
            <Link to="/book" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">
              See the booking preview <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="min-h-[320px] md:min-h-[480px]">
            <img src={SITE_IMAGES.brand} alt="Pehnam private coaching brand campaign" className="h-full w-full object-cover grayscale" />
          </div>
        </div>
        <div className="mt-5">
          <PreviewNotice />
        </div>
      </section>
    </MarketingLayout>
  );
}
