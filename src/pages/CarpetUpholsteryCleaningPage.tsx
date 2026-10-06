import { useEffect } from "react";
import { Droplets, Check, ChevronDown } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface ServicePageProps {
  onNavigate: (path: string) => void;
}

const faqs = [
  {
    q: "How long does it take carpets to dry after cleaning?",
    a: "Typically a few hours, depending on the carpet type, thickness and how well-ventilated the room is. We use extraction equipment that removes most of the water during the clean itself, which keeps drying times short. Opening windows or keeping heating on will speed things up further.",
  },
  {
    q: "Can you remove pet stains and odours?",
    a: "Yes. We offer specialist pet stain and odour treatment that breaks down the proteins causing lingering smells, alongside our standard deep clean. For stubborn or older marks we may carry out a targeted pre-treatment before the main clean to give the best possible result.",
  },
  {
    q: "Is upholstery cleaning safe for all fabric types?",
    a: "Yes. We assess the fabric type of each piece, whether it's a synthetic weave, natural fibre or delicate material, and choose the appropriate cleaning method. Where needed we'll carry out a small patch test first, so you can be confident the treatment is safe for your furniture.",
  },
  {
    q: "Do you offer this as a standalone service or only with other cleans?",
    a: "Carpet and upholstery cleaning is available as a standalone service, on its own. It's also available combined with a home or office clean if you'd like everything taken care of in one visit, just let us know what you need.",
  }
];

const included = [
  "Hot water extraction for deep clean",
  "Stain & odour removal treatment",
  "Safe for sofas, rugs & mattresses",
  "Fast-drying eco-friendly products",
  "Pre-treatment of stubborn stains",
  "Pet hair and odour removal"
];

function ServiceSchema() {
  useEffect(() => {
    const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Carpet & Upholstery Cleaning",
    "serviceType": "Carpet Cleaning Luton, Upholstery Cleaning Bedfordshire",
    "description": "Deep, professional carpet, sofa, upholstery and rug cleaning for homes and businesses across Luton & Bedfordshire. Includes stain pre-treatment, steam cleaning, deodorising and fast drying times.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Prime One Cleaning",
      "telephone": "07512 345 678",
      "areaServed": [
        "Luton",
        "Bedfordshire"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Milton Keynes",
        "addressRegion": "Buckinghamshire",
        "addressCountry": "GB",
      },
    },
    "areaServed": [
      "Luton",
      "Bedfordshire"
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://primeonecleaning.co.uk/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://primeonecleaning.co.uk/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Carpet & Upholstery Cleaning",
        "item": "https://primeonecleaning.co.uk/services/carpet-upholstery-cleaning",
      }
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take carpets to dry after cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically a few hours, depending on the carpet type, thickness and how well-ventilated the room is. We use extraction equipment that removes most of the water during the clean itself, which keeps drying times short. Opening windows or keeping heating on will speed things up further.",
        }
      },
      {
        "@type": "Question",
        "name": "Can you remove pet stains and odours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer specialist pet stain and odour treatment that breaks down the proteins causing lingering smells, alongside our standard deep clean. For stubborn or older marks we may carry out a targeted pre-treatment before the main clean to give the best possible result.",
        }
      },
      {
        "@type": "Question",
        "name": "Is upholstery cleaning safe for all fabric types?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We assess the fabric type of each piece and choose the appropriate cleaning method. Where needed we will carry out a small patch test first, so you can be confident the treatment is safe for your furniture.",
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer this as a standalone service or only with other cleans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Carpet and upholstery cleaning is available as a standalone service, on its own. It is also available combined with a home or office clean if you would like everything taken care of in one visit. Just let us know what you need.",
        },
      }
    ],
  }
];
    const scripts: HTMLScriptElement[] = [];
    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach((s) => document.head.removeChild(s));
    };
  }, []);

  return null;
}

export default function CarpetUpholsteryCleaningPage({ onNavigate }: ServicePageProps) {
  return (
    <div>
      <ServiceSchema />

      {/* */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              <Droplets className="h-4 w-4" />
              Deep Clean
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Carpet &amp; Upholstery Cleaning in Luton &amp; Bedfordshire
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Professional deep cleaning that restores carpets, sofas and rugs
            </p>
            <p className="mt-4 text-base text-slate-300">
              This can be booked as a standalone service or combined with our <button onClick={() => onNavigate("/services/residential-cleaning")} className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline">residential cleaning service</button> across Luton &amp; Bedfordshire.
            </p>
          </div>
        </div>
      </section>

      {/* */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            <p>
              Carpets and upholstery take more daily wear than almost anything
              else in a home or workplace. Every day they trap dust, pollen, pet
              dander, food particles and body oils, much of it deep within the
              fibres where a regular vacuum can't reach. Our carpet and
              upholstery cleaning service lifts that build-up out, restoring the
              look, feel and freshness of your soft furnishings and leaving the
              whole room feeling cleaner.
            </p>
            <p>
              We use professional hot water extraction, often referred to as
              steam cleaning, which is the most effective method for deep
              cleaning carpets and fabric upholstery. Pressurised hot water
              combined with a gentle cleaning solution is injected deep into the
              fibres to break down dirt and stains, then immediately extracted
              along with the dislodged soil. This reaches well below the surface
              removes allergens and bacteria, and leaves no sticky residue behind
              to attract fresh dirt. For delicate fabrics we adjust the method
              accordingly, using lower-moisture techniques where steam cleaning
              isn't suitable.
            </p>
            <p>
              Regular professional carpet cleaning does more than improve
              appearance, it extends the life of your carpets. Grit and
              abrasive particles trapped in the pile act like sandpaper underfoot
              gradually wearing fibres thin. Removing that build-up protects the
              carpet and keeps it looking newer for longer. Deep cleaning also
              improves indoor air quality by removing allergens, dust mites and
              trapped pollutants that would otherwise circulate every time
              someone walks across the room, a real benefit for asthma and
              allergy sufferers, and for any busy household or workplace.
            </p>
            <p>
              Our service covers three core areas.{" "}
              <strong className="text-[#0a1f44]">Carpet Cleaning</strong> is for
              fitted carpets and carpeted rooms throughout the home or office
              tackling everyday dirt, spills and high-traffic wear.{" "}
              <strong className="text-[#0a1f44]">Sofa &amp; Upholstery</strong>{" "}
              cleaning refreshes armchairs, sofas, dining chairs and other
              fabric-covered furniture, bringing colour back and removing
              body-oil marks and odours. And{" "}
              <strong className="text-[#0a1f44]">Rug Cleaning</strong> handles
              everything from small hallway rugs to large statement pieces, with
              collection available for bigger rugs that need deeper treatment off-
              site.
            </p>
            <p>
              Whether you're refreshing a single room, dealing with a specific
              spill or bringing a whole property back to its best, we tailor the
              clean to the job. Stains are pre-treated before the main clean
              deodorising is included as standard, and our extraction method keeps
              drying times short, usually just a few hours. Available as a
              standalone service or combined with a wider home or office clean
              it's a simple, effective way to bring tired carpets and furniture
              back to life. Get in touch for a free quote and we'll talk through
              what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* */}
      <section className="bg-slate-50 py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1f44]">What's Included</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]">
                  <Check className="h-4 w-4 text-white" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* */}
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#0a1f44]">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-[#3b82f6] hover:bg-slate-100"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[#0a1f44]">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#3b82f6] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} variant="light" />
    </div>
  );
}
