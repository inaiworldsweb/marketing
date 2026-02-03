import React from 'react';
import EdinaiLogo from '../assets/EDINAI Logo (1).png';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background dotted pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
          backgroundSize: '15px 15px'
        }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center sm:justify-start">
            <img 
              src={EdinaiLogo} 
              alt="EDINAI Logo" 
              className="h-26 sm:h-30 w-auto object-contain"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-8 py-12">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight tracking-tight">
            India's <span className="">First</span> Virtual
            <br />
            AI <span className="">Teachers</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center text-xl sm:text-3xl font-medium gap-2 sm:gap-4">
            <span className="border-l-2 border-white pl-4 text-white text-center">
              For Schools, Colleges & Coaching Institutes  |
            </span>
            {/* <span className="ml-4 text-gray-400 font-mono">&lt;/&gt;</span> */}
          </div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Ed-INAI introduces Virtual AI Teachers that conduct live & recorded interactive classes, answer
            student doubts instantly, and adapt to every learning style - 24x7, without fatigue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200">
              Book a Demo Today
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200">
              Watch How It Works
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
