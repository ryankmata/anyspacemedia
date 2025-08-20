"use client";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Showcase() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 800,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "280px",
    focusOnSelect: true,
    beforeChange: (_: number, next: number) => setCurrent(next),
    responsive: [
      { breakpoint: 1280, settings: { centerPadding: "200px" } },
      { breakpoint: 1024, settings: { centerPadding: "150px" } },
      { breakpoint: 768, settings: { centerPadding: "80px" } },
      { breakpoint: 640, settings: { centerPadding: "40px" } },
    ],
  };

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
    <section className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
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

        {/* Animated Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <Slider {...settings} className="showcase-carousel">
            {cards.map((card, index) => {
              const active = index === current;
              return (
                <div key={card.id} className="px-4">
                  <motion.div
                    initial={{ opacity: 0.5, scale: 0.85, y: 20 }}
                    animate={
                      active
                        ? {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            filter: "blur(0px)",
                            rotateY: 0,
                          }
                        : {
                            opacity: 0.4,
                            scale: 0.8,
                            y: 20,
                            filter: "blur(3px)",
                            rotateY: active ? 0 : 15,
                          }
                    }
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group ${
                      active ? "z-10" : "z-0"
                    }`}
                    style={{ height: "400px" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      {/* Animated overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#B8860B]/10 via-[#FFD700]/10 to-[#DAA520]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                      <motion.h3
                        className="text-3xl font-bold mb-3 group-hover:text-[#FFD700] transition-colors duration-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                          active ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                        }
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-300 text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                          active ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                        }
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {card.description}
                      </motion.p>

                      {/* View More Button - appears on active slide */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                          active ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                        }
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <Link
                          href={card.link}
                          className="mt-6 inline-block px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm 
               border border-white/30 rounded-full text-white font-semibold transition-all 
               duration-300 hover:scale-105 self-start"
                        >
                          Explore Services →
                        </Link>
                      </motion.div>
                    </div>

                    {/* Active indicator */}
                    {active && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] rounded-full shadow-lg"
                      />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </Slider>
        </motion.div>
      </div>

      {/* Custom Styles for Slick Carousel */}
      <style jsx global>{`
        .showcase-carousel .slick-dots {
          bottom: -60px;
        }

        .showcase-carousel .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .showcase-carousel .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #60a5fa;
          transform: scale(1.2);
        }

        .showcase-carousel .slick-dots li button:hover:before {
          opacity: 0.8;
        }

        /* Hide default arrows */
        .showcase-carousel .slick-prev,
        .showcase-carousel .slick-next {
          display: none !important;
        }

        /* Ensure smooth transitions */
        .showcase-carousel .slick-slide {
          transition: all 0.3s ease;
        }

        .showcase-carousel .slick-center .card {
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}
