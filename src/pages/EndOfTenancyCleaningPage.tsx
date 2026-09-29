import { useEffect } from "react";
import { KeyRound, Check, ChevronDown } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface ServicePageProps {
  onNavigate: (path: string) => void;
}

const faqs = [
  {
    q: "Will this guarantee I get my deposit back?",
    a: "Our end of tenancy clean is carried out to the standard letting agents and landlords expect, covering every area typically checked at inspection. While we can't guarantee the deposit return itself — that depends on the landlord or agent's final inspection — our thorough, checklist-based approach gives you the best possible chance of a full return.",
  },
  {
    q: "How long does an end of tenancy clean take?",
    a: "Typically between 3 and 6 hours depending on the size and condition of the property. A standard one-bedroom flat may take around 3 hours, while a larger family home could take a full day. We'll give you a clear time estimate when you book.",
  },
  {
    q: "Do you offer a re-clean guarantee?",
    a: "Yes. If your landlord or letting agent flags any missed areas within 48 hours of the clean, we'll return to put them right at no extra cost. We stand behind the quality of our work.",
  },
  {
    q: "Can letting agents book directly?",
    a: "Absolutely. We work with landlords and letting agents across Luton and Bedfordshire on a regular basis, and can set up recurring arrangements for multiple properties. Just get in touch to discuss your portfolio.",
  },
];

const included = [
  "Full kitchen deep clean including inside oven and appliances",
  "Bathroom descale and full sanitisation",
  "Inside all cupboards and wardrobes wiped down",
  "Skirting boards, light fittings and switches cleaned",
  "Carpet cleaning available as an add-on",
  "Window sills and internal glass cleaned",
];

function ServiceSchema() {
  useEffect(() => {
    const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "End of Tenancy Cleaning",
    "serviceType": "End of Tenancy Cleaning Luton, End of Tenancy Cleaning Bedfordshire",
    "description": "Thorough checklist-based end of tenancy cleaning for tenants, landlords and letting agents across Luton & Bedfordshire. Includes kitchen deep clean, bathroom descale, cupboards, skirting boards and more.",
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
        "addressLocality": "Luton",
        "addressRegion": "Bedfordshire",
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
        "item": "https://primeonecleaning.co.uk/#/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "End of Tenancy Cleaning",
        "item": "https://primeonecleaning.co.uk/#/services/end-of-tenancy-cleaning"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will this guarantee I get my deposit back?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our end of tenancy clean is carried out to the standard letting agents and landlords expect, covering every area typically checked at inspection. While we cannot guarantee the deposit return itself, our thorough, checklist-based approach gives you the best possible chance of a full return."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an end of tenancy clean take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically between 3 and 6 hours depending on the size and condition of the property. A standard one-bedroom flat may take around 3 hours, while a larger family home could take a full day. We will give you a clear time estimate when you book."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a re-clean guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If your landlord or letting agent flags any missed areas within 48 hours of the clean, we will return to put them right at no extra cost. We stand behind the quality of our work."
        }
      },
      {
        "@type": "Question",
        "name": "Can letting agents book directly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We work with landlords and letting agents across Luton and Bedfordshire on a regular basis, and can set up recurring arrangements for multiple properties. Just get in touch to discuss your portfolio."
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

export default function EndOfTenancyCleaningPage({ onNavigate }: ServicePageProps) {
  return (
    <div>
      <ServiceSchema />

      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/9462786/pexels-photo-9462786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              <KeyRound className="h-4 w-4" />
              Moving Out
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              End of Tenancy Cleaning in Luton &amp; Bedfordshire
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Deposit-back guaranteed cleaning for tenants, landlords and
              letting agents
            </p>
            <p>
              Need carpets cleaned too? We also offer professional <button onClick={() => onNavigate("/services/carpet-upholstery-cleaning")} className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline">carpet and upholstery cleaning</button> across Luton &amp; Bedfordshire.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              Moving out of a property is stressful enough without the worry of
              whether the clean will pass inspection. Our end of tenancy cleaning
              service is designed to take that pressure off entirely. We carry out
              a comprehensive, top-to-bottom clean of the entire property to the
              standard that letting agents and landlords expect — covering
              kitchens, bathrooms, living areas, bedrooms and every detail in
              between.
            </p>
            <p>
              Getting your full deposit back often hinges on the condition the
              property is left in. Landlords and agents look for limescale in
              bathrooms, grease in ovens, dust on skirting boards and marks on
              surfaces — the kind of things that are easy to miss but costly when
              flagged. A professional end of tenancy clean tackles all of these
              head-on, dramatically improving your chances of a full deposit
              return and avoiding unfair deductions.
            </p>
            <p>
              Our service is built for three groups. <strong className="text-[#0a1f44]">Tenants</strong> who
              want to hand the keys back with confidence and protect their
              deposit. <strong className="text-[#0a1f44]">Landlords</strong> who
              need a property turned around quickly and to a high standard for
              new tenants. And <strong className="text-[#0a1f44]">letting agents</strong> who
              want a reliable cleaning partner they can trust to deliver
              consistent results across multiple properties without having to
              chase or double-check.
            </p>
            <p>
              What sets Prime One Cleaning apart is our checklist-based approach.
              Every end of tenancy clean follows a detailed, room-by-room
              checklist so that nothing gets missed — from inside the oven and
              behind the fridge to skirting boards, light fittings and inside
              cupboards. Our team works through each item methodically, and the
              property isn't finished until every box is ticked. This means when
              the landlord or agent walks in for inspection, the property is
              presented to a standard that's hard to fault.
            </p>
            <p>
              We use professional-grade, eco-friendly products throughout, and
              our teams are fully trained, vetted and insured. Carpet cleaning is
              available as an add-on if the property needs it, and we can tailor
              the scope to match specific agent requirements. With our 48-hour
              re-clean guarantee, you have complete peace of mind — if anything is
              flagged after the clean, we come back and put it right. Book your
              end of tenancy clean with Prime One Cleaning and move on with
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
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

      {/* FAQ */}
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
