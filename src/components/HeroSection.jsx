import React from "react";
import EdinaiLogo from "../assets/EDINAI Logo (1).png";

const HeroSection = () => {
  return (
    <div
      id="what-is-edinai"
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Background dotted pattern - White dots from WhyChooseUsSection */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-8">
        {/* <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center sm:justify-start"> */}
        <img
          src={EdinaiLogo}
          alt="EDINAI Logo"
          className="w-20 h-20 object-contain"
        />
        {/* </div>
        </div> */}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-8 py-6 sm:py-12">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight ">
            India's <span className="">First</span> Virtual
            <br />
            AI <span className="">Teachers</span>
          </h1>

          <div className="flex items-stretch justify-center px-2">
            <div className="border-l-2 border-white pl-3 sm:pl-4 text-white text-center text-base sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug">
              For Schools, Colleges & Coaching Institutes |
            </div>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            edInai introduces Virtual AI Teachers that conduct live & recorded
            interactive classes, answer student doubts instantly, and adapt to
            every learning style - 24x7, without fatigue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 shadow-[0_10px_30px_rgba(59,130,246,0.5)]">
              Book a Demo Today
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-white text-white hover:bg-white/10 px-8 py-4 font-semibold text-lg transition-all duration-200">
              Watch How It Works
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
