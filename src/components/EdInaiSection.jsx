import React from 'react';
import { FaBook, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const cards = [
  {
    title: 'Teach any subject or stream',
    description: 'A unified learning platform offering high-quality education across all subjects and streams.',
    number: '01',
    icon: <FaBook className="text-blue-400 text-lg" />,
  },
  {
    title: 'Interact naturally with students',
    description: 'Human-like interaction that builds trust, clarity, and confidence in learning.',
    number: '02',
    icon: <FaUserGraduate className="text-blue-400 text-lg" />,
  },
  {
    title: 'Adapt explanations to different learning styles',
    description: 'Personalized explanations designed to maximize understanding and retention.',
    number: '03',
    icon: <FaChalkboardTeacher className="text-blue-400 text-lg" />,
  },
];

const EdInaiSection = () => {
  return (
    <section id="ai-teachers" className="bg-[#080810] text-white relative overflow-hidden py-12 sm:py-20 px-4 sm:px-8">
      {/* Dot pattern background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }} />

      <div className="relative max-w-6xl mx-auto text-center space-y-8 sm:space-y-16">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">What is <span className="font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
  edInai
</span>?</h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            edInai is an advanced AI-powered education platform developed to transform traditional classrooms into
            intelligent, interactive learning environments.
          </p>
        </div>

        {/* Cards Grid with Background Numbers */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map(({ title, description, number, icon }) => (
            <div key={title} className="relative pt-12">
              {/* Large Background Number - positioned ABOVE the card */}
              <div
                className="absolute -top-12 left-6 text-[120px] sm:text-[140px] font-black select-none pointer-events-none leading-none z-0"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  color: 'rgba(255, 255, 255, 0.03)',
                }}
              >
                {number}
              </div>

              {/* Card with Notched Corner */}
              <div
                className="group relative min-h-[200px] text-left transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(20, 20, 28, 0.95) 0%, rgba(12, 12, 18, 0.98) 100%)',
                  clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)',
                  borderRadius: '16px 0 16px 16px',
                }}
              >
                {/* Border overlay using pseudo-element effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)',
                    borderRadius: '16px 0 16px 16px',
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                  }}
                />

                <div className="relative z-10 p-6 pb-8">
                  {/* Icon Container with Blue Glow */}
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/25 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdInaiSection;
