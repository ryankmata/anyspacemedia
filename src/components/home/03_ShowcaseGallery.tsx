import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ShowcaseGalleries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryItems = [
    {
      id: 1,
      image: "/architecture-design_CYS.jpg",
      category: "Architecture & Design",
      title: "Modern Luxury Villa",
      description:
        "Stunning architectural photography showcasing clean lines and sophisticated design elements.",
    },
    {
      id: 2,
      image: "/real-estate_CYS.jpg",
      category: "Real Estate",
      title: "Waterfront Estate",
      description:
        "Premium real estate photography capturing the essence of luxury living with breathtaking views.",
    },
    {
      id: 3,
      image: "/automotive_CYS.jpg",
      category: "Automotive",
      title: "Luxury Sports Car",
      description:
        "Dynamic automotive photography highlighting premium craftsmanship and performance aesthetics.",
    },
    {
      id: 4,
      image: "/commercial_CYS.jpg",
      category: "Commercial",
      title: "Corporate Headquarters",
      description:
        "Professional commercial spaces captured with cinematic quality and attention to brand identity.",
    },
    {
      id: 5,
      image: "/rv-marine_CYS.jpg",
      category: "RV & Marine",
      title: "Luxury Yacht",
      description:
        "Marine photography that captures the elegance and adventure of luxury watercraft.",
    },
    {
      id: 6,
      image: "/architecture-design_CYS.jpg",
      category: "Drone Cinematography",
      title: "Aerial Perspective",
      description:
        "Breathtaking drone footage providing unique perspectives that ground photography cannot achieve.",
    },
  ];

  return (
    <section className="py-24 z-9 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 via-transparent to-[#B8860B]/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every project tells a story. Here are some of our favorite visual
            narratives across luxury spaces.
          </p>
        </motion.div>

        {/* Main Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="relative h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={galleryItems[activeImage].image}
              alt={galleryItems[activeImage].title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/10 via-transparent to-[#DAA520]/10" />

            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <motion.div
                key={activeImage}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#B8860B]/20 backdrop-blur-sm rounded-full text-[#FFD700] font-semibold text-sm mb-4 border border-[#FFD700]/30">
                  {galleryItems[activeImage].category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {galleryItems[activeImage].title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {galleryItems[activeImage].description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveImage(index)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                activeImage === index
                  ? "ring-3 ring-[#FFD700] scale-105"
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

              {/* Active indicator */}
              {activeImage === index && (
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#FFD700] to-[#DAA520] rounded-full" />
                </div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Stats Row 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-8 border-t border-b border-white/10"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DAA520] mb-2">
              1000+
            </div>
            <div className="text-gray-400">Images Captured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DAA520] mb-2">
              50+
            </div>
            <div className="text-gray-400">Video Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DAA520] mb-2">
              5
            </div>
            <div className="text-gray-400">Specialty Areas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DAA520] mb-2">
              24/7
            </div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </motion.div>*/}

        {/* CTA Button */}
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
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseGalleries;
