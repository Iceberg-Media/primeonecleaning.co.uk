import { useEffect } from "react";
import { Sparkles, Check, ChevronDown } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface ServicePageProps {
  onNavigate: (path: string) => void;
}

const faqs = [
  {
    q: "Can you clean between guest check-out and check-in?",
    a: "Yes, scheduling is built around turnovers. Contact us with your booking times.",
  },
  {
    q: "Do you change the linen?",
    a: "Linen change is available as an optional extra.",
  },
  {
    q: "Do I need to provide cleaning products and equipment?",
    a: "No, we bring our own, fully equipped.",
  },
  {
    q: "How do I get a price?",
    a: "Free, no-obligation quote based on the property size and how often you need us.",
  },
];

const included = [
  "Fast turnaround cleans between guests",
  "High standards for guest-ready presentation",
  "Linen change (optional)",
  "Fully equipped service",
  "Kitchen and bathroom clean",
  "Bedrooms, living areas and floors",
  "Flexible scheduling around bookings",
  "Eco-friendly products",
];

function ServiceSchema() {
  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Airbnb & Short-Let Cleaning",
        "serviceType": "Airbnb & Short-Let Cleaning Milton Keynes, Short-Let Cleaning Surrounding Areas",
        "description": "Fast turnaround cleaning for Airbnb hosts, serviced accommodation, holiday lets and property managers in Milton Keynes & Surrounding Areas.",
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
            "name": "Airbnb & Short-Let Cleaning",
            "item": "https://primeonecleaning.co.uk/services/airbnb-short-let-cleaning",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you clean between guest check-out and check-in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, scheduling is built around turnovers. Contact us with your booking times.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you change the linen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Linen change is available as an optional extra.",
            },
          },
          {
            "@type": "Question",
            "name": "Do I need to provide cleaning products and equipment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, we bring our own, fully equipped.",
            },
          },
          {
            "@type": "Question",
            "name": "How do I get a price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Free, no-obligation quote based on the property size and how often you need us.",
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

export default function AirbnbShortLetCleaningPage({ onNavigate }: ServicePageProps) {
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
              Short-Let Hosts
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Airbnb &amp; Short-Let Cleaning in Milton Keynes &amp; Surrounding Areas
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Immaculate homes, happier guests. Fast turnaround cleans for hosts and property managers
            </p>
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-content space-y-6 text-lg leading-relaxed text-slate-700">
            <p>
              A consistently clean property is one of the biggest factors behind
              five-star guest reviews and repeat bookings. When guests walk into
              a spotless home they feel valued, they leave better reviews, and
              your listing climbs in search results. On the other hand, even a
              small detail missed between stays can lead to a complaint that
              costs you future reservations. Professional short-let cleaning
              takes that pressure off your shoulders and makes sure every
              arrival feels like the first.
            </p>
            <p>
              Our cleaning is built around guest turnovers. Whether you are an
              Airbnb host running a single property or a property manager
              looking after several, we make sure each home is presented to a
              guest-ready standard every time. The service suits Airbnb hosts,
              serviced accommodation, holiday lets and property managers across
              Milton Keynes and the surrounding areas. We understand that the
              gap between check-out and check-in is tight, so our scheduling is
              designed to fit around your booking times.
            </p>
            <p>
              We operate a fully equipped service, meaning the team brings its
              own professional equipment and eco-friendly products to every
              clean. You do not need to supply anything or keep a cupboard
              stocked for us. Our eco-friendly products are tough on dirt and
              grime but safe for your guests and the environment, so there are
              no harsh chemical residues left behind. Every member of the team
              is trained, insured and locally based, giving you peace of mind
              that your property is in reliable hands.
            </p>
            <p>
              Kitchens and bathrooms receive close attention, as these are the
              spaces guests notice most. Bedrooms, living areas and floors are
              thoroughly cleaned and tidied so the whole property looks its
              best in photos and in person. If a guest has left the property in
              a particularly poor state, a{" "}
              <button
                onClick={() => onNavigate("/services/deep-cleaning")}
                className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline"
              >
                deep clean
              </button>{" "}
              can be arranged to bring it back to standard. For hosts managing
              multiple units or short-let properties used for business stays,
              our{" "}
              <button
                onClick={() => onNavigate("/services/commercial-cleaning")}
                className="font-semibold text-[#3b82f6] hover:text-[#2563eb] underline"
              >
                commercial cleaning
              </button>{" "}
              service offers the same reliable approach at scale.
            </p>
            <p>
              Flexible scheduling means we can work around your check-out and
              check-in times, helping you keep turnovers smooth and stress-free.
              Linen change is available as an optional extra, so fresh bedding
              is ready for every new arrival. Whether you need us after every
              guest or on a schedule that fits your calendar, we adapt to how
              you run your property.
            </p>
            <p>
              Contact Prime One Cleaning today for a free, no-obligation quote
              tailored to your property and your letting schedule.
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
