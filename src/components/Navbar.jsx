import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/EDINAI Logo.png";

function Navbar({ onBookDemo }) {
  // Agar aap Home.js wala modal use kar rahe hain toh props use karein
  // Warna purana setIsModalOpen logic rakhein.

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 bg-transparent right-0 z-[9999] h-16 flex items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Consistent Glass Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010101]/80 to-black/40 backdrop-blur-md"></div>

        {/* Navbar Content Container */}
        <div className="relative w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo on Left - Strictly Controlled Size */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={logo}
              alt="ED-INAI Logo"
              // Inline style ensures the height doesn't exceed 40px regardless of file size
              style={{
                height: "40px",
                width: "auto",
                maxWidth: "150px",
                display: "block",
                objectFit: "contain",
              }}
              className="cursor-pointer hover:opacity-90 transition-opacity"
            />
          </motion.div>

          {/* Demo Button on Right */}
          <motion.button
            onClick={onBookDemo}
            className="text-white font-semibold rounded-[7px] cursor-pointer text-sm px-7 py-2 transition-all duration-300 shadow-lg"
            style={{
              background: "linear-gradient(90deg, #113BE1 0%, #4268FF 100%)",
              boxShadow: "0 4px 15px rgba(17, 59, 225, 0.3)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demo
          </motion.button>
        </div>
      </motion.nav>

   
    </>
  );
}

export default Navbar;
