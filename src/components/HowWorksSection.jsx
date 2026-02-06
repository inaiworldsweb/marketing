// import React from 'react';

// const steps = [
//   {
//     title: 'Register your institution',
//     color: 'from-rose-500/25 via-black/80 to-black/95 border-rose-400/30 shadow-[0_0_35px_rgba(244,63,94,0.25)]',
//   },
//   {
//     title: 'Upload your syllabus or course content',
//     color: 'from-orange-500/25 via-black/80 to-black/95 border-orange-400/30 shadow-[0_0_35px_rgba(251,146,60,0.22)]',
//   },
//   {
//     title: 'Schedule AI-led lectures',
//     color: 'from-violet-500/25 via-black/80 to-black/95 border-violet-400/30 shadow-[0_0_35px_rgba(124,58,237,0.22)]',
//   },
//   {
//     title: 'AI teaches, interacts',
//     color: 'from-amber-500/25 via-black/80 to-black/95 border-amber-400/30 shadow-[0_0_35px_rgba(245,158,11,0.22)]',
//   },
//   {
//     title: 'and tracks performance',
//     color: 'from-emerald-500/25 via-black/80 to-black/95 border-emerald-400/30 shadow-[0_0_35px_rgba(16,185,129,0.22)]',
//   },
// ];

// const HowWorksSection = () => {
//   return (
//     <section className="bg-black text-white relative overflow-hidden py-14 px-6">
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)',
//             backgroundSize: '16px 16px',
//           }}
//         />
//         <div className="absolute -left-24 top-0 h-full w-[420px] bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-30" />
//         <div className="absolute -right-24 top-0 h-full w-[420px] bg-gradient-to-l from-white/10 to-transparent opacity-25" />
//       </div>

//       <div className="relative max-w-6xl mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">How ED-INAI Works</h2>
//         <p className="mt-2 text-xs sm:text-sm text-white/70">Simple setup. Powerful results.</p>

//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//           {steps.map((step) => (
//             <div
//               key={step.title}
//               className={`rounded-2xl border ${step.color} bg-gradient-to-br px-4 py-5 text-center text-[12px] sm:text-[13px] font-medium text-white/85 min-h-[110px] flex items-center justify-center`}
//             >
//               {step.title}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowWorksSection;

















import React from 'react';

// --- Icons ---

const RegisterIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3091_370)">
      <mask id="mask0_3091_370" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
        <path d="M64 0H0V64H64V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3091_370)">
        <path d="M64 0H0V64H64V0Z" fill="#FF4752" fillOpacity="0.04" />
        <g opacity="0.48" filter="url(#filter0_f_3091_370)">
          <path d="M32 72C43.0457 72 52 68.4183 52 64C52 59.5817 43.0457 56 32 56C20.9543 56 12 59.5817 12 64C12 68.4183 20.9543 72 32 72Z" fill="#FF4752" />
        </g>
        <g opacity="0.64" filter="url(#filter1_f_3091_370)">
          <path d="M32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44Z" fill="#FF4752" />
        </g>
        <path opacity="0.24" d="M1 16H63M1 48H63M16 63V1M48 63V1M5.66667 5.66667L59 59M5.66667 58.3333L58.3333 5.66666M55 32.6667C55 45.3692 44.7025 55.6667 32 55.6667C19.2975 55.6667 9 45.3692 9 32.6667C9 19.9641 19.2975 9.66667 32 9.66667C44.7025 9.66667 55 19.9641 55 32.6667Z" stroke="#FF4752" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M30 35V29H32C32.5304 29 33.0391 29.2107 33.4142 29.5858C33.7893 29.9609 34 30.4696 34 31C34 31.5304 33.7893 32.0391 33.4142 32.4142C33.0391 32.7893 32.5304 33 32 33M32 33H30M32 33L34 35M23 32C23 33.1819 23.2328 34.3522 23.6851 35.4442C24.1374 36.5361 24.8003 37.5282 25.636 38.364C26.4718 39.1997 27.4639 39.8626 28.5558 40.3149C29.6478 40.7672 30.8181 41 32 41C33.1819 41 34.3522 40.7672 35.4442 40.3149C36.5361 39.8626 37.5282 39.1997 38.364 38.364C39.1997 37.5282 39.8626 36.5361 40.3149 35.4442C40.7672 34.3522 41 33.1819 41 32C41 30.8181 40.7672 29.6478 40.3149 28.5558C39.8626 27.4639 39.1997 26.4718 38.364 25.636C37.5282 24.8003 36.5361 24.1374 35.4442 23.6851C34.3522 23.2328 33.1819 23 32 23C30.8181 23 29.6478 23.2328 28.5558 23.6851C27.4639 24.1374 26.4718 24.8003 25.636 25.636C24.8003 26.4718 24.1374 27.4639 23.6851 28.5558C23.2328 29.6478 23 30.8181 23 32Z" stroke="#FF4752" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <filter id="filter0_f_3091_370" x="-1.33334" y="42.6667" width="66.6667" height="42.6667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="6.66667" result="effect1_foregroundBlur_3091_370" />
      </filter>
      <filter id="filter1_f_3091_370" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_3091_370" />
      </filter>
      <clipPath id="clip0_3091_370">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const UploadIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3091_386)">
      <mask id="mask0_3091_386" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
        <path d="M64 0H0V64H64V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3091_386)">
        <path d="M64 0H0V64H64V0Z" fill="#FF8533" fillOpacity="0.04" />
        <g opacity="0.48" filter="url(#filter0_f_3091_386)">
          <path d="M32 72C43.0457 72 52 68.4183 52 64C52 59.5817 43.0457 56 32 56C20.9543 56 12 59.5817 12 64C12 68.4183 20.9543 72 32 72Z" fill="#FF8533" />
        </g>
        <g opacity="0.64" filter="url(#filter1_f_3091_386)">
          <path d="M32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44Z" fill="#FF8533" />
        </g>
        <path opacity="0.24" d="M1 16H63M1 48H63M16 63V1M48 63V1M5.66667 5.66667L59 59M5.66667 58.3333L58.3333 5.66666M55 32.6667C55 45.3692 44.7025 55.6667 32 55.6667C19.2975 55.6667 9 45.3692 9 32.6667C9 19.9641 19.2975 9.66667 32 9.66667C44.7025 9.66667 55 19.9641 55 32.6667Z" stroke="#FF8533" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.8929 35.4289C24.2952 35.4289 23 34.4291 23 32.9631C23 31.4972 24.2952 30.3088 25.8929 30.3088C26.0015 30.3088 26.1087 30.3143 26.2143 30.325V30.3088H26.2541C26.2278 30.1155 26.2143 29.9187 26.2143 29.7189C26.2143 27.1127 28.5168 25 31.3571 25C33.2805 25 34.9573 25.9688 35.8395 27.4036C36.0551 27.3745 36.2756 27.3594 36.5 27.3594C38.9853 27.3594 41 29.2081 41 31.4885C41 33.3657 39.6348 34.7967 37.7656 35.2684M31.858 39V32.2258M31.858 32.2258L28.9062 35.0196M31.858 32.2258L34.8125 35.0196" stroke="#FF8533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
    <defs>
      <filter id="filter0_f_3091_386" x="-1.33334" y="42.6667" width="66.6667" height="42.6667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="6.66667" result="effect1_foregroundBlur_3091_386" />
      </filter>
      <filter id="filter1_f_3091_386" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_3091_386" />
      </filter>
      <clipPath id="clip0_3091_386">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ScheduleIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3091_370_v)">
      <mask id="mask0_3091_370_v" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
        <path d="M64 0H0V64H64V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3091_370_v)">
        <path d="M64 0H0V64H64V0Z" fill="#8B5CF6" fillOpacity="0.04" />
        <g opacity="0.48" filter="url(#filter0_f_3091_370_v)">
          <path d="M32 72C43.0457 72 52 68.4183 52 64C52 59.5817 43.0457 56 32 56C20.9543 56 12 59.5817 12 64C12 68.4183 20.9543 72 32 72Z" fill="#8B5CF6" />
        </g>
        <g opacity="0.64" filter="url(#filter1_f_3091_370_v)">
          <path d="M32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44Z" fill="#8B5CF6" />
        </g>
        <path opacity="0.24" d="M1 16H63M1 48H63M16 63V1M48 63V1M5.66667 5.66667L59 59M5.66667 58.3333L58.3333 5.66666M55 32.6667C55 45.3692 44.7025 55.6667 32 55.6667C19.2975 55.6667 9 45.3692 9 32.6667C9 19.9641 19.2975 9.66667 32 9.66667C44.7025 9.66667 55 19.9641 55 32.6667Z" stroke="#8B5CF6" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M32 26V38M32 26L35 29M32 26L29 29M24 24H40C41.1046 24 42 24.8954 42 26V38C42 39.1046 41.1046 40 40 40H24C22.8954 40 22 39.1046 22 38V26C22 24.8954 22.8954 24 24 24Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <filter id="filter0_f_3091_370_v" x="-1.33334" y="42.6667" width="66.6667" height="42.6667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="6.66667" result="effect1_foregroundBlur_3091_370_v" />
      </filter>
      <filter id="filter1_f_3091_370_v" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_3091_370_v" />
      </filter>
      <clipPath id="clip0_3091_370_v">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const AiIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3091_422)">
      <mask id="mask0_3091_422" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
        <path d="M64 0H0V64H64V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3091_422)">
        <path d="M64 0H0V64H64V0Z" fill="#FFC933" fillOpacity="0.04" />
        <g opacity="0.48" filter="url(#filter0_f_3091_422)">
          <path d="M32 72C43.0457 72 52 68.4183 52 64C52 59.5817 43.0457 56 32 56C20.9543 56 12 59.5817 12 64C12 68.4183 20.9543 72 32 72Z" fill="#FFC933" />
        </g>
        <g opacity="0.64" filter="url(#filter1_f_3091_422)">
          <path d="M32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44Z" fill="#FFC933" />
        </g>
        <path opacity="0.24" d="M1 16H63M1 48H63M16 63V1M48 63V1M5.66667 5.66667L59 59M5.66667 58.3333L58.3333 5.66666M55 32.6667C55 45.3692 44.7025 55.6667 32 55.6667C19.2975 55.6667 9 45.3692 9 32.6667C9 19.9641 19.2975 9.66667 32 9.66667C44.7025 9.66667 55 19.9641 55 32.6667Z" stroke="#FFC933" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M30 33H34" stroke="#FFC933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 26V33" stroke="#FFC933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 28V26H28V28" stroke="#FFC933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 39.5V24.5C24 23.837 24.2634 23.2011 24.7322 22.7322C25.2011 22.2634 25.837 22 26.5 22H39C39.2652 22 39.5196 22.1054 39.7071 22.2929C39.8946 22.4804 40 22.7348 40 23V41C40 41.2652 39.8946 41.5196 39.7071 41.7071C39.5196 41.8946 39.2652 42 39 42H26.5C25.837 42 25.2011 41.7366 24.7322 41.2678C24.2634 40.7989 24 40.163 24 39.5ZM24 39.5C24 38.837 24.2634 38.2011 24.7322 37.7322C25.2011 37.2634 25.837 37 26.5 37H40" stroke="#FFC933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <filter id="filter0_f_3091_422" x="-1.33334" y="42.6667" width="66.6667" height="42.6667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="6.66667" result="effect1_foregroundBlur_3091_422" />
      </filter>
      <filter id="filter1_f_3091_422" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_3091_422" />
      </filter>
      <clipPath id="clip0_3091_422">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TrackIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3091_441)">
      <mask id="mask0_3091_441" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
        <path d="M64 0H0V64H64V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3091_441)">
        <path d="M64 0H0V64H64V0Z" fill="#43EF9F" fillOpacity="0.04" />
        <g opacity="0.48" filter="url(#filter0_f_3091_441)">
          <path d="M32 72C43.0457 72 52 68.4183 52 64C52 59.5817 43.0457 56 32 56C20.9543 56 12 59.5817 12 64C12 68.4183 20.9543 72 32 72Z" fill="#43EF9F" />
        </g>
        <g opacity="0.64" filter="url(#filter1_f_3091_441)">
          <path d="M32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44Z" fill="#43EF9F" />
        </g>
        <path opacity="0.24" d="M1 16H63M1 48H63M16 63V1M48 63V1M5.66667 5.66667L59 59M5.66667 58.3333L58.3333 5.66666M55 32.6667C55 45.3692 44.7025 55.6667 32 55.6667C19.2975 55.6667 9 45.3692 9 32.6667C9 19.9641 19.2975 9.66667 32 9.66667C44.7025 9.66667 55 19.9641 55 32.6667Z" stroke="#43EF9F" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M22 33C22.5304 33 23.0391 32.7893 23.4142 32.4142C23.7893 32.0391 24 31.5304 24 31V27C24 26.4696 24.2107 25.9609 24.5858 25.5858C24.9609 25.2107 25.4696 25 26 25C26.5304 25 27.0391 25.2107 27.4142 25.5858C27.7893 25.9609 28 26.4696 28 27V40C28 40.5304 28.2107 41.0391 28.5858 41.4142C28.9609 41.7893 29.4696 42 30 42C30.5304 42 31.0391 41.7893 31.4142 41.4142C31.7893 41.0391 32 40.5304 32 40V24C32 23.4696 32.2107 22.9609 32.5858 22.5858C32.9609 22.2107 33.4696 22 34 22C34.5304 22 35.0391 22.2107 35.4142 22.5858C35.7893 22.9609 36 23.4696 36 24V37C36 37.5304 36.2107 38.0391 36.5858 38.4142C36.9609 38.7893 37.4696 39 38 39C38.5304 39 39.0391 38.7893 39.4142 38.4142C39.7893 38.0391 40 37.5304 40 37V33C40 32.4696 40.2107 31.9609 40.5858 31.5858C40.9609 31.2107 41.4696 31 42 31" stroke="#43EF9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <filter id="filter0_f_3091_441" x="-1.33334" y="42.6667" width="66.6667" height="42.6667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="6.66667" result="effect1_foregroundBlur_3091_441" />
      </filter>
      <filter id="filter1_f_3091_441" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_3091_441" />
      </filter>
      <clipPath id="clip0_3091_441">
        <rect width="64" height="64" fill="white" />
      </clipPath>
      <image id="image0_3091_440" width="128" height="128" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA+VBMVEVHcEz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NhAsAAAAU3RSTlMACQcRCAYFAgMBBAoZDRQXDxAODBIcIiEaGxgrHwsjJCoTFjovFTM0Jh4lIDcuHTgoMCcsOSktQEc/RD1bTVZFNlVqRkE+T0s8VzF0WTttUTI1TiqD+rYAAAS3SURBVHhezdpnc9s4EIDhl00sIq1i9R7LJW6JnV4uuUuu9/L/f8zNWJPQEgySAChRz4z9waOhCO9qdwGKTXMAbADrD1IRGzpo6vLFGIA6Ihw2HXFfgwYVsDBbtQ9c4ICz9MgXs+mainxDFpevfMr2mPJNUfDmwVC45Jog0+iTq0Y2n/3hWtxnc9+pTYa/TlBVY2seCUkckaVxRGvqNVAzACAE4BZDIamE0rhoORDX2sp98dbuOigS75Rt15tsqouJl0jLksu6HsUFQ2Rs8tY1YKVBNYa33DnoNdP+bsymuAFSDiY8slwW+OA5qkVIySTNVDWR2QvMP88+KzVcNPmsq6u+fb5v1yuLjaYZPkpCynGm/k6ftW7uSGt6FC/3HRV7jQofDf/QYZOlV4zckFJFqrVsCZ5Hi3o5k0ZwjJYBK30e1tCJn4XU4Wbw/yPTW3FmGEkurMhDTaP8ZtQscIM/AXXgHU+kVeRWclkzZ8cbmWZlVPJIrP6ppqxOtaN0MuN6LbUuC9S8HjWUDCVl2FZqyW4aaAK0OZohGx++6+ZkcZNdiZDykkVIjhHQibpITSiRBweYk5ecV8j4rRqXS2BQKNEWmpXtmf4KVGMQUMj3bLAvEcH16cvibzFfK8mLOBQH2g4z7rxgUx+AE3Q8QVHPkRzA1LJH8KEQpR2z6CGitkCTT742QGP6YB8dp0ebRPrHWy6iac7VIgD7Z0zY+I/Q9WEA8JyHnVLM9JCt8sjhXx4CBVYxLr8d7b+AYs6PyNaGqFsz3ytXlS3mDeyp4RgUocyy0HWVGwxJxJMEcC/ke80J+8eas8FdxsLmriurEr55x6leYwSxmLMphog+srdaZVS8AH0vMnp9nR2YqFV2Szl3b4RJSdBnheNAdtLsItHEXFjsGw+28en4nFQXuR5mRqX3znjIHff8/UdkDqYt1LR/BYKtPwgekalNEedilM64L4jizAr+I6qStQ3cGEH+is4Ve4pFKZaIjquu7DPU+OxIkywBmmbm6wukI29gkesss8fai5nY6AjEPxFWt41qm4Tg9TOxb3AU6+bZzQUAb6iIPBIXRVdyozF3DbpDvvJexhjyTYc0x+w/ZltXrNjnrPj0rpD70nxxuNNnK04QPSsyisZkqxNK9s7ug6PXny1WOJ63wXOITZ9yJQOAdghA4JSdJG2LXJ9O+zQkvdAr0H4PhTnoF6p3kX/CHCIIyEuF0IlYadAkQOrEYCCHKRX7oF3DnlKKWGuz04tQ084c5g8MNut19pZX5BtR6W+aZ5Mpco54zkJwMqVEIcUsUDdR3/tYVKbL9vghGryuzTZF+qf9O5vJ2h5b9HyHn6MOAjunfz2nWnV0zDVTLwYgNEmiEBN97rS30AkSpSfkb5FbUqZOQsrXqu8tjPQ7/+ZMBR1EYUCJbLPTx1GMGVd5XBtzn8V+qKGmk7UoYKbUoAL2z2/NPgDO+w4VcfrVxLiWRu8HJGp/z/tCIj9eS/1FwcNrFy2WK39y4FmU7xUmHEwFZHNLv7khSsIDVjzJJYPkSrJ7+J1dSLpAr8jUdK1cOROK+sROjXQepg9WPynfNK0PgbHiE9NmwjZEFGWdeAjMR6eueeGmw5b8D+zIM2IJtJ+/AAAAAElFTkSuQmCC" />
    </defs>
  </svg>
);

