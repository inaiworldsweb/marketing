import React from 'react';

// Custom SVG Icon Components with glow effects
const NotesIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="notes_glow" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur" />
      </filter>
    </defs>
    <g opacity="0.64" filter="url(#notes_glow)">
      <circle cx="32" cy="32" r="12" fill="#FF4752" />
    </g>
    <path opacity="0.24" d="M1 16H63M1 48H63M16 63V1M48 63V1M5.66667 5.66667L59 59M5.66667 58.3333L58.3333 5.66666M55 32.6667C55 45.3692 44.7025 55.6667 32 55.6667C19.2975 55.6667 9 45.3692 9 32.6667C9 19.9641 19.2975 9.66667 32 9.66667C44.7025 9.66667 55 19.9641 55 32.6667Z" stroke="#FF4752" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 26.5C25 25.9696 25.2107 25.4609 25.5858 25.0858C25.9609 24.7107 26.4696 24.5 27 24.5H37C37.5304 24.5 38.0391 24.7107 38.4142 25.0858C38.7893 25.4609 39 25.9696 39 26.5V40.5C39 41.0304 38.7893 41.5391 38.4142 41.9142C38.0391 42.2893 37.5304 42.5 37 42.5H27C26.4696 42.5 25.9609 42.2893 25.5858 41.9142C25.2107 41.5391 25 41.0304 25 40.5V26.5Z" stroke="#FF4752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 28.5H35" stroke="#FF4752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 32.5H35" stroke="#FF4752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 36.5H33" stroke="#FF4752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="analytics_glow" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur" />
      </filter>
    </defs>
    <g opacity="0.64" filter="url(#analytics_glow)">
      <circle cx="32" cy="32" r="12" fill="#FF8533" />
    </g>
    <path opacity="0.24" d="M1 16H63M1 48H63M16 63V1M48 63V1M5.66667 5.66667L59 59M5.66667 58.3333L58.3333 5.66666M55 32.6667C55 45.3692 44.7025 55.6667 32 55.6667C19.2975 55.6667 9 45.3692 9 32.6667C9 19.9641 19.2975 9.66667 32 9.66667C44.7025 9.66667 55 19.9641 55 32.6667Z" stroke="#FF8533" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23 25.5C23 25.2348 23.1054 24.9804 23.2929 24.7929C23.4804 24.6054 23.7348 24.5 24 24.5H40C40.2652 24.5 40.5196 24.6054 40.7071 24.7929C40.8946 24.9804 41 25.2348 41 25.5V35.5C41 35.7652 40.8946 36.0196 40.7071 36.2071C40.5196 36.3946 40.2652 36.5 40 36.5H24C23.7348 36.5 23.4804 36.3946 23.2929 36.2071C23.1054 36.0196 23 35.7652 23 35.5V25.5Z" stroke="#FF8533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M27 40.5H37" stroke="#FF8533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 36.5V40.5" stroke="#FF8533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35 36.5V40.5" stroke="#FF8533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 32.5L31 29.5L33 31.5L36 28.5" stroke="#FF8533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LectureIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="lecture_glow" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur" />
      </filter>
    </defs>
    <g opacity="0.64" filter="url(#lecture_glow)">
      <circle cx="32" cy="32" r="12" fill="#925CFF" />
    </g>
    <path opacity="0.24" d="M1 16H63M1 48H63M16 63V1M48 63V1M5.66667 5.66667L59 59M5.66667 58.3333L58.3333 5.66666M55 32.6667C55 45.3692 44.7025 55.6667 32 55.6667C19.2975 55.6667 9 45.3692 9 32.6667C9 19.9641 19.2975 9.66667 32 9.66667C44.7025 9.66667 55 19.9641 55 32.6667Z" stroke="#925CFF" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 27V41" stroke="#925CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23 38C22.7348 38 22.4804 37.8946 22.2929 37.7071C22.1054 37.5196 22 37.2652 22 37V24C22 23.7348 22.1054 23.4804 22.2929 23.2929C22.4804 23.1054 22.7348 23 23 23H28C29.0609 23 30.0783 23.4214 30.8284 24.1716C31.5786 24.9217 32 25.9391 32 27C32 25.9391 32.4214 24.9217 33.1716 24.1716C33.9217 23.4214 34.9391 23 36 23H41C41.2652 23 41.5196 23.1054 41.7071 23.2929C41.8946 23.4804 42 23.7348 42 24V37C42 37.2652 41.8946 37.5196 41.7071 37.7071C41.5196 37.8946 41.2652 38 41 38H35C34.2044 38 33.4413 38.3161 32.8787 38.8787C32.3161 39.4413 32 40.2044 32 41C32 40.2044 31.6839 39.4413 31.1213 38.8787C30.5587 38.3161 29.7956 38 29 38H23Z" stroke="#925CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ConceptIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="concept_glow" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur" />
      </filter>
    </defs>
    <g opacity="0.64" filter="url(#concept_glow)">
      <circle cx="32" cy="32" r="12" fill="#FFC933" />
    </g>
    <path opacity="0.24" d="M1 16H63M1 48H63M16 63V1M48 63V1M5.66667 5.66667L59 59M5.66667 58.3333L58.3333 5.66666M55 32.6667C55 45.3692 44.7025 55.6667 32 55.6667C19.2975 55.6667 9 45.3692 9 32.6667C9 19.9641 19.2975 9.66667 32 9.66667C44.7025 9.66667 55 19.9641 55 32.6667Z" stroke="#FFC933" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 42C37.5228 42 42 37.5228 42 32C42 26.4772 37.5228 22 32 22C26.4772 22 22 26.4772 22 32C22 37.5228 26.4772 42 32 42Z" stroke="#FFC933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 28V32" stroke="#FFC933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 36H32.01" stroke="#FFC933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StudentIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="student_glow" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur" />
      </filter>
    </defs>
    <g opacity="0.64" filter="url(#student_glow)">
      <circle cx="32" cy="32" r="12" fill="#43EF9F" />
    </g>
    <path opacity="0.24" d="M1 16H63M1 48H63M16 63V1M48 63V1M5.66667 5.66667L59 59M5.66667 58.3333L58.3333 5.66666M55 32.6667C55 45.3692 44.7025 55.6667 32 55.6667C19.2975 55.6667 9 45.3692 9 32.6667C9 19.9641 19.2975 9.66667 32 9.66667C44.7025 9.66667 55 19.9641 55 32.6667Z" stroke="#43EF9F" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 25L32 22L19 25L24.5 27.5V31C24.5 31 26.3333 30 32 30C37.6667 30 39.5 31 39.5 31V27.5L45 25ZM45 25V33" stroke="#43EF9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M39.5 31V33C39.5 37.1421 36.1421 40.5 32 40.5C27.8579 40.5 24.5 37.1421 24.5 33V31" stroke="#43EF9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25.7826 44.7038C24.6822 45.3882 21.7971 46.7858 23.5543 48.5347C24.4127 49.389 25.3687 50 26.5707 50H37.4293C38.6313 50 39.5873 49.389 40.4457 48.5347C42.2029 46.7858 39.3178 45.3882 38.2174 44.7038C35.6371 43.0987 32.3629 43.0987 29.7826 44.7038" stroke="#43EF9F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features = [
  {
    title: 'Notes & quizzes generation',
    gradient: 'from-red-500/30 via-red-400/25 to-transparent',
    glow: 'shadow-[0_0_55px_rgba(255,71,82,0.45)]',
    icon: <NotesIcon />
  },
  {
    title: 'Academic analytics',
    gradient: 'from-orange-500/30 via-orange-400/25 to-transparent',
    glow: 'shadow-[0_0_55px_rgba(255,133,51,0.45)]',
    icon: <AnalyticsIcon />
  },
  {
    title: 'Lecture delivery',
    gradient: 'from-violet-500/30 via-violet-400/25 to-transparent',
    glow: 'shadow-[0_0_55px_rgba(146,92,255,0.45)]',
    icon: <LectureIcon />
  },
  {
    title: 'Concept explanation',
    gradient: 'from-yellow-400/30 via-yellow-300/25 to-transparent',
    glow: 'shadow-[0_0_55px_rgba(255,201,51,0.45)]',
    icon: <ConceptIcon />
  },
  {
    title: 'Student doubt solving',
    gradient: 'from-emerald-400/30 via-emerald-300/25 to-transparent',
    glow: 'shadow-[0_0_55px_rgba(67,239,159,0.45)]',
    icon: <StudentIcon />
  },
];

const FeaturesSection = ({ onBookDemo }) => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-8 px-4 sm:px-8">
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
                  className={`relative rounded-2xl border border-white/10 bg-black/60 ${glow} flex items-center justify-center overflow-hidden`}
                >
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
            <button
              onClick={onBookDemo}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-blue-400"
            >
              <span className="relative z-10">Book a Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
