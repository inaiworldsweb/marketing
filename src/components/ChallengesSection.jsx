import React from "react";

const items = [
  "Teacher shortages & inconsistent teaching quality",
  "High operational and faculty costs",
  "Inconsistent teaching quality across batches",
  "Limited time for revision and doubt solving",
  "Limited student engagement in traditional classrooms",
  "No personalized learning at scale",
  "Manual scheduling, tracking, and reporting",
];

const ChallengesSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-8 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
            backgroundSize: "15px 15px",
          }}
        />
        <div className="absolute -left-40 top-0 h-full w-[520px] bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-35" />
        <div className="absolute -right-40 top-0 h-full w-[520px] bg-gradient-to-l from-white/10 to-transparent opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h1 className="text-center text-[25px] md:text-[40px] md:text-xl font-bold text-white/90 leading-snug">
          Overcoming Obstacles in Student
          <br />
          Learning and Engagement
        </h1>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] gap-16 lg:gap-24 items-start">
          <div>
            <div className="relative pl-12">
              <div className="absolute left-1 top-8 bottom-0 w-px bg-blue-500/55" />
              <div className="absolute left-[-6px] top-2 h-6 w-6 rounded-full bg-blue-500/40 ring-1 ring-blue-300/50 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-300"
                  />
                </svg>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold text-center mb-8">
                Key Challenges Facing Educational Institutions Today
              </h2>

              <div className="mt-6 space-y-5 max-w-xl">
                {items.map((text) => (
                  <div
                    key={text}
                    className="challenge-item px-6 py-4 text-[13px] md:text-[15px] font-medium  text-white/90 min-h-[56px] cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-white/85 w-5 text-center text-[12px] md:text-[15px]">
                        ✓
                      </span>
                      <span className="leading-snug">{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative lg:self-center lg:translate-y-2">
            <div className="mx-auto max-w-md lg:max-w-[520px]">
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-black/70 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.7)] p-7">
                <div className="flex gap-3">
                  <div className="h-10 w-12 rounded-xl bg-blue-500/15 border border-blue-400/20" />
                  <div className="flex-1 space-y-3 pt-1">
                    <div className="h-2.5 rounded-full bg-white/85 w-2/3" />
                    <div className="h-2.5 rounded-full bg-white/65 w-5/6" />
                    <div className="h-2.5 rounded-full bg-white/55 w-3/4" />
                  </div>
                </div>

                <div className="mt-6 h-14 rounded-xl bg-white/5 border border-white/10" />
              </div>

              <div className="absolute left-0 top-28 -translate-x-24 h-24 w-24 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-black/80 shadow-[0_18px_60px_rgba(0,0,0,0.7)]" />
              <div className="absolute right-0 bottom-7 translate-x-24 h-24 w-24 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-black/80 shadow-[0_18px_60px_rgba(0,0,0,0.7)]" />

              <div className="absolute left-3 bottom-10 -translate-x-16">
                <span className="inline-flex items-center rounded-full bg-red-500/15 border border-red-400/20 px-2 py-1 text-[10px] text-white/80">
                  Online
                </span>
              </div>
              <div className="absolute right-3 bottom-10 translate-x-16">
                <span className="inline-flex items-center rounded-full bg-emerald-500/15 border border-emerald-400/20 px-2 py-1 text-[10px] text-white/80">
                  AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
