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
            <motion.div 
              className="relative bg-white/40 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-5 lg:p-8 shadow-2xl w-full max-w-lg h-full max-h-[70vh] flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image placeholder avec dégradé élégant */}
              <div className="aspect-[3/4] w-full bg-gradient-to-br from-[#622F26]/10 to-[#622F26]/30 rounded-xl lg:rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white/90 rounded-xl lg:rounded-2xl mx-auto mb-3 lg:mb-4 flex items-center justify-center shadow-lg">
                      <div className="font-black text-[#622F26] text-3xl lg:text-4xl" style={{ fontFamily: 'var(--font-arp)' }}>HS</div>
                    </div>
                    <p className="text-[#622F26] text-xs lg:text-sm px-4">Premium Hardwood Shutters</p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 bg-white/80 backdrop-blur-sm p-3 lg:p-4 rounded-lg lg:rounded-xl">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#622F26]/10 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-2 lg:h-3 bg-[#622F26]/20 rounded mb-1.5 lg:mb-2 w-3/4"></div>
                      <div className="h-1.5 lg:h-2 bg-[#622F26]/10 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge Promotion */}
              <motion.div 
                className="absolute -bottom-5 lg:-bottom-6 -right-5 lg:-right-6 w-28 h-28 lg:w-32 lg:h-32 bg-[#622F26] rounded-full flex items-center justify-center shadow-2xl"
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
            </motion.div>

            {/* Floating decoration */}
            <motion.div
              className="absolute -top-3 lg:-top-4 -left-3 lg:-left-4 w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-xl lg:rounded-2xl shadow-lg"
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