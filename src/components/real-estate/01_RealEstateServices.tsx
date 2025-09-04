import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  House,
  Video,
  Drone,
  Rotate3d,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const RealEstateServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Camera />,
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
      icon: <Video />,
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
      icon: <Drone />,
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
      icon: <House />,
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
      icon: <Rotate3d />,
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
  ];

  return (
    <section className="py-24 z-9 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8E6B0F]/5 to-transparent opacity-40" />

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
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
          className="flex items-center justify-center gap-4 mb-16"
        >
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === index
                  ? "bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {service.icon}
              <span>{service.title}</span>
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
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {services[activeService].title}
            </h3>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {services[activeService].description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services[activeService].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#EDC577] to-[#C89B2C] rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-6">
              <Link
                href="#services"
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#EDC577]/30 transition-all duration-300 hover:scale-105"
              >
                Explore Pricing
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center px-6 py-2 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:border-[#EDC577] hover:bg-[#EDC577]/10 transition-all duration-300"
              >
                See More
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#8E6B0F]/10 via-transparent to-[#C89B2C]/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealEstateServices;
