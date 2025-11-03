"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data pour les produits
const productsData = [
  {
    id: 1,
    name: "Volets étanches",
    price: 256,
    rating: 4.5,
    image: "/img/hero_1.png",
    description: "Volets ABS étanches imitant le bois dur, parfaits pour les salles de bain.",
    category: "Waterproof"
  },
  {
    id: 2,
    name: "Volets occultants",
    price: 365,
    rating: 5,
    image: "/img/hero_2.png",
    description: "Volets occultants avec blind intégré, parfait pour les chambres, bloquant la plupart de la lumière.",
    category: "Blackout"
  },
  {
    id: 3,
    name: "Volets en bois dur",
    price: 238,
    rating: 4.8,
    image: "/img/hero_1.png",
    description: "Nos volets étanches sont fabriqués exactement de la même manière que nos volets en bois dur.",
    category: "Hardwood"
  },
  {
    id: 4,
    name: "Volets sur mesure",
    price: 289,
    rating: 4.7,
    image: "/img/hero_2.png",
    description: "Volets personnalisés selon vos dimensions et préférences de style.",
    category: "Custom"
  },
  {
    id: 5,
    name: "Volets plantation",
    price: 312,
    rating: 4.9,
    image: "/img/hero_1.png",
    description: "Style plantation classique avec larges lamelles pour un contrôle optimal de la lumière.",
    category: "Plantation"
  },
  {
    id: 6,
    name: "Volets café",
    price: 198,
    rating: 4.6,
    image: "/img/hero_2.png",
    description: "Volets demi-hauteur parfaits pour l'intimité tout en laissant entrer la lumière.",
    category: "Café"
  },
  {
    id: 7,
    name: "Volets intérieurs",
    price: 275,
    rating: 4.8,
    image: "/img/hero_1.png",
    description: "Élégants volets intérieurs pour une isolation thermique et acoustique optimale.",
    category: "Interior"
  },
  {
    id: 8,
    name: "Volets extérieurs",
    price: 345,
    rating: 4.7,
    image: "/img/hero_2.png",
    description: "Volets extérieurs robustes résistant aux intempéries.",
    category: "Exterior"
  }
];

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full"
    >
      {/* Image du produit */}
      <div className="relative overflow-hidden h-72">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Bouton favori */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-colors ${
            isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </motion.button>

        {/* Rating badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-[#622F26] text-[#622F26]" />
          <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-900 mb-2" style={{ fontFamily: 'var(--font-arp)' }}>
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-[#622F26]" style={{ fontFamily: 'var(--font-arp)' }}>
              £{product.price}
            </span>
            <span className="text-gray-500 text-sm ml-1">Per sqm</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#622F26] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#4a221d] transition-colors"
          >
            Ajouter au panier
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ViewMoreCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-[#622F26] to-[#4a221d] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center h-full min-h-[500px]"
    >
      <motion.div
        className="text-center p-8"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center"
        >
          <ArrowRight className="w-12 h-12 text-white" />
        </motion.div>

        <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-arp)' }}>
          Plus de produits
        </h3>

        <p className="text-white/80 mb-6 text-lg">
          Découvrez notre collection complète de volets en bois dur
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#622F26] px-8 py-3.5 rounded-lg font-bold text-base hover:bg-[#EBE2CF] transition-colors shadow-lg"
        >
          Voir plus
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayProducts = productsData.slice(0, 5);
  const allSlides = [...displayProducts, { id: 'view-more' }];
  
  // Nombre de slides visibles selon la taille d'écran
  const slidesPerView = 3;
  const maxIndex = Math.max(0, allSlides.length - slidesPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="bg-[#fcf8f7] py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#622F26]/8 rounded-full"
          style={{ filter: 'blur(80px)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#EBE2CF]/60 rounded-full"
          style={{ filter: 'blur(90px)' }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête de section et Navigation */}
        <div className="flex items-center justify-between mb-16">
          {/* En-tête à gauche */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#622F26] font-semibold mb-3 text-sm uppercase tracking-wider"
            >
              Nos Produits
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-black leading-[1.1] mb-3 sm:mb-4 lg:mb-5"
              style={{ fontFamily: 'var(--font-arp)' }}
            >
              Explorez nos produits
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-xs sm:text-sm lg:text-base max-w-xl"
            >
              Découvrez notre gamme complète de volets en bois dur de qualité supérieure
            </motion.p>
          </motion.div>

          {/* Navigation Buttons - Inline à droite */}
          <div className="flex items-center gap-3">
            {/* Pagination dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? 'w-8 bg-[#622F26]'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full transition-all ${
                currentIndex === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#622F26] text-white hover:bg-[#4a221d] shadow-lg'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`p-3 rounded-full transition-all ${
                currentIndex === maxIndex
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#622F26] text-white hover:bg-[#4a221d] shadow-lg'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Slides Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * (100 / slidesPerView)}%`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {allSlides.map((item, index) => (
                <div
                  key={item.id}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / slidesPerView}% - ${(6 * (slidesPerView - 1)) / slidesPerView}px)` }}
                >
                  {item.id === 'view-more' ? (
                    <ViewMoreCard />
                  ) : (
                    <ProductCard product={item} />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;