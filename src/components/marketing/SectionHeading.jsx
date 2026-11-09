export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow text-muted-foreground">{eyebrow}</p>}
      <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>
      )}
    </div>
  );
}
