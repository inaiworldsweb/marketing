import React, { useState } from "react";
import examImage from "../assets/Personalized Learning Experience for Every Student/Make decisions using exams.webp";
import lectureImage from "../assets/Personalized Learning Experience for Every Student/Access to live and recorded lectures.webp";
import doubtSolvingImage from "../assets/Personalized Learning Experience for Every Student/instant doubt solving via voice or text.webp";
import progressImage from "../assets/Personalized Learning Experience for Every Student/Visual progress tracking and improvement insights.webp";

const features = [
  {
    id: 1,
    title: "Make decisions using exams",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="11" y2="17" />
      </svg>
    ),
    color: "text-blue-500",
    image: examImage,
  },
  {
    id: 2,
    title: "Access to live and recorded lectures",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: "text-purple-500",
    image: lectureImage,
  },
  {
    id: 3,
    title: "Instant doubt solving via voice or text",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    color: "text-green-500",
    image: doubtSolvingImage,
  },
  {
    id: 4,
    title: "Visual progress tracking and improvement insights",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6" />
        <path d="M10 14L21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    ),
    color: "text-yellow-500",
    image: progressImage,
  },
];

const PersonalizedLearningSection = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-10 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[25px] md:text-[40px] font-bold mb-4 md:mb-6 leading-tight">
            Personalized Learning Experience for Every Student
          </h2>
          <p className="text-gray-300 text-[15px] md:text-[21px] max-w-3xl mx-auto">
            Still have any questions? Contact our Team via{" "}
            <a href="mailto:info@inaiworlds.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              info@inaiworlds.com
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview - Image side */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-700/30 bg-gray-900/50 aspect-video flex items-center justify-center lg:order-2">
            <img
              key={activeFeature.id} // Forces image to re-animate on change
              src={activeFeature.image}
              alt={activeFeature.title}
              className="w-full h-full object-cover animate-in fade-in zoom-in duration-500"
            />
          </div>

          {/* Features List */}
          <div className="space-y-4 lg:order-1">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`flex items-center space-x-4 p-5 rounded-xl border transition-all duration-300 ease-out cursor-pointer group ${activeFeature.id === feature.id
                  ? "bg-gray-800/80 border-blue-500/50 shadow-[0_8px_30px_rgba(59,130,246,0.15)] translate-x-2"
                  : "bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50"
                  }`}
              >
                <div
                  className={`${feature.color} p-2.5 rounded-lg bg-gray-700/50 group-hover:shadow-[0_0_15px_currentColor] transition-all duration-300`}
                >
                  {feature.icon}
                </div>
                <p className={`text-[14px] sm:text-[17px] transition-colors duration-300 ${activeFeature.id === feature.id ? "text-white font-medium" : "text-gray-400"
                  }`}>
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedLearningSection;