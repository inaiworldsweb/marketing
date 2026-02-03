import React from 'react';
import { FaClipboardList, FaChartLine, FaChalkboardTeacher, FaLightbulb, FaQuestionCircle } from 'react-icons/fa';

const features = [
  {
    title: 'Notes & quizzes generation',
    gradient: 'from-pink-500/30 via-pink-400/25 to-transparent',
    glow: 'shadow-[0_0_55px_rgba(244,114,182,0.45)]',
    icon: <FaClipboardList className="w-8 h-8 text-pink-400" />
  },
  {
    title: 'Academic analytics',
    gradient: 'from-amber-400/30 via-amber-300/25 to-transparent',
    glow: 'shadow-[0_0_55px_rgba(251,191,36,0.45)]',
    icon: <FaChartLine className="w-8 h-8 text-amber-400" />
  },
  {
    title: 'Lecture delivery',
    gradient: 'from-violet-500/30 via-violet-400/25 to-transparent',
    glow: 'shadow-[0_0_55px_rgba(167,139,250,0.45)]',
    icon: <FaChalkboardTeacher className="w-8 h-8 text-violet-400" />
  },
  {
    title: 'Concept explanation',
    gradient: 'from-yellow-400/30 via-yellow-300/25 to-transparent',
    glow: 'shadow-[0_0_55px_rgba(253,224,71,0.45)]',
    icon: <FaLightbulb className="w-8 h-8 text-yellow-400" />
  },
  {
    title: 'Student doubt solving',
    gradient: 'from-emerald-400/30 via-emerald-300/25 to-transparent',
    glow: 'shadow-[0_0_55px_rgba(52,211,153,0.45)]',
    icon: <FaQuestionCircle className="w-8 h-8 text-emerald-400" />
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-16 px-4 sm:px-8">
      <div className="absolute inset-0 pointer-events-none opacity-15" style={{
        backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
        backgroundSize: '15px 15px',
      }} />

      <div className="relative max-w-6xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Virtual AI Teaching Platform Built for Modern Institutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            ED-INAI is an AI-powered virtual teaching platform where intelligent AI teachers conduct live and recorded
            interactive lectures, handle student doubts, and track performance — automatically.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map(({ title, gradient, glow, icon }) => (
              <div key={title} className="flex flex-col items-center gap-4 text-center">
                <div
                  className={`relative h-[100px] w-[100px] rounded-[26px] border border-white/10 bg-black/60 ${glow} flex items-center justify-center`}
                >
                  <div className="absolute inset-0 rounded-2xl" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                    opacity: 0.35,
                  }} />
                  <div className={`absolute inset-0 rounded-[26px] bg-gradient-to-br ${gradient}`} />
                  <div className="absolute inset-[6px] rounded-[20px] border border-white/15" />
                  <div className="absolute inset-[16px] rounded-[14px] border border-white/5" />
                  <div className="absolute inset-0 rounded-[26px]" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 2px, transparent 2px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.2,
                  }} />
                  <div className="relative z-10">
                    {icon}
                  </div>
                </div>
                <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                  {title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-400">
              <span className="relative z-10">Book a Demo</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute right-4 flex items-center justify-center w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
