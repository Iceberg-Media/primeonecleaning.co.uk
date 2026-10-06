import { ArrowRight } from "lucide-react";
import TrustBar from "@/components/TrustBar";
import CtaBlock from "@/components/CtaBlock";

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-[#0a1f44]/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              About Prime One Cleaning
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Trusted cleaning professionals serving Luton &amp; Bedfordshire
            </p>
          </div>
        </div>
      </section>

      {/* Story + image */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1f44] sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Prime One Cleaning was founded on a simple belief: that everyone
                deserves a spotless, healthy space without the stress of doing it
                themselves. What began as a small local team in Luton has grown
                into a trusted cleaning company serving homes, offices and
                commercial spaces across Bedfordshire. We built our reputation
                on three things — trust, high standards and an unwavering
                attention to detail. Every member of our team is fully trained,
                vetted and insured, and we use only eco-friendly products that
                are safe for your family, your staff and the environment. Whether
                you need a regular domestic clean, a one-off deep clean or a
                reliable commercial cleaning partner, we tailor every service to
                fit your space and your schedule. We don't just clean — we care
                for the spaces where you live and work, so you can focus on what
                matters most.
              </p>
              <button
                onClick={() => onNavigate("/contact")}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#3b82f6] px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#2563eb] hover:shadow-lg hover:shadow-blue-500/30"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <div className="flex h-full min-h-[24rem] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Prime One Cleaning team at work in a Luton home"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-[#0a1f44] px-6 py-4 shadow-xl ring-1 ring-black/5 sm:block">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-slate-300">Satisfaction guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <CtaBlock onNavigate={onNavigate} variant="light" />
    </div>
  );
}
