import {
  Home,
  KeyRound,
  HardHat,
  Building2,
  Sofa,
  Sparkles,
  BedDouble,
  ArrowRight,
  Phone,
} from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    slug: "residential-cleaning",
    image: "/residential-cleaning.jpg.jpg",
    bullets: [
      "Regular weekly or fortnightly cleans",
      "Deep cleaning of kitchens, bathrooms & living areas",
      "Dusting, mopping, vacuuming & sanitising",
      "Tailored checklists to suit your home",
    ],
  },
  {
    icon: KeyRound,
    title: "End of Tenancy Cleaning",
    slug: "end-of-tenancy-cleaning",
    image: "/end-of-tenancy-cleaning.jpg.jpg",
    bullets: [
      "Full property deep clean for move-outs",
      "Oven, fridge & appliance cleaning included",
      "Carpets & windows cleaned to standard",
      "Help secure your deposit return",
    ],
  },
  {
    icon: HardHat,
    title: "After Builders Cleaning",
    slug: "after-builders-cleaning",
    image: "/after-builders-cleaning.jpg.jpg",
    bullets: [
      "Removal of dust, plaster & debris",
      "Detailed clean of all surfaces & fixtures",
      "Window & frame cleaning",
      "Site-ready finish for handover",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    slug: "commercial-cleaning",
    image: "/commercial-cleaning.jpg.jpg",
    bullets: [
      "Offices, retail units & commercial spaces",
      "Flexible scheduling outside working hours",
      "Restroom, kitchen & communal area cleaning",
      "Reliable, fully insured cleaning teams",
    ],
  },
  {
    icon: Sofa,
    title: "Carpet & Upholstery Cleaning",
    slug: "carpet-upholstery-cleaning",
    image: "/carpet-upholstery-cleaning.jpg.jpg",
    bullets: [
      "Hot water extraction for deep clean",
      "Stain & odour removal treatment",
      "Safe for sofas, rugs & mattresses",
      "Fast-drying, eco-friendly products",
    ],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    image: "/deep-cleaning.jpg.jpg",
    bullets: [
      "Detailed top-to-bottom cleaning",
      "Ideal for end of tenancy",
      "Before and after renovation",
      "Kitchen and bathroom deep clean",
    ],
  },
  {
    icon: BedDouble,
    title: "Airbnb & Short-Let Cleaning",
    slug: "airbnb-short-let-cleaning",
    image: "/airbnb-short-let-cleaning.jpg.jpg",
    bullets: [
      "Fast turnaround cleans between guests",
      "High standards for guest-ready presentation",
      "Linen change (optional)",
      "Fully equipped service",
    ],
  },
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div>
      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Our Cleaning Services
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Complete cleaning solutions for homes, offices and commercial
              spaces across Milton Keynes &amp; Surrounding Areas
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={s.image}
                  alt={`${s.title} in Milton Keynes by Prime One Cleaning`}
                  className="h-40 w-full object-cover object-center"
                />

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0a1f44] shadow-md ring-4 ring-white">
                      <s.icon className="h-7 w-7 text-[#60a5fa]" />
                    </span>
                    <h2 className="text-xl font-bold text-[#0a1f44] sm:text-2xl">
                      {s.title}
                    </h2>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <button
                      onClick={() => onNavigate(`/services/${s.slug}`)}
                      className="inline-flex items-center gap-2 self-start rounded-lg bg-[#3b82f6] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#2563eb] hover:shadow-lg hover:shadow-blue-500/30"
                    >
                      {s.title}<ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Quote card - spans 2 columns on desktop */}
            <div className="group flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#0a1f44] p-6 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl sm:col-span-2 lg:col-span-2">
              <div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Not sure which service you need?
                </h2>
                <p className="mt-3 text-slate-300">
                  Tell us about your space and we'll recommend the right clean. Free, no-obligation quote.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+447432625688"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-[#0a1f44] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  Call 07432 625688
                </a>
                <button
                  onClick={() => onNavigate("/contact")}
                  className="btn-primary flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5"
                >
                  Request a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} variant="light" />
    </div>
  );
}