// --- Steps Data ---

const steps = [
  {
    title: 'Register your institution',
    color: 'from-rose-500/25 via-black/80 to-black/95 border-rose-400/30 shadow-[0_0_35px_rgba(244,63,94,0.25)]',
    icon: <RegisterIcon />,
  },
  {
    title: 'Upload your syllabus or course content',
    color: 'from-orange-500/25 via-black/80 to-black/95 border-orange-400/30 shadow-[0_0_35px_rgba(251,146,60,0.22)]',
    icon: <UploadIcon />,
  },
  {
    title: 'Schedule AI-led lectures',
    color: 'from-violet-500/25 via-black/80 to-black/95 border-violet-400/30 shadow-[0_0_35px_rgba(124,58,237,0.22)]',
    icon: <ScheduleIcon />,
  },
  {
    title: 'AI teaches, interacts',
    color: 'from-amber-500/25 via-black/80 to-black/95 border-amber-400/30 shadow-[0_0_35px_rgba(245,158,11,0.22)]',
    icon: <AiIcon />,
  },
  {
    title: 'and tracks performance',
    color: 'from-emerald-500/25 via-black/80 to-black/95 border-emerald-400/30 shadow-[0_0_35px_rgba(16,185,129,0.22)]',
    icon: <TrackIcon />,
  },
];

const HowWorksSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-16 px-4 sm:px-8">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        <div className="absolute -left-24 top-0 h-full w-[420px] bg-gradient-to-r from-[#0b1b3a] to-transparent opacity-30" />
        <div className="absolute -right-24 top-0 h-full w-[420px] bg-gradient-to-l from-white/10 to-transparent opacity-25" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">How ED-INAI Works</h2>
          <p className="mt-4 text-sm sm:text-base text-white/60">Simple setup. Powerful results.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className={`rounded-2xl border ${step.color} bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center p-6 gap-4 group transition-all duration-300 hover:scale-105 hover:-translate-y-1`}
            >
              {/* Icon Container with Glow */}
              {/* <div className="relative flex items-center justify-center"> */}
              <div
                className={`relative rounded-2xl border border-white/10 bg-black/60 ${step.color} flex items-center justify-center overflow-hidden`}
              >
                {/* <div className="absolute inset-0 rounded-full bg-white/5 blur-xl group-hover:bg-white/10 transition-colors" /> */}
                <div className="absolute inset-0 rounded-[26px]" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 2px, transparent 2px)',
                  backgroundSize: '40px 40px',
                  opacity: 0.2,
                }} />
                <div className="relative z-10">
                  {step.icon}
                </div>
              </div>

              <p className="text-[13px] sm:text-[14px] font-medium text-white/90 leading-tight text-center">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorksSection;
