import { useEffect } from "react";
import { Building2, Check, ChevronDown } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface ServicePageProps {
  onNavigate: (path: string) => void;
}

const faqs = [
  {
    q: "Can cleaning be scheduled outside business hours?",
    a: "Yes. We offer early morning, evening and weekend slots so your premises are cleaned at the times that least disrupt your operations. We'll agree a schedule that works around your opening hours and staff.",
  },
  {
    q: "Do you offer ongoing contracts or one-off cleans?",
    a: "Both. We can set up flexible daily, weekly or fortnightly contracts for ongoing maintenance, or carry out one-off deep cleans for things like end-of-lease, post-refurbishment or seasonal refreshes. There's no obligation to commit to a long-term arrangement.",
  },
  {
    q: "Is your team DBS-checked and insured?",
    a: "Yes. Every member of our commercial cleaning team is DBS-checked, fully vetted, trained and insured. We understand that trust and discretion are essential when working in business premises, and we hold ourselves to the highest safeguarding standards.",
  },
  {
    q: "Do you supply your own cleaning equipment and products?",
    a: "Yes. We bring all our own professional, eco-friendly cleaning equipment and supplies, so there's nothing for you to source or store. If you have specific products you'd prefer us to use — for example in a clinical setting — we're happy to accommodate.",
  },
];

const included = [
  "Daily, weekly or custom scheduled cleaning",
  "Reception and communal area cleaning",
  "Washroom sanitisation and restocking",
  "Floor cleaning and maintenance",
  "Waste removal",
  "Desk and surface wiping",
];

function ServiceSchema() {
  useEffect(() => {
    const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Cleaning",
    "serviceType": "Commercial Cleaning Luton, Commercial Cleaning Bedfordshire",
    "description": "Reliable, flexible commercial cleaning for offices, clinics, shops, retail, gyms and salons across Luton & Bedfordshire. Includes scheduled cleaning, washroom sanitisation, floor maintenance and waste removal.",
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
        "name": "Commercial Cleaning",
        "item": "https://primeonecleaning.co.uk/#/services/commercial-cleaning"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can cleaning be scheduled outside business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer early morning, evening and weekend slots so your premises are cleaned at the times that least disrupt your operations. We will agree a schedule that works around your opening hours and staff."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing contracts or one-off cleans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both. We can set up flexible daily, weekly or fortnightly contracts for ongoing maintenance, or carry out one-off deep cleans for things like end-of-lease, post-refurbishment or seasonal refreshes. There is no obligation to commit to a long-term arrangement."
        }
      },
      {
        "@type": "Question",
        "name": "Is your team DBS-checked and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every member of our commercial cleaning team is DBS-checked, fully vetted, trained and insured. We understand that trust and discretion are essential when working in business premises, and we hold ourselves to the highest safeguarding standards."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply your own cleaning equipment and products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We bring all our own professional, eco-friendly cleaning equipment and supplies, so there is nothing for you to source or store. If you have specific products you would prefer us to use, for example in a clinical setting, we are happy to accommodate."
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

export default function CommercialCleaningPage({ onNavigate }: ServicePageProps) {
  return (
    <div>
      <ServiceSchema />

      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              <Building2 className="h-4 w-4" />
              Business Premises
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Commercial Cleaning in Luton &amp; Bedfordshire
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Reliable, flexible cleaning for offices, clinics, retail and gyms
            </p>
            <p>
              We also provide homes with the same high standard through our <button onClick={() => onNavigate("/services/residential-cleaning")} className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline">residential cleaning services</button> across Luton &amp; Bedfordshire.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              A clean premises isn't just about appearances — it's about the
              impression you make on customers, the wellbeing of your staff and
              the smooth day-to-day running of your business. Our commercial
              cleaning service keeps offices, clinics, shops, gyms and salons
              across Luton and Bedfordshire spotless, hygienic and welcoming,
              with flexible arrangements built around how you operate.
            </p>
            <p>
              What sets commercial cleaning apart from domestic work is the
              need for consistency, reliability and discretion. Businesses
              across Luton and Bedfordshire trust Prime One Cleaning because we
              deliver on all three. We schedule cleaning around your business
              hours — early mornings, evenings or weekends — so your team and
              customers are never disrupted. Our staff are uniformed, vetted and
              DBS-checked, and we assign a consistent cleaning team to your
              premises wherever possible, so the people looking after your
              space understand exactly how you like things done.
            </p>
            <p>
              Quality is maintained through clear cleaning schedules and regular
              checks, not left to chance. Every visit follows a tailored
              checklist for your premises, covering reception areas, workspaces,
              washrooms, kitchens, communal zones and floors. We use
              professional-grade, eco-friendly products throughout, and bring
              all our own equipment and supplies — so there's nothing for you to
              manage or store. If your needs change — extra visits during a busy
              period, a one-off deep clean, or a shift in opening hours — we
              adapt quickly and without fuss.
            </p>
            <p>
              Our commercial cleaning covers four key sectors.{" "}
              <strong className="text-[#0a1f44]">Offices</strong> benefit from
              desk and surface wiping, washroom sanitisation, kitchen cleaning
              and floor maintenance that keeps workspaces productive and
              professional. <strong className="text-[#0a1f44]">Clinics &amp; Surgeries</strong>{" "}
              receive a higher standard of hygiene focus, with sanitisation of
              touchpoints, waiting areas and treatment surfaces to meet health
              expectations. <strong className="text-[#0a1f44]">Shops &amp; Retail</strong>{" "}
              spaces are kept customer-ready, with floors, fitting rooms,
              displays and staff areas maintained throughout trading. And{" "}
              <strong className="text-[#0a1f44]">Gyms &amp; Salons</strong> get
              the deep, frequent attention high-traffic, high-hygiene
              environments demand — from equipment wipe-downs to changing room
              and shower sanitisation.
            </p>
            <p>
              Whether you need a daily visit, a weekly refresh or a one-off deep
              clean, we'll build a schedule that fits. Our team is fully insured,
              trained and reliable, and we work with everyone from single-unit
              independents to multi-site operators. With transparent pricing and
              a free, no-obligation quote, getting started is straightforward —
              just get in touch and we'll put together a cleaning plan that works
              for your premises and your budget.
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
