import { useEffect } from "react";
import { Sparkles, Check, ChevronDown } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface ServicePageProps {
  onNavigate: (path: string) => void;
}

const faqs = [
  {
    q: "What is the difference between a deep clean and a regular clean?",
    a: "A deep clean is a detailed top-to-bottom clean that reaches areas a routine clean usually skips, such as behind appliances, inside cupboards, skirting boards, light fittings and hard-to-reach corners. A regular clean maintains surface-level cleanliness, while a deep clean tackles the built-up grime and dust that accumulates over time.",
  },
  {
    q: "Is a deep clean suitable before moving out?",
    a: "Yes, a deep clean suits end of tenancy situations perfectly. We also offer a dedicated End of Tenancy Cleaning service with a checklist-based approach designed to meet letting agent and landlord standards.",
  },
  {
    q: "Can carpets and sofas be included?",
    a: "Yes, carpet and upholstery cleaning can be added to your deep clean. Our professional treatment lifts embedded dirt and refreshes fabrics throughout your home or business.",
  },
  {
    q: "How do I get a price?",
    a: "We offer a free, no-obligation quote based on the size of the property and the work needed. Just get in touch and we'll provide a clear, upfront cost before any work begins.",
  }
];

const included = [
  "Detailed top-to-bottom cleaning",
  "Ideal for end of tenancy",
  "Before and after renovation clean",
  "Carpet and upholstery cleaning",
  "Kitchen deep clean",
  "Bathroom deep clean",
  "Skirting boards, light fittings and window sills",
  "Eco-friendly products"
];

function ServiceSchema() {
  useEffect(() => {
    const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Deep Cleaning",
    "serviceType": "Deep Cleaning Milton Keynes, Deep Cleaning Surrounding Areas",
    "description": "Detailed top-to-bottom deep cleaning for homes and businesses across Milton Keynes & Surrounding Areas. Includes kitchen deep clean, bathroom deep clean, skirting boards, light fittings and eco-friendly products.",
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
      }
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
          "text": "A deep clean is a detailed top-to-bottom clean that reaches areas a routine clean usually skips, such as behind appliances, inside cupboards, skirting boards, light fittings and hard-to-reach corners. A regular clean maintains surface-level cleanliness, while a deep clean tackles the built-up grime and dust that accumulates over time.",
        }
      },
      {
        "@type": "Question",
        "name": "Is a deep clean suitable before moving out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a deep clean suits end of tenancy situations perfectly. We also offer a dedicated End of Tenancy Cleaning service with a checklist-based approach designed to meet letting agent and landlord standards.",
        }
      },
      {
        "@type": "Question",
        "name": "Can carpets and sofas be included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, carpet and upholstery cleaning can be added to your deep clean. Our professional treatment lifts embedded dirt and refreshes fabrics throughout your home or business.",
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a free, no-obligation quote based on the size of the property and the work needed. Just get in touch and we will provide a clear, upfront cost before any work begins.",
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

export default function DeepCleaningPage({ onNavigate }: ServicePageProps) {
  return (
    <div>
      <ServiceSchema />

      {/* */}
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
              A fresh start for every space. Detailed top-to-bottom cleaning for
              homes and businesses
            </p>
            <p className="mt-4 text-base text-slate-300">
              Looking for regular home cleaning? Explore our <button onClick={() => onNavigate("/services/residential-cleaning")} className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline">residential cleaning service</button> across Milton Keynes &amp; Surrounding Areas.
            </p>
          </div>
        </div>
      </section>

      {/* */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            <p>
              A deep clean is a thorough, top-to-bottom clean that goes well
              beyond what a regular cleaning routine covers. While a standard
              clean keeps on top of visible surfaces, a deep clean reaches the
              areas that are usually skipped, behind appliances, inside
              cupboards, on top of door frames, inside light fittings, along
              skirting boards and into the corners where dust and grime quietly
              build up. It is the kind of clean that resets a space entirely,
              leaving it noticeably fresher, brighter and more hygienic.
            </p>
            <p>
              People book a deep clean for all sorts of reasons. If you are
              moving into a new home, it gives you a clean slate before you
              unpack. If you are moving out, a deep clean helps leave the
              property in the best possible condition, and pairs naturally with
              our <button onClick={() => onNavigate("/services/end-of-tenancy-cleaning")} className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline">End of Tenancy Cleaning</button> service.
              It is ideal before or after renovation work, complementing our{" "}
              <button onClick={() => onNavigate("/services/after-builders-cleaning")} className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline">After Builders Cleaning</button>{" "}
              service, and it is the perfect choice for a spring clean or after
              a long period without professional cleaning. For businesses, a
              deep clean gives the workplace a fresh start, improving hygiene
              and presentation for staff and visitors alike.
            </p>
            <p>
              Kitchens and bathrooms receive particular attention during a deep
              clean. In the kitchen we tackle grease on units and worktops,
              descale taps and sinks, and clean inside and behind appliances
              where dirt accumulates. In the bathroom we remove limescale from
              shower screens, tiles and fittings, sanitise all surfaces, and
              get into the grout lines that everyday cleaning leaves behind.
              Every room is treated with the same methodical, top-to-bottom
              approach so nothing gets missed.
            </p>
            <p>
              Carpet and upholstery cleaning can be added to your deep clean,
              using our professional <button onClick={() => onNavigate("/services/carpet-upholstery-cleaning")} className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline">Carpet &amp; Upholstery Cleaning</button>{" "}
              service to lift embedded dirt and refresh fabrics throughout the
              property. Whether it is a one-off fresh start or part of a wider
              clean, it can be tailored to exactly what your space needs.
            </p>
            <p>
              Our cleaners are fully trained, insured and locally based, using
              professional, eco-friendly products that are tough on grime but
              safe for your family, pets and the environment. We work
              methodically, room by room, so every area gets the attention it
              deserves. Every deep clean is tailored to the size and condition
              of the property, and we offer a free, no-obligation quote so you
              know exactly what to expect before we begin. Get in touch to book
              your deep clean with Prime One Cleaning and give your space the
              fresh start it deserves.
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
