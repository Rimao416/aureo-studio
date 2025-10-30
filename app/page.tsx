"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="h-[90vh] max-h-[90vh] bg-[#F2E4E1] flex flex-col overflow-hidden">
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
            <div className="text-white font-(family-name:--font-arp) font-bold text-lg sm:text-xl">HS</div>
          </div>
          <div className="hidden sm:block">
            <div className="font-(family-name:--font-arp) font-bold text-[#622F26] text-xs sm:text-sm leading-tight">HARDWOOD</div>
            <div className="font-(family-name:--font-arp) font-bold text-[#622F26] text-xs sm:text-sm leading-tight">SHUTTER</div>
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
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <motion.h1 
            className="font-(family-name:--font-arp) font-black text-3xl sm:text-4xl lg:text-5xl xl:text-5xl text-black leading-[1.1] mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Elevate your space
            <br />
            <span className="text-black">with Luxurious</span>
            <br />
            <span className="text-black">hardwood shutters</span>
          </motion.h1>

          <motion.p 
            className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            All standard Hardwood Shutters now just <span className="font-bold text-[#622F26]">£238.00</span> per sqm
          </motion.p>
          
          <motion.p 
            className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            including design, survey, manufacture and fitting
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-2.5 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="bg-[#622F26] text-white px-6 sm:px-7 py-2 sm:py-2.5 rounded-md text-sm font-medium hover:bg-[#4a221d] transition-colors shadow-lg">
              Book a Free Visit
            </button>
            <button className="bg-white text-[#622F26] px-6 sm:px-7 py-2 sm:py-2.5 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors border border-[#622F26]/20">
              Get a Quote
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Image avec Badge */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative hidden lg:flex items-center justify-center h-full max-h-full"
        >
          <motion.div 
            className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-2xl w-full max-w-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image placeholder avec dégradé élégant */}
            <div className="aspect-[3/4] bg-gradient-to-br from-[#622F26]/10 to-[#622F26]/30 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/90 rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <div className="font-(family-name:--font-arp) font-black text-[#622F26] text-3xl">HS</div>
                  </div>
                  <p className="text-[#622F26] text-xs px-4">Premium Hardwood Shutters</p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-[#622F26]/10 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-[#622F26]/20 rounded mb-1.5 w-3/4"></div>
                    <div className="h-1.5 bg-[#622F26]/10 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge Promotion */}
            <motion.div 
              className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#622F26] rounded-full flex items-center justify-center shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 200 }}
            >
              <div className="text-center">
                <div className="text-white font-(family-name:--font-arp) font-black text-3xl leading-none">20%</div>
                <div className="text-white text-[10px] mt-0.5">OFF</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 128 128">
                  <path
                    id="circlePath"
                    d="M 64, 64 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                    fill="none"
                  />
                  <text className="text-[7px] fill-white/70 uppercase tracking-wider">
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
            className="absolute -top-3 -left-3 w-16 h-16 bg-white rounded-xl shadow-lg"
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
  );
};

export default HeroSection;