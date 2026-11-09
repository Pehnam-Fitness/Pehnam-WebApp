import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="max-w-md text-center">
        <p className="font-heading text-7xl font-light text-muted-foreground/40">404</p>
        <h1 className="mt-3 text-2xl font-semibold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page "{pathname.slice(1)}" is not part of this preview.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
        >
          Return to booking
        </Link>
      </div>
    </div>
  );
}
