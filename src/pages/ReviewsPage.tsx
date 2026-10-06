import { ArrowRight } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface ReviewsPageProps {
  onNavigate: (path: string) => void;
}

export default function ReviewsPage({ onNavigate }: ReviewsPageProps) {
  return (
    <div>
      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44] via-[#0a1f44] to-[#102a5c]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Customer Reviews
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              We value feedback from every client we work with
            </p>
          </div>
        </div>
      </section>

      {/* Review invitation */}
      <section className="bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-[#0a1f44]">
              Have You Used Our Services?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We're always working to improve, and your feedback helps us do
              that. If Prime One Cleaning has cleaned your home or business,
              we'd love to hear from you.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Prime+One+Cleaning+Milton+Keynes"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#3b82f6] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#2563eb]"
            >
              Leave Us a Review
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} variant="light" />
    </div>
  );
}
