import { useEffect } from "react";
import { Sparkles, Check, ChevronDown } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface ServicePageProps {
  onNavigate: (path: string) => void;
}

const faqs = [
  {
    q: "What is the difference between a deep clean and a regular clean?",
    a: "A deep clean is a detailed top-to-bottom clean that reaches the areas a routine clean usually skips, including behind appliances, inside cupboards, high ledges, skirting boards and light fittings.",
  },
  {
    q: "Is a deep clean suitable before moving out?",
    a: "Yes, a deep clean is ideal when you are moving out. It suits end of tenancy situations perfectly, and we also offer a dedicated End of Tenancy Cleaning service for the full deposit-back checklist.",
  },
  {
    q: "Can carpets and sofas be included?",
    a: "Yes, carpet and upholstery cleaning can be added to your deep clean. Just let us know when booking and we will include it in your quote.",
  },
  {
    q: "How do I get a price?",
    a: "Simply contact us for a free, no-obligation quote based on the size of the property and the work needed. We will provide a clear, upfront price with no hidden surprises.",
  },
];

const included = [
  "Detailed top-to-bottom cleaning",
  "Ideal for end of tenancy",
  "Before and after renovation clean",
  "Carpet and upholstery cleaning",
  "Kitchen deep clean",
  "Bathroom deep clean",
  "Skirting boards, light fittings and window sills",
  "Eco-friendly products",
];

function ServiceSchema() {
  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Deep Cleaning",
        "serviceType": "Deep Cleaning Milton Keynes, Deep Cleaning Surrounding Areas",
        "description": "A detailed top-to-bottom deep cleaning service for homes and businesses in Milton Keynes & Surrounding Areas. Reaches the areas a routine clean skips.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Prime One Cleaning",
          "telephone": "07432 625688",
          "areaServed": ["Milton Keynes", "Buckinghamshire", "Bedfordshire"],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Milton Keynes",
            "addressRegion": "Buckinghamshire",
            "addressCountry": "GB",
          },
        },
        "areaServed": ["Milton Keynes", "Buckinghamshire", "Bedfordshire"],
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
            "name": "Deep Cleaning",
            "item": "https://primeonecleaning.co.uk/services/deep-cleaning",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between a deep clean and a regular clean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A deep clean is a detailed top-to-bottom clean that reaches the areas a routine clean usually skips, including behind appliances, inside cupboards, high ledges, skirting boards and light fittings.",
            },
          },
          {
            "@type": "Question",
            "name": "Is a deep clean suitable before moving out?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a deep clean is ideal when you are moving out. It suits end of tenancy situations perfectly, and we also offer a dedicated End of Tenancy Cleaning service for the full deposit-back checklist.",
            },
          },
          {
            "@type": "Question",
            "name": "Can carpets and sofas be included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, carpet and upholstery cleaning can be added to your deep clean. Just let us know when booking and we will include it in your quote.",
            },
          },
          {
            "@type": "Question",
            "name": "How do I get a price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply contact us for a free, no-obligation quote based on the size of the property and the work needed. We will provide a clear, upfront price with no hidden surprises.",
            },
          },
        ],
      },
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

export default function DeepCleaningPage({ onNavigate }: ServicePageProps) {
  return (
    <div>
      <ServiceSchema />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              <Sparkles className="h-4 w-4" />
              Fresh Start
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Deep Cleaning in Milton Keynes &amp; Surrounding Areas
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              A fresh start for every space. Detailed top-to-bottom cleaning for homes and businesses
            </p>
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-content space-y-6 text-lg leading-relaxed text-slate-700">
            <p>
              A deep clean is a detailed, top-to-bottom clean that reaches the
              areas a routine clean usually skips. While a regular clean keeps
              on top of everyday dirt and clutter, a deep clean goes further,
              tackling behind appliances, inside cupboards, high ledges,
              skirting boards, light fittings and window sills. It is the
              thorough reset your home or workplace needs when everyday
              cleaning is no longer enough.
            </p>
            <p>
              People book a deep clean at all kinds of moments. If you are
              moving in or out, a deep clean ensures the property is spotless
              from top to bottom. It is equally useful before or after a
              renovation, when dust and debris have settled in every corner.
              Many clients book one as a spring clean or after a long period
              without professional cleaning, giving their space a genuine
              fresh start. It is just as valuable for businesses that want a
              workplace to look its best for staff and visitors.
            </p>
            <p>
              Kitchens and bathrooms receive particular attention during a deep
              clean. In the kitchen we degrease worktops, splashbacks and
              appliances, descale taps and deep-clean sinks. In the bathroom
              we sanitise toilets, showers, baths and tiles, removing limescale
              and grime that builds up over time. Every surface is tackled
              methodically, leaving nothing overlooked. If you are moving out,
              you may also want to explore our dedicated{" "}
              <button
                onClick={() => onNavigate("/services/end-of-tenancy-cleaning")}
                className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline"
              >
                end of tenancy cleaning
              </button>{" "}
              service, and if your deep clean follows renovation work, our{" "}
              <button
                onClick={() => onNavigate("/services/after-builders-cleaning")}
                className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline"
              >
                after builders cleaning
              </button>{" "}
              service covers the full post-construction clear-up.
            </p>
            <p>
              Carpet and upholstery cleaning can be added to your deep clean,
              so your floors and soft furnishings get the same level of
              attention as the rest of your property. Our dedicated{" "}
              <button
                onClick={() => onNavigate("/services/carpet-upholstery-cleaning")}
                className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline"
              >
                carpet &amp; upholstery cleaning
              </button>{" "}
              service uses professional equipment to lift embedded dirt and
              refresh fabrics throughout your home or business.
            </p>
            <p>
              Every member of the Prime One Cleaning team is fully trained,
              insured and locally based, so you can feel confident having us
              in your property. We use professional, eco-friendly products that
              are tough on dirt but safe for your family, your pets and the
              environment, meaning a sparkling space never comes at the cost of
              harsh chemical residues. For regular upkeep after your deep
              clean, our{" "}
              <button
                onClick={() => onNavigate("/services/residential-cleaning")}
                className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline"
              >
                residential cleaning
              </button>{" "}
              service keeps everything to the same high standard week after
              week.
            </p>
            <p>
              Whether you need a one-off reset or a fresh start for your home
              or workplace, contact Prime One Cleaning today for a free,
              no-obligation quote tailored to your property and your needs.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-slate-50 py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a1f44]">What's Included</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ul className="space-y-4">
              {included.slice(0, 4).map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {included.slice(4).map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
