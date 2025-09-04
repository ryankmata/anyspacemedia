import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define TypeScript interfaces
interface PortfolioItem {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

interface LazyImageProps {
  item: PortfolioItem;
  index: number;
}

const PortfolioShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [visibleImages, setVisibleImages] = useState<number>(12);
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(
    null
  );
  const [filter, setFilter] = useState<string>("all");

  // Remove unused observerRef
  // const observerRef = useRef();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock portfolio data - replace with your actual images
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      src: "/architecture-design_CYS.jpg",
      category: "residential",
      title: "Modern Luxury Villa",
      description: "Contemporary residential design with clean lines",
    },
    {
      id: 2,
      src: "/real-estate_CYS.jpg",
      category: "floorplan",
      title: "Corporate Headquarters",
      description: "Sleek commercial architecture",
    },
    {
      id: 3,
      src: "/automotive_CYS.jpg",
      category: "residential",
      title: "Minimalist Home",
      description: "Scandinavian-inspired residential design",
    },
    {
      id: 4,
      src: "/commercial_CYS.jpg",
      category: "floorplan",
      title: "Office Complex",
      description: "Multi-story commercial development",
    },
    {
      id: 5,
      src: "/rv-marine_CYS.jpg",
      category: "matterport",
      title: "Cultural Center",
      description: "Public institutional architecture",
    },
    {
      id: 6,
      src: "/architecture-design_CYS.jpg",
      category: "residential",
      title: "Beach House",
      description: "Coastal residential architecture",
    },
    {
      id: 7,
      src: "/real-estate_CYS.jpg",
      category: "floorplan",
      title: "Retail Complex",
      description: "Modern shopping center design",
    },
    {
      id: 8,
      src: "/automotive_CYS.jpg",
      category: "matterport",
      title: "Library Building",
      description: "Contemporary library design",
    },
    {
      id: 9,
      src: "/commercial_CYS.jpg",
      category: "residential",
      title: "Urban Townhouse",
      description: "City residential development",
    },
    {
      id: 10,
      src: "/rv-marine_CYS.jpg",
      category: "floorplan",
      title: "Hotel & Spa",
      description: "Luxury hospitality architecture",
    },
    {
      id: 11,
      src: "/architecture-design_CYS.jpg",
      category: "matterport",
      title: "Museum Wing",
      description: "Cultural institution expansion",
    },
    {
      id: 12,
      src: "/real-estate_CYS.jpg",
      category: "residential",
      title: "Penthouse Suite",
      description: "High-rise luxury residential",
    },
    // Add more items to demonstrate "Show More" functionality
    {
      id: 13,
      src: "/automotive_CYS.jpg",
      category: "floorplan",
      title: "Tech Campus",
      description: "Modern technology office complex",
    },
    {
      id: 14,
      src: "/commercial_CYS.jpg",
      category: "residential",
      title: "Sustainable Home",
      description: "Eco-friendly residential design",
    },
    {
      id: 15,
      src: "/rv-marine_CYS.jpg",
      category: "matterport",
      title: "University Building",
      description: "Educational facility design",
    },
    {
      id: 16,
      src: "/architecture-design_CYS.jpg",
      category: "residential",
      title: "Mountain Retreat",
      description: "Alpine residential architecture",
    },
    {
      id: 17,
      src: "/real-estate_CYS.jpg",
      category: "floorplan",
      title: "Mixed-Use Development",
      description: "Combined retail and residential",
    },
    {
      id: 18,
      src: "/automotive_CYS.jpg",
      category: "matterport",
      title: "Healthcare Facility",
      description: "Modern medical center design",
    },
    {
      id: 19,
      src: "/commercial_CYS.jpg",
      category: "residential",
      title: "Luxury Condos",
      description: "High-end condominium complex",
    },
    {
      id: 20,
      src: "/rv-marine_CYS.jpg",
      category: "floorplan",
      title: "Corporate Tower",
      description: "Downtown office skyscraper",
    },
    {
      id: 21,
      src: "/architecture-design_CYS.jpg",
      category: "matterport",
      title: "Concert Hall",
      description: "Performing arts venue",
    },
    {
      id: 22,
      src: "/real-estate_CYS.jpg",
      category: "residential",
      title: "Garden Pavilion",
      description: "Outdoor living space design",
    },
    {
      id: 23,
      src: "/automotive_CYS.jpg",
      category: "floorplan",
      title: "Airport Terminal",
      description: "Transportation hub architecture",
    },
    {
      id: 24,
      src: "/commercial_CYS.jpg",
      category: "residential",
      title: "Historic Renovation",
      description: "Heritage building restoration",
    },
  ];

  const categories: Category[] = [
    { id: "all", name: "All Projects", count: portfolioItems.length },
    {
      id: "residential",
      name: "Residential",
      count: portfolioItems.filter((item) => item.category === "residential")
        .length,
    },
    {
      id: "floorplan",
      name: "Floorplan",
      count: portfolioItems.filter((item) => item.category === "floorplan")
        .length,
    },
    {
      id: "matterport",
      name: "Matterport",
      count: portfolioItems.filter((item) => item.category === "matterport")
        .length,
    },
  ];

  const filteredItems: PortfolioItem[] =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const visibleItems: PortfolioItem[] = filteredItems.slice(0, visibleImages);

  const showMoreImages = () => {
    setVisibleImages((prev) => Math.min(prev + 12, filteredItems.length));
  };

  const openModal = (image: PortfolioItem) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const LazyImage: React.FC<LazyImageProps> = ({ item, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden cursor-pointer"
        onClick={() => openModal(item)}
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="transform opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
          </div>
        </div>

        {/* Zoom indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="portfolio"
      className="pb-32 pt-20 z-8 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EDC577]/50 to-transparent" />
        {/*<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8E6B0F]/50 to-transparent" />*/}
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-[#EDC577]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-l from-[#8E6B0F]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Portfolio </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of real estate photography that captures the
            essence of design, structure, and spatial storytelling across
            diverse project types.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id);
                setVisibleImages(12);
              }}
              className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                filter === category.id
                  ? "bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-[#EDC577]/50"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">
                ({category.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          <AnimatePresence>
            {visibleItems.map((item, index) => (
              <LazyImage
                key={`${filter}-${item.id}`}
                item={item}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {visibleImages < filteredItems.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <button
              onClick={showMoreImages}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8E6B0F]/20 via-[#EDC577]/20 to-[#C89B2C]/20 backdrop-blur-sm border-2 border-[#EDC577]/50 text-[#EDC577] font-bold rounded-full hover:bg-gradient-to-r hover:from-[#8E6B0F] hover:via-[#EDC577] hover:to-[#C89B2C] hover:text-black hover:border-transparent transition-all duration-300 hover:scale-105"
            >
              Show More Projects
              <span className="ml-2 text-sm opacity-75">
                ({Math.min(12, filteredItems.length - visibleImages)} more)
              </span>
              <svg
                className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </motion.div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center md:pt-[112px] p-4 bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative max-w-5xl max-h-[90vh] md:max-h-[calc(100vh-112px)] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#EDC577]/20 to-[#8E6B0F]/20 backdrop-blur-sm rounded-full text-[#EDC577] text-sm font-semibold mb-2 border border-[#EDC577]/30">
                    {selectedImage.category.charAt(0).toUpperCase() +
                      selectedImage.category.slice(1)}
                  </span>
                  <h3 className="text-white font-bold text-2xl mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
