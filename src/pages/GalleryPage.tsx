import { Camera } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface GalleryPageProps {
  onNavigate: (path: string) => void;
}

export default function GalleryPage({ onNavigate }: GalleryPageProps) {
  return (
    <div>
      {/* Band-style hero */}
      <section className="relative flex items-center overflow-hidden bg-[#0a1f44] py-10 sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44] via-[#0a1f44] to-[#102a5c]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              <Camera className="h-4 w-4" />
              Portfolio
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Our Work
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              See the Prime One Cleaning difference across homes and businesses
              in Luton &amp; Bedfordshire
            </p>
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
            <Camera className="mx-auto h-12 w-12 text-slate-300" />
            <h2 className="mt-4 text-2xl font-bold text-[#0a1f44]">
              Photos Coming Soon
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              We're putting together a portfolio of our cleaning work across
              Luton &amp; Bedfordshire. Check back shortly to see real photos
              of our residential, commercial and specialist cleaning results.
            </p>
          </div>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} variant="light" />
    </div>
  );
}
