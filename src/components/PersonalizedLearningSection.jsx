import React from "react";
import adminImage from "../assets/admin.png";

const features = [
  {
    title: "Access to live and recorded lectures",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "AI-generated notes and summaries",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Instant doubt solving via voice or text",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 10H8.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10H12.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 10H16.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Visual progress tracking and improvement insights",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 3V21H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6L15 10L11 7L7 13L6 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

const PersonalizedLearningSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Personalized Learning Experience for Every Student
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Still you have any questions? Contact our Team via{" "}
            <a
              href="mailto:info@inaiworlds.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              info@inaiworlds.com
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out cursor-default group"
              >
                <div
                  className={`flex-shrink-0 ${feature.color} p-3 rounded-lg bg-gray-700/50 group-hover:bg-gray-700 group-hover:shadow-[0_0_20px_currentColor] transition-all duration-300`}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden ">
            <img
              src={adminImage}
              alt="Personalized Learning Dashboard"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedLearningSection;
