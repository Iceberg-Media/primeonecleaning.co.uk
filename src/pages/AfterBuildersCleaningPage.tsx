import { useEffect } from "react";
import { HardHat, Check, ChevronDown } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface ServicePageProps {
  onNavigate: (path: string) => void;
}

const faqs = [
  {
    q: "When should I book this after building work finishes?",
    a: "As soon as your construction or renovation work is complete, ideally before you move back in or before handover to a tenant or buyer. Booking promptly means fine dust doesn't have time to settle deeper into surfaces, vents and flooring.",
  },
  {
    q: "Do you remove paint splashes and sticker residue?",
    a: "Yes. Removing paint spots, splashes and sticky label or sticker residue is all part of the detailed clean. We use the right products and techniques to lift these marks without damaging the surface underneath.",
  },
  {
    q: "Can you clean commercial renovation sites too?",
    a: "Absolutely. We handle post-construction cleaning for offices, shops, restaurants and other commercial spaces, not just homes. Whether it's a single unit or a larger refurbishment, we can scope the clean to suit.",
  },
  {
    q: "How is pricing worked out?",
    a: "Pricing is based on the size of the property and the level of building work carried out, a light renovation will need less time than a full strip-out and rebuild. We provide a free, no-obligation quote upfront so you know the cost before we start.",
  }
];

const included = [
  "Full debris and rubble removal",
  "Dust removal from all surfaces including skirting and light fittings",
  "Deep floor cleaning including grout where needed",
  "Window and glass cleaning to remove residue",
  "Kitchen and bathroom fixture clean-up",
  "Appliance and fitting wipe-down"
];

function ServiceSchema() {
  useEffect(() => {
    const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "After Builders Cleaning",
    "serviceType": "After Builders Cleaning Luton, After Builders Cleaning Bedfordshire",
    "description": "Post-construction and renovation cleaning for homes and commercial refurbishments across Luton & Bedfordshire. Includes debris removal, dust removal, deep floor cleaning, window and glass cleaning and fixture clean-up.",
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
        "name": "After Builders Cleaning",
        "item": "https://primeonecleaning.co.uk/services/after-builders-cleaning",
      }
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When should I book this after building work finishes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As soon as your construction or renovation work is complete, ideally before you move back in or before handover to a tenant or buyer. Booking promptly means fine dust does not have time to settle deeper into surfaces, vents and flooring.",
        }
      },
      {
        "@type": "Question",
        "name": "Do you remove paint splashes and sticker residue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Removing paint spots, splashes and sticky label or sticker residue is all part of the detailed clean. We use the right products and techniques to lift these marks without damaging the surface underneath.",
        }
      },
      {
        "@type": "Question",
        "name": "Can you clean commercial renovation sites too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We handle post-construction cleaning for offices, shops, restaurants and other commercial spaces, not just homes. Whether it is a single unit or a larger refurbishment, we can scope the clean to suit.",
        }
      },
      {
        "@type": "Question",
        "name": "How is pricing worked out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing is based on the size of the property and the level of building work carried out. A light renovation will need less time than a full strip-out and rebuild. We provide a free, no-obligation quote upfront so you know the cost before we start.",
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

export default function AfterBuildersCleaningPage({ onNavigate }: ServicePageProps) {
  return (
    <div>
      <ServiceSchema />

      {/* */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              <HardHat className="h-4 w-4" />
              Post-Construction
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              After Builders Cleaning in Luton &amp; Bedfordshire
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Professional post-construction and renovation cleaning, dust and
              debris fully removed
            </p>
            <p className="mt-4 text-base text-slate-300">
              For ongoing maintenance after your refurbishment, explore our <button onClick={() => onNavigate("/services/commercial-cleaning")} className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline">commercial cleaning services</button> across Luton &amp; Bedfordshire.
            </p>
          </div>
        </div>
      </section>

      {/* */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            <p>
              When building work finishes, the real work of making a space
              livable often begins. Our after builders cleaning service tackles
              the dust, debris and residue left behind by construction and
              renovation projects, transforming a building site into a clean
              ready-to-use space. We handle everything from newly built homes to
              freshly renovated kitchens, extensions and full commercial
              refurbishments.
            </p>
            <p>
              Post-construction dust isn't like ordinary household dust. It's
              incredibly fine and gets everywhere, into air vents, behind
              radiators, on top of door frames, inside light fittings and deep
              into flooring and grout lines. Left unchecked, it continues to
              circulate every time a door opens or a vent kicks in, affecting
              air quality and settling back onto surfaces you've only just
              cleaned. That's why specialist cleaning after building work is so
              important: it removes the dust at its source rather than just
              pushing it around.
            </p>
            <p>
              Our after builders service covers three core areas.{" "}
              <strong className="text-[#0a1f44]">Post Construction Cleaning</strong>{" "}
              is for newly built or extended properties that need a full
              top-to-bottom clean before furniture or occupants move in.{" "}
              <strong className="text-[#0a1f44]">Renovation Cleaning</strong>{" "}
              covers spaces that have been remodelled, kitchens, bathrooms
              living areas, where dust, plaster and paint residue need clearing
              before the room can be used again. And{" "}
              <strong className="text-[#0a1f44]">Dust &amp; Debris Removal</strong>{" "}
              handles the heavier clearing work: bagging up rubble, offcuts
              packaging and leftover materials so the space is left clean and
              clear.
            </p>
            <p>
              The Prime One Cleaning team is experienced in handling heavy-duty
              cleans safely and efficiently. We use professional-grade equipment, HEPA-filtered vacuums, steam cleaners and specialist surface
              products, to lift fine construction dust without spreading it
              further. Our team works methodically, room by room, from ceiling to
              floor, so no area is missed. We're fully insured, trained in safe
              handling of post-construction waste, and used to working alongside
              contractors, developers and homeowners to tight deadlines.
            </p>
            <p>
              Whether it's a home renovation, a new-build handover or a
              commercial refurbishment, we tailor the scope to what's needed
              from a light dust-down to a full deep clean with floor and grout
              treatment. Every clean includes debris removal, dusting of all
              surfaces and fixtures, floor cleaning, window and glass residue
              removal, and a full wipe-down of kitchens, bathrooms and
              appliances. With transparent pricing and a free upfront quote, you
              know exactly what you're getting before we start. Get in touch to
              book your after builders clean and make your space truly
              move-in ready.
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
