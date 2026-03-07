import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Inai from "../assets/Inai-Web-Image.png";
import Vnai from "../assets/Vinai001.png";
import Aira from "../assets/AERA blue .png";

const teachers = [
  {
    name: "INAI",
    role: "Concept clarity & structured teaching expert.",
    image: Inai,
    accent: "from-indigo-500/60 to-blue-500/20",
  },
  {
    name: "VNAI",
    role: "Visual explanations, slides & concept breakdowns.",
    image: Vnai,
    accent: "from-purple-500/60 to-fuchsia-500/20",
  },
  {
    name: "AIRA",
    role: "Interactive Q&A, assessments & performance analytics.",
    image: Aira,
    accent: "from-cyan-400/60 to-emerald-400/20",
  },
];

const AiTeachersSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teachers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % teachers.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);

  return (
    <section
      id="learning-flow"
      className="bg-black text-white py-10 sm:py-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div>
          <h2 className="text-[25px] md:text-[40px] font-bold mb-4 md:mb-6">
            Meet Our AI Teachers
          </h2>
          <p className="mt-3 text-[15px] md:text-[21px] text-white/80 max-w-2xl mx-auto">
            Your always available digital faculty, delivering clarity, visuals,
            and analytics on demand.
          </p>
        </div>

        {isMobile ? (
          <div
            className="relative overflow-hidden w-full"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {teachers.map(({ name, role, image, accent }, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <div
                    className={`relative rounded-2xl border-2 border-gray-600 bg-black overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105`}
                  >
                    <div
                      className={`absolute inset-0 opacity-30 bg-gradient-to-br ${accent}`}
                    />
                    <div className="relative p-8 text-center space-y-4">
                      <p className="text-lg sm:text-xl font-bold text-blue-400">
                        {name}
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {role}
                      </p>
                    </div>
                    <div className="relative px-8 pb-8">
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
            >
              ›
            </button>
            <div className="flex justify-center mt-4 gap-2">
              {teachers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {teachers.map(({ name, role, image, accent }, idx) => (
              <div
                key={name}
                className={`relative rounded-2xl border-2 border-gray-600 bg-black overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 ${idx === 1 ? "md:mt-10" : ""}`}
              >
                <div
                  className={`absolute inset-0 opacity-30 bg-gradient-to-br ${accent}`}
                />
                <div className="relative p-8 text-center space-y-4">
                  <p className="text-lg sm:text-xl font-bold text-blue-4 0">
                    {name}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {role}
                  </p>
                </div>
                <div className="relative px-8 pb-8">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12">
          <button className="inline-flex items-center cursor-pointer justify-center rounded-[7px] bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.5)]">
            Try Virtual AI Teacher
          </button>
        </div>
      </div>
    </section>
  );
};

export default AiTeachersSection;
