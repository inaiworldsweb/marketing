import { useState } from "react";

const faqs = [
  {
    question: " Is edInai a replacement for teachers?",
    answer:
      "No. Ed-INAI supports teachers by automating repetitive teaching tasks and enablingscale.",
  },
  {
    question: " Can edInai teach any subject?",
    answer:
      "Yes. It can be trained on any syllabus or subject across academic and professional streams.",
  },
  {
    question: " Is edInai available in multiple languages?",
    answer: "Yes. The platform supports multilingual teaching.",
  },
  {
    question: " How secure is the platform?",
    answer:
      "Ed-INAI uses secure cloud infrastructure with role-based access and data protection.",
  },
  {
    question: " How long does implementation take?",
    answer: "Most institutions can go live within a few days.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black text-white py-13 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left content */}
        <div className="flex justify-between items-center">
          <h2 className="text-[25px] md:text-[40px] font-bold mb-2 md:mb-4">
            Frequently Asked <br />
            <span className="flex justify-center items-center bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Frequently Asked
          </h2>
          <br />
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">Questions</h2> */}

          {/* <p className="text-gray-400 text-sm">
            Still you have any questions? Contact <br />
            our Team via{" "}
            <span className="text-blue-400">info@inaiworlds.com</span>
          </p> */}
        </div>

        {/* Right accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-gradient-to-r from-[#0b0b0b] to-[#111827] rounded-xl border border-gray-700/50 transition-all duration-300 ease-out cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span
                    className={`font-medium text-sm md:text-base transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-200"}`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`text-xl transition-all duration-300 ${isOpen ? "text-blue-400 rotate-45" : "text-gray-400 rotate-0"}`}
                  >
                    +
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
