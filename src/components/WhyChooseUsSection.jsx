// import React from "react";
// import FAQImage from "../assets/FAQ.svg";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen bg-black overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050b1a] to-black" />

//       {/* Dotted pattern */}
//       <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 min-h-screen">
//         <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
//           Ready to Transform Your Classrooms with AI?
//         </h1>

//         <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xl">
//           Experience the future of teaching with ED-INAI.
//         </p>

//         <button className="mt-8 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-lg">
//           Book Your Demo Now
//         </button>

//         {/* Illustration */}
//         <div className="mt-14">
//           <img
//             src={FAQImage}
//             alt="AI Education Illustration"
//             className="w-[400px] md:w-[600px] mx-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;






















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
        <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
          Ready to Transform Your Classrooms with AI?
        </h1>

        <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xl">
          Experience the future of teaching with ED-INAI.
        </p>

        <button
          onClick={onBookDemo}
          className="mt-8 min-h-[44px] px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-lg"
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
