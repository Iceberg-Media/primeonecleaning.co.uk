import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  quote: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((prev) => (prev + 1) % reviews.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((r, i) => (
            <div key={i} className="w-full flex-shrink-0 px-1">
              <div className="flex min-h-[220px] flex-col rounded-2xl border border-slate-200/60 bg-white p-8 shadow-layered">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 font-light leading-relaxed text-slate-600">"{r.quote}"</p>
                <p className="mt-6 text-sm font-bold text-[#0a1f44]">{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a1f44] text-white transition-colors hover:bg-[#3b82f6]"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-[#3b82f6]" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next review"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a1f44] text-white transition-colors hover:bg-[#3b82f6]"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
