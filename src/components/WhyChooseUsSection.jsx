import React from "react";
import FAQImage from "../assets/FAQ.svg";

const HeroSection = ({ onBookDemo }) => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050b1a] to-black" />

      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 min-h-screen">
        <h1 className="text-white text-[25px] md:text-[40px] font-bold max-w-4xl">
          Ready to Transform Your Classrooms with AI?
        </h1>

        <p className="mt-4 text-gray-400 text-[15px] md:text-[21px] max-w-xl">
          Experience the future of teaching with edInai.
        </p>

        <button
          onClick={onBookDemo}
          className="mt-8 cursor-pointer px-6 py-3 rounded-[7px] bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition text-white font-medium shadow-[0_10px_30px_rgba(59,130,246,0.5)]"
        >
          Book Your Demo Now
        </button>

        {/* Illustration */}
        <div className="mt-14">
          <img
            src={FAQImage}
            alt="AI Education Illustration"
            className="w-full max-w-[420px] md:max-w-[600px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
