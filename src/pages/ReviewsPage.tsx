import { useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

function AggregateRatingSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Prime One Cleaning",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "100",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        { "@type": "Review", author: { "@type": "Person", name: "Sarah J." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, description: "Prime One Cleaning have been cleaning my home for over a year now. Always on time, always thorough, and my house has never looked better. Highly recommend!" },
        { "@type": "Review", author: { "@type": "Person", name: "Mark D." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, description: "We switched to Prime One for our office cleaning and the difference is night and day. Professional, reliable, and our workspace is always spotless." },
        { "@type": "Review", author: { "@type": "Person", name: "James P." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, description: "Booked an end of tenancy clean and got my full deposit back. The landlord even commented on how clean the place was. Brilliant work." },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

interface ReviewsPageProps {
  onNavigate: (path: string) => void;
}

interface Review {
  name: string;
  location: string;
  service: string;
  text: string;
}

const reviews: Review[] = [
  { name: "Sarah J.", location: "Luton", service: "Residential Cleaning", text: "Prime One Cleaning have been cleaning my home for over a year now. Always on time, always thorough, and my house has never looked better. Highly recommend!" },
  { name: "Mark D.", location: "Office Manager, Luton", service: "Commercial Cleaning", text: "We switched to Prime One for our office cleaning and the difference is night and day. Professional, reliable, and our workspace is always spotless." },
  { name: "Emily R.", location: "Homeowner, Bedford", service: "Residential Cleaning", text: "Fantastic service from start to finish. The team is friendly, trustworthy and does an incredible job every single visit." },
  { name: "James P.", location: "Dunstable", service: "End of Tenancy Cleaning", text: "Booked an end of tenancy clean and got my full deposit back. The landlord even commented on how clean the place was. Brilliant work." },
  { name: "Aisha K.", location: "Leighton Buzzard", service: "Carpet & Upholstery Cleaning", text: "My carpets look brand new after the deep clean. The team was professional and took great care of my furniture. Will definitely use again." },
  { name: "Tom W.", location: "Houghton Regis", service: "After Builders Cleaning", text: "After our extension was finished the dust was everywhere. Prime One came in and made the whole house livable again. Fast, efficient and thorough." },
  { name: "Priya N.", location: "Flitwick", service: "Residential Cleaning", text: "I was nervous about having cleaners in my home, but the team put me at ease straight away. Respectful, detailed and genuinely lovely people." },
  { name: "Gareth M.", location: "Bedford", service: "Commercial Cleaning", text: "We manage several retail units and Prime One handles all of them. Consistent quality across every site and never miss a schedule. Top class." },
  { name: "Lisa F.", location: "Luton", service: "End of Tenancy Cleaning", text: "Needed a last-minute end of tenancy clean and they fit me in the same week. The flat was sparkling and the agents were impressed. Thank you!" },
];

export default function ReviewsPage({ onNavigate }: ReviewsPageProps) {
  return (
    <div>
      <AggregateRatingSchema />
      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              <Star className="h-4 w-4 fill-[#60a5fa] text-[#60a5fa]" />
              5.0 Rated
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Rated 5.0 from 100+ reviews on Google
            </p>
          </div>
        </div>
      </section>

      {/* Google review summary */}
      <section className="bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-200">
                <span className="text-3xl font-bold text-[#4285F4]">G</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-[#0a1f44]">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#60a5fa] text-[#60a5fa]" />
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-sm text-slate-600">Based on 100+ Google Reviews</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Prime+One+Cleaning+Luton"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#3b82f6] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#2563eb]"
            >
              Leave Us a Review
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#60a5fa] text-[#60a5fa]" />
                  ))}
                </div>
                <p className="flex-1 text-slate-600">"{review.text}"</p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-bold text-[#0a1f44]">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.location}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#3b82f6]">
                    {review.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} variant="light" />
    </div>
  );
}
