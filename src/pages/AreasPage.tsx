import { useEffect } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface AreasPageProps {
  onNavigate: (path: string) => void;
}

const areas = [
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
  name.toLowerCase().replace(/\s+/g, "-");

export default function AreasPage({ onNavigate }: AreasPageProps) {
  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Prime One Cleaning",
    description: "Professional cleaning services across Luton, Bedfordshire and surrounding areas.",
    telephone: "07512345678",
    url: "https://primeonecleaning.co.uk",
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
    ],
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(areaSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              <MapPin className="h-4 w-4" />
              Coverage
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Areas We Cover
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Proudly serving homes and businesses across Luton &amp;
              Bedfordshire
            </p>
          </div>
        </div>
      </section>

      {/* Area cards */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((town) => (
              <div
                key={town}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all hover:border-[#3b82f6] hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0a1f44] transition-colors group-hover:bg-[#3b82f6]">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-xl font-bold text-[#0a1f44]">{town}</h2>
                <p className="mt-1 text-slate-600">
                  Cleaning services in {town}
                </p>
                <button
                  onClick={() => onNavigate(`/areas/${slugify(town)}`)}
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-lg bg-[#3b82f6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2563eb]"
                >
                  View Area
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-lg text-slate-600">
            Don't see your area listed? We likely still cover it — get in touch
            to check availability.
          </p>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} />
    </div>
  );
}
