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
              className="h-5 md:h-24 scale-[0.7] w-50 object-contain"
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
          {/* Copyright Text */}
          <p className="text-gray-500 text-[11px] md:text-xs text-center tracking-wide uppercase">
            2026 BY INAI WORLDS PVT. LTD. ALL RIGHTS RESERVED
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
