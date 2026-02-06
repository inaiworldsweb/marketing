// import React from 'react';

// const studentFeatures = [
//   'Live & recorded AI-led lectures',
//   'AI-generated notes & summaries',
//   'Voice & chat-based doubt solving',
//   'Interactive quizzes & assessments',
//   'Personal progress dashboards',
// ];

// const institutionalFeatures = [
//   'Curriculum & syllabus management',
//   'AI lecture scheduling',
//   'Student & batch management',
//   'Staff roles & permissions',
//   'Real-time performance analytics',
// ];

// const KeyFeaturesSection = () => {
//   return (
//     <section className="bg-black text-white relative overflow-hidden py-16 px-4 sm:px-8">
//       <div className="absolute inset-0 pointer-events-none opacity-15" style={{
//         backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
//         backgroundSize: '15px 15px',
//       }} />
//       <div className="absolute -left-32 top-0 h-full w-[420px] bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-35" />
//       <div className="absolute -right-32 top-0 h-full w-[420px] bg-gradient-to-l from-white/15 to-transparent opacity-20" />

//       <div className="relative max-w-6xl mx-auto">
//         <div className="text-center space-y-2">
//           <h2 className="text-3xl sm:text-4xl font-bold">Key Features Overview</h2>
//           <p className="text-sm sm:text-base text-white/80">Built for Academic and Operational Excellence</p>
//         </div>

//         <div className="mt-6 relative">
//           <div className="hidden md:block absolute inset-x-0 top-0 h-32 pointer-events-none">
//             <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
//               <path d="M600 40 L600 110" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
//               <path d="M600 110 C 600 110, 380 110, 380 160" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
//               <path d="M600 110 C 600 110, 820 110, 820 160" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
//             </svg>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pt-16">
//             <div className="rounded-[28px] border-2 border-gray-600 bg-gradient-to-br from-[#111] via-[#060606] to-[#0a0a0a] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] text-center hover:border-blue-500 transition-colors duration-300">
//               <h3 className="text-lg font-semibold text-white mb-4">Student Learning Features</h3>
//               <ul className="space-y-3 text-sm text-white/80">
//                 {studentFeatures.map((feature) => (
//                   <li key={feature} className="flex items-center justify-center gap-2">
//                     <span className="text-blue-400">•</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="rounded-[28px] border-2 border-gray-600 bg-gradient-to-br from-[#111] via-[#060606] to-[#0a0a0a] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] text-center hover:border-blue-500 transition-colors duration-300">
//               <h3 className="text-lg font-semibold text-white mb-4">Institutional Features</h3>
//               <ul className="space-y-3 text-sm text-white/80">
//                 {institutionalFeatures.map((feature) => (
//                   <li key={feature} className="flex items-center justify-center gap-2">
//                     <span className="text-blue-400">•</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyFeaturesSection;


















