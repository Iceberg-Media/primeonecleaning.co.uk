import { useState } from "react";
import { Phone, Menu, X, ChevronDown, MapPin, Sparkles, Clock } from "lucide-react";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.43v5.69C8.05 41.15 15.45 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.69H4.43C3.02 16.94 2.24 20.38 2.24 24s.78 7.06 2.19 9.87l7.26-5.69z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.45 2 8.05 6.85 4.43 14.13l7.26 5.69c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services", dropdown: true },
  { label: "Areas We Cover", path: "/areas", dropdown: true },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

const serviceLinks = [
  "Residential Cleaning",
  "End of Tenancy Cleaning",
  "After Builders Cleaning",
  "Commercial Cleaning",
  "Carpet & Upholstery Cleaning",
];

const areaTowns = [
  "Milton Keynes",
  "Bedford",
  "Leighton Buzzard",
  "Luton",
  "Dunstable",
  "Hitchin",
  "St Albans",
  "Hemel Hempstead",
  "Watford",
  "Aylesbury",
];

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const go = (path: string) => {
    setOpen(false);
    setExpanded(null);
    onNavigate(path);
  };

  const toggleExpand = (path: string) => {
    setExpanded(expanded === path ? null : path);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top mini bar */}
      <div className="bg-[#0a1f44] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#60a5fa]" />
              Luton &amp; Bedfordshire
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 text-[#60a5fa]" />
              Mon - Sat: 8:00 - 18:00
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Prime+One+Cleaning+Milton+Keynes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps listing"
              className="flex h-8 w-8 items-center justify-center transition-colors hover:text-[#60a5fa]"
            >
              <GoogleIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      {/* Main nav row */}
      <div className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => go("/")}
          className="flex items-center"
          aria-label="Prime One Cleaning home"
        >
          <img
            src="/WhatsApp_Image_2026-07-30_at_13.16.18.jpeg"
            alt="Prime One Cleaning Ltd"
            className="h-16 w-auto object-contain"
          />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            "dropdown" in item && item.dropdown ? (
              <div key={item.path} className="group relative">
                <button
                  onClick={() => go(item.path)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-[#3b82f6] ${
                    (item.path === "/services"
                      ? currentPath.startsWith("/services")
                      : currentPath.startsWith("/areas"))
                      ? "text-[#3b82f6]"
                      : "text-[#0a1f44]"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:dropdown-animate">
                  <div className="overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-xl">
                    {(item.path === "/services" ? serviceLinks : areaTowns).map(
                      (label) => (
                        <button
                          key={label}
                          onClick={() =>
                            go(
                              item.path === "/services"
                                ? `/services/${slugify(label)}`
                                : `/areas/${slugify(label)}`
                            )
                          }
                          className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#3b82f6]"
                        >
                          {item.path === "/services" ? (
                            <Sparkles className="h-3.5 w-3.5 text-[#3b82f6]" />
                          ) : (
                            <MapPin className="h-3.5 w-3.5 text-[#3b82f6]" />
                          )}
                          {label}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={item.path}
                onClick={() => go(item.path)}
                className={`group relative text-sm font-medium transition-colors duration-200 hover:text-[#3b82f6] ${
                  currentPath === item.path ? "text-[#3b82f6]" : "text-[#0a1f44]"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#3b82f6] transition-all duration-200 ease-out group-hover:w-full"></span>
              </button>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:07512345678"
            className="flex items-center gap-2 text-sm font-medium text-[#0a1f44] transition-colors hover:text-[#3b82f6]"
          >
            <Phone className="h-4 w-4" />
            07512 345 678
          </a>
          <button
            onClick={() => go("/contact")}
            className="rounded-lg bg-[#3b82f6] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#2563eb] hover:shadow-lg hover:shadow-blue-500/30"
          >
            Get a Free Quote
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:07512345678"
            className="flex items-center gap-1.5 text-sm font-medium text-[#0a1f44] transition-colors hover:text-[#3b82f6]"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center"
          >
            {open ? <X className="h-7 w-7 text-[#0a1f44]" /> : <Menu className="h-7 w-7 text-[#0a1f44]" />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile menu - full-screen overlay */}
      {open && (
        <div className="fixed inset-0 top-0 z-50 flex flex-col bg-[#0a1f44] md:hidden">
          {/* Menu header */}
          <div className="flex items-center justify-between px-4 py-3">
            <img
              src="/WhatsApp_Image_2026-07-30_at_13.16.18.jpeg"
              alt="Prime One Cleaning Ltd"
              className="h-16 w-auto object-contain"
            />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center"
            >
              <X className="h-7 w-7 text-white" />
            </button>
          </div>

          {/* Contact info bar */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-white/10 px-4 py-3 text-sm text-slate-300">
            <a href="tel:07512345678" className="flex items-center gap-1.5 text-white">
              <Phone className="h-4 w-4 text-[#60a5fa]" />
              07512 345 678
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#60a5fa]" />
              Mon - Sat: 8:00 - 18:00
            </span>
          </div>

          {/* Scrollable nav */}
          <div className="flex-1 overflow-y-auto px-4 py-4">

            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                if ("dropdown" in item && item.dropdown) {
                  const isExpanded = expanded === item.path;
                  const links = item.path === "/services" ? serviceLinks : areaTowns;
                  return (
                    <div key={item.path}>
                      <button
                        onClick={() => toggleExpand(item.path)}
                        className={`flex w-full items-center justify-between py-3 text-base font-medium transition-colors ${
                          (item.path === "/services"
                            ? currentPath.startsWith("/services")
                            : currentPath.startsWith("/areas"))
                            ? "text-[#60a5fa]"
                            : "text-white"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="flex flex-col gap-1 pb-2 pl-4">
                          {links.map((label) => (
                            <button
                              key={label}
                              onClick={() =>
                                go(
                                  item.path === "/services"
                                    ? `/services/${slugify(label)}`
                                    : `/areas/${slugify(label)}`
                                )
                              }
                              className="flex items-center gap-2 py-2.5 text-left text-sm text-slate-300 transition-colors hover:text-[#60a5fa]"
                            >
                              {item.path === "/services" ? (
                                <Sparkles className="h-4 w-4 text-[#3b82f6]" />
                              ) : (
                                <MapPin className="h-4 w-4 text-[#3b82f6]" />
                              )}
                              {label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <button
                    key={item.path}
                    onClick={() => go(item.path)}
                    className={`py-3 text-left text-base font-medium transition-colors ${
                      currentPath === item.path ? "text-[#60a5fa]" : "text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

          </div>

          {/* CTA at bottom */}
          <div className="border-t border-white/10 px-4 py-5">
            <button
              onClick={() => go("/contact")}
              className="w-full rounded-lg bg-[#3b82f6] px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#2563eb]"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
