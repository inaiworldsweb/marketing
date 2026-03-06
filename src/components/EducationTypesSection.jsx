import React from "react";

const cards = [
  {
    title: "For Schools",
    subtitle: "Classes 1 to 12th | CBSE, ICSE & State Boards",
    bullets: [
      "AI-assisted teaching support",
      "Consistent learning across classes",
      "24/7 revision and learning access",
      "Reduced teacher dependency",
      "Improved academic outcomes",
    ],
  },
  {
    title: "For Coaching Institutes",
    subtitle: "UG & PG Programs | Engineering, Management, Science & Arts",
    bullets: [
      "Scalable learning for large batches",
      "Consistent lecture delivery",
      "Multi-campus deployment support",
      "Smart academic analytics",
      "Improved faculty efficiency",
    ],
  },
  {
    title: "For Colleges",
    subtitle: "Competitive Exams | JEE, NEET, Banking, Government Exams",
    bullets: [
      "24/7 learning and doubt support",
      "Scalable teaching without faculty overload",
      "Consistent concept delivery",
      "Exam-focused practice support",
      "Reduced operational dependency",
    ],
  },
];

const EducationTypesSection = ({ onBookDemo }) => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-13 sm:py-16 px-4 sm:px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #444 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="absolute -left-32 top-0 h-full w-[420px] bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-35" />
        <div className="absolute -right-28 top-10 h-[80%] w-[420px] bg-gradient-to-l from-white/10 to-transparent opacity-25" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-[25px] md:text-[40px] font-bold mb-4 md:mb-6">
            Designed for Every Type of Educational Institution
          </h2>
          <p className="mt-2 text-[15px] md:text-[21px] text-white/70">
            Whether you run a school, college, or coaching institute - edInai
            scales with you
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-black/70 to-black/90 shadow-[0_25px_70px_rgba(0,0,0,0.65)] p-6 flex flex-col"
            >
              <h3 className="text-[22px] font-bold text-blue-400">
                {card.title}
              </h3>
              <p className="mt-2 text-[11px] md:text-[14px] text-white/60 leading-relaxed">
                {card.subtitle}
              </p>
              <ul className="mt-4 space-y-3 text-[12px] text-white/80">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onBookDemo}
                className="mt-6 cursor-pointer self-start rounded-[7px] bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.5)] transition"
              >
                Book a Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTypesSection;
