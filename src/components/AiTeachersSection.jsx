import React from 'react';
import Inai from '../assets/Inai-Web-Image.png';
import Vnai from '../assets/Vinai001.png';
import Aira from '../assets/AERA blue .png';

const teachers = [
  {
    name: 'INAI',
    role: 'Concept clarity & structured teaching expert.',
    image: Inai,
    accent: 'from-indigo-500/60 to-blue-500/20',
  },
  {
    name: 'VNAI',
    role: 'Visual explanations, slides & concept breakdowns.',
    image: Vnai,
    accent: 'from-purple-500/60 to-fuchsia-500/20',
  },
  {
    name: 'AIRA',
    role: 'Interactive Q&A, assessments & performance analytics.',
    image: Aira,
    accent: 'from-cyan-400/60 to-emerald-400/20',
  },
];

const AiTeachersSection = () => {
  return (
    <section id="learning-flow" className="bg-black text-white py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Meet Our AI Teachers</h2>
          <p className="mt-3 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Your always-available digital faculty, delivering clarity, visuals, and analytics on demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {teachers.map(({ name, role, image, accent }, idx) => (
            <div
              key={name}
              className={`relative rounded-2xl border-2 border-gray-600 bg-black overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 ${idx === 1 ? 'md:mt-10' : ''}`}
            >
              <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${accent}`} />
              <div className="relative p-8 text-center space-y-4">
                <p className="text-lg sm:text-xl font-bold text-blue-400 tracking-wide">{name}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{role}</p>
              </div>
              <div className="relative px-8 pb-8">
                <div className="overflow-hidden rounded-xl">
                  <img src={image} alt={name} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.5)]">
            Try Virtual AI Teacher
          </button>
        </div>
      </div>
    </section>
  );
};

export default AiTeachersSection;
