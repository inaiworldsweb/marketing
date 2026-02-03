import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-14 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
          backgroundSize: '15px 15px',
        }} />
        <div className="absolute -left-32 top-0 h-full w-96 bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-35" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_rgba(0,0,0,0.65)] px-8 py-10 md:px-14">
          <h3 className="text-center text-xl md:text-3xl font-semibold leading-snug text-white">
            Already helping institutions modernize classrooms with
            <br />
            AI-powered teaching and automation.
          </h3>

          <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-xl border border-violet-400/25 bg-black/70 px-6 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_65px_rgba(124,58,237,0.38)]">
              <div
                className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)`,
                  backgroundSize: '18px 18px',
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18),transparent_58%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(124,58,237,0.20),transparent_55%)]" />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_28px_rgba(124,58,237,0.18)]" />
              <div className="relative text-4xl md:text-5xl font-medium tracking-wide">500+</div>
              <div className="relative mt-2 text-sm md:text-base text-white/80">Institutions Transformed</div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-amber-400/20 bg-black/70 px-6 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_65px_rgba(245,158,11,0.34)]">
              <div
                className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.32) 1px, transparent 1px)`,
                  backgroundSize: '18px 18px',
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.14),transparent_58%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,158,11,0.18),transparent_55%)]" />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_28px_rgba(245,158,11,0.14)]" />
              <div className="relative text-4xl md:text-5xl font-medium tracking-wide">50,000+</div>
              <div className="relative mt-2 text-sm md:text-base text-white/80">Students Learning Daily</div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-emerald-400/20 bg-black/70 px-6 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_65px_rgba(34,197,94,0.34)]">
              <div
                className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.30) 1px, transparent 1px)`,
                  backgroundSize: '18px 18px',
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.14),transparent_58%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,197,94,0.18),transparent_55%)]" />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_28px_rgba(34,197,94,0.14)]" />
              <div className="relative text-4xl md:text-5xl font-medium tracking-wide">24/7</div>
              <div className="relative mt-2 text-sm md:text-base text-white/80">AI Teaching Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
