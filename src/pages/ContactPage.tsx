import { useState } from "react";
import { Phone, Clock, MapPin, Send } from "lucide-react";

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

const services = [
  "Residential Cleaning",
  "End of Tenancy Cleaning",
  "After Builders Cleaning",
  "Commercial Cleaning",
  "Carpet & Upholstery Cleaning",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

const BASIN_ENDPOINT = "https://usebasin.com/f/1647597a42fb";

export default function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const formData = new FormData(form);
      const response = await fetch(BASIN_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero banner */}
      <section className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1f44] via-[#102a5c] to-[#0a1f44] sm:h-72">
        <div className="relative text-center px-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Get In Touch</h1>
          <p className="mt-4 text-lg text-slate-300 sm:text-xl">
            Request your free, no-obligation quote today — we reply fast
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Contact form */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0a1f44]">Send Us a Message</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill in the form below and we'll get back to you as soon as possible.
              </p>

              {status === "success" ? (
                <div className="mt-6 rounded-lg bg-green-50 border border-green-200 p-6 text-center">
                  <p className="text-green-800 font-semibold">
                    Thank you! Your message has been sent. We'll be in touch shortly.
                  </p>
                </div>
              ) : status === "error" ? (
                <div className="mt-6 rounded-lg bg-red-50 border border-red-200 p-6 text-center">
                  <p className="text-red-800 font-semibold">
                    Sorry, something went wrong. Please try again or call us on 07512 345 678.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  action={BASIN_ENDPOINT}
                  method="POST"
                  className="mt-6 space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0a1f44]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#0a1f44]">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="mt-1 block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0a1f44]">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#0a1f44]">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="mt-1 block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0a1f44]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-1 block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#3b82f6] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send className="h-5 w-5" />
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact details */}
            <div className="flex flex-col justify-start gap-8">
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#0a1f44]">Contact Details</h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a1f44]">
                      <Phone className="h-6 w-6 text-[#60a5fa]" />
                    </span>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <a href="tel:07512345678" className="text-lg font-semibold text-[#0a1f44] hover:text-[#3b82f6]">
                        07512 345 678
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a1f44]">
                      <Clock className="h-6 w-6 text-[#60a5fa]" />
                    </span>
                    <div>
                      <p className="text-sm text-slate-500">Hours</p>
                      <p className="text-lg font-semibold text-[#0a1f44]">Mon–Sat 8:00–18:00</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a1f44]">
                      <MapPin className="h-6 w-6 text-[#60a5fa]" />
                    </span>
                    <div>
                      <p className="text-sm text-slate-500">Service Area</p>
                      <p className="text-lg font-semibold text-[#0a1f44]">
                        Proudly serving Luton &amp; Bedfordshire
                      </p>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="Prime One Cleaning service area — Milton Keynes"
              src="https://www.google.com/maps?q=Milton%20Keynes,MK9%202BQ,UK&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* LocalBusiness schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Prime One Cleaning",
            legalName: "Prime One Cleaning Ltd",
            description: "Professional cleaning services for homes, offices and commercial spaces in Luton & Bedfordshire.",
            telephone: "07512345678",
            url: "https://primeonecleaning.co.uk",
            image: "https://primeonecleaning.co.uk/WhatsApp_Image_2026-07-30_at_13.16.18.jpeg",
            logo: "https://primeonecleaning.co.uk/WhatsApp_Image_2026-07-30_at_13.16.18.jpeg",
            priceRange: "££",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4 Manhattan House, 401 Witan Gate",
              addressLocality: "Milton Keynes",
              addressRegion: "Buckinghamshire",
              postalCode: "MK9 2BQ",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "52.0406",
              longitude: "-0.7554",
            },
            hasMap: "https://www.google.com/maps?q=Milton+Keynes,MK9+2BQ,UK",
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
              "Bedfordshire",
            ],
            sameAs: [],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "18:00",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
