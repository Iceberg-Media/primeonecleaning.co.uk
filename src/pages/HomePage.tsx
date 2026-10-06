import {
  ArrowRight,
  Phone,
  Sparkles,
  Check,
  ShieldCheck,
  Home,
  KeyRound,
  HardHat,
  Building2,
  Sofa,
  MapPin,
} from "lucide-react";
import TrustBar from "@/components/TrustBar";

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    slug: "residential-cleaning",
    bullets: ["Regular Cleaning", "Deep Cleaning", "One-Off Cleaning", "Spring Cleaning"],
  },
  {
    icon: KeyRound,
    title: "End of Tenancy Cleaning",
    slug: "end-of-tenancy-cleaning",
    bullets: ["For Tenants", "For Landlords", "For Letting Agents"],
  },
  {
    icon: HardHat,
    title: "After Builders Cleaning",
    slug: "after-builders-cleaning",
    bullets: ["Post Construction", "Renovation Cleaning", "Dust & Debris Removal"],
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    slug: "commercial-cleaning",
    bullets: ["Offices", "Clinics & Surgeries", "Shops & Retail", "Gyms & Salons"],
  },
  {
    icon: Sofa,
    title: "Carpet & Upholstery Cleaning",
    slug: "carpet-upholstery-cleaning",
    bullets: ["Carpet Cleaning", "Sofa & Upholstery", "Rug Cleaning"],
  },
];

const whyChoose = [
  "Highly trained and uniformed staff",
  "Attention to detail in every clean",
  "Honest pricing with no hidden fees",
  "Satisfaction guaranteed",
  "Local company that cares",
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[90vh] items-center overflow-hidden bg-[#0a1f44]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44] via-[#0a1f44] to-[#102a5c]" />
        {/* Decorative blurred blue circle - back-left corner, low opacity */}
        <div
          className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full opacity-[0.07] blur-3xl"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
        />
        {/* Decorative geometric ring - back-right area, very low opacity */}
        <div
          className="pointer-events-none absolute right-10 top-10 h-64 w-64 rounded-full border border-[#60a5fa]/10 opacity-30"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#3b82f6]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">
              <Sparkles className="h-3.5 w-3.5" />
              Professional Cleaning Services
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              CLEAN SPACES.
              <br />
              BETTER PLACES.
            </h1>
            <p className="mt-6 text-lg font-light leading-relaxed text-slate-200 sm:text-xl">
              Professional cleaning services for homes, offices
              <span className="hidden md:inline">
                <br />
              </span>
              and commercial spaces in Luton &amp; Bedfordshire.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => onNavigate("/contact")}
                className="btn-primary flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="tel:07512345678"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 text-base font-semibold text-white transition-all duration-200 ease-out hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Floating stat card - bottom-right area */}
        <div className="absolute bottom-28 right-6 z-10 hidden lg:block">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white px-5 py-4 shadow-layered-lg">
            <span className="icon-badge-blue flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
              <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2} />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#0a1f44]">Fully Insured &amp; Vetted Team</span>
              <span className="text-xs font-light text-slate-500">Trusted local professionals</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator - bottom center */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-light uppercase tracking-widest text-white/50">Scroll</span>
            <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
              <div
                className="h-2 w-1 animate-bounce rounded-full bg-white/60"
                style={{ animationDuration: "1.5s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome intro */}
      <section className="bg-blue-50/40 py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#3b82f6]">
            Welcome to Prime One Cleaning
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1f44] sm:text-4xl">
            Your Trusted Cleaning Partner in Luton &amp; Bedfordshire
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-slate-600">
            Prime One Cleaning Ltd is a professional cleaning company serving
            homes, offices and commercial spaces across Luton &amp;
            Bedfordshire. Our fully trained and insured team is focused on
            reliable, high-quality results with honest pricing and no hidden
            fees. Whether you need a one-off deep clean or a regular contract,
            you can expect the same consistent standard every time.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* Services */}
      <section className="section-depth-grey bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#3b82f6]">
              OUR SERVICES
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0a1f44] sm:text-4xl">
              Complete Cleaning Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-light leading-relaxed text-slate-600">
              We offer a wide range of cleaning services for homes, offices and
              commercial properties.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <div
                key={s.slug}
                className="group flex flex-col rounded-2xl border border-slate-200/60 bg-white shadow-layered transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-layered-lg"
              >
                <div className="flex flex-1 flex-col p-6">
                  <span className="icon-badge flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover:scale-110">
                    <s.icon className="h-7 w-7 text-[#60a5fa]" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#0a1f44]">{s.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm font-light leading-relaxed text-slate-600">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onNavigate(`/services/${s.slug}`)}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#3b82f6] hover:text-[#2563eb]"
                  >
                    {s.title} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us + Free Quote side by side */}
      <section className="section-depth-white bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Why Choose Us */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#3b82f6]">
                WHY CHOOSE US
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0a1f44] sm:text-3xl">
                We go the extra mile for every client.
              </h2>
              <ul className="mt-8 space-y-4">
                {whyChoose.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-slate-700">
                    <span className="icon-badge-blue mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                      <Check className="h-4 w-4 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-base font-light leading-relaxed">{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get a Free Quote */}
            <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-[#0a1f44] to-[#16306b] p-8 shadow-layered-lg sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#60a5fa]">
                GET A FREE QUOTE
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let us take care of the cleaning.
              </h2>
              <p className="mt-4 text-lg font-light leading-relaxed text-slate-300">
                Contact us today for a free, no obligation quote. We reply fast!
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:07512345678"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-[#0a1f44] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  07512 345 678
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

      {/* Areas we serve */}
      <section className="bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#3b82f6]">
              AREAS WE SERVE
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0a1f44] sm:text-4xl">
              Serving Luton &amp; Bedfordshire
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-light leading-relaxed text-slate-600">
              We proudly provide professional cleaning services across Luton and the wider Bedfordshire area. Click your town to learn more.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
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
            ].map((area) => (
              <button
                key={area.path}
                onClick={() => onNavigate(area.path)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-[#0a1f44] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3b82f6] hover:text-[#3b82f6] hover:shadow-md"
              >
                <MapPin className="h-4 w-4 text-[#3b82f6]" />
                {area.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LocalBusiness schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Prime One Cleaning",
            legalName: "Prime One Cleaning Ltd",
            description: "Professional cleaning services for homes, offices and commercial spaces in Luton & Bedfordshire. Residential, end of tenancy, after builders, commercial and carpet cleaning.",
            telephone: "07512345678",
            url: "https://primeonecleaning.co.uk",
            image: "https://primeonecleaning.co.uk/WhatsApp_Image_2026-07-30_at_13.16.18.jpeg",
            logo: "https://primeonecleaning.co.uk/WhatsApp_Image_2026-07-30_at_13.16.18.jpeg",
            priceRange: "££",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4 Manhattan House, 401 Witan Gate",
              addressLocality: "Milton Keynes",
              addressRegion: "Buckinghamshire",
              postalCode: "MK9 2BQ",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "52.0406",
              longitude: "-0.7554",
            },
            hasMap: "https://www.google.com/maps?q=Milton+Keynes,MK9+2BQ,UK",
            areaServed: [
              "Luton",
              "Milton Keynes",
              "Bedford",
              "Leighton Buzzard",
              "Dunstable",
              "Hitchin",
              "St Albans",
              "Hemel Hempstead",
              "Watford",
              "Aylesbury",
              "Bedfordshire",
            ],
            sameAs: [],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
