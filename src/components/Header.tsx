import { useState } from "react";
import { Phone, Menu, X, ChevronDown, MapPin, Sparkles, Clock, Mail } from "lucide-react";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.48 10.12v3.85h5.36c-.24 1.37-.89 2.53-1.88 3.32l3.04 2.36c1.78-1.64 2.8-4.06 2.8-6.94 0-.67-.06-1.32-.17-1.94-.86-.05-7.15-.65-9.15-.65z" />
      <path d="M12.48 20c2.43 0 4.47-.81 5.96-2.18l-3.04-2.36c-.81.55-1.84.87-2.92.87-2.25 0-4.15-1.52-4.83-3.56l-3.18 2.46C5.99 18.55 8.97 20 12.48 20z" />
      <path d="M7.65 12.77c-.17-.52-.27-1.08-.27-1.77s.1-1.25.26-1.77l-3.18-2.46C3.92 8.85 3.48 10.37 3.48 12s.44 3.15 1.99 4.23l3.18-2.46z" />
      <path d="M12.48 8.18c1.32 0 2.51.46 3.44 1.35l2.31-2.31C16.97 5.75 14.93 5 12.48 5 8.97 5 5.99 6.45 4.46 8.77l3.18 2.46c.68-2.04 2.58-3.05 4.84-3.05z" />
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
            <a href="mailto:info@primeonecleaning.co.uk" className="hidden items-center gap-1.5 transition-colors hover:text-[#60a5fa] sm:flex">
              <Mail className="h-3.5 w-3.5 text-[#60a5fa]" />
              info@primeonecleaning.co.uk
            </a>
            <div className="flex items-center gap-3">
              <a href="https://www.google.com/maps/search/?api=1&query=Prime+One+Cleaning+Luton" target="_blank" rel="noopener noreferrer" aria-label="Google Maps listing" className="transition-colors hover:text-[#60a5fa]">
                <GoogleIcon className="h-4 w-4" />
              </a>
            </div>
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
            <a href="mailto:info@primeonecleaning.co.uk" className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-[#60a5fa]" />
              info@primeonecleaning.co.uk
            </a>
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
