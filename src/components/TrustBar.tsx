import { Shield, Sparkles, Leaf, Clock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Trusted & Reliable",
    desc: "Fully insured, verified and trained professionals you can trust.",
  },
  {
    icon: Sparkles,
    title: "High Standards",
    desc: "We use professional equipment and premium cleaning products.",
  },
  {
    icon: Leaf,
    title: "Safe & Eco-Friendly",
    desc: "Safe for children, pets and the environment.",
  },
  {
    icon: Clock,
    title: "Flexible & Efficient",
    desc: "We work around your schedule and always on time.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-slate-50/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center rounded-2xl border border-slate-200/60 bg-white p-6 text-center shadow-layered transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-layered-lg"
            >
              <span className="icon-badge flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 ease-out hover:scale-110">
                <b.icon className="h-7 w-7 text-[#60a5fa]" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-base font-bold text-[#0a1f44]">
                {b.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-slate-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
