import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import PageHero from "@/components/marketing/PageHero";
import PreviewNotice from "@/components/marketing/PreviewNotice";
import SectionHeading from "@/components/marketing/SectionHeading";
import { SITE_IMAGES } from "@/data/sampleContent";
import logo from "@/images/pehnam-logo.png";

export default function AboutPage() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="The Pehnam point of view"
        title="A stronger version of yourself starts here."
        description="Pehnam is a Halifax-based concept for private combat-sports coaching—built on the belief that the right guidance can make training more welcoming, focused, and personal."
        image={SITE_IMAGES.brand}
        imageAlt="Pehnam private combat-sports coaching campaign"
        primaryTo="/how-it-works"
        primaryLabel="How it works"
        secondaryTo="/disciplines"
        secondaryLabel="Explore disciplines"
      />
      <section className="shell pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <SectionHeading
              eyebrow="Built around people"
              title="Precision. Discipline. Strength."
              description="Combat sports can teach more than technique. With patient coaching and a clear plan, training can build confidence, resilience, and a stronger connection to your own progress."
            />
            <Link to="/coaches" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">
              Meet the coach <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 sm:p-12">
            <img src={logo} alt="Pehnam Fitness panda and barbell logo" className="mx-auto w-full max-w-sm" />
          </div>
        </div>
        <div className="mt-10">
          <PreviewNotice />
        </div>
      </section>
    </MarketingLayout>
  );
}
