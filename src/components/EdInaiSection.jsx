// import React from 'react';
// import { FaBook, FaUserGraduate, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';

// const cards = [
//   {
//     title: 'Teach any subject or stream',
//     description: 'A unified learning platform offering high-quality education across all subjects and streams.',
//     number: '01',
//     icon: <FaBook className="text-blue-400" />,
//     iconBg: 'from-blue-500/50 to-blue-400/20',
//     iconBorder: 'border-blue-300/30'
//   },
//   {
//     title: 'Interact naturally with students',
//     description: 'Human-like interaction that builds trust, clarity, and confidence in learning.',
//     number: '02',
//     icon: <FaUserGraduate className="text-green-400" />,
//     iconBg: 'from-green-500/50 to-green-400/20',
//     iconBorder: 'border-green-300/30'
//   },
//   {
//     title: 'Adapt explanations to different learning styles',
//     description: 'Personalized explanations designed to maximize understanding and retention.',
//     number: '03',
//     icon: <FaChalkboardTeacher className="text-purple-400" />,
//     iconBg: 'from-purple-500/50 to-purple-400/20',
//     iconBorder: 'border-purple-300/30'
//   },
// ];

// const EdInaiSection = () => {
//   return (
//     <section className="bg-black text-white relative overflow-hidden py-16 px-4 sm:px-8">
//       <div className="absolute inset-0 pointer-events-none opacity-15" style={{
//         backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
//         backgroundSize: '15px 15px',
//       }} />
//       <div className="absolute -left-32 top-0 h-full w-[460px] bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-40" />
//       <div className="absolute -right-32 top-0 h-full w-[460px] bg-gradient-to-l from-white/15 to-transparent opacity-20" />

//       <div className="relative max-w-6xl mx-auto text-center space-y-8">
//         <div>
//           <h2 className="text-3xl sm:text-4xl font-bold">What is Ed-INAI?</h2>
//           <p className="mt-3 text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
//             Ed-INAI is an advanced AI-powered education platform developed to transform traditional classrooms into
//             intelligent, interactive learning environments.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {cards.map(({ title, description, number, icon, iconBg, iconBorder }) => (
//             <div key={title} className="group relative rounded-[28px] border border-white/10 bg-gradient-to-br from-[#111] via-[#050505] to-[#090909] p-7 text-left shadow-[0_25px_60px_rgba(0,0,0,0.55)] overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] hover:border-blue-400/50 relative before:absolute before:inset-0 before:rounded-[28px] before:p-[1px] before:bg-gradient-to-br before:from-blue-500/30 before:to-blue-400/10 before:-z-10 hover:before:opacity-100 before:opacity-0 before:transition-opacity before:duration-300">
//               <div className="absolute inset-0 opacity-10" style={{
//                 backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
//                 backgroundSize: '18px 18px',
//               }} />
//               <div className="absolute top-4 right-5 text-7xl font-black text-white/5 select-none">
//                 {number}
//               </div>
//               <div className="relative flex items-start gap-4">
//                 <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${iconBg} border ${iconBorder} flex-shrink-0 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 transform group-hover:scale-110`}>
//                   <span className="text-xl">{icon}</span>
//                 </div>
//                 <div className="relative z-10">
//                   <h3 className="text-lg font-semibold leading-tight text-white group-hover:text-blue-200 transition-colors duration-300">{title}</h3>
//                   <p className="mt-2 text-sm text-white/75 leading-relaxed">
//                     {description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EdInaiSection;














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
    <section id="ai-teachers" className="bg-[#080810] text-white relative overflow-hidden py-20 px-4 sm:px-8">
      {/* Dot pattern background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }} />

      <div className="relative max-w-6xl mx-auto text-center space-y-16">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">What is Ed-INAI?</h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Ed-INAI is an advanced AI-powered education platform developed to transform traditional classrooms into
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
