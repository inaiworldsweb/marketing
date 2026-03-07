import React, { useState } from "react";

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const youtubeUrl = "https://www.youtube.com/embed/Rw0bD05OuH0?autoplay=1";

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section
      id="watch-demo"
      className="w-full bg-black py-10 sm:py-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Heading Section */}
          <h2 className="text-[25px] md:text-[30px] lg:text-[40px] font-bold text-white">
            This short demo walks you through how INAI, VNAI, and AIRA actually
            work inside a live classroom environment.
          </h2>

          {/* Video Section */}
          <div className="w-full max-w-5xl relative">
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden">
              {!isVideoPlaying ? (
                <div
                  className="w-full h-full cursor-pointer group"
                  onClick={playVideo}
                >
                  <img
                    src="https://img.youtube.com/vi/Rw0bD05OuH0/hqdefault.jpg"
                    alt="ED-INAI Demo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center  justify-center group-hover:bg-black/30 transition-colors duration-300">
                    <div className="md:w-20 w-10 md:h-20 h-10 md:mt-24 mt-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="md:w-10 w-5 md:h-10 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.89a1.5 1.5 0 000-2.54L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={youtubeUrl}
                  title="ED-INAI Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
