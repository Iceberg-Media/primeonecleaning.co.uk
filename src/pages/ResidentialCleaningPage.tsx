import { useEffect } from "react";
import { Home, Check, ChevronDown, Phone, ArrowRight } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface ServicePageProps {
  onNavigate: (path: string) => void;
}

const faqs = [
  {
    q: "How often can I book a clean?",
    a: "We offer flexible scheduling to suit your needs — weekly, fortnightly, monthly or as a one-off clean. You can change your frequency at any time, and there's no long-term contract tying you in.",
  },
  {
    q: "Do I need to provide cleaning products?",
    a: "No. We bring all our own professional, eco-friendly cleaning supplies and equipment, so you don't need to worry about having anything ready. If you prefer us to use specific products you already have, just let us know.",
  },
  {
    q: "Is your team insured?",
    a: "Yes. Every member of our team is fully insured, trained and vetted before they join us. We take trust and safety seriously, so you can feel confident having us in your home.",
  },
  {
    q: "How do I get a price?",
    a: "Simply contact us for a free, no-obligation quote. We'll ask a few questions about your home size and requirements, then provide a clear, upfront price with no hidden surprises.",
  },
];

const included = [
  "Dusting all surfaces, shelves & skirting boards",
  "Vacuuming carpets and mopping hard floors",
  "Kitchen cleaning — worktops, sinks, appliances & splashbacks",
  "Bathroom cleaning — toilets, sinks, showers & tiles sanitised",
  "Bedroom tidying — bed-making and surface dusting",
  "General tidying and waste removal",
];

const addOns = [
  "Ironing service",
  "Inside oven cleaning",
  "Inside fridge cleaning",
];

function ServiceSchema() {
  useEffect(() => {
    const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Cleaning",
    "serviceType": "Residential Cleaning Luton, Residential Cleaning Bedfordshire",
    "description": "Reliable, thorough home cleaning tailored to your schedule. Regular, deep, one-off and spring cleaning for homes across Luton & Bedfordshire.",
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
        "addressCountry": "GB"
      }
    },
    "areaServed": [
      "Luton",
      "Bedfordshire"
    ]
  },
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
        "name": "Services",
        "item": "https://primeonecleaning.co.uk/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Residential Cleaning",
        "item": "https://primeonecleaning.co.uk/services/residential-cleaning"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often can I book a clean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible scheduling to suit your needs. Weekly, fortnightly, monthly or as a one-off clean. You can change your frequency at any time, and there is no long-term contract tying you in."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide cleaning products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We bring all our own professional, eco-friendly cleaning supplies and equipment, so you do not need to worry about having anything ready. If you prefer us to use specific products you already have, just let us know."
        }
      },
      {
        "@type": "Question",
        "name": "Is your team insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every member of our team is fully insured, trained and vetted before they join us. We take trust and safety seriously, so you can feel confident having us in your home."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply contact us for a free, no-obligation quote. We will ask a few questions about your home size and requirements, then provide a clear, upfront price with no hidden surprises."
        }
      }
    ]
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

export default function ResidentialCleaningPage({ onNavigate }: ServicePageProps) {
  return (
    <div>
      <ServiceSchema />

      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              <Home className="h-4 w-4" />
              Home Cleaning
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Residential Cleaning in Luton &amp; Bedfordshire
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Reliable, thorough home cleaning tailored to your schedule
            </p>
            <p className="mt-4 text-base text-slate-300"> are moving out, we also offer a thorough <button onClick={() => onNavigate("/services/end-of-tenancy-cleaning")} className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline">end of tenancy cleaning</button> across Luton &amp; Bedfordshire.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-content space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              Keeping a home clean shouldn't feel like a second job. At Prime One
              Cleaning, we provide professional residential cleaning across Luton
              and Bedfordshire designed to give you back your time without
              compromising on standards. Whether you need a regular weekly clean
              to stay on top of things, a deep clean to tackle every corner, a
              one-off clean for a special occasion, or a thorough spring clean to
              refresh your home, we tailor every visit to exactly what you need.
            </p>
            <p>
              Our residential cleaning covers four core services. <strong className="text-[#0a1f44]">Regular Cleaning</strong>{" "}
              keeps your home consistently spotless with scheduled visits — weekly,
              fortnightly or monthly. <strong className="text-[#0a1f44]">Deep Cleaning</strong> goes
              beyond the surface, targeting areas that often get overlooked like
              behind appliances, inside cupboards and high ledges. <strong className="text-[#0a1f44]">One-Off Cleaning</strong>{" "}
              is perfect for when you need a thorough clean for a specific event,
              before guests arrive, or after a busy period. And our{" "}
              <strong className="text-[#0a1f44]">Spring Cleaning</strong> service
              gives your entire home a fresh, top-to-bottom reset whenever you need
              it most.
            </p>
            <p>
              Homeowners across Luton and Bedfordshire choose Prime One Cleaning
              because we're dependable, detail-orientated and genuinely care about
              the results. We don't cut corners — we clean them. Every member of
              our team is fully trained, vetted and insured, so you can feel
              completely at ease having us in your home. We also use eco-friendly
              cleaning products that are tough on dirt but safe for your family,
              your pets and the environment, meaning a sparkling home never comes
              at the cost of harsh chemical residues.
            </p>
            <p>
              A typical residential clean includes dusting all surfaces and
              skirting boards, vacuuming carpets and mopping hard floors, a full
              kitchen clean covering worktops, sinks and appliances, and a
              sanitised bathroom clean of toilets, sinks, showers and tiles. We
              also tidy bedrooms, make beds and carry out general tidying
              throughout. You can add optional extras like ironing, inside-oven
              cleaning or inside-fridge cleaning whenever you need them — just let
              us know when booking.
            </p>
            <p>
              With flexible scheduling, transparent pricing and a team that treats
              your home with respect, Prime One Cleaning takes the hassle out of
              keeping a beautiful, healthy living space. Get in touch today for a
              free, no-obligation quote tailored to your home and your routine.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-slate-50 py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1f44]">What's Included</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-[#0a1f44]">Optional Add-Ons</h3>
              <p className="mt-2 text-sm text-slate-500">
                Available on request — just ask when booking.
              </p>
              <ul className="mt-4 space-y-3">
                {addOns.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0a1f44]">
                      <Check className="h-4 w-4 text-[#60a5fa]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#0a1f44]">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-[#3b82f6] hover:bg-slate-100"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[#0a1f44]">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#3b82f6] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} variant="light" />
    </div>
  );
}
