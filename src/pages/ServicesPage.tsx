import {
  Home,
  KeyRound,
  HardHat,
  Building2,
  Sofa,
  ArrowRight,
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
    bullets: [
      "Hot water extraction for deep clean",
      "Stain & odour removal treatment",
      "Safe for sofas, rugs & mattresses",
      "Fast-drying, eco-friendly products",
    ],
  },
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div>
      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Our Cleaning Services
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Complete cleaning solutions for homes, offices and commercial
              spaces across Luton &amp; Bedfordshire
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
                {/* Placeholder image */}
                <div className="flex h-40 items-center justify-center bg-slate-100">
                  <s.icon className="h-10 w-10 text-slate-300" />
                </div>

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
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} variant="light" />
    </div>
  );
}
