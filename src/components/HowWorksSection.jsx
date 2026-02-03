import React from 'react';

const steps = [
  {
    title: 'Register your institution',
    color: 'from-rose-500/25 via-black/80 to-black/95 border-rose-400/30 shadow-[0_0_35px_rgba(244,63,94,0.25)]',
  },
  {
    title: 'Upload your syllabus or course content',
    color: 'from-orange-500/25 via-black/80 to-black/95 border-orange-400/30 shadow-[0_0_35px_rgba(251,146,60,0.22)]',
  },
  {
    title: 'Schedule AI-led lectures',
    color: 'from-violet-500/25 via-black/80 to-black/95 border-violet-400/30 shadow-[0_0_35px_rgba(124,58,237,0.22)]',
  },
  {
    title: 'AI teaches, interacts',
    color: 'from-amber-500/25 via-black/80 to-black/95 border-amber-400/30 shadow-[0_0_35px_rgba(245,158,11,0.22)]',
  },
  {
    title: 'and tracks performance',
    color: 'from-emerald-500/25 via-black/80 to-black/95 border-emerald-400/30 shadow-[0_0_35px_rgba(16,185,129,0.22)]',
  },
];

const HowWorksSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-14 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        <div className="absolute -left-24 top-0 h-full w-[420px] bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-30" />
        <div className="absolute -right-24 top-0 h-full w-[420px] bg-gradient-to-l from-white/10 to-transparent opacity-25" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">How ED-INAI Works</h2>
        <p className="mt-2 text-xs sm:text-sm text-white/70">Simple setup. Powerful results.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className={`rounded-2xl border ${step.color} bg-gradient-to-br px-4 py-5 text-center text-[12px] sm:text-[13px] font-medium text-white/85 min-h-[110px] flex items-center justify-center`}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorksSection;
