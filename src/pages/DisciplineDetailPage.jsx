import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import PageHero from "@/components/marketing/PageHero";
import PreviewNotice from "@/components/marketing/PreviewNotice";
import { DISCIPLINES } from "@/data/sampleContent";
import PageNotFound from "@/lib/PageNotFound";

export default function DisciplineDetailPage() {
  const { slug } = useParams();
  const discipline = DISCIPLINES.find((item) => item.slug === slug);

  if (!discipline) return <PageNotFound />;

  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Explore a discipline"
        title={discipline.name}
        description={discipline.description}
        image={discipline.image}
        imageAlt={discipline.imageAlt}
        primaryTo="/book"
        primaryLabel="Explore the booking preview"
        secondaryTo="/disciplines"
        secondaryLabel="All disciplines"
      />
      <section className="shell pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="eyebrow text-muted-foreground">What you can work on</p>
            <h2 className="mt-3 text-4xl">A session built around you.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Your coach can adapt the pace and focus to your goals, experience, and comfort level. These are a few areas a session may explore.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {discipline.focus.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/disciplines" className="inline-flex items-center gap-2 text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" /> All disciplines
          </Link>
          <Link to="/coaches" className="inline-flex items-center gap-2 text-sm font-semibold">
            Meet your coach <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10">
          <PreviewNotice />
        </div>
      </section>
    </MarketingLayout>
  );
}
