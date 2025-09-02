"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SPACES } from "@/lib/constants";

const ShowcaseGalleries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const galleryItems = [
    {
      id: 1,
      image: "/architecture-design_CYS.jpg",
      category: SPACES.ArchitectureDesign.title,
      title: "Modern Luxury Villa",
      description:
        "Stunning architectural photography showcasing clean lines and sophisticated design elements.",
      link: SPACES.ArchitectureDesign.link,
    },
    {
      id: 2,
      image: "/real-estate_CYS.jpg",
      category: SPACES.RealEstate.title,
      title: "Waterfront Estate",
      description:
        "Premium real estate photography capturing the essence of luxury living with breathtaking views.",
      link: SPACES.RealEstate.link,
    },
    {
      id: 3,
      image: "/automotive_CYS.jpg",
      category: SPACES.Automotive.title,
      title: "Luxury Sports Car",
      description:
        "Dynamic automotive photography highlighting premium craftsmanship and performance aesthetics.",
      link: SPACES.Automotive.link,
    },
    {
      id: 4,
      image: "/commercial_CYS.jpg",
      category: SPACES.SmallBusinessCommercial.title,
      title: "Corporate Headquarters",
      description:
        "Professional commercial spaces captured with cinematic quality and attention to brand identity.",
      link: SPACES.SmallBusinessCommercial.link,
    },
    {
      id: 5,
      image: "/rv-marine_CYS.jpg",
      category: SPACES.RVMarine.title,
      title: "Luxury Yacht",
      description:
        "Marine photography that captures the elegance and adventure of luxury watercraft.",
      link: SPACES.RVMarine.link,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-cycling effect
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryItems.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [isPaused, galleryItems.length]);

  const handleThumbnailClick = (index: number) => {
    setActiveImage(index);
    setIsPaused(true); // Pause auto-cycling when user interacts

    // Resume auto-cycling after 10 seconds of no interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const handleMainImageClick = () => {
    setIsPaused(true); // Pause auto-cycling when user clicks main image

    // Resume auto-cycling after 10 seconds of no interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const handlePrevious = () => {
    setActiveImage(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
    setIsPaused(true);

    // Resume auto-cycling after 10 seconds of no interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const handleNext = () => {
    setActiveImage((prev) => (prev + 1) % galleryItems.length);
    setIsPaused(true);

    // Resume auto-cycling after 10 seconds of no interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <section
      id="choose-your-space"
      className="py-24 z-9 relative overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
              Choose Your Space
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our diverse range of visual media services and expertise
          </p>
        </motion.div>

        {/* Main Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative mb-4"
        >
          <div className="relative h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={galleryItems[activeImage].image}
              alt={galleryItems[activeImage].title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/10 via-transparent to-[#DAA520]/10" />

            {/* Auto-cycle status indicator */}
            <div className="absolute top-4 right-4">
              <div
                className={`flex items-center space-x-2 px-3 py-1 rounded-full backdrop-blur-sm transition-colors duration-300 ${
                  isPaused
                    ? "bg-red-500/20 border border-red-500/30"
                    : "bg-green-500/20 border border-green-500/30"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isPaused ? "bg-red-400" : "bg-green-400 animate-pulse"
                  }`}
                />
                <span className="text-white text-xs font-medium">
                  {isPaused ? "Paused" : "Auto"}
                </span>
              </div>
            </div>

            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <motion.div
                key={activeImage}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {galleryItems[activeImage].category}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed pb-4">
                  {galleryItems[activeImage].description}
                </p>

                <Link
                  href={galleryItems[activeImage].link}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFD700]/20 to-[#B8860B]/20 hover:bg-white/20 backdrop-blur-sm border border-[#FFD700]/30 rounded-full text-[#FFD700] font-semibold transition-all duration-300 hover:scale-105 hover:border-[#FFD700]/50"
                >
                  Explore Services
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4"
        >
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleThumbnailClick(index)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-500 ${
                activeImage === index
                  ? "ring-3 ring-[#FFD700] scale-105 shadow-lg shadow-[#FFD700]/25"
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Category label on thumbnail */}
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-white text-xs font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>

              {/* Active indicator with progress ring */}
              {activeImage === index && (
                <div className="absolute top-2 right-2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#FFD700] to-[#DAA520] rounded-full" />
                    {!isPaused && (
                      <div className="absolute inset-0 rounded-full border-2 border-[#FFD700]/30">
                        <div
                          className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#FFD700] animate-spin"
                          style={{
                            animationDuration: "3s",
                            animationTimingFunction: "linear",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Pause indicator */}
              {activeImage === index && isPaused && (
                <div className="absolute top-2 left-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
                </div>
              )}
            </button>
          ))}
        </motion.div>

        {/* CTA Button 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <button className="group inline-flex items-center px-12 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-[#FFD700] text-[#FFD700] font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#FFD700]/25 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#B8860B] hover:via-[#FFD700] hover:to-[#DAA520] hover:text-black">
            View Full Gallery
            <svg
              className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>*/}
      </div>
    </section>
  );
};

export default ShowcaseGalleries;
