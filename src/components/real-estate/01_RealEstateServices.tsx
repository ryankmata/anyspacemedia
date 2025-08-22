import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RealEstateServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: "📸",
      title: "Professional Photography",
      description:
        "High-resolution interior and exterior photography that showcases every detail of your property with luxury-grade equipment and expert lighting.",
      features: [
        "HDR Interior Photography",
        "Twilight/Blue Hour Shots",
        "Architectural Detail Focus",
        "Wide-Angle Perspectives",
        "Professional Lighting Setup",
        "Same-Day Turnaround Available",
      ],
      image: "/real-estate_CYS.jpg",
    },
    {
      icon: "🎬",
      title: "Cinematic Video Tours",
      description:
        "Immersive video walkthroughs that tell your property's story, combining smooth cinematography with compelling narrative flow.",
      features: [
        "4K Cinematic Quality",
        "Stabilized Walkthrough Tours",
        "Lifestyle B-Roll Footage",
        "Professional Color Grading",
        "Custom Music & Narration",
        "Multiple Video Formats",
      ],
      image: "/real-estate_CYS.jpg",
    },
    {
      icon: "🚁",
      title: "Drone Cinematography",
      description:
        "Spectacular aerial perspectives that showcase your property's location, surroundings, and unique features from breathtaking angles.",
      features: [
        "FAA Licensed Pilots",
        "4K Aerial Photography",
        "Dynamic Flight Patterns",
        "Neighborhood Context Shots",
        "Sunset/Sunrise Aerials",
        "Weather Backup Planning",
      ],
      image: "/real-estate_CYS.jpg",
    },
    {
      icon: "🏠",
      title: "Virtual Staging",
      description:
        "Transform empty spaces into beautifully furnished homes with photorealistic virtual staging that helps buyers envision living there.",
      features: [
        "Photorealistic Furniture",
        "Multiple Style Options",
        "Quick 48-Hour Turnaround",
        "Unlimited Revisions",
        "Before/After Comparisons",
        "Cost-Effective Alternative",
      ],
      image: "/real-estate_CYS.jpg",
    },
    {
      icon: "🌐",
      title: "360° Virtual Tours",
      description:
        "Interactive virtual reality experiences that allow potential buyers to explore properties remotely with immersive detail.",
      features: [
        "Matterport Integration",
        "Interactive Hotspots",
        "Dollhouse View",
        "Floor Plan Generation",
        "Measurement Tools",
        "Social Media Ready",
      ],
      image: "/real-estate_CYS.jpg",
    },
    {
      icon: "⚡",
      title: "Rapid Delivery",
      description:
        "Lightning-fast turnaround times to keep your listings competitive with expedited processing and priority handling.",
      features: [
        "24-Hour Standard Delivery",
        "Same-Day Rush Available",
        "Cloud-Based Gallery Access",
        "Multiple Format Options",
        "Direct MLS Upload",
        "Mobile-Optimized Delivery",
      ],
      image: "/real-estate_CYS.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B8860B]/5 to-transparent opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Real Estate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to showcase luxury properties and close deals
            faster. From stunning photography to immersive virtual experiences.
          </p>
        </motion.div>

        {/* Services Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === index
                  ? "bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {service.icon} {service.title}
            </button>
          ))}
        </motion.div>

        {/* Active Service Display */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Service Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">{services[activeService].icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {services[activeService].title}
              </h3>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {services[activeService].description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services[activeService].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#FFD700] to-[#DAA520] rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Image */}
          <div className="relative">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/10 via-transparent to-[#DAA520]/10" />
            </div>
          </div>
        </motion.div>

        {/* All Services Grid Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Complete Service Overview
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description.slice(0, 120)}...
                </p>
                <div className="text-sm text-[#FFD700]">
                  {service.features.length} key features included
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            Our Streamlined Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Book & Plan",
                desc: "Schedule shoot and discuss requirements",
              },
              {
                step: "2",
                title: "Capture",
                desc: "Professional on-site photography and filming",
              },
              {
                step: "3",
                title: "Edit & Enhance",
                desc: "Professional post-production and staging",
              },
              {
                step: "4",
                title: "Deliver",
                desc: "Fast delivery via secure cloud gallery",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#FFD700] to-transparent transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealEstateServices;
