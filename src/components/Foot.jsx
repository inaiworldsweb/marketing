import React from "react";
import logo from "../assets/EDINAI Logo.png";

const Footer = ({ onBookDemo }) => {
  return (
    <footer className="relative w-full bg-black border-t border-white/10 py-10 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Top Row: Logo & Links */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="EDINAI Logo"
              className="h-5 md:h-24 scale-[0.3] w-auto object-contain"
              loading="eager"
            />
          </div>

          {/* Links Section - FIXED GRID SPACING */}
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 md:flex md:flex-row gap-x-6 gap-y-5 md:gap-8 items-center justify-items-center md:justify-end">
              <a
                href="#what-is-edinai"
                className="text-gray-400 text-sm hover:text-white transition-colors text-center w-full md:w-auto"
              >
                Ed-INAI Overview
              </a>
              <a
                href="#ai-teachers"
                className="text-gray-400 text-sm hover:text-white transition-colors text-center w-full md:w-auto"
              >
                What is Ed-INAI?
              </a>
              <a
                href="#learning-flow"
                className="text-gray-400 text-sm hover:text-white transition-colors text-center w-full md:w-auto"
              >
                Our AI Teachers
              </a>
              <a
                href="#dashboard-preview"
                className="text-gray-400 text-sm hover:text-white transition-colors text-center w-full md:w-auto"
              >
                Implementation Guide
              </a>
              {/* Spans across 2 columns on mobile to avoid squeezing */}
              <a
                href="#watch-demo"
                className="text-gray-400 text-sm hover:text-white transition-colors text-center col-span-2 md:col-span-1 pt-2 md:pt-0"
              >
                Watch Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright and Social Icons */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
          
          {/* Book a Demo Button */}
          <button
            onClick={onBookDemo}
            className="rounded-[7px] cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 px-8 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all active:scale-95"
          >
            Book a Demo
          </button>

          {/* Copyright Text */}
          <p className="text-gray-500 text-[11px] md:text-xs text-center tracking-wide uppercase">
            © 2026 BY INAI WORLDS PVT. LTD. ALL RIGHTS RESERVED
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;