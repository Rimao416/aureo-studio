"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="h-screen max-h-screen bg-[#F2E4E1] flex flex-col overflow-hidden relative">
      {/* Formes décoratives d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grand cercle en haut à droite - Très flou */}
        <motion.div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#622F26]/12 rounded-full"
          style={{ filter: 'blur(100px)' }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Cercle moyen en bas à gauche - Flou moyen */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-[#EBE2CF]/80 rounded-full"
          style={{ filter: 'blur(70px)' }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Cercle décoratif net en haut à gauche - PEU de flou */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-52 h-52 bg-[#622F26]/25 rounded-full"
          style={{ filter: 'blur(20px)' }}
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Forme géométrique nette - PEU de flou */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-[#622F26]/30 to-[#622F26]/10 rounded-3xl rotate-45"
          style={{ filter: 'blur(15px)' }}
          animate={{ 
            rotate: [45, 65, 45],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Cercle d'accentuation central - Flou moyen */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#EBE2CF]/50 rounded-full"
          style={{ filter: 'blur(80px)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        {/* Accent net en bas à droite - PEU de flou */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-[#622F26]/28 rounded-full"
          style={{ filter: 'blur(18px)' }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Accent géométrique net en bas - PEU de flou */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-tl from-[#EBE2CF]/70 to-[#EBE2CF]/20 rounded-2xl rotate-12"
          style={{ filter: 'blur(25px)' }}
          animate={{ 
            rotate: [12, 32, 12],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Cercle net supplémentaire dans le coin supérieur droit */}
        <motion.div
          className="absolute top-1/3 right-1/5 w-32 h-32 bg-[#EBE2CF]/60 rounded-full"
          style={{ filter: 'blur(12px)' }}
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Accent carré net sur le côté gauche */}
        <motion.div
          className="absolute top-2/3 left-1/5 w-36 h-36 bg-gradient-to-br from-[#622F26]/25 to-transparent rounded-2xl rotate-45"
          style={{ filter: 'blur(10px)' }}
          animate={{ 
            rotate: [45, 55, 45],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Superposition de motif de grille - Plus visible */}
        <div className="absolute inset-0 opacity-[0.12]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #622F26 1px, transparent 1px),
              linear-gradient(to bottom, #622F26 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Barre de navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 max-w-7xl mx-auto w-full flex-shrink-0 relative z-10"
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

        {/* Liens de navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
          <a href="#" className="text-gray-800 hover:text-[#622F26] transition-colors">Accueil</a>
          <a href="#" className="text-gray-800 hover:text-[#622F26] transition-colors">À propos</a>
          <a href="#" className="text-gray-800 hover:text-[#622F26] transition-colors">Produit</a>
          <a href="#" className="text-gray-800 hover:text-[#622F26] transition-colors">Contact</a>
        </div>

        {/* Recherche */}
        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
          <Search className="w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Rechercher" 
            className="bg-transparent outline-none text-sm w-24"
          />
        </div>
      </motion.nav>

      {/* Contenu principal */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Contenu gauche */}
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
              Sublimez votre espace
              <br />
              <span className="text-black">avec des volets en bois <span className="text-[#622F26]">Luxueux</span></span>
              <br />
              <span className="text-black">en bois dur</span>
            </motion.h1>

            <motion.p 
              className="text-gray-600 text-xs sm:text-sm lg:text-base mb-2 sm:mb-2 lg:mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Tous les volets en bois dur standard à seulement <span className="font-bold text-[#622F26]">238,00 €</span> par m²
            </motion.p>
            
            <motion.p 
              className="text-gray-500 text-xs sm:text-xs lg:text-sm mb-4 sm:mb-5 lg:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              incluant la conception, l'expertise, la fabrication et l'installation
            </motion.p>

            {/* Boutons d'appel à l'action */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className="bg-[#622F26] text-white px-6 sm:px-8 py-2.5 sm:py-3 lg:py-3 rounded-md text-sm lg:text-base font-medium hover:bg-[#4a221d] transition-colors shadow-lg">
                Réserver une visite gratuite
              </button>
              <button className="bg-[#EBE2CF] text-[#622F26] px-6 sm:px-8 py-2.5 sm:py-3 lg:py-3 rounded-md text-sm lg:text-base font-medium hover:bg-[#dfd6c0] transition-colors border border-[#622F26]/10">
                Obtenir un devis
              </button>
            </motion.div>
          </motion.div>

          {/* Contenu droit - Image avec badge */}
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
                alt="Volets en bois dur" 
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
                alt="Détail des volets en bois dur" 
                className="w-full h-auto rounded-xl lg:rounded-2xl shadow-2xl object-cover border-4 border-white"
              />
            </motion.div>

            {/* Décoration flottante */}
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