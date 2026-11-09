import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin, Menu, X, ArrowRight } from "lucide-react";
import logo from "@/images/pehnam-logo.png";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Coaches", to: "/coaches" },
  { label: "Disciplines", to: "/disciplines" },
  { label: "How it works", to: "/how-it-works" },
  { label: "About", to: "/about" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="Pehnam Fitness" className="h-12 w-[72px] object-contain" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-[13px] transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 text-[12px] text-muted-foreground sm:flex">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
            Halifax, NS
          </span>
          <Link
            to="/book"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] text-primary-foreground transition-opacity hover:opacity-85 sm:inline-flex"
          >
            BOOK A SESSION
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="shell flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border/60 py-3.5 text-sm last:border-0"
              >
                {item.label}
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="my-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[12px] font-medium tracking-[0.08em] text-primary-foreground"
            >
              BOOK A SESSION
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}