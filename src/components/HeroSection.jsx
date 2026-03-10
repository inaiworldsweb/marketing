import React from "react";
import EdinaiLogo from "../assets/EDINAI Logo.png";

const HeroSection = ({ onBookDemo }) => {
  return (
    <div
      id="what-is-edinai"
      className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 bg-black text-white relative overflow-hidden"
    >
      {/* Background dotted pattern - White dots from WhyChooseUsSection */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight ">
            India's <span className="">First</span> Virtual
            <br />
            AI <span className="">Teachers</span>
          </h1>

          <div className="flex items-stretch justify-center px-2">
            <div className=" text-white text-center text-base sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug">
              For Schools, Colleges & Coaching Institutes
            </div>
          </div>

          <p className="text-[13px] sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            edInai introduces Virtual AI Teachers that conduct live & recorded
            interactive classes, answer student doubts instantly, and adapt to
            every learning style - 24x7, without fatigue.
          </p>

          <div className="flex flex-row gap-4 justify-center">
            <button
              onClick={onBookDemo}
              className="inline-flex items-center justify-center cursor-pointer rounded-[7px] bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white px-2 py-1 md:py-4 md:px-7 text-[13px] font-semibold text-lg transition-all duration-200 shadow-[0_10px_30px_rgba(59,130,246,0.5)]"
            >
              Book a Demo Today
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("watch-demo");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center cursor-pointer rounded-[7px] border border-white text-white hover:bg-white/10 px-2 py-1 md:py-4 md:px-7 font-semibold text-[13px] transition-all duration-200"
            >
              Watch How It Works
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
