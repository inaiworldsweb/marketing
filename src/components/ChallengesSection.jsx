import React, { useEffect, useRef, useState } from "react";
import challengesImage from "../assets/Overcoming Obstacles in Student Learning and Engagement.webp";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white relative overflow-hidden py-10 sm:py-16 px-4 sm:px-6">
      {/* Background Gradients (Kept same) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`, backgroundSize: "15px 15px" }} />
        <div className="absolute -left-40 top-0 h-full w-[520px] bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-35" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h1 className="text-center text-[25px] md:text-[40px] font-bold text-white/90 leading-snug mb-4 md:mb-6">
          Overcoming Obstacles in Student Learning and Engagement
        </h1>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div className="relative pl-12">

              {/* --- ANIMATED LINE START --- */}
              <div
                className={`absolute left-1 top-8 w-px bg-gradient-to-b from-blue-500 via-blue-400/50 to-transparent transition-all duration-[1500ms] ease-in-out origin-top`}
                style={{
                  height: isVisible ? '100%' : '0%',
                  opacity: isVisible ? 1 : 0
                }}
              />

              {/* Animated Top Node */}
              <div className={`absolute left-[-6px] top-2 h-6 w-6 rounded-full flex items-center justify-center transition-all duration-700 ${isVisible ? 'scale-100' : 'scale-0'}`}>
                {/* Outer Pulse Ring */}
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                {/* Main Circle */}
                <div className="relative h-6 w-6 rounded-full bg-blue-600/40 border border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-blue-200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              {/* --- ANIMATED LINE END --- */}

              <h2 className="text-[15px] md:text-[21px] font-semibold text-start mb-8">
                Key Challenges Facing Educational Institutions Today
              </h2>

              <div className="mt-6 space-y-5 max-w-xl">
                {items.map((text, index) => (
                  <div
                    key={text}
                    className="challenge-item px-6 py-0 md:py-2 text-[11px] md:text-[15px] font-medium text-white/90 cursor-pointer group transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      {/* Checkmark also reacts to visibility */}
                      <span className={`text-blue-400 w-5 text-center transition-all duration-500 delay-[${index * 100}ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        ✓
                      </span>
                      <span className="leading-snug group-hover:text-blue-400 transition-colors">{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side Image */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-700/30 bg-gray-900/50 aspect-[21/20] flex items-center justify-center">
            <img
              src={challengesImage}
              alt="Overcoming Obstacles"
              className="w-full h-full object-contain animate-in fade-in zoom-in duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;