import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import PageHero from "@/components/marketing/PageHero";
import SectionHeading from "@/components/marketing/SectionHeading";
import { DISCIPLINES, SITE_IMAGES } from "@/data/sampleContent";

export default function DisciplinesPage() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Find your focus"
        title="A discipline for every kind of drive."
        description="Explore one-to-one coaching across striking, grappling, and mixed martial arts. Start with what interests you—your coach can help you take it from there."
        image={SITE_IMAGES.brand}
        imageAlt="Pehnam private combat-sports coaching campaign"
        primaryTo="/book"
        primaryLabel="Start exploring"
        secondaryTo="/how-it-works"
        secondaryLabel="How it works"
      />

      <section className="shell pb-16 md:pb-24">
        <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The disciplines"
            title="Build skill. Build confidence."
            description="Each discipline offers a different path to strength, skill, and self-belief."
          />
          <p className="max-w-sm text-xs leading-6 text-muted-foreground">
            New to combat sports? No problem. A private coach can tailor the first session to your comfort level.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINES.map((discipline, index) => (
            <article
              key={discipline.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <Link to={`/disciplines/${discipline.slug}`} className="block">
                <div className="relative aspect-[1.35] overflow-hidden bg-[#101010]">
                  <img
                    src={discipline.image}
                    alt={discipline.imageAlt}
                    className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-4 left-5 text-xs font-semibold tracking-[0.16em] text-white/75">
                    0{index + 1} / PEHNAM
                  </span>
                  <ArrowUpRight className="absolute bottom-4 right-5 h-5 w-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="p-5 sm:p-6">
                  <h2 className="text-3xl">{discipline.name}</h2>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                    {discipline.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{discipline.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {discipline.focus.slice(0, 3).map((focus) => (
                      <span key={focus} className="rounded-full bg-secondary px-3 py-1.5 text-[10px] text-muted-foreground">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
