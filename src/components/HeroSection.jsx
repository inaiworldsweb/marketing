import React from "react";
import EdinaiLogo from "../assets/EDINAI Logo.png";

const HeroSection = ({ onBookDemo }) => {
  return (
    <div
      id="what-is-edinai"
      className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 bg-black text-white relative overflow-hidden flex items-center justify-center"
    >
      {/* Background dotted pattern - White dots from WhyChooseUsSection */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-6xl lg:text-8xl font-black leading-tight tracking-tight">
            India's First Virtual
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            AI Teachers
          </h1>

          <div className="flex items-center justify-center px-2">
            <div className="text-white text-center text-sm sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug max-w-[280px] sm:max-w-none">
              For Schools, Colleges & Coaching Institutes
            </div>
          </div>

          <p className="text-xs sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-2">
            edInai introduces Virtual AI Teachers that conduct live & recorded
            interactive classes, answer student doubts instantly, and adapt to
            every learning style - 24x7.
          </p>

          <div className="flex flex-row items-center gap-3 sm:gap-4 justify-center">
            <button
              onClick={onBookDemo}
              className="inline-flex items-center justify-center cursor-pointer rounded-[7px] bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white px-4 py-2.5 md:py-4 md:px-7 text-[11px] sm:text-lg font-semibold transition-all duration-200 shadow-[0_10px_30px_rgba(59,130,246,0.3)] whitespace-nowrap"
            >
              Book a Demo
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("watch-demo");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center cursor-pointer rounded-[7px] border border-white/40 text-white hover:bg-white/10 px-4 py-2.5 md:py-4 md:px-7 font-semibold text-[11px] sm:text-lg transition-all duration-200 whitespace-nowrap"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
