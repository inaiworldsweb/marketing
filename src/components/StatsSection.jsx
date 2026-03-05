import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-16 sm:py-20 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
            backgroundSize: "15px 15px",
          }}
        />
        <div className="absolute -left-32 top-0 h-full w-96 bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-35" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_rgba(0,0,0,0.65)] px-8 py-10 md:px-14">
          <h3 className="text-center text-[20px] md:text-[35px] font-semibold leading-snug text-white">
            Already helping institutions modernize classrooms with
            <br />
            AI-powered teaching and automation.
          </h3>

          <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Violet Card - Institutions Transformed */}
            <div className="group relative overflow-hidden rounded-[12px] border border-violet-400/25 bg-black/70 px-6 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_65px_rgba(124,58,237,0.38)] cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] hover:border-violet-400/50 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_20px_rgba(124,58,237,0.55),0_8px_32px_rgba(124,58,237,0.25)]">
              <div
                className="absolute inset-0 opacity-35 transition-opacity duration-[200ms] group-hover:opacity-50"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)`,
                  backgroundSize: "18px 18px",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18),transparent_58%)] transition-all duration-[400ms] group-hover:bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.32),transparent_65%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(124,58,237,0.20),transparent_55%)] transition-all duration-[400ms] group-hover:bg-[linear-gradient(180deg,rgba(124,58,237,0.35),transparent_60%)]" />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_28px_rgba(124,58,237,0.18)] transition-all duration-[400ms] group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_0_45px_rgba(124,58,237,0.32)]" />
              <div className="relative text-4xl md:text-5xl font-medium  transition-transform duration-[400ms] group-hover:scale-[1.02]">
                500+
              </div>
              <div className="relative mt-2 text-sm md:text-base text-white/80 transition-colors duration-[400ms] group-hover:text-white/95">
                Institutions Transformed
              </div>
            </div>

            {/* Amber Card - Students Learning Daily */}
            <div className="group relative overflow-hidden rounded-[12px] border border-amber-400/20 bg-black/70 px-6 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_65px_rgba(245,158,11,0.34)] cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] hover:border-amber-400/45 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_20px_rgba(245,158,11,0.50),0_8px_32px_rgba(245,158,11,0.22)]">
              <div
                className="absolute inset-0 opacity-35 transition-opacity duration-[200ms] group-hover:opacity-50"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.32) 1px, transparent 1px)`,
                  backgroundSize: "18px 18px",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.14),transparent_58%)] transition-all duration-[400ms] group-hover:bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.28),transparent_65%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,158,11,0.18),transparent_55%)] transition-all duration-[400ms] group-hover:bg-[linear-gradient(180deg,rgba(245,158,11,0.32),transparent_60%)]" />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_28px_rgba(245,158,11,0.14)] transition-all duration-[400ms] group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_0_45px_rgba(245,158,11,0.28)]" />
              <div className="relative text-4xl md:text-5xl font-medium  transition-transform duration-[400ms] group-hover:scale-[1.02]">
                50,000+
              </div>
              <div className="relative mt-2 text-sm md:text-base text-white/80 transition-colors duration-[400ms] group-hover:text-white/95">
                Students Learning Daily
              </div>
            </div>

            {/* Emerald Card - AI Teaching Support */}
            <div className="group relative overflow-hidden rounded-[12px] border border-emerald-400/20 bg-black/70 px-6 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_65px_rgba(34,197,94,0.34)] cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] hover:border-emerald-400/45 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_20px_rgba(34,197,94,0.50),0_8px_32px_rgba(34,197,94,0.22)]">
              <div
                className="absolute inset-0 opacity-35 transition-opacity duration-[200ms] group-hover:opacity-50"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.30) 1px, transparent 1px)`,
                  backgroundSize: "18px 18px",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.14),transparent_58%)] transition-all duration-[400ms] group-hover:bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.28),transparent_65%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,197,94,0.18),transparent_55%)] transition-all duration-[400ms] group-hover:bg-[linear-gradient(180deg,rgba(34,197,94,0.32),transparent_60%)]" />
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_28px_rgba(34,197,94,0.14)] transition-all duration-[400ms] group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_0_45px_rgba(34,197,94,0.28)]" />
              <div className="relative text-4xl md:text-5xl font-medium  transition-transform duration-[400ms] group-hover:scale-[1.02]">
                24/7
              </div>
              <div className="relative mt-2 text-sm md:text-base text-white/80 transition-colors duration-[400ms] group-hover:text-white/95">
                AI Teaching Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
