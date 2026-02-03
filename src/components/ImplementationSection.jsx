import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaUserGraduate, FaUpload, FaCog, FaRobot } from 'react-icons/fa';

const steps = [
  {
    step: '01',
    title: 'Register',
    description: 'Register your institution on Ed-INAI',
    icon: <FaUserGraduate className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    step: '02',
    title: 'Upload Content',
    description: 'Upload your syllabus or course content',
    icon: <FaUpload className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-400',
  },
  {
    step: '03',
    title: 'Configure',
    description: 'Set up batches and schedule AI lectures',
    icon: <FaCog className="w-5 h-5" />,
    color: 'from-amber-500 to-yellow-400',
  },
  {
    step: '04',
    title: 'Go Live',
    description: 'AI teachers engage with students and track progress',
    icon: <FaRobot className="w-5 h-5" />,
    color: 'from-emerald-500 to-teal-400',
  },
];

const ImplementationSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-8 bg-gradient-to-br from-[#0a0f1e] via-black to-[#0a0f1e]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-soft-light filter blur-3xl animate-float"></div>
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-soft-light filter blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-500/20">
            Implementation Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            How to Get Started with <span className="text-blue-400">Ed-INAI</span>?
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
            Fast, Simple, and Seamless Integration for Educational Institutions
          </p>
        </div>

        <div className="mt-8">
          <div className="relative">
            {/* Progress line */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-1 w-4/5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-in-out" 
                   style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map(({ step, title, description, icon, color }, index) => {
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;
                
                return (
                  <div 
                    key={step}
                    className={`relative group transition-all duration-500 ${isActive ? 'scale-105' : 'scale-95'}`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div className={`absolute -top-3 -right-3 w-6 h-6 rounded-full flex items-center justify-center ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-700'
                    } transition-colors duration-300`}>
                      {isCompleted ? (
                        <FaCheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <span className="text-xs font-bold text-white">{step}</span>
                      )}
                    </div>
                    
                    <div className={`h-full rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm p-6 text-left transition-all duration-300 h-full flex flex-col hover:bg-gray-900/40 ${
                      isActive ? 'ring-1 ring-blue-500/30' : ''
                    }`}>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}>
                        {React.cloneElement(icon, { className: 'w-5 h-5 text-white' })}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                      <p className="text-sm text-gray-300/90 leading-relaxed flex-grow">
                        {description}
                      </p>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-3 left-1/2 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
