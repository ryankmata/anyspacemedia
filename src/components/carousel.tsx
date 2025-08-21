"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

export default function Showcase() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Architecture & Design",
      image: "/architecture-design_CYS.jpg",
      description:
        "Stunning architectural video, photography and design documentation",
      link: "/architecture-design",
    },
    {
      id: 2,
      title: "Automotive",
      image: "/automotive_CYS.jpg",
      description: "Dynamic automotive photography and commercial video shoots",
      link: "/automotive",
    },
    {
      id: 3,
      title: "Commercial",
      image: "/commercial_CYS.jpg",
      description: "Professional video & photography for commercial spaces",
      link: "/commercial",
    },
    {
      id: 4,
      title: "Real Estate",
      image: "/real-estate_CYS.jpg",
      description:
        "High-end real estate video & photography for properties that stand out",
      link: "/real-estate",
    },
    {
      id: 5,
      title: "RV & Marine",
      image: "/rv-marine_CYS.jpg",
      description:
        "Specialized video & photography for RVs, boats, and marine lifestyle",
      link: "/rv-marine",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black">
      <div className="container mx-auto px-4">
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

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            onSwiper={setSwiper}
            onSlideChange={(swiperInstance) => {
              setCurrent(swiperInstance.realIndex);
            }}
            loop={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            grabCursor={true}
            initialSlide={0}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="showcase-swiper"
          >
            {cards.map((card, index) => {
              const isActive = index === current;
              return (
                <SwiperSlide key={card.id}>
                  <div
                    className={`relative rounded-3xl overflow-hidden shadow-2xl group h-[400px] bg-black transition-all duration-500 ${
                      isActive ? "shadow-3xl" : "shadow-lg"
                    }`}
                  >
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isActive ? "group-hover:scale-110" : "scale-105"
                        }`}
                        loading="lazy"
                      />
                    </div>

                    {/* Overlay gradients - stronger on inactive cards */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ${
                        isActive ? "" : "opacity-80"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#B8860B]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div
                      className={`relative z-10 h-full flex flex-col justify-end p-8 text-white transition-all duration-500 ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      <motion.h3
                        className={`text-2xl md:text-3xl font-bold mb-3 transition-colors duration-300 ${
                          isActive
                            ? "group-hover:text-[#FFD700]"
                            : "text-gray-200"
                        }`}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {card.title}
                      </motion.h3>

                      <motion.p
                        className={`text-base md:text-lg mb-6 transition-opacity duration-300 ${
                          isActive
                            ? "text-gray-300 opacity-90 group-hover:opacity-100"
                            : "text-gray-400 opacity-70"
                        }`}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {card.description}
                      </motion.p>

                      {/* Button only shows and animates in when card is active/centered */}
                      {isActive && (
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 30, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          <Link
                            href={card.link}
                            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-[#FFD700]/50"
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
                      )}
                    </div>

                    {/* Active indicator */}
                    {index === current && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-[#FFD700] to-[#DAA520] rounded-full shadow-lg"
                      />
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
