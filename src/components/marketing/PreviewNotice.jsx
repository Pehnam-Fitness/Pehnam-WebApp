export default function PreviewNotice({ children = "Client preview — booking availability and payments are not active." }) {
  return (
    <p className="rounded-xl border border-border bg-secondary/50 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}
