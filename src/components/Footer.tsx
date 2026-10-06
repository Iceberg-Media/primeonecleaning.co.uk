import { Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
}

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
];

const serviceLinks = [
  { label: "Residential Cleaning", path: "/services/residential-cleaning" },
  { label: "End of Tenancy Cleaning", path: "/services/end-of-tenancy-cleaning" },
  { label: "After Builders Cleaning", path: "/services/after-builders-cleaning" },
  { label: "Commercial Cleaning", path: "/services/commercial-cleaning" },
  { label: "Carpet & Upholstery Cleaning", path: "/services/carpet-upholstery-cleaning" },
];

const areaLinks = [
  { label: "Luton", path: "/areas/luton" },
  { label: "Milton Keynes", path: "/areas/milton-keynes" },
  { label: "Bedford", path: "/areas/bedford" },
  { label: "Leighton Buzzard", path: "/areas/leighton-buzzard" },
  { label: "Dunstable", path: "/areas/dunstable" },
  { label: "Hitchin", path: "/areas/hitchin" },
  { label: "St Albans", path: "/areas/st-albans" },
  { label: "Hemel Hempstead", path: "/areas/hemel-hempstead" },
  { label: "Watford", path: "/areas/watford" },
  { label: "Aylesbury", path: "/areas/aylesbury" },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0a1f44] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-8">
          <div className="sm:col-span-2 lg:col-span-2 lg:pr-6 lg:border-r lg:border-white/10">
            <button onClick={() => onNavigate("/")} className="inline-block">
              <img
                src="/WhatsApp_Image_2026-07-30_at_13.16.18.jpeg"
                alt="Prime One Cleaning Ltd"
                className="h-28 w-auto object-contain"
              />
            </button>
            <p className="mt-4 max-w-sm text-sm text-slate-300">
              Professional cleaning services you can trust.
              <br />
              Clean spaces, better places.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Prime+One+Cleaning+Milton+Keynes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps listing"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:text-[#60a5fa]"
              >
                <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.43v5.69C8.05 41.15 15.45 46 24 46z" />
                  <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.69H4.43C3.02 16.94 2.24 20.38 2.24 24s.78 7.06 2.19 9.87l7.26-5.69z" />
                  <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.45 2 8.05 6.85 4.43 14.13l7.26 5.69c1.73-5.2 6.58-9.07 12.31-9.07z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:px-6 lg:border-r lg:border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#60a5fa]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <button
                    onClick={() => onNavigate(l.path)}
                    className="text-slate-300 hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1 lg:col-span-2 lg:px-6 lg:border-r lg:border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#60a5fa]">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.path}>
                  <button
                    onClick={() => onNavigate(l.path)}
                    className="block w-full text-left text-slate-300 hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-1 lg:col-span-2 lg:px-6 lg:border-r lg:border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#60a5fa]">
              Areas We Cover
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {areaLinks.map((l) => (
                <button
                  key={l.path}
                  onClick={() => onNavigate(l.path)}
                  className="block w-full text-left text-slate-300 hover:text-white"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#60a5fa]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#60a5fa]" />
                <a href="tel:07512345678" className="hover:text-white">07512 345 678</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#60a5fa]" />
                Milton Keynes, Buckinghamshire
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>&copy; 2026 Prime One Cleaning Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate("/privacy-policy")} className="hover:text-white">Privacy Policy</button>
            <button onClick={() => onNavigate("/terms-conditions")} className="hover:text-white">Terms &amp; Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
