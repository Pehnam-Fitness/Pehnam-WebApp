import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryTo = "/book",
  primaryLabel = "Explore coaching",
  secondaryTo,
  secondaryLabel,
}) {
  return (
    <section className="shell py-6 md:py-10">
      <div className="relative isolate flex min-h-[430px] items-center overflow-hidden rounded-[1.75rem] bg-[#0b0b0b] text-white md:min-h-[500px]">
        <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[58%]">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
            style={{ objectPosition: "right center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/45 to-transparent md:from-[#080808]/70 md:via-[#080808]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        </div>
        <div className="relative z-10 max-w-3xl px-7 py-16 sm:px-12 md:px-16 md:py-20">
          <p className="eyebrow text-white/65">{eyebrow}</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.96] tracking-[-0.025em] sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to={primaryTo}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold tracking-[0.08em] text-black transition-colors hover:bg-white/85"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryTo && (
              <Link
                to={secondaryTo}
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
