import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "👑",
      title: "Luxury Positioning",
      description:
        "Premium media production that elevates your brand with sophisticated storytelling and cinematic quality.",
    },
    {
      icon: "🎬",
      title: "Professional Team",
      description:
        "Award-winning photographers and cinematographers with decades of combined experience in luxury media.",
    },
    {
      icon: "📡",
      title: "Cutting-Edge Equipment",
      description:
        "State-of-the-art cameras, professional drones, and advanced post-production technology for stunning results.",
    },
    {
      icon: "🌍",
      title: "Nationwide Reach",
      description:
        "Coast-to-coast coverage with local expertise, bringing our luxury standards to your location.",
    },
  ];

  const stats = [
    { number: "8+", label: "Years in Business" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Clients & Brands" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const clientLogos = [
    "Parade of Homes",
    "Red Ledges",
    "Split Rock Custom Homes",
    "Utah Style & Design",
    "Habitations Residential Design Group",
  ];

  return (
    <section className="py-24 z-9 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B8860B]/5 to-transparent opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
              Any Space Media
            </span>
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
              className="bg-gradient-to-b from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
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
          className="bg-gradient-to-r from-[#B8860B]/20 via-[#FFD700]/20 to-[#DAA520]/20 rounded-3xl p-8 md:p-12 mb-16 border border-[#FFD700]/20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B] mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos */}
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
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="text-center"
        >
          <button className="group inline-flex items-center px-12 py-4 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#FFD700]/25 transition-all duration-300 hover:scale-105">
            Explore Our Work
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

export default WhyChooseUs;
