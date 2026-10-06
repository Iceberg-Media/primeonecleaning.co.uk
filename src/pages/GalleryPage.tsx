import { useState, useEffect } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import CtaBlock from "@/components/CtaBlock";

interface GalleryPageProps {
  onNavigate: (path: string) => void;
}

type Category = "All" | "Residential" | "Commercial" | "Carpet & Upholstery" | "After Builders";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
}

const images: GalleryImage[] = [
  { src: "https://images.pexels.com/photos/12277201/pexels-photo-12277201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Cleaned modern living room with beige sofa and plant in a Luton home", category: "Residential" },
  { src: "https://images.pexels.com/photos/12277020/pexels-photo-12277020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Freshly cleaned minimalist living room with wooden console in Bedfordshire", category: "Residential" },
  { src: "https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Bright empty modern room with cleaned hardwood floors in Luton", category: "Residential" },
  { src: "https://images.pexels.com/photos/5998056/pexels-photo-5998056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Contemporary living room with sofa and armchairs after a deep clean in Bedfordshire", category: "Residential" },
  { src: "https://images.pexels.com/photos/1128207/pexels-photo-1128207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Sleek office desk with laptop after commercial cleaning in Luton", category: "Commercial" },
  { src: "https://images.pexels.com/photos/36123565/pexels-photo-36123565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Minimalistic workspace with laptop after office cleaning in Bedfordshire", category: "Commercial" },
  { src: "https://images.pexels.com/photos/10567360/pexels-photo-10567360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Clean organized home office desk after commercial cleaning in Luton", category: "Commercial" },
  { src: "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Carpet cleaning vacuum with water filtration in a Luton home", category: "Carpet & Upholstery" },
  { src: "https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Carpet cleaning vacuum on patterned carpet in a sunlit Bedfordshire room", category: "Carpet & Upholstery" },
  { src: "https://images.pexels.com/photos/9462139/pexels-photo-9462139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Red carpet cleaning vacuum in a stylish Luton home", category: "Carpet & Upholstery" },
  { src: "https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Worker sanding ceiling during renovation in Luton before after builders cleaning", category: "After Builders" },
  { src: "https://images.pexels.com/photos/6474305/pexels-photo-6474305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Worker painting wall with spray gun in Bedfordshire before post-construction cleaning", category: "After Builders" },
  { src: "https://images.pexels.com/photos/6474339/pexels-photo-6474339.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Painter in protective suit preparing for renovation in Luton before after builders clean", category: "After Builders" },
];

const filters: Category[] = ["All", "Residential", "Commercial", "Carpet & Upholstery", "After Builders"];

export default function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredImages.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <div>
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

      {/* Gallery */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  activeFilter === filter
                    ? "bg-[#0a1f44] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((img, index) => (
              <button
                key={img.src + index}
                onClick={() => setLightboxIndex(index)}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0a1f44]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="p-5 text-left">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#60a5fa]">
                      {img.category}
                    </span>
                    <p className="mt-1 text-sm text-white">{img.alt}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock onNavigate={onNavigate} variant="light" />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
              );
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <div
            className="flex max-h-[85vh] max-w-[90vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
          </div>
          <button
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
            }}
            aria-label="Next"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-slate-300">
            {filteredImages[lightboxIndex].alt} ({lightboxIndex + 1} / {filteredImages.length})
          </p>
        </div>
      )}
    </div>
  );
}
