// import { useState } from "react";

// const faqs = [
//   {
//     question: " Is Ed-INAI a replacement for teachers?",
//     answer:
//       "No. Ed-INAI supports teachers by automating repetitive teaching tasks and enablingscale.",
//   },
//   {
//     question: " Can Ed-INAI teach any subject?",
//     answer:
//       "Yes. It can be trained on any syllabus or subject across academic and professional streams.",
//   },
//   {
//     question: " Is Ed-INAI available in multiple languages?",
//     answer:
//       "Yes. The platform supports multilingual teaching.",
//   },
//   {
//     question: " How secure is the platform?",
//     answer:
//       "Ed-INAI uses secure cloud infrastructure with role-based access and data protection.",
//   },
//   {
//     question: " How long does implementation take?",
//     answer:
//       "Most institutions can go live within a few days.",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section className="bg-black text-white py-12 px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
//         {/* Left content */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-2">
//             Frequently Asked <br /> Questions
//           </h2>
//           <p className="text-gray-400 text-sm">
//             Still you have any questions? Contact <br />
//             our Team via{" "}
//             <span className="text-blue-400">info@inaiworlds.com</span>
//           </p>
//         </div>

//         {/* Right accordion */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <div
//                 key={index}
//                 className="bg-gradient-to-r from-[#0b0b0b] to-[#111827] rounded-xl border border-white/5"
//               >
//                 <button
//                   onClick={() =>
//                     setOpenIndex(isOpen ? null : index)
//                   }
//                   className="w-full flex items-center justify-between px-6 py-5 text-left"
//                 >
//                   <span className="font-medium text-sm md:text-base">
//                     {faq.question}
//                   </span>
//                   <span className="text-xl text-gray-400">
//                     {isOpen ? "−" : "+"}
//                   </span>
//                 </button>

//                 {isOpen && (
//                   <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


















import { useState } from "react";

const faqs = [
  {
    question: " Is Ed-INAI a replacement for teachers?",
    answer:
      "No. Ed-INAI supports teachers by automating repetitive teaching tasks and enablingscale.",
  },
  {
    question: " Can Ed-INAI teach any subject?",
    answer:
      "Yes. It can be trained on any syllabus or subject across academic and professional streams.",
  },
  {
    question: " Is Ed-INAI available in multiple languages?",
    answer:
      "Yes. The platform supports multilingual teaching.",
  },
  {
    question: " How secure is the platform?",
    answer:
      "Ed-INAI uses secure cloud infrastructure with role-based access and data protection.",
  },
  {
    question: " How long does implementation take?",
    answer:
      "Most institutions can go live within a few days.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left content */}
        <div className="flex justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Frequently Asked <br /> <span className="flex justify-center items-center text-blue-400">Questions</span>
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
                className="group bg-gradient-to-r from-[#0b0b0b] to-[#111827] rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-medium text-sm md:text-base text-gray-200 group-hover:text-white transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className={`text-xl text-gray-400 group-hover:text-blue-400 transition-all duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    +
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 pb-5 text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
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
