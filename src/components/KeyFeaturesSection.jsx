import React from 'react';

const studentFeatures = [
  'Live & recorded AI-led lectures',
  'AI-generated notes & summaries',
  'Voice & chat-based doubt solving',
  'Interactive quizzes & assessments',
  'Personal progress dashboards',
];

const institutionalFeatures = [
  'Curriculum & syllabus management',
  'AI lecture scheduling',
  'Student & batch management',
  'Staff roles & permissions',
  'Real-time performance analytics',
];

const KeyFeaturesSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-16 px-4 sm:px-8">
      <div className="absolute inset-0 pointer-events-none opacity-15" style={{
        backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
        backgroundSize: '15px 15px',
      }} />
      <div className="absolute -left-32 top-0 h-full w-[420px] bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-35" />
      <div className="absolute -right-32 top-0 h-full w-[420px] bg-gradient-to-l from-white/15 to-transparent opacity-20" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">Key Features Overview</h2>
          <p className="text-sm sm:text-base text-white/80">Built for Academic and Operational Excellence</p>
        </div>

        <div className="mt-6 relative">
          <div className="hidden md:block absolute inset-x-0 top-0 h-32 pointer-events-none">
            <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <path d="M600 40 L600 110" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
              <path d="M600 110 C 600 110, 380 110, 380 160" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
              <path d="M600 110 C 600 110, 820 110, 820 160" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pt-16">
            <div className="rounded-[28px] border-2 border-gray-600 bg-gradient-to-br from-[#111] via-[#060606] to-[#0a0a0a] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] text-center hover:border-blue-500 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Student Learning Features</h3>
              <ul className="space-y-3 text-sm text-white/80">
                {studentFeatures.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2">
                    <span className="text-blue-400">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border-2 border-gray-600 bg-gradient-to-br from-[#111] via-[#060606] to-[#0a0a0a] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] text-center hover:border-blue-500 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Institutional Features</h3>
              <ul className="space-y-3 text-sm text-white/80">
                {institutionalFeatures.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2">
                    <span className="text-blue-400">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
