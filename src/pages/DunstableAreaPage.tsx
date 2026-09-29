import { useEffect } from "react";
import {
  MapPin,
  Home,
  KeyRound,
  HardHat,
  Building2,
  Sofa,
  ArrowRight,
} from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface AreaPageProps {
  onNavigate: (path: string) => void;
}

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    slug: "residential-cleaning",
  },
  {
    icon: KeyRound,
    title: "End of Tenancy Cleaning",
    slug: "end-of-tenancy-cleaning",
  },
  {
    icon: HardHat,
    title: "After Builders Cleaning",
    slug: "after-builders-cleaning",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    slug: "commercial-cleaning",
  },
  {
    icon: Sofa,
    title: "Carpet & Upholstery Cleaning",
    slug: "carpet-upholstery-cleaning",
  },
];

function AreaSchema() {
  useEffect(() => {
    document.title = "Cleaning Services in Dunstable | Prime One Cleaning";

    const metaDesc =
      "Professional cleaning services in Dunstable. Trained, insured local cleaners for homes and businesses. Free quotes. Call 07512 345 678.";
    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = metaDesc;

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Prime One Cleaning",
      description:
        "Cleaning Services Dunstable — professional residential and commercial cleaning for homes and businesses across Dunstable.",
      telephone: "07512 345 678",
      areaServed: {
        "@type": "City",
        name: "Dunstable",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dunstable",
        addressRegion: "Bedfordshire",
        addressCountry: "GB",
      },
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cleaning Services Dunstable",
          serviceType:
            "Residential Cleaning, End of Tenancy Cleaning, After Builders Cleaning, Commercial Cleaning, Carpet & Upholstery Cleaning",
          description:
            "Reliable residential and commercial cleaning for homes and businesses across Dunstable.",
        },
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    // Breadcrumb schema
    const breadcrumbSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://primeonecleaning.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Areas We Cover",
        "item": "https://primeonecleaning.co.uk/#/areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dunstable",
        "item": "https://primeonecleaning.co.uk/#/areas/dunstable"
      }
    ]
  }
];
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumbScript);
      const def = document.querySelector("title[data-default]");
      if (def) def.textContent = "Vite + React + TS";
      const m = document.querySelector('meta[name="description"]');
      if (m) m.remove();
    };
  }, []);

  return null;
}

export default function DunstableAreaPage({ onNavigate }: AreaPageProps) {
  return (
    <div>
      <AreaSchema />

      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              <MapPin className="h-4 w-4" />
              Dunstable
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Cleaning Services in Dunstable
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Reliable residential and commercial cleaning for homes and
              businesses across Dunstable
            </p>
            <p>
              Searching for <strong>cleaning services near me</strong> in Dunstable? As a locally based company, Prime One Cleaning offers reliable <strong>local cleaners in Dunstable</strong> who know the area and can reach you quickly. Whether you need a one-off deep clean, a regular weekly schedule or an end of tenancy clean, our insured and vetted team delivers consistent, high-quality results every time.
            </p>
            <p>
              Looking for a specific service in Dunstable? Explore our <button onClick={() => onNavigate("/services/after-builders-cleaning")} className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline">after builders cleaning</button> designed for homes and businesses across the area.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-content space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              Prime One Cleaning brings trusted, professional cleaning services
              to homes and businesses right across Dunstable. Sitting just a
              stone's throw from our Luton base, Dunstable is a close neighbour
              we know well — a growing town with a pleasant mix of established
              residential estates, modern developments and a busy stretch of
              local businesses along the high street and surrounding industrial
              parks. Our cleaners know the area inside out, from family homes in
              Bidwell and Lewsey Farm to offices and retail units near the town
              centre and the White Lion Retail Park.
            </p>
            <p>
              Our team of trained, insured and vetted local cleaners understands
              the specific needs of Dunstable properties. Whether you live in a
              family home in Eaton Bray, a flat above a high street shop or a
              new-build on the edge of town, or run a business in one of the
              town's commercial units, we arrive prepared and ready to deliver a
              spotless finish every time. Every cleaner on our team is fully
              insured, DBS-checked and trained to the same high standard, so
              whether you need a regular weekly home clean, a one-off deep clean,
              an end-of-tenancy handover or a commercial contract for your office
              or shop, you can book with complete confidence.
            </p>
            <p>
              Being so close to Luton means we can offer Dunstable customers the
              same quick response, flexible appointment times and friendly,
              reliable service as our home-town clients. Get in touch today for a
              free, no-obligation quote — we'll help you find the right cleaning
              solution for your home or business in Dunstable.
            </p>
          </div>
        </div>
      </section>

      {/* Service icons row */}
      <section className="bg-slate-50 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#0a1f44]">
            Our Cleaning Services in Dunstable
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Whatever your cleaning needs, we have a service to match.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <button
                key={s.slug}
                onClick={() => onNavigate(`/services/${s.slug}`)}
                className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all hover:border-[#3b82f6] hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0a1f44] transition-colors group-hover:bg-[#3b82f6]">
                  <s.icon className="h-7 w-7 text-[#60a5fa]" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#0a1f44]">
                  {s.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#3b82f6]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} />
    </div>
  );
}
