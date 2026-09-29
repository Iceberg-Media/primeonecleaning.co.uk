import { Phone, ArrowRight } from "lucide-react";

interface CtaBlockProps {
  onNavigate: (path: string) => void;
  variant?: "dark" | "light";
}

export default function CtaBlock({ onNavigate, variant = "dark" }: CtaBlockProps) {
  const isLight = variant === "light";
  return (
    <section className={isLight ? "bg-slate-50 py-16" : "bg-[#0a1f44] py-20"}>
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className={isLight ? "text-3xl font-bold text-[#0a1f44] sm:text-4xl" : "text-3xl font-bold text-white sm:text-4xl"}>
          Get a Free Quote
        </h2>
        <p className={isLight ? "mt-4 text-lg font-light leading-relaxed text-slate-600" : "mt-4 text-lg font-light leading-relaxed text-slate-300"}>
          Ready for a spotless space? Call us today or request your free,
          no-obligation quote online.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:07512345678"
            className={isLight ? "flex items-center gap-2 rounded-xl border border-[#0a1f44] px-6 py-3.5 text-base font-semibold text-[#0a1f44] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0a1f44]/5 hover:shadow-lg" : "flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-[#0a1f44] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg"}
          >
            <Phone className="h-5 w-5" />
            07512 345 678
          </a>
          <button
            onClick={() => onNavigate("/contact")}
            className="btn-primary flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5"
          >
            Request a Free Quote
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
