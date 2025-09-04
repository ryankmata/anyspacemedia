import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          {/* Camera body */}
          <rect
            x="8"
            y="18"
            width="32"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Lens */}
          <circle
            cx="24"
            cy="28"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="24"
            cy="28"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Viewfinder */}
          <rect
            x="14"
            y="12"
            width="20"
            height="8"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Focus point */}
          <circle cx="24" cy="28" r="1" fill="currentColor" />
        </svg>
      ),
      title: "Visionary Perspective",
      description:
        "Every shot begins with structure, form, and intention. We don't just capture spaces, we reveal the vision by blending precise composition with cinematic motion. It's media that resonates on a deeper level, conveying design, context, and feeling all at once.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          {/* Drone body */}
          <ellipse
            cx="24"
            cy="24"
            rx="8"
            ry="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Propellers */}
          <circle
            cx="14"
            cy="14"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="34"
            cy="14"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="14"
            cy="34"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="34"
            cy="34"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Arms connecting to propellers */}
          <line
            x1="18"
            y1="20"
            x2="14"
            y2="14"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="30"
            y1="20"
            x2="34"
            y2="14"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="18"
            y1="28"
            x2="14"
            y2="34"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="30"
            y1="28"
            x2="34"
            y2="34"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Elevated Image Making",
      description:
        "Integrated drone, video, and still work ensures we show your space in full dimensionality. Aerial drone sequences offer dynamic context. Cinematic narratives deliver movement. Retouched stills preserve textures and finishes. It's disciplines merged, with masterful control.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          {/* Award/Medal circle */}
          <circle
            cx="24"
            cy="20"
            r="12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Inner star/excellence symbol */}
          <path
            d="M24 12L26.4 18.8H33.6L28.1 23.2L30.5 30L24 25.6L17.5 30L19.9 23.2L14.4 18.8H21.6L24 12Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Ribbon */}
          <path
            d="M18 28L24 32L30 28V42L24 38L18 42V28Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      title: "Proven Expertise",
      description:
        "With 20+ years of hands-on experience in real estate, architecture, and media, we understand what makes a property shine. Our team blends technical skill with creative vision, delivering results that consistently exceed expectations.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          {/* Clock face */}
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Clock hands pointing to precise time */}
          <line
            x1="24"
            y1="24"
            x2="24"
            y2="12"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="24"
            x2="32"
            y2="24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Hour markers */}
          <circle cx="24" cy="8" r="1" fill="currentColor" />
          <circle cx="38" cy="24" r="1" fill="currentColor" />
          <circle cx="24" cy="40" r="1" fill="currentColor" />
          <circle cx="10" cy="24" r="1" fill="currentColor" />

          {/* Precision indicators */}
          <circle cx="35" cy="13" r="1" fill="currentColor" />
          <circle cx="35" cy="35" r="1" fill="currentColor" />
          <circle cx="13" cy="35" r="1" fill="currentColor" />
          <circle cx="13" cy="13" r="1" fill="currentColor" />

          {/* Center dot */}
          <circle cx="24" cy="24" r="2" fill="currentColor" />
        </svg>
      ),
      title: "Dependable Precision",
      description:
        "Shooting your space requires nuance, dignity, and precision. Our team handles every detail with professionalism, ensuring your vision comes alive — on time, on point, every frame.",
    },
  ];

  const stats = [
    { number: "9+", label: "Years in Business" },
    { number: "3000+", label: "Projects Completed" },
    { number: "50+", label: "Clients & Brands" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const clientLogos = [
    "Parade of Homes",
    "Huga Home",
    "Split Rock Custom Homes",
    "Utah Style & Design",
    "Alair Homes",
  ];

  return (
    <section className="py-24 z-9 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EDC577]/50 to-transparent" />
        {/*<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8E6B0F]/50 to-transparent" />*/}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
              Excellence
            </span>{" "}
            in Every Frame
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't just capture images, we craft visual experiences that
            define luxury and elevate your brand above the competition.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-gradient-to-b from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#EDC577]/30 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-[#EDC577]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#EDC577] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-[#8E6B0F]/20 via-[#EDC577]/20 to-[#C89B2C]/20 rounded-3xl p-8 md:p-12 mb-16 border border-[#EDC577]/20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EDC577] via-[#C89B2C] to-[#8E6B0F] mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Some of Our Clients
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-colors duration-300"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>*/}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="text-center"
        >
          <Link href="/#choose-your-space">
            <button className="group inline-flex items-center px-12 py-4 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#EDC577]/25 transition-all duration-300 hover:scale-105">
              Choose Your Space
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
