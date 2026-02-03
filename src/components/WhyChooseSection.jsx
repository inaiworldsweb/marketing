import React from 'react';

const highlights = [
  {
    title: 'AI teachers never get tired',
    tone: 'from-violet-500/20 via-black/70 to-black/90 border-violet-400/30 shadow-[0_0_40px_rgba(124,58,237,0.25)]',
  },
  {
    title: '24x7 learning access for students',
    tone: 'from-orange-500/20 via-black/70 to-black/90 border-orange-400/30 shadow-[0_0_40px_rgba(251,146,60,0.2)]',
  },
  {
    title: 'Multilingual teaching support',
    tone: 'from-emerald-500/20 via-black/70 to-black/90 border-emerald-400/30 shadow-[0_0_40px_rgba(16,185,129,0.2)]',
  },
  {
    title: 'Same teaching quality across all classes',
    tone: 'from-rose-500/20 via-black/70 to-black/90 border-rose-400/30 shadow-[0_0_40px_rgba(244,63,94,0.2)]',
  },
  {
    title: 'Secure, cloud-based infrastructure',
    tone: 'from-amber-500/20 via-black/70 to-black/90 border-amber-400/30 shadow-[0_0_40px_rgba(245,158,11,0.2)]',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden pt-16 pb-8 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        <div className="absolute -left-32 top-0 h-full w-[420px] bg-gradient-to-r from-[#101a3f] to-transparent opacity-35" />
        <div className="absolute -right-24 bottom-0 h-[70%] w-[380px] bg-gradient-to-l from-white/10 to-transparent opacity-30" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-black/70 to-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.7)] px-6 sm:px-10 py-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Why Institutions Choose ED-INAI
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-white/70">
              ED-INAI is designed to deliver measurable academic and operational impact.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className={`rounded-xl border ${item.tone} bg-gradient-to-br p-6 text-center text-sm font-medium text-white/90 min-h-[110px] flex items-center justify-center`}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {highlights.slice(3).map((item) => (
              <div
                key={item.title}
                className={`rounded-xl border ${item.tone} bg-gradient-to-br p-6 text-center text-sm font-medium text-white/90 min-h-[110px] flex items-center justify-center`}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="rounded-full bg-blue-500 px-6 py-2 text-xs font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.45)] transition hover:bg-blue-400">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
