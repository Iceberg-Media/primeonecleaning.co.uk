import { Phone, Mail, MapPin } from "lucide-react";

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
                href="https://www.google.com/maps/search/?api=1&query=Prime+One+Cleaning+Luton"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps listing"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:text-[#60a5fa]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12.48 10.12v3.85h5.36c-.24 1.37-.89 2.53-1.88 3.32l3.04 2.36c1.78-1.64 2.8-4.06 2.8-6.94 0-.67-.06-1.32-.17-1.94-.86-.05-7.15-.65-9.15-.65z" />
                  <path d="M12.48 20c2.43 0 4.47-.81 5.96-2.18l-3.04-2.36c-.81.55-1.84.87-2.92.87-2.25 0-4.15-1.52-4.83-3.56l-3.18 2.46C5.99 18.55 8.97 20 12.48 20z" />
                  <path d="M7.65 12.77c-.17-.52-.27-1.08-.27-1.77s.1-1.25.26-1.77l-3.18-2.46C3.92 8.85 3.48 10.37 3.48 12s.44 3.15 1.99 4.23l3.18-2.46z" />
                  <path d="M12.48 8.18c1.32 0 2.51.46 3.44 1.35l2.31-2.31C16.97 5.75 14.93 5 12.48 5 8.97 5 5.99 6.45 4.46 8.77l3.18 2.46c.68-2.04 2.58-3.05 4.84-3.05z" />
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
                <Mail className="h-4 w-4 text-[#60a5fa]" />
                <a href="mailto:info@primeonecleaning.co.uk" className="hover:text-white">info@primeonecleaning.co.uk</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#60a5fa]" />
                Luton, Bedfordshire
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