import React, { useState } from 'react';

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
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="relative overflow-hidden py-24 px-4 sm:px-8 bg-black min-h-screen flex flex-col items-center justify-center">
            {/* Background Dot Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="relative max-w-7xl mx-auto w-full z-10">
                {/* Header Section */}
                <div className="text-center mb-0 relative z-20">
                    <div className="inline-block relative">
                        {/* Faint header container if needed, sticking to text for now as per image */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Key Features Overview
                        </h2>
                        <p className="text-lg text-gray-400 font-medium">
                            Built for Academic and Operational Excellence
                        </p>
                    </div>
                </div>

                {/* Connecting Lines Layout */}
                <div className="flex justify-center -mt-2 -mb-[2px] relative z-0">
                    <div className="flex items-end gap-[2px]"> {/* Gap reduced for center alignment */}

                        {/* Left Connecting Line */}
                        <div className="relative">
                            <svg
                                width="247"
                                height="184"
                                viewBox="0 0 247 184"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-auto opacity-60"
                            >
                                <path
                                    d="M244.999 0V135C244.999 160 240.799 182 193.999 182H-3.05176e-05"
                                    stroke="url(#paint0_linear_left)"
                                    strokeWidth="2"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_left" x1="0" y1="214" x2="245" y2="-49" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3B82F6" stopOpacity="0" />
                                        <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.5" />
                                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* Animated overlay for flow effect */}
                            <svg
                                width="247"
                                height="184"
                                viewBox="0 0 247 184"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-full h-auto"
                            >
                                <path
                                    d="M244.999 0V135C244.999 160 240.799 182 193.999 182H-3.05176e-05"
                                    stroke="url(#paint0_linear_left_bright)"
                                    strokeWidth="2"
                                    className="path-animation"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_left_bright" x1="0" y1="214" x2="245" y2="-49" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#60A5FA" stopOpacity="0" />
                                        <stop offset="0.5" stopColor="#93C5FD" />
                                        <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Right Connecting Line */}
                        <div className="relative">
                            <svg
                                width="247"
                                height="184"
                                viewBox="0 0 247 184"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-auto opacity-60"
                            >
                                <path
                                    d="M2 0V135C2 160 6.2 182 53 182H246.999"
                                    stroke="url(#paint0_linear_right)"
                                    strokeWidth="2"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_right" x1="247" y1="214" x2="2" y2="-49" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3B82F6" stopOpacity="0" />
                                        <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.5" />
                                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* Animated overlay for flow effect */}
                            <svg
                                width="247"
                                height="184"
                                viewBox="0 0 247 184"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-full h-auto"
                            >
                                <path
                                    d="M2 0V135C2 160 6.2 182 53 182H246.999"
                                    stroke="url(#paint0_linear_right_bright)"
                                    strokeWidth="2"
                                    className="path-animation"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_right_bright" x1="247" y1="214" x2="2" y2="-49" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#60A5FA" stopOpacity="0" />
                                        <stop offset="0.5" stopColor="#93C5FD" />
                                        <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                    </div>
                </div>

                {/* Feature Cards Grid - Perfectly Aligned with Lines */}
                <div className="flex justify-center relative z-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mt-[4px]">
                        {/* Student Card */}
                        <div
                            className={`group relative rounded-3xl p-8 md:p-10 transition-all duration-500 cursor-default
                                ${hoveredCard === 'student' ? 'translate-y-[-2px]' : ''}
                            `}
                            onMouseEnter={() => setHoveredCard('student')}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Glass Background */}
                            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-gray-900/80" />

                            {/* Border Animation Overlay */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl" style={{ overflow: 'visible' }}>
                                <rect
                                    x="1"
                                    y="1"
                                    width="100%"
                                    height="100%"
                                    rx="23"
                                    ry="23"
                                    fill="none"
                                    stroke="url(#paint0_linear_border)"
                                    strokeWidth="2"
                                    className="border-animation"
                                    style={{ width: 'calc(100% - 2px)', height: 'calc(100% - 2px)' }}
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_border" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#60A5FA" />
                                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    Student Learning Features
                                </h3>
                                <ul className="space-y-4">
                                    {studentFeatures.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3.5 text-gray-300 text-base md:text-lg group/item transition-all duration-300 hover:text-white"
                                        >

                                            <span className="leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Institutional Card */}
                        <div
                            className={`group relative rounded-3xl p-8 md:p-10 transition-all duration-500 cursor-default
                                ${hoveredCard === 'institutional' ? 'translate-y-[-2px]' : ''}
                                 `}
                            onMouseEnter={() => setHoveredCard('institutional')}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Glass Background */}
                            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-white/10 group-hover:bg-gray-900/80" />

                            {/* Border Animation Overlay */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl" style={{ overflow: 'visible', transform: 'scaleX(-1)' }}>
                                <rect
                                    x="1"
                                    y="1"
                                    width="100%"
                                    height="100%"
                                    rx="23"
                                    ry="23"
                                    fill="none"
                                    stroke="url(#paint1_linear_border)"
                                    strokeWidth="2"
                                    className="border-animation"
                                    style={{ width: 'calc(100% - 2px)', height: 'calc(100% - 2px)' }}
                                />
                                <defs>
                                    <linearGradient id="paint1_linear_border" x1="100%" y1="0%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#60A5FA" />
                                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    Institutional Features
                                </h3>
                                <ul className="space-y-4">
                                    {institutionalFeatures.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3.5 text-gray-300 text-base md:text-lg group/item transition-all duration-300 hover:text-white"
                                        >
                                            <span className="leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* CSS for animations */}
            <style>{`
        .path-animation {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 3s ease-in-out infinite;
        }

        .border-animation {
            stroke-dasharray: 1200; /* Approximate perimeter of box */
            stroke-dashoffset: 1200;
            animation: borderFlow 3s ease-in-out infinite;
            animation-delay: 1.2s; /* Delay to sync with line arrival */
            opacity: 0;
        }
        
        @keyframes dash {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes borderFlow {
            0% {
                stroke-dashoffset: 1200;
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                stroke-dashoffset: 0;
                opacity: 0;
            }
        }
      `}</style>
        </section>
    );
};

export default KeyFeaturesSection;
