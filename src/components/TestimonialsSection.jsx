import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "The platform's AI teachers have made learning more engaging and effective. Their availability and personalized approach have significantly improved my understanding of complex topics.",
      author: "Sarah Johnson",
      role: "Grade 11 Student",
      rating: 5,
    },
    {
      id: 2,
      text: "As an educator, I've seen remarkable improvements in my students' performance since we started using this platform. The AI teachers provide excellent support.",
      author: "Michael Chen",
      role: "High School Teacher",
      rating: 5,
    },
    {
      id: 3,
      text: "The interactive lessons and instant feedback have helped me grasp difficult concepts much faster than traditional learning methods.",
      author: "Emily Rodriguez",
      role: "College Student",
      rating: 4,
    },
    {
      id: 4,
      text: "The platform's analytics help me track my progress and identify areas where I need to focus more. It's like having a personal tutor 24/7.",
      author: "David Kim",
      role: "University Student",
      rating: 5,
    },
  ];

  // slide index represents which testimonial to show
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  // For mobile: show 1 card, for desktop: show 2 cards
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slideCount = isMobile
    ? testimonials.length
    : Math.ceil(testimonials.length / 2);

  // compute testimonials to display
  const displayed = isMobile
    ? [testimonials[slideIndex % testimonials.length]]
    : [
        testimonials[(slideIndex * 2) % testimonials.length],
        testimonials[(slideIndex * 2 + 1) % testimonials.length],
      ];

  const handleNext = () => {
    setDirection(1);
    setSlideIndex((prev) => (prev + 1) % slideCount);
  };

  const handlePrev = () => {
    setDirection(-1);
    setSlideIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [slideIndex]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <section className="py-10 sm:py-16 bg-black text-white overflow-hidden px-4 sm:px-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center md:mb-12 mb-2">
          <h2 className="text-[25px] md:text-[40px] font-bold mb-4 md:mb-6">
            What our users say about us
          </h2>
          <p className="text-[15px] md:text-[21px] text-white/60 max-w-lg mx-auto">
            Hear from students and educators who have experienced the difference
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center min-h-[350px] md:min-h-[280px]">
          {/* Navigation Buttons (Desktop) */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute -left-16 z-20 w-10 h-12 rounded-full border border-gray-700 items-center justify-center hover:bg-white/10 transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={slideIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="w-full flex flex-col sm:flex-row gap-6"
            >
              {displayed.map((item) => (
                <div
                  key={item.id}
                  className="w-full bg-[#0A0A0A] border border-gray-800 rounded-3xl p-8 md:p-3 relative shadow-2xl"
                >
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl" />
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                      <div className="w-14 h-14 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-2xl font-bold text-blue-400">
                        {item.author.charAt(0)}
                      </div>
                      <div className="text-left flex-1">
                        <p className="font-bold text-[16px] text-white">
                          {item.author}
                        </p>
                        <p className="text-sm text-blue-400/80">{item.role}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < item.rating ? "text-yellow-500" : "text-gray-700"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-[13px] md:text-[15px] lg:text-[17px] text-gray-300 italic leading-relaxed font-light">
                      "{item.text}"
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="hidden md:flex absolute -right-16 z-20 w-12 h-12 rounded-full border border-gray-700 items-center justify-center hover:bg-white/10 transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots & Mobile Navigation */}
        <div className="flex flex-col items-center mt-10 gap-6">
          <div className="flex gap-2">
            {[...Array(slideCount)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > slideIndex ? 1 : -1);
                  setSlideIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === slideIndex ? "w-8 bg-blue-500" : "w-2 bg-gray-700"
                }`}
              />
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="flex md:hidden gap-4">
            <button
              onClick={handlePrev}
              className="p-1 rounded-full border border-gray-800 bg-white/5 active:scale-90"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18L9 12L15 6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-1 md:p-0 rounded-full border border-gray-800 bg-white/5 active:scale-90"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18L15 12L9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
