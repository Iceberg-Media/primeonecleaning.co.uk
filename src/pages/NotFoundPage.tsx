import { ArrowLeft, Home } from "lucide-react";

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-[#0a1f44] via-[#102a5c] to-[#0a1f44] px-4">
      <div className="text-center">
        <p className="text-8xl font-extrabold tracking-tight text-[#3b82f6] sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg font-light leading-relaxed text-slate-300">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => onNavigate("/")}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-7 py-4 text-base font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#2563eb] hover:shadow-lg hover:shadow-blue-500/30"
        >
          <Home className="h-5 w-5" />
          Back to Homepage
        </button>
      </div>
    </section>
  );
}
