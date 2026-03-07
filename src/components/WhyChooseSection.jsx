import React from "react";

const highlights = [
  {
    title: "AI teachers never get tired",
    base: "from-violet-500/20 via-black/70 to-black/90 border-violet-400/30 shadow-[0_0_40px_rgba(124,58,237,0.25)]",
    hover:
      "hover:border-violet-400/60 hover:shadow-[0_0_70px_rgba(124,58,237,0.50),0_8px_30px_rgba(124,58,237,0.25)]",
  },
  {
    title: "24x7 learning access for students",
    base: "from-orange-500/20 via-black/70 to-black/90 border-orange-400/30 shadow-[0_0_40px_rgba(251,146,60,0.2)]",
    hover:
      "hover:border-orange-400/60 hover:shadow-[0_0_70px_rgba(251,146,60,0.45),0_8px_30px_rgba(251,146,60,0.22)]",
  },
  {
    title: "Multilingual teaching support",
    base: "from-emerald-500/20 via-black/70 to-black/90 border-emerald-400/30 shadow-[0_0_40px_rgba(16,185,129,0.2)]",
    hover:
      "hover:border-emerald-400/60 hover:shadow-[0_0_70px_rgba(16,185,129,0.45),0_8px_30px_rgba(16,185,129,0.22)]",
  },
  {
    title: "Same teaching quality across all classes",
    base: "from-rose-500/20 via-black/70 to-black/90 border-rose-400/30 shadow-[0_0_40px_rgba(244,63,94,0.2)]",
    hover:
      "hover:border-rose-400/60 hover:shadow-[0_0_70px_rgba(244,63,94,0.45),0_8px_30px_rgba(244,63,94,0.22)]",
  },
  {
    title: "Secure, cloud-based infrastructure",
    base: "from-amber-500/20 via-black/70 to-black/90 border-amber-400/30 shadow-[0_0_40px_rgba(245,158,11,0.2)]",
    hover:
      "hover:border-amber-400/60 hover:shadow-[0_0_70px_rgba(245,158,11,0.45),0_8px_30px_rgba(245,158,11,0.22)]",
  },
];

const WhyChooseSection = ({ onBookDemo }) => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-10 sm:py-16 px-4 sm:px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #444 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="absolute -left-32 top-0 h-full w-[420px] bg-gradient-to-r from-[#101a3f] to-transparent opacity-35" />
        <div className="absolute -right-24 bottom-0 h-[70%] w-[380px] bg-gradient-to-l from-white/10 to-transparent opacity-30" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-black/70 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] px-4 sm:px-10 py-8 sm:py-12">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
              <h2 className="text-[25px] md:text-[40px] font-bold text-center mb-4 md:mb-6">
                Why Institutions Choose{" "}
                <span className="text-[25px] md:text-[40px] font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                  edInai
                </span>
              </h2>
            </div>
            <p className="mt-2 text-[15px] md:text-[21px] text-white/70">
              edInai is designed to deliver measurable academic and operational
              impact.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className={`rounded-xl border ${item.base} ${item.hover} bg-gradient-to-br  text-center md:text-[16px] text-[13px] font-medium text-white/90 min-h-[65px] flex items-center justify-center cursor-pointer transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.04] hover:text-white`}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {highlights.slice(3).map((item) => (
              <div
                key={item.title}
                className={`rounded-xl border ${item.base} ${item.hover} bg-gradient-to-br text-center md:text-[16px] text-[13px] font-medium text-white/90 min-h-[65px] flex items-center justify-center cursor-pointer transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.04] hover:text-white`}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={onBookDemo}
              className="cursor-pointer rounded-[7px] bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.5)] transition"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
