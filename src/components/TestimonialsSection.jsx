import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "The platform's AI teachers have made learning more engaging and effective. Their availability and personalized approach have significantly improved my understanding of complex topics.",
      author: "Sarah Johnson",
      role: "Grade 11 Student",
      rating: 5
    },
    {
      id: 2,
      text: "As an educator, I've seen remarkable improvements in my students' performance since we started using this platform. The AI teachers provide excellent support.",
      author: "Michael Chen",
      role: "High School Teacher",
      rating: 5
    },
    {
      id: 3,
      text: "The interactive lessons and instant feedback have helped me grasp difficult concepts much faster than traditional learning methods.",
      author: "Emily Rodriguez",
      role: "College Student",
      rating: 4
    },
    {
      id: 4,
      text: "The platform's analytics help me track my progress and identify areas where I need to focus more. It's like having a personal tutor 24/7.",
      author: "David Kim",
      role: "University Student",
      rating: 5
    }
  ];

  return (
    <section className="py-6 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What our users say about us
          </h2>
          <p className="text-sm text-white/80 max-w-2xl mx-auto">
            Hear from students and educators who have experienced the difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black border-2 border-gray-600 rounded-2xl p-6 relative overflow-hidden hover:border-blue-500 transition-colors duration-300"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-xl text-white">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4 text-left">
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
