"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="h-screen max-h-screen bg-[#F2E4E1] flex flex-col overflow-hidden">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 max-w-7xl mx-auto w-full flex-shrink-0"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#622F26] rounded-sm flex items-center justify-center">
            <div className="text-white font-bold text-lg sm:text-xl" style={{ fontFamily: 'var(--font-arp)' }}>HS</div>
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-[#622F26] text-xs sm:text-sm leading-tight" style={{ fontFamily: 'var(--font-arp)' }}>HARDWOOD</div>
            <div className="font-bold text-[#622F26] text-xs sm:text-sm leading-tight" style={{ fontFamily: 'var(--font-arp)' }}>SHUTTER</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
          <a href="#" className="text-gray-800 hover:text-[#622F26] transition-colors">Home</a>
          <a href="#" className="text-gray-800 hover:text-[#622F26] transition-colors">About</a>
          <a href="#" className="text-gray-800 hover:text-[#622F26] transition-colors">Product</a>
          <a href="#" className="text-gray-800 hover:text-[#622F26] transition-colors">Contact</a>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
          <Search className="w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent outline-none text-sm w-24"
          />
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <motion.h1 
              className="font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black leading-[1.1] mb-3 sm:mb-4 lg:mb-5"
              style={{ fontFamily: 'var(--font-arp)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Elevate your space
              <br />
              <span className="text-black">with <span className="text-[#622F26]">Luxurious</span></span>
              <br />
              <span className="text-black">hardwood shutters</span>
            </motion.h1>

            <motion.p 
              className="text-gray-600 text-xs sm:text-sm lg:text-base mb-2 sm:mb-2 lg:mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              All standard Hardwood Shutters now just <span className="font-bold text-[#622F26]">£238.00</span> per sqm
            </motion.p>
            
            <motion.p 
              className="text-gray-500 text-xs sm:text-xs lg:text-sm mb-4 sm:mb-5 lg:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              including design, survey, manufacture and fitting
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className="bg-[#622F26] text-white px-6 sm:px-8 py-2.5 sm:py-3 lg:py-3 rounded-md text-sm lg:text-base font-medium hover:bg-[#4a221d] transition-colors shadow-lg">
                Book a Free Visit
              </button>
              <button className="bg-white text-[#622F26] px-6 sm:px-8 py-2.5 sm:py-3 lg:py-3 rounded-md text-sm lg:text-base font-medium hover:bg-gray-50 transition-colors border border-[#622F26]/20">
                Get a Quote
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image avec Badge */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center h-full"
          >
            {/* Image hero_1 - Image de fond */}
            <motion.div 
              className="relative w-full max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/img/hero_1.png" 
                alt="Hardwood Shutters" 
                className="w-full h-auto rounded-2xl lg:rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>

            {/* Image hero_2 - Image superposée avec rotation */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-64 lg:w-72"
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 8, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <img 
                src="/img/hero_2.png" 
                alt="Hardwood Shutters Detail" 
                className="w-full h-auto rounded-xl lg:rounded-2xl shadow-2xl object-cover border-4 border-white"
              />
            </motion.div>

            {/* Badge Promotion */}
            <motion.div 
              className="absolute -top-6 -left-6 w-28 h-28 lg:w-32 lg:h-32 bg-[#622F26] rounded-full flex items-center justify-center shadow-2xl z-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 200 }}
            >
              <div className="text-center">
                <div className="text-white font-black text-3xl lg:text-4xl leading-none" style={{ fontFamily: 'var(--font-arp)' }}>20%</div>
                <div className="text-white text-[10px] lg:text-xs mt-0.5 lg:mt-1">OFF</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 128 128">
                  <path
                    id="circlePath"
                    d="M 64, 64 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                    fill="none"
                  />
                  <text className="text-[7px] lg:text-[8px] fill-white/70 uppercase tracking-wider">
                    <textPath href="#circlePath" startOffset="0%">
                      FURNITURE SPECIAL • FURNITURE SPECIAL •
                    </textPath>
                  </text>
                </svg>
              </div>
            </motion.div>

            {/* Floating decoration */}
            <motion.div
              className="absolute top-1/2 -right-4 w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-xl lg:rounded-2xl shadow-lg"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;