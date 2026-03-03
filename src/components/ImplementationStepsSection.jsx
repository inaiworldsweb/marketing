import React from "react";

const ImplementationStepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Step-1",
      description: "Register your institution on Ed-INAI.",
    },
    {
      number: 2,
      title: "Step-2",
      description: "Upload your syllabus or course content.",
    },
    {
      number: 3,
      title: "Step-3",
      description: "Configure batches and schedule AI-led lectures.",
    },
    {
      number: 4,
      title: "Step-4",
      description:
        "AI teachers deliver classes, interact with students, and track performance automatically.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Background dotted pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
            backgroundSize: "15px 15px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How to Implement edInai?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Fast, Simple, Institution-Friendly Deployment
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-blue-500 text-lg font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImplementationStepsSection;
